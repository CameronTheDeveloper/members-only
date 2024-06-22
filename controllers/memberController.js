const Member = require('../models/member');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
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
    body('confirmMemberPassword')
        .trim()
        .custom((value, { req }) => {
            return value === req.body.memberPassword;
        })
        .withMessage('Password does not match confirmed password'),

    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);



        if (!errors.isEmpty()) {
            const member = new Member({
                first_name: req.body.memberFirstName,
                last_name: req.body.memberLastName,
                username: req.body.memberUsername,
            });

            res.render('member_form', {
                title: 'Please fix all errors in this form to become a member',
                member: member,
                errors: errors.array()
            });
            return;
        } else {
            try {
                bcrypt.hash(req.body.memberPassword, 10, async (err, hashedPassword) => {
                    if (err) {
                        return next(err);
                    } else {
                        const member = new Member({
                            first_name: req.body.memberFirstName,
                            last_name: req.body.memberLastName,
                            username: req.body.memberUsername,
                            password: hashedPassword,
                            status_level: 1
                        });

                        await member.save();
                        res.redirect('/');
                    }
                });
            }
            catch (err) {
                return next(err);
            }
        }
    })
];

exports.member_login_get = asyncHandler(async (req, res, next) => {
    res.render('member_login', {
        title: 'Log in to your account'
    });
});

exports.member_logout_get = asyncHandler(async (req, res, next) => {
    res.render('member_logout', {
        title: 'Log Out'
    });
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

passport.use(
    new LocalStrategy(async (username, password, done) => {
        try {
            const user = await Member.findOne({ username: username });
            if (!user) {
                return done(null, false, { message: "Incorrect username" });
            };
            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                return done(null, false, { message: "Incorrect password" });
            }
            return done(null, user);
        } catch (err) {
            return done(err);
        };
    })
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await Member.findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    };
});