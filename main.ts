grove.onGesture(GroveGesture.Right, function () {
    basic.showString("RIGHT")
})
grove.onGesture(GroveGesture.Clockwise, function () {
    basic.showIcon(IconNames.Happy)
})
grove.onGesture(GroveGesture.Left, function () {
    basic.showString("LEFT")
})
basic.forever(function () {
	
})
