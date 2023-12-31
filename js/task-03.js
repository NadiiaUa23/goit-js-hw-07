const welcomInpyt = document.getElementById('name-input');
const welcomOutput = document.getElementById('name-output');

welcomInpyt.addEventListener('input', updateName);
 
function updateName() {
    const inputValue = welcomInpyt.value.trim();
    welcomOutput.textContent = inputValue || 'Anonymous';
}

