(function () {
  var topic = COURSE.topics.find(function (t) { return t.id === TOPIC_ID; });
  if (!topic) {
    document.body.innerHTML = '<p style="padding:2rem;font-family:sans-serif">Topic not found: ' + TOPIC_ID + '</p>';
    return;
  }

  // Inject fonts + shared CSS
  var head = document.head;
  function addLink(attrs) {
    var el = document.createElement('link');
    Object.keys(attrs).forEach(function (k) { el[k] = attrs[k]; });
    head.appendChild(el);
  }
  addLink({ rel: 'preconnect', href: 'https://fonts.googleapis.com' });
  addLink({ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=JetBrains+Mono:wght@400;500&display=swap' });
  addLink({ rel: 'stylesheet', href: '../shared.css' });

  document.title = topic.title + ' · KI Marketing Bootcamp';

  // Aggregate stats
  var totalTime  = topic.modules.reduce(function (s, m) { return s + m.time;  }, 0);
  var totalTools = topic.modules.reduce(function (s, m) { return s + m.tools; }, 0);
  var totalQuiz  = topic.modules.reduce(function (s, m) { return s + m.quiz;  }, 0);
  var moduleWord = topic.modules.length === 1 ? 'Modul' : 'Module';

  // Hero tools item (omit when topic has no tools)
  var toolsItem = totalTools > 0
    ? '<div class="hero-meta-item">🎯 <span>' + totalTools + '+ interaktive Tools</span></div>'
    : '';

  // Optional hero description paragraph
  var heroDescHtml = topic.heroDesc ? '<p>' + topic.heroDesc + '</p>' : '';

  // "Über dieses Thema" section
  var introHtml = '';
  if (topic.desc && topic.desc.length) {
    introHtml = '<div class="intro-section">'
      + '<div class="intro-section-header"><span>📖</span><h2>Über dieses Thema</h2></div>'
      + '<div class="intro-section-body">'
      + topic.desc.map(function (p) { return '<p>' + p + '</p>'; }).join('')
      + '</div></div>';
  }

  // Lernziele section
  var goalsHtml = '';
  if (topic.goals && topic.goals.length) {
    goalsHtml = '<div class="intro-section">'
      + '<div class="intro-section-header"><span>🎯</span><h2>Lernziele</h2></div>'
      + '<div class="intro-section-body"><div class="goals-grid">'
      + topic.goals.map(function (g) {
          return '<div class="goal-item"><div class="goal-check">✓</div><div class="goal-text">' + g + '</div></div>';
        }).join('')
      + '</div></div></div>';
  }

  // Module cards
  var cardsHtml = topic.modules.map(function (m) {
    var descHtml  = m.desc   ? '<div class="module-card-desc">' + m.desc + '</div>' : '';
    var toolsMeta = m.tools > 0 ? '<div class="module-card-meta-item">🎯 ' + m.tools + ' Tools</div>' : '';
    return '<a href="' + m.file + '" class="module-card">'
      + '<div class="module-card-num">' + m.num + '</div>'
      + '<div class="module-card-body">'
      + '<div class="module-card-status">Verfügbar</div>'
      + '<div class="module-card-title">' + m.title + '</div>'
      + descHtml
      + '<div class="module-card-meta">'
      + '<div class="module-card-meta-item">📖 ~' + m.time + ' Min</div>'
      + toolsMeta
      + '<div class="module-card-meta-item">🧠 ' + m.quiz + ' Fragen</div>'
      + '</div></div>'
      + '<div class="module-card-arrow">→</div>'
      + '</a>';
  }).join('');

  document.body.innerHTML =
    '<nav class="topnav">'
    + '<a href="../" class="topnav-logo"><div class="topnav-logo-dot"></div><span>KI Marketing Bootcamp</span></a>'
    + '<div class="topnav-spacer"></div>'
    + '<a href="../" class="topnav-link">← Alle Themen</a>'
    + '</nav>'
    + '<div class="container">'
    + '<div class="breadcrumb">'
    + '<a href="../">KI Marketing Bootcamp</a>'
    + '<span class="breadcrumb-sep">/</span>'
    + '<span>' + topic.title + '</span>'
    + '</div>'
    + '<div class="hero">'
    + '<div class="module-tag">Thema ' + topic.num + ' · ' + topic.title + '</div>'
    + '<h1>' + topic.title + '</h1>'
    + heroDescHtml
    + '<div class="hero-meta">'
    + '<div class="hero-meta-item">📚 <span>' + topic.modules.length + ' ' + moduleWord + '</span></div>'
    + '<div class="hero-meta-item">⏱ <span>~' + totalTime + ' Min Lesezeit</span></div>'
    + toolsItem
    + '<div class="hero-meta-item">🧠 <span>' + totalQuiz + ' Quiz-Fragen</span></div>'
    + '</div></div>'
    + introHtml
    + goalsHtml
    + '<div class="section-label">Module</div>'
    + '<div class="modules-list">' + cardsHtml + '</div>'
    + '</div>';
}());
