var canvas = document.getElementById('particel');
var stage = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var particelle = new Array();
var conf = {
    numeroParticelle: 500,
    colors: [
        "rgba(0,0,0,.2)",
        "rgba(99,99,99,.2)"
    ],
    valocitaMassima: 1,
    velocitaMinima: -1,
    dimensioneMassima: 2,
    dimensioneMinima: 1,
}
for (var k = 0; k < conf.numeroParticelle; k++) {
    particelle[k] = {
        x: Math.random() * (canvas.width - 1) + 1,
        y: Math.random() * (canvas.height - 1) + 1,
        size: Math.random() * (conf.dimensioneMassima - conf.dimensioneMinima) + conf.dimensioneMinima,
        speedX: Math.random() * (conf.valocitaMassima - conf.velocitaMinima) + conf.velocitaMinima,
        speedY: Math.random() * (conf.valocitaMassima - conf.velocitaMinima) + conf.velocitaMinima,
        color: conf.colors[Math.floor(Math.random() * (conf.colors.length - 0) + 0)],
    };
}
function render() {
    stage.clearRect(0, 0, canvas.width, canvas.height);
    for (var k = 0; k < conf.numeroParticelle; k++) {
        p = particelle[k];
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x > canvas.width) p.speedX *= -1;
        if (p.y > canvas.height) p.speedY *= -1;
        if (p.x < 0) p.speedX *= -1;
        if (p.y < 0) p.speedY *= -1;
        stage.fillStyle = p.color
        stage.beginPath();
        stage.arc(p.x, p.y, p.size, Math.PI * 2, false);
        stage.fill();
    }
}
setInterval(() => render(), 33);