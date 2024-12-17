// Ocultar todos los juegos emergentes y reiniciar el contenido
function hideAllGames() {
    document.querySelectorAll('.game-container').forEach((game) => {
        game.style.display = 'none';

        // Reiniciar el contenido de cada juego según su ID
        if (game.id === 'fortuneGame') {
            const predictionImage = document.getElementById('predictionImage');
            predictionImage.src = '';
            predictionImage.style.display = 'none';
            document.getElementById('thinkingImage').style.display = 'none';
        } else if (game.id === 'compatibilityGame') {
            document.getElementById('yourName').value = '';
            document.getElementById('crushName').value = '';
            document.getElementById('compatibilityResult').textContent = '';
            document.getElementById('thinkingImageCompatibility').style.display = 'none';
        } else if (game.id === 'oracleGame') {
            const oracleAnswerImage = document.getElementById('oracleAnswerImage');
            oracleAnswerImage.src = '';
            oracleAnswerImage.style.display = 'none';
            document.getElementById('thinkingImageOracle').style.display = 'none';
        } else if (game.id === 'specialDateGame') {
            document.getElementById('specialDate').textContent = '';
            document.getElementById('eventType').textContent = '';
            document.getElementById('specialDateResult').style.display = 'none';
            document.getElementById('thinkingImageSpecialDate').style.display = 'none';
        }
    });
}

// Mostrar un juego específico
function showGame(gameId) {
    hideAllGames();
    const gameElement = document.getElementById(gameId);
    if (gameElement) {
        gameElement.style.display = 'block';
    }
}

// Cerrar cualquier juego emergente
function closeGame() {
    hideAllGames();
}

// Lógica de la Galleta de la Fortuna
document.querySelector("button[onclick=\"showGame('fortuneGame')\"]").addEventListener('click', () => {
    const thinkingImage = document.getElementById('thinkingImage');
    const predictionImage = document.getElementById('predictionImage');
    const imagePaths = Array.from({ length: 100 }, (_, i) => `images/${i + 1}.png`);

    thinkingImage.style.display = 'block'; // Mostrar ícono "Pensando"
    predictionImage.style.display = 'none';

    setTimeout(() => {
        const randomImage = imagePaths[Math.floor(Math.random() * imagePaths.length)];
        predictionImage.src = randomImage;
        thinkingImage.style.display = 'none'; // Ocultar ícono "Pensando"
        predictionImage.style.display = 'block';
    }, 2000);
});

// Lógica del Oráculo de Sí o No
document.querySelector("button[onclick=\"showGame('oracleGame')\"]").addEventListener('click', () => {
    const thinkingImage = document.getElementById('thinkingImageOracle');
    const oracleAnswerImage = document.getElementById('oracleAnswerImage');
    const oracleAnswers = Array.from({ length: 24 }, (_, i) => `images/R${i + 1}.png`);

    thinkingImage.style.display = 'block'; // Mostrar ícono "Pensando"
    oracleAnswerImage.style.display = 'none';

    setTimeout(() => {
        const randomAnswer = oracleAnswers[Math.floor(Math.random() * oracleAnswers.length)];
        oracleAnswerImage.src = randomAnswer;
        thinkingImage.style.display = 'none'; // Ocultar ícono "Pensando"
        oracleAnswerImage.style.display = 'block';
    }, 2000);
});

// Lógica del Juego de Compatibilidad
document.getElementById('calculateCompatibility').addEventListener('click', () => {
    const yourName = document.getElementById('yourName').value.trim();
    const crushName = document.getElementById('crushName').value.trim();
    const thinkingImage = document.getElementById('thinkingImageCompatibility');
    const compatibilityResult = document.getElementById('compatibilityResult');

    if (!yourName || !crushName) {
        alert('Por favor, ingresa ambos nombres para calcular la compatibilidad.');
        return;
    }

    thinkingImage.style.display = 'block'; // Mostrar ícono "Pensando"
    compatibilityResult.textContent = '';

    setTimeout(() => {
        const compatibilityScore = Math.floor(Math.random() * 101);
        compatibilityResult.textContent = `¡La compatibilidad entre ${yourName} y ${crushName} es del ${compatibilityScore}%!`;
        thinkingImage.style.display = 'none'; // Ocultar ícono "Pensando"
    }, 2000);
});

// Lógica para la Fecha Especial
document.getElementById('discoverDateButton').addEventListener('click', () => {
    const thinkingImage = document.getElementById('thinkingImageSpecialDate');
    const specialDateResult = document.getElementById('specialDateResult');
    const specialDateText = document.getElementById('specialDate');
    const eventTypeResult = document.getElementById('eventType');

    thinkingImage.style.display = 'block'; // Mostrar ícono "Pensando"
    specialDateResult.style.display = 'none';

    setTimeout(() => {
        const today = new Date();
        const twelveMonthsLater = new Date();
        twelveMonthsLater.setMonth(today.getMonth() + 12);

        const randomDate = new Date(today.getTime() + Math.random() * (twelveMonthsLater - today));
        const options = { year: 'numeric', month: 'long', day: 'numeric' };

        const eventTypes = [
            "Un gran descubrimiento",
            "Una sorpresa agradable",
            "Buenas noticias",
            "Un reencuentro especial",
            "Una llamada inesperada",
            "Una invitación llegará",
            "Recibirás un obsequio",
            "Una persona especial llega a tu vida",
            "Se cumplirá un deseo",
            "Tendrás éxito en tu cometido",
            "Día de suerte",
            "Día divertido"
        ];

        specialDateText.textContent = randomDate.toLocaleDateString('es-ES', options);
        eventTypeResult.textContent = eventTypes[Math.floor(Math.random() * eventTypes.length)];
        specialDateResult.style.display = 'block';
        thinkingImage.style.display = 'none'; // Ocultar ícono "Pensando"
    }, 2000);
});
