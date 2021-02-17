# 15.2.

1. Neues Github-Projekt anlegen

2. Schreiben Sie ein Script, das das kleine 1x1 auf dem Bildschirm
ausgibt. Benutzen Sie dazu eine geschachtelte for-Schleife, die
die Ausgabe ähnlich wie in einer Tabelle vornimmt.

Geschachtelte for-Schleifen sind ähnlich wie geschachtelte if-else-Konstrukte,
innerhalb der einen Anweisung befindet sich einfach die nächste Schleife.
Probieren Sie es einfach aus.

3. Das Ergebnis einchecken

# 16.2.

https://github.com/rkaczich/js-kurs4

Aufgabe 1. Refactoring des erstellten codes... Der Quelltext soll so überarbeitet werden, dass es nur noch eine Methode zur Anzeige der Tabelle gibt, also dass header und content innerhalb einer Methode gefüllt werden.

# 17.2.

String-Objekt
1. Erstellen Sie ein Script, das alle Methoden des String-Objektes anwendet
und die Ergebnisse auf dem Bildschirm ausgibt. Benutzen Sie den folgend en
String.
http://w ebservi/antwort.htm?name=Pillepalle&vor=Herbert&B1=Abschicken
2. Extrahieren Sie aus dem unten stehenden String den Inhalt der Variablen
"Name" und "Vorname". Geben Sie das Ergebnis auf dem Bildschirm aus!
http://webservi/antwort.htm?name=Pillepalle&vor=Herbert&B1=Absch icken
Aufagbe 1
Wirkung vo n: toString() : http://webservi/antwort.htm?name=Pillepalle&vorn=Herbert&B1=Abschicken
Wirkung von: length :78
Wirkung von: charAt(0) : h
Wirkung von: indexOf(`nam e`, 0) : 28
Wirkung von: lastIndexOf(`o`, 8) : -1
Wirkung von: substring(3 , 12) :p://w ebse
Wirkung von: toLowerCase() :http://webse rvi/antwort.htm?name=pillepalle&vorn=herbert&b1=abschicken
Wirkung von: toUpperCase() :HTTP://WEBSERVI/ANTWORT.HTM?
NAME=PILLEPALLE&VORN=HERBERT&B1=ABSCHICKEN
Aufgabe 2
Der Name beginnt an Position: 33
Der Name endet an Position: 43
Der Name ist: Pillepalle
Der Vorname beginnt an Position: 53
Der Vorname endet an Position: 60
Der Vorname ist: Herbert
