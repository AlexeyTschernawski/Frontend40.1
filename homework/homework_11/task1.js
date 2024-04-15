// Исходный массив строк
const stringsArray = ["Первая строка", "Вторая строка", "Третья строка"];

// Получаем элемент body для добавления div
const body = document.body;

// Проходим по каждой строке массива
stringsArray.forEach((str) => {
    // Создаем новый div элемент
    const divElement = document.createElement("div");

    // Устанавливаем текст div элемента равным строке из массива
    divElement.textContent = str;

    // Добавляем созданный div в документ
    body.appendChild(divElement);
});

const textDiv = document.getElementById('textDiv');
const colorButton = document.getElementById('colorButton');

// Добавляем обработчик события при нажатии на кнопку
colorButton.addEventListener('click', function() {
    // Изменяем цвет текста на красный
    textDiv.style.color = 'red';
});

// Получаем ссылку на кнопку и контейнер для карточек
const addCardButton = document.getElementById('addCardButton');
const cardContainer = document.getElementById('cardContainer');

// Добавляем обработчик события при нажатии на кнопку
addCardButton.addEventListener('click', function() {
    // Создаем новую карточку
    const card = createCard();

    // Добавляем карточку в контейнер
    cardContainer.appendChild(card);
});

// Функция для создания новой карточки
function createCard() {
    // Создаем элементы DOM для карточки
    const card = document.createElement('div');
    card.classList.add('card');

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = 'Заголовок карточки';

    const cardText = document.createElement('p');
    cardText.textContent = 'Текст карточки';

    const cardImage = document.createElement('img');
    cardImage.src = 'url_картинки.jpg'; // Замените на ваш URL картинки
    cardImage.alt = 'Изображение карточки';

    // Добавляем элементы DOM в карточку
    card.appendChild(cardTitle);
    card.appendChild(cardText);
    card.appendChild(cardImage);

    return card;
}