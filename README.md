<p align="center">

  <h1 align="center">Superset.me! 🏋️‍♂️</h1>

  <p align="center">
    Keep track of your workouts and PBs!
    <br />
    <!-- <a href="placeholder" target="_blank">Visit Us</a> -->
    <!-- . -->
    <a href="https://github.com/kisokumar/superset-me/issues">Report Bug</a>
    ·
    <a href="https://github.com/kisokumar/superset-me/issues">Request Feature</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->
<!--
<details >
  <summary id="about" ><h2 style="display: inline-block"> ✏️ About</h2></summary>
  <ol>
  An app that helps you track your gains!
  </ol>
</details> -->

---

<!-- TABLE OF CONTENTS -->
<details open="ope">
  <summary><h2 style="display: inline-block"> 📋 Table of Contents</h2></summary>
  <ol>
    <li> <a href="#about">About The Project</a> </li>
    <li> <a href="#usage">Usage</a> </li>
    <li>
      <a href="#endpoints">Endpoints</a>
        <ol>
          <li> <a href="#userendpoints">User endpoint</a> </li>
          <li> <a href="#sessionendpoints">Session endpoint</a> </li>
        </ol>
    </li>
    <li> <a href="#comingsoon">Coming Soon!</a> </li>

  </ol>
</details>

---

## 💻&nbsp; Technologies used

![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) &emsp;
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white) &emsp;
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white) &emsp;
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

<!-- ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) -->

<!-- ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) -->

<!-- USAGE EXAMPLES -->

---

## Usage

`npm i` - Install dependencies

`npm run start` - Run server

---

## Endpoints

<details open="open">
  <summary id="userendpoints" ><h2 style="display: inline-block"> 👤 User Endpoints</h2></summary>

`PUT /users/new` - Create new user

> With the following JSON body format:

```
 {
   "userId" : "exampleUserId"
   "type" : "legDay"
   "username" : "exampleuser",
   "password" : "examplepassword"
 }
```

`GET /users/` - Get all the users

`GET /users/:userId` - Get user by id

`GET /users/username/:username` - Get user by username

`GET /users/userId/sessions` - Get sessions by userId

`GET /users/username/:username/sessions` - Get sessions by username

</details>

<details open="open">
  <summary id="sessionendpoints" ><h2 style="display: inline-block"> 💪 Session Endpoints</h2></summary>

`PUT /sessions/new` - Create new user

> With the following JSON body format:

```
 {
   "userId" : "exampleUserId"
   "type" : "legDay"
 }
```

`GET /sessions/` - Get all sessions

`GET /sessions/:sessionId` - Get session by id

</details>

<details>
  <summary><h2 id="comingsoon" style="display: inline-block"> ⌛ Coming Soon! </h2></summary>

- [x] Get user by username

- [ ] Delete user by username/uuid

- [ ] Change username (while retaining original uuid)

- [ ] Followers functionality (visit friend profiles if both (visitor and visitee) users have accepted)

</details>
