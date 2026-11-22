/* Kursstruktur: eine Quelle für Vorlesung, Advance Organizer, Selbsttests und Links.
   status: "behandelt" (Termin war, Unterlagen in Teams), "fertig" (überarbeitet, online), "heute", "folgt". Pflege: nur hier ändern. */
window.KURS = {
  heute: "2026-11-23",
  teile: [
    { id: "refi1", titel: "ReFi I: Rechnungswesen", frage: "Wie bildet ein Unternehmen ab, was es tut, und was kostet es?",
      kapitel: [
        { id: "r1k1", nr: "1", titel: "Einführung und Grundbegriffe", leit: "Warum braucht ein Unternehmen ein Rechnungswesen, und wer liest es?", inhalt: ["Aufgaben und Adressaten", "Fall Supercomputer AG", "Grundbegriffe von Auszahlung bis Kosten"], status: "behandelt" },
        { id: "r1k2", nr: "2", titel: "Systematik des Rechnungswesens", leit: "Wie hängen Bestände und Ströme zusammen?", inhalt: ["Stromgrößen und Bestandsgrößen", "Bilanz, GuV, Kapitalflussrechnung", "Abgrenzungen"], status: "behandelt" },
        { id: "r1k3", nr: "3", titel: "Externes Rechnungswesen", leit: "Was zeigt der Jahresabschluss, und was verbirgt er?", inhalt: ["HGB und IFRS", "Bilanzierung und Bewertung", "Jahresabschlussanalyse"], status: "behandelt" },
        { id: "r1k4", nr: "4", titel: "Internes Rechnungswesen", leit: "Was kostet ein Produkt wirklich, und wovon hängt die Antwort ab?", inhalt: ["Kostenarten, Kostenstellen, Kostenträger", "Zuschlagskalkulation und Deckungsbeitrag", "Prozesskostenrechnung und Target Costing"], status: "heute",
          material: [
            { t: "Prozesskostenrechnung entlang der Lieferkette (Folien, PDF ohne Lösungsfolien)", href: "unterlagen/261123_PKR_Challenge_Nordstil.pdf" },
            { t: "Prozesskosten-Challenge Nordstil (online)", href: "challenge.html" },
            { t: "Drei Kostenrechnungen im Vergleich (Tool)", href: "tools.html#kosten" },
            { t: "Leerkosten-Rechner (Tool)", href: "tools.html#leer" }
          ], quiz: "pkr", refs: "pkr" }
      ] },
    { id: "refi2", titel: "ReFi II: Finanzierung und Investition", frage: "Woher kommt das Geld, wohin fließt es, und lohnt sich das?",
      kapitel: [
        { id: "r2k1", nr: "1", titel: "Cashflow und Liquidität", leit: "Warum kann ein wachsendes Unternehmen mit Gewinn zahlungsunfähig werden?", inhalt: ["Cash Conversion Cycle und Working Capital", "Kapitalflussrechnung", "EBITDA, IFRS 16, Supplier Finance", "Fälle Nokia, Siemens, Telekom"], status: "heute",
          material: [
            { t: "Einstieg und Kapitel 1 (Folien, PDF ohne Lösungsfolien)", href: "unterlagen/261123_REFI_II_Einstieg_Kap1.pdf" },
            { t: "Working-Capital-Rechner (Tool)", href: "tools.html#wc" },
            { t: "Leasing nach IFRS 16 (Tool)", href: "tools.html#ifrs16" }
          ], quiz: "kap1", refs: "kap1" },
        { id: "r2k2", nr: "2", titel: "Investitionsrechnung", leit: "Wann lohnt sich eine Investition, und welcher Methode trauen Sie?", inhalt: ["Statische Verfahren und ihre Grenzen", "Kapitalwert, interner Zinsfuß, Annuität", "Sensitivität und Szenarien"], status: "folgt" },
        { id: "r2k3", nr: "3", titel: "Business Case", leit: "Wie wird aus einer Idee eine belastbare Entscheidungsvorlage?", inhalt: ["Annahmen und Treiber", "Integrierte Planung", "Risiken und Szenarien"], status: "folgt" },
        { id: "r2k4", nr: "4", titel: "Finanzierung", leit: "Wer gibt das Geld, zu welchen Bedingungen, und was folgt daraus?", inhalt: ["Eigen- und Fremdkapital", "Kredit, Anleihe, Leasing, Factoring", "Kapitalstruktur und Rating"], status: "folgt" }
      ] }
  ]
};
