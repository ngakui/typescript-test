import { Warrior } from "../Warrior"

describe('Create Warrior', ()=>{
    it('can receive hp > 0', ()=>{
        expect(new Warrior().setHp(10)).toBe(true)
    })
    it('can receive speed > 0', ()=>{
        expect(new Warrior().setSpeed(5)).toBe(true)
    })

    it('can receive name', ()=>{
        expect(new Warrior().setName('toto')).toBe('toto')
    })

    // it('can receive damage', ()=>{
    //     expect(new Warrior().setDamage(5)).toBe(true)
    // })

})

describe('Warrior functions', ()=>{
    it('can attack', ()=>{

    })

})

// describe('Create DC Warrior', ()=>{
//     it('should have 200 hp', ()=>{
//         expect(new Dc().getHp()).toBe(200)
//     })

// })