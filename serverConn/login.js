document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submit');
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const Id = document.getElementById('username');
        const Password = document.getElementById('password');

        let id = Id.value;
        let password = Password.value;

        let userData = {
            user_name: id,
            password: password
        };

        axios.post('http://localhost:3000/api/users/login', userData)
            .then(res => {
                console.log('로그인 성공:', res.data); 
                alert("로그인 성공");
                window.location.href = 'index.html'; // 로그인 성공 시 처음페이지로
            })
            .catch(error => {
                console.error('로그인 실패:', error); 
                alert("로그인 실패");
                window.location.href = '로그인.html';
            });
    });
});
