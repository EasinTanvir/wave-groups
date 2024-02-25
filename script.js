const togglecBtn = document.getElementById("togglecBtn");
const listIcon = document.getElementById("list-icon");
const closeIcon = document.getElementById("close-icon");
const content = document.getElementById("content");
const features = document.getElementById("features");
const build = document.getElementById("build");

const file = document.getElementById("file");
const viewImage = document.getElementById("viewImage");
const selectImage = document.getElementById("selectImage");

selectImage.addEventListener("click", function () {
  file.click();
});

file.addEventListener("change", (e) => {
  const image = file?.files[0];
  const imageURL = URL.createObjectURL(image);
  viewImage.src = imageURL;
});

togglecBtn.addEventListener("click", () => {
  if (listIcon.style.display !== "none") {
    listIcon.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    closeIcon.style.display = "none";
    listIcon.style.display = "block";
  }
});

$(document).ready(function () {
  $.get("http://numbersapi.com/1/30/date?json", (data, status) => {
    content.innerHTML = data.text;
    features.innerHTML = features.innerHTML + " " + data.number;

    build.innerHTML = build.innerHTML + " " + data.year;
  });
});
