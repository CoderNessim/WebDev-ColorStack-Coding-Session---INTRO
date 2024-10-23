// Get elements from the DOM
const generateButton = document.querySelector('.generate-button');
const retryButton = document.querySelector('.retry-button');
const copyButton = document.querySelector('.copy-button');
const passwordDisplay = document.querySelector('.pasted-password');
const clipboardModal = document.querySelector('.clipboard-modal');
const checkboxes = document.querySelectorAll('.checkbox');

const task1 = document.getElementById('task1');
const task2 = document.getElementById('task2');
const task3 = document.getElementById('task3');
const task4 = document.getElementById('task4');

// New elements for password length
const lengthRange = document.getElementById('lengthRange');
const lengthValue = document.getElementById('lengthValue');

// Character sets
const specialChars = '!@#$%^&*()_+{}:"<>?|[];\',./`~';
const numbers = '0123456789';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';

function passwordGenerate() {
  let passswordChars = '';
  if (task1.checked) passswordChars += specialChars;
  if (task2.checked) passswordChars += numbers;
  if (task3.checked) passswordChars += upperCase;
  if (task4.checked) passswordChars += lowerCase;

  const passwordLength = lengthRange.value;

  if (!passswordChars) {
    alert('Please select at least one input!');
  }
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    password += passswordChars.charAt(
      Math.floor(Math.random() * passswordChars.length)
    );
  }
  return password;
}

generateButton.addEventListener('click', () => {
  const password = passwordGenerate();
  passwordDisplay.textContent = password;
});

lengthRange.addEventListener('input', () => {
  lengthValue.textContent = lengthRange.value;
});

retryButton.addEventListener('click', () => {
  passwordDisplay.textContent = '';
  task1.checked = false;
  task2.checked = false;
  task3.checked = false;
  task4.checked = false;
  lengthRange.value = 4;
  lengthValue.textContent = '4';
});

copyButton.addEventListener('click', () => {
  const password = passwordDisplay.textContent;
  if (password) {
    navigator.clipboard.writeText(password);
    clipboardModal.classList.toggle('hidden');
    setTimeout(() => {
      clipboardModal.classList.toggle('hidden');
    }, 2000);
  }
});

// // Update displayed password length when slider moves
// lengthRange.addEventListener('input', () => {
//   lengthValue.textContent = lengthRange.value;
// });

// // Generate password function
// function generatePassword() {
//   let chars = '';
//   if (document.getElementById('task1').checked) chars += specialChars;
//   if (document.getElementById('task2').checked) chars += numbers;
//   if (document.getElementById('task3').checked) chars += upperCase;
//   if (document.getElementById('task4').checked) chars += lowerCase;

//   if (chars === '') {
//     alert('Please select at least one character type.');
//     return '';
//   }

//   let passwordLength = parseInt(lengthRange.value);
//   let password = '';
//   for (let i = 0; i < passwordLength; i++) {
//     password += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   return password;
// }

// // Event listeners
// generateButton.addEventListener('click', () => {
//   const password = generatePassword();
//   if (password) {
//     passwordDisplay.textContent = password;
//   }
// });

// copyButton.addEventListener('click', () => {
//   const password = passwordDisplay.textContent;
//   if (password) {
//     navigator.clipboard.writeText(password);
//     clipboardModal.classList.remove('hidden');
//     setTimeout(() => {
//       clipboardModal.classList.add('hidden');
//     }, 2000);
//   }
// });

// retryButton.addEventListener('click', () => {
//   passwordDisplay.textContent = '';
//   checkboxes.forEach(checkbox => (checkbox.checked = false));
//   lengthRange.value = 4;
//   lengthValue.textContent = 4;
// });


 // A simple async function
async function fetchData() {
    console.log('1. Start fetching data...');
    
    // Simulate fetching data with a delay (e.g., fetching from an API)
    const response = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('2. Fetched data');
        }, 2000); // 2 seconds delay
    });

    console.log(response);
    console.log('3. Finished fetching data.');
}

// Synchronous code
console.log('A. Before calling fetchData');

// Call the async function
fetchData();

console.log('B. After calling fetchData');

 