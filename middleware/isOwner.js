const DanceCourses = require("../models/Course.model.js")

const isOwner = async (req, res, next) => {
  const courseId = req.params.courseId;
  try {
    const course = await DanceCourses.findById(courseId);
   console.log(course.createdBy, req.session.currentUser._id)
    if (String(course.createdBy) === req.session.currentUser._id || course.deletable) {
      next();
    } else {
      res.redirect('/auth/not-authorized');
    }
  } catch (error) {
    console.log(error)
  
  }
};

module.exports = isOwner;