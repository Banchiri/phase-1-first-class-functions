function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    function namedFunction(){
        //the named function.
    }
    return namedFunction;
}
function returnsAnAnonymousFunction(){
    return function(){

    }
}