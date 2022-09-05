var express = require("express");
const { response } = require("../app");
const app = require("../app");
var router = express.Router();

const email = "abcdefg@gmail.com";
const password = "asdfasdf";

/* GET home page. */
router.get("/", function (req, res) {
  if (req.session.userid) {
    res.render("index");
  } else {
    res.redirect("/login");
  }
});

router.get("/login", (req, res) => {
  if (req.session.userid) {
    res.redirect("/home");  
  } else {
    res.render("login");
  }
});

router.get("/home", (req, res) => {
  let products = [
    {
      name: "bike1",
      discription: "good bike",
      image:
        "https://www.canyon.com/on/demandware.static/-/Sites-canyon-master/default/dw88c1a8b1/images/full/full_2022_/2022/full_2022_spectral-on-cfr_3114_bk-bk_P5.png",
      cart: "Buy",
    },
    {
      name: "bike2",
      discription: "good bike",
      image:
        "https://www.canyon.com/on/demandware.static/-/Sites-canyon-master/default/dw88c1a8b1/images/full/full_2022_/2022/full_2022_spectral-on-cfr_3114_bk-bk_P5.png",
      cart: "Buy",
    },
    {
      name: "bike3",
      discription: "good bike",
      image:
        "https://www.canyon.com/on/demandware.static/-/Sites-canyon-master/default/dw88c1a8b1/images/full/full_2022_/2022/full_2022_spectral-on-cfr_3114_bk-bk_P5.png",
      cart: "Buy",
    },
  ];
  if (req.session.userid) {
    res.render("home", { products });
  } else {
    res.redirect("/login");
  }
});

router.post("/login", (req, res) => {
  var user = req.body.user;
  var pass = req.body.pass;
  if (email === user && password === pass) {
    session = req.session;
    session.userid = req.body.user;
    console.log(req.session.userid);

    // res.send(
    // `Hey there, welcome <a href=/logout>click to logout</a>`);
    res.redirect("/home");
  } else {
    res.send("<h1>Invalid password or email");
  }
  console.log(req.body);
});
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
