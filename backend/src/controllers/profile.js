import User from "../models/user.model.js";

export const registerProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const IsUser = await User.findById(userId);

    if (!IsUser) {
      return res.status(400).json({ message: "User not found" });
    }

    const { PhoneNumber, CollegeName, github, LinkedIn, Portfolio, domain, profile, Resume } = req.body;

    // Prepare the fields to update
    const updateFields = {};
    if (PhoneNumber) updateFields.phone_number = PhoneNumber;
    if (CollegeName) updateFields.college = CollegeName;
    if (github) updateFields.github_link = github;
    if (LinkedIn) updateFields.linkedIn_link = LinkedIn;
    if (Portfolio) updateFields.Portfolio = Portfolio;
    if (domain) updateFields.Interest = domain;
    if (profile) updateFields.ProfilePicture = profile;

    const updateOperations = { $set: updateFields };

    // If Resume is provided and is not null, push it to the Resume array
    if (Resume && Resume.length > 0) {
      updateOperations.$push = { Resume: { $each: Resume } };
    }

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
    return res.status(500).json({ message: "Error updating profile", error: error.message });
  }
};
