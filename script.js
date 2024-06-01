// script.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const queryType = document.getElementById('query-type').value;
    const message = document.getElementById('message').value.trim();
    const consent = document.getElementById('consent').checked;
    let isValid = true;
  
    // Reset error messages
    document.querySelectorAll('.error-message').forEach(element => {
      element.style.display = 'none';
    });
  
    // Validate first name
    if (!firstName) {
      document.getElementById('first-name-error').style.display = 'block';
      isValid = false;
    }
  
    // Validate last name
    if (!lastName) {
      document.getElementById('last-name-error').style.display = 'block';
      isValid = false;
    }
  
    // Validate email
    if (!validateEmail(email)) {
      document.getElementById('email-error').style.display = 'block';
      isValid = false;
    }
  
    // Validate query type
    if (!queryType) {
      document.getElementById('query-type-error').style.display = 'block';
      isValid = false;
    }
  
    // Validate message
    if (!message) {
      document.getElementById('message-error').style.display = 'block';
      isValid = false;
    }
  
    // Validate consent
    if (!consent) {
      document.getElementById('consent-error').style.display = 'block';
      isValid = false;
    }
  
    if (isValid) {
      document.getElementById('response').textContent = 'Message Sent! Thanks for completing the form. We\'ll be in touch soon!';
      document.getElementById('response').style.color = 'hsl(169, 82%, 27%)';
  
      // Clear form fields
      document.getElementById('contact-form').reset();
    } else {
      document.getElementById('response').textContent = '';
    }
  });
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  