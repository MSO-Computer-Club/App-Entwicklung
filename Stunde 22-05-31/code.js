var symbole = ["😈", "🎱", "7️⃣", "🍒", "🌞"]

onEvent("hebel","click", function(){
  var value1 = Math.floor(Math.random() * symbole.length)
  var value2 = Math.floor(Math.random() * symbole.length)
  var value3 = Math.floor(Math.random() * symbole.length)
  
  setText("slot1", symbole[value1])
  setText("slot2", symbole[value2])
  setText("slot3", symbole[value3])
})