let fileUploader = document.querySelector('#file');
let fileContainer = document.querySelector('.file-container');
fileUploader.addEventListener('change', (e) => {
    let file = e.target.files[0];
    if(!file) return;
    let image = URL.createObjectURL(file);

    fileContainer.style.backgroundImage = `url(${image})`;
    fileContainer.classList.add('preview')
    document.querySelector('.overlay').textContent = file.name;
})