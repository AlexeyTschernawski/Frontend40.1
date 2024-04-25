const imageForm = document.getElementById('imageForm');

imageForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(imageForm);

    try {
        const response = await fetch('/addImage', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            alert('Image added successfully!');
            // Опционально: перезагрузка страницы или другие действия после успешной загрузки
            window.location.reload();
        } else {
            alert('Failed to add image.');
        }
    } catch (error) {
        console.error('Error adding image:', error);
    }
});
