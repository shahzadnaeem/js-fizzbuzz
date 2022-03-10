
class Arithmetic {
    constructor( discount ) {
        this.discount = discount
    }

    getDiscount( value ) {
        return ( 1.0 - this.discount ) * value
    }

    add( a, b ) {
        return a + b
    }

    subtract( a, b ) {
        return a - b
    }

    circleArea( radius ) {
        return Math.PI * radius * radius;
    }

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

module.exports = Arithmetic
