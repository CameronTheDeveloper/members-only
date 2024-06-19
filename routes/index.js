const express = require('express');
const router = express.Router();
const message_controller = require('../controllers/messageController');

router.get('/', message_controller.message_list);

router.get('/message/:id', message_controller.message_detail);

router.get('/message/create', message_controller.message_create_get);
router.post('/message/create', message_controller.message_create_post);

router.get('/message/:id/delete', message_controller.message_delete_get);
router.post('/message/:id/delete', message_controller.message_delete_post);

router.get('/message/:id/edit', message_controller.message_edit_get);
router.post('/message/:id/edit', message_controller.message_edit_post);


module.exports = router;
