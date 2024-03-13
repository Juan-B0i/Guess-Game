// Función para generar una pieza aleatoria
function generateRandomPiece() {
    // Lista de piezas posibles (cada pieza es una lista de coordenadas)
    const pieces = [
        [[1, 0], [1, 1], [1, 2], [1, 3]],   // Pieza horizontal
        [[0, 0], [1, 0], [2, 0], [3, 0]],   // Pieza vertical
        [[0, 0], [0, 1], [1, 0], [1, 1]],   // Pieza cuadrada
        [[0, 0], [0, 1], [1, 1], [1, 2]],   // Pieza L
        [[0, 2], [1, 0], [1, 1], [1, 2]],   // Pieza L invertida
        [[0, 1], [1, 0], [1, 1], [2, 0]],   // Pieza T
        [[0, 1], [1, 1], [2, 1], [2, 0]]    // Pieza Z
    ];

    // Escoge una pieza aleatoria
    const randomIndex = Math.floor(Math.random() * pieces.length);
    return pieces[randomIndex];
}

// Datos de la matriz de píxeles (0: negro, 1: amarillo)
const pixelMatrix = Array.from({ length: 10 }, () => Array(10).fill(0)); // Crear una matriz de 10x10 con ceros

// Obtener una pieza aleatoria
let currentPiece = generateRandomPiece();
let pieceX = 0;
let pieceY = 0;

// Colocar la pieza aleatoria en la matriz
function placePiece() {
    currentPiece.forEach(coord => {
        const [x, y] = coord;
        pixelMatrix[pieceX + x][pieceY + y] = 1; // Colocar un uno en la coordenada de la pieza
    });
}

// Quitar la pieza actual de la matriz
function clearPiece() {
    currentPiece.forEach(coord => {
        const [x, y] = coord;
        pixelMatrix[pieceX + x][pieceY + y] = 0; // Quitar la pieza de la matriz
    });
}

// Función para mover la pieza a la izquierda
function moveLeft() {
    clearPiece();
    if (pieceY > 0) {
        pieceY--;
    }
    placePiece();
    render();
}

// Función para mover la pieza a la derecha
function moveRight() {
    clearPiece();
    if (pieceY + currentPiece[0].length < pixelMatrix[0].length) {
        pieceY++;
    }
    placePiece();
    render();
}

// Función para mover la pieza hacia abajo
function moveDown() {
    clearPiece();
    if (pieceX + currentPiece.length < pixelMatrix.length) {
        pieceX++;
    }
    placePiece();
    render();
}

// Función para renderizar la matriz de píxeles
function render() {
    const pixelContainer = document.getElementById('pixel-container');
    pixelContainer.innerHTML = ''; // Limpiar el contenedor antes de volver a renderizar
    pixelMatrix.forEach(row => {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('pixel-row');
        row.forEach(pixelValue => {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            if (pixelValue === 1) {
                pixel.classList.add('yellow');
            }
            rowContainer.appendChild(pixel);
        });
        pixelContainer.appendChild(rowContainer);
    });
}

// Escuchar eventos de teclado
document.addEventListener('keydown', event => {
    switch (event.key) {
        case 'ArrowLeft':
        case 'a':
            moveLeft();
            break;
        case 'ArrowRight':
        case 'd':
            moveRight();
            break;
        case 'ArrowDown':
        case 's':
            moveDown();
            break;
    }
});

// Inicializar la posición de la pieza y renderizar
placePiece();
render();