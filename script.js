// =====================================
// WHATSAPP SETTINGS
// =====================================

const whatsappNumber = "639752666808";

const message =
    "Hello, I want to join the WhatsApp group.";


// =====================================
// CREATE WHATSAPP LINK
// =====================================

const whatsappLink =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(message);


// WhatsApp direct chat
// Link is handled directly by the HTML button.
console.log("WhatsApp chat button ready.");


// Set WhatsApp URL
whatsappBtn.href = whatsappLink;


// Open WhatsApp
whatsappBtn.addEventListener(
    "click",
    function () {

        window.location.href =
            whatsappLink;

    }
);
