import { number } from "yargs"
import { Warrior } from "../src/Warrior"

describe('Create Warrior', ()=>{
    //Verification test on Warrior's hp property.
    it('can receive hp > 0', ()=>{
        expect(new Warrior().setHp(10)).toBe(true)
    }) 
    it('can\'t receive hp < 0', ()=>{
        expect(new Warrior().setHp(-1)).toBe(false)
    })
    it('can\'t receive hp == 0', ()=>{
        expect(new Warrior().setHp(0)).toBe(false)
    })

    //Verification test on Warrior's speed property.
    it('can have a speed > 0', ()=>{
        expect(new Warrior().setSpeed(10)).toBe(true)
    }) 
    it('can\'t have a speed < 0', ()=>{
        expect(new Warrior().setSpeed(-1)).toBe(false)
    })
    it('can\'t have a speed == 0', ()=>{
        expect(new Warrior().setSpeed(0)).toBe(false)
    })
    
    //Verification test on Warrior's name property.
    it('can receive name', ()=>{
        expect(new Warrior().setName('toto')).toBe('toto')
    })



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