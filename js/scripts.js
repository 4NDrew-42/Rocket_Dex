document.querySelector("#pokedex-icon").addEventListener("load", function() {
    const outerObject = this; // Reference to the <object> element
    const scalingSolid = document.getElementById("scaling-solid"); // Reference to the scaling solid

    outerObject.addEventListener("click", function() {
        // Add the clicked class to apply the scaling effect to the pokedex-icon
        outerObject.classList.add("clicked");

        // Add a delay to then apply the clicked class to scalingSolid
        setTimeout(() => {
            scalingSolid.classList.add("clicked");
        }, 1000);  // 1000ms or 1s, which is the time it takes for the pokedex-icon's scaling to finish
    });
});

window.onload = function() {
    document.body.classList.add("is-loaded");
};
