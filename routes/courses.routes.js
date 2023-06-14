const express = require("express");
const router = express.Router();

// ℹ️ Handles password encryption
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const DanceCourses = require('../models/Course.model');

const isLoggedIn = require('../middleware/isLoggedIn');

// READ: display all courses
router.get("/courses", (req, res, next) => {
  DanceCourses.find()
    .then((coursesFromDB) => {
      const data = {
        courses: coursesFromDB,
      };
      res.render("dance-course/list-course", data);
    })
    .catch((e) => {
      console.log("error getting list of courses from DB", e);
      next(e);
    });
});

// CREATE: display form
router.get("/courses/create", isLoggedIn, (req, res, next) => {
  res.render("dance-course/create-course");
});

// CREATE: process form
router.post("/courses/create", isLoggedIn, (req, res, next) => {
  const newCourse = {
    name: req.body.name,
    dancestyle: req.body.dancestyle,
    teacher: req.body.teacher,
    location: req.body.location,
    address: req.body.address,
    level: req.body.level,
    price: req.body.price,
    description: req.body.description,
    time: req.body.time,
    comments: []
  };

  DanceCourses.create(newCourse)
    .then((newCourse) => {
      res.redirect("/courses");
    })
    .catch((e) => {
      console.log("error creating new course", e);
      next(e);
    });
});

// UPDATE: display form
router.get("/courses/:courseId/edit", isLoggedIn, async (req, res, next) => {
  const { courseId } = req.params;

  try {
    const courseDetails = await DanceCourses.findById(courseId);

    res.render("dance-course/edit-course", { course: courseDetails });
  } catch (e) {
    next(e);
  }
});

// UPDATE: process form
router.post("/courses/:courseId/edit", isLoggedIn, (req, res, next) => {
  const { courseId } = req.params;
  const { name, dancestyle, teacher, location, address, level, price } = req.body;

  DanceCourses.findByIdAndUpdate(courseId, { name, dancestyle, teacher, location, address, level, price }, { new: true })
    .then((updatedCourse) => {
      res.redirect(`/courses/${updatedCourse.id}`);
    })
    .catch((error) => {
      next(error);
    });
});

//Comments
router.post("/courses/:courseId", isLoggedIn, (req, res, next) => {
  const { courseId } = req.params;
  const { comment } = req.body;

  DanceCourses.findById(courseId)
    .then((courseFromDB) => {
      courseFromDB.comments.push(comment);
      return courseFromDB.save();
    })
    .then(() => {
      res.redirect(`/courses/${courseId}`);
    })
    .catch((e) => {
      console.log("error adding comment to course", e);
      next(e);
    });
});

// DELETE: delete course
router.post("/courses/:courseId/delete", isLoggedIn, (req, res, next) => {
  const { courseId } = req.params;

  DanceCourses.findByIdAndDelete(courseId)
    .then(() => {
      res.redirect("/courses");
    })
    .catch((error) => {
      next(error);
    });
});

// READ: display details of one course
router.get("/courses/:courseId", (req, res, next) => {
  const id = req.params.courseId;

  DanceCourses.findById(id)
    .then((courseFromDB) => {
      res.render("dance-course/details-course", courseFromDB);
    })
    .catch((e) => {
      console.log("error getting course details from DB", e);
      next(e);
    });
});

module.exports = router;

