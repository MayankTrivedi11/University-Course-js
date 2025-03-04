const Joi = require('joi');

const courseSchema = Joi.object({
  name: Joi.string().required().min(3).max(100),
  description: Joi.string().required().min(10).max(500),
  instructor: Joi.string().required().length(58), // Algorand address length
  syllabusCid: Joi.string().required(), // Validate IPFS CID format
  credits: Joi.number().integer().min(1).max(5).required()
});

exports.validateCourse = (course) => {
  return courseSchema.validate(course);
};
