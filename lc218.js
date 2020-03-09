var getSkyline = function (buildings) {
    

    let gridLength= buildings[buildings.length-1][1]

    let grid = new Array(gridLength+2)
    for(let i =0; i<grid.length; i++){
        grid[i]=0;
    }
    for(let i = 0; i<buildings.length; i++){
        let building = buildings[i];
        paintBuilding(building,grid)

    }
    let result=[]
    
    for(let i = 0; i<grid.length; i++){
        if(grid[i]<grid[i+1]){
            result.push([i+1, grid[i+1]])
        }

        if(grid[i]>grid[i+1]){
            result.push([i, grid[i+1]])
        }

    }
    console.log(result)

    return result;

};

function paintBuilding(building, grid){

    let beginning = building[0];
    let end = building[1];
    let height = building[2];

    for(let i = beginning; i<=end; i++){
        grid[i] = height > grid[i] ? height : grid[i]
    }

}




getSkyline([[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]] )