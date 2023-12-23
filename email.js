document.addEventListener('DOMContentLoaded', function () {

    emailjs.init("IOMVpKTZDDmCT4VF_"); //quale chiave utilizzare x accedere al servizio emailjs

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();



        emailjs.sendForm("service_wzv4fhr", "template_giom19z", "contact-form")
            .then(function (response) {
                document.getElementById("contact-form").reset();
                alert("E-mail inviata con successo");
            }, function (error) {
                alert("Errore nell'invio dell'e-mai");
            });
    });
});