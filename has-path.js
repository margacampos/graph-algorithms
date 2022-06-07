// Find if there is a path from a node to another in a directed graph.

const graph = {
    a:['b', 'c'],
    b:['f'],
    c:[],
    d:[],
    e:['d'],
    f:['e', 'c']
};

// Breadth-first traversal

const breadthFindPath = ( graph, start, end ) => {
    for( neighbour of graph[start] ){
        if( end === neighbour )return true;
    }
    
    for( neighbour of graph[start] ){
        if(breadthFindPath( graph, neighbour, end ))return true;
    }

    return false;
    
};

// console.log(breadthFindPath( graph, 'a', 'b' ));

const depthFindPath = ( graph, start, end ) => {
    if( end === start )return true;
    for ( node of graph[start] ){
        if(depthFindPath( graph, node, end ))return true;
    }
    return false;
};

console.log(depthFindPath(graph, 'a', 'd'));