import nodemailer from 'nodemailer';

const resetMail = async (to, text) => {
    try {
        const mailSender = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "johnkevin.csjk@gmail.com",
                pass: "jmrruxrxvkjcrrjh"
            }
        });

        const composeMail = {
            from: "johnkevin.csjk@gmail.com",
            to,
            subject: "Password Reset Mail (Task Purpose)",
            text
        };

        const info = await mailSender.sendMail(composeMail);
        console.log("Reset mail sent: " + info.response);
    } catch (error) {
        console.error("Error sending reset mail: ", error);
    }
};


export default resetMail;
