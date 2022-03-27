export class Warrior {
    
    hp:number
    speed: number
    name: string
    private readonly damage:number = 5
    private protectCount:number = 0

    getHp():number {
        return this.hp
    }

    setHp(hp:number):boolean{
        if(hp < 0){
            this.hp = 0
            return false
        }
        this.hp = hp
        return true
    }

    getSpeed():number {
        return this.speed
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

    attack(warrior: Warrior):void{
        warrior.setHp(warrior.getHp() - this.damage);
    }

    specialAttack(warrior: Warrior):void{
        const impact = Math.floor(this.getSpeed()/3)*this.damage; 
        warrior.setHp(warrior.getHp() - impact);
    }

    protect():boolean{
        this.protectCount += 1
        if (this.protectCount === 4) {
            this.protectCount = 0
            return false
        }
        return true
    }

}