export class Warrior {
    hp:number
    speed: number
    name: string
    private readonly damage:number = 5

    getHp():number {
        return this.hp
    }

    setHp(hp:number):boolean{
        if(hp <= 0)
            return false
        this.hp = hp
        return true
    }

    getSpeed():number {
        return this.hp
    }

    setSpeed(speed:number):boolean{
        if(speed <= 0)
            return false
        this.speed = speed
        return true
    }

    getName():string {
        return this.name
    }

    setName(name:string):string{
        this.name = name
        return this.name
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