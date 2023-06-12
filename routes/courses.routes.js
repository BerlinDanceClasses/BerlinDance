const express = require("express");
const router = express.Router();

// ℹ️ Handles password encryption
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const DanceCourses = require('../models/Course.model');

const isLoggedIn = require('../middleware/isLoggedIn');


// GET
router.get("/courses", (req, res, next) => {
    res.render("create-course");
  });