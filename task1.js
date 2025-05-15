// Завдання: отримання даних про користувачів 
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users 
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js 

async function getUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(url);
    const usersData = await response.json();
    const listElem = document.querySelector('.usersList');

    usersData.forEach((user) => {
        const userNameElem = document.createElement('li');
        userNameElem.innerHTML = `<p>${user.name}</p>`;
        listElem.appendChild(userNameElem);
    });
}

getUsers();
