//Variablen definieren
var counter = 0;
var summanden = [1, 10, 100, 100000000];
var rechenOperationen = ["+", "*", "-", "/"];

//Dropdowns bestücken
setProperty("dropdown1", "options", summanden);
setProperty("dropdown2", "options", rechenOperationen);

//Konsolenausgaben zur Kontrolle
console.log(summanden[0]);
console.log(summanden[2]);

//Function, die aufgerufen wird, wenn Cookie geklickt wird
function rechne(zahl, typ) {
  //wenn typ gleich + ist, dann...
  if (typ === "+") {
    //...setze counter auf den aktuellen counter + zahl
    counter = counter + zahl;
  } else if (typ === "*") {
    //...setze counter auf den aktuellen counter * zahl
    counter = counter * zahl;
  }
  //update den Text "counter"
  setText("counter", counter);
}

//Funtion, die aufgerufen wird wenn der Cookie geklickt wird
onEvent("cookie", "click", function () {
  var zahl = getNumber("dropdown1");
  var typ = getText("dropdown2");
  //Ruft die function "rechne" auf, die dann alles rechnet
  rechne(zahl, typ);
});
//Function, die aufgerufen wird wenn der Button "nextScreen" geklickt wird
onEvent("toScreen2", "click", function () {
  //rufe Screen "screen2" auf
  setScreen("screen2");
});
//Function, die aufgerufen wird wenn der Button "nextScreen" geklickt wird
onEvent("toScreen1", "click", function () {
  //rufe Screen "screen1" auf
  setScreen("screen1");
});

//Ideen für den Cookieclicker

//shop
//levelsystem
//Bild verändert sich
//speichern
//coins sammeln -> shop
