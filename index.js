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
    }
    else {
        let walls = parseInt(n / (w * h))
        return walls
    }
}

// Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.

// Can you help her?

// Examples
// greeting("Matt") ➞ "Hello, Matt!"

// greeting("Helen") ➞ "Hello, Helen!"

// greeting("Mubashir") ➞ "Hello, my Love!"

//Original code:
// function greeting(name) {
//     return "Hello, " + name + "!";
//     if(name == "Mubashir") {
//       return "Hello, my Love!";
//     }
//   }

function greeting(name) {
    if (name = "Mubashir") {
        return "Hello, my Love!";
    } else {
        return "Hello, " + name + "!";
    }
}