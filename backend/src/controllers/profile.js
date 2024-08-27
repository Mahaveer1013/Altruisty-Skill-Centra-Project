import User from "../models/user.model.js";

export const registerProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const IsUser = await User.findById(userId);

    if (!IsUser) {
      return res.status(400).json({ message: "User not found" });
    }

    const { PhoneNumber, CollegeName, github, LinkedIn, Portfolio, domain, ProfileBase64, Resume } = req.body;

    console.log('Request Body:', req.body);

    // Prepare the fields to update
    const updateFields = {};
    if (PhoneNumber) updateFields.phone_number = PhoneNumber;
    if (CollegeName) updateFields.college = CollegeName;
    if (github) updateFields.github_link = github;
    if (LinkedIn) updateFields.linkedIn_link = LinkedIn;
    if (Portfolio) updateFields.portfolio = Portfolio;  // Ensure field names match your schema
    if (domain) updateFields.Interest = domain;

    if (ProfileBase64) {
      // Handle base64 image data if available
      updateFields.ProfilePicture = ProfileBase64;
    }

    console.log('Update Fields:', updateFields);

    const updateOperations = { $set: updateFields };

    // If Resume is provided and is not empty, push it to the Resume array
    if (Resume) {
      const resumeArray = JSON.parse(Resume); // Parse JSON string to array
      if (Array.isArray(resumeArray) && resumeArray.length > 0) {
        updateOperations.$push = { Resume: { $each: resumeArray } };
      }
    }

    console.log('Update Operations:', updateOperations);

    // Update user profile
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
