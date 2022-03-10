const Arithmetic = require('../src/Arithmetic')

describe("Arithmetic", () => {
    let arithmetic = new Arithmetic( 0.10 );
    let arithmetic2 = new Arithmetic( 0.50 );

    it("arithmetic getDiscount()", () => {
        expect( arithmetic.getDiscount( 100 ) ).toEqual( 90 )
        expect( arithmetic2.getDiscount( 100 ) ).toEqual( 50 )
    })

    it("returns 3 for add(1, 2)", () => {
      expect(  arithmetic.add(1,2)  ).toEqual( 3 )
    })

    it("returns pi for cicleArea(1)", () => {
        expect(  arithmetic.circleArea( 1 )  ).toEqual( Math.PI )
    })

    it("returns 7 for add(3, 4)", () => {
        expect(  arithmetic2.add(15, 4)  ).toEqual(  19  )
    })

    it("returns [] for fizzBuzz(1, 2)", () => {
        expect(  arithmetic2.fizzBuzz(1, 2)  ).toEqual(  [1, 2]  )
    })
})
