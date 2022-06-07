const graph = {
    i: [ 'j', 'k' ],
    j: [ 'i' ],
    k: [ 'i', 'm', 'l' ],
    m: [ 'k' ],
    l: [ 'k' ],
    o: [ 'n' ],
    n: [ 'o' ],
    p: [ 'a', 'c' ],
    a: [ 'p' ],
    b: [ 'c' ],
    c: [ 'p', 'b' ]
}

// Count number of connected components in a undirected graph.
const connectedCount = ( graph ) => {
    let counter = 0;
    const visited = new Set();
    for ( node in graph ){
        if(explore( graph, node, visited )) counter++;
    }
    return counter;
};

const explore = ( graph, node, visited ) => {
    if(visited.has(String(node)))return false;
    visited.add(String(node));
    for ( neighbor of graph[node] ){
        explore(graph, neighbor, visited);
    }

    return true;
};

console.log(connectedCount(graph));

// Return largest component

const largestComponent = () => {
    let biggestSize = 0;
    const visited = new Set();
    for ( node in graph ) {
        if( explore( graph, node, visited ) ){
            if(visited.size>biggestSize)biggestSize=visited.size;
            visited.clear();
        };
    }
    return biggestSize;
};

console.log(largestComponent(graph));