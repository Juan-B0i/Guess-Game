// Datos de la columna de píxeles (0: negro, 1: amarillo)
const columnPixels = [1, 0, 1, 0, 1, 1, 0, 1, 1, 0];

// Obtener el contenedor de píxeles
const pixelContainer = document.getElementById('pixel-container');

// Generar los píxeles según los datos
columnPixels.forEach(pixelValue => {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    if (pixelValue === 1) {
        pixel.classList.add('yellow');
    }
    pixelContainer.appendChild(pixel);
});
