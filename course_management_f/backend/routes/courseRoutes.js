const express = require('express');
const courseController = require('../controller/courseController');
const router = express.Router();

router.post('/', courseController.createCourse);
router.get('/:id', courseController.getCourse);

// Add other routes for update, delete, list, etc.

module.exports = router;
