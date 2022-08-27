var longestPalindrome = function(s) {
    var map={};
    var max=0;
    for(let i=0;i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]]=1;
        }else{
            map[s[i]]=0;
            max+=2;
        }
    }
    for(let i in map){
        if(map[i]==1){
        max+=1;
        return max;
    }
    }
    return max;

};