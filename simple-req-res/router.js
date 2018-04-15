function route(handle, pathname, reps, postdata){
    console.log('this is a router for request ' + pathname);
    if(typeof handle[pathname] === 'function'){
        handle[pathname](reps, postdata);
    }else{
        console.log('no request for' + pathname);
    }
}

exports.route = route;