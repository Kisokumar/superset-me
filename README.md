<p align="center">

  <h1 align="center">🏋️‍♀️ Superset.me! 🏋️‍♂️</h1>

  <p align="center">
    Keep track of & visualise your workouts & PBs!
    <br />
    <!-- <a href="placeholder" target="_blank">Visit Us</a> -->
    <!-- . -->
    <a href="https://github.com/kisokumar/superset-me/issues">Report Bug</a>
    ·
    <a href="https://github.com/kisokumar/superset-me/issues">Request Feature</a>
  </p>
</p>

## 💫 Features of this app:

- Encrypted password storage - bcrypt
- Unique user ID - UUID
- External database can be connected (see [external database](#database) section)

---

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block"> 📋 Table of Contents</h2></summary>
  <ol>
    <li> <a href="#installation">Installation</a> </li>
    <li> <a href="#usage">Usage</a> </li>
    <li>
      <a href="#backend">Backend</a>
      <ol>
          <li> <a href="#userendpoints">User endpoints</a> </li>
          <li> <a href="#sessionendpoints">Session endpoints</a> </li>
    </li>
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
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) &emsp;
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

<!-- ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) -->

<!-- ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) -->

<!-- USAGE EXAMPLES -->

---

<details open="open">
  <summary id="installation"> <h2 style="display: inline-block"> ⚙️ Installation </h2></summary>

Make sure you have `node`, `git` and `npm` installed before beginning.

> 📜 Option 1 (script) (unix systems only):

```
git clone https://github.com/Kisokumar/superset-me.git

cd superset-me/

chmod +x ./scripts/install.sh
chmod +x ./scripts/run.sh

./scripts/install.sh
```

> ✏️ Option 2 (manual):

```
cd superset-me/frontend
npm i

cd superset-me/backend
npm i
```

</details>

---

<details open="open">
  <summary id="usage" ><h2 style="display: inline-block"> 💻 Usage (running a  devserver)
</h2></summary>

Make sure you have completed installation in the section above.

> 📜 Option 1 (script - unix systems only) (Only after you run `chmod +x ./scripts/install.sh`) :

```
cd superset-me/
killall node

./scripts/run.sh
```

> ✏️ Option 2 (manual):

Since the app needs to run both the react development server and the express server, we have to run them in seperate terminal instances.

🖥️ Terminal 1:

```
cd superset-me/frontend
npm run start
```

🖥️ Terminal 2:

```
cd superset-me/backend
npm run start
```

</details>

---

<details open="open">
  <summary id="backend" ><h2 style="display: inline-block"> 🔧  Backend</h2></summary>

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

---

<details open="open">
  <summary id="sessionendpoints" ><h2 style="display: inline-block"> 💪 Session Endpoints</h2></summary>

`PUT /sessions/new` - Create new session

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

---

<details>
  <summary><h2 id="database" open="open" style="display: inline-block"> 💾 External Database</h2></summary>

1. edit line 4 of the file `"./src/db/db.js"` to match the following:

   `location = "external"`

2. edit the file `"./src/db/config.json"` according to whichever database provicer you have chosen

</details>

</details>

---

<details>
  <summary><h2 id="comingsoon" style="display: inline-block"> ⌛ Coming Soon! </h2></summary>

- [x] Get user by username

- [x] Delete user by username/uuid

- [ ] Use session tokens/ auth

- [ ] Change username (while retaining original uuid)

- [ ] Followers functionality (visit friend profiles if both (visitor and visitee) users have accepted)

- [ ] View line graph of your PBs and sessions

</details>
