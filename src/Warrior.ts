export class Warrior {
    hp:number
    speed: number
    name: string
    damage:number

    getHp():number {
        return this.hp
    }

    setHp(hp:number){
        if(hp > 0){
            this.hp = hp
            return true
        }
        return true
    }

    getSpeed():number {
        return this.hp
    }

    setSpeed(speed:number){
        if(speed > 0){
            this.speed = speed
            return true
        }
        return false
    }

    getName():string {
        return this.name
    }

    setName(name:string):string{
        this.name = name
        return this.name
    }

    getDamage():number {
        return this.damage
    }

    setDamage(dmg:number):number{
        this.damage = dmg
        return this.damage
    }
}





// interface Warrior {
//     hp:number
//     speed: number
//     name: string

//     getHp():number
//     setHp(hp:number):void

//     getHp():number
//     setHp(hp:number):void
// }