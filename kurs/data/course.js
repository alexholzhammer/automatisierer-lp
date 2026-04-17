// KI Marketing Bootcamp — Course Manifest
// Single source of truth for all topics and their modules.
//
// To add a module:
//   1. Add an entry to the topic's modules array below.
//   2. Create the HTML file at <topic-id>/<file>.
//
// topic.overview  — path to topic overview, relative to the topic folder
// module.id       — unique ID set as MODULE_ID in each module HTML file
// module.file     — filename within the topic folder (e.g. "01.html")

var COURSE = {
  topics: [
    {
      id:       "einleitung",
      num:      "01",
      title:    "Einleitung",
      overview: "index.html",
      modules: [
        { id: "einleitung-01", file: "01.html", num: "1.1", title: "Einleitung", time: 15, tools: 0, quiz: 10 }
      ]
    },
    {
      id:       "prompting",
      num:      "02",
      title:    "Prompting",
      overview: "index.html",
      heroDesc: "Lerne, KI-Modelle präzise zu steuern — von den technischen Grundlagen bis hin zu fortgeschrittenen Techniken wie Meta-Prompting und Testing-Strategien.",
      desc: [
        "Prompting ist die Grundlage jeder erfolgreichen KI-Nutzung im Marketing. Dieses Thema führt dich von den technischen Grundlagen der Sprachmodelle bis hin zu professionellen Prompting-Frameworks wie CRAFT und PACT.",
        "Du lernst, wie du mit Formatierung und Struktur die Ausgabequalität steuerst, wie fortgeschrittene Denktechniken wie Chain-of-Thought oder Tree of Thoughts funktionieren, und wie du Prompts systematisch testest und optimierst."
      ],
      goals: [
        "KI-Modelle technisch verstehen und gezielt steuern",
        "Prompting-Frameworks (CRAFT, PACT) sicher anwenden",
        "Ausgabeformat und Struktur gezielt kontrollieren",
        "Fortgeschrittene Denktechniken (CoT, ToT) einsetzen",
        "Meta-Prompting für komplexe Aufgaben nutzen",
        "Prompts systematisch testen und verbessern"
      ],
      modules: [
        { id: "prompting-01", file: "01.html", num: "2.1", title: "Prompt Engineering",    time: 15, tools: 4, quiz: 10 },
        { id: "prompting-02", file: "02.html", num: "2.2", title: "Formatierung",          time: 15, tools: 3, quiz: 10 },
        { id: "prompting-03", file: "03.html", num: "2.3", title: "Logik-Ebene",           time: 15, tools: 4, quiz: 10 },
        { id: "prompting-04", file: "04.html", num: "2.4", title: "Meta-Prompting",        time: 15, tools: 2, quiz: 10 },
        { id: "prompting-05", file: "05.html", num: "2.5", title: "Testing & Optimierung", time: 15, tools: 3, quiz: 10 }
      ]
    },
    {
      id:       "videokreation",
      num:      "05",
      title:    "Videokreation",
      overview: "index.html",
      modules: [
        { id: "videokreation-01", file: "01.html", num: "5.1", title: "Videokreation mit KI im Marketing", time: 15, tools: 4, quiz: 10 }
      ]
    },
    {
      id:       "bildkreation",
      num:      "04",
      title:    "Bildkreation",
      overview: "index.html",
      modules: [
        { id: "bildkreation-01", file: "01.html", num: "4.1", title: "Bild-KIs: Vom Zufallstreffer zur visuellen Strategie", time: 15, tools: 3, quiz: 10 }
      ]
    },
    {
      id:       "content",
      num:      "03",
      title:    "Content-Produktion",
      overview: "index.html",
      heroDesc: "Lerne, wie du mit KI wirklich guten Content produzierst — von der richtigen Rollenverteilung zwischen Mensch und Maschine bis hin zu Brand Voice, SEO, Prüfprozessen und einer wiederholbaren Content-Engine.",
      desc: [
        "Content-Produktion mit KI ist kein Knopfdruck. Dieses Thema zeigt dir, wie du KI als echten Co-Autor einsetzt — mit klarer Rollenverteilung, deiner eigenen Stimme und einem System, das skaliert.",
        "Du lernst, den typischen „KI-Sound\" zu eliminieren, deine Brand Voice konsequent in alle Outputs einzubringen, SEO-relevante Inhalte strategisch zu produzieren und Prüfprozesse zu etablieren, die Qualität sicherstellen. Am Ende hast du keine Sammlung von Prompts, sondern eine wiederholbare Content-Engine."
      ],
      goals: [
        "KI als Co-Autor steuern statt nur Befehle geben",
        "Den „KI-Sound\" erkennen und durch echten Mehrwert ersetzen",
        "Brand Voice konsistent in alle KI-Outputs einbauen",
        "SEO-optimierten Content mit KI strategisch erstellen",
        "Einen effizienten Prüf- und Qualitätssicherungsprozess aufbauen",
        "Eine wiederholbare Content-Engine aus Briefings und Plänen entwickeln"
      ],
      modules: [
        { id: "content-01", file: "01.html", num: "3.1", title: "Content-Produktion Basics",          time: 15, tools: 3, quiz: 10, desc: "Warum guter KI-Content kein Knopfdruck ist — und wie du das System dahinter aufbaust." },
        { id: "content-02", file: "02.html", num: "3.2", title: "Texterstellung Mensch mit Maschine", time: 12, tools: 3, quiz: 10, desc: "Wie du die KI als Co-Autor steuerst statt ihr einfach Befehle zu geben, und dabei Texte mit echtem Tiefgang erzeugst." },
        { id: "content-03", file: "03.html", num: "3.3", title: "Textoptimierung",                    time: 15, tools: 4, quiz: 10, desc: "Wie du den typischen „KI-Sound\" eliminierst, echten Nutzwert einbaust und die Sprache exakt auf deine Zielgruppe abstimmst." },
        { id: "content-04", file: "04.html", num: "3.4", title: "Konsistenz & Brand Voice",           time: 15, tools: 4, quiz: 10, desc: "Wie du der KI deinen individuellen Schreibstil beibringst und sicherstellst, dass alle Outputs wie aus einem Guss klingen." },
        { id: "content-05", file: "05.html", num: "3.5", title: "SEO bei der Contenterstellung",      time: 18, tools: 4, quiz: 10, desc: "Wie du die KI als strategischen Analysten nutzt, um Inhalte zu erstellen, die nicht nur gut klingen, sondern auch gefunden werden." },
        { id: "content-06", file: "06.html", num: "3.6", title: "Prüfungspflicht",                    time: 12, tools: 4, quiz: 10, desc: "Warum blindes Vertrauen in die KI dein Business ruinieren kann — und wie du einen effizienten Prüfprozess etablierst, der nichts durchlässt." },
        { id: "content-07", file: "07.html", num: "3.7", title: "Originäre Daten + KI + Prüfung",    time: 14, tools: 3, quiz: 10, desc: "Wie du aufhörst, das Internet zu wiederkäuen, und stattdessen Content produzierst, den deine Konkurrenz nicht replizieren kann." },
        { id: "content-08", file: "08.html", num: "3.8", title: "Briefings & Contentpläne = System",  time: 15, tools: 3, quiz: 10, desc: "Alle Fäden zusammenführen: Stimme, SEO und Daten werden zur wiederholbaren Content-Engine, die konsistent Ergebnisse liefert." }
      ]
    },
    {
      id:       "recherche",
      num:      "06",
      title:    "Recherche & Analyse",
      overview: "index.html",
      modules: [
        { id: "recherche-01", file: "01.html", num: "6.1", title: "Dein neuer 24/7-Analyst",           time: 10, tools: 2, quiz: 10 },
        { id: "recherche-02", file: "02.html", num: "6.2", title: "Live-Daten: KI als Echtzeit-Sonde", time: 15, tools: 3, quiz: 10 },
        { id: "recherche-03", file: "03.html", num: "6.3", title: "Dein KI-Analyse-System",            time: 20, tools: 3, quiz: 10 },
        { id: "recherche-04", file: "04.html", num: "6.4", title: "Typische Fehler & Halluzinationen", time: 20, tools: 3, quiz: 10 }
      ]
    },
    {
      id:       "daten",
      num:      "07",
      title:    "Daten-Management",
      overview: "index.html",
      modules: [
        { id: "daten-01", file: "01.html", num: "7.1", title: "Deine Daten als Wettbewerbsvorteil", time: 10, tools: 2, quiz: 10 },
        { id: "daten-02", file: "02.html", num: "7.2", title: "Knowledge Base erstellen",            time: 20, tools: 3, quiz: 10 },
        { id: "daten-03", file: "03.html", num: "7.3", title: "Knowledge Base nutzen",               time: 20, tools: 2, quiz: 10 }
      ]
    },
    {
      id:       "agenten",
      num:      "08",
      title:    "Agenten & Automatisierung",
      overview: "index.html",
      modules: [
        { id: "agenten-01", file: "01.html", num: "8.1", title: "Agenten & Workflows: KI auf Steroiden",   time: 20, tools: 3, quiz: 10 },
        { id: "agenten-02", file: "02.html", num: "8.2", title: "Die Agenten-Werkstatt: Tools & Anwendung", time: 15, tools: 3, quiz: 10 }
      ]
    },
    {
      id:       "vibe-coding",
      num:      "09",
      title:    "Vibe Coding",
      overview: "index.html",
      modules: [
        { id: "vibe-coding-01", file: "01.html", num: "9.1", title: "Vibe Coding: Einleitung", time: 15, tools: 3, quiz: 10 },
        { id: "vibe-coding-02", file: "02.html", num: "9.2", title: "10 Do's und Don'ts",       time: 10, tools: 3, quiz: 10 }
      ]
    },
    {
      id:       "tools",
      num:      "10",
      title:    "Tools",
      overview: "index.html",
      modules: [
        { id: "tools-01", file: "01.html", num: "10.1", title: "Die wichtigsten KI-Tools für Marketer", time: 15, tools: 3, quiz: 10 }
      ]
    },
    {
      id:       "rechtliches",
      num:      "11",
      title:    "Rechtliches",
      overview: "index.html",
      modules: [
        { id: "rechtliches-01", file: "01.html", num: "11.1", title: "DSGVO & Datenschutz",              time: 20, tools: 3, quiz: 10 },
        { id: "rechtliches-02", file: "02.html", num: "11.2", title: "Urheberrecht & Geistiges Eigentum", time: 20, tools: 3, quiz: 10 },
        { id: "rechtliches-03", file: "03.html", num: "11.3", title: "EU AI Act & Kennzeichnungspflichten", time: 20, tools: 3, quiz: 10 }
      ]
    },
    {
      id:       "updates",
      num:      "12",
      title:    "Up-to-date bleiben",
      overview: "index.html",
      modules: [
        { id: "updates-01", file: "01.html", num: "12.1", title: "Signal vs. Rauschen", time: 15, tools: 0, quiz: 10 }
      ]
    },
    {
      id:       "zukunft",
      num:      "13",
      title:    "Zukunftsausblick",
      overview: "index.html",
      modules: [
        { id: "zukunft-01", file: "01.html", num: "13.1", title: "Die Ära der agentischen Intelligenz", time: 15, tools: 0, quiz: 10 }
      ]
    }
  ]
};
