const isOwner = async (req, res, next) => {
  const courseId = req.params.courseId;

  try {
    const course = await Course.findById(courseId);
    if (course.createdBy.toString() === req.session.user._id.toString()) {
      next();
    } else {
      res.redirect('/not-authorized');
    }
  } catch (error) {
    next();
  }
};

module.exports = isOwner;