const { body, validationResult } = require('express-validator');
const Message = require('../models/message');
const asyncHandler = require('express-async-handler');


exports.index = asyncHandler(async (req, res, next) => {
    const allMessages = await Message.find()
        .sort({date_posted: -1})
        .populate('author')
        .exec();

    res.render('index', { 
        title: 'Members Only',
        message_list: allMessages,
        member: req.user 
    });

});

exports.message_detail = asyncHandler(async (req, res, next) => {
    res.send('message detail display - not implemented');
});

exports.message_create_get = asyncHandler(async (req, res, next) => {
    res.render('message_form', {
        title: 'Create a message'
    });
});

exports.message_create_post = [
    body('messageTitle')
        .trim()
        .escape()
        .not().isEmpty().withMessage('Message title is required')
        .isLength({ max: 50 }).withMessage('Message title can\'t be longer than 50 characters'),
    body('messageText')
        .trim()
        .escape()
        .not().isEmpty().withMessage('Message text is required')
        .isLength({ max: 1000 }).withMessage('Message text can\'t be longer than 1000 characters'),

    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        const message = new Message({
            title: req.body.messageTitle,
            text: req.body.messageText,
            date_posted: Date.now(),
            author: req.user._id
        });

        if (!errors.isEmpty()) {
            res.render('message_form', {
                title: 'Create a message',
                message: message,
                errors: errors.array()
            });
        } else {
            await message.save();
            res.redirect('/');
        }
})];

exports.message_delete_get = asyncHandler(async (req, res, next) => {
    const message = await Message.findById(req.params.id).exec();

    if (message === null){
        res.redirect('/');
    }

    res.render('message_delete', {
        title: 'Delete message',
        message: message
    });

});

exports.message_delete_post = asyncHandler(async (req, res, next) => {
    await Message.findByIdAndDelete(req.body.deleteMessageId);
    res.redirect('/');
});

exports.message_edit_get = asyncHandler(async (req, res, next) => {
    res.send('message edit GET - not implemented');
});

exports.message_edit_post = asyncHandler(async (req, res, next) => {
    res.send('message edit POST - not implemented');
});