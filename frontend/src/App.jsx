import './App.css';
import { useLocation, Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from "./components/AuthContext"
import { useState, useEffect } from 'react';
import NavbarTemp from './UIcomp/NavbarTemp';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import SkillCentreNavbar from './UIcomp/SkillCentreNavbar';
import SkillCentre from './pages/SkillCentre';
import SkillCentreLogin from './pages/SkillCentreLogin';
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
import Over_View from './components/Training_pages/components/full_stack/Over_View';
import Full_Stack from './components/Training_pages/components/course/Full_Stack';
import Assignment from './components/Training_pages/components/Assignment/Assignment';
import CodeEditor from './components/Training_pages/components/Question/CodeEditor';
import Header from "./components/Training_pages/components/Header/Header"
function Main({ user }) {
  const location = useLocation();
  const isSkillCentreRoute = location.pathname.startsWith('/SkillCentre');
  const isSkillCentreLoginRoute = location.pathname === '/SkillCentreLogin';
  const isTrainingRoute = [
    '/skill_center/Training_program/',
    '/skill_center/Question/',
    '/skill_center/full_Stack/',
    '/skill_center/Course_details/',
    '/skill_center/Assignment/',
    '/skill_center/CodeEditor/'
  ].includes(location.pathname);

  const PrivateRoute = ({ children, ...rest }) => {
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
    <SkillCentreNavbar />
      {isTrainingRoute && <Header />}
      
      <Routes>
        <Route path="/SkillCentreLogin" element={<SkillCentreLogin />} />
        <Route path="/SkillCentre" element={<SkillCentre />} />
        <Route path="/SkillCentreTake" element={<PrivateRoute element={<SkillCentreTake />} />} />

        <Route path='/skill_center/Training_program/' element={<Joined/>}/>
         <Route path='/skill_center/Question/' element={<Question/>}/>
         <Route path='/skill_center/full_Stack/' element={<Over_View/>}/>
         <Route path='/skill_center/Course_details/' element={<Full_Stack/>}/>
         <Route path='/skill_center/Assignment/' element={<Assignment/>}/>
         <Route path='/skill_center/CodeEditor/' element={<CodeEditor/>}/>

           <Route path="/community" element={<Community />} />
        <Route path="/community/messages" element={<Message />} />
        <Route path="/community/colloboration/" element={<Collab />} />
        <Route path="/community/notification/" element={<Notification />} />
        <Route path="/community/comments/" element={<Comments />} />
        <Route path="/community/colloboration/teams" element={<Teams />} />
        <Route path="/community/colloboration/createTeams" element={<CreateTeam />} />
        <Route path="/community/netwrok" element={<Network />} />
    </>

  )
}


function App() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);


  return (
    <AuthProvider>
      <Router>
        <Main user={user} />
      </Router>
    </AuthProvider>
  );
}

export default App;
