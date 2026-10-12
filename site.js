/* Site: the menu button and the footer year. Nothing else runs here. */
(function () {
  document.documentElement.classList.add('js');
  var b = document.querySelector('[data-nav-toggle]');
  var n = document.getElementById('nav');
  if (b && n) {
    b.addEventListener('click', function () {
      var open = n.classList.toggle('is-open');
      b.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  var y = document.querySelector('[data-year]');
  if (y) { y.textContent = String(new Date().getFullYear()); }
})();
