const Chat = require('../models/Chat');

exports.getChat = async (req, res) => {
    try {
        const chat = await Chat.findById(req.params.id);
        res.json(chat);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

exports.sendMessage = async (req, res) => {
    try {
        const { chatId, message } = req.body;
        const chat = await Chat.findById(chatId);
        chat.messages.push({ text: message, sender: req.user.id });
        await chat.save();
        res.status(201).json({ message: 'Message sent', chat });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
