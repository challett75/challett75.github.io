"use strict"

// Array of image paths to cycle through (these are the menu items)
const image_elements = [
    "/images/grilled-cheese.jpg", 
    "/images/lasagna.jpg", 
    "/images/mac-n-cheese.jpg", 
    "/images/pulled-pork.jpg", 
    "/images/steak.jpg"
];

// Select only the images with the class 'cycle-img' from the DOM (so it excludes the home button or other unrelated images)
const imageElements = document.querySelectorAll(".cycle-img");

// Wait for the DOM to fully load before running this code
document.addEventListener("DOMContentLoaded", () => {
    // Initially display the first three images
    updateImages(); // Call function to display images

    // Event listener for the Left button click
    document.querySelector("#left_button").addEventListener("click", () => {
        // Shift the first image to the end of the array (move the leftmost image to the rightmost position)
        let firstImage = image_elements.shift();
        image_elements.push(firstImage);

        // Update the displayed images for the new order
        updateImages(); // Update images after the shift
    });

    // Event listener for the Right button click
    document.querySelector("#right_button").addEventListener("click", () => {
        // Shift the last image to the beginning of the array (move the rightmost image to the leftmost position)
        let lastImage = image_elements.pop();
        image_elements.unshift(lastImage);

        // Update the displayed images for the new order
        updateImages(); // Update images after the shift
    });

    // Function to update only the cycling images (this will replace the src attributes of the <img> elements with the new images)
    function updateImages() {
        // Loop through the image elements and update their 'src' attributes
        for (let i = 0; i < imageElements.length; i++) {
            imageElements[i].src = image_elements[i];
        }
    }
});
