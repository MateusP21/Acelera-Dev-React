'use strict'

const fibonacci = () => {
    const limit = 350;
    const fibonacciSequence = [0,1]
    for(let i = 2; i <=limit; i++) {
            fibonacciSequence.push(fibonacciSequence[ i - 2] + fibonacciSequence[ i - 1])
            if(fibonacciSequence[i] > limit) break;
    }

   return fibonacciSequence
}

const isFibonnaci = (num) => fibonacci().includes(num)


module.exports = {
    fibonacci,
    isFibonnaci
}

