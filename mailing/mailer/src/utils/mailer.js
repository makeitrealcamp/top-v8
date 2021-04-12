const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.aol.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS,
  }
})

const verify = async () => {
  const connection = await transporter.verify()
  if(connection) {
    console.log('Server is ready to take messages')
  }
}

const welcome = async ({ email, name }) => {
  await transporter.sendMail({
    from: `"${process.env.MAILER_USERNAME}" <${process.env.MAILER_USER}>`,
    to: email,
    subject: 'Welcome',
    html: `
      <div>
        <h1>Welcome ${name}</h1>
      </div>
    `
  })
}

module.exports = {
  transporter,
  verify,
  welcome,
}
