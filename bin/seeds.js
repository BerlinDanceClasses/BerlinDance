const mongoose = require('mongoose');
const DanceCourse = require('../models/Course.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/BerlinDance';


const BerlinDanceCourses = [
    {
        name: "Samba",
        dancestyle: "Latin",
        teacher: "Sol de Teneriffe",
        location: "ArtDance Berlin",
        address: "Rungestraße 20, 10179 Berlin",
        level: "Beginners",
        price: 90,
        description:"A ballroom dance of Latin American origin in ²/₄ time with a basic pattern of step-step-step-step-close and characterised by long pauses and stylised body positions",
        time: "12:00",
        date: "12/06/2023",
        comments: [],
        deletable: false
    },
    {
        name: "Tango",
        dancestyle: "Latin",
        teacher: "Sol de Teneriffe",
        location: "ArtDance Berlin",
        address: "Rungestraße 20, 10179 Berlin",
        level: "Beginners",
        price: 100,
        description:"A ballroom dance of Latin American origin in ²/₄ time with a basic pattern of step-step-step-step-close and characterized by long pauses and stylized body positions",
        time: "19:00",
        date: "12/07/2023",
        comments: [],
    },
    {
        name: "Bachata",
        dancestyle: "Latin",
        teacher: "Sol de Teneriffe",
        location: "ArtDance Berlin",
        address: "Rungestraße 20, 10179 Berlin",
        level: "Beginners",
        price: 100,
        description:"The Bachata is a playful Latin dance that is typically danced at Salsa and Merengue dance clubs. This style is danced with soft hip motions, turns and side-to-side footwork. The music of Bachata is very recognizable for its predominant use of the electric guitar combined with Caribbean and Latin musical influences.",
        time: "20:00",
        date: "12/10/2023",
        comments: [],
    },
    {
        name: "Swing",
        dancestyle: "Swing",
        teacher: "Frieda Dietrich",
        location: "Ballhaus Berlin",
        address: "Chausseestraße 102, 10115 Berlin",
        level: "Professional",
        price: 100,
        description:"Swing dancing is a popular social dance that is often characterized by lifts, spins and flips. It's generally upbeat, lively and a lot of fun to watch—and to dance! Like most dance styles, there are variations of the dance. It includes some basic steps and then dancers have creative freedom to make it their own.",
        time: "18:00",
        date: "10/02/2023",
        comments: [],
    },
    {
        name: "Merengue",
        dancestyle: "Latin",
        teacher: "Luis Sotomayor",
        location: "ArtDance Berlin",
        address: "Rungestraße 20, 10179 Berlin",
        level: "Beginners",
        price: 100,
        description:"Merengue dance is the Dominican Republic's national dance, which accompanies the merengue style of music. A pair of dancing partners hold hands at chest-level and move in slow, sensuous semi-circles to the rhythm of the music",
        time: "19:00",
        date: "12/06/2023",
        comments: [],
    },
    {
        name: "Heels Dance",
        dancestyle: "Alternative",
        teacher: "Caroline de Monacco",
        location: "Dolce Vita Dance Studio",
        address: "Körtestraße 10, 10967 Berlin",
        level: "Intermediate",
        price: 100,
        description:"Heels Dance is a high-energy, female-centered form of dance where the performers wear heels while they dance. This dance style developed from elements such as jazz, lyrical, and hip-hop, all of which involve powerful yet graceful moves executed with poise.",
        time: "20:00",
        date: "12/18/2023",
        comments: [],
    },
    {
        name: "Waltz",
        dancestyle: "Standard",
        teacher: "Viktor Waltz",
        location: "Opera House Berlin",
        address: "Bismarckstraße 35, 10627 Berlin",
        level: "Beginners",
        price: 100,
        description:"The Waltz is a smooth dance that travels around the line of dance. Characterized by its “rise and fall” action, the Waltz includes a step, slide, and step in 3/4 time. Dancers should move their shoulders smoothly, parallel with the floor instead of up and down. Dancers must strive to lengthen each step.",
        time: "17:00",
        date: "12/10/2023",
        comments: [],
    },
    {
        name: "ChaChaCha",
        dancestyle: "Latin",
        teacher: "Airton de Brasil ",
        location: "Beachbar Mitte",
        address: "Monbijouplatz 1, 10117 Berlin",
        level: "Intermediate",
        price: 100,
        description:"The cha-cha is one of the five main Latin ballroom dances most frequently taught in dance schools around the world. The steps are compact and based partly on the rumba and mambo, with plenty of hip and pelvic movements. The basic forward movement is supplemented with various turns, dips, and slides.",
        time: "12:00",
        date: "09/06/2023",
        comments: [],
    },
    {
        name: "Salsa",
        dancestyle: "Latin",
        teacher: "Pilar Moreno",
        location: "Claerchens Ballhaus Berlin",
        address: "Auguststrasse 24, 10117 Berlin",
        level: "Professionals",
        price: 100,
        description: "Salsa is a Latin dance, associated with the music genre of the same name, which was first popularized in the United States in the 1960s in New York City. Salsa is a mixture of Cuban dances, such as mambo, pachanga and rumba, as well as American dances such as swing and tap.",
        time: "18:30",
        date: "08/08/2023",
        comments: [],
    },
    {
        name: "HipHop",
        dancestyle: "HipHop",
        teacher: "Bum chica Pow",
        location: "Prince Charles Berlin",
        address: "Prinzenstraße 85F, 10969 Berlin",
        level: "Beginners",
        price: 100,
        description: "Hip-hop dance is a vibrant form of dance that combines a variety of freestyle movements to create a cultural piece of art. Through its three main styles of popping, locking, and breaking, hip-hop dance has evolved into one of the most popular and influential styles of dance.",
        time: "12:00",
        date: "10/08/2023",
        comments: [],
    },
    {
        name: "Voguing",
        dancestyle: "Alternative",
        teacher: "Madonna",
        location: "Chantals house of Shame",
        address: "Revalerstr.99, 10245 Berlin",
        level: "Open",
        price: 100,
        description: "Vogue, or voguing, is a highly stylized, modern house dance originating in the late 1980s that evolved out of the Harlem ballroom scene of the 1960s. A famous example can be found in Madonnas Vogue music video.",
        time: "22:00",
        date: "12/20/2023",
        comments: [],
    },
    {
        name: "Ballet",
        dancestyle: "Ballet",
        teacher: "Valentine Nureev",
        location: "House of Dance Berlin",
        address: "Gipsstrasse 11, 10117",
        level: "Beginners",
        price: 100,
        description: "Ballet is a theatrical dance that features highly formalized steps and movements. It uses body movements, music, and stage scenery to speak emotions, a story, an atmosphere, or a theme.",
        time: "10:00",
        date: "12/06/2023",
        comments: [],
    },
    {
        name: "Line Dance",
        dancestyle: "Country",
        teacher: "Willie Nelson",
        location: "Kalkscheune",
        address: "Caroline-Michaelis-Strasse 1, 10115 Berlin",
        level: "Professionals",
        price: 100,
        description: "A line dance is a choreographed dance in which a group of people dance along to a repeating sequence of steps while arranged in one or more lines or rows. These lines usually face all in the same direction, or less commonly face each other.",
        time: "22:00",
        date: "08/06/2023",
        comments: [],
    },
    {
        name: "Tap Dance",
        dancestyle: "Alternative",
        teacher: "Tino Sperling",
        location: "Dance School Berlin",
        address: "Christburgerstrasse 47, 10405",
        level: "Beginners",
        price: 100,
        description: "Tap is a unique style of dance involving specific and rapid footwork. The dancer's foot and shoe essentially act as a drum, and each part of the shoe makes a particular beat and sound. Riverdance is perhaps the most famous tap dance.",
        time: "12:00",
        date: "12/06/2023",
        comments: [],
    }
];


mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);

    return DanceCourse.deleteMany({}); //WARNING: this will delete all courses in your DB !!
  })
  .then( (response) => {
    console.log(response);

    return DanceCourse.insertMany(BerlinDanceCourses);
  })
  .then(coursesFromDB => {
    console.log(`Created ${coursesFromDB.length} Dance Course`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error connecting to DB: ", err);
  });
