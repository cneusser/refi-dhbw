# Finanz- und Rechnungswesen (ReFi) · DHBW Stuttgart

Begleitseite zur Vorlesung Finanz- und Rechnungswesen I und II, Modul T3WIW2003, Wirtschaftsingenieurwesen, Kurs TWIE25A, Dr. Christian Neusser. Entwurf, Stand 23.11.2026.

Statische Seite für GitHub Pages. Live-Funktionen (Live-Quiz, Prozesskosten-Challenge, Fragen) laufen über die Firebase Realtime Database unter dem Pfad `refi/`.

## Seiten

| Datei | Inhalt |
| --- | --- |
| `index.html` | Start mit Kacheln und nächstem Termin |
| `vorlesung.html` | Kapitel mit Unterlagen (PDF ohne Lösungsfolien), Tools, Selbsttest, Literatur |
| `organizer.html` | Fortlaufender Advance Organizer ReFi I und II |
| `challenge.html` | Prozesskosten-Challenge Nordstil: Beitritt per QR, Zufallsname, automatische Gruppenzuordnung, Gruppenabgabe, Spielleitung unter `challenge.html#leitung` (PIN) |
| `live-admin.html`, `live-quiz.html` | Live-Quiz im Kahoot-Stil, Fragensatz über `?set=pkr` oder `?set=kap1` |
| `tools.html` | Schieberegler: drei Kostenrechnungen, Leerkosten, Working Capital, IFRS 16 |
| `tools-k4.html` | Tools zur Kosten- und Leistungsrechnung (ReFi I, Kapitel 4) |
| `pruefung.html` | Prüfungsvorbereitung mit Anmeldung: Selbsttest, Probeklausur 60 Min., Klausur 120 Min. |
| `glossar.html` | Glossar mit Suche |
| `fragen.html` | Fragen und Antworten mit Unterstützen-Knopf, Dozentenmodus per PIN |
| `links.html` | Literatur und Praxisquellen je Kapitel |

Pflege: Kapitelstatus und Material in `assets/kurs.js`, Fragenpool der Prüfungsvorbereitung in `assets/pool.js`, Glossar in `assets/glossar.js`, Live-Quiz-Fragen in `assets/quiz-sets.js`, Literatur in `assets/refs.js`, Falldaten in `assets/nordstil-data.js`.

## Veröffentlichen

1. Auf GitHub ein öffentliches Repository `refi-dhbw` anlegen (der QR-Code auf den Folien zeigt auf `https://cneusser.github.io/refi-dhbw/challenge.html`).
2. Den Inhalt dieses Ordners hochladen (Add file, Upload files, oder per Git).
3. Settings, Pages: Source `Deploy from a branch`, Branch `main`, Ordner `/ (root)`. Nach etwa einer Minute ist die Seite erreichbar.

## Firebase

Eingetragen ist das bestehende Projekt `osnabrueck-quiz`. Empfohlene Regeln (Realtime Database, Regeln), damit nur die benötigten Pfade offen sind:

```json
{
  "rules": {
    "refi": {
      "challenge": { ".read": true, ".write": true },
      "archiv":    { ".read": true, ".write": true },
      "rooms":     { ".read": true, ".write": true },
      "qa":        { ".read": true, ".write": true },
      "users": {
        "$uid": { ".read": "auth != null && auth.uid === $uid", ".write": "auth != null && auth.uid === $uid" }
      }
    },
    "rooms": { ".read": true, ".write": true }
  }
}
```

Wichtig: Steht auf `refi` selbst `.read: true`, sind auch die Nutzerdaten unter `refi/users` für alle lesbar. Deshalb die Regeln je Unterpfad setzen wie oben.

Für die Anmeldung in der Prüfungsvorbereitung: Firebase-Konsole, Authentication, Sign-in method, E-Mail/Passwort aktivieren; unter Settings, Authorized domains `cneusser.github.io` eintragen.

`rooms` wird von der Osnabrück-Seite genutzt. Sauberer ist ein eigenes Projekt für die DHBW: neues Firebase-Projekt, Realtime Database in `europe-west1`, Werte in `firebase-config.js` ersetzen.

Hinweis: Die PIN (2311) für Spielleitung und Dozentenmodus schützt nur die Ansicht, nicht die Datenbank. Gespeichert werden nur Spielnamen, Gruppen, Abgaben und anonyme Fragen.

## Offline

Ohne Internet funktioniert `challenge.html?demo=1` mit Beispieldaten. Für die Challenge selbst liegen die Datenblätter A1 bis A6 im Anhang des Foliensatzes.
