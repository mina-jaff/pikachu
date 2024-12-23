document.addEventListener("DOMContentLoaded", function () {
  for (let step = 0; step < 1600; step++) {
    var pixel = document.createElement("div");
    document.querySelector(".canvas").appendChild(pixel);
    pixel.setAttribute("class", "pixel");
  }

  $(".canvas")
    .children(".pixel")
    .hover(function () {
      // $(this).index() returns the zero-based index of the current element 
      const index = $(this).index() + 1;
      console.log(index);
    });
});
