input.onButtonPressed(Button.A, function () {
    led.unplot(ss_xpos, ss_ypos)
    ss_xpos += -1
})
input.onButtonPressed(Button.AB, function () {
    laser_ypos = 4
    for (let index = 0; index < 4; index++) {
        laser_ypos += -1
        led.plot(ss_xpos, laser_ypos)
        basic.pause(100)
    }
    laser_ypos = 4
    for (let index = 0; index < 4; index++) {
        laser_ypos += -1
        led.unplot(ss_xpos, laser_ypos)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(ss_xpos, ss_ypos)
    ss_xpos += 1
})
let laser_ypos = 0
let ss_xpos = 0
let ss_ypos = 0
ss_ypos = 4
ss_xpos = 2
basic.forever(function () {
    led.plot(ss_xpos, ss_ypos)
})
