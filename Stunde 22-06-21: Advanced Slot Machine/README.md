https://studio.code.org/projects/applab/q0rVIZbUT1iXYQaza3J_EXflLzk6B6huu7oybPNUbsI

# Weiterentwicklung der Slotmachine App
(Für bisherige Erklärung, Eintrag von letzter Stunde anschauen: https://github.com/MSO-Computer-Club/App-Entwicklung/tree/main/Stunde%2022-05-31 )

## Weiterführung If-Bedingungen
Wir wollen einen Gewinntext ausgeben, wenn ein Nutzer drei gleiche Symbole in einem Slotmachine Spiel erhalten hat. Um dies zu überprüfen, können wir die value1-, value2- und value3-Variablen verwenden, in welcher wir ja den Index (die "Hausnummer") des Symbols speichern. Wenn diese drei alle gleich sind, haben wir ja in den 3 Slots das Symbol des selben Index, sprich das selbe Symbol, wollen hier also den Gewinntext anzeigen.

```js
if(value1 === value2 && value1 === value3){
  ...
}
```

=> Sprich, "wenn value1 gleich value2 ist und wenn value1 gleich value3 ist", dann tue...

Hier können wir jetzt probeweise erstmal den Text in der Konsole ausgeben:
```js
if(value1 === value2 && value1 === value3){
  console.log("Drei Gleiche!")
}
```

Wenn wir nun ein Textlabel erstellen, können wir den Text auch schön graphisch ausgeben, wie wir es bereits vom Cookie Clikcer kennen:
```js

if(value1 === value2 && value1 === value3){
  setText("label1", "Drei Gleiche!")
}
```