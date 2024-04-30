function validateEmail(email) {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePhone(phone) {
    // Phone number validation regex
    const phoneRegex = /^(\d{10}|\d{3}[\s.-]?\d{3}[\s.-]?\d{4})$/;
    return phoneRegex.test(phone);
  }

  function validatePassword(password) {
    const strongRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const mediumRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (strongRegex.test(password)) {
      return 'strong';
    } else if (mediumRegex.test(password)) {
      return 'medium';
    } else {
      return 'poor';
    }
  }

  function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthBar = document.getElementById('strengthBar');

    const passwordStrength = validatePassword(password);
    if (passwordStrength === 'strong') {
      strengthBar.style.width = '100%';
      strengthBar.className = 'strength-bar strong';
      document.getElementById('signupError').textContent = '';
         }
     else if (passwordStrength === 'medium') {
      strengthBar.style.width = '60%';
      strengthBar.className = 'strength-bar medium';
     
    } else {
      strengthBar.style.width = '30%';
      strengthBar.className = 'strength-bar poor';
    }
  }
   function validateSignUp() {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const signupError = document.getElementById('signupError');

    if (!validateEmail(email)) {
      signupError.textContent = 'Invalid email format.';
      return false;
    }

    if (!validatePhone(phone)) {
      signupError.textContent = 'Invalid phone number format.';
      return false;
    }

    const passwordStrength = validatePassword(password);
    if (passwordStrength === 'poor') {
      signupError.textContent = 'Password must be at least 8 characters long, contain one uppercase, one lowercase, and one number.';
      return false;
    }
    signupError.textContent = ''; // Clear any previous errors
    return true;
  }

  function validateLogin() {
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;
    const loginError = document.getElementById('loginError');

    if (!validateEmail(loginEmail)) {
      loginError.textContent = 'Invalid email format.';
      return false;
    }
    function validatePassword(loginPassword) {
        const strongRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        const mediumRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  
        if (strongRegex.test(loginPassword)) {
          return 'strong';
        } else if (mediumRegex.test(loginPassword)) {
          return 'medium';
        } else {
          return 'poor';
        }
      }
  
    const passwordStrength = validatePassword(loginPassword);
    if (passwordStrength === 'poor') {
      loginError.textContent = 'Password must be at least 8 characters long, contain one uppercase, one lowercase, and one number.';
      return false;
    }
    loginError.textContent = ''; // Clear any previous errors
    return true;
  }
  function checkPasswordStrengthl() {
    const password = document.getElementById('loginPassword').value;
    const strengthBar = document.getElementById('strengthBarl');
      const passwordStrength = validatePassword(password);
    if (passwordStrength === 'strong') {
      strengthBar.style.width = '100%';
      strengthBar.className = 'strength-bar strong';
      document.getElementById('loginError').textContent = '';
      } else if (passwordStrength === 'medium') {
      strengthBar.style.width = '60%';
      strengthBar.className = 'strength-bar medium';
         } else {
      strengthBar.style.width = '30%';
      strengthBar.className = 'strength-bar poor';
    }
  }