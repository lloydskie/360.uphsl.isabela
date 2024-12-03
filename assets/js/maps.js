// Get the modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Get all images inside the container
var images = document.querySelectorAll(".image-container img");

// Add click event listener to each image
images.forEach(function(img) {
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
});

// When the user clicks anywhere outside the modal content, close the modal
modal.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};