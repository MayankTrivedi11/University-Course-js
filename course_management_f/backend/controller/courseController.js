const courseService = require('../services/courseService');
const courseValidator = require('../validator/courseValidator');

exports.createCourse = async (req, res) => {
  try {
    const { name, description, instructor, syllabusCid, credits } = req.body;

    // Validate input
    const validationResult = courseValidator.validateCourse(req.body);
    if (validationResult.error) {
      return res.status(400).json({ error: validationResult.error.details[0].message });
    }

    const newCourse = await courseService.createCourse(name, description, instructor, syllabusCid, credits);

    res.status(201).json(newCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create course' });
  }
};

exports.getCourse = async(req, res) => {
    try{
        const courseId = req.params.id;
        const course = await courseService.getCourse(courseId);
        if(!course) {
            return res.status(404).json({error: 'Course not found'});
        }
        res.status(200).json(course);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to get the course' });
    }
}

// Add other controller methods for update, delete, list, etc.
