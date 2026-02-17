const router = require("express").Router();
const passport = require("passport");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger-output.json");

router.get("/", (req, res) => {
  res.send(
    req.session.user !== undefined
      ? `Logged in as ${req.session.user.displayName}`
      : "Logged Out",
  );
});

// OAuth Routes
router.get("/login", passport.authenticate("github"), (req, res) => {});
router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});
router.get(
  "/auth/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/api-docs",
    session: false,
  }),
  (req, res) => {
    req.session.user = req.user;
    res.redirect("/");
  },
);

router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerDocument));

router.use("/products", require("./products"));
router.use("/orders", require("./orders"));

router.use("/users", require("./users"));
router.use("/reviews", require("./reviews"));

module.exports = router;
