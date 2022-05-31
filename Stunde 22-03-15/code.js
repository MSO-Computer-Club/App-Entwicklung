function druckeName(){
  var name ="Fabian"
  console.log("Hallo, mein Name ist " + name)
  name = "Alfonso"
  console.log("Hallo, mein Name ist " + name)  
}

function druckeTier(tier){
  console.log("Hallo, ich bin ein " + tier)
}

function zeigeAn(){
  setText("label1", "Holá!")
}

onEvent("button1","click",zeigeAn)