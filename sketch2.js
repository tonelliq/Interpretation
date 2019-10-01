function setup() {

	createCanvas(400, 300)

	angleMode(DEGREES)


//Pie Chart
	// strokeWeight(3)
	// fill(200, 100, 0, 255)
	// arc(130, 105, 200, 200, 0, 160, PIE)

	// fill(200, 0, 0, 255)
	// arc(130, 105, 200, 200, 160, 240, PIE)

	// fill(0, 100, 200, 255)
	// arc(130, 105, 200, 200, 240, 330, PIE)

	// fill(50, 100, 10, 255)
	// arc(130, 105, 200, 200, 330, 360, PIE)


//Mountain Shape
	// fill(0, 150, 100)
	// beginShape()
	// vertex(45, 116)
	// vertex(99, 41)
	// vertex(144, 109)
	// vertex(223, 28)
	// vertex(302, 151)
	// vertex(45, 116)
	// endShape()

	// point(150, 180)

	
//Name
	strokeWeight(3)
	noFill()

	translate(50, 50)
	rotate(20)

	beginShape()
	curveVertex(10, 10)
	curveVertex(10, 10)
	curveVertex(75, 10)
	curveVertex(75, 100)
	curveVertex(10, 100)
	curveVertex(10, 10)
	curveVertex(10, 10)
	endShape()

	beginShape()
	curveVertex(42, 50)
	curveVertex(42, 50)
	curveVertex(55, 80)
	curveVertex(85, 120)
	curveVertex(85, 120)
	endShape()

	beginShape()
	curveVertex(120, 10)
	curveVertex(120, 10)
	curveVertex(120, 100)
	curveVertex(160, 100)
	curveVertex(160, 10)
	curveVertex(160, 10)
	endShape()

	beginShape()
	vertex(200, 10)
	vertex(200, 110)
	endShape()

	beginShape()
	curveVertex(240, 110)
	curveVertex(240, 110)
	curveVertex(240, 10)
	curveVertex(280, 110)
	curveVertex(280, 10)
	curveVertex(280, 10)
	endShape()

	beginShape()
	curveVertex(320, 110)
	curveVertex(320, 110)
	curveVertex(320, 10)
	curveVertex(360, 110)
	curveVertex(360, 10)
	curveVertex(360, 10)
	endShape()
}

function mouseClicked() {
	print(int(mouseX), int(mouseY))
}