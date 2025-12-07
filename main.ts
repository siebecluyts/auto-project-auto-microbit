radio.onReceivedValue(function (name, value) {
    if (name == "front" && value == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 355)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 355)
    }
    if (name == "back" && value == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 355)
    }
    if (name == "left" && value == 1) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 355)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 355)
    }
    if (name == "right" && value == 1) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 355)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 355)
    }
    if (name == "stop" && value == 1) {
        maqueen.motorStop(maqueen.Motors.M1)
        maqueen.motorStop(maqueen.Motors.M2)
    }
})
radio.setGroup(69)
basic.forever(function () {
    if (maqueen.Ultrasonic() < 5) {
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        basic.pause(100)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        basic.pause(100)
    }
})
basic.forever(function () {
    if (maqueen.Ultrasonic() < 10) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        basic.pause(100)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        basic.pause(100)
    }
})
