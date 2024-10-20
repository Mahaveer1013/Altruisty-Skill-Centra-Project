import User from "../models/user.model.js";

export const getProjects = async (req, res) => {
  try {
    const userId = req.user.id;
    const IsUser = await User.findById(userId);

    if (!IsUser) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Check if user has projects
    if (!IsUser.Projects || IsUser.Projects.length === 0) {
      return res.status(404).json({ msg: "User has no projects" });
    }

    // Return the user's projects
    return res.status(200).json(IsUser.Projects);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const addProjects = async (req, res) => {
    try {
      const userId = req.user.id;
      const IsUser = await User.findById(userId);
  
      if (!IsUser) {
        return res.status(404).json({ msg: "User not found" });
      }
  
      const { ProjectName, ProjectDescription, ProjectGithub, ProjectLink} = req.body;
  
      // Check if a project with the same name already exists
      const filteredNames = IsUser.Projects.filter((proj) => proj.ProjectName === ProjectName);
      if (filteredNames.length > 0) {
        return res.status(400).json({ msg: "Project with this name already exists, try a different one" });
      }
  
     
      const newProject = {
        ProjectName,
        ProjectDescription,
        ProjectGithub,
        ProjectLink,
       
      };
  
    
      IsUser.Projects.push(newProject);
  
      
      await IsUser.save();
  
      return res.status(201).json({ msg: "Project added successfully", project: newProject });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Internal Server Error" });
    }
  };
  