const Member = require('../models/member');
const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

exports.member_list = asyncHandler(async (req, res, next) => {
    res.send('member list display - not implemented');
});

exports.member_detail = asyncHandler(async (req, res, next) => {
    res.send('member detail display - not implemented');
});

exports.member_create_get = asyncHandler(async (req, res, next) => {
    res.render('member_form', {
        title: 'Please fill out this form to become a member'
    });
});

exports.member_create_post = [
    body('memberFirstName')
        .trim()
        .isLength({ min: 1, max: 30 })
        .escape()
        .withMessage('First name must be 1 to 30 characters long.')
        .isAlphanumeric()
        .withMessage("First name has non-alphanumeric characters."),
    body('memberLastName')
        .trim()
        .isLength({ min: 1, max: 35 })
        .escape()
        .withMessage('Last name must be 1 to 35 characters long.')
        .isAlphanumeric()
        .withMessage("Last name has non-alphanumeric characters."),
    body('memberUsername')
        .trim()
        .isLength({ min: 1, max: 40 })
        .escape()
        .withMessage('Username must be 1 to 40 characters long.')
        .isAlphanumeric()
        .withMessage("Username has non-alphanumeric characters."),
    body('memberPassword')
        .trim()
        .isLength({ min: 8, max: 128 })
        .escape()
        .withMessage('Password must be 8 to 128 characters long.'),

    asyncHandler(async (req, res, next) => {
        res.send('member create POST - not implemented');
    })
];

exports.member_delete_get = asyncHandler(async (req, res, next) => {
    res.send('member delete GET - not implemented');
});

exports.member_delete_post = asyncHandler(async (req, res, next) => {
    res.send('member delete POST - not implemented');
});

exports.member_edit_get = asyncHandler(async (req, res, next) => {
    res.send('member edit GET - not implemented');
});

exports.member_edit_post = asyncHandler(async (req, res, next) => {
    res.send('member edit POST - not implemented');
});

