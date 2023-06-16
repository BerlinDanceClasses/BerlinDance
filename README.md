![Ironhack logo](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Project 2 | Berlin Dance Classes

## Description

This project focuses on building a functional Web application (Frontend and Backend) from the ground up. We are using Express as a foundation and Mongoose for models and database communication. The two models, User and Course, represent the basic functionality of our app and include all CRUD actions.

User story: 
The user clicks on the Demo link and enters the Berlin Dance Class universe. After a little dance impression on the index page, the user can choose between the following options in the navigation bar 

**1. Check out the registered courses**\
**2. Create a course**
**3. Click on the User in order to choose between Signup or Login**

The course page shows all the registered courses in the data base and some basic information on the style and the teacher. A click on the "Add a new course" button will take the user to the "Create a course" page, where a new course can be registered. By clicking the button of the specific dance course, the user will be redirected to the details page, where more information on the course is displayed. 

The details page of the course offers the following functionality: 

**1. Check out the details of courses**\
**2. Edit the details of the course**
**3. Delete the course**
**4. Return to the course page**
**5. Post a comment about the course**

If the user wants to create a course directly, he/she can do so by clicking on "Create course" in the navigation bar. 

In order to be a part of the Dance Community and be able to create, edit or delete courses, you need to be registered as a user and have valid login credentials. The User section in the navigation bar leads the user to the Signup or Login page where a new account can be created or, if already a registered user, the login credentials can be entered. Once finished with the session the user can click on the User dropdown in the navigation bar and choose the Logout option in the dropdown. 


## Requirements

- Laptop with functioning keyboard
- WIFI
- Enthusiasm

## Demo

[Check out your next dance class in Berlin: ](https://berlindanceclasses.adaptable.app/courses)

## Instructions

If you want to play with the code on your local computer check out the following instructions: 

After cloning the project, you will have to add a `.env` file and add in it the following lines:

```
PORT=3000

SESSION_SECRET='dancingisfun'

MONGODB_URI="mongodb+srv://carolin:berlindance@cluster0.0fwbc0w.mongodb.net/berlindance?retryWrites=true&w=majority"
```

## Run this app

In order to run this app on your computer please install all the dependencies:

```bash
$ npm install
```

And run the app with 

```bash
$ npm run dev
```

Now you are ready to join the dance community and create dance classes.

<br>

## Used technology

- Visual Code, Github
- Mongoose, Express, Node JS, Adaptable
- JS, CSS, HTML

## Contributors

- Many thanks to my programming partner for the smart ideas, patience and dance enthusiasm
- Thank you to the Ironhack team and their patient support
