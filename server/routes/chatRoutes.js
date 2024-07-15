const express = require('express');
const { getChat, sendMessage } = require('../controllers/chatController');

const router = express.Router();

router.get('/:id', getChat);
router.post('/send', sendMessage);

module.exports = router;
