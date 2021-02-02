const User = require("../models/User");
const bycrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

async function signup(req, res) {
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) {
    res.status(400).json({ error: "Email already Exist" });
  } else {
    const salt = await bycrypt.genSalt(10);
    hashPassword = await bycrypt.hash(req.body.password, salt);

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
    });
    try {
      const userSignup = await user.save();
      const payload = {
        user: {
          id: userSignup._id,
        },
      };
      await jwt.sign(
        payload,
        "PORTO",
        { expiresIn: 10000 },
        function (err, token) {
          if (err) {
            res.send(err);
          }
          res.status(200).send({ token: token, user: userSignup });
        }
      );
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}

//Login Controller
async function login(req, res, next) {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    res.status(400).json({ error: "Email not Found" });
  }
  const checkpassword = await bycrypt.compare(req.body.password, user.password);
  if (!checkpassword) {
    res.status(400).json({ error: "Password mismatch" });
  }
  const token = jwt.sign({ _id: user.id }, "PORTO");
  res.header("auth-token", token).json({ token: token, name: user.name });
  //res.status(200).send({ name: user.name });
}

module.exports = {
  signup,
  login,
};
