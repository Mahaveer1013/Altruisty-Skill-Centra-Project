import React from 'react';
import HomeImage from '../assets/online learning platform Altruisty 1.png';
import Online from '../assets/OnlineCourse.png';
import Training from '../assets/Training.png';
import Internship from '../assets/Internship.png';
import Job from '../assets/jobpreparation.png';
import Govt from '../assets/govtexampreparation.png';
import EntranceExam from '../assets/enteranceexampreparation.png';
import Softskill from '../assets/softskilldevelopment.png';
import Creativeskill from '../assets/creativeskills.png';
import CareerAdvancement from '../assets/careeradvancement.png';
import YoungWoman from '../assets/YoungWoman.png';
import Aptitude from '../assets/AptitudeTest.png';
import Quiz from '../assets/Onlinequiz.png';
import Unnamed from '../assets/Unnamed.png';
import Coding from '../assets/CodingChallenges.png';
import Design from '../assets/DesignChallenge.png';
import Hackathons from '../assets/Hackathons.png';
import YoungMan from '../assets/YoungMan.png';
import GirlWithHeadSet from '../assets/GirlWithHeadset.png';

function SkillCentre() {
    const offer1 = [
        { src: Job, title: 'Job Preparation' },
        { src: Govt, title: 'GOVT Exams Preparation' },
        { src: EntranceExam, title: 'Entrance exam Preparation' }
    ]

    const offer2 = [
        { src: Softskill, title: 'Softskill Development' },
        { src: Creativeskill, title: 'Creative Skills' },
        { src: CareerAdvancement, title: 'Career Advancement' }
    ]

    return (
        <div>
            {/* Landing Part */}
            <div className='font-poppins flex flex-col-reverse md:flex-row md:py-14 items-center py-7 md:px-10 px-4'>
                <div className='text-center md:text-left'>
                    <div className='font-bold text-3xl md:text-5xl'>
                        Unlocking potential through learning
                    </div>
                    <div className='text-2xl py-10'>
                        Achieve Your Next Learning Milestone or Career Advancement
                    </div>
                    <div className='flex justify-center md:justify-start'>
                        <button className='bg-[#F5CF6B] py-2 px-6 rounded-xl font-semibold hover:scale-105 transition-transform duration-300'>
                            Learn More
                        </button>
                    </div>
                </div>
                <div className='mt-8 md:mt-0 w-full max-w-2xl mx-auto'>
                    <img src={HomeImage} alt="HomeImage" className='w-full h-auto object-contain' />
                </div>
            </div>

            {/* 3 Cards */}
            <div className='flex flex-col md:flex-row gap-4 md:gap-8 mb-10 md:px-10 px-4'>
                {/* Card1 */}
                <div className='border-black border-2 p-5 w-full md:w-1/3 flex flex-col items-center justify-center h-[300px] rounded-2xl font-inter text-center hover:scale-105 transition-transform duration-300'>
                    <img src={Online} alt="Online" className='h-24 w-auto mb-4' />
                    <div className='font-bold text-lg'>
                        Online Courses
                    </div>
                    <div className='text-base'>
                        Learn, interact and participate from home
                    </div>
                </div>
                {/* Card2 */}
                <div className='border-black border-2 p-5 w-full md:w-1/3 flex flex-col items-center justify-center h-[300px] rounded-2xl font-inter text-center hover:scale-105 transition-transform duration-300'>
                    <img src={Training} alt="Training" className='h-24 w-auto mb-4' />
                    <div className='font-bold text-lg'>
                        Trainings
                    </div>
                    <div className='text-base'>
                        Keep engaged with mentor assistance during your learning
                    </div>
                </div>
                {/* Card3 */}
                <div className='border-black border-2 p-5 w-full md:w-1/3 flex flex-col items-center justify-center h-[300px] rounded-2xl font-inter text-center hover:scale-105 transition-transform duration-300'>
                    <img src={Internship} alt="Internship" className='h-24 w-auto mb-4' />
                    <div className='font-bold text-lg'>
                        Internships
                    </div>
                    <div className='text-base'>
                        Gain Insights with Mentor Support During Your Internship Journey
                    </div>
                </div>
            </div>

            {/* Our Offering */}
            <div className='px-2 md:pl-10 py-5 pr-0 bg-[#17212E] font-poppins'>
                <div className='font-bold text-3xl text-white pb-3'>
                    Our Offerings Include
                </div>
                <div className='flex flex-col md:flex-row gap-4 md:space-x-8'>
                    <div className='flex flex-wrap gap-4 md:w-1/2'>
                        {offer1.map((item, index) => (
                            <div key={index} className='bg-white p-4 rounded-lg flex flex-col items-center w-full md:w-80 h-[170px] hover:scale-105 transition-transform duration-300'>
                                <img src={item.src} alt={item.title} className='h-16 w-auto mb-2' />
                                <div className='font-semibold text-lg mb-2 text-center'>
                                    {item.title}
                                </div>
                                <div className='text-[#2B5FC3] hover:cursor-pointer text-center'>
                                    To learn more
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='flex flex-wrap gap-4 md:w-1/2 md:mr-0'>
                        {offer2.map((item, index) => (
                            <div key={index} className='bg-white p-4 rounded-lg flex flex-col items-center w-full md:w-80 h-[170px] hover:scale-105 transition-transform duration-300'>
                                <img src={item.src} alt={item.title} className='h-16 w-auto mb-2' />
                                <div className='font-semibold text-lg mb-2 text-center'>
                                    {item.title}
                                </div>
                                <div className='text-[#2B5FC3] hover:cursor-pointer text-center'>
                                    To learn more
                                </div>
                            </div>
                        ))}
                    </div>
                <div className="hidden md:flex justify-end mt-14">
                    <img src={YoungWoman} alt="YoungWoman" className="h-auto object-cover w-full" />
                </div> 
                </div>
            </div>

            {/* Challenges */}
            <div className='font-poppins py-10 md:px-10 px-4'>
                <div className='text-center text-3xl font-bold pb-10'>
                    Challenges
                </div>
                <div className='flex flex-col md:flex-row justify-center gap-4 md:gap-8'>
                    {/* Challenge Cards */}
                    {[
                        { src: Aptitude, title: 'Aptitude Tests' },
                        { src: Quiz, title: 'Online Quiz Challenge' },
                        { src: Unnamed, title: 'Unnamed Challenge' },
                        { src: Coding, title: 'Coding Challenge' },
                        { src: Design, title: 'Design Challenge' },
                        { src: Hackathons, title: 'Hackathons' }
                    ].map((item, index) => (
                        <div key={index} className='w-full md:w-1/3 flex flex-col items-center'>
                            <img src={item.src} alt={item.title} className='h-32 w-auto mb-2' />
                            <div className='font-bold text-lg'>{item.title}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* End Part */}
            <div className='flex flex-col items-center py-10'>
                <div className='text-center text-2xl md:text-3xl font-bold mb-4'>
                    Start Your Journey Now!
                </div>
                <div className='text-center text-lg mb-4'>
                    Dive into our vast collection of learning resources and challenges.
                </div>
                <button className='bg-[#F5CF6B] py-2 px-6 rounded-xl font-semibold hover:scale-105 transition-transform duration-300'>
                    Get Started
                </button>
                <div className='flex gap-4 mt-8'>
                    <img src={YoungMan} alt="YoungMan" className='h-48 w-auto object-cover' />
                    <img src={GirlWithHeadSet} alt="GirlWithHeadSet" className='h-48 w-auto object-cover' />
                </div>
            </div>
        </div>
    );
}

export default SkillCentre;





















// import React from 'react';
// import HomeImage from '../assets/online learning platform Altruisty 1.png';
// import Online from '../assets/OnlineCourse.png';
// import Project from '../assets/Project.png';
// import Training from '../assets/Training.png';
// import Internship from '../assets/Internship.png';
// import Job from '../assets/jobpreparation.png';
// import Govt from '../assets/govtexampreparation.png';
// import EntranceExam from '../assets/enteranceexampreparation.png';
// import Softskill from '../assets/softskilldevelopment.png';
// import Creativeskill from '../assets/creativeskills.png';
// import CareerAdvancement from '../assets/careeradvancement.png';
// import YoungWoman from '../assets/YoungWoman.png';
// import Aptitude from '../assets/AptitudeTest.png';
// import Quiz from '../assets/Onlinequiz.png';
// import Unnamed from '../assets/Unnamed.png';
// import Coding from '../assets/CodingChallenges.png';
// import Design from '../assets/DesignChallenge.png';
// import Hackathons from '../assets/Hackathons.png';
// import YoungMan from '../assets/YoungMan.png';
// import GirlWithHeadSet from '../assets/GirlWithHeadset.png';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../AuthContext';



// function SkillCentre() {

//     const navigate = useNavigate();
//     const { isLoggedIn } = useAuth();

//     const handleTakeNowClick = (redirectPath) => {
//         if (isLoggedIn) {
//             navigate(redirectPath);
//         } else {
//             navigate('/SkillCentreLogin', { state: { from: redirectPath } });
//         }
//     };

//   return (
//     <div className=''>
        
//         {/* Landing Part */}
//         <div className='font-poppins flex flex-col-reverse md:flex md:flex-row md:py-14 items-center py-7'>
//             <div className='mx-5'>
//                 <div className='font-bold text-3xl text-center md:text-start md:text-5xl'>
//                     Unlocking potential through learning
//                 </div>
//                 <div className='text-2xl py-10 text-center md:text-start'>
//                     Achieve Your Next Learning Milestone or Career Advancement
//                 </div>
//                 <div className='flex justify-center md:justify-normal'>
//                     <button className='bg-[#F5CF6B] py-1 px-5 rounded-xl font-semibold hover:scale-105 hover:translate duration-300'>Learn More</button>
//                 </div>
//             </div>
//             <div>
//                 <img src={HomeImage} alt="HomeImage" />
//             </div>
//         </div>


//         {/* 3 Cards */}
//         <div className='block md:flex mx-10 gap-2 items-center justify-center md:mx-10 md:gap-4 md:my-10'>
//             {/* Card1 */}
//             <div className='border-black border-2 p-5 w-1/3 h-[250px] flex items-center justify-center flex-col rounded-2xl font-inter text-center mx-5 my-2 md:my-0 hover:scale-105 hover:cursor-pointer transition duration-300'>
//                 <div className='flex items-center justify-center'>
//                     <img src={Online} alt="Online" height={100} width={100}/>
//                 </div>
//                 <div className='font-bold text-lg'>
//                     Online Courses
//                 </div>
//                 <div className='text-base'>
//                     Learn, interact and participate from home
//                 </div>
//             </div>
//             {/* Card2 */}
//             <div className='border-black border-2 p-5 w-1/3 h-[250px] flex items-center justify-center flex-col rounded-2xl font-inter text-center mx-5 my-2 md:my-0 hover:scale-105 hover:cursor-pointer transition duration-300'>
//                 <div className='flex items-center justify-center'>
//                     <img src={Training} alt="Training" height={100} width={100}/>
//                 </div>
//                 <div className='font-bold text-lg'>
//                     Trainings
//                 </div>
//                 <div className='text-base'>
//                     Keep engaged with mentor assistance during your learning
//                 </div>
//             </div>
//             {/* Card3 */}
//             <div className='border-black border-2 p-5 w-1/3 h-[250px] flex items-center justify-center flex-col rounded-2xl font-inter text-center mx-5 my-2 md:my-0 hover:scale-105 hover:cursor-pointer transition duration-300'>
//                 <div className='flex items-center justify-center'>
//                     <img src={Internship} alt="Internship" height={100} width={100}/>
//                 </div>
//                 <div className='font-bold text-lg'>
//                     Internships
//                 </div>
//                 <div className='text-base'>
//                     Gain Insights with Mentor Support During Your Internship Journey
//                 </div>
//             </div>
//         </div>

//         {/* Our Offering */}
//         <div className='px-5 md:px-10 py-5 bg-[#17212E] font-poppins'>
//             <div className='font-bold text-3xl text-white pb-3'>
//                 Our Offerings Include
//             </div>
//             <div className='block md:flex space-x-0 md:space-x-20'>
//                 <div>
//                     <div className='bg-white p-2 px-4 w-80 rounded-lg my-5 h-40 hover:scale-105 transition duration-300'>
//                         <div>
//                             <img src={Job} alt="Job" className='h-20' />
//                         </div>
//                         <div className='font-semibold text-xl my-2'>
//                             Job Preparation
//                         </div>
//                         <div className=' text-[#2B5FC3] hover:cursor-pointer'>
//                             To learn more
//                         </div>
//                     </div>


//                     <div className='bg-white p-2 px-4 w-80 rounded-lg my-5 h-40 hover:scale-105 transition duration-300'>
//                         <div>
//                             <img src={Govt} alt="Govt" className='h-20' />
//                         </div>
//                         <div className='font-semibold text-xl my-2'>
//                             GOVT Exams Preparation
//                         </div>
//                         <div className=' text-[#2B5FC3] hover:cursor-pointer'>
//                             To learn more
//                         </div>
//                     </div>


//                     <div className='bg-white p-2 px-4 w-80 rounded-lg my-5 h-40 hover:scale-105 transition duration-300'>
//                         <div>
//                             <img src={EntranceExam} alt="EntranceExam" className='h-20' />
//                         </div>
//                         <div className='font-semibold text-xl my-2'>
//                             Entrance exam Preparation
//                         </div>
//                         <div className=' text-[#2B5FC3] hover:cursor-pointer'>
//                             To learn more
//                         </div>
//                     </div>


//                 </div>

//                 <div>
//                     <div className='bg-white p-2 px-4 w-80 rounded-lg my-5 h-40 hover:scale-105 transition duration-300'>
//                         <div>
//                             <img src={Softskill} alt="Softskill"  className='h-20' />
//                         </div>
//                         <div className='font-semibold text-xl my-2'>
//                             Softskill Development
//                         </div>
//                         <div className=' text-[#2B5FC3] hover:cursor-pointer'>
//                             To learn more
//                         </div>
//                     </div>


//                     <div className='bg-white p-2 px-4 w-80 rounded-lg my-5 h-40 hover:scale-105 transition duration-300'>
//                         <div>
//                             <img src={Creativeskill} alt="Creativeskill" className='h-20' />
//                         </div>
                        
//                         <div className='font-semibold text-xl my-2'>
//                             Creative Skills
//                         </div>
//                         <div className=' text-[#2B5FC3] hover:cursor-pointer'>
//                             To learn more
//                         </div>
//                     </div>


//                     <div className='bg-white p-2 px-4 w-80 rounded-lg my-5 h-40 hover:scale-105 transition duration-300'>
//                         <div>
//                             <img src={CareerAdvancement} alt="CareerAdvancement" className='h-20' />
//                         </div>
//                         <div className='font-semibold text-xl my-2'>
//                             Career Advancement
//                         </div>
//                         <div className=' text-[#2B5FC3] hover:cursor-pointer'>
//                             To learn more
//                         </div>
//                     </div>
//                 </div>



//                 <div className="hidden md:flex">
//                     <img src={YoungWoman} alt="YoungWoman" className="h-96 w-96" />
//                 </div>


//             </div>
//         </div>
//         {/* Our Offering  End*/}

//         {/* Challenges */}
//         <div className='font-poppins py-10'>
//             <div className='text-center text-3xl font-bold pb-10'>
//                 Challenges
//             </div>
//             {/* Flex */}
//             <div className='block md:flex justify-center mx-5 md:space-x-16 pb-4'>
//                 {/* Card1 */}
//                 <div className='border-[#17212E] border-2 flex flex-col items-center justify-center px-5 rounded-2xl w-80 hover:scale-105 hover:cursor-pointer transition duration-300'>
//                     <div>
//                         <img src={Aptitude} alt="Aptitude" className='h-52 w-80 my-5' />
//                     </div>
//                     <div className='text-xl font-semibold my-5'>
//                         Aptitude Tests
//                     </div>
//                     <div>
//                         <button className='my-5 font-semibold bg-[#F5CF6B] px-5 py-1 rounded-lg hover:scale-105 hover:translate duration-300' onClick={() => handleTakeNowClick('/SkillCentreTake')}>Take now</button>
//                     </div>
//                 </div>
//                 {/* Card1 End */}
//                 {/* Card2 */}
//                 <div className='border-[#17212E] border-2 flex flex-col items-center justify-center my-5 md:my-0 px-5 rounded-2xl w-80 hover:scale-105 hover:cursor-pointer transition duration-300'>
//                     <div>
//                         <img src={Quiz} alt="Quiz" className='h-52 w-80 my-5' />
//                     </div>
//                     <div className='text-xl font-semibold my-5'>
//                         Online Quiz Challenge
//                     </div>
//                     <div>
//                         <button className='my-5 font-semibold bg-[#F5CF6B] px-5 py-1 rounded-lg hover:scale-105 hover:translate duration-300' onClick={() => handleTakeNowClick('/SkillCentreTake')}>Take now</button>
//                     </div>
//                 </div>
//                 {/* Card2 End */}
//                 {/* Card3 */}
//                 <div className='border-[#17212E] border-2 flex flex-col items-center justify-center my-5 md:my-0 px-5 rounded-2xl w-80 hover:scale-105 hover:cursor-pointer transition duration-300'>
//                     <div>
//                         <img src={Unnamed} alt="Unnamed" className='h-52 w-80 my-5' />
//                     </div>
//                     <div className='text-xl font-semibold my-5'>
//                         Online Quiz Challenge
//                     </div>
//                     <div>
//                         <button className='my-5 font-semibold bg-[#F5CF6B] px-5 py-1 rounded-lg hover:scale-105 hover:translate duration-300' onClick={() => handleTakeNowClick('/SkillCentreTake')}>Take now</button>
//                     </div>
//                 </div>
//                 {/* Card3 End */}
//             </div>
//             {/* Flex End */}

//             {/* Flex */}
//             <div className='block md:flex justify-center mx-5 md:space-x-16 my-0 md:py-4'>
//                 {/* Card1 */}
//                 <div className='border-[#17212E] border-2 flex flex-col items-center justify-center px-5 rounded-2xl w-80 hover:scale-105 hover:cursor-pointer transition duration-300'>
//                     <div>
//                         <img src={Coding} alt="Coding" className='h-52 w-80 my-5' />
//                     </div>
//                     <div className='text-xl font-semibold my-5'>
//                         Coding Challenge
//                     </div>
//                     <div>
//                         <button className='my-5 font-semibold bg-[#F5CF6B] px-5 py-1 rounded-lg hover:scale-105 hover:translate duration-300' onClick={() => handleTakeNowClick('/SkillCentreTake')}>Take now</button>
//                     </div>
//                 </div>
//                 {/* Card1 End */}
//                 {/* Card2 */}
//                 <div className='border-[#17212E] border-2 flex flex-col items-center justify-center my-5 md:my-0 px-5 rounded-2xl w-80 hover:scale-105 hover:cursor-pointer transition duration-300'>
//                     <div>
//                         <img src={Design} alt="Design" className='h-52 w-80 my-5' />
//                     </div>
//                     <div className='text-xl font-semibold my-5'>
//                         Design Challenge
//                     </div>
//                     <div>
//                         <button className='my-5 font-semibold bg-[#F5CF6B] px-5 py-1 rounded-lg hover:scale-105 hover:translate duration-300' onClick={() => handleTakeNowClick('/SkillCentreTake')}>Take now</button>
//                     </div>
//                 </div>
//                 {/* Card2 End */}
//                 {/* Card3 */}
//                 <div className='border-[#17212E] border-2 flex flex-col items-center justify-center my-5 md:my-0 px-5 rounded-2xl w-80 hover:scale-105 hover:cursor-pointer transition duration-300'>
//                     <div>
//                         <img src={Hackathons} alt="Hackathons" className='h-52 w-80 my-5' />
//                     </div>
//                     <div className='text-xl font-semibold my-5'>
//                         Hackathons
//                     </div>
//                     <div>
//                         <button className='my-5 font-semibold bg-[#F5CF6B] px-5 py-1 rounded-lg hover:scale-105 hover:translate duration-300' onClick={() => handleTakeNowClick('/SkillCentreTake')}>Take now</button>
//                     </div>
//                 </div>
//                 {/* Card3 End */}
//             </div>
//             {/* Flex End */}

//         </div>

//         {/* Challenges End */}

//         {/* Events */}
//         <div className='px-5 md:px-10 py-5 bg-[#17212E] font-poppins'>
//             <div className='font-bold text-3xl text-white pb-3'>
//                 Events
//             </div>
//             <div className='block md:flex md:space-x-20'>
//                 <div>
//                     <div className='bg-[#EDFFDE] p-2 px-4 w-80 rounded-lg my-5 h-40 hover:scale-105 transition duration-300'>
//                         <div>
//                             <img src={Job} alt="Job" className='h-20' />
//                         </div>
//                         <div className='font-semibold text-xl my-2'>
//                             Bootcamps
//                         </div>
//                         <div className='underline text-[#2B5FC3] hover:cursor-pointer'>
//                             To learn more
//                         </div>
//                     </div>


//                     <div className='bg-[#FFE9D4] p-2 px-4 w-80 rounded-lg my-5 h-40 hover:scale-105 transition duration-300'>
//                         <div>
//                             <img src={Govt} alt="Govt" className='h-20' />
//                         </div>
//                         <div className='font-semibold text-xl my-2'>
//                             Live Classes
//                         </div>
//                         <div className='underline text-[#2B5FC3] hover:cursor-pointer'>
//                             To learn more
//                         </div>
//                     </div>


//                 </div>

//                 <div>
//                     <div className='bg-[#F1E7F9] p-2 px-4 w-80 rounded-lg my-5 h-40 hover:scale-105 transition duration-300'>
//                         <div>
//                             <img src={Softskill} alt="Softskill"  className='h-20' />
//                         </div>
//                         <div className='font-semibold text-xl my-2'>
//                             Workshops
//                         </div>
//                         <div className='underline text-[#2B5FC3] hover:cursor-pointer'>
//                             To learn more
//                         </div>
//                     </div>


//                     <div className='bg-[#FEFFDD] p-2 px-4 w-80 rounded-lg my-5 h-40 hover:scale-105 transition duration-300'>
//                         <div>
//                             <img src={Creativeskill} alt="Creativeskill" className='h-20' />
//                         </div>
//                         <div className='font-semibold text-xl my-2'>
//                             Webinars
//                         </div>
//                         <div className='underline text-[#2B5FC3] hover:cursor-pointer'>
//                             To learn more
//                         </div>
//                     </div>


//                 </div>



//                 <div className="hidden md:flex">
//                     <img src={YoungMan} alt="YoungMan" className="h-96 w-96" />
//                 </div>


//             </div>
//         </div>
//         {/* Events  End*/}

//         {/* Stay In Touch */}
//         <div className="mt-40 mx-2 md:mx-20 mb-20">
//             <div className="relative bg-[#17212E] flex justify-center items-center py-8 px-6 rounded-2xl shadow-lg">
//                 <div className="absolute -top-32 left-0 md:-top-28 md:left-6 z-10">
//                     <img src={GirlWithHeadSet} alt="GirlWithHeadSet" className="w-40 h-40 md:w-64 md:h-64" />
//                 </div>
//                 <div className="md:ml-52 flex flex-col">
//                     <div className="md:text-4xl text-2xl font-semibold text-white">
//                         Stay in touch for Attractive <span className="text-[#F5CF6B]">Updates</span>!
//                     </div>
//                     <div className="flex items-center space-x-4 mt-4">
//                         <input
//                         type="email"
//                         className="bg-[#FAF2DE] px-2 w-44 md:w-[480px] py-1 rounded-lg"
//                         placeholder="Enter your email ID"
//                         />
//                         <button className="font-semibold bg-[#F5CF6B] px-5 py-1 rounded-lg hover:scale-105 transition duration-300">
//                         Subscribe
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default SkillCentre;