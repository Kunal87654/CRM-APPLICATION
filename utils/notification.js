const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: "mayaranidutta503@gmail.com",
        pass: 'loxmyozxdehfnpbh',
    },
    secure: true,
})

const sendMailData = async (subject, body, to) => {
    const mailData = {
        from: 'mayaranidutta503@gmail.com',
        to: to,
        subject: subject,
        text: body
    }
    
    try {
       const info = await transport.sendMail(mailData)
       console.log("message sent successfully", info)
    } catch (error) {
        console.log("error while sending the mail", error)
    }
}

module.exports = {sendMailData}