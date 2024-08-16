import './App.css';
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SkillCentre from './pages/SkillCentre';
import SkillCentreTake from './pages/SkillCentreTake';
import Message from './components/Community/Message';
import Community from './components/Community/Community';
import Collab from "./components/Community/Collab";
import Notification from './components/Community/Notification';
import Comments from './components/Community/Comments';
import Teams from './components/Community/Teams';
import CreateTeam from './components/Community/CreateTeam';
import Network from './components/Community/Network';
import Joined from "./components/Training_pages/components/intro/Joined"
import Question from "./components/Training_pages/components/Question/Question"
import Assignment from './components/Training_pages/components/Assignment/Assignment';
import CodeEditor from './components/Training_pages/components/Question/CodeEditor';
import { AuthProvider, useAuth } from './AuthContext';
import OverView from './components/Training_pages/components/full_stack/OverView';
import FullStack from './components/Training_pages/components/course/FullStack';
import GmailLogin from './pages/GmailLogin';
import Sidebar from './components/SideBar';
import HomeProfile from './components/Profile/components/Profile/HomeProfile';
import LearningProfile from './components/Profile/components/Profile/LearningProfile';
import AnalyticsProfile from './components/Profile/components/Profile/AnalyticsProfile';
import Certifications from './components/Profile/components/Profile/Certifications';


function Main() {
  const { isSidebar } = useAuth();

  const width = isSidebar ? 'calc(100% - 250px)' : 'calc(100% - 60px)';

  const PrivateRoute = ({ children }) => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? (
      <>
        {children}
      </>
    ) : (
      <Navigate to="/SkillCentreLogin" />
    );
  }
  return (
    <>
      {<Sidebar />}
      <main className={(isSidebar ? 'hidden md:left-[250px] md:block' : 'left-[60px]') + ' absolute top-16 transition-all duration-200'} style={{ width: width }}>
        <Routes>
          <Route path="/" element={<SkillCentre />} />
          <Route path="/SkillCentreLogin" element={<GmailLogin />} />
          <Route path="/SkillCentreTake" element={<PrivateRoute element={<SkillCentreTake />} />} />

          <Route path='/training/Training_program/' element={<Joined />} />
          <Route path='/training/Question/' element={<Question />} />
          <Route path='/training/full_Stack/' element={<OverView />} />
          <Route path='/training/Course_details/' element={<FullStack />} />
          <Route path='/training/Assignment/' element={<Assignment />} />
          <Route path='/training/CodeEditor/' element={<CodeEditor />} />

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
