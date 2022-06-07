const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
]

// build graph from edges 

const buildGraph = (edges) => {
    let graph = {};
    for ( let edge of edges ){
        let [a, b] = edge;
        if(!(a in graph))graph[a] = [];
        if(!(b in graph))graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
};

console.log(buildGraph(edges));

// Has path using depth traversal

const depthHasPath = ( graph, start, end, path ) => {
    if ( start === end ) return true;
    if ( path.has(start) ) return false;
    path.add(start);

    for ( node of graph[start] ){
        if( depthHasPath( graph, node, end, path ) )return true;
    }

    return false;
};

console.log(depthHasPath(buildGraph(edges), 'i', 'k', new Set() ));