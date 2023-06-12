const mongoose = require('mongoose');
const DanceCourse = require('../models/Course.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/BerlinDance';


const BerlinDanceCourses = [
    {
        name: "Samba",
        dancestyle: "Latin",
        teacher: "Sol de Teneriffe",
        location: "ArtDance Berlin",
        address: "address",
        level: "Beginners",
        description:
            "Samba Details",
    },
    {
        name: "Tango",
        dancestyle: "Latin",
        teacher: "Sol de Teneriffe",
        location: "ArtDance Berlin",
        address: "address",
        level: "Beginners",
        description:
            "Samba Details",
    },
    {
        name: "Bachata",
        dancestyle: "Latin",
        teacher: "Sol de Teneriffe",
        location: "ArtDance Berlin",
        address: "address",
        level: "Beginners",
        description:
            "Samba Details",
    },
    {
        name: "Swing",
        dancestyle: "Swing",
        teacher: "Frieda Dietrich",
        location: "Ballhaus Berlin",
        address: "address",
        level: "Professional",
        description:"Details",
    },
    {
        name: "Merengue",
        dancestyle: "Latin",
        teacher: "Luis Sotomayor",
        location: "ArtDance Berlin",
        address: "address",
        level: "Beginners",
        description:"Details",
    },
    {
        name: "Heels Dance",
        dancestyle: "Latin",
        teacher: "Caroline de Monacco",
        location: "Dolce Vita Dance Studio",
        address: "address",
        level: "Intermediate",
        description:"Details",
    },
    {
        name: "Waltz",
        dancestyle: "Standard",
        teacher: "Viktor Waltz",
        location: "Opera House Berlin",
        address: "address",
        level: "Beginners",
        description:"Details",
    },
    {
        name: "ChaChaCha",
        dancestyle: "Latin",
        teacher: "Airton de Brasil ",
        location: "Beachbar Mitte",
        address: "address",
        level: "Intermediate",
        description:"Details",
    },
    {
        name: "Salsa",
        dancestyle: "Latin",
        teacher: "Pilar Moreno",
        location: "Claerchens Ballhaus Berlin",
        address: "address",
        level: "Professionals",
        description: "Details",
    },
    {
        name: "HipHop",
        dancestyle: "HipHop",
        teacher: "Bum chica Pow",
        location: "Prince Charles Berlin",
        address: "address",
        level: "Beginners",
        description: "Details",
    },
    {
        name: "Voguing",
        dancestyle: "Alternative",
        teacher: "Madonna",
        location: "Chantals house of Shame",
        address: "address",
        level: "Open",
        description: " Details",
    },
    {
        name: "Ballet",
        dancestyle: "Ballet",
        teacher: "Valentine Nureev",
        location: "House of Dance Berlin",
        address: "address",
        level: "Beginners",
        description: " Details",
    },
    {
        name: "Line Dance",
        dancestyle: "Country",
        teacher: "Willie Nelson",
        location: "Kalkscheune",
        address: "address",
        level: "Professionals",
        description: " Details",
    },
    {
        name: "Tap Dance",
        dancestyle: "Alternative",
        teacher: "Tino Sperling",
        location: "Dance School Berlin",
        address: "address",
        level: "Beginners",
        description: " Details",
    }
];


mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);

    return DanceCourse.deleteMany({}); //WARNING: this will delete all books in your DB !!
  })
  .then( (response) => {
    console.log(response);

    return DanceCourse.insertMany(courses);
  })
  .then(coursesFromDB => {
    console.log(`Created ${coursesFromDB.length} Dance Course`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error connecting to DB: ", err);
  });
