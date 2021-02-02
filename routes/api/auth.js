const router = require("express").Router();
const auth = require("../../controllers/auth.controller");
const { validateUser } = require("../../MiddleWare/validation");

router.post("/signup", validateUser, auth.signup);
router.post("/login", auth.login);

module.exports = router;
