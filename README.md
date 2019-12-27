# maddysite
Static site generator built using Express and Pug. With three commands, you can update and deploy your files to your AWS S3 bucket(s) configured for static site hosting. 

To check out the site in production, go to [madeleinefellows.com](http://madeleinefellows.com)

---

## prerequisites
1. In your .env file, ensure that `NODE_ENV` is set to `'production'`.
2. Create a file at the application root directory `credentials.json` and add your AWS ID and Secret values (to be able to push to S3).

## instructions
1. From your terminal client, call `npm run servstart` (macOS, Linux) or `npm run winstart` (Windows).
2. In a new terminal window, navigate to `/public/javascripts/`. Call `node crawler`. This will make the necessary `GET` requests to your Node server to generate static .html files for each page on the site.
3. Go back to your original terminal window (at the folder root). Stop running your Node server (call `Ctrl + C`).
4. Call `node yolo`. This will push your changes to Production.

## notes on scripts
* `htmlsaver.js` has two functions: `saveAsHtml(fileName, html)` and `copyFiles()`.
    * `saveAsHtml(fileName, html)` must be called in each route for which you want a static .html file generated. It accepts a file path (`fileName`) and an html string (`html`) that can be accessed via the optional callback function of `res.render()`. Thus, when a `GET` request is sent, a static .html file is saved prior to being rendered.
    * `copyFiles()` is used in `app.js` and copies only files that are in `filesToCopy.json`.
* In `crawler.js`, you can specify which paths (stored in `links.json`) to send `GET` requests.
* `yolo.js` uses `filepaths.json` (which is organized by AWS S3 bucket name, including the name and file type to be uploaded).
