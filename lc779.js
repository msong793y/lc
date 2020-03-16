var kthGrammar = function (N, K) {

    let memo = {};
    memo[1] = "0"

    function helper(n, memo) {
        if (n in memo) return memo[n]

        let prev = helper(n - 1, memo)

        let str = ""

        for (let i = 0; i < prev.length; i++) {
            if (prev[i] === "0") {
                str += "01"
            } else if (prev[i] === "1") {
                str += "10"
            }
        }
        memo[n] = str
        return str
    }
    let row = new String()
    row = helper(N, memo).split("")

    console.log(memo)
    return row[K - 1]

};




console.log(kthGrammar(30,
434991989))