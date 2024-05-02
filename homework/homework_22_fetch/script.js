document.getElementById('get-cat-fact').addEventListener('click', function() {
    fetch('https://catfact.ninja/fact')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch cat fact');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('error-message').textContent = ''; // Clear any previous error message
        document.getElementById('cat-fact').textContent = data.fact;

        // Fetch cat image
        fetch('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1', requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch cat image');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('cat-image').src = data.image;
        })
        .catch(error => {
            console.error('Error fetching cat image:', error);
        });
    })
    .catch(error => {
        document.getElementById('cat-fact').textContent = ''; // Clear any previous cat fact
        document.getElementById('error-message').textContent = error.message;
    });
});