# BerlinDance
Preparation
[ ] create git repository and git organization
[ ] invite collaborator
[ ] set up basic structure together: routes, models, views, framework

MVP 
main feature: information and register for dance classes in Berlin, writing comments about the class

[ ] create events for dance classes in Berlin
[ ] show details on the next page
[ ] create user profile for teacher/ students with different user rights (admin and editor)
[ ] teacher -> admin , can create events
[ ] student -> editor, can comment on events and sign in for membership
[ ] signin/logout/ delete Profile 
[ ] protect routes for logged-in users
[ ] comments/ posts on the detail page of the course (likes, participation, dance partner search via user name, number?)

models

[ ] user (sign in) {email, password hash}

[ ] dance classes CRUD (admin) {date, name, teacher, location, time, style}

Tech Setup

[ ] mongoose, express
[ ] build models, routes,views, design and css, and basic java script setup
[ ] create seed file
[ ] session timeout
[ ] bootstrap for css/ webpage
[ ] views (layout, index, classes, user details)

Bonus
[ ] protect routes for admin
[ ] google maps
[ ] nodemail for newsletters
[ ] responsiveness
