

class FizzBuzz {

    fizzBuzz( from, to ) {
        let result = []

        for ( let i = from; i <= to; i ++ ) {
    
            let fizz = i % 3 === 0
            let buzz = i % 5 === 0
            let fizzAndBuzz = fizz && buzz
    
            if ( fizzAndBuzz ) {
                result.push( 'FizzBuzz' )
            } else if ( fizz ) {
                result.push( 'Fizz' )
            } else if ( buzz ) {
                result.push( 'Buzz' )
            } else {
                result.push( i )
            }
        
        }
    
        return result
    }
}

module.exports = FizzBuzz

