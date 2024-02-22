import HttpResponse from "../helpers/HttpResponse.js";
import authServices from "../services/auth.service.js";
import bcrypt from "bcryptjs";

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await authServices.login(email);
    
    if (!user) return HttpResponse.notFound(res, { message: "fallo" });

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(500).json({
        message: "Invalid credentials",
      });
    } else {
      const token = await authServices.generateToken(user);
      return res.status(200).header("Authorization", token).json(user);
    }
  } catch (error) {
    return HttpResponse.serverError(res)
  }
}

const authControllers = {
  login,
};

export default authControllers;
