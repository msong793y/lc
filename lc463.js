var islandPerimeter = function (grid) {

    let dirs= [[-1,0],[1,0],[0,-1],[0,1]]
    let param = 0;

    for(let i in grid){
        for(let j in grid[i]){

            param+= helper([i,j], dirs)

        }    
    }

    function helper(pos, dirs){

        if(grid[pos[0]][pos[1]]===0){return 0}


        let edge = 0;
        
        for (let i in dirs){
            let dir =dirs[i]
            console.log(grid[pos[0] + dir[0]][pos[1] + dir[1]])
            let check = grid[pos[0]+dir[0]][pos[1]+dir[1]]
            if (!check){
                edge++
            }
        }

        return edge

        // console.log(vert)
        // console.log(hori)


        // if(vert-1<0 || grid[vert-1][hori]===0){
        //     edge++;
        // }
        // console.log(grid[vert][hori])

        // if (vert+1 >= grid.length || grid[vert+1][hori] === 0) {
        //     edge++;
        // }
        // if (hori - 1 < 0 || grid[vert][hori-1] === 0) {
        //     edge++;
        // }

        // if (hori + 1 >= grid[vert].length || grid[vert][hori+1] === 0) {
        //     edge++;
        // }

        return edge

    }

    return param


};

let arr = [[0, 1, 0, 0],
[1, 1, 1, 0],
[0, 1, 0, 0],
[1, 1, 0, 0]]

console.log(islandPerimeter(arr))