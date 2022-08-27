let aa = {
    age: 1,
    jobs: {
        first: 'FE'
    }
}
let b = {...aa}
aa.jobs.first = 'native'
console.log(b)
// 1 2 123 10 12 3 11 6 8 9 4