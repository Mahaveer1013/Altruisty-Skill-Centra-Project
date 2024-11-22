
import Domain from "../models/domain.model.js";
import CourseSection from "../models/courseSection.js";
import data from '../../data.json' assert { type: 'json' };

console.log(data);

// Dummy static domain data
const domains = [
    { title: 'Web Development',
        description:'Web development internship that provides practical work experience and an introduction to crafting and enhancing web-based systems. This opportunity offers engaging challenges.',
        registered:0,
        availSlots:100
    },
    { title: 'UI/UX Design' ,
        description: 'UI/UX design internship that provides practical work experience and an introduction to crafting and an introduction to crafting and enhancing user experiences. This opportunity offers engaging challenges.',
        registered:0,
        availSlots:100
    },
    { title: 'AI/ML',
        description: 'AI/ML internship that provides practical work experience and an introduction to Artificial Intelligence and machine learning.This opportunity offers engaging challenges.',
        registered:0,
        availSlots:100,
     },
    {title: 'Data Science',
        description:'Data Science internship that provides practical work experience and an introduction to Data Analysis and machine learning.This opportunity offers engaging challenges.',
        registered:0,
        availSlots:100,
    },
    { title: 'Cyber Security',
        description:'Cyber Security internship that provides practical work experience and an introduction to Ethical Hacking.This opportunity offers engaging challenges.',
        registered:0,
        availSlots:100
     },
];
// This function will be called only once to load domain inside the db

export const insertDomains = async () => {
    try {
        // Check if the domain collection is empty
        const count = await Domain.countDocuments();
        if (count === 0) {
            // Insert the static domain data
            await Domain.insertMany(domains);
            console.log('Static domain data inserted successfully');
        } else {
            console.log('Static domain data already exists, skipping insertion');
        }
    } catch (error) {
        console.error('Error inserting static domain data:', error);
    }
};

export const insertCourses = async()=>
{
    try
    {
        const count = await CourseSection.countDocuments();
        if(count === 0)
        {
            await CourseSection.insertMany(data.sections);
            console.log('Static course data inserted successfully');
        }
        else {
            console.log('Static domain data already exists, skipping insertion');
        }
    }
    catch(err)
    {
        console.error('Error inserting static course data:', err);
    }
}
