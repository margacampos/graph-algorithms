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
        if(!visited.has(node)){
            explore( graph, node, visited );
            counter++;
        }
    }
    return counter;
};

const explore = ( graph, node, visited ) => {
    if(visited.has(node))return;
    visited.add(node);
    for ( neighbor of graph[node] ){
        explore(graph, neighbor, visited);
    }
};

console.log(connectedCount(graph));