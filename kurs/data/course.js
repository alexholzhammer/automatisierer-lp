// KI Marketing Bootcamp — Course Manifest
// Single source of truth for all topics and their modules.
// To add a module: add an entry to the correct topic's modules array,
// then create the module-X-Y.html file.

var COURSE = {
  topics: [
    {
      id:       "prompting",
      num:      "01",
      title:    "Prompting",
      overview: "topic-prompting.html",
      modules: [
        { id: "module-2-1", num: "2.1", title: "Prompt Engineering",    time: 15, tools: 4, quiz: 10 },
        { id: "module-2-2", num: "2.2", title: "Formatierung",          time: 15, tools: 3, quiz: 10 },
        { id: "module-2-3", num: "2.3", title: "Logik-Ebene",           time: 15, tools: 4, quiz: 10 },
        { id: "module-2-4", num: "2.4", title: "Meta-Prompting",        time: 15, tools: 2, quiz: 10 },
        { id: "module-2-5", num: "2.5", title: "Testing & Optimierung", time: 15, tools: 3, quiz: 10 }
      ]
    },
    {
      id:       "content",
      num:      "03",
      title:    "Content-Produktion",
      overview: "topic-content.html",
      modules: [
        { id: "module-3-1", num: "3.1", title: "Content-Produktion Basics",       time: 15, tools: 3, quiz: 10 },
        { id: "module-3-2", num: "3.2", title: "Texterstellung Mensch mit Maschine", time: 12, tools: 3, quiz: 10 },
        { id: "module-3-3", num: "3.3", title: "Textoptimierung",                 time: 15, tools: 4, quiz: 10 },
        { id: "module-3-4", num: "3.4", title: "Konsistenz & Brand Voice",        time: 15, tools: 4, quiz: 10 },
        { id: "module-3-5", num: "3.5", title: "SEO bei der Contenterstellung",   time: 18, tools: 4, quiz: 10 },
        { id: "module-3-6", num: "3.6", title: "Prüfungspflicht",                 time: 12, tools: 4, quiz: 10 },
        { id: "module-3-7", num: "3.7", title: "Originäre Daten + KI + Prüfung", time: 14, tools: 3, quiz: 10 },
        { id: "module-3-8", num: "3.8", title: "Briefings & Contentpläne = System", time: 15, tools: 3, quiz: 10 }
      ]
    },
    {
      id:       "recherche",
      num:      "06",
      title:    "Recherche & Analyse",
      overview: "topic-recherche.html",
      modules: [
        { id: "module-6-1", num: "6.1", title: "Dein neuer 24/7-Analyst",             time: 10, tools: 2, quiz: 10 },
        { id: "module-6-2", num: "6.2", title: "Live-Daten: KI als Echtzeit-Sonde",   time: 15, tools: 3, quiz: 10 },
        { id: "module-6-3", num: "6.3", title: "Dein KI-Analyse-System",              time: 20, tools: 3, quiz: 10 },
        { id: "module-6-4", num: "6.4", title: "Typische Fehler & Halluzinationen",   time: 20, tools: 3, quiz: 10 }
      ]
    },
    {
      id:       "daten",
      num:      "07",
      title:    "Daten-Management",
      overview: "topic-daten.html",
      modules: [
        { id: "module-7-1", num: "7.1", title: "Deine Daten als Wettbewerbsvorteil", time: 10, tools: 2, quiz: 10 },
        { id: "module-7-2", num: "7.2", title: "Knowledge Base erstellen",            time: 20, tools: 3, quiz: 10 },
        { id: "module-7-3", num: "7.3", title: "Knowledge Base nutzen",               time: 20, tools: 2, quiz: 10 }
      ]
    },
    {
      id:       "agenten",
      num:      "08",
      title:    "Agenten & Automatisierung",
      overview: "topic-agenten.html",
      modules: [
        { id: "module-8-1", num: "8.1", title: "Agenten & Workflows: KI auf Steroiden", time: 20, tools: 3, quiz: 10 },
        { id: "module-8-2", num: "8.2", title: "Die Agenten-Werkstatt: Tools & Anwendung", time: 15, tools: 3, quiz: 10 }
      ]
    },
    {
      id:       "vibe-coding",
      num:      "09",
      title:    "Vibe Coding",
      overview: "topic-vibe-coding.html",
      modules: [
        { id: "module-9-1", num: "9.1", title: "Vibe Coding: Einleitung", time: 15, tools: 3, quiz: 10 },
        { id: "module-9-2", num: "9.2", title: "10 Do's und Don'ts",       time: 10, tools: 3, quiz: 10 }
      ]
    },
    {
      id:       "tools",
      num:      "10",
      title:    "Tools",
      overview: "topic-tools.html",
      modules: [
        { id: "module-10-1", num: "10.1", title: "Die wichtigsten KI-Tools für Marketer", time: 15, tools: 3, quiz: 10 }
      ]
    },
    {
      id:       "rechtliches",
      num:      "11",
      title:    "Rechtliches",
      overview: "topic-rechtliches.html",
      modules: [
        { id: "module-11-1", num: "11.1", title: "DSGVO & Datenschutz",                        time: 20, tools: 3, quiz: 10 },
        { id: "module-11-2", num: "11.2", title: "Urheberrecht & Geistiges Eigentum",          time: 20, tools: 3, quiz: 10 },
        { id: "module-11-3", num: "11.3", title: "EU AI Act & Kennzeichnungspflichten",        time: 20, tools: 3, quiz: 10 }
      ]
    },
    {
      id:       "updates",
      num:      "12",
      title:    "Up-to-date bleiben",
      overview: "topic-updates.html",
      modules: [
        { id: "module-12-1", num: "12.1", title: "Signal vs. Rauschen", time: 15, tools: 0, quiz: 10 }
      ]
    },
    {
      id:       "zukunft",
      num:      "13",
      title:    "Zukunftsausblick",
      overview: "topic-zukunft.html",
      modules: [
        { id: "module-13-1", num: "13.1", title: "Die Ära der agentischen Intelligenz", time: 15, tools: 0, quiz: 10 }
      ]
    }
  ]
};
