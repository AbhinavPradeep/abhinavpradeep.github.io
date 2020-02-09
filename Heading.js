var i = 0;
var txt = 'Welcome to SCONUG.org';
var speed = 100;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("title").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter()