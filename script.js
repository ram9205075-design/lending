 // =====================================
// WHATSAPP SETTINGS
// =====================================

// Apna WhatsApp number yahan daalo
// Example: India 9876543210
const whatsappNumber = "919876543210";


// WhatsApp par pre-filled message
const message =
    "Hello, I want to join the WhatsApp group.";


//
// WhatsApp URL
//
const whatsappLink =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(message);


// Button select karo
const whatsappBtn =
    document.getElementById("whatsappBtn");


// Link set karo
whatsappBtn.href = whatsappLink;


// Click handling
whatsappBtn.addEventListener(
    "click",
    function () {

        window.location.href =
            whatsappLink;

    }
);