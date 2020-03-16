var spellchecker = function (wordlist, queries) {

    let set = new Set()
    set.add("a");
    set.add("e")
    set.add("i")
    set.add("o");
    set.add("u")
    set.add("A");
    set.add("E")
    set.add("I")
    set.add("O");
    set.add("U")

    let arr = [];

    for (let i = 0; i < queries.length; i++) {
        let result = "";
        for (let j = 0; j < wordlist; j++) {
            let hmm = checker(queries[i], wordlist[j])
            if (hmm) {
                result = hmm;
                break;
            }
        }
        arr.push(result)
    }

    function checker(word, dict) {
        if (word.length !== dict.length) return null;
        if (word.toUpperCase() === dict.toUpperCase()) return dict
        if (vowChecker(word, dict)) return dict
        return null
    }

    function vowChecker(w1, w2) {
        
        let arr1= w1.split("");
        let arr2= w2.split("");

        for(let i in arr1){
            if(set.has(arr1[i])){
                arr1[i]= "x"
            }
        }

        for (let i in arr2) {
            if (set.has(arr2[i])) {
                arr2[i] = "x"
            }
        }

        return arr1.join('') === arr2.join('')

    }



};