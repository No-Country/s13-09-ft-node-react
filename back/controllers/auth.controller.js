import authServices from "../services/auth.service.js";

async function login(req, res) {
    try {
        const {email, password} = req.body;
        const user = await authServices.login(email);

        if (!user) return res.status(404).json({
            message: "User not found"
        });

        const isValid = password == user.password;
    
        if (!isValid) {
            res.status(500).json({
                message: "Invalid credentials"
            });
        } else {
            const token = await authServices.generateToken();
            res.header("Authorization", token).json({
                token
            });
        };
    } catch (error) {
        return {
            message: error
        };
    };
};

const authControllers = {
    login,
};

export default authControllers;
