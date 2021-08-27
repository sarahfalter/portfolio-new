$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
    
      var objectBottom = $(this).offset().top + $(this).outerHeight();
    
      if (objectBottom < windowBottom) { 
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { 
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); 
});



filterSelection("all") 
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";

  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   for (let i = 0; i < btn.length; i++) {
//   modal.style.display = "block";
// }
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   for (let i = 0; i < span.length; i++) {
//   modal.style.display = "none";
// }
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };







// Get the button that opens the modal
var showButtons = document.getElementsByClassName("showModal");

// Get the <span> element that closes the modal
var closeButtons = document.getElementsByClassName("close");

var openModal = null;

// When the user clicks on the button, open the modal
for(var i = 0; i < showButtons.length; ++i)
{
  showButtons[i].onclick = function(event) {
    var modalId = event.target.dataset.modal;
    var modal = document.getElementById(modalId);
    modal.style.display = "block"; 
    openModal = modal;
  };
}

// When the user clicks on <span> (x), close the modal
for(var i = 0; i < closeButtons.length; ++i)
{
  closeButtons[i].onclick = function(event) {
    var modal = event.target.closest('.modal');
    modal.style.display = "none";
    openModal = null;
  };
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target.className == "modal") {
    event.target.style.display = "none";
    openModal = null;
  }
};

document.onkeydown = function(event)
{
  if (event.key == "Escape" && openModal != null)
  {
    openModal.style.display = "none";
    openModal = null;
  }
};