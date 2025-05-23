// Hent alle stier til vores billeder og sæt dem i et array
const imageArray = [
  './assets/image1.jpg',
  './assets/image2.jpg',
  './assets/image3.jpg',
  './assets/image4.jpg',
  './assets/image5.jpg',
  './assets/image6.jpg',
]

// sliderIndex er tallet vi bruger til at få fat i et bestemt billede ud fra arrayets index
let sliderImage = document.getElementById('sliderImage')
let sliderIndex = 0

// Funktion til at plusse 1 på sliderIndex
// Hvis sliderIndex er mindre end arrayets længde, kan vi plusse 1
// Ellers sætter vi sliderIndx tilbage til 0 (det første billede i arrayet)
function increment() {
  if (sliderIndex < imageArray.length - 1) {
    sliderIndex = sliderIndex + 1
  } else {
    sliderIndex = 0
  }
  sliderImage.src = imageArray[sliderIndex]
}

// Funktion til at minusse 1 på sliderIndex
// Hvis sliderIndex er større end 0, kan vi sikkert gå én tilbage
// Ellers sætter vi sliderIndex til arrayets længde (det sidste billede i arrayet)
function decrement() {
  if (sliderIndex > 0) {
    sliderIndex = sliderIndex - 1
  } else {
    sliderIndex = imageArray.length - 1
  }
  sliderImage.src = imageArray[sliderIndex]
}
