document.querySelector("#pokedex-icon").addEventListener("load", function() {
    const outerObject = this; // Reference to the <object> element

    // Directly add a click event to the outerObject since it encapsulates the SVG
    outerObject.addEventListener("click", function() {
        // Add the clicked class to apply the scaling effect
        outerObject.classList.add("clicked");
    });
});

// For the fade-in effect:
window.onload = function() {
    document.body.classList.add("is-loaded");
};
