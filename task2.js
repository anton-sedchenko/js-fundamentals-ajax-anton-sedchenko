// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

function getCity() {
    const usersDataUrl = 'https://jsonplaceholder.typicode.com/users';
    const inputElem = document.getElementById('userNameInput');
    const btnElem = document.getElementById('getUserButton');

    async function findUserCity() {
        const inputValue = inputElem.value;
        const response = await fetch(usersDataUrl);
        const allUsersData = await response.json();

        const foundUser = allUsersData.find(user => user.name === inputValue);
        return foundUser ? foundUser.address.city : 'Current user not found';
    }

    async function showUserCity() {
        const userCityElem = document.getElementById('userCity');
        const userCity = await findUserCity();
        userCityElem.innerText = userCity;
    }

    btnElem.addEventListener('click', showUserCity);
}

getCity();
