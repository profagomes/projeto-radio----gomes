// Programação do 2º MicroBit
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    if (receivedNumber == 0) {
        // Liga energia no PIN0 para alimentar LED - Verde (entre)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.clearScreen()
    } else if (receivedNumber == 1) {
        // Liga energia no PIN1 para alimentar LED - Amarelo (Espere)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showIcon(IconNames.Tortoise)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.clearScreen()
    } else {
        // Liga energia no PIN2 para alimentar LED - Vermelho (Ocupado ñ posso atender)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.showIcon(IconNames.No)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    radio.sendNumber(0)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.No)
    radio.sendNumber(2)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Tortoise)
    radio.sendNumber(1)
    basic.pause(1000)
    basic.clearScreen()
})
radio.setGroup(1)
radio.setTransmitPower(6)
