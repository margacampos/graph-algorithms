// Find shortest path
const graph = {
    i: [ 'k', 'j' ],
    j: [ 'i' , 'm'],
    k: [ 'i', 'l' ],
    m: [ 'l' , 'j'],
    l: [ 'k', 'm' ],
};

const findShortestPath = ( graph, start, end ) => {
    let queue = [[start, 0]];
    let visited = new Set();
    visited.add(start);

    while ( queue.length > 0 ){
        const [current, distance] = queue.shift();

        if ( current === end )return distance;

        for( node of graph[current] ){
            if(!visited.has(node)){
                visited.add(node);
                queue.push([node, distance + 1]);
            }
        }
    }

    return -1;
};

console.log(findShortestPath( graph, 'i', 'm'));