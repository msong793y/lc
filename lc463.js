/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {

    let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    let param = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            param += helper([i, j], dirs)

        }
    }

    function helper(pos, dirs) {

        if (grid[pos[0]][pos[1]] === 0) { return 0 }


        let edge = 0;

        for (let i in dirs) {
            let dir = dirs[i]

            let ver = pos[0] + dir[0]

            let hor = pos[1] + dir[1]
           


            if (ver < 0 || hor < 0 || ver >= grid.length || hor >= grid[pos[0]].length) {
                edge++
            } else {
                let check = grid[ver][hor]
                if (!check) {
                    edge++
                }


            }


        }

        return edge


    }

    return param


}

let arr = [[0, 1]]
//solved

console.log(islandPerimeter(arr))