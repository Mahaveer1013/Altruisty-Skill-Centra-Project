import './App.css';
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SkillCentre from './pages/SkillCentre';
import Message from './components/Community/Message';
import Community from './components/Community/Community';
import Collab from "./components/Community/Collab";
import Notification from './components/Community/Notification';
import Comments from './components/Community/Comments';
import Teams from './components/Community/Teams';
import CreateTeam from './components/Community/CreateTeam';
import Network from './components/Community/Network';
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
// import ProjectPage from './components/Projects/components/ProjectPage';
// import Basic from './components/Projects/components/Routes/Basic';
// import Premium from './components/Projects/components/Routes/Premium';
// import Fullstack from './components/Projects/components/Routes/Fullstack';

function Main() {
  const { isSidebar } = useAuth();

  const width = isSidebar ? 'calc(100% - 250px)' : 'calc(100% - 60px)';

  return (
    <>
      {<Sidebar />}
      <main className={(isSidebar ? 'hidden md:left-[250px] md:block' : 'left-[60px]') + ' absolute top-16 transition-all duration-200'} style={{ width: width }}>
        <Routes>
          <Route path="/" element={<SkillCentre />} />
          <Route path="/login" element={<GmailLogin />} />
          {/* <Route path="/SkillCentreTake" element={<PrivateRoute element={<SkillCentreTake />} />} /> */}

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
          <Route path='/CrntStudents/Current' element={<Current />} />
          <Route path='/Mainpage' element={<Mainpage />} />
          <Route path='/StudentDetails' element={<StudentDetails />} />
          <Route path='/Profileattribute' element={<Profileattribute />} />
          <Route path='/Subscription' element={<Subscription />} />

          {/* <Route path="/projects" element={<ProjectPage />} />
          <Route path="/projects/fullstack/" element={<Fullstack />} />
          <Route path="/projects/fullstack/premium/:id" element={<Premium />} />
          <Route path="/projects/fullstack/basic/:id" element={<Basic />} />
          <Route path="/projects/fullstack/adv/:id" element={<Advanced />} /> */}

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
