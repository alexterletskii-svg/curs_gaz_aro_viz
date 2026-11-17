/* Подпись модуля над заголовком и полоса прогресса чтения */
(function () {
  var file = location.pathname.split('/').pop() || '';
  var m = file.match(/module(\d)/);
  var h = document.querySelector('.lesson-container > h2, h2');
  if (h) h.setAttribute('data-mod', m ? 'Модуль ' + m[1] + ' из 4' : (/test/.test(file) ? 'Итоговый тест' : ''));
  var bar = document.createElement('div');
  bar.className = 'read-strip';
  bar.innerHTML = '<i></i>';
  document.body.appendChild(bar);
  var fill = bar.firstChild, tick = false;
  function upd() {
    var d = document.documentElement, max = d.scrollHeight - d.clientHeight;
    fill.style.width = (max > 0 ? Math.min(100, d.scrollTop / max * 100) : 0) + '%';
    tick = false;
  }
  window.addEventListener('scroll', function () { if (!tick) { tick = true; requestAnimationFrame(upd); } }, { passive: true });
  upd();
})();
