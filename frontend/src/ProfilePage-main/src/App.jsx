import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomeProfile from "./components/Profile/HomeProfile";
import LearningProfile from "./components/Profile/LearningProfile";
import AnalyticsProfile from './components/Profile/AnalyticsProfile';
import Certifications from "./components/Profile/Certifications";
import SkillCentreNavbar from './components/SkillCentreNavbar';
function App() {
  
  return (
    <BrowserRouter>
    <SkillCentreNavbar />
    <Routes>
      {/* <Route path='/' element={<HomeProfile />}></Route> */}
      <Route path="/SkillCentre/profile" element={<HomeProfile />} />
			<Route path="/SkillCentre/profile/learnings" element={<LearningProfile />} />
			<Route path="/SkillCentre/profile/analytics" element={<AnalyticsProfile />} />
			<Route path="/SkillCentre/profile/certifications" element={<Certifications />} />
       
    </Routes>
    </BrowserRouter>
 )
}

export default App