// // Navbar
// const navbar = document.querySelector('#header');

// // // Scroll event
// window.addEventListener('scroll', () => {
//   if (window.scrollY > 70) {
//     navbar.classList.add('navbar-scroll');
//   } else {
//     navbar.classList.remove('navbar-scroll');
//   }
// });

// // // Hamburger Menu 
// const hamburger = document.querySelector('#nav-button');
// const navMenu = document.querySelector('#burger-menu');

// // //  Events - Hamburger Menu
// hamburger.addEventListener('click', () => {
//     if (navMenu.classList.contains('hidden')) {
//         navMenu.classList.remove('hidden');
//     } else {
//         navMenu.classList.add('hidden');
//     }
// });


// // Our Classes Section

// const yoga = document.querySelector('.yoga');
// const yogaBtn = document.querySelector('#yoga-btn');

// const group = document.querySelector('.group');
// const groupBtn = document.querySelector('#group-btn');

// const solo = document.querySelector('.solo');
// const soloBtn = document.querySelector('#solo-btn');

// const stretch = document.querySelector('.stretch');
// const stretchBtn = document.querySelector('#stretch-btn');

// const classesBtns = document.querySelector('.classes-btns');


// // Our Classes Section Events
// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('yoga-btn').click();
//   });

// classesBtns.addEventListener('click', (e) => {
//   const id = e.target.id;
//   switch (id) {
//     case 'yoga-btn':
//       yoga.classList.remove('hidden');
//       yogaBtn.classList.add('bg-orange')

//       group.classList.add('hidden');
//       groupBtn.classList.remove('bg-orange')

//       solo.classList.add('hidden');
//       soloBtn.classList.remove('bg-orange')

//       stretch.classList.add('hidden');      
//       stretchBtn.classList.remove('bg-orange')
//       break;
//     case 'group-btn':
//         yoga.classList.add('hidden');
//         yogaBtn.classList.remove('bg-orange')

//         group.classList.remove('hidden');
//         groupBtn.classList.add('bg-orange');

//         solo.classList.add('hidden');
//         soloBtn.classList.remove('bg-orange')

//         stretch.classList.add('hidden');
//         stretchBtn.classList.remove('bg-orange');
//         break;
//     case 'solo-btn':
//         yoga.classList.add('hidden');
//         yogaBtn.classList.remove('bg-orange')

//         group.classList.add('hidden');
//         groupBtn.classList.remove('bg-orange')

//         solo.classList.remove('hidden');
//         soloBtn.classList.add('bg-orange')

//         stretch.classList.add('hidden');
//         stretchBtn.classList.remove('bg-orange');
//         break;
//     case 'stretch-btn':
//         yoga.classList.add('hidden');
//         yogaBtn.classList.remove('bg-orange')

//         group.classList.add('hidden');
//         groupBtn.classList.remove('bg-orange')

//         solo.classList.add('hidden');
//         soloBtn.classList.remove('bg-orange')

//         stretch.classList.remove('hidden');
//         stretchBtn.classList.add('bg-orange');
//         break;
//     default:

//           break;
//    }
  
// })



// // BMI Calculator

// const heightInput = document.querySelector('#c-height');
// const weightInput = document.querySelector('#c-weight');
// const bmiSpan = document.querySelector('#bmi-span');
// const bmiIcon = document.querySelector('.scroll-icon');

// // // BMI Calculator Functions

// function calculateBMI() {

//     // Input değerlerini dönüştür
//     const heightM = parseFloat(heightInput.value) / 100;
//     const weightKG = parseFloat(weightInput.value);

//     // Boş değerleri kontrol et
//     if (heightInput.value === '' || weightInput.value === '') {
//         return;
//     } else if (heightInput.value == 0 || weightInput.value == 0) {
//         return;
//     } 
    
//     // Formül
//     const bmi = weightKG / (heightM * heightM);
//     bmiSpan.textContent = bmi.toFixed(2);

//     // Pozisyon ayarlama
//     let position = 0;

//     if (bmi < 18.5) {
//         position = 10; 
//     } else if (bmi >= 18.5 && bmi <= 24.9) {
//         position = 30; 
//     } else if (bmi >= 25 && bmi <= 29.9) {
//         position = 50; 
//     } else if (bmi >= 30 && bmi <= 34.9) {
//         position = 70; 
//     } else if (bmi >= 35) {
//         position = 90; 
//     }

//     // Iconu göster
//     bmiIcon.style.left = `${position}%`; 
//     bmiIcon.classList.remove('hidden');
// }

// // // BMI Calculator Events
// heightInput.addEventListener('input', calculateBMI);
// weightInput.addEventListener('input', calculateBMI);

