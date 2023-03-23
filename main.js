//Imports
import {mineMenager} from "./modules/mineMenager.js";
import { storageMenager } from "./modules/storageMenager.js";

//Player stats
export var player = {
    money : 0,

    addCash : (x) => {
        player.money += x;
        console.log("Earned "+x+" $")
        player.update();
    },

    update : () => {
        document.getElementById("wallet").innerHTML = player.money.toFixed(2)+" $";
    }
}



export var storageMgr = new storageMenager();
var mineMgr = new mineMenager();
