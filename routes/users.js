const express = require('express');
const router = express.Router();
const member_controller = require('../controllers/memberController');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.redirect('respond with a resource');
});

router.get('/member/create', member_controller.member_create_get);
router.post('/member/create', member_controller.member_create_post);

router.get('/member/login', member_controller.member_login_get);

router.get('/member/:id', member_controller.member_detail);

router.get('/member/:id/delete', member_controller.member_delete_get);
router.post('/member/:id/delete', member_controller.member_delete_post);

router.get('/member/:id/edit', member_controller.member_edit_get);
router.post('/member/:id/edit', member_controller.member_edit_post);


module.exports = router;
