// auth-gate.js
// Loaded in <head> of every gated module page (all topics except prompting).
// Requires @supabase/supabase-js v2 loaded before this script.
(function () {
  'use strict';

  var SUPABASE_URL = 'https://awayfgpspoewjkwavvan.supabase.co';
  var SUPABASE_KEY = 'sb_publishable_zn0xfUDgSQ65cZ7Nw540yw_F9trUA_T';
  var STRIPE_URL   = 'https://buy.stripe.com/4gM9AU1De9Cu6sS6irak000';

  // Hide body immediately (synchronous, runs in <head> before any body content renders)
  var hideStyle = document.createElement('style');
  hideStyle.id  = '_auth_gate_hide';
  hideStyle.textContent = 'body { opacity: 0 !important; }';
  document.head.appendChild(hideStyle);

  function revealContent() {
    var s = document.getElementById('_auth_gate_hide');
    if (s) s.remove();
    document.body.style.transition = 'opacity 0.18s ease';
    document.body.style.opacity    = '1';
  }

  function loginUrl() {
    return '../login.html?redirect=' + encodeURIComponent(window.location.href);
  }

  function showBuyOverlay() {
    var s = document.getElementById('_auth_gate_hide');
    if (s) s.remove();
    document.body.style.opacity = '1';

    var overlay = document.createElement('div');
    overlay.id  = 'auth-overlay';
    overlay.innerHTML =
      '<div class="auth-overlay-inner">' +
        '<div class="auth-overlay-card">' +
          '<div class="auth-overlay-tag">KI Marketing Bootcamp</div>' +
          '<h2 class="auth-overlay-title">Dieser Inhalt ist nur für Kurs-Teilnehmer</h2>' +
          '<p class="auth-overlay-desc">Lerne in über 50 Modulen, wie du KI gewinnbringend im Marketing einsetzt — von Prompting-Grundlagen bis hin zu vollständigen Automatisierungssystemen.</p>' +
          '<div class="auth-overlay-features">' +
            '<div class="auth-feature-item"><span class="auth-feature-check">✓</span>13 Themen, 50+ Module</div>' +
            '<div class="auth-feature-item"><span class="auth-feature-check">✓</span>Interaktive Tools & Quiz</div>' +
            '<div class="auth-feature-item"><span class="auth-feature-check">✓</span>Lebenslanger Zugang</div>' +
            '<div class="auth-feature-item"><span class="auth-feature-check">✓</span>Inkl. aller zukünftigen Updates</div>' +
          '</div>' +
          '<a href="' + STRIPE_URL + '" class="auth-buy-btn">Jetzt für €99 kaufen →</a>' +
          '<div class="auth-overlay-login">Bereits gekauft? <a href="' + loginUrl() + '">Einloggen</a></div>' +
        '</div>' +
      '</div>';

    // Insert as first child so it's on top of everything
    if (document.body.firstChild) {
      document.body.insertBefore(overlay, document.body.firstChild);
    } else {
      document.body.appendChild(overlay);
    }
  }

  function run() {
    var client;
    try {
      client = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    } catch (e) {
      revealContent();
      return;
    }

    client.auth.getSession().then(function (res) {
      var session = res.data && res.data.session;
      if (!session) {
        showBuyOverlay();
        return;
      }
      return client
        .from('purchases')
        .select('user_id')
        .eq('user_id', session.user.id)
        .maybeSingle()
        .then(function (result) {
          if (!result.data) {
            showBuyOverlay();
          } else {
            revealContent();
          }
        });
    }).catch(function () {
      revealContent(); // fail open on unexpected errors
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
}());
