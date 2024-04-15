const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalDescription = document.getElementById('modal-description');
const closeBtn = document.getElementsByClassName('close')[0];
const imageContainer = document.getElementById('imageContainer');
const prevPageBtn = document.getElementById('prevPageBtn');
const nextPageBtn = document.getElementById('nextPageBtn');
const pageCounter = document.getElementById('pageCounter');

// Array of image data
const imageData = [
    {
        src: './img/irises.jpg',
        name: 'Picture 1',
        description: 'Description about picture',
        dimensions: '65 x 55 cm'
    },
    {
        src: './img/portrait-of-doctor-gachet-1890.jpgLarge.jpg',
        name: 'portrait-of-doctor-gachet-1890',
        description: 'Description about picture',
        dimensions: '65 x 55 cm'
    },
    {
        src: './img/irises.jpg',
        name: 'Picture 1',
        description: 'Description about picture',
        dimensions: '65 x 55 cm'
    },
    {
        src: './img/portrait-of-doctor-gachet-1890.jpgLarge.jpg',
        name: 'portrait-of-doctor-gachet-1890',
        description: 'Description about picture',
        dimensions: '65 x 55 cm'
    },
    {
        src: './img/irises.jpg',
        name: 'Picture 1',
        description: 'Description about picture',
        dimensions: '65 x 55 cm'
    },
    {
        src: './img/portrait-of-doctor-gachet-1890.jpgLarge.jpg',
        name: 'portrait-of-doctor-gachet-1890',
        description: 'Description about picture',
        dimensions: '65 x 55 cm'
    },
    {
        src: './img/irises.jpg',
        name: 'Picture 1',
        description: 'Description about picture',
        dimensions: '65 x 55 cm'
    },
    {
        src: './img/portrait-of-doctor-gachet-1890.jpgLarge.jpg',
        name: 'portrait-of-doctor-gachet-1890',
        description: 'Description about picture',
        dimensions: '65 x 55 cm'
    },
    {
        src: './img/irises.jpg',
        name: 'Picture 1',
        description: 'Description about picture',
        dimensions: '65 x 55 cm'
    },
    {
        src: './img/portrait-of-doctor-gachet-1890.jpgLarge.jpg',
        name: 'portrait-of-doctor-gachet-1890',
        description: 'Description about picture',
        dimensions: '65 x 55 cm'
    },
    {
        src: './img/irises.jpg',
        name: 'Picture 1',
        description: 'Description about picture',
        dimensions: '65 x 55 cm'
    },
    {
        src: './img/portrait-of-doctor-gachet-1890.jpgLarge.jpg',
        name: 'portrait-of-doctor-gachet-1890',
        description: 'Description about picture',
        dimensions: '65 x 55 cm'
    },
    {
        src: './img/vangohg.jpg',
        name: 'Picture 1',
        description: 'Description about picture',
        dimensions: '65 x 55 cm'
    },
    {
        src: './img/portrait-of-doctor-gachet-1890.jpgLarge.jpg',
        name: 'portrait-of-doctor-gachet-1890',
        description: 'Description about picture',
        dimensions: '65 x 55 cm'
    },
    {
        src: './img/irises.jpg',
        name: 'Picture 1',
        description: 'Description about picture',
        dimensions: '65 x 55 cm'
    },
    {
        src: './img/portrait-of-doctor-gachet-1890.jpgLarge.jpg',
        name: 'portrait-of-doctor-gachet-1890',
        description: 'Description about picture',
        dimensions: '65 x 55 cm'
    },
    {
        src: './img/irises.jpg',
        name: 'Picture 1',
        description: 'Description about picture',
        dimensions: '65 x 55 cm'
    },
    // Add more image data objects as needed
];

const itemsPerPage = 12;
let currentPage = 0;

// Function to display images for the current page
function displayImages(page) {
    imageContainer.innerHTML = '';

    const startIndex = page * itemsPerPage;
    const endIndex = (page + 1) * itemsPerPage;

    for (let i = startIndex; i < endIndex && i < imageData.length; i++) {
        const data = imageData[i];
        const item = document.createElement('div');
        item.classList.add('item');

        item.innerHTML = `
            <img src="${data.src}" alt="Товар ${i + 1}">
            <div class="nametext">
                <div class="nametext1">${data.name}</div>
                <div class="nametext2"></div>
                <div class="nametext3">${data.dimensions}</div>
            </div>
            <div class="description">
                <p>${data.description}</p>
            </div>
        `;

        item.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = data.src;
            modalDescription.textContent = data.description;
        });

        imageContainer.appendChild(item);
    }

    // Update page counter
    pageCounter.textContent = currentPage + 1;
}

// Function to update pagination buttons
function updatePaginationButtons() {
    prevPageBtn.disabled = currentPage === 0;
    nextPageBtn.disabled = (currentPage + 1) * itemsPerPage >= imageData.length;
}

// Display initial page
displayImages(currentPage);
updatePaginationButtons();

// Event listeners for pagination buttons
prevPageBtn.addEventListener('click', () => {
    currentPage--;
    displayImages(currentPage);
    updatePaginationButtons();
});

nextPageBtn.addEventListener('click', () => {
    currentPage++;
    displayImages(currentPage);
    updatePaginationButtons();
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});
// Create item elements dynamically
imageData.forEach((data, index) => {
    const item = document.createElement('div');
    item.classList.add('item');

    item.innerHTML = `
        <img src="${data.src}" alt="Товар ${index + 1}">
        <div class="nametext">
            <div class="nametext1">${data.name}</div>
            <div class="nametext2"></div>
            <div class="nametext3">${data.dimensions}</div>
        </div>
        <div class="description">
            <p>${data.description}</p>
        </div>
    `;

    item.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = data.src;
        modalDescription.textContent = data.description;
    });

    imageContainer.appendChild(item);
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});