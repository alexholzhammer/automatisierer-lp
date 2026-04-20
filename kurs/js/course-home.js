(function () {
  // Inject fonts + CSS immediately
  var head = document.head;
  function addLink(attrs) {
    var el = document.createElement('link');
    Object.keys(attrs).forEach(function (k) { el[k] = attrs[k]; });
    head.appendChild(el);
  }
  addLink({ rel: 'preconnect', href: 'https://fonts.googleapis.com' });
  addLink({ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=JetBrains+Mono:wght@400;500&display=swap' });
  addLink({ rel: 'stylesheet', href: 'shared.css' });

  document.title = 'KI Marketing Bootcamp';

  // Sort topics by num
  var topics = COURSE.topics.slice().sort(function (a, b) {
    return parseInt(a.num) - parseInt(b.num);
  });

  var totalModules = topics.reduce(function (s, t) { return s + t.modules.length; }, 0);

  function badge(t) {
    var time = t.modules.reduce(function (s, m) { return s + m.time; }, 0);
    return t.modules.length + ' ' + (t.modules.length === 1 ? 'Modul' : 'Module') + ' · ~' + time + ' Min';
  }

  function renderCard(t) {
    var isFeatured = t.num === '02';
    var cls = 'topic-card' + (isFeatured ? ' featured' : '');
    var inner =
      '<div class="topic-card-num">' + t.num + '</div>'
      + '<div class="topic-card-icon">' + (t.icon || '') + '</div>'
      + '<div class="topic-card-label">Jetzt verfügbar</div>'
      + '<div class="topic-card-title">' + t.title + '</div>'
      + '<div class="topic-card-desc">' + (t.tagline || '') + '</div>'
      + '<div class="topic-card-badge">' + badge(t) + '</div>'
      + (isFeatured ? '<div class="featured-cta">Jetzt starten →</div>' : '');
    return '<a href="' + t.id + '/" class="' + cls + '">' + inner + '</a>';
  }

  function render() {
    document.body.innerHTML =
      '<nav class="topnav">'
      + '<a href="all.html" class="topnav-logo"><div class="topnav-logo-dot"></div><span style="font-weight:600">KI Marketing Bootcamp</span></a>'
      + '<div class="topnav-spacer"></div>'
      + '</nav>'
      + '<div class="container-wide">'
      + '<div class="course-hero">'
      + '<div class="course-tag">KI Marketing Bootcamp · Vollzugang</div>'
      + '<h1>Werde zum KI&#8209;Marketing&#8209;Experten</h1>'
      + '<p>13 Themen. Praxisnahes Wissen. Interaktive Tools. Lerne, wie du KI strategisch und effektiv im Marketing einsetzt — von Prompting bis Automatisierung.</p>'
      + '<div class="course-hero-meta">'
      + '<div class="course-hero-meta-item">📚 <span>13 Themen</span></div>'
      + '<div class="course-hero-meta-item">🎯 <span>' + totalModules + ' Module</span></div>'
      + '<div class="course-hero-meta-item">⚡ <span>Interaktive Tools</span></div>'
      + '<div class="course-hero-meta-item">🧠 <span>Quizzes &amp; Tests</span></div>'
      + '</div></div>'
      + '<div class="section-label">Themen</div>'
      + '<div class="bento-grid">'
      + topics.map(renderCard).join('')
      + '</div></div>';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
}());
