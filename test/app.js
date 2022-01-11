function sendEmail(email, attachments) {
	return Email.send({
	Host: "smtp.gmail.com",
	Username : "tranvanly2002@gmail.com",
	Password : "doxlrpgatzeyqqto",
	To : email,
	From : "tranvanly2002@gmail.com",
	Subject : "Mixband - Ticket",
	Body : "aaaa",
    Attachments: attachments
	})
}