const inputFile = document.querySelector('.input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', async (e) => {
    try {
        let formData = new FormData();
        formData.append('file', inputFile.files[0]);
        let response = await fetch('/api/image', {
            method: 'POST',
            body: formData
        })
        if(response.ok) {
            const reqData = await response.json();
            console.log(reqData);
        } else {
            return new Error('Ошибка загрузки!')
        }
    } catch (e) {
        let error = new Error(e);
        console.error(error);
    }

});