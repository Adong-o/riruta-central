function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
  }

  
  function openWhatsApp() {
    // Replace '1234567890' with the desired WhatsApp number
    var phoneNumber = '1234567890';
    
    // Create the WhatsApp link
    var whatsappLink = 'https://wa.me/' + phoneNumber;
    
    // Open WhatsApp in a new tab
    window.open(whatsappLink, '_blank');
}

function callUsNow(phoneNumber) {
    window.location.href = 'tel:' + phoneNumber;
  }