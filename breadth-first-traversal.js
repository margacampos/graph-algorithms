const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

// Iterative:
const breadthFirstTraversal = ( graph, start ) => {
    let queue = [ start ];
    while ( queue.length > 0 ){
        const current = queue.shift();
        console.log(current);
        for ( node of graph[current] ){
            queue.push(node);
        }
    }
};

breadthFirstTraversal( graph, 'a' );

// ( Not complete - Does not print start ) Recursive:
const breadthFirstTraversalRec = ( graph, start ) => {
    for( neighbor of graph[start] ){
        console.log(neighbor);
    }
    for( neighbor of graph[start] ){
        breadthFirstTraversalRec( graph, neighbor );
    }
};

breadthFirstTraversalRec( graph, 'a' );
