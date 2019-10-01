function setup() {

	createCanvas(400, 300)

	strokeWeight(1000)
	stroke(255, 100, 0)
	rect(0, 0, 400, 300)

	strokeWeight(10)
	stroke(0, 100, 105)
	line(0, 0, 400, 300)
	line(0, 300, 400, 0)
	line(0, 150, 400, 150)
	line(200, 0, 200, 300)

	fill(0, 0, 0)
	strokeWeight(5)
	stroke(0, 255, 150)
	ellipse(200, 100, 70, 70)
	ellipse(200, 200, 70, 70)
	ellipse(200, 50, 70, 70)
	ellipse(200, 250, 70, 70)
	ellipse(200, 150, 70, 70)

	print("everything is ok")

}


function mouseClicked() {
	print(int(mouseX), int(mouseY))
}