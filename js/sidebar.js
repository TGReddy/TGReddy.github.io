$(window).on('load', function() {
  divs = document.getElementsByClassName('sidebarDropdown');
  document.getElementsByClassName('sidebarDropdown').offsetHeight
  for (i = 0; i < divs.length; i++) {
    document.getElementsByClassName('sidebarDropdown')[i].classList.remove("transFix");
  }
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
