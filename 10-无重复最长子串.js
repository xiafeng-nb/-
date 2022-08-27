var lengthOfLongestSubstring = function(s) {
    var len=s.length;
    var map=new Map();
    var max=0;
    var left=0;
    for(let i=0;i<len;i++){
        if(map.has(s.charAt(i))){
            left=Math.max(left,map.get(s.charAt(i))+1);
        }
        map.set(s.charAt(i),i);
        max=Math.max(max,i-left+1);
    }
return max;
};