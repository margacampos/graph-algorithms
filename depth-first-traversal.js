const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

let stack = ['a'];
// Iterative:
const depthFirstTraversal = ( graph, start ) => {
    let stack = [start];
    while(stack.length>0){
        let current = stack.shift();
        console.log(current);
        for( i of graph[current] ){
            stack.unshift(i);
        }
    }
};

depthFirstTraversal( graph, 'a' );

// Recursive: 
const depthFirstTraversalRec = ( graph, start ) => {
    console.log(start);
    for( let neighbor of graph[start] ){
        depthFirstTraversalRec(graph, neighbor);
    }
};

depthFirstTraversalRec( graph, 'a' );
