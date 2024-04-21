var counter = 0

function addiere(){
  counter = counter + 1
  setText("counter", counter)
}

onEvent("cookie", "click", addiere)