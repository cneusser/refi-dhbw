# Änderungen

## v0.8 (22.11.2026)

- Terminplan Kapitel 4 angepasst: zusätzlicher Termin am 04.12., der Termin am 07.12. entfällt, neuer Abschlusstermin am 10.12.
- Foliensatz Kapitel 4 heißt jetzt 261204_REFI_II_Kap4_Finanzierung.pdf; der Gesamtfall wird am 08.12. erarbeitet und am 10.12. vor dem Kreditausschuss vorgetragen.
- Probeklausur zu Hause bis Mittwoch, 09.12., 22 Uhr; die Auswertung der Kursstatistik steuert die Lückenklinik am 10.12. Die Fragestunde in Teams bleibt als Zusatzangebot vor der Klausur.
- Kursstatistik zählt Meldungen standardmäßig ab dem 08.12.
- Klausurtermin Donnerstag, 17.12.2026, auf der Klausurübersicht in Kapitel 4.

## v0.7 (22.11.2026)

- Probeklausur zu Hause statt im Hörsaal: Nach Probeklausur und Klausur können Studierende ihr Ergebnis anonym melden (nur Quoten je Kapitel und Abschnitt).
- Neue Seite statistik.html (PIN): Verteilung der Quoten, Kapitel und schwächste Abschnitte, CSV-Export; Grundlage für die Fragestunde in Teams.
- Gesamtfall Küstenwerkstatt über ReFi II Kapitel 1 bis 4 (Excel E01) und zwei neue Folien in Kapitel 4; Lösung im Anhang.
- Firebase-Regel für refi/stats im README ergänzt (lesen offen, Einträge nur anlegen, nicht ändern).

## v0.6 (22.11.2026)

- ReFi II, Kapitel 4 Finanzierung neu aufgebaut (54 Folien): Ziele und Leverage, Bonität und Rating, Außenfinanzierung, Innenfinanzierung, Klausurübersicht ReFi II; PDF ohne Lösungsfolie unter unterlagen/.
- Excel-Übungen Kapitel 4 (D01 bis D08), alle Ergebnisse nachgerechnet.
- Tools zur Finanzierung (tools-k4f.html): Leverage mit Risikoband, Value at Risk, Darlehen, Anleihe mit Duration, Skonto, Selbstfinanzierung, Lohmann-Ruchti.
- Prüfungsvorbereitung: 25 Fragen und 5 Rechenaufgaben zu Kapitel 4; Probeklausur und Klausur enthalten Finanzierung.
- Glossar um 20 Begriffe erweitert, Live-Quiz Kapitel 4, Literatur Kapitel 4.

## v0.5 (22.11.2026)

- ReFi II, Kapitel 2 Investitionsrechnung (64 Folien) und Kapitel 3 Business Case (31 Folien) neu aufgebaut, mit Advance Organizer, Peer Instruction, Gruppenübungen, kritischen Folien, Selbstlernfragen und Literatur; PDFs unter unterlagen/.
- Excel-Übungen ReFi II Kapitel 2 und 3 (B01 bis B17, C01), alle Ergebnisse nachgerechnet; Aufgabenblatt unter unterlagen/.
- Tools zur Investitionsrechnung und zum Business Case (tools-k2.html): 13 Werkzeuge mit Schiebereglern und Grafiken.
- Prüfungsvorbereitung: 37 neue Fragen und 8 neue Rechenaufgaben zu Kapitel 2 und 3; Probeklausur und Klausur enthalten jetzt Investition und Business Case.
- Glossar um 26 Begriffe erweitert, Live-Quiz-Fragensätze Kapitel 2 und 3, Literatur zu ReFi I Kapitel 4 und ReFi II Kapitel 2 und 3 auf der Linkseite.

## v0.4 (22.11.2026)

- ReFi I, Kapitel 4 neu aufgebaut: Foliensatz „Kosten- und Leistungsrechnung“ (57 Folien) mit vier Blöcken, Advance Organizer, Peer-Instruction-Fragen, Gruppenübungen, kritischen Folien, Selbstlernfragen je Block und Literatur. Für Studierende als PDF ohne Lösungsfolien unter unterlagen/.
- Vorlesungsseite und Advance Organizer zeigen die Blöcke 4.1 bis 4.4.

## v0.3 (22.11.2026)

- Prüfungsvorbereitung (pruefung.html) mit Anmeldung (Firebase Authentication, E-Mail und Passwort) oder Gastmodus; Stand wird gespeichert und kann fortgesetzt werden.
- Selbsttest je Kapitel mit Rückmeldung nach jeder Frage; Probeklausur 60 Minuten; Klausur 120 Minuten im Aufbau der Probeklausuren mit großer Buchhaltungsaufgabe. Aufgaben, Zahlen und Reihenfolge werden bei jedem Start neu erzeugt. Timer läuft nach Ablauf ins Minus. Lösungen erst nach Abgabe, mit Verweis auf den Abschnitt im Skript.
- Fragenpool (assets/pool.js): 57 Multiple-Choice-Fragen, 15 Rechenaufgaben mit Zufallswerten, Ankreuzmatrix Systematik, Buchungssatz-Trainer, Buchhaltungsaufgabe als Generator, offene Fragen mit Musterlösung und Selbstbewertung.
- Tools zur Kosten- und Leistungsrechnung (tools-k4.html): neun Werkzeuge mit Schiebereglern und Grafiken.
- Glossar (glossar.html) mit Suche und Kapitelfilter.
- Selbsttests (selbsttest.html) leiten auf die Prüfungsvorbereitung um.

## v0.2 (22.11.2026)

- Prozesskosten-Challenge 2.0: Phasen Beitritt, Einzelphase (15 Min.), Gruppenphase (15 Min.), Auflösung, gesteuert aus der Spielleitung mit Countdown.
- Einzelphase Schritt für Schritt (Daten, Runde 1, Runde 2, Runde 3, Absenden) mit Speichern nach jedem Schritt; Rückkehr über Spielnamen auf anderem Gerät.
- Gruppenphase: Ergebnisse aller Mitglieder mit Mittelwert, häufigstem Wert, Spanne, Standardabweichung, Stimmen und Einigkeit; Abgabeformular mit Mehrheiten vorbelegt.
- Auflösung auf dem Handy: Lösung gegen Gruppe und Einzelergebnisse, Punkte.
- Punkte: Einzelbonus bis 10 Punkte.
- Ewige Rangliste über alle Spiele (Firebase refi/archiv) mit CSV-Export; Spiel wird beim Auflösen automatisch archiviert.
- FAQ und Rechenhilfe: challenge-faq.html, öffnet in neuem Fenster.
- Moodle durch Teams ersetzt; Versionsnummer im Fußbereich.

## v0.1 (22.11.2026)

- Erste Fassung: Start, Vorlesung, Advance Organizer, Live-Quiz, Challenge, Tools, Selbsttests, Fragen, Links.
