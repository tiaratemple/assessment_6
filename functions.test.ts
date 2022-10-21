const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    const mockArray = [
        {
            id: 0,
            name: 'The Hammer', 
            imgAddress: 'https://robohash.org/hammer',
            health: 100, 
            attacks: [
                {
                    id: 0, 
                    damage: 25
                }, 
                {
                    id: 1, 
                    damage: 30
                }
            ]
        }, 
        {
            id: 1,
            name: 'Crowbar', 
            imgAddress: 'https://robohash.org/crowbar',
            health: 75, 
            attacks: [
                {
                    id: 0, 
                    damage: 15
                }, 
                {
                    id: 1, 
                    damage: 40
                }
            ]
        }, 
    ]
    test("shuffleArray to be an Array", () => {
        expect(shuffleArray(mockArray)).toEqual(expect.arrayContaining(mockArray))
    })
    
    test('Does the function return the right length of array', () => {
        expect(shuffleArray(mockArray)).toHaveLength(2)
    })
})