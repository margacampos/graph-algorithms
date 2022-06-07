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
            if ( explore( row, column, map, visited ) )counter++;
        }
    }

    return counter;
};

const explore = (row, column, map, visited) => {
    // Explore the island and mark blocks as visited.
    const rowInBounds = ( 0 <= row && row < map.length ); 
    if( !rowInBounds )return false;
    const columnInBounds = ( 0 <= column && column < map[row].length );
    if( !columnInBounds )return false;
    if( map[row][column] === 'W' )return false;
    if( visited.has(`${row}, ${column}`)) return false;
    
    visited.add(`${row}, ${column}`);

    explore(row - 1, column, map, visited);
    explore(row + 1, column, map, visited);
    explore(row, column-1, map, visited);
    explore(row, column+1, map, visited);

    return true;
};

console.log(islandCount(map));