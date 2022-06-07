const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

let stack = ['a'];

const depthFirstTraversal = ( graph, stack ) => {
    if(stack.length===0)return console.log("done");
    let start = stack.shift();
    console.log(start);
    for( let i = 0; i < graph[start].length; i++ ){
        stack.unshift(graph[start][i]);
    }
    return depthFirstTraversal(graph, stack);
};

depthFirstTraversal( graph, stack );