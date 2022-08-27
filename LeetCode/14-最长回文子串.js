var longestPalindrome = function(s) {
    var max='';
    for(let i=0;i<s.length;i++){
        helper(s,i,i);
        helper(s,i,i+1);
    }
    function helper(s,l,r){
        while(l>=0&&r<s.length&&s[l]==s[r]){
            l--;
            r++;
        }
        if(r-l-2>max.length){
            max=s.slice(l+1,r);
        }
    }
};
()=>{return {};}