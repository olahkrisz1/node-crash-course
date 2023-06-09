const express = require("express");

const app = express();

//register view engine
app.set("view engine", "ejs");

// listen for requests

app.listen(3000);

// app.get("/", (req, res) => {
//   //res.send("<p>home page</p>");
//   res.sendFile("./views/index.html", { root: __dirname });
// });

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

// app.get("/about", (req, res) => {
//   res.send("<p>about page</p>");
// });

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// redirect

// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

// 404 page

// app.use((req, res) => {
//   res.status(404).sendFile("./views/404.html", { root: __dirname });
// });

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
