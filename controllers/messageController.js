const { validationResult } = require('express-validator');
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

exports.message_create_post = asyncHandler(async (req, res, next) => {
    res.send('message create POST - not implemented');
});

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