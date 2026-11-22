/* Fall Nordstil: Daten der Prozesskosten-Challenge (erfundenes Unternehmen, Größenordnungen aus Branchendaten) */
window.NORDSTIL={
"meta": {
"vk": 90.0,
"markt": 79.0,
"marge": 0.1,
"we": 32.0,
"porto_hin": 3.5,
"porto_rueck": 1.8,
"fv": 2.86,
"fr": 1.86,
"absatz": 20000,
"rq": 0.65,
"zuschlag_alt": 0.8
},
"depts": [
{
"id": 1,
"name": "Einkauf und Lieferantenmanagement",
"K": 300000,
"M": 300000,
"U": 255000,
"rate": 1.0,
"leer": 45000.0,
"ausl": 0.85,
"cost": 3.0,
"acts": [
{
"name": "Lieferanten auswählen, Muster prüfen, verhandeln",
"t": 240,
"f": 0.005,
"bezug": "je Bestellung (eine Bestellung je 200 verkaufte Kleider)",
"cls": "W",
"cost": 1.2
},
{
"name": "Sorgfaltspflichten in der Lieferkette (LkSG): Selbstauskunft und Risikoanalyse dokumentieren",
"t": 180,
"f": 0.005,
"bezug": "je Bestellung",
"cls": "B",
"cost": 0.9
},
{
"name": "Auftragsbestätigung des Lieferanten aus PDF ins ERP abtippen",
"t": 60,
"f": 0.005,
"bezug": "je Bestellung",
"cls": "V",
"cost": 0.3
},
{
"name": "Fehlbestellungen nachverhandeln, weil der Größenmix nicht passte",
"t": 120,
"f": 0.005,
"bezug": "je Bestellung",
"cls": "V",
"cost": 0.6
}
],
"opts": [
{
"key": "A",
"text": "Lieferant per EDI anbinden: Abtippen der Auftragsbestätigung entfällt",
"pts": 20
},
{
"key": "B",
"text": "Bestellvorschlag aus Abverkaufsdaten je Größe: Fehlbestellungen entfallen",
"pts": 40
},
{
"key": "C",
"text": "LkSG-Dokumentation für Kleider einstellen, die Lieferanten sind ja bekannt",
"pts": -20
}
],
"prop": 0.0
},
{
"id": 2,
"name": "Wareneingang und Qualitätssicherung",
"K": 240000,
"M": 300000,
"U": 270000,
"rate": 0.8,
"leer": 24000.0,
"ausl": 0.9,
"cost": 4.0,
"acts": [
{
"name": "Menge prüfen und Ware einbuchen",
"t": 1.0,
"f": 1.5,
"bezug": "je eingehendem Kleid (1,5 je verkauftem Kleid, ein Drittel bleibt unverkauft)",
"cls": "N",
"cost": 1.2
},
{
"name": "Qualitätsstichprobe",
"t": 2.0,
"f": 0.5,
"bezug": "je geprüftem Kleid",
"cls": "N",
"cost": 0.8
},
{
"name": "Zweitprüfung derselben Ware durch die QS, weil beide Bereiche eigene Systeme haben",
"t": 2.0,
"f": 0.75,
"bezug": "je geprüftem Kleid",
"cls": "V",
"cost": 1.2
},
{
"name": "Pflichtangaben der Etiketten prüfen (Textilkennzeichnung)",
"t": 0.5,
"f": 1.5,
"bezug": "je eingehendem Kleid",
"cls": "B",
"cost": 0.6
},
{
"name": "Lieferanten wegen falscher Etiketten reklamieren",
"t": 10.0,
"f": 0.025,
"bezug": "je Reklamation",
"cls": "V",
"cost": 0.2
}
],
"opts": [
{
"key": "A",
"text": "Gemeinsames Prüfprotokoll für Wareneingang und QS: Zweitprüfung entfällt",
"pts": 40
},
{
"key": "B",
"text": "Qualitätsstichprobe halbieren",
"pts": 10
},
{
"key": "C",
"text": "Etiketten nicht mehr prüfen, Fehler meldet ja der Kunde",
"pts": -20
}
],
"prop": 0.2
},
{
"id": 3,
"name": "Lager und Versand",
"K": 900000,
"M": 1500000,
"U": 1200000,
"rate": 0.6,
"leer": 180000.0,
"ausl": 0.8,
"cost": 7.893,
"acts": [
{
"name": "Kommissionieren und verpacken",
"t": 3.0,
"f": 2.86,
"bezug": "je versandtem Kleid (2,86 je verkauftem Kleid)",
"cls": "N",
"cost": 5.148
},
{
"name": "Versanddaten aus dem Shop manuell ins Versandsystem kopieren",
"t": 1.0,
"f": 2.86,
"bezug": "je versandtem Kleid",
"cls": "V",
"cost": 1.716
},
{
"name": "Verpackungsmengen für das Verpackungsregister erfassen (VerpackG)",
"t": 0.25,
"f": 2.86,
"bezug": "je versandtem Kleid",
"cls": "B",
"cost": 0.429
},
{
"name": "Falsch kommissionierte Pakete nachbearbeiten",
"t": 5.0,
"f": 0.1,
"bezug": "je Fehlpaket",
"cls": "V",
"cost": 0.3
},
{
"name": "Persönliche Grußkarte mit Styling-Tipp beilegen, von Kunden ausdrücklich gelobt",
"t": 0.5,
"f": 1.0,
"bezug": "je verkauftem Kleid",
"cls": "W",
"cost": 0.3
}
],
"opts": [
{
"key": "A",
"text": "Schnittstelle zwischen Shop und Versandsystem: manuelles Kopieren entfällt",
"pts": 40
},
{
"key": "B",
"text": "Grußkarte streichen, spart Zeit",
"pts": 0
},
{
"key": "C",
"text": "Verpackungsregister nicht mehr melden",
"pts": -20
}
],
"prop": 0.5
},
{
"id": 4,
"name": "Online-Vertrieb und Kundenservice",
"K": 1080000,
"M": 1200000,
"U": 1020000,
"rate": 0.9,
"leer": 162000.0,
"ausl": 0.85,
"cost": 7.65,
"acts": [
{
"name": "Produktfotos, Passform- und Größenangaben erstellen",
"t": 3.0,
"f": 1.0,
"bezug": "je verkauftem Kleid",
"cls": "W",
"cost": 2.7
},
{
"name": "Kundenanfragen zur Größe beantworten",
"t": 6.0,
"f": 0.5,
"bezug": "je Anfrage",
"cls": "N",
"cost": 2.7
},
{
"name": "Dieselbe Anfrage doppelt bearbeiten (E-Mail und Chat ohne gemeinsames Ticketsystem)",
"t": 6.0,
"f": 0.25,
"bezug": "je Doppelanfrage",
"cls": "V",
"cost": 1.35
},
{
"name": "Pflichtinformationen pflegen (Widerrufsbelehrung, Barrierefreiheit nach BFSG)",
"t": 1.0,
"f": 1.0,
"bezug": "je verkauftem Kleid",
"cls": "B",
"cost": 0.9
}
],
"opts": [
{
"key": "A",
"text": "Gemeinsames Ticketsystem: Doppelbearbeitung entfällt",
"pts": 20
},
{
"key": "B",
"text": "Virtuelle Anprobe und präzisere Größenangaben: weniger Anfragen und weniger Retouren",
"pts": 40
},
{
"key": "C",
"text": "Angaben zur Barrierefreiheit weglassen",
"pts": -20
}
],
"prop": 0.2
},
{
"id": 5,
"name": "Retourenzentrum",
"K": 880000,
"M": 1600000,
"U": 1440000,
"rate": 0.55,
"leer": 88000.0,
"ausl": 0.9,
"cost": 19.437,
"acts": [
{
"name": "Retoure annehmen und scannen",
"t": 4.0,
"f": 1.86,
"bezug": "je retourniertem Kleid (1,86 je verkauftem Kleid)",
"cls": "N",
"cost": 4.092
},
{
"name": "Prüfen und sortieren (A-, B-, C-Ware)",
"t": 6.0,
"f": 1.86,
"bezug": "je retourniertem Kleid",
"cls": "N",
"cost": 6.138
},
{
"name": "Bügeln und neu verpacken",
"t": 6.0,
"f": 1.86,
"bezug": "je retourniertem Kleid",
"cls": "N",
"cost": 6.138
},
{
"name": "Erstattung zusätzlich manuell freigeben, obwohl das System bereits geprüft hat",
"t": 2.0,
"f": 1.86,
"bezug": "je retourniertem Kleid",
"cls": "V",
"cost": 2.046
},
{
"name": "Fehlenden Retourengrund beim Kunden nachfragen",
"t": 1.0,
"f": 1.86,
"bezug": "je retourniertem Kleid",
"cls": "V",
"cost": 1.023
}
],
"opts": [
{
"key": "A",
"text": "Erstattung automatisch freigeben: manuelle Zweitfreigabe entfällt",
"pts": 20
},
{
"key": "B",
"text": "Retourengrund als Pflichtfeld im Portal",
"pts": 10
},
{
"key": "C",
"text": "Retourengründe monatlich mit Einkauf und Vertrieb auswerten und Ursachen abstellen",
"pts": 40
}
],
"prop": 0.5
},
{
"id": 6,
"name": "Finanzen und Verwaltung",
"K": 660000,
"M": 600000,
"U": 540000,
"rate": 1.1,
"leer": 66000.0,
"ausl": 0.9,
"cost": 3.003,
"acts": [
{
"name": "Zahlungseingang abgleichen (Kauf auf Rechnung)",
"t": 1.0,
"f": 1.0,
"bezug": "je verkauftem Kleid",
"cls": "N",
"cost": 1.1
},
{
"name": "Gutschriften für Retouren buchen",
"t": 0.5,
"f": 1.86,
"bezug": "je retourniertem Kleid",
"cls": "N",
"cost": 1.023
},
{
"name": "Lieferantenrechnung als PDF abtippen statt E-Rechnung einzulesen",
"t": 0.2,
"f": 1.0,
"bezug": "je verkauftem Kleid",
"cls": "V",
"cost": 0.22
},
{
"name": "Statistikmeldungen erstellen (Intrastat, Umsatzsteuer-Meldungen)",
"t": 0.5,
"f": 1.0,
"bezug": "je verkauftem Kleid",
"cls": "B",
"cost": 0.55
},
{
"name": "Mahnungen schreiben",
"t": 0.5,
"f": 0.2,
"bezug": "je Mahnung",
"cls": "N",
"cost": 0.11
}
],
"opts": [
{
"key": "A",
"text": "E-Rechnungen automatisch einlesen, die Empfangspflicht gilt seit 2025 ohnehin",
"pts": 40
},
{
"key": "B",
"text": "Kauf auf Rechnung abschaffen",
"pts": 10
},
{
"key": "C",
"text": "Statistikmeldungen aussetzen, bis jemand nachfragt",
"pts": -20
}
],
"prop": 0.1
}
]
};
