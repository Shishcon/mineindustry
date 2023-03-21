import { oreLib } from "./ores.js";
import { player } from "../main.js";

export class mineMenager {

    constructor(){
        this.baseMinePower = 1;
        this.oreDiv = document.getElementById("ore").getElementsByTagName("div");
        this.selectedOre = oreLib.copper;
        this.oreData = {
            maxHp : this.selectedOre.baseHp,
            hp : this.selectedOre.baseHp,
        };
        this.init();
    }
    
    init(){
        this.oreDiv[0].onclick = this.mine.bind(this);
        this.newOre();
        this.update();
        
    }

    newOre(){

        this.oreData.maxHp = this.selectedOre.baseHp;
        this.oreData.hp = this.selectedOre.baseHp;
        this.oreDiv[1].innerHTML = this.selectedOre.name;
    }

    mine(){
        this.oreData.hp -= this.baseMinePower;
        if(this.oreData.hp <= 0){
            this.newOre();
            player.money += this.selectedOre.baseValue;
            console.log(player.money);
        }
        this.update();
    }

    update(){
        this.oreDiv[3].style.width = (this.oreData.hp/this.oreData.maxHp)*100+"%";
        this.oreDiv[4].innerHTML = this.oreData.hp +" / "+this.oreData.maxHp+" HP";
    }
    


}