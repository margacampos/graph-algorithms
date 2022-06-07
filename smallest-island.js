const map = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];

const findSmallest = ( map ) => {
    let smallSize = map.length;
    const visited = new Set();

    for( let row = 0; row < map.length; row++ ){
        for( let column = 0; column < map[0].length; column++ ){
            const size = explore( row, column, map, visited);
            if(size !== 0 && smallSize > size)smallSize = size;
        }
    }
    return smallSize;
};

const explore = ( row, column, map, visited ) => {

    const rowInBounds = (0 <= row && row < map.length);
    const columnInBounds = (0 <= column && column < map[0].length);
    if( !rowInBounds || !columnInBounds ) return 0;

    if( map[row][column] === "W" )return 0;
    
    let pos = `${row},${column}`;
    if( visited.has(pos))return 0;
    visited.add(pos);

    let size = (explore( row + 1, column, map, visited ) 
                + explore( row - 1, column, map, visited ) 
                + explore( row, column + 1, map, visited ) 
                + explore( row, column - 1, map, visited ));
    return size+1;
};

console.log(findSmallest(map));