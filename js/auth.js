const auth = () => {
    const buttonAuth = document.querySelector('.button-auth');
    const modalAuth = document.querySelector('.modal-auth');
    const buttonOut = document.querySelector('.button-out');
    const userName = document.querySelector('.user-name');
    const closeAuth = document.querySelector('.close-auth');
    const logInForm = document.getElementById('logInForm');
    const inputLogin = document.getElementById('login');
    const inputPassword = document.getElementById('password');
    const buttonCart = document.querySelector('.button-cart');
    const body = document.querySelector('.modal-body');
    const modalPricetag = document.querySelector('.modal-pricetag');

    const login = (user) => {
        buttonAuth.style.display = 'none';

        buttonOut.style.display = 'flex';
        userName.style.display = 'flex';
        buttonCart.style.display = 'flex';

        userName.textContent = user.login;
        modalAuth.style.display = 'none';
    };

    const logout = () => {
        body.innerHTML = '';
        modalPricetag.textContent = '0 ₽';

        buttonAuth.style.display = 'flex';

        buttonOut.style.display = 'none';
        userName.style.display = 'none';
        userName.textContent = '';
        buttonCart.style.display = 'none';

        localStorage.removeItem('user');
        localStorage.removeItem('cart');
    };

    buttonAuth.addEventListener('click', () => {
        modalAuth.style.display = 'flex';
    });

    closeAuth.addEventListener('click', () => {
        modalAuth.style.display = 'none';
    });

    buttonOut.addEventListener('click', () => {
        logout();
    });

    logInForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (inputLogin.value === '' || !inputLogin.value.trim()) {
            alert('Введите логин!');
            return;
        }

        if (inputPassword.value === '' || !inputPassword.value.trim()) {
            alert('Введите пароль!');
            return;
        }

        const user = {
            login: inputLogin.value.trim(),
            password: inputPassword.value.trim()
        };

        localStorage.setItem('user', JSON.stringify(user));

        login(user);
    });

    if (localStorage.getItem('user')) {
        login(JSON.parse(localStorage.getItem('user')));
    }
};

auth();