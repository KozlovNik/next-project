import nodemailer from "nodemailer";

let mailConfig;
if (process.env.NODE_ENV === "production") {
  // all emails are delivered to destination
  mailConfig = {
    host: "smtp.sendgrid.net",
    port: 587,
    auth: {
      user: "real.user",
      pass: "verysecret",
    },
  };
} else {
  // all emails are catched by ethereal.email
  mailConfig = {
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "vrqfmus4ylmynrpi@ethereal.email",
      pass: "HdpNxdsmrgGAxCKbf6",
    },
  };
}
export let transporter = nodemailer.createTransport(mailConfig);
