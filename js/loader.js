
const loader = document.getElementById('loader');


function showLoader() {
  loader.style.display = 'block';
  document.body.style.display='none';
}


function hideLoader() {
  loader.style.display = 'none';
  document.body.style.display='block';
}

showLoader();


window.onload = function() {
  hideLoader();
};



// window.addEventListener("load", function() {
//   document.getElementById("loader").style.display = "none";
// });




// document.onreadystatechange = function() {
//   if (document.readyState !== "complete") {
//       document.querySelector(
//         "body").style.visibility = "hidden";
//       document.querySelector(
//         "#loader").style.visibility = "visible";
//   } else {
//       document.querySelector(
//         "#loader").style.display = "none";
//       document.querySelector(
//         "body").style.visibility = "visible";
//   }
// };
