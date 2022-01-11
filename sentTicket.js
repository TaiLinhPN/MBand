const sendPDF = async () => {
    var opt = {
        filename: 'ticket.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'cm', format: 'a4', orientation: 'landscape' }
    };

    var ticket = await html2pdf()
        .set(opt)
        .from(document.getElementById("sample"))
        .output('datauri')
    att = [
        {
            name: `ticket_#${1}.pdf`,
            data: ticket
        }
    ]
    sendEmail("linh.nguyenbuitai23@student.passerellesnumeriques.org", att)
}

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