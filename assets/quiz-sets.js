/* Fragensätze für Live-Quiz (Kahoot-Stil) und Selbsttests. a = Index der richtigen Antwort (0 bis 3). */
window.QSETS = {
 pkr: { title: "Prozesskostenrechnung", qs: [
  {q:"Wonach verteilt die Prozesskostenrechnung Gemeinkosten?",o:["Nach dem Umsatz der Produkte","Nach der Inanspruchnahme von Tätigkeiten","Nach den Materialeinzelkosten","Gleichmäßig auf alle Produkte"],a:1,e:"Kostentreiber sind Tätigkeiten und ihre Mengen, nicht der Wert. Das unterscheidet sie vom Zuschlag."},
  {q:"Kapazitätskosten 900.000 €, praktische Kapazität 1.500.000 Minuten. Wie hoch ist der Kapazitätskostensatz?",o:["0,50 € je Minute","0,60 € je Minute","1,67 € je Minute","0,75 € je Minute"],a:1,e:"900.000 / 1.500.000 = 0,60 € je Minute."},
  {q:"Genutzt werden 1.200.000 der 1.500.000 Minuten bei 0,60 € je Minute. Wie hoch sind die Leerkosten?",o:["720.000 €","180.000 €","300.000 €","0 €, Leerkosten gibt es nur in der Fertigung"],a:1,e:"300.000 ungenutzte Minuten × 0,60 € = 180.000 €. Begriffe Nutz- und Leerkosten nach Bredt und Gutenberg."},
  {q:"Retourenquote 65 %. Wie viele Kleider gehen für ein verkauftes Kleid im Mittel hinaus?",o:["1,65","2,86","1,54","0,65"],a:1,e:"1 / (1 − 0,65) = 2,86. Retouren vervielfachen alle Kosten je versandtem Stück."},
  {q:"Daten aus einer PDF-Auftragsbestätigung ins ERP abtippen ist ...",o:["wertschöpfend","notwendig ohne Kundennutzen","Bürokratie, gesetzliche Pflicht","Verschwendung (Medienbruch)"],a:3,e:"Der Kunde zahlt nicht dafür, und mit einer Schnittstelle entfällt es. Klassischer Medienbruch."},
  {q:"Welche Maßnahme sollte eine Abteilung nicht wählen, auch wenn sie am meisten spart?",o:["Eine Schnittstelle einführen","Eine gesetzliche Meldepflicht einstellen","Ein gemeinsames Prüfprotokoll","Ursachen von Retouren auswerten"],a:1,e:"Pflichten zu streichen ist keine Option. Bürokratie wird effizient erfüllt oder politisch adressiert."},
  {q:"Zuschlag: 57,60 €. Grenzplankosten: 61,65 €. Prozesskosten: 90,34 €. Welche Aussage stimmt?",o:["Die Prozesskostenrechnung ist falsch, weil sie am höchsten ist","Grenzplankosten zeigen, ob ein Kleid kurzfristig Fixkosten deckt","Der Zuschlag ist für Sortimentsentscheidungen am genauesten","Alle drei Werte bedeuten dasselbe"],a:1,e:"Teilkosten beantworten kurzfristige Fragen, Prozesskosten langfristige Ressourcenfragen. Der Wertzuschlag verzerrt."},
  {q:"Was schließt die Lücke zwischen 90,34 € Kosten und 71,10 € erlaubten Kosten am stärksten?",o:["Bürokratie halbieren","Verschwendung allein beseitigen","Retourenquote senken und Verschwendung beseitigen","Gemeinkostenzuschlag senken"],a:2,e:"Ohne Verschwendung 81,34 €, erst mit 55 % Retourenquote 70,80 €. Die Ursache liegt bei Passform und Größenangaben."}
 ]},
 kap1: { title: "Kapitel 1 Cashflow und Liquidität", qs: [
  {q:"Ein Unternehmen wächst um 30 %, Kunden zahlen nach 90 Tagen. Was passiert typischerweise mit dem operativen Cashflow?",o:["Er steigt wie der Gewinn","Er kann trotz Gewinn stark sinken","Er bleibt unverändert","Er verdoppelt sich"],a:1,e:"Wachstum bindet Working Capital: Forderungen und Vorräte wachsen mit."},
  {q:"Warum wird die Abschreibung zum Jahresüberschuss addiert?",o:["Sie bringt Geld ins Unternehmen","Sie war Aufwand ohne Auszahlung","Sie ist eine Investition","Das Finanzamt verlangt es"],a:1,e:"Die Auszahlung war die Investition; die Abschreibung mindert nur den Gewinn."},
  {q:"Vorräte steigen um 4 Mio. Euro. Wirkung auf den operativen Cashflow?",o:["plus 4 Mio. Euro","minus 4 Mio. Euro","keine Wirkung","nur bei Verkauf"],a:1,e:"Mehr Aktiva binden Cash."},
  {q:"Verbindlichkeiten aus Lieferungen und Leistungen steigen. Wirkung auf den opCF?",o:["steigt","sinkt","keine Wirkung","hängt vom Zins ab"],a:0,e:"Lieferanten finanzieren den Leistungsprozess."},
  {q:"Wohin gehört die Tilgung eines Bankkredits in der Kapitalflussrechnung?",o:["laufende Geschäftstätigkeit","Investitionstätigkeit","Finanzierungstätigkeit","gar nicht"],a:2,e:"Tilgung ist Finanzierungstätigkeit."},
  {q:"Free Cashflow ist in der Vorlesung definiert als ...",o:["opCF plus Cashflow aus Investitionstätigkeit","EBITDA minus Steuern","Jahresüberschuss plus AfA","Veränderung der Kasse"],a:0,e:"A + B: für Kapitalgeber verfügbarer Überschuss. Keine IFRS-Kennzahl."},
  {q:"Cash Conversion Cycle mit DIO 60, DSO 90, DPO 30 Tagen?",o:["180 Tage","120 Tage","60 Tage","30 Tage"],a:1,e:"60 + 90 − 30 = 120 Tage."},
  {q:"Was passiert mit dem EBITDA durch IFRS 16 bei einem Mietvertrag?",o:["sinkt um die Miete","steigt um die Miete","bleibt gleich","wird negativ"],a:1,e:"Mietaufwand wird zu Abschreibung und Zins, beide liegen unter dem EBITDA."},
  {q:"Warum weist die Telekom ein EBITDA AL aus?",o:["Leasingkosten werden wieder abgezogen","Es ist Pflicht nach IFRS","Es ist höher","Wegen der Dividende"],a:0,e:"After Leases: macht die Zahl mit der Zeit vor IFRS 16 vergleichbar."},
  {q:"Welche Aussage zu Normwerten wie Current Ratio 2:1 trifft zu?",o:["Gesetzlich vorgeschrieben","Empirisch für alle Branchen belegt","Konvention, nur im Vergleich aussagekräftig","Nur für Banken relevant"],a:2,e:"Branchen- und Zeitvergleich statt pauschaler Normen."},
  {q:"Warum kann Reverse Factoring den opCF eines Käufers schönen?",o:["Es senkt den Umsatz","Es verlängert faktisch das Lieferantenziel","Es erhöht die Abschreibung","Es senkt die Steuern"],a:1,e:"Seit 2024 verlangt IAS 7 Angaben zu Supplier Finance. Fall Greensill 2021."},
  {q:"Nokia 2011: Verlust, aber positiver opCF. Wichtigster Grund?",o:["Höhere Abschreibungen","Abbau von Working Capital","Steuererstattungen","Kapitalerhöhung"],a:1,e:"Schrumpfung setzt Working Capital frei, nicht nachhaltig."}
 ]},
 kap2: { title: "Kapitel 2 Investitionsrechnung", qs: [
  {q:"Was misst der Kapitalwert?",o:["Die Rendite in Prozent", "Den heutigen Wertbeitrag über die geforderte Verzinsung hinaus", "Die Amortisationsdauer", "Den Umsatz"],a:1,e:"KW > 0: Das Projekt schafft Wert über den Kalkulationszins hinaus."},
  {q:"−100; 5 × 30 bei 10 %: Kapitalwert?",o:["50,0", "13,7", "−13,7", "26,4"],a:1,e:"30 × 3,7908 − 100 = 13,7."},
  {q:"Der Zins steigt. Welcher Kapitalwert fällt stärker?",o:["Projekt mit frühen Rückflüssen", "Projekt mit späten Rückflüssen", "Beide gleich", "Keiner"],a:1,e:"Späte Rückflüsse werden über mehr Perioden abgezinst."},
  {q:"E: −10.000; +20.000. F: −20.000; +35.000. i = 10 %. Wahl?",o:["E wegen IRR 100 %", "F wegen höherem Kapitalwert", "Beide", "Keines"],a:1,e:"KW E 8.182, F 11.818; Differenz verzinst sich mit 50 %."},
  {q:"Excel NBW(10 %; C0:C5) mit Investition in C0 ist",o:["richtig", "zu klein, C0 wird mit abgezinst", "zu groß", "der IRR"],a:1,e:"Richtig: NBW(i; C1:C5) + C0."},
  {q:"rf 2 %, Beta 1,2, Prämie 6 %: Eigenkapitalkosten?",o:["8,0 %", "9,2 %", "7,2 %", "10,0 %"],a:1,e:"2 + 1,2 × 6 = 9,2 %."},
  {q:"Wie viele interne Zinsfüße kann −1.000; +3.010; −2.020 haben?",o:["keinen", "einen", "zwei", "unendlich viele"],a:2,e:"Zwei Vorzeichenwechsel: 1 % und 100 %."},
  {q:"Was erfasst die Amortisationsdauer nicht?",o:["Die Investition", "Zahlungen nach dem Amortisationszeitpunkt", "Frühe Rückflüsse", "Die Laufzeit bis zur Amortisation"],a:1,e:"Sie ist ein Risikomaß, kein Wertmaß."},
  {q:"Degressive statt lineare AfA: Kapitalwert nach Steuern",o:["sinkt", "steigt, weil Steuern später fallen", "bleibt gleich", "wird null"],a:1,e:"Die Steuer wird verschoben, der Zinsvorteil zählt."},
  {q:"Farbpigmentanlage unter Unsicherheit: Was treibt den Kapitalwert am stärksten?",o:["Der Zins", "Die Nutzungsdauer", "Der Marktanteil", "Die Steuer"],a:1,e:"Erwartete 6 statt 10 Jahre senken den erwarteten KW von 9 auf etwa 2 Mio. €."}
 ]},
 kap3: { title: "Kapitel 3 Business Case", qs: [
  {q:"Was prüft eine Bank vorrangig?",o:["Exit-Perspektive", "Kapitaldienstfähigkeit und Sicherheiten", "Marktanteil weltweit", "Teamgröße"],a:1,e:"Zinsen und Tilgung müssen aus dem Cashflow kommen."},
  {q:"DSCR =",o:["EBIT / Umsatz", "Cashflow vor Kapitaldienst / (Zinsen + Tilgung)", "EK / GK", "Schulden / EBITDA"],a:1,e:"Unter 1 reicht das Geld nicht für den Kapitaldienst."},
  {q:"Wozu dient die Planbilanz im integrierten Plan?",o:["Steuererklärung", "Probe der Konsistenz", "Ersetzt die GuV", "Nur für Investoren"],a:1,e:"Geht sie auf, passen GuV, Kapitalfluss und Bilanz zusammen."},
  {q:"Warum ist die Kasse im Anlaufjahr knapp, obwohl die AfA keine Zahlung ist?",o:["Wegen der AfA", "Wegen Aufbau Working Capital und Tilgung", "Wegen Steuervorauszahlung", "Wegen der Bilanz"],a:1,e:"Vorräte und Forderungen binden Geld, Tilgung fließt ab."},
  {q:"BigBag: Kapitalwert bei 7,25 %?",o:["−293 Tsd. €", "293 Tsd. €", "629 Tsd. €", "0"],a:1,e:"KW 293 Tsd. €, IRR 14,0 %."},
  {q:"BigBag: Was macht den Kapitalwert schon bei 10 % Änderung negativ?",o:["Investition", "Menge", "Preis oder Herstellkosten", "Marketing"],a:2,e:"Die Marge beträgt nur 0,40 € je kg."},
  {q:"Vermiedene Sanierungskosten im Business Case?",o:["Weglassen", "Als eingesparte Auszahlung nach Steuern ansetzen", "Als Abschreibung", "Nur im Text"],a:1,e:"Inkrementell: mit und ohne Projekt verschieden."},
  {q:"Welcher Plan bestimmt den Finanzierungsbedarf?",o:["Basisplan", "Ungünstiges Szenario, das man tragen will", "Bester Fall", "Durchschnitt"],a:1,e:"Die Finanzierung muss die Lücke im Stressfall decken."},
  {q:"Wann schreibt man die Executive Summary?",o:["Zuerst", "Zuletzt", "Nie", "Nur für Banken"],a:1,e:"Sie verdichtet den fertigen Plan."},
  {q:"Typisches Warnzeichen im Business Plan?",o:["Quellen je Zahl", "Hockeyschläger ohne Begründung", "Stresstest", "Planbilanz"],a:1,e:"Planungsfehlschluss: Optimismus bei Dauer und Wachstum."}
 ]},
 kap4: { title: "Kapitel 4 Finanzierung", qs: [
  {q:"Pensionsrückstellungen sind",o:["Außen- und Eigenfinanzierung", "Innen- und Fremdfinanzierung", "Außen- und Fremdfinanzierung", "Innen- und Eigenfinanzierung"],a:1,e:"Mittel aus dem Umsatz, Verpflichtung ist Fremdkapital."},
  {q:"GKR 10 %, Zins 8 %, FK 50 %: EKR?",o:["10 %", "12 %", "14 %", "8 %"],a:1,e:"10 + 2 × 50 / 50 = 12 %."},
  {q:"GKR 6 %, Zins 8 %: Was macht mehr Fremdkapital?",o:["EKR steigt", "EKR sinkt", "nichts", "GKR steigt"],a:1,e:"Negativer Hebel."},
  {q:"Wo endet der Investment Grade bei S&P?",o:["A−", "BBB−", "BB+", "B"],a:1,e:"BBB− ist die letzte Stufe."},
  {q:"Marktzins steigt von 3 auf 4 %: Kurs der 3-%-Anleihe (5 Jahre)?",o:["104,71", "100,00", "95,55", "90,00"],a:2,e:"Barwert sinkt auf 95,55."},
  {q:"2 % Skonto, 10 Tage, netto 30: Jahreszins des Verzichts?",o:["2 %", "rund 37 %", "rund 10 %", "rund 20 %"],a:1,e:"2 / 98 × 360 / 20."},
  {q:"Annuitätendarlehen gegenüber Abzahlungsdarlehen:",o:["mehr Zinsen, gleiche Rate", "weniger Zinsen", "höhere erste Rate", "keine Tilgung"],a:0,e:"Langsamere Tilgung am Anfang."},
  {q:"Degressive statt linearer AfA im Jahr 1:",o:["Gewinn und Cashflow steigen", "Gewinn sinkt, Cashflow steigt", "beide sinken", "nichts"],a:1,e:"Gestundete Steuer."},
  {q:"Lohmann-Ruchti bei 5 Jahren Nutzungsdauer: maximale Erweiterung?",o:["2-fach", "1,67-fach", "1,2-fach", "5-fach"],a:1,e:"2n / (n + 1) = 10 / 6."},
  {q:"Echtes Factoring heißt:",o:["Factor trägt Ausfallrisiko", "Verkäufer trägt Ausfallrisiko", "nur Inkasso", "Kredit gegen Aktien"],a:0,e:"Delkredere beim Factor."}
 ]}
};
