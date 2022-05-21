let cells = []

function setup() {
    createCanvas(windowWidth, windowHeight)
    cells.push(new Cell())
    cells.push(new Cell())
    cells.push(new Cell())
    cells.push(new Cell())
    cells.push(new Cell())
    cells.push(new Cell())
    cells.push(new Cell())
}

function draw() {
    background(51)
    for (let i = 0; i < cells.length; i++) {
        cells[i].move()
        cells[i].show()
    }
}

function mousePressed(){
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].clicked(mouseX, mouseY)) {
            cells.push(cells[i].mitosis())
            cells.push(cells[i].mitosis())
        }
    }
}