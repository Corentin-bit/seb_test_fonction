/**
* Blocs permettant d'afficher des expressions
*/
//% weight=100 color=#033fff icon="\uf118″
namespace expressions {
    //% block
    export function réveil(): void {
// début du code copié
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
// fin du code copié
   }
}