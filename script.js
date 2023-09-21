//untuk slider
let slideIndex = 0;

const updateSlide = (n) => {
  slideIndex += n;
  showSlide(slideIndex);
}

const showSlide = (n) => {
  const slides = document.getElementsByClassName("slider-item");
 
  if (n > slides.length - 1) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

showSlide(slideIndex);



//untuk modal1
const modal1 = document.getElementById("myModal1");
const openButton1 = document.getElementById("image1");
const closeIcon1 = document.getElementById("closeModalIcon1");

  // Ketika gambar diklik
openButton1.addEventListener('click', () => {
  modal1.style.display = "block";
  console.log(modal1);
});
// Ketika tombol closeButton diklik
closeIcon1.addEventListener('click', () => {
  modal1.style.display = "none";
});

//untuk modal2
const modal2 = document.getElementById("myModal2");
const openButton2 = document.getElementById("image2");
const closeIcon2 = document.getElementById("closeModalIcon2");

  // Ketika gambar diklik
openButton2.addEventListener('click', () => {
  modal2.style.display = "block";
  console.log(modal2);
});

// Ketika tombol closeButton diklik
closeIcon2.addEventListener('click', () => {
  modal2.style.display = "none";
});

//untuk modal3
const modal3 = document.getElementById("myModal3");
const openButton3 = document.getElementById("image3");
const closeIcon3 = document.getElementById("closeModalIcon3");

  // Ketika gambar diklik
openButton3.addEventListener('click', () => {
  modal3.style.display = "block";
  console.log(modal3)
});

// Ketika tombol closeButton diklik
closeIcon3.addEventListener('click', () => {
  modal3.style.display = "none";
});

//untuk modal4
const modal4 = document.getElementById("myModal4");
const openButton4 = document.getElementById("image4");
const closeIcon4 = document.getElementById("closeModalIcon4");

  // Ketika gambar diklik
openButton4.addEventListener('click', () => {
  modal4.style.display = "block";
  console.log(modal4)
});

// Ketika tombol closeButton diklik
closeIcon4.addEventListener('click', () => {
  modal4.style.display = "none";
});
