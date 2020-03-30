function longestPeak(array) {

    let maxPeak = 0;
    let con = null;
    let prev = array[0];
    let peak = 1;
    let i = 1;

    while (i < array.length) {
      
        let curr = array[i]

        // console.log("i " + i)
        console.log("cur "+curr )
        console.log("peak "+ peak)
        // console.log("max " + maxPeak)
        // console.log(con)

        if (!con) {
            if (curr > prev) con = "asc"
        }


        if (con === "asc") {
            if (curr > prev) {
                peak++;
            }
            if (curr < prev) {
                con = "desc"
            }
            if (curr === prev) {
                peak = 1;
                con = null;
            }
        }

        if (con === "desc") {
        

            if (curr > prev) {
                peak = 2;
                con= "asc";
            } else if( curr == prev ){

            } else{
                peak++;
            }
            if (peak > maxPeak) {
                maxPeak = peak;
            }
           
        }

        prev = curr;
        i++;
    }

    return maxPeak
    // Write your code here.
}
let arr = [1, 1, 1, 2, 3, 10, 12, -3, -3, 2, 3, 45, 800, 99, 98, 0, -1, -1, 2, 3, 4, 5, 0, -1, -1]
console.log(longestPeak(arr))