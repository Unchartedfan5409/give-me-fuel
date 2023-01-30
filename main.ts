function Update_scores2 () {
    OLED.clear()
    OLED.writeStringNewLine("Rounds" + Rounds)
    OLED.newLine()
    OLED.writeStringNewLine("Player B:" + PlayerB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Player A: " + PlayerA)
}
let Ties = 0
let PlayerB = 0
let PlayerA = 0
let Rounds = 0
OLED.init(128, 64)
Rounds = 0
PlayerA = 0
PlayerB = 0
Ties = 0
OLED.writeStringNewLine("Shall we play a game? ")
basic.pause(2000)
