/* Kapitalwert-Börse: Fall und Projektkarten. Entwurf, Version v0.12, Stand 28.11.2026.
   Die Talheimer Kunststofftechnik GmbH ist erfunden. Zahlungen in TEUR am Jahresende.
   Konstruktion der Karten (geprüft):
   - Kapitalwert-Optimum bei 5 %: A, D, F (311 TEUR). Zinsfuß-Strategie: A, B, D (278). Amortisations-Strategie: A, B, E, G, H (187).
   - Nach dem Zinsschock auf 9 % ist B, D, G optimal (162); das alte Optimum A, D, F fällt auf 125, weil F spät zahlt.
   - Photovoltaik C ist bei 5 % knapp positiv und bei 9 % klar negativ. */
window.BOERSE = {
  firm: "Talheimer Kunststofftechnik GmbH",
  budget: 1000,
  rate0: 5,
  shock: 9,
  cards: [
    { id: "A", name: "LED-Hallenbeleuchtung", z: [-80, 35, 35, 35], text: "Tausch von 400 Leuchtstoffröhren gegen LED. Spart Strom und Wartung, die Leuchten halten aber nur drei Jahre im Dreischichtbetrieb." },
    { id: "B", name: "Roboterzelle Verpackung", z: [-300, 110, 110, 110, 110], text: "Ein Roboter übernimmt das Verpacken am Ende der Spritzgusslinie 2. Zwei Stellen in der Spätschicht werden frei." },
    { id: "C", name: "Photovoltaik auf dem Hallendach", z: [-400, 64, 64, 64, 64, 64, 64, 64, 64], text: "1,1 Megawatt peak auf 6.000 m² Dach. Eigenverbrauch rund 80 %, gut fürs Image und den Nachhaltigkeitsbericht." },
    { id: "D", name: "Zweite Spritzgussmaschine", z: [-500, 110, 130, 140, 140, 140, 140], text: "Zusätzliche 350-Tonnen-Maschine für Gehäuse der Hausgeräteindustrie. Rahmenvertrag mit zwei Kunden liegt vor." },
    { id: "E", name: "Lagerverwaltungssoftware", z: [-150, 90, 60, 20], text: "Neues Lagerprogramm mit Barcode. Der Anbieter verspricht schnelle Einsparungen, danach steigen die Lizenzkosten." },
    { id: "F", name: "Werkzeugbau für Medizintechnik", z: [-400, 0, 0, 90, 100, 110, 120, 130, 140], text: "Reinraumfähiger Werkzeugbau für Inhalatorgehäuse. Erst nach zwei Jahren Zulassung fließen Umsätze, dann wachsend." },
    { id: "G", name: "Wärmerückgewinnung Kompressoren", z: [-200, 55, 55, 55, 55, 55], text: "Abwärme der Druckluftkompressoren heizt Halle und Büro. Fünf Jahre bis zur Generalüberholung." },
    { id: "H", name: "Vertriebsbüro Polen", z: [-220, 110, 100, 70], text: "Büro in Breslau mit zwei Verkäufern. Schnelle Aufträge aus bestehenden Kontakten, danach wachsender Wettbewerb." }
  ]
};
