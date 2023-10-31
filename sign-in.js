//sign in for abou-page.html
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const messageDiv = document.getElementById('message');
    const users = [];
  
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        formSubmission();
        
    });
  
  const passwordInput = document.getElementById('password');
    passwordInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            formSubmission();
        }
    });

    function formSubmission(){
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
  
        const user = {email, password };
        users.push(user);
  
        messageDiv.textContent = `Sign-up successful for ${user.email}!`;
    }
});
