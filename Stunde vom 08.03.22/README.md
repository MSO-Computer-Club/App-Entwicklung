# Konsole:
Einfachste Form Informationen anzuzeigen, sehr wichtiges Werkzeug für Programmierer
Wir können in die Konsole drucken
### `console.log("Hallo mein Name ist Alfonso");`

Zeichenketten, (Wörter, Sätze …) in Anführungszeichen

# Variablen:
### `var name = "Alfonso";`
Variable ist ein "Behälter" für einen Wert, dieser Wert kann verändert werden (z.B. Ein Wort, eine Zahl, ein Satz)
Dort oben "Variable wird deklariert" => Wir erstellen sie und geben ihr einen Wert
Wir können Variablen drucken:
### `console.log(name);`
Wir können nach der Deklaration ihren Wert auch jederzeit ändern:
### `var name = "Alfonso";`
### `console.log(name); // => Alfonso`
### `name = "Josef";`
### `console.log(name); // => Josef`
Wenn wir name auf "Josef" setzen, schreiben wir davor nicht noch mal "var", wir deklarieren (erstellen) keine neue Variable, wie wir es mit  "var name = "Alfonso";  tuen, sondern wir verändern die vorhandene Variable
			
Wofür brauchen wir das?
Beispiel Anmeldeseite: "Hallo, " + name (Jeder Benutzer soll hier seinen eigenen Namen stehen haben)
### `console.log("Hallo, " + name);`
Wir erstellen eine zweite Variable 
### `var lieblingsFarbe = "blau";`
Müssen schreiben "lieblingsFarbe" oder "lieblings_farbe", im Variablenname kann kein Leerzeichen sein
Können jetzt einen längeren Satz zusammenbasteln und drucken:
### `console.log("Hallo mein Name ist " + name + " meine Lieblingsfarbe ist "+ lieblingsFarbe);`

Sehen jetzt die gleiche Zeile, hat durch das ändern von Variablen eine andere Ausgabe:
### `var name = "Alfonso";`
### `var lieblingsFarbe = "blau";`
### `console.log("Hallo mein Name ist " + name + " meine Lieblingsfarbe ist " +  lieblingsFarbe);`
### `// => "Hallo mein Name ist Alfonso meine Lieblingsfarbe ist blau"`
			
### `name = "Josef";`
### `lieblingsFarbe = "grün";`
### `console.log("Hallo mein Name ist " + name + " meine Lieblingsfarbe ist " + lieblingsFarbe); `
### `// => "Hallo mein Name ist Josef meine Lieblingsfarbe ist grün"`
		
    
Aufgabe: Bastelt euer eigene Ausgabe mit neuen Variablen zusammen (Hobbies, Nachname, Lieblingsfach, etc.)
Bearbeitet dann nach dem Drucken euere Variablen und druckt den Satz erneut aus

		

