// I have a bucket containing an amount of navy blue paint and I'd like to paint as many walls as possible. Create a function that returns the number of complete walls that I can paint, before I need to head to the shops to buy more.

// n is the number of square meters I can paint.
// w and h are the widths and heights of a single wall in meters.

// expected outputs
// howManyWalls(100, 4, 5) ➞ 5

// howManyWalls(10, 15, 12) ➞ 0

// howManyWalls(41, 3, 6) ➞ 2

function howManyWalls(n, w, h) {
    if (w * h > n) {
        return 0
        console.log(0)
    }
    else {
        let walls = parseInt(n /(w * h))
        return walls
        console.log(walls)
    }
}
