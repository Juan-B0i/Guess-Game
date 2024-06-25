// Este evento se ejecuta cuando el DOM ha sido completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Se utiliza setTimeout para ocultar el loader después de 2 segundos
    setTimeout(function() {
        // Ocultar el contenedor del loader
        document.getElementById("loader-container").style.display = "none";
        // Mostrar la página principal
        document.getElementById("pagina").style.display = "block";

        // Mostrar el campo de entrada para la conjetura del usuario
        guessInput.style.display = 'block';
        // Mostrar la imagen predeterminada
        defaultImage.style.display = 'block';
        // Mostrar la imagen azul
        azulImage.style.display = 'block';
        // Mostrar la imagen roja
        rojoImage.style.display = 'block';
        // Mostrar la imagen verde
        verdeImage.style.display = 'block';
    }, 2000); // Ocultar el loader después de 2 segundos (2000 milisegundos)

    // Seleccionar elementos HTML por su ID
    var guessInput = document.getElementById('guess-number'); // Campo de entrada para la conjetura del usuario
    var defaultImage = document.getElementById('nave-default'); // Imagen predeterminada
    var azulImage = document.getElementById('azul'); // Imagen para mostrar si la conjetura es demasiado alta
    var rojoImage = document.getElementById('rojo'); // Imagen para mostrar si la conjetura es demasiado baja
    var verdeImage = document.getElementById('verde'); // Imagen para mostrar si la conjetura es correcta
    var newNumber = document.getElementById('new-number');

    // Ocultar elementos al principio
    guessInput.style.display = 'none';
    defaultImage.style.display = 'none';
    azulImage.style.display = 'none';
    rojoImage.style.display = 'none';
    verdeImage.style.display = 'none';


});

// Esta función se ejecutará cuando la ventana haya cargado completamente
window.onload = function() {
    // Seleccionar elementos HTML por su ID
    var guessInput = document.getElementById('guess-number'); // Campo de entrada para la conjetura del usuario
    var defaultImage = document.getElementById('nave-default'); // Imagen predeterminada
    var azulImage = document.getElementById('azul'); // Imagen para mostrar si la conjetura es demasiado alta
    var rojoImage = document.getElementById('rojo'); // Imagen para mostrar si la conjetura es demasiado baja
    var verdeImage = document.getElementById('verde'); // Imagen para mostrar si la conjetura es correcta
    var newNumber = document.getElementById('new-number');
    // Generar número aleatorio entre 1 y 100
    newNumber.style.display = 'none';

    var randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber)

    var attempts = 0;

    // Función para contar los intentos del usuario y reiniciar la página después de cada 6 intentos
    function attemptsInput() {
        attempts++;
        //if (attempts % 6 === 0) {
            //location.reload(); // Reiniciar la página
        //};

        var attemptsChance = document.getElementById('intentos');

        var winChance = document.getElementById('acertadas');

        var lossChance = document.getElementById('perdidas');

        var totalChance = document.getElementById('total');

        var guess = parseInt(guessInput.value);

        defaultImage.style.display = 'none';
        azulImage.style.display = 'none';
        rojoImage.style.display = 'none';
        verdeImage.style.display = 'none';

        if (attempts % 1 === 0) {
            attemptsChance.textContent = parseInt(attemptsChance.textContent) + 1;
        };
        if (attempts % 6 === 0) {
            
            attemptsChance.textContent = parseInt(attemptsChance.textContent) * 0;

            attempts = 0; // Reiniciar el contador de intentos 
            
            lossChance.textContent = parseInt(lossChance.textContent) + 1;

            if (guess == randomNumber) {
                lossChance.textContent = parseInt(lossChance.textContent) - 1;
            }
        }

        if (attempts % 6 === 0) {
            newNumber.style.display = 'block';

            newNumber.addEventListener('click', function() {
                newNumber.style.display = 'none'; // Ocultar el botón al hacer clic
                randomNumber = Math.floor(Math.random() * 100) + 1;
                azulImage.style.display = 'none';
                rojoImage.style.display = 'none';
                verdeImage.style.display = 'none';
                defaultImage.style.display = 'block';
                guessInput.value = "";
            });
        };

        if (guess == randomNumber) {
            // Si la conjetura es igual al número aleatorio, se muestra la imagen verde
            winChance.textContent = parseInt(winChance.textContent) + 1;

            attemptsChance.textContent = parseInt(attemptsChance.textContent) * 0;

            attempts = 0; // Reiniciar el contador de intentos 

            };

            
        if (guess == randomNumber) {
            
            newNumber.style.display = 'block';

            newNumber.addEventListener('click', function() {
                newNumber.style.display = 'none'; // Ocultar el botón al hacer clic
                randomNumber = Math.floor(Math.random() * 100) + 1;
                azulImage.style.display = 'none';
                rojoImage.style.display = 'none';
                verdeImage.style.display = 'none';
                defaultImage.style.display = 'block';
                guessInput.value = "";
            });
        };
        
        totalChance.textContent = parseInt(lossChance.textContent) + parseInt(winChance.textContent);
        
    }
    
    // Función para verificar el número y cambiar la imagen
    guessInput.addEventListener('change', function() {

        attemptsInput(); // Llamar a la función para contar los intentos
        // Se obtiene el valor ingresado por el usuario y se convierte a un número entero
        var guess = parseInt(guessInput.value);
        
        // Ocultar todas las imágenes
        defaultImage.style.display = 'none';
        azulImage.style.display = 'none';
        rojoImage.style.display = 'none';
        verdeImage.style.display = 'none';
        
        // Mostrar la imagen correspondiente según el valor del input
        if (guess < randomNumber) {
            // Si la conjetura es menor que el número aleatorio, se muestra la imagen roja
            rojoImage.style.display = 'block';
        } else if (guess > randomNumber) {
            // Si la conjetura es mayor que el número aleatorio, se muestra la imagen azul
            azulImage.style.display = 'block';
        } else if (guess == randomNumber) {
            // Si la conjetura es igual al número aleatorio, se muestra la imagen verde
            verdeImage.style.display = 'block';
        }

        else {
            // CUando no se ponga ningun numero en el campo mostrara la imagen default
            defaultImage.style.display = 'block';
        }
    });
}
