// =====================================
// WHATSAPP SETTINGS
// =====================================

const whatsappNumber = "639752666808";

const message =
    "Hello, I want to join the WhatsApp group.";

const whatsappLink =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(message);

const whatsappBtn =
    document.getElementById("whatsappBtn");

whatsappBtn.href = whatsappLink;

whatsappBtn.addEventListener(
    "click",
    function () {
        window.location.href = whatsappLink;
    }
);
