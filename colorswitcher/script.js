const colors = document.querySelectorAll('.color');
const body = document.querySelector("body");

colors.forEach(function(color) {
    color.addEventListener("click", function(clickevent) {
        console.log(clickevent);
        console.log(clickevent.target);

        if (clickevent.target.id === 'red') {
            body.style.backgroundColor = "red";
        }

        if (clickevent.target.id === 'white') {
            body.style.backgroundColor = "white";
        }

        if (clickevent.target.id === 'blue') {
            body.style.backgroundColor = "blue";
        }

        if (clickevent.target.id === 'green') {
            body.style.backgroundColor = "green";
        }

        if (clickevent.target.id === 'yellow') {
            body.style.backgroundColor = "yellow";
        }

        if (clickevent.target.id === 'grey') {
            body.style.backgroundColor = "grey";
        }

        if (clickevent.target.id === 'black') {
            body.style.backgroundColor = "black";
        }
    });
});
