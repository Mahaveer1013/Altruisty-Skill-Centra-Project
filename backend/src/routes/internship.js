
const db = mongoose.connection;

const internSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  country: String,
  city: String,
  countryCode: String,
  phoneNumber: String,
  domain: String,
  graduatingYear: String,
  collegeUniversity: String,
  whyHire: String,
  skills: String,
  department: String,
  year: String,
  linkedinProfile: String,
  githubUrl: String,
  duration: String,
  resumeLink: String,
});

const Intern = mongoose.model('Intern', internSchema);

const internDataSchema = new mongoose.Schema({
  regNo: String,
  name: String,
  contactNumber: String,
  emailId: String,
  location: String,
  college: String,
  year: String,
  department: String,
  domain: String,
  projectTitle: String,
  duration: String,
  startDate: String,
  endDate: String,
  offerLetter: String,
  certificate: String,
  status: String,
  lmol: String,
  lmcc: String,
  secondBatch: String,
  project: String,
  secondDuration: String,
  secondEndDate: String,
});

const InternData = mongoose.model('InternData', internDataSchema);

let data = [];
const filePath = path.resolve(__dirname, 'internships.xlsx');

try {
  const workbook = XLSX.readFile(filePath);
  const sheet_name_list = workbook.SheetNames;
  const sheet = workbook.Sheets[sheet_name_list[0]];
  data = XLSX.utils.sheet_to_json(sheet);
  console.log('Parsed Data:', data);
} catch (error) {
  console.error(`Error reading Excel file at ${filePath}:`, error);
}

app.post('/api/fetch-and-save', async (req, res) => {
  const { data } = req.body;
  console.log('Received body:', req.body);

  if (!Array.isArray(data) || data.length === 0) {
    return res.status(400).json({ message: 'Invalid data format or empty data' });
  }

  // Process headers and rows
  const headers = data[0];
  const rows = data.slice(1);

  console.log('Headers:', headers);
  console.log('Rows:', rows);

  // Create an array of objects based on headers and rows
  const internDataArray = rows.map(row => {
    let internData = {};
    headers.forEach((header, index) => {
      internData[header] = row[index];
    });
    return internData;
  });

  console.log('Processed intern data:', internDataArray);

  try {
    await InternData.insertMany(internDataArray);
    console.log('Data saved to database successfully');
    res.status(200).json({ message: 'Data processed and saved successfully' });
  } catch (error) {
    console.error('Error saving intern data:', error);
    res.status(500).json({ message: 'Error saving intern data', error: error.message });
  }
});

app.get('/', (req, res) => {
  res.json({ message: 'API is working' });
});

app.post('/api/interns', async (req, res) => {
  const {
    name,
    email,
    address,
    country,
    city,
    countryCode,
    phoneNumber,
    domain,
    graduatingYear,
    collegeUniversity,
    whyHire,
    skills,
    department,
    year,
    linkedinProfile,
    githubUrl,
    duration,
    resumeLink
  } = req.body;

  try {
    const internData = {
      name,
      email,
      address,
      country,
      city,
      countryCode,
      phoneNumber,
      domain,
      graduatingYear,
      collegeUniversity,
      whyHire,
      skills,
      department,
      year,
      linkedinProfile,
      githubUrl,
      duration,
      resumeLink
    };

    const newIntern = new Intern(internData);
    const savedIntern = await newIntern.save();

    console.log('Intern data saved successfully:', savedIntern);
    res.status(200).json({ message: 'Intern data saved successfully', intern: savedIntern });
  } catch (error) {
    console.error('Error saving intern data:', error);
    res.status(500).json({ message: 'Error saving intern data', error: error.message });
  }
});

app.get('/api/interns', async (req, res) => {
  try {
    const interns = await Intern.find();
    res.status(200).json(interns);
  } catch (error) {
    console.error('Error fetching interns:', error);
    res.status(500).json({ message: 'Error fetching interns', error: error.message });
  }
});

app.get('/api/intern/:registernumber', async (req, res) => {
  const regNo = req.params.registernumber;

  console.log(regNo);

  try {
    const scriptUrl = `https://script.google.com/macros/s/AKfycbyWFs10gd9v3LnAoDYcktlfTY1iA5iGtMrP9DMMeHPKnTv_VXDX5zmnI7sFiSw-NRNH/exec?regNo=${regNo}`;
    const response = await axios.get(scriptUrl);
    // console.log(response);

    if (response.data && response.data.length > 0) {
      res.status(200).json({ intern: response.data });
    } else {
      res.status(404).json({ message: 'Intern not found.' });
    }
  } catch (error) {
    console.error('Error finding intern data:', error);
    res.status(500).json({ message: 'Error finding intern data', error: error.message });
  }
});
