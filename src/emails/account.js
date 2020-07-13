const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../../config/dev.env") });

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = async (email, name) => {
  try {
    await sgMail.send({
      to: email,
      from: "sahilsiddiqui.dev@gmail.com",
      subject: "Thanks for joining in!",
      text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    });
    console.log("Message send!");
  } catch (e) {
    console.log("error", e);
  }
};

const sendCancellationEmail = async (email, name) => {
  try {
    await sgMail.send({
      to: email,
      from: "sahilsiddiqui.dev@gmail.com",
      subject: "Sorry to see you go!",
      text: `Goodbye, ${name}. I hope to see you back sometimes soon.`,
    });
    console.log("Message send!");
  } catch (e) {
    console.log("error", e);
  }
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};

// sgMail.send({
//     to: 'sahilsiddiqui.dev@gmail.com',
//     from: 'sahilsiddiqui.dev@gmail.com',
//     subject: 'This is my first creation!',
//     text: 'I hope this one actually get to you.'
// }).then(() => {
//     console.log('Message send');
// }).catch((error) => {
//     console.log(error.response.body)
// })
