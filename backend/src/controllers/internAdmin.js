import Internship from "../models/internship.model.js";
import nodemailer from 'nodemailer'
import Domain from "../models/domain.model.js";
import User from "../models/user.model.js";

export const getInterns = async (req, res) => {
    try {
        // Fetch all internship data and populate 'user' field with 'name' and 'email'
        const data = await Internship.find()
        .populate('user', 'name email')
        .populate('domain','title')
        
        // Check if no data is found
        if (!data || data.length === 0) {
            return res.status(404).json({ msg: "No data found" });
        }
        
        // If data is found, return it with a 200 status
        return res.status(200).json(data);
    } catch (err) {
        // Log the error and return a 500 status for server errors
        console.error(err);
        return res.status(500).json({ error: "Server Error", details: err.message });
    }
};





export const handleAcceptIntern = async (req, res) => {
  try {
    const { id } = req.params;
    const isIntern = await Internship.findById(id)
      .populate('user', 'username email _id')
      .populate('domain', 'title');
    
    if (!isIntern) {
      return res.status(404).json({ msg: "Intern not found" });
    }

    if (isIntern.verification === "pending" || isIntern.verification === "rejected") {
      if (!isIntern.user || !isIntern.user.email) {
        return res.status(400).json({ msg: "User email not found" });
      }

      // Change verification status
      isIntern.verification = "accepted";

      await isIntern.save(); // Save the updated internship

      // Email Configuration
      const config = {
        service: "gmail",
        auth: {
          user: "rahuljbhuvi@gmail.com",
          pass: "wged jlsj awgj reip",
        },
      };

      const transporter = nodemailer.createTransport(config);
      const htmlContent = `
        <h1>Hi ${isIntern.user.email},</h1>
        <p>Thanks for registering as an Intern at Altruisty. You have successfully registered for the internship in <strong>${isIntern.domain.title}</strong>.</p>
        <p>Go login and start your internship.</p>
        <p>If you have any queries, contact +91 1234567890.</p>
      `;

      const message = {
        from: 'rahuljbhuvi@gmail.com',
        to: isIntern.user.email,
        subject: "Thanks for registering Intern at Altruisty",
        html: htmlContent,
      };

      const domain = await Domain.findOne({ title: isIntern.domain.title });

      if (!domain) {
        console.log('Domain not found');
        return;
      }

      // Increase registered count for the domain
      domain.registered += 1;
      await domain.save();

      // Calculate internship progress dates
      const internshipData = await Internship.find({ user: isIntern._id });

      // Loop through each internship and update progress
      for (let internship of internshipData) {
        if (internship.internshipType === 1) {
          internship.progress.startAt = new Date();
          const endAt = new Date(internship.progress.startAt);
          endAt.setMonth(endAt.getMonth() + 0.5); // 15 days
          internship.progress.EndAt = endAt;
        } else if (internship.internshipType === 2) {
          internship.progress.startAt = new Date();
          const endAt = new Date(internship.progress.startAt);
          endAt.setMonth(endAt.getMonth() + 1); // 1 month
          internship.progress.EndAt = endAt;
        } else if (internship.internshipType === 3) {
          internship.progress.startAt = new Date();
          const endAt = new Date(internship.progress.startAt);
          endAt.setMonth(endAt.getMonth() + 2); // 2 months
          internship.progress.EndAt = endAt;
        } else if (internship.internshipType === 4) {
          internship.progress.startAt = new Date();
          const endAt = new Date(internship.progress.startAt);
          endAt.setMonth(endAt.getMonth() + 3); // 3 months
          internship.progress.EndAt = endAt;
        }

        // Save the updated internship
        await internship.save();
      }

      // Send email after successfully updating internship progress and domain registration
      await transporter.sendMail(message);

      return res.status(201).json({ msg: "Intern accepted successfully" });
    } else {
      return res.status(400).json({ msg: "Already accepted offer letter" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};


export const getStudentsDomain = async(req,res)=>
{
    try
    {
        const domain = await Domain.find();
        return res.status(201).json(domain);
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({msg:"Internal Server Error"})
    }
}

export const getdomainStudents = async (req, res) => {
    try {
        const { id } = req.params; 

        console.log(id);
        const data = await Internship.find({domain:id})
            .populate('user', 'email username _id')  
            .select('role user');  

        if (!data || data.length === 0) {
            return res.status(404).json({ msg: "Data not found" });
        }

        return res.status(200).json(data); 
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Internal Server Error" });
    }
};

export const handleRejectIntern = async(req,res)=>
{
    try
    {
        const {id} = req.params;
        const isIntern = await Internship.findById(id)
        .populate('user', 'username email _id')
        .populate('domain', 'title')
        if(!isIntern)
        {
            return res.status(404).json({msg:"Intern not found"});
        }
        if(isIntern.verification === "pending" || isIntern.verification === "accepted")
        {
            if (!isIntern.user || !isIntern.user.email) {
                return res.status(400).json({ msg: "User email not found" });
            }
            isIntern.verification = "rejected";
        }
        await isIntern.save();
        let config = {
            service:"gmail",
            auth:{
                user:"rahuljbhuvi@gmail.com",
                pass:"wged jlsj awgj reip"
            }
        }
        let transporter = nodemailer.createTransport(config);
        let htmlContent = `
        <h1>Hi ${isIntern.user.email},</h1>
                <p>Thanks for registering as an Intern at Altruisty. But some issues you have been rejected as doing Intern at Altruisty. <strong>Kindly contact our team </strong></p>

                
            `;

            let message = {
                from:'rahuljbhuvi@gmail.com',
                to:isIntern.user.email,
                subject:"Regarding Intern at Altruisty",
                html:htmlContent
            }
            await transporter.sendMail(message);
            return res.status(201).json({msg:"Intern rejected sucessfully"})
    
        

    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({msg:"Internal Server Error"})
    }
}