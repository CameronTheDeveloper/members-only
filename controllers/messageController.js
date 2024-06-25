const { body, validationResult } = require('express-validator');
const Message = require('../models/message');
const asyncHandler = require('express-async-handler');


exports.index = asyncHandler(async (req, res, next) => {
    res.render('index', { title: 'Members Only', member: req.user });
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
            author: req.body.user
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
    res.send('message delete GET - not implemented');
});

exports.message_delete_post = asyncHandler(async (req, res, next) => {
    res.send('message delete POST - not implemented');
});

exports.message_edit_get = asyncHandler(async (req, res, next) => {
    res.send('message edit GET - not implemented');
});

exports.message_edit_post = asyncHandler(async (req, res, next) => {
    res.send('message edit POST - not implemented');
});