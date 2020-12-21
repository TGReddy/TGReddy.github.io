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

function setActive() {
  for (i = 0; i < document.getElementsByClassName('sidebarMenuElement').length; i++) {
    document.getElementsByClassName('sidebarMenuElement')[i].classList.remove("sidebarActive");
  }
  document.getElementById("sidebarLink" + sessionStorage.getItem('page')).classList.add("sidebarActive");
}
