
// Get elements from the DOM
const generateButton = document.querySelector('.generate-button');
const retryButton = document.querySelector('.retry-button');
const copyButton = document.querySelector('.copy-button');
const passwordDisplay = document.querySelector('.pasted-password');
const clipboardModal = document.querySelector('.clipboard-modal');
const checkboxes = document.querySelectorAll('.checkbox');

// New elements for password length
const lengthRange = document.getElementById('lengthRange');
const lengthValue = document.getElementById('lengthValue');

// Character sets
const specialChars = '!@#$%^&*()_+{}:"<>?|[];\',./`~';
const numbers = '0123456789';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';

// Update displayed password length when slider moves
lengthRange.addEventListener('input', () => {
  lengthValue.textContent = lengthRange.value;
});

// Generate password function
function generatePassword() {
  let chars = '';
  if (document.getElementById('task1').checked) chars += specialChars;
  if (document.getElementById('task2').checked) chars += numbers;
  if (document.getElementById('task3').checked) chars += upperCase;
  if (document.getElementById('task4').checked) chars += lowerCase;

  if (chars === '') {
    alert('Please select at least one character type.');
    return '';
  }

  let passwordLength = parseInt(lengthRange.value);
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

// Event listeners
generateButton.addEventListener('click', () => {
  const password = generatePassword();
  if (password) {
    passwordDisplay.textContent = password;
  }
});

copyButton.addEventListener('click', () => {
  const password = passwordDisplay.textContent;
  if (password) {
    navigator.clipboard.writeText(password);
    clipboardModal.classList.remove('hidden');
    setTimeout(() => {
      clipboardModal.classList.add('hidden');
    }, 2000);
  }
});

retryButton.addEventListener('click', () => {
  passwordDisplay.textContent = '';
  checkboxes.forEach(checkbox => (checkbox.checked = false));
  lengthRange.value = 4;
  lengthValue.textContent = 4;
});
