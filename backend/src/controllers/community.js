import Community from "../models/community.model.js";

export const createCommunity = async (req, res) => {
    const { communityName } = req.body;
    const uniqueCode = crypto.randomBytes(4).toString('hex'); // Generate a unique code
    console.log(communityName, uniqueCode);

    try {
        // Check if a community with the same name already exists
        const existingCommunity = await Community.findOne({ name: communityName });
        if (existingCommunity) {
            return res.status(400).json({ message: 'Community with this name already exists' });
        }

        // Create the new community if it doesn't exist
        const community = new Community({
            name: communityName,
            uniqueCode,
            creator: req.user, // Add creator ID
            members: [req.user] // Automatically add the creator to the members list
        });

        await community.save();
        res.status(201).json(community);
    } catch (error) {
        console.error('Error creating community:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getRecentChats = async (req, res) => {
    
}