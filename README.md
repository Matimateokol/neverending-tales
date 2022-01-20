# neverending-tales
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Google](https://img.shields.io/badge/google-4285F4?style=for-the-badge&logo=google&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
[![Npm package version](https://badgen.net/npm/v/express)](https://npmjs.com/package/express)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![GitHub license](https://badgen.net/github/license/Naereen/Strapdown.js)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)

This is a project of web application which people can use to share their personal thoughts, stories or interesting events from their lives.    
The tech stack used in the project includes: Node.js, Express, MongoDB, Passport with a Google OAuth strategy and many others.

![Google OAuth](screenshots/Screenshot0.jpeg)
![Dashboard](screenshots/Screenshot1.jpeg)
![Stories](screenshots/Screenshot2.jpeg)
![Create Story](screenshots/Screenshot3.jpeg)
![Read Story](screenshots/Screenshot4.jpeg)

To test it on your PC you need to:
1. Clone this repo and create cluster on MongoDB.
2. Add 'config.env' file in config folder with your own `MONGO_URI` connection data, `PORT` at which the server will run, `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` with credentials 
   for Google OAuth 2.0 API generated at your own Google Cloud Platform account.
3. Open project in IDE (for example VS Code) and run the following commands in terminal:
    > npm install
  
    > npm run dev
4. Paste the http://localhost:3000 into your browser.
5. Use your gmail account to log in.
6. Enjoy using the app.
  
