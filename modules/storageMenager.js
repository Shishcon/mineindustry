import { player, storageMgr } from "../main.js";
import { oreLib } from "./ores.js";

export class storageMenager {

    constructor(){
        this.copper = 0;
        this.iron = 0;
        this.gold = 0;
        document.getElementById("sellcopper").onclick = () => {storageMgr.sell("copper", 1)};
    }
    

    add(ore, amount) {
        this[ore] += amount;


        console.log("Added: "+ore+" x"+amount);
        console.log(ore+": "+this[ore]+"x");
    }

    sell(ore, amount) {
        if (this[ore] >= amount) {
            player.addCash(oreLib[ore].baseValue * amount);
            this[ore] -= amount;
            /*
            switch(ore) {
                case "copper":
                    storage.gold += amount * 1;
                    break;
                    case "iron":
                        storage.gold += amount * 2;
                        break;
            }*/

            console.log("Sold: "+ore+" x"+amount);
            console.log(ore+": "+this[ore]+"x");
        }
    
            
        //this[ore] >= amount ? this[ore] -= amount : console.log("Not enough " + ore + " to sell!");
    }
}

