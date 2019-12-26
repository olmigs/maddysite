# maddysite
Static site generator built using Express and Pug. With three commands, you can update and deploy your files to your AWS S3 bucket(s) configured for static site hosting. 

---

## prequisites
1. In your .env file, ensure that `NODE_ENV` is set to `'production'`.
2. Create a file at the application root directory `credentials.json` and add your AWS ID and Secret values (to be able to push to S3).

## instructions
1. From your terminal client, call `npm run servstart` (macOS, Linux) or `npm run winstart` (Windows).
2. In a new terminal window, navigate to `/public/javascripts/`. Call `node crawler`. This will make the necessary `GET` requests to your Node server to generate static .html files for each page on the site.
3. Go back to your original terminal window (at the folder root). Stop running your Node server (call `Ctrl + C`).
4. Call `node yolo`. This will push your changes to Production.
