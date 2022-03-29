var counter = 0
var summanden = [1, 10, 100, 100000000]
setProperty("dropdown1", "options", summanden)

var rechenOperationen = ["+", "*", "-", "/"]
setProperty("dropdown2", "options", rechenOperationen)

// "+", "*"

console.log(summanden[0])
console.log(summanden[2])

function rechne(zahl, typ){
  if(typ === "+"){
    counter = counter + zahl
  } else if(typ === "*"){
    counter = counter * zahl
  }
  
  setText("counter", counter)
}

onEvent("cookie", "click", function(){
  var zahl = getNumber("dropdown1")
  var typ = getText("dropdown2")
  
  rechne(zahl, typ)
})