var i = 0;
var txt = ' " Hey! my name is  Feruz, I am frontend developer. And i can  make your life Easy! "';
var speed = 90;

    function typing() {
    const audio = document.getElementById('audio');
    const text = document.getElementById("introPart")
    if (i < txt.length) {
      text.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
}

window.addEventListener('load', typing)