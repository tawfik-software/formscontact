function sendMail(){
    let parms = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        subject : document.getElementById('subject').value,
        message : document.getElementById('message').value,
    }

    emailjs.send("form","your id template here",parms).then(alert('message has been sent'))
}
