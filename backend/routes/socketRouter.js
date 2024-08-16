import { userSocketMap } from "../../index.js";
import Community from "../models/community.model.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";

const socketRouter = (io) => {
    io.on('connection', (socket) => {
        socket.on('userConnected', (userId) => {
            userSocketMap.set(userId, socket.id);
            console.log(`User ${userId} connected`);
        });
        
        socket.on('joinCommunity', async ({ communityCode }) => {
            try {
                const community = await Community.findOne({ uniqueCode: communityCode });
                if (!community) {
                    socket.emit('error', { message: 'Community not found' });
                    return;
                }
        
                const user = await User.findById(socket.user._id);
                if (!user) {
                    socket.emit('error', { message: 'User not found' });
                    return;
                }
                
                if (!community.members.includes(user._id)) {
                    community.members.push(user._id);
                    await community.save();
                }else{
                    socket.emit('error', { message: 'Already a member of this community' });
                    return;
                }
        
                socket.join(communityCode);
                socket.emit('joinedCommunity', { communityCode });
                console.log(`User ${socket.user._id} joined community ${communityCode}`);
            } catch (error) {
                console.error('Error joining community:', error);
                socket.emit('error', { message: 'Internal server error' });
            }
        });
    
        // Post a message to a community
        socket.on('postMessageToCommunity', async ({ communityCode, messageText }) => {
            try {
                const community = await Community.findOne({ uniqueCode: communityCode });
                if (!community) {
                    socket.emit('error', { message: 'Community not found' });
                    return;
                }
        
                const user = await User.findById(socket.user._id);
                if (!user) {
                    socket.emit('error', { message: 'User not found' });
                    return;
                }
        
                const message = new Message({
                    sender: socket.user._id,
                    type: 'COMMUNITY',
                    community: community._id,
                    message: messageText
                });
        
                await message.save();
                io.to(communityCode).emit('message', message);
                console.log(`Message posted to community ${communityCode}: ${messageText}`);
            } catch (error) {
                console.error('Error posting message to community:', error);
                socket.emit('error', { message: 'Internal server error' });
            }
        });
    
        // Send a direct message
        socket.on('sendDirectMessage', async ({ receiverId, messageText }) => {
            try {
                const sender = await User.findById(socket.user._id);
                const receiver = await User.findById(receiverId);
        
                if (!sender || !receiver) {
                    socket.emit('error', { message: 'User not found' });
                    return;
                }
        
                const message = new Message({
                    sender: socket.user._id,
                    type: 'DM',
                    receiver: receiverId,
                    message: messageText
                });
        
                await message.save();
        
                // Emit the message to both sender and receiver
                if (userSocketMap.has(socket.user._id)) {
                    io.to(userSocketMap.get(socket.user._id)).emit('message', message);
                }
                if (userSocketMap.has(receiverId)) {
                    io.to(userSocketMap.get(receiverId)).emit('message', message);
                }
        
                console.log(`Direct message sent from ${socket.user._id} to ${receiverId}: ${messageText}`);
            } catch (error) {
                console.error('Error sending direct message:', error);
                socket.emit('error', { message: 'Internal server error' });
            }
        });
    
        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });
}

export default socketRouter;
