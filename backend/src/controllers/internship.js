import Domain from "../models/domain.model.js";
import Internship from "../models/internship.model.js";

export const registerInternship = async (req, res) => {
    const user = req.user
    const { duration, domain,transactionId } = req.body;
    if (![1, 2, 3, 4].includes(duration)) {
        return res.status(400).json({ message: 'Invalid internship type' });
    }
    const isDomain = await Domain.findById(domain)
    if (!isDomain) {
        return res.status(400).json({ message: 'Domain is required' });
    }
    const existingInternship = await Internship.findOne({ user: user._id, domain: domain });
    if (existingInternship) {
        return res.status(400).json({ message: 'Internship with this domain already exists for the user.' });
    }

    try {
        const newInternship = new Internship({
            user: user._id,
            internshipType:duration,
            transactionId,
            domain:domain,
            role:isDomain.title,
            progress: []
        });

        const savedInternship = await newInternship.save();
        console.log(savedInternship.domain)
        res.status(201).json(savedInternship);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error registering internship', error });
    }
}


export const getAllDomainData = async (req, res) => {
    try {
        const internships = await Domain.find()
        if (internships) {
            console.log(internships);
            res.status(200).json(internships);
        } else {
            res.status(404).json({ message: 'Domains Not Found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching internships', error });
    }
}


export const updateInternProgress = async (req, res) => {
    const { day, status, file } = req.body;
    const user = req.user;

    try {
        const internship = await Internship.find({user: user._id});

        if (!internship) {
            return res.status(404).json({ message: 'Internship not found' });
        }

        // Calculate the current day based on the created date
        const createdDate = new Date(internship.createdAt);
        const currentDate = new Date();
        const currentDay = Math.ceil((currentDate - createdDate) / (1000 * 60 * 60 * 24)); // Difference in days

        // Ensure the day is within the allowed range
        if (day < 1 || day > 90) {
            return res.status(400).json({ message: 'Day must be between 1 and 90' });
        }

        // Ensure the day is within 7 days of the current day
        if (day > currentDay + 7) {
            return res.status(400).json({ message: 'Progress can only be uploaded within 7 days of the current day' });
        }

        if (internship.progress.length === 0 && day !== 1) {
            return res.status(400).json({ message: 'First progress entry must start from day 1' });
        }

        const progressIndex = internship.progress.findIndex(p => p.day === day);

        if (progressIndex > -1) {
            // Update existing progress
            internship.progress[progressIndex].status = status;
            internship.progress[progressIndex].file = file;
        } else {
            // Add new progress entry
            internship.progress.push({ day, status, file });
        }

        // Sort progress by day to ensure order
        internship.progress.sort((a, b) => a.day - b.day);

        await internship.save();

        res.status(200).json(internship.progress);
    } catch (error) {
        res.status(500).json({ message: 'Error updating internship progress', error });
    }
};
export const getInternDetails = async(req,res)=>
{
    try
    {
        const user = req.user;
        const internship = await Internship.find({user: user._id});
        if(!internship)
        {
            return res.status(400).json({msg:"intern not found"});
        }
        res.status(200).json(internship);
       
    }
    catch(err)
    {
        return res.status(500).json({message:"Error finding intern details"})
    }
}
const onAcceptIntern = async(req,res)=>
{
    try
    {

    }
    catch(err)
    {

    }
}