import User from "../models/user.model.js";

export const registerProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const IsUser = await User.findById(userId);

    if (!IsUser) {
      return res.status(400).json({ message: "User not found" });
    }

    const { username, PhoneNumber, CollegeName, github, LinkedIn, Portfolio, domain, ProfileBase64, Resume } = req.body;
    const updateFields = {};

    if (username) updateFields.username = username;
    if (PhoneNumber) updateFields.phone_number = PhoneNumber;
    if (CollegeName) updateFields.college = CollegeName;
    if (github) updateFields.github_link = github;
    if (LinkedIn) updateFields.linkedIn_link = LinkedIn;
    if (Portfolio) updateFields.Portfolio = Portfolio;
    if (domain) updateFields.Interest = domain;

    if (ProfileBase64) {
      updateFields.ProfilePicture = ProfileBase64;
    }

    const updateOperations = { $set: updateFields };

    if (Resume) {
      let resumeArray;
      try {
        console.log('Incoming Resume Data:', Resume);  // Log incoming Resume data
    
        // Parse if Resume is a string, otherwise use it as is
        resumeArray = Array.isArray(Resume) ? Resume : JSON.parse(Resume);
      } catch (error) {
        return res.status(400).json({ message: "Invalid Resume JSON format", error: error.message });
      }
    
      // Map the Resume data to match your schema
      const mappedResumeArray = resumeArray.map(doc => ({
        name: doc.name,  // Match your schema's 'name'
        url: doc.url,    // 'url' already matches
        mimeType: doc.mimeType,  // 'mimeType' matches
        size: doc.sizeBytes,  // Map 'sizeBytes' to 'size'
        driveId: doc.id,  // Map 'id' to 'driveId'
        userId: userId  // Assuming 'userId' comes from the logged-in user
      }));
    
      console.log('Mapped Resume Array:', mappedResumeArray);  // Log mapped Resume array for validation
    
      // Ensure the mapped array is valid
      const isValid = mappedResumeArray.every(doc => {
        const valid = doc.name && doc.url && doc.mimeType  && doc.driveId ;
        if (!valid) {
          console.log('Invalid Resume Object:', doc);  // Log the invalid object for debugging
        }
        return valid;
      });
    
      if (!isValid) {
        return res.status(400).json({ message: "Invalid Resume data" });
      }
    
      updateOperations.$push = { Resume: { $each: mappedResumeArray } };
    }
    

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updateOperations,
      { new: true, runValidators: true }
    );

    return res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error('Error updating profile:', error);
    return res.status(500).json({ message: "Error updating profile", error: error.message });
  }
};
