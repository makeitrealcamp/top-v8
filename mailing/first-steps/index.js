const nodemailer = require('nodemailer')

async function init() {
  const account = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: account.user,
      pass: account.pass,
    }
  })

  const status = await transporter.verify()
  console.log(status)

  const user = { email: 'maria@test.com', name: 'Maria' }

  const style = {
    heading: "background:goldenrod;border:1px solid #333;"
  }

  const mail = await transporter.sendMail({
    from: '"Make it Real" <makeitreal@test.com>',
    to: user.email,
    subject: 'Welcome',
    html: `
      <div>
        <h1 style="${style.heading}">Welcome</h1>
        <p>Hello ${user.name},</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/440px-Ash_Tree_-_geograph.org.uk_-_590710.jpg" />
      </div>
    `,
    text: `
      Welcome

      Hello ${user.name},
    `
  })

  console.log(nodemailer.getTestMessageUrl(mail))
}

init()
