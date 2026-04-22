// topnav-auth.js
// Injects a login/logout button into .topnav for static kurs/ pages (index.html, login.html).
// Topic overview pages call window.TopnavAuth.apply() directly after rendering their topnav.
(function () {
  var SUPABASE_URL = 'https://awayfgpspoewjkwavvan.supabase.co';
  var SUPABASE_KEY = 'sb_publishable_zn0xfUDgSQ65cZ7Nw540yw_F9trUA_T';

  function injectButton(nav, session, client, loginHref) {
    var existing = nav.querySelector('.topnav-auth-btn');
    if (existing) existing.remove();

    if (session) {
      var btn = document.createElement('button');
      btn.className = 'topnav-link topnav-auth-btn';
      btn.textContent = 'Log out';
      btn.addEventListener('click', function () {
        client.auth.signOut().then(function () { window.location.reload(); });
      });
      nav.appendChild(btn);
    } else if (loginHref) {
      var a = document.createElement('a');
      a.className = 'topnav-link topnav-auth-btn';
      a.href = loginHref;
      a.textContent = 'Log in';
      nav.appendChild(a);
    }
  }

  function apply(nav, client, loginHref) {
    client.auth.getSession().then(function (res) {
      injectButton(nav, res.data && res.data.session, client, loginHref);
    });
  }

  // Expose for use by topic-overview.js after it renders the topnav
  window.TopnavAuth = { apply: apply };

  function autoInit() {
    var nav = document.querySelector('.topnav');
    if (!nav || !window.supabase) return;
    var client = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    // On the login page itself, only show "Log out" (skip "Log in" — user is already here)
    var isLoginPage = window.location.pathname.endsWith('/login.html');
    var loginHref = isLoginPage ? null : 'login.html';
    apply(nav, client, loginHref);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInit);
  } else {
    autoInit();
  }
}());
