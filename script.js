var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

const button = document.getElementById("valentinesButton");

button.addEventListener("click", () => {
  if (button.textContent.includes("SÍ")) {
    button.textContent = "¡Cargando amor! ❤️";
    // Redirección a WhatsApp para evitar el error de PHP
    const mensaje = encodeURIComponent("¡Sí, Fatima quiere ser tu cita de San Valentín! ❤️");
    window.location.href = `https://wa.me/TUNUMEROTELEFONO?text=${mensaje}`; 
    // ^ SUSTITUYE CON TU NÚMERO (Ej: 521XXXXXXXXXX)
  }
});

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText() {
    var fontSize = Math.min(28, window.innerWidth / 22); 
    var lineHeight = 10;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";
    context.shadowColor = "rgba(45, 45, 255, 1)";
    context.shadowBlur = 8;

    // --- SECUENCIA DE TEXTO EN ESPAÑOL ---

    if(frameNumber < 250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("cada día no puedo creer la suerte que tengo", canvas.width/2, canvas.height/2);
        opacity += 0.01;
    }
    if(frameNumber >= 250 && frameNumber < 500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("cada día no puedo creer la suerte que tengo", canvas.width/2, canvas.height/2);
        opacity -= 0.01;
    }

    if(frameNumber == 500) opacity = 0;
    if(frameNumber > 500 && frameNumber < 750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("entre trillones y trillones de estrellas, por billones de años", canvas.width/2, canvas.height/2);
        opacity += 0.01;
    }
    if(frameNumber >= 750 && frameNumber < 1000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("entre trillones y trillones de estrellas, por billones de años", canvas.width/2, canvas.height/2);
        opacity -= 0.01;
    }

    if(frameNumber == 1000) opacity = 0;
    if(frameNumber > 1000 && frameNumber < 1250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("estar vivo y poder compartir esta vida contigo", canvas.width/2, canvas.height/2);
        opacity += 0.01;
    }
    if(frameNumber >= 1250 && frameNumber < 1500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("estar vivo y poder compartir esta vida contigo", canvas.width/2, canvas.height/2);
        opacity -= 0.01;
    }

    if(frameNumber == 1500) opacity = 0;
    if(frameNumber > 1500 && frameNumber < 1750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("es algo tan increíble e impensable", canvas.width/2, canvas.height/2);
        opacity += 0.01;
    }
    if(frameNumber >= 1750 && frameNumber < 2000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("es algo tan increíble e impensable", canvas.width/2, canvas.height/2);
        opacity -= 0.01;
    }

    if(frameNumber == 2000) opacity = 0;
    if(frameNumber > 2000 && frameNumber < 2250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("y sin embargo, aquí estoy con la oportunidad de conocerte", canvas.width/2, canvas.height/2);
        opacity += 0.01;
    }
    if(frameNumber >= 2250 && frameNumber < 2500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("y sin embargo, aquí estoy con la oportunidad de conocerte", canvas.width/2, canvas.height/2);
        opacity -= 0.01;
    }

    if(frameNumber == 2500) opacity = 0;
    if(frameNumber > 2500 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText(`Te amo muchísimo Fatima, más de lo que el`, canvas.width/2, canvas.height/2 - 20);
        context.fillText(`tiempo y el espacio pueden contener`, canvas.width/2, canvas.height/2 + 20);
        opacity += 0.01;
    }
    
    if(frameNumber >= 2750 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${secondOpacity})`;
        context.fillText("¡Feliz San Valentín!", canvas.width/2, (canvas.height/2 + 80));
        secondOpacity += 0.01;
    }

    if(frameNumber >= 3000 && frameNumber < 99999){
        context.fillStyle = `rgba(255, 100, 100, ${thirdOpacity})`; // Color un poco más rojizo para la pregunta
        context.fillText("¿Quieres ser mi cita de San Valentín?", canvas.width/2, (canvas.height/2 + 130));
        thirdOpacity += 0.01;
        button.style.display = "block";
        button.textContent = "¡SÍ! ❤️";
    }   

     context.shadowColor = "transparent";
     context.shadowBlur = 0;
}

function draw() {
    context.putImageData(baseFrame, 0, 0);
    drawStars();
    updateStars();
    drawText();
    if (frameNumber < 99999) frameNumber++;
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);
