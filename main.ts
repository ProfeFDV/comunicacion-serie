let x = 0
let y = 0
let a = 0
let b = 0
basic.forever(function () {
    x = randint(0, 5)
    y = randint(0, 5)
    a = randint(0, 5)
    b = randint(0, 5)
    serial.writeLine("" + x + "," + y + "," + a + "," + b)
    basic.pause(1000)
})
