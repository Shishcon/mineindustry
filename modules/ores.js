class ore{
    constructor(id, name,baseHp,baseValue){
        this.name = name;
        this.baseHp = baseHp;
        this.baseValue = baseValue;
        this.id = id;
        
    }
}

export var oreLib = {

    copper : new ore("copper", "Copper", 10, 1.25),

}