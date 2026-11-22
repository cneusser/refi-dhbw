/* Kursstruktur: eine Quelle für Vorlesung, Advance Organizer, Selbsttests und Links.
   status: "behandelt" (Termin war, Unterlagen in Teams), "fertig" (überarbeitet, online), "heute", "folgt". Pflege: nur hier ändern. */
window.KURS = {
  heute: "2026-11-30",
  teile: [
    { id: "refi1", titel: "ReFi I: Rechnungswesen", frage: "Wie bildet ein Unternehmen ab, was es tut, und was kostet es?",
      kapitel: [
        { id: "r1k1", nr: "1", titel: "Einführung und Grundbegriffe", leit: "Warum braucht ein Unternehmen ein Rechnungswesen, und wer liest es?", inhalt: ["Aufgaben und Adressaten", "Fall Supercomputer AG", "Grundbegriffe von Auszahlung bis Kosten"], status: "behandelt" },
        { id: "r1k2", nr: "2", titel: "Systematik des Rechnungswesens", leit: "Wie hängen Bestände und Ströme zusammen?", inhalt: ["Stromgrößen und Bestandsgrößen", "Bilanz, GuV, Kapitalflussrechnung", "Abgrenzungen"], status: "behandelt" },
        { id: "r1k3", nr: "3", titel: "Externes Rechnungswesen", leit: "Was zeigt der Jahresabschluss, und was verbirgt er?", inhalt: ["HGB und IFRS", "Bilanzierung und Bewertung", "Jahresabschlussanalyse"], status: "behandelt" },
        { id: "r1k4", nr: "4", titel: "Internes Rechnungswesen", leit: "Was kostet ein Produkt wirklich, und wovon hängt die Antwort ab?", inhalt: ["4.1 Grundbegriffe, Kostenverhalten, Sunk Costs", "4.2 BAB, Äquivalenz-, Zuschlags-, Maschinenstundensatzkalkulation", "4.3 Deckungsbeitrag, Break-even, Programm, Make or Buy", "4.4 TCO, Plankosten, Target Costing, Prozesskosten"], status: "behandelt",
          material: [
            { t: "Kapitel 4 Kosten- und Leistungsrechnung, überarbeitet (Folien, PDF ohne Lösungsfolien)", href: "unterlagen/261130_REFI_I_Kap4_KLR.pdf" },
            { t: "Prozesskostenrechnung entlang der Lieferkette (Folien, PDF ohne Lösungsfolien)", href: "unterlagen/261123_PKR_Challenge_Nordstil.pdf" },
            { t: "Prozesskosten-Challenge Nordstil (online)", href: "challenge.html" },
            { t: "Drei Kostenrechnungen im Vergleich (Tool)", href: "tools.html#kosten" },
            { t: "Leerkosten-Rechner (Tool)", href: "tools.html#leer" },
            { t: "Tools Kapitel 4: Kalkulation, Break-even, Programmplanung, Make or Buy, TCO, Target Costing", href: "tools-k4.html" },
            { t: "Übungsaufgaben Kapitel 4 als Excel (A01 bis A15)", href: "unterlagen/ReFi_I_Kap4_Uebungen_Aufgaben.xlsx" },
            { t: "Glossar Kapitel 4", href: "glossar.html" }
          ], quiz: "pkr", refs: "r1k4" }
      ] },
    { id: "refi2", titel: "ReFi II: Finanzierung und Investition", frage: "Woher kommt das Geld, wohin fließt es, und lohnt sich das?",
      kapitel: [
        { id: "r2k1", nr: "1", titel: "Cashflow und Liquidität", leit: "Warum kann ein wachsendes Unternehmen mit Gewinn zahlungsunfähig werden?", inhalt: ["Cash Conversion Cycle und Working Capital", "Kapitalflussrechnung", "EBITDA, IFRS 16, Supplier Finance", "Fälle Nokia, Siemens, Telekom"], status: "behandelt",
          material: [
            { t: "Einstieg und Kapitel 1 (Folien, PDF ohne Lösungsfolien)", href: "unterlagen/261123_REFI_II_Einstieg_Kap1.pdf" },
            { t: "Working-Capital-Rechner (Tool)", href: "tools.html#wc" },
            { t: "Leasing nach IFRS 16 (Tool)", href: "tools.html#ifrs16" }
          ], quiz: "kap1", refs: "kap1" },
        { id: "r2k2", nr: "2", titel: "Investitionsrechnung", leit: "Wann lohnt sich eine Investition, und welcher Methode trauen Sie?", inhalt: ["2.1 Statische Verfahren und ROI", "2.2 Kapitalwert, Annuität, Kalkulationszins", "2.3 Zinsfuß, Amortisation und ihre Fallen", "2.4 Nutzungsdauer, Steuern, vollständiger Finanzplan", "2.5 Unsicherheit, Nutzwert, Controlling"], status: "heute",
          material: [
            { t: "Kapitel 2 Investitionsrechnung (Folien, PDF)", href: "unterlagen/261130_REFI_II_Kap2_Investitionsrechnung.pdf" },
            { t: "Tools Kapitel 2 und 3: Kapitalwertprofil, WACC, IRR-Fallen, Nutzungsdauer, Steuern, VoFi, Monte-Carlo, Nutzwert", href: "tools-k2.html" },
            { t: "Übungsaufgaben Kapitel 2 und 3 als Excel (B01 bis B17, C01)", href: "unterlagen/ReFi_II_Kap2_3_Uebungen_Aufgaben.xlsx" },
            { t: "Live-Quiz Kapitel 2", href: "live-quiz.html?set=kap2" },
            { t: "Glossar", href: "glossar.html" }
          ], quiz: "kap2", refs: "kap2" },
        { id: "r2k3", nr: "3", titel: "Business Case", leit: "Wie wird aus einer Idee eine belastbare Entscheidungsvorlage?", inhalt: ["3.1 Zweck und Aufbau des Business Plans", "3.2 Integrierte Planung und Bankensicht", "3.3 Business Case BigBag", "3.4 Stresstest, Pitch, Fallstudie Santa Beach"], status: "fertig",
          material: [
            { t: "Kapitel 3 Business Case (Folien, PDF)", href: "unterlagen/261201_REFI_II_Kap3_BusinessCase.pdf" },
            { t: "Tools: Sensitivität BigBag, Kapitalbedarf und DSCR", href: "tools-k2.html#bigbag" },
            { t: "Übungsaufgaben B17 und C01 (Excel)", href: "unterlagen/ReFi_II_Kap2_3_Uebungen_Aufgaben.xlsx" },
            { t: "Live-Quiz Kapitel 3", href: "live-quiz.html?set=kap3" }
          ], quiz: "kap3", refs: "kap3" },
        { id: "r2k4", nr: "4", titel: "Finanzierung", leit: "Wer gibt das Geld, zu welchen Bedingungen, und was folgt daraus?", inhalt: ["4.1 Finanzierungsarten, Ziele, Leverage, Value at Risk", "4.2 Bonität und Rating", "4.3 Außenfinanzierung: Eigenkapital, Darlehen, Anleihe, Skonto, Mezzanine, Factoring, Leasing", "4.4 Innenfinanzierung: Selbstfinanzierung, Abschreibungen, Rückstellungen, Umschichtung"], status: "fertig",
          material: [
            { t: "Kapitel 4 Finanzierung (Folien, PDF ohne Lösungsfolien)", href: "unterlagen/261207_REFI_II_Kap4_Finanzierung.pdf" },
            { t: "Tools Kapitel 4: Leverage, Value at Risk, Darlehen, Anleihe, Skonto, Selbstfinanzierung, Lohmann-Ruchti", href: "tools-k4f.html" },
            { t: "Übungsaufgaben Kapitel 4 als Excel (D01 bis D08)", href: "unterlagen/ReFi_II_Kap4_Uebungen_Aufgaben.xlsx" },
            { t: "Gesamtfall Küstenwerkstatt (Excel E01, Kapitel 1 bis 4)", href: "unterlagen/ReFi_II_Gesamtfall_Aufgabe.xlsx" },
            { t: "Live-Quiz Kapitel 4", href: "live-quiz.html?set=kap4" },
            { t: "Probeklausur und Klausur", href: "pruefung.html" }
          ], quiz: "kap4", refs: "kap4" }
      ] }
  ]
};
