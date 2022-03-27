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
    it('can receive hp == 0', ()=>{
        expect(new Warrior().setHp(0)).toBe(true)
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
        const spiderman = new Warrior();
        const batman = new Warrior();

        spiderman.setHp(100);
        spiderman.setName("SPiderman");
        spiderman.setSpeed(20);

        batman.setHp(100);
        batman.setName("Batman");
        batman.setSpeed(15);

        spiderman.attack(batman);
        
        expect(batman.getHp()).toEqual(95);
    })

    it('can die', ()=>{
        const spiderman = new Warrior();
        const batman = new Warrior();

        spiderman.setHp(100);
        spiderman.setName("SPiderman");
        spiderman.setSpeed(20);

        batman.setHp(103);
        batman.setName("Batman");
        batman.setSpeed(15);

        while (batman.getHp() > 0) {
            
            spiderman.attack(batman);
        }
        
        expect(batman.getHp()).toEqual(0);
    })

    it('Can attack with Speed', ()=>{
        const spiderman = new Warrior();
        const batman = new Warrior();

        spiderman.setHp(100);
        spiderman.setName("SPiderman");
        spiderman.setSpeed(20);

        batman.setHp(103);
        batman.setName("Batman");
        batman.setSpeed(15);

        batman.specialAttack(spiderman);
        
        expect(spiderman.getHp()).toEqual(75);
    })

    it('can protect', ()=>{
        const spiderman = new Warrior();
        const batman = new Warrior();

        spiderman.setHp(100);
        spiderman.setName("SPiderman");
        spiderman.setSpeed(20);

        batman.setHp(103);
        batman.setName("Batman");
        batman.setSpeed(15);

        if (!spiderman.protect()) 
            batman.attack(spiderman);

        expect(spiderman.getHp()).toEqual(100)
    })

    it('can\'t protect', ()=>{
        const spiderman = new Warrior();
        const batman = new Warrior();

        spiderman.setHp(100);
        spiderman.setName("SPiderman");
        spiderman.setSpeed(20);

        batman.setHp(103);
        batman.setName("Batman");
        batman.setSpeed(15);

        if (spiderman.protect()) 
            batman.attack(spiderman);

        expect(spiderman.getHp()).toEqual(95)
    })

})
