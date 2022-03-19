(function () {
  'use strict';

  // Dark Mode JS
  var toggleSwitch = document.getElementById('darkSwitch');
  var currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
      if (toggleSwitch) {
        toggleSwitch.checked = true;
      }
    }
  }

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }

  if (toggleSwitch) {
    toggleSwitch.addEventListener('change', switchTheme, false);
  }
  
})();



window.addEventListener('load', (event) => {
  console.log('-------------------------load');
  document.documentElement.setAttribute('data-theme', 'dark');
  localStorage.setItem('theme', 'dark');

  // let path = window.location.pathname;
  // console.log('-----path', path);
  // if (path.includes("accueil")) {
  //   let element = getElementById("accueil");
  //   element.classList.add("active")
  // }
  // if (path.includes("support")) {
  //   let element = getElementById("support");
  //   element.classList.add("active")
  // }
  // if (path.includes("products")) {
  //   let element = getElementById("products");
  //   element.classList.add("active")
  // }
  // if (path.includes("settings")) {
  //   let element = getElementById("settings");
  //   element.classList.add("active")
  // }

});