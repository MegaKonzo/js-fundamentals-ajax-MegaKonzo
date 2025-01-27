// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

const userNameInput = document.getElementById('userNameInput');
const getUserButton = document.getElementById('getUserButton');
const userCitySpan = document.getElementById('userCity');

async function getUserByName(userName) {

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        const user = users.find(user => user.name.toLowerCase() === userName.toLowerCase());

        if (user) {
            userCitySpan.textContent = `City: ${user.address.city}`;
        } else {
            userCitySpan.textContent = 'User not found';
        }
}

getUserButton.addEventListener('click', () => {
    const userName = userNameInput.value.trim();

    if (userName) {
        getUserByName(userName);
    } else {
        userCitySpan.textContent = 'Please enter a user name';
    }
});