const express = require('express')


const router = express.Router()


router.post('/', async(req, res) => {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey('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');

    const msg = {
        to: req.body.email,
        from: 'michael@gmail.com',
        subject: `Hello ${req.body.fullName}`,
        text: `Hello ${req.body.company}`,
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg);
    console.log('sent');
    res.status(201).send();
})

module.exports = router;