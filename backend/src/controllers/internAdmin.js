import Internship from "../models/internship.model.js";
import nodemailer from 'nodemailer'
import Domain from "../models/domain.model.js";
import User from "../models/user.model.js";
import Internship from "../models/internship.model.js";
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



export const handleAcceptIntern = async(req,res)=>
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
       if(isIntern.verification === "pending" || isIntern.verification === "rejected")
       {
        if (!isIntern.user || !isIntern.user.email) {
            return res.status(400).json({ msg: "User email not found" });
        }
        isIntern.verification = "accepted";
        

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
                <p>Thanks for registering as an Intern at Altruisty. You have successfully registered for the internship in <strong>${isIntern.domain.title}</strong>.</p>
                <p>Go login and start your internship.</p>
                <p>If you have any queries, contact +91 1234567890.</p>
            `;

        let message = {
            from:'rahuljbhuvi@gmail.com',
            to:isIntern.user.email,
            subject:"Thanks for registering Intern at Altruisty",
            html:htmlContent
        }
        const domain = await Domain.findOne({ title: isIntern.domain.title });
        
        if (!domain) {
            console.log('Domain not found');
            return;
        }    
       
        const data = await Internship.find({user:isIntern._id});
        if(!data)
        {
            return res.status(404).json({msg:"Intern not found"});
        }
        if(data.InternshipType === 1)
        {
            data.progress.startAt = new Date(); 

            
            const endAt = new Date(data.progress.startAt); 
            endAt.setMonth(endAt.getDay() + 15); 
        
           
            data.progress.EndAt = endAt;
        }
        else if(data.InternshipType === 2)
        {
            data.progress.startAt = new Date(); 

            
            const endAt = new Date(data.progress.startAt); 
            endAt.setMonth(endAt.getMonth() + 1); 
        
           
            data.progress.EndAt = endAt;
        }
        else if(data.InternshipType === 3)
        {
            data.progress.startAt = new Date(); 

            
            const endAt = new Date(data.progress.startAt); 
            endAt.setMonth(endAt.getMonth() + 2); 
        
           
            data.progress.EndAt = endAt;
        }
        else if(data.InternshipType === 4)
        {
            data.progress.startAt = new Date(); 

            
            const endAt = new Date(data.progress.startAt); 
            endAt.setMonth(endAt.getMonth() + 3); 
            data.progress.EndAt = endAt;
        }
        await data.save();
        domain.registered += 1;
        await domain.save();
        await transporter.sendMail(message);
        return res.status(201).json({msg:"Intern accepted successfully"});
       }
       else
       {
        return res.status(400).json({msg:"Already accepted offer letter"})
       }
    
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({msg:"Internal Server Error"})
    }
}

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
