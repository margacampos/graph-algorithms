const map = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
]
const islandCount = ( map ) => {
    // Go through map and explore when on an island block that has not being visited yet.
    const visited = new Set();
    let counter = 0;
    for ( let row = 0; row < map.length; row++ ){
        for ( let column = 0; column < map[row].length; column++ ){
            if ( map[row][column] === 'L' && !visited.has(`${row}, ${column}`) ){
                visited.add(`${row}, ${column}`);
                console.log(`${row}, ${column}`)
                explore(row, column, map, visited);
                counter++;
            };
        }
    }
    return counter;
};

const explore = (row, column, map, visited) => {
    // Explore the island and mark blocks as visited.
    const directions = getDirections(row, column);
    for( dir of directions ){
        const [dirRow, dirColumn] = dir;
        if (map[dirRow][dirColumn]==='L'){
            if(!visited.has(`${dirRow}, ${dirColumn}`)){
                visited.add(`${dirRow}, ${dirColumn}`);
                explore(dirRow, dirColumn, map, visited);
            };
        };
    };
};

const getDirections = ( row, column ) => {
    let directions = [];
    if(row - 1 >= 0) directions.push([row - 1, column]);
    if(row + 1 < map.length) directions.push([row + 1, column]);
    if(column - 1 >= 0) directions.push([row, column - 1]);
    if(column + 1 < map[row].length) directions.push([row, column + 1]);
    return directions;
};

console.log(islandCount(map));