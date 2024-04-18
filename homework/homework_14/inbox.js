let spaceship = {
    name: "бревно Б15",
    manufacturer: "самарский космозавод имени Гаврикова",
    crew: 4,
    maxSpeed: "50 км/ч "
};

// Функция для отображения характеристик космического корабля на странице
function displaySpaceshipInfo() {
    const spaceshipInfoDiv = document.getElementById("spaceshipInfo");
    spaceshipInfoDiv.innerHTML = `
        <p><strong>Название:</strong> ${spaceship.name}</p>
        <p><strong>Производитель:</strong> ${spaceship.manufacturer}</p>
        <p><strong>Экипаж:</strong> ${spaceship.crew}</p>
        <p><strong>Максимальная скорость:</strong> ${spaceship.maxSpeed}</p>
    `;
}

// Функция для скрытия производителя космического корабля на странице
function hideManufacturer() {
    const manufacturerParagraph = document.querySelector("#spaceshipInfo p:nth-child(2)"); // выбираем второй абзац
    manufacturerParagraph.style.display = "none";
}

// Добавляем обработчик события на кнопку для скрытия производителя
const hideManufacturerButton = document.getElementById("hideManufacturerButton");
hideManufacturerButton.addEventListener("click", hideManufacturer);

const changeManufacturerButton = document.getElementById("changeManufacturerButton");
changeManufacturerButton.addEventListener("click", function() {
    const newManufacturer = prompt("Ilon Mask");
    if (newManufacturer !== null) { // Проверяем, была ли введена новая строка
        changeManufacturer(newManufacturer);
    }
})

// Вызываем функцию для отображения характеристик космического корабля при загрузке страницы
displaySpaceshipInfo();