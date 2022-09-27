input.onButtonPressed(Button.A, function () {
    let onoff_is_1 = 0
    if (onoff_is_1) {
        basic.clearScreen()
        onoff = 0
    } else {
        basic.showLeds(`
            # # # # #
            # . # . #
            # # # # #
            # . # . #
            # # # # #
            `)
    }
})
let onoff = 0
onoff = 0
