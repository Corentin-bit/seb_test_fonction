function réveil () {
    basic.showIcon(IconNames.Asleep)
    basic.pause(2000)
    basic.showLeds(`
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        . # # # .
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        # . . # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # . . #
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
    basic.pause(2000)
}
expressions.réveil()
