import jwt from "jsonwebtoken";
const protectedRoute = (req, res, next) => {
  const token = req.headers["access-token"];

  if (token) {
    let key = process.env.PRIVATE_KEY_JWT || "secret";
    jwt.verify(token, key, (err, decoded) => {
      if (err) {
        return res.status(401).json({ mensaje: "Token invalido" });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.status(403).json({
      mensaje: "Access denied.",
    });
  }
};

export default protectedRoute;
