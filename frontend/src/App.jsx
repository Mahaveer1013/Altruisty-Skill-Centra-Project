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
import Collab from './components/Community/Collab';
import Notification from './components/Community/Notification';
import Teams from './components/Community/Teams';
import Comments from './components/Community/Comments';
import CreateTeam from './components/Community/CreateTeam';
import Network from './components/Community/Network';
import Community from './components/Community/Community';



function Main({ user }) {
  const location = useLocation();
  const isSkillCentreRoute = location.pathname.startsWith('/SkillCentre');
  const isSkillCentreLoginRoute = location.pathname === '/SkillCentreLogin';

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
      <Routes>
        <Route path="/SkillCentreLogin" element={<SkillCentreLogin />} />
        <Route path="/SkillCentre" element={<SkillCentre />} />
        <Route path="/SkillCentreTake" element={<PrivateRoute element={<SkillCentreTake />} />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/messages" element={<Message />} />
        <Route path="/community/colloboration/" element={<Collab />} />
        <Route path="/community/notification/" element={<Notification />} />
        <Route path="/community/comments/" element={<Comments />} />
        <Route path="/community/colloboration/teams" element={<Teams />} />
        <Route path="/community/colloboration/createTeams" element={<CreateTeam />} />
        <Route path="/community/netwrok" element={<Network />} />
      </Routes>
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
