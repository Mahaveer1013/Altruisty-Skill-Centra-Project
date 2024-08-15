import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SkillCentreNavbar from './components/SkillCentreNavbar';
import Community from "./components/Community/Community"
import Collab from "./components/Community/Collab";
import Notification from "./components/Community/Notification";
import Comments from "./components/Community/Comments";
import Teams from "./components/Community/Teams";
import CreateTeam from "./components/Community/CreateTeam";
import Network from "./components/Community/Network";
import Message from "./components/Community/Message"


function App() {

	return (
		<BrowserRouter>

			<Routes>
				<Route path="/" element={<Community />} />
				<Route path="/SkillCentra/community/messages/" element={<Message />} />
				<Route path="/SkillCentra/community/colloboration/" element={<Collab />} />
				<Route path="/SkillCentra/community/notification/" element={<Notification />} />
				<Route path="/SkillCentra/community/comments/" element={<Comments />} />
				<Route path="/SkillCentra/community/colloboration/teams" element={<Teams />} />
				<Route path="/SkillCentra/community/colloboration/createTeams" element={<CreateTeam />} />
				<Route path="/SkillCentra/community/netwrok" element={<Network />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App