import patientServices from "../services/patients.service.js";

async function register(req, res) {
    try {
        console.log("lllll")
        const { data } = req.body;
        const user = await patientServices.checkPatients(data.email);
        console.log("user", user);
        if (user) return res.status(404).json({
            message: "Email is used"
        });
        const newUser = await patientServices.register(data)
        return res.status(200).json({
            message: "Successfully registered",
            data: newUser
        })
    } catch (error) {
        return {
            message: error
        };
    }
}

const patientControllers = {
    register,
};

export default patientControllers;