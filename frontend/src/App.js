import logo from './logo.svg';
import './App.css';
import { useLocation,Navigate,BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {AuthProvider,useAuth} from "./components/AuthContext"
import { useState,useEffect } from 'react';
import NavbarTemp from './UIcomp/NavbarTemp';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import SkillCentreNavbar from './UIcomp/SkillCentreNavbar';
import SkillCentre from './pages/SkillCentre';
import SkillCentreLogin from './pages/SkillCentreLogin';
import SkillCentreTake from './pages/SkillCentreTake';
function Main({user})
{
  const location = useLocation();
	const isSkillCentreRoute = location.pathname.startsWith('/SkillCentre');
	const isSkillCentreLoginRoute = location.pathname === '/SkillCentreLogin';

	const PrivateRoute = ({ element, ...rest }) => {
        const { isLoggedIn } = useAuth();
        return isLoggedIn ? (
            <>
                {element}
            </>
        ) : (
            <Navigate to="/SkillCentreLogin" />
        );
      }
      return (
      <>
      {!isSkillCentreLoginRoute && (isSkillCentreRoute ? <SkillCentreNavbar /> : <NavbarTemp />)}
      <Routes>
      <Route path="/SkillCentreLogin" element={<SkillCentreLogin />} />
                <Route path="/SkillCentre" element={<SkillCentre /> }/>
                <Route path="/SkillCentreTake" element={<PrivateRoute element={<SkillCentreTake />} />} />
      </Routes>
      </>

      )
}


function App(){
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
