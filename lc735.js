var asteroidCollision = function (asteroids) {

    if (asteroids.length < 2) {
        return asteroids;
    }

    let stack = [];


    for (let i = 0; i < asteroids.length; i++) {
      let current  = asteroids[i];
        let roundSorted = false;

        while (roundSorted === false) {
             if(stack.length===0){
                // empty stack
                stack.push(current)
                roundSorted = true;
                console.log(current)
                console.log("hi")
             } else {
            
                let last = stack.pop();

                if(last<0){
                
                stack.push(last)
                stack.push(current);
                roundSorted = true;

                } else
                // last is right going

                    {
                        if(current > 0){
                            stack.push(last);
                            stack.push(current);
                            roundSorted = true;
                        } else{

                            let result = last+current;
                          
                            if( result > 0){
                                stack.push(last)
                                roundSorted= true;
                            } else if( result === 0) {
                                roundSorted = true;
                            } 

                            }

                        }
                 }
                

      }
        
        
    }

    return stack
};


let a = [5, 10, -5];
let b = [-2, -1, 1, 2]
let c = [10, 2, -5]
let d = [8,-8]
console.log(asteroidCollision(d))