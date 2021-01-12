const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const senderEmail = 'nicoleveque@outlook.com'

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: senderEmail,
    subject: 'Thanks for joining us!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  })
}

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: senderEmail,
    subject: `Goodbye ${name}`,
    text: `We're sorry to see you leave ${name}, please tell us how we could improve the app`,
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
}
