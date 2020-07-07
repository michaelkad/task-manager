const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'michaelkadiayi@gmail.com',
        subject: "Welcome to the team",
        text: `Welcome to the team  ${name}`

    })
}
const cancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'michaelkadiayi@gmail.com',
        subject: "Sorry to let you go",
        text: `Goodbye  ${name}, I hope to see you soon`
    })
}
module.exports = {
    sendWelcomeEmail,
    cancelationEmail
}
