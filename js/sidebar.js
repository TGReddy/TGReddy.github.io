$(document).ready(function () {
    $(".transFix").each(function (index, element) {
        setTimeout(function () { $(element).removeClass("transFix") }, 10);
    });
});

function loopDropdowns() {
  divs = document.getElementsByClassName('sidebarDropdown');
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.height = sessionStorage.getItem(divs[i].id);
  }
}

function toggleDropdown(id) {
  var growDiv = document.getElementById(id);
  if (sessionStorage.getItem(id) == '0') {
    sessionStorage.setItem(id, document.getElementById(id + "Wrap").clientHeight + "px");
    growDiv.style.height = sessionStorage.getItem(id);
  } else {
    sessionStorage.setItem(id, '0');
    growDiv.style.height = sessionStorage.getItem(id);
  }
  loopDropdowns();
}
