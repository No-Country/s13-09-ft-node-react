import bcrypt from "bcryptjs"

const encrypt = async(textPlain) => {
    const hash = await bcrypt.hashSync(textPlain, 10)
    return hash
}
const compare = async(passwordPlain, hashPassword) => {
    return await bcrypt.compareSync(passwordPlain, hashPassword)
}

export { encrypt, compare }