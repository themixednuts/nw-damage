//@ts-check

import { ItemWeight } from "../utils.js";
import { MannequinSlot } from "./mannequinslot.js";

/**
* 
*
*/
export class MannequinArmorSlot extends MannequinSlot {
    /**
    * @type { import("../index.js").ArmorItemDefinitions | undefined }
    */
    #itemDefinition

    /**
    * @param {import("../index.js").ArmorSlotTypes} type
    */
    constructor(type) {
        super(type)
    }
    ItemDefinition() {
        if (!this.#itemDefinition) {
            throw new Error(`No ItemDefinition set for ${this.Type} slot`)
        }
        return this.#itemDefinition;
    }

    /**
    * @param {import("../index.js").ArmorItemDefinitions} itemDefinition
    */
    setItemDefinition(itemDefinition) {
        this.#itemDefinition = itemDefinition;
        return this
    }

    get Weight() {
        if(this.#itemDefinition) return ItemWeight(this.#itemDefinition)
    }
}
