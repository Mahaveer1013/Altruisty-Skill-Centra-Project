import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SkillCentre from './pages/SkillCentre';
import Message from './components/community/components/Message';
import Community from './components/community/components/Community';
import Collab from "./components/community/components/Collab";
import Notification from './components/community/components/Notification';
import Comments from './components/community/components/Comments';
import Teams from './components/community/components/Teams';
import CreateTeam from './components/community/components/CreateTeam';
import Network from './components/community/components/Network';
import Joined from "./components/Training/components/intro/Joined"
import Question from "./components/Training/components/Question/Question"
import Assignment from './components/Training/components/Assignment/Assignment';
import CodeEditor from './components/Training/components/Question/CodeEditor';
import { AuthProvider, useAuth } from './AuthContext';
import OverView from './components/Training/components/full_stack/OverView';
import FullStack from './components/Training/components/course/FullStack';
import GmailLogin from './pages/GmailLogin';
import Sidebar from './components/SideBar';
import HomeProfile from './components/Profile/components/HomeProfile';
import LearningProfile from './components/Profile/components/LearningProfile';
import AnalyticsProfile from './components/Profile/components/AnalyticsProfile';
import Certifications from './components/Profile/components/Certifications';
import Currentstudents from './components/Internship/pages/Currentstudents';
import Current from './components/Internship/pages/Current';
import Mainpage from './components/Internship/pages/Mainpage';
import StudentDetails from './components/Internship/pages/StudentDetails';
import Profileattribute from './components/Internship/pages/Profileattribute';
import Subscription from './components/Internship/pages/Subscription';
import FlashMessage from './components/FlashMessage';
import DomainPage from './components/Internship/componenets/DomainPage/DomainPage';
import CircularChart from './components/Internship/componenets/Explore/CircularChart';
import CourseDetails from './components/Internship/componenets/CourseDetails/CourseDetails';
import Explore from './components/Internship/componenets/Explore/Explore';
import ProcedureSteps from './components/Internship/componenets/internDetail/ProcedureSteps';
import InternDetail from './components/Internship/componenets/internDetail/InternDetail';
import HomePage from './components/Internship/componenets/HomePage/HomePage';
import ProjectPage from './components/Projects/components/ProjectPage';
import CoursePlans from './components/Internship/componenets/CoursePlans/CoursePlans';
// import ProjectPage from './components/Projects/components/ProjectPage';
// import Basic from './components/Projects/components/Routes/Basic';
// import Premium from './components/Projects/components/Routes/Premium';
// import Fullstack from './components/Projects/components/Routes/Fullstack';
import DayDetail from './components/Internship/componenets/Explore/DayDetail';
import { InternProvider } from './components/Internship/InternContext';
import DetailedCoursePlans from "./components/Internship/componenets/CoursePlans/DetailedCoursePlans"
import First_page from './components/Internship/componenets/First_page';
/* import RegistorForm from './components/Projects/components/RegistorForm'; */
import RegisterForm from './components/Internship/componenets/RegisterForm'
import OverallStudents from './components/Internship/pages/OverallStudents';
import Previous from './components/Internship/pages/Previous';
import Nextbatch from './components/Internship/pages/Nextbatch';
import Students from './components/Internship/pages/Students';
import Paymentdetails from './components/Internship/pages/Paymentdetails';
import AdminMain from './components/Internship/pages/Training/AdminMain';
import PreviousPlan from "./components/Internship/pages/Training/PreviousPlan"
import CurrentPlan from './components/Internship/pages/Training/CurrentPlan'
import Overallplan from './components/Internship/pages/Training/Overallplan';
import Mentor from './components/Internship/pages/Training/Mentor';
import TrainingProcedure from './components/Internship/componenets/HomePage/TrainingProcedure';

function Main() {
  const { isSidebar } = useAuth();

  const width = isSidebar ? 'calc(100% - 250px)' : 'calc(100% - 60px)';

  return (
    <>
      <Sidebar />
      <FlashMessage/>
      <main className={(isSidebar ? 'hidden md:left-[250px] md:block' : 'left-[60px]') + ' absolute top-16 transition-all duration-200'} style={{ width: width }}>
        <Routes>
          <Route path="/" element={<SkillCentre />} />
          <Route path="/login" element={<GmailLogin />} />

          <Route path='/training/' element={<Joined />} />
          <Route path='/training/question/' element={<Question />} />
          <Route path='/training/full_Stack/' element={<OverView />} />
          <Route path='/training/course_details/' element={<FullStack />} />
          <Route path='/training/assignment/' element={<Assignment />} />
          <Route path='/training/codeEditor/' element={<CodeEditor />} />

          <Route path="/community" element={<Community />} />
          <Route path="/community/messages" element={<Message />} />
          <Route path="/community/colloboration/" element={<Collab />} />
          <Route path="/community/notification/" element={<Notification />} />
          <Route path="/community/comments/" element={<Comments />} />
          <Route path="/community/colloboration/teams" element={<Teams />} />
          <Route path="/community/colloboration/createTeams" element={<CreateTeam />} />
          <Route path="/community/network" element={<Network />} />

          <Route path="/profile" element={<HomeProfile />} />
          <Route path="/profile/learnings" element={<LearningProfile />} />
          <Route path="/profile/analytics" element={<AnalyticsProfile />} />
          <Route path="/profile/certifications" element={<Certifications />} />

          <Route path='/CrntStudents' element={<Currentstudents />} />
          <Route path='/OverallStudents' element={<OverallStudents />} />
          {/* <Route path='/CrntStudents/Current' element={<Current />} /> */}
          <Route path='/Previous' element={<Previous />} />
          <Route path='/Nextbatch' element={<Nextbatch />} />

          <Route path='/Students/:id' element={<Students />} />
          <Route path='/Mainpage' element={<Mainpage />} />
          <Route path='/StudentDetails' element={<StudentDetails />} />
          <Route path='/Profileattribute' element={<Profileattribute />} />
          <Route path='/Subscription' element={<Subscription />} />
          <Route path='/Payment' element={<Paymentdetails />} />

      <Route path='/Training/Main' element={<AdminMain />}/>
      <Route path='/Training/PreviousPlan' element={<PreviousPlan />} />
      <Route path='/Training/CurrentPlan' element={<CurrentPlan />} />
      <Route path='/Training/OverallPlan' element={<Overallplan />} />
      <Route path='/Mentor' element={<Mentor/>} />
        



          <Route path= '/Internships' element={<First_page />} />
          <Route path='/RegisterForm' element={<RegisterForm />} />
          <Route path= '/Internships/Projects' element={<ProcedureSteps />} />
          <Route path= '/Internships/Homepage' element={<HomePage />} />
          <Route path='/training/Internships/homepage' element={<TrainingProcedure />} />
          <Route path= '/Internships/Homepage/InternDetails' element={<InternDetail />} />
          <Route path='/Internships/Homepage/InternDetails/DomainPage' element={<DomainPage/>}/>
          <Route path= '/Internships/Homepage/InternDetails/DomainPage/CourseDetails' element={<CourseDetails />} />
          <Route path= '/Internships/InternDetails/DomainPage/CoursePlans/:id' element={<CoursePlans />} />
          {/* <Route path= '/Internships/Homepage/InternDetails/DomainPage/CoursePlans' element={<CoursePlans />} /> */}
          <Route path= '/Internships/Homepage/InternDetails/DomainPage/CourseDetails/DetailedCoursePlans' element={<DetailedCoursePlans />} />
          <Route path= '/Internships/Homepage/InternDetails/DomainPage/CourseDetails/Explore' element={<Explore />} />
          <Route path="/day/:day" element={<DayDetail />} />
          {/* <Route path='/Internships/Projects' element={<ProjectPage/>} />
          {/* <Route path= 'Learning/Internship' element={<HomePage />} />
          <Route path= '/Internships/InternDetails' element={<InternDetail />} />
          <Route path='/Internships/InternDetails/DomainPage' element={<DomainPage/>}/>
          <Route path= '/Internships/InternDetails/DomainPage/CourseDetails' element={<CourseDetails />} />
          
          <Route path= '/Internships/InternDetails/DomainPage/CourseDetails/CoursePlans' element={<CoursePlans />} />
          <Route path= '/Internships/InternDetails/DomainPage/CourseDetails/Explore' element={<Explore />} /> */}
          {/* <Route path='/Internships/Projects' element={<ProjectPage/>} />
          <Route path='/Internships/Projects/FullStack' element={<OverView/>} /> */}


          <Route path= '/Internships/MyInternship' element={<CircularChart />} />



          {/* <Route path="/projects" element={<ProjectPage />} />
          <Route path="/projects/fullstack/" element={<Fullstack />} />
          <Route path="/projects/fullstack/premium/:id" element={<Premium />} />
          <Route path="/projects/fullstack/basic/:id" element={<Basic />} />
          <Route path="/projects/fullstack/adv/:id" element={<Advanced />} />  */}

            {/* Intern admin routes */}
            {/* <Route path='/CurrentStudents' element={<CurrentStudents />} />
            <Route path ='/OverallStudents' element={<OverallStudents />} />
            <Route path='/Previous' element={<Previous />}/>
            <Route path='/Nextbatch' element={<Nextbatch />}/>

            <Route path='/Students' element={<Students />}/>
           <Route path='/MainPage' element={<InternMainpage />} />
           <Route path='/Profileattribute' element={<Profileattribute />}/>
            <Route path='/InternAdmin/StudentDetails' element={<Studentdetails />} />
            <Route path='/InternAdmin/Profileattribute' element={<InternProfileattribute />} />
            <Route path='/InternAdmin/Subscription' element={<InternSubscription />} />
            <Route path='payment' element={<Paymentdetails />} />


            <Route path='/Training/Main' element={<InternMain />}/>
            <Route path='/Training/PreviousPlan' element={<PreviousPlan />}/>
            <Route path='/Training/CurrentPlan' element={<CurrentPlan/>}/>
            <Route path='/Training/OverallPlan' element={<Overallplan />}/>
            <Route path='/Mentor' element={<Mentor />}/> */}
          


        </Routes>
      </main>
    </>

  )
}


function App() {


  return (
    <AuthProvider>
      <Router>
        <Main />
      </Router>
    </AuthProvider>
  );
}

export default App;
