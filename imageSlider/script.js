document.addEventListener("DOMContentLoaded", function () {
    console.log("Script Loaded"); // Debugging

    const images = [
        "../assets/img1.png",
        "../assets/img2.png",
        "../assets/img3.png",
        "../assets/img4.png",
        "../assets/img5.png",
    ];

    let currentIndex = 0;
    const slider = document.getElementById("slider");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    // Debugging to check if elements exist
    console.log(slider, prevBtn, nextBtn);

    if (!slider || !prevBtn || !nextBtn) {
        console.error("Elements not found! Check your HTML structure.");
        return;
    }

    function updateImage() {
        console.log("Changing image to:", images[currentIndex]); // Debugging
        slider.src = images[currentIndex];
    }

    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });

    updateImage(); // Ensure first image loads
});
