function Cell(pos, r, c) {

    if (pos) {
        this.pos = pos.copy()
    } else {
        this.pos = createVector(random(100, width - 100), random(100, height - 100))
    }

    this.r = r || 120
    this.c = c || color(random(100, 255), random(100, 255), random(100, 255))

    this.clicked = function(x, y) {
        let d = dist(this.pos.x, this.pos.y, x, y)
        if (d < this.r / 2) {
            return true
        } else {
            return false
        }
    }

    this.mitosis = function() {
        let cell = new Cell(this.pos, this.r / 2, this.c)
        return cell
    }

    this.move = function() {
        let vel = p5.Vector.random2D();
        this.pos.add(vel)
    }

    this.show = function() {
        noStroke()
        fill(this.c)
        ellipse(this.pos.x, this.pos.y, this.r, this.r)
    }
}