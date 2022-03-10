const FizzBuzz = require('../src/fizzbuzz-class.js')

describe("FizzBuzz Class", () => {
    let fizzBuzz = new FizzBuzz()

    it("returns [1, 2] for (1, 2)", () => {
        expect(  fizzBuzz.fizzBuzz(1, 2)  ).toEqual([1, 2])
    })
})
