'use strict';

(function () {
  var root = document.body;
  var EMAIL = root.dataset.email;
  var WA = root.dataset.wa;
  var RATES = { low: 90, mid: 130, high: 180, cleaning: 50 };
  var HIGH_MONTHS = { 7: true, 8: true };
  var MID_MONTHS = { 6: true, 9: true };

  var currentLang = localStorage.getItem('seaview26_lang') || 'it';
  var calcTotal = 0;
  var bookSubject = '';
  var curPic = 0;
  var formErrorKey = '';

  var gallery = [
    { s: 'img/38.jpg', key: 'g_view' },
    { s: 'img/32.jpg', key: 'g_loft' },
    { s: 'img/3.jpg', key: 'g3' },
    { s: 'img/41.jpg', key: 'g4' },
    { s: 'img/45.JPG', key: 'g_garden' },
    { s: 'img/30.jpg', key: 'g_bath' },
    { s: 'img/6.jpg', key: 'g7' },
    { s: 'img/21.JPG', key: 'g_stairs' },
    { s: 'img/9.jpg', key: 'g2' },
    { s: 'img/31.jpg', key: 'g_loft' },
    { s: 'img/13.jpg', key: 'g1' },
    { s: 'img/35.jpg', key: 'g6' },
    { s: 'img/19.jpg', key: 'g2' },
    { s: 'img/8.jpg', key: 'g5' },
    { s: 'img/26.jpg', key: 'g_stairs' },
    { s: 'img/27.jpg', key: 'g_bath' },
    { s: 'img/2.jpg', key: 'g3' }
  ];

  var navbar = document.getElementById('navbar');
  var scrollBar = document.getElementById('scrollBar');
  var hero = document.querySelector('.hero');
  var mobMenu = document.getElementById('mobMenu');
  var navToggle = document.getElementById('navToggle');
  var lb = document.getElementById('lb');
  var lbImg = document.getElementById('lbImg');
  var lbCount = document.getElementById('lbCount');
  var ciInput = document.getElementById('ci');
  var coInput = document.getElementById('co');
  var formError = document.getElementById('formError');

  function t(key) {
    var pack = i18n[currentLang] || i18n.it;
    return pack[key] == null ? '' : pack[key];
  }

  function sanitizeCopy(value) {
    return String(value).replace(/<(?!\/?(?:br|em|strong)\b)[^>]*>/gi, '');
  }

  function parseDate(value) {
    var parts = String(value || '').split('-');
    if (parts.length !== 3) return null;
    var year = Number(parts[0]);
    var month = Number(parts[1]);
    var day = Number(parts[2]);
    if (!year || !month || !day) return null;
    var date = new Date(year, month - 1, day);
    if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) return null;
    return date;
  }

  function formatDate(date) {
    var month = String(date.getMonth() + 1);
    var day = String(date.getDate());
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return date.getFullYear() + '-' + month + '-' + day;
  }

  function todayDate() {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }

  function setLang(lang) {
    if (!i18n[lang]) return;
    currentLang = lang;
    localStorage.setItem('seaview26_lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var value = i18n[lang][el.getAttribute('data-i18n')];
      if (value != null) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var value = i18n[lang][el.getAttribute('data-i18n-html')];
      if (value != null) el.innerHTML = sanitizeCopy(value);
    });

    renderAmenities(lang);
    renderFaq(lang);
    if (formErrorKey) formError.textContent = t(formErrorKey);
    calcPrice();
    updateLb();
    updateWaLink();
  }

  function renderAmenities(lang) {
    var grid = document.getElementById('amModalGrid');
    grid.replaceChildren();
    i18n[lang].amenities.forEach(function (cat) {
      var block = document.createElement('div');
      block.className = 'am-cat';
      var title = document.createElement('h4');
      title.textContent = cat.title;
      var list = document.createElement('ul');
      cat.items.forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
      });
      block.appendChild(title);
      block.appendChild(list);
      grid.appendChild(block);
    });
  }

  function renderFaq(lang) {
    var data = i18n[lang];
    document.getElementById('faq-sec-eyebrow').textContent = data.faq_eyebrow;
    document.getElementById('faq-heading').innerHTML = sanitizeCopy(data.faq_h2);
    var grid = document.getElementById('faqGrid');
    grid.replaceChildren();
    data.faq.forEach(function (item) {
      var wrap = document.createElement('div');
      wrap.className = 'faq-item';
      wrap.setAttribute('role', 'listitem');
      var button = document.createElement('button');
      button.className = 'faq-question';
      button.type = 'button';
      button.setAttribute('aria-expanded', 'false');
      button.appendChild(document.createTextNode(item.q));
      var icon = document.createElement('span');
      icon.className = 'faq-icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = '+';
      button.appendChild(icon);
      var answer = document.createElement('div');
      answer.className = 'faq-answer';
      answer.textContent = item.a;
      wrap.appendChild(button);
      wrap.appendChild(answer);
      grid.appendChild(wrap);
    });
  }

  function toggleFaq(btn) {
    var item = btn.closest('.faq-item');
    var isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(function (el) {
      el.classList.remove('open');
      el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  }

  function toggleMob() {
    var open = mobMenu.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  }

  function closeMob() {
    mobMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function gotoId(id) {
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  function openOverlay(id) {
    document.getElementById(id).classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeOverlay(id) {
    document.getElementById(id).classList.remove('open');
    if (!lb.classList.contains('open') && !mobMenu.classList.contains('open')) {
      document.body.style.overflow = '';
    }
  }

  function nightlyRate(date) {
    var month = date.getMonth() + 1;
    if (HIGH_MONTHS[month]) return RATES.high;
    if (MID_MONTHS[month]) return RATES.mid;
    return RATES.low;
  }

  function requestFields() {
    return {
      name: document.getElementById('guestName').value.trim(),
      contact: document.getElementById('guestContact').value.trim(),
      ci: ciInput.value,
      co: coInput.value,
      g: document.getElementById('guests').value,
      tot: calcTotal
    };
  }

  function fillTemplate(tpl, fields) {
    return tpl
      .replace('{name}', fields.name || '—')
      .replace('{contact}', fields.contact || '—')
      .replace('{ci}', fields.ci || '—')
      .replace('{co}', fields.co || '—')
      .replace('{g}', fields.g || '—')
      .replace('{tot}', fields.tot ? String(fields.tot) : '—');
  }

  function updateWaLink() {
    var link = document.getElementById('waWidget');
    link.href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(fillTemplate(t('mail_template'), requestFields()));
  }

  function clearInvalid() {
    document.querySelectorAll('.is-invalid').forEach(function (el) {
      el.classList.remove('is-invalid');
    });
  }

  function showFormError(key, field) {
    formErrorKey = key;
    formError.hidden = false;
    formError.textContent = t(key);
    if (!field) return;
    clearInvalid();
    field.classList.add('is-invalid');
    if (document.activeElement !== field) field.focus();
  }

  function clearFormError() {
    formErrorKey = '';
    formError.hidden = true;
    formError.textContent = '';
    clearInvalid();
  }

  function calcPrice() {
    var result = document.getElementById('priceResult');
    var arrival = parseDate(ciInput.value);
    var departure = parseDate(coInput.value);
    var today = todayDate();
    if (!arrival || !departure || arrival < today || departure <= arrival) {
      calcTotal = 0;
      result.classList.remove('show');
      updateWaLink();
      return false;
    }
    var total = 0;
    var nights = 0;
    var cursor = new Date(arrival.getFullYear(), arrival.getMonth(), arrival.getDate());
    while (cursor < departure) {
      total += nightlyRate(cursor);
      cursor.setDate(cursor.getDate() + 1);
      nights += 1;
    }
    calcTotal = total + RATES.cleaning;
    var nightText = nights === 1 ? t('night_str') : t('nights_str');
    document.getElementById('prNights').textContent = nights + ' ' + nightText;
    document.getElementById('prTotal').textContent = '€' + calcTotal;
    result.classList.add('show');
    updateWaLink();
    return true;
  }

  function openConfirm() {
    var fields = requestFields();
    if (!fields.name) {
      showFormError('err_contact', document.getElementById('guestName'));
      return;
    }
    if (!fields.contact) {
      showFormError('err_contact', document.getElementById('guestContact'));
      return;
    }
    if (!calcPrice()) {
      showFormError('err_dates', ciInput.value ? coInput : ciInput);
      return;
    }
    clearFormError();
    fields = requestFields();
    bookSubject = t('mail_subj').replace('{ci}', fields.ci);
    document.getElementById('msgTa').value = fillTemplate(t('mail_template'), fields);
    openOverlay('confirmOverlay');
  }

  function doEmail() {
    var body = document.getElementById('msgTa').value;
    window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(bookSubject) + '&body=' + encodeURIComponent(body);
  }

  function doWa() {
    window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(document.getElementById('msgTa').value), '_blank', 'noopener');
  }

  function openLb(index) {
    curPic = index;
    updateLb();
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLb() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  function shiftLb(delta) {
    curPic = (curPic + delta + gallery.length) % gallery.length;
    updateLb();
  }

  function updateLb() {
    var photo = gallery[curPic];
    if (!photo) return;
    lbImg.src = photo.s;
    lbImg.alt = t(photo.key);
    lbCount.textContent = (curPic + 1) + ' / ' + gallery.length;
  }

  function bindDates() {
    var today = formatDate(todayDate());
    ciInput.min = today;
    coInput.min = today;
    ciInput.addEventListener('change', function () {
      var arrival = parseDate(ciInput.value);
      if (!arrival) return;
      var next = new Date(arrival.getFullYear(), arrival.getMonth(), arrival.getDate() + 1);
      var nextValue = formatDate(next);
      coInput.min = nextValue;
      if (!coInput.value || coInput.value <= ciInput.value) coInput.value = nextValue;
      clearFormError();
      calcPrice();
    });
    coInput.addEventListener('change', function () {
      clearFormError();
      calcPrice();
    });
  }

  function bindUi() {
    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang'));
      });
    });

    document.querySelectorAll('[data-goto]').forEach(function (el) {
      el.addEventListener('click', function () {
        gotoId(el.getAttribute('data-goto'));
      });
    });

    navToggle.addEventListener('click', toggleMob);
    mobMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMob);
    });

    document.getElementById('faqGrid').addEventListener('click', function (event) {
      var btn = event.target.closest('.faq-question');
      if (btn) toggleFaq(btn);
    });

    document.getElementById('openAmenities').addEventListener('click', function () {
      openOverlay('amModal');
    });
    document.getElementById('sendRequest').addEventListener('click', openConfirm);
    document.getElementById('sendEmail').addEventListener('click', doEmail);
    document.getElementById('sendWa').addEventListener('click', doWa);

    document.querySelectorAll('[data-close]').forEach(function (el) {
      el.addEventListener('click', function () {
        closeOverlay(el.getAttribute('data-close'));
      });
    });

    document.querySelectorAll('.overlay-bg').forEach(function (overlay) {
      overlay.addEventListener('click', function (event) {
        if (event.target === overlay) closeOverlay(overlay.id);
      });
    });

    document.querySelectorAll('[data-photo]').forEach(function (el) {
      function open() { openLb(Number(el.getAttribute('data-photo'))); }
      el.addEventListener('click', open);
      el.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          open();
        }
      });
    });

    document.getElementById('lbClose').addEventListener('click', function (event) {
      event.stopPropagation();
      closeLb();
    });
    document.getElementById('lbPrev').addEventListener('click', function (event) {
      event.stopPropagation();
      shiftLb(-1);
    });
    document.getElementById('lbNext').addEventListener('click', function (event) {
      event.stopPropagation();
      shiftLb(1);
    });
    lb.addEventListener('click', function (event) {
      if (event.target === lb) closeLb();
    });
    lbImg.addEventListener('click', function (event) { event.stopPropagation(); });

    var touchStartX = 0;
    lb.addEventListener('touchstart', function (event) {
      touchStartX = event.changedTouches[0].screenX;
    }, { passive: true });
    lb.addEventListener('touchend', function (event) {
      var touchEndX = event.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 50) shiftLb(1);
      if (touchEndX > touchStartX + 50) shiftLb(-1);
    }, { passive: true });

    ['guestName', 'guestContact'].forEach(function (id) {
      document.getElementById(id).addEventListener('input', function () {
        clearFormError();
        updateWaLink();
      });
    });
    document.getElementById('guests').addEventListener('change', updateWaLink);

    document.addEventListener('keydown', function (event) {
      if (lb.classList.contains('open')) {
        if (event.key === 'Escape') closeLb();
        if (event.key === 'ArrowRight') shiftLb(1);
        if (event.key === 'ArrowLeft') shiftLb(-1);
      }
      if (event.key !== 'Escape') return;
      if (document.getElementById('confirmOverlay').classList.contains('open')) closeOverlay('confirmOverlay');
      if (document.getElementById('amModal').classList.contains('open')) closeOverlay('amModal');
      if (mobMenu.classList.contains('open')) closeMob();
    });

    function updateChrome() {
      var max = document.body.scrollHeight - window.innerHeight;
      scrollBar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
      var pastHero = hero.getBoundingClientRect().bottom < 0;
      navbar.classList.toggle('stuck', pastHero);
      navbar.classList.toggle('is-book', pastHero);
      var waFloat = document.querySelector('.wa-float');
      var mobCta = document.getElementById('mobCta');
      if (window.innerWidth <= 900) {
        mobCta.style.display = pastHero ? 'flex' : 'none';
        waFloat.classList.toggle('is-ready', pastHero);
      } else {
        mobCta.style.display = 'none';
        waFloat.classList.add('is-ready');
      }
    }

    window.addEventListener('scroll', updateChrome, { passive: true });
    window.addEventListener('resize', updateChrome);
    updateChrome();
  }

  function bindMotion() {
    var reveal = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('show');
        reveal.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });
    document.querySelectorAll('.rv').forEach(function (el) { reveal.observe(el); });

    var counters = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseFloat(el.dataset.to);
        var decimals = parseInt(el.dataset.dec, 10) || 0;
        var start = null;
        function step(ts) {
          if (!start) start = ts;
          var progress = Math.min((ts - start) / 1200, 1);
          var eased = 1 - Math.pow(1 - progress, 4);
          el.textContent = (target * eased).toFixed(decimals);
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = target.toFixed(decimals);
        }
        requestAnimationFrame(step);
        counters.unobserve(el);
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('.counter').forEach(function (el) { counters.observe(el); });
  }

  bindDates();
  bindUi();
  bindMotion();
  setLang(currentLang);
})();
