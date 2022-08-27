function solution(A, X, Y) {
    var len=A.length;
    var cur = 0;
    var min = Infinity;
    if(X*Y>len){
        for(let i=0;i<len;i+=Y){
            cur+=A[i];
        }
        return cur;
    }
    for (let i = 0; i <= len - X * Y; i++) {
        cur = 0;
        for (let j = 0; j < X; j++) {
            cur += A[i + j * Y];
        }
        min = Math.min(min, cur);
    }
    return min
}
console.log(solution([4, 2, 3, 7], 2, 2))
console.log(solution([10, 3, 4, 7], 2, 3))
console.log(solution([4, 2, 5, 4, 3, 5, 1, 4, 2, 7],3, 2))