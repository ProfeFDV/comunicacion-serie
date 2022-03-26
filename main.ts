input.onButtonPressed(Button.A, function () {
    a += 1
})
input.onButtonPressed(Button.B, function () {
    a += -1
})
let x = 0
let y = 0
let a = 0
let b = 0
basic.forever(function () {
    x = Math.round(pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    0,
    4
    ))
    y = Math.round(pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    0,
    4
    ))
    serial.writeLine("" + x + "," + y + "," + a + "," + b)
    basic.pause(500)
})
