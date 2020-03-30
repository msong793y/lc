// Feel free to add new properties and methods to the class.
class MinMaxStack {
    constructor() {
        this.stack = []
    }
    peek() {
        return this.stack[this.stack.length - 1]
        // Write your code here.
    }

    pop() {
        return this.stack.pop()
        // Write your code here.
    }

    push(number) {
        this.stack.push(number);
        // Write your code here.
    }

    getMin() {
        let min = Infinity;
        let minIdx = -1;
        for (let i = 0; i < this.stack.length; i++) {
            if (this.stack[i] < min) {
                min = this.stack[i];
                minIdx = i;
            }
        }

        return this.stack[minIdx]

        // Write your code here.
    }

    getMax() {
        let max = -Infinity;
        let maxIdx = -1;
        for (let i = 0; i < this.stack.length; i++) {
            if (this.stack[i] > max) {
                max = this.stack[i];
                maxIdx = i;
            }
        }

        return this.stack[maxIdx]
    }
}


let stack = new MinMaxStack();

stack.push(2)
stack.push(7)
stack.push(9)

stack.pop()

console.log(stack.stack)