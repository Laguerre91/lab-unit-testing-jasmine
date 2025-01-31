// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 5", () => {
    describe("Function - sumArrayNumbers", () => {
        it("should be declared", () => {
            expect(sumArrayNumbers).toBeDefined()
        });

        it("should take one argument", () => {
            expect(sumArrayNumbers.length).toBe(1)
        })

        it("should return the sum of all numbers in the array", () => {
            expect(sumArrayNumbers([1, 2, 3])).toEqual(6);
            expect(sumArrayNumbers([2, 2, 2])).toEqual(6);
            expect(sumArrayNumbers([50, 50, 20])).toEqual(120);
        })
        it("should return undefined if the argument passed is not an array", () => {
            expect(sumArrayNumbers(123)).toEqual(undefined)
            expect(sumArrayNumbers("123")).toEqual(undefined)
            expect(sumArrayNumbers({})).toEqual(undefined)
        })

        it("should return 0 if the argument passed is an empty array", () => {
            expect(sumArrayNumbers([])).toBe(0)
        })
    })
})
