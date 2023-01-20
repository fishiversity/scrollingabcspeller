input.onButtonPressed(Button.A, function () {
    letter = 0
    scroll = 1
})
input.onButtonPressed(Button.B, function () {
    scroll = 0
})
let scroll = 0
let letter = 0
letter = 0
scroll = 0
basic.forever(function () {
    if (scroll == 1) {
        basic.pause(1000)
        letter += 1
    }
})
basic.forever(function () {
    if (letter == 1) {
        basic.showString("A")
    } else if (letter == 2) {
        basic.showString("B")
    } else if (letter == 3) {
        basic.showString("C")
    } else if (letter == 4) {
        basic.showString("D")
    } else {
    	
    }
})
