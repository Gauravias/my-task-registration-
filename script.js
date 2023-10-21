document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();

        if (!this.checkValidity()) {
            alert('Please fill in all required fields.');
            return;
        }

        const name = document.getElementById('inputName').value;
        const choices1 = [...document.getElementById('choice').selectedOptions].map(option => option.value);
        const email = document.getElementById('inputEmail').value;
        const choices2 = [...document.getElementById('choiceo').selectedOptions].map(option => option.value);
        const phone = document.getElementById('inputPhone').value;
        const password = document.getElementById('Password').value;

        console.log({
            name,
            choices1,
            email,
            choices2,
            phone,
            password
        });

        // Continue with the submission or other tasks
    });
});
