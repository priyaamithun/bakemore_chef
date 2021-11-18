const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.post('/api/form',(req,res) =>{
    var style = {
        border : '2px solid grey'
    }
    console.log(req.body)

    const htmlEmail = `

    <h3>You recieved a new message from ${req.body.user.name}</h3>
    <h4>This is a ${req.body.user.subject}</h4>
     
    <p padding:10px; min-height:90%; width:350px;">${req.body.user.message}</p>
    <p>Sender's contact details </p>
    <ul>
<li>${req.body.user.name}</li>
<li>${req.body.user.email}</li>

    </ul>
    `

    let transporter  = nodemailer.createTransport({
        service : 'gmail',
        type: "SMTP",
  host: "smtp.gmail.com",
  secure: true,
        auth :{
            user : 'bakemore.rashmi@gmail.com',
            pass : 'winter100#'
        }
        
        
        });
        
       

        const mailOptions = {
            from: req.body.email, // sender address
            to: 'bakemore.rashmi@gmail.com', // list of receivers
            subject: req.body.subject, // Subject line
            text: req.body.message,
             html:htmlEmail,


        }
        transporter.sendMail(mailOptions, function (err, info) {
            if(err)
              console.log(err)
            else
              console.log(info);
         })

})

const PORT = process.env.PORT || 3001

app.listen(PORT, () =>{
    console.log(`Server listening on port${PORT}`)
})
