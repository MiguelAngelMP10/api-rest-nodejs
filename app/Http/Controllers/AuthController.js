import jwt from "jsonwebtoken";
const AuthController = {
  auth: (req, res) => {
    console.log(req.body);
    if (req.body.user === "asfo" && req.body.password === "holamundo") {
      const payload = {
        check: true,
        
      };
      let key = process.env.PRIVATE_KEY_JWT || "secret";
      const token = jwt.sign(payload, key, {
        expiresIn: 1440,
      });
      res.json({
        mensaje: "Autenticación correcta",
        token: token,
      });
    } else {
      res.json({ mensaje: "Usuario o contraseña incorrectos" });
    }
  },
};

export default AuthController;
