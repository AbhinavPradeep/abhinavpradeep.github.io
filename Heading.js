var i = 0;
var txt = 'Most Of This Page Is Garbage! Check out the Candidate page';
var speed = 100;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("title").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter()