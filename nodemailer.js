const nodemailer=require('nodemailer')
let transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'chakkasatwika225@gmail.com',
        pass:'vhyg kyzu lppz kpka'
    }
})
for(let i=1;i<=10;i++){

let mailOptions={
    from:'chakkasatwika225@gmail.com',
    to:"satwijanu@gmail.com",
    
    subject:"Quote of the day!!!",
    text:
        'Don\'t marry a person who is beautiful to the world, marry one who makes your life beautiful!!!💕'
}

transporter.sendMail(mailOptions,(error,info)=>{
    console.log(info)
})}