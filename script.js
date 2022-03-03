const btnHeader = document.getElementById('btn-header');
const divMenu = document.getElementById('menu-bar');
const hamBurger = document.getElementById('hamburger');
const menuBarContent = document.querySelector('.menu_bar_content');

function hideMenu() {
  divMenu.style.display = 'none';
}
btnHeader.addEventListener('click', () => {
  hideMenu();
});

hamBurger.addEventListener('click', () => {
  divMenu.style.display = 'block';
});

document.addEventListener('mouseup', (e) => {
  if (!menuBarContent.contains(e.target)) {
    hideMenu();
  }
});

const form = document.getElementById('contactForm');
const emailRequired = 'please enter your email address.';
const emailInvalid = 'Please enter a correct email address format.';
const emailInvalidLowerCase = 'Please enter a lowercase email address';

function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;

  input.className = type ? 'valid' : 'invalid';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, '', true);
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function ValidateEmailAddress(emailString) {
  const atSymbol = emailString.indexOf('@');
  const dot = emailString.indexOf('.');

  if (atSymbol < 1) return false;

  if (dot <= atSymbol + 2) return false;
  if (emailString.length - dot < 3) return false;
  if (dot === emailString.length - 1) return false;

  return true;
}

function validateEmail(input, requiredMsg, invalidMsg, lowercaseInvalid) {
  if (!hasValue(input, requiredMsg)) {
    return false;
  }

  if (input.value !== input.value.toLowerCase()) {
    showError(input, lowercaseInvalid);
    return false;
  }

  const email = input.value.trim();

  if (!ValidateEmailAddress(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (validateEmail(
      form.elements.email, emailRequired, emailInvalid, emailInvalidLowerCase,
    ))
    updateLocalStorage();
});