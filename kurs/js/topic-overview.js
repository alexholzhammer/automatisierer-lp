(function () {
  var SUPABASE_URL = 'https://awayfgpspoewjkwavvan.supabase.co';
  var SUPABASE_KEY = 'sb_publishable_zn0xfUDgSQ65cZ7Nw540yw_F9trUA_T';
  var STRIPE_URL   = 'https://buy.stripe.com/4gM9AU1De9Cu6sS6irak000';

  var topic = COURSE.topics.find(function (t) { return t.id === TOPIC_ID; });

  // Inject fonts + shared CSS into <head> immediately (prevents FOUC)
  var head = document.head;
  function addLink(attrs) {
    var el = document.createElement('link');
    Object.keys(attrs).forEach(function (k) { el[k] = attrs[k]; });
    head.appendChild(el);
  }
  addLink({ rel: 'preconnect', href: 'https://fonts.googleapis.com' });
  addLink({ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=JetBrains+Mono:wght@400;500&display=swap' });
  addLink({ rel: 'stylesheet', href: '../shared.css' });

  if (!topic) {
    document.addEventListener('DOMContentLoaded', function () {
      document.body.innerHTML = '<p style="padding:2rem;font-family:sans-serif">Topic not found: ' + TOPIC_ID + '</p>';
    });
    return;
  }

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

  // Module cards HTML
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

  function topicPageHtml() {
    return '<nav class="topnav">'
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
  }

  function render() {
    document.body.innerHTML = topicPageHtml();
  }

  function renderBuyOverlay() {
    var loginHref = '../login.html?redirect=' + encodeURIComponent(window.location.href);
    document.body.innerHTML =
      '<nav class="topnav">'
      + '<a href="../" class="topnav-logo"><div class="topnav-logo-dot"></div><span>KI Marketing Bootcamp</span></a>'
      + '<div class="topnav-spacer"></div>'
      + '</nav>'
      + '<div id="auth-overlay">'
      + '<div class="auth-overlay-inner">'
      + '<div class="auth-overlay-card">'
      + '<div class="auth-overlay-tag">KI Marketing Bootcamp</div>'
      + '<h2 class="auth-overlay-title">Dieser Inhalt ist nur für Kurs-Teilnehmer</h2>'
      + '<p class="auth-overlay-desc">Lerne in über 50 Modulen, wie du KI gewinnbringend im Marketing einsetzt — von Prompting-Grundlagen bis hin zu vollständigen Automatisierungssystemen.</p>'
      + '<div class="auth-overlay-features">'
      + '<div class="auth-feature-item"><span class="auth-feature-check">✓</span>13 Themen, 50+ Module</div>'
      + '<div class="auth-feature-item"><span class="auth-feature-check">✓</span>Interaktive Tools & Quiz</div>'
      + '<div class="auth-feature-item"><span class="auth-feature-check">✓</span>Lebenslanger Zugang</div>'
      + '<div class="auth-feature-item"><span class="auth-feature-check">✓</span>Inkl. aller zukünftigen Updates</div>'
      + '</div>'
      + '<a href="' + STRIPE_URL + '" class="auth-buy-btn">Jetzt für €99 kaufen →</a>'
      + '<div class="auth-overlay-login">Bereits gekauft? <a href="' + loginHref + '">Einloggen</a></div>'
      + '</div></div></div>';
  }

  function loadSupabaseAndCheck(onGranted, onDenied) {
    var sbScript = document.createElement('script');
    sbScript.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
    sbScript.onload = function () {
      // DEBUG: dump all storage keys before creating client
      var allLS = Object.keys(localStorage);
      console.log('[topic-overview] ALL localStorage keys:', allLS);
      allLS.forEach(function (k) {
        try { console.log('[topic-overview]   LS[' + k + ']:', localStorage.getItem(k).substring(0, 120)); } catch(e) {}
      });
      var client = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
      client.auth.getSession().then(function (res) {
        var session = res.data && res.data.session;
        console.log('[topic-overview] session:', session ? 'found (user: ' + session.user.id + ')' : 'null', 'error:', res.error);
        // DEBUG: dump storage again after getSession (Supabase may have cleared it)
        console.log('[topic-overview] localStorage keys after getSession:', Object.keys(localStorage));
        if (!session) { onDenied(); return; }
        return client
          .from('purchases')
          .select('user_id')
          .eq('user_id', session.user.id)
          .maybeSingle()
          .then(function (result) {
            console.log('[topic-overview] purchases result:', result.data, 'error:', result.error);
            if (!result.data) { onDenied(); } else { onGranted(); }
          });
      }).catch(function (err) {
        console.error('[topic-overview] unexpected error:', err);
        onGranted(); // fail open
      });
    };
    sbScript.onerror = function () {
      onGranted(); // fail open if CDN fails
    };
    document.head.appendChild(sbScript);
  }

  function init() {
    if (TOPIC_ID === 'prompting') {
      render();
    } else {
      loadSupabaseAndCheck(render, renderBuyOverlay);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
