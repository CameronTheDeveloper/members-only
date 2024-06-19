const Member = require('../models/member');
const asyncHandler = require('express-async-handler');


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

exports.member_create_post = asyncHandler(async (req, res, next) => {
    res.send('member create POST - not implemented');
});

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

