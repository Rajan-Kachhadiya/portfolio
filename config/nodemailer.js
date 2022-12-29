import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass:pass,
    },
});

export const mailOptions = {
    from: email,
    to: "pinal.dhameliya1999@gmil.com",
};
