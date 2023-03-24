const  jwt = require("jsonwebtoken")

 const generateToken = (user) => {
    return jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email    
      },
      process.env.TOKEN_SECRET || "khang",
      {
        expiresIn: "30d",
      }
    );
  };

   const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
      const token = authorization.slice(7, authorization.length); // Bearer
      jwt.verify(
        token,
        process.env.TOKEN_SECRET || "khang",
        (err, decode) => {
          if (err) {
            res.status.send({ message: "invalid token" });
          } else {
            req.user = decode;
            next();
          }
        }
      );
    } else {
      res.status(401).send({ message: "no token" });
    }
  };

  module.exports = {
    generateToken,
    isAuth
}
