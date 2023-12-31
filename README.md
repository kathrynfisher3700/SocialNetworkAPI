# SocialNetworkAPI
UCF Coding Bootcamp Assignment

## Description

The start of a Social Network API using Express, MongoDB, and Mongoose.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)


## Installation
install - require express@4.17.1 and mongoose@7.0.2

1. Use the command line to start the application server. This will automatically create and seed your database. 

        node server.js
        (optional: nodemon server.js)

2. Test routes using Insomnia or similar program


## Usage

Routes to test: GET/POST/PUT/DELETE for users, thoughts, reactions, and friends.

    ~ /api/thoughts
    ~ /api/thoughts/:thoughtId
    ~ /api/thoughts/:thoughtId/reactions
    ~ /api/thoughts/:thoughtId/reactions/:reactionId

    ~ /api/users
    ~ /api/users/:userId
    ~ /api/users/:userId/friends/:friendId

Watch the walkthrough here: [VSCode Walkthrough](https://drive.google.com/file/d/1vasp_nXxDG8y072KFLbcu47CBIMHh5Fw/view)

## Credits

Project created by Kathryn Dougherty with instruction from the UCF Coding Bootcamp.

Special Thanks to Dru Sanchez for review. 