class ore{
    constructor(name,baseHp,baseValue){
        this.name = name;
        this.baseHp = baseHp;
        this.baseValue = baseValue;
        
    }
}

export var oreLib = {

    copper : new ore("Copper", 10, 1),

}