import user_model from "../Schema/UserSchema.js"
import bcryptjs from 'bcryptjs' // hash password - step 1


// this fetchUsers controller will fetch all user data from the DB
export const fetchUsers = async (req, res, next) => {

    try {
        const fetchAllUsers = await user_model.find()

        return res.status(200).json({
            Feedback: "All user details have been fetched successfully.",
            Data: fetchAllUsers
        })
    } catch (error) {
        return res.status(400).json({
            Feedback: "Unable to fetch user data from DB.",
            error
        })
    }
}

// SignIN_controller will create a new user
export const SignIN_controller = async (req, res, next) => {

    try {
        const { name, email, gender, password } = req.body
        const seachEmail = await user_model.findOne({ email })
        const hash_password = bcryptjs.hashSync(password, 10) // hash password - step 2
        if (seachEmail) {

            return res.status(200).json({
                Feedback: "Email already exist",
                Data: seachEmail
            })
        } else {
            const user_signIn = new user_model({
                name,
                email,
                gender,
                password: hash_password //hash password - step 3
            })


            await user_signIn.save()
            return res.status(200).json({
                Feedback: "User created successfully !",
                Data: user_signIn
            })
        }


    } catch (error) {
        res.status(200).json({
            Feedback: "Something went wrong",
            error
        })
    }
}