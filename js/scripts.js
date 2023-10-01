document.querySelector("#pokedex-icon").addEventListener("click", function() {
    const outerObject = this;
    const scalingSolid = document.getElementById("scaling-solid");
    const pokemonLogo = document.querySelector('.pokemon-logo');
    const boxElement = document.querySelector('.box');
    
    // Add the clicked class to apply the scaling effect to the pokedex-icon
    outerObject.classList.add("clicked");

    setTimeout(() => {
        scalingSolid.classList.add("clicked");

        setTimeout(function() {
            pokemonLogo.style.opacity = '1';
            pokemonLogo.style.animation = 'bounceScale 1.3s forwards';

            // After the bounce animation is complete, slide in the box and slider
            setTimeout(function() {
                boxElement.style.left = '35%'; // Initiating the slide-in via CSS transition
            }, 2000); // Waiting for 2s after the logo animation starts

        }, 2000);
    }, 1000);
});

window.onload = function() {
    document.body.classList.add("is-loaded");
};
