// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
  // Get all question containers
  const questionContainers = document.querySelectorAll(".question-container");

  // Iterate through each question container
  questionContainers.forEach(function (container) {
    // Add click event listener to each question container
    container.addEventListener("click", function () {
      // Toggle the 'open' class on the clicked question container
      container.classList.toggle("open");

      // Toggle the visibility of the answer container
      const answerContainer = container.nextElementSibling;
      answerContainer.style.maxHeight = container.classList.contains("open")
        ? answerContainer.scrollHeight + "px"
        : "0";

      // Change the button image src when the accordion is opened/closed
      const buttonImg = container.querySelector("button img");
      buttonImg.src = container.classList.contains("open")
        ? "./assets/images/icon-minus.svg"
        : "./assets/images/icon-plus.svg";
    });
  });
});
