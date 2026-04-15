// module-nav.js
// Reads MODULE_ID and COURSE (from data/course.js) to build the progress bar.
// Each module page sets:  var MODULE_ID = "module-3-1";
// then loads data/course.js and this file.

(function () {
  // 1. Locate the current module in the course manifest
  var topic, mod, modIndex;

  for (var t = 0; t < COURSE.topics.length; t++) {
    var mods = COURSE.topics[t].modules;
    for (var m = 0; m < mods.length; m++) {
      if (mods[m].id === MODULE_ID) {
        topic    = COURSE.topics[t];
        mod      = mods[m];
        modIndex = m;
        break;
      }
    }
    if (topic) break;
  }

  if (!topic) {
    console.warn('module-nav.js: MODULE_ID "' + MODULE_ID + '" not found in course manifest.');
    return;
  }

  // 2. Derive navigation values
  var total      = topic.modules.length;
  var lastNum    = topic.modules[total - 1].num;
  var prevMod    = modIndex > 0 ? topic.modules[modIndex - 1] : null;
  var nextMod    = modIndex < total - 1 ? topic.modules[modIndex + 1] : null;
  var nextHref   = nextMod ? nextMod.file : topic.overview;
  var nextLabel  = nextMod ? 'Weiter →' : 'Modul abschließen →';
  var backHref   = topic.overview;
  var indicator  = mod.num + ' / ' + lastNum;

  // 3. Inject the progress bar as the first element in <body>
  var bar = document.createElement('div');
  bar.id = 'progress-bar-wrap';
  bar.innerHTML =
    '<a href="' + backHref + '" class="mod-nav-back">← Übersicht</a>' +
    '<div id="progress-bar-track"><div id="progress-bar-fill"></div></div>' +
    '<div id="progress-label">0% gelesen</div>' +
    '<span class="mod-nav-indicator">' + indicator + '</span>' +
    '<a href="' + nextHref + '" class="mod-nav-next">' + nextLabel + '</a>';

  document.body.insertBefore(bar, document.body.firstChild);

  // 4. Scroll-based reading progress
  var fill  = document.getElementById('progress-bar-fill');
  var label = document.getElementById('progress-label');

  function updateProgress() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
    fill.style.width = pct + '%';
    label.textContent = pct + '% gelesen';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
})();
