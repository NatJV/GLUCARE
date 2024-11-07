// JS buat pop up sign up 
function openModal() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('step1').style.display = 'block';
}

function nextStep(step) {
    document.querySelector('.modal:not([style*="display: none"])').style.display = 'none';
    document.getElementById(`step${step}`).style.display = 'block';
}

function previousStep(step) {
    document.querySelector('.modal:not([style*="display: none"])').style.display = 'none';
    document.getElementById(`step${step}`).style.display = 'block';
}

window.onload = openModal;
