

function knightMoves(start, end) {

    if (start[0] < 0 || start[0] >= 8 || start[1] < 0 || start[1] >= 8 ||
        end[0] < 0 || end[0] >= 8 || end[1] < 0 || end[1] >= 8) {
        throw new Error("Input is out of range");
    }

    let queue = [[start, [start]]];  // Queue stores [currentPosition, pathSoFar]
    let visited = new Set();         // Set to track visited positions

    while (queue.length > 0) {
        let [currentPos, path] = queue.shift();

        // If we reached the destination, return the path
        if (currentPos[0] === end[0] && currentPos[1] === end[1]) {
            console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
            return path;
        }

        visited.add(currentPos.toString());

        let validMoves = getValidMoves(currentPos);
        for (let move of validMoves) {
            if (!visited.has(move.toString())) {
                queue.push([move, [...path, move]]); // Append move with updated path
            }
        }
    }

    return null;

}


function getValidMoves(position) {
    const [x, y] = position;
    const moves = [
        [1, 2], [2, 1], [2, -1], [1, -2],
        [-1, -2], [-2, -1], [-2, 1], [-1, 2]
    ];

    // Filter only moves that is inside the board
    return moves.map(([dx, dy]) => [x + dx, y + dy])
        .filter(([newX, newY]) => newX >= 0 && newX < 8 && newY >= 0 && newY < 8);
}



console.log(knightMoves([4, 7], [1, 0]));