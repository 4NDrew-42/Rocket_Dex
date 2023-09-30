document.querySelector("#pokedex-icon").addEventListener("load", function() {
    const svgDoc = this.contentDocument;
    const outerObject = this; // Reference to the outer <object> element

    svgDoc.addEventListener("DOMContentLoaded", function() {
        const pokedexIcon = svgDoc.getElementById("pokedexIcon");
        if (pokedexIcon) {
            pokedexIcon.addEventListener("click", function() {
                // Add the clicked class to the outer <object> element to apply the scaling effect
                outerObject.classList.toggle("clicked");
                
                setTimeout(() => {
                    gsap.to(svgDoc.getElementById("topYellow"), {duration: 0.3, attr:{d: 'M0 0C0 0 5.37258 0 12 0H48C54.6274 0 60 0 60 0V29.6119H0V0Z'}});
                    gsap.to(svgDoc.getElementById("bottomYellow"), {duration: 0.3, attr:{d: 'M0 30.3984H60V60.0103C60 60.0103 54.6274 60.0103 48 60.0103H12C5.37258 60.0103 0 60.0103 0 60.0103V30.3984Z'}});
                }, 1000);
            });
        }
    });
});


