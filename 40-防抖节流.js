function debounce(fn,wait){
    var timer=null;
    return function(){
        var that=this;
        var context=arguments;
        clearTimeout(timer);
        timer=setTimeout(()=>{
            fn.apply(that,context);
        },wait);
    }
}

function throttle(fn,wait){
    var timer=null;
    return function(){
        var that=this;
        var context=arguments;
        if(timer)return;
        timer=setTimeout(()=>{
            fn.apply(that,context);
            clearTimeout(timer);
            timer=null;
        },wait);
    }
}