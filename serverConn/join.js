document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submit');
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const Id = document.getElementById('username');
        const Password = document.getElementById('password');
        const Email = document.getElementById('email');

        let id = Id.value;
        let password = Password.value;
        let email = Email.value;

        let userData = {
            user_name: id,
            password: password,
            email: email
        };
        axios.post('http://localhost:3000/api/users/join', userData)
            .then(res => {
                console.log('회원가입 성공:', res.data); 
                document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submit');
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const Id = document.getElementById('username');
        const Password = document.getElementById('password');
        const Email = document.getElementById('email');

        let id = Id.value;
        let password = Password.value;
        let email = Email.value;

        let userData = {
            user_name: id,
            password: password,
            email: email
        };
        axios.post('http://localhost:3000/api/users/join', userData)
            .then(res => {
                console.log('회원가입 성공:', res.data); 
                window.location.href = '로그인.html';
            })
            .catch(error => {
                console.error('회원가입 실패:', error); 
        
            });
    });
});
            })
            .catch(error => {
                console.error('회원가입 실패:', error); 
        
            });
    });
});