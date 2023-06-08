//@ts-check

import { ItemWeight } from "../utils.js";
import { MannequinSlot } from "./mannequinslot.mjs";

/**
* 
*
*/
export class MannequinArmorSlot extends MannequinSlot {
    /**
    * @type { import("../index.mjs").ArmorItemDefinitions }
    */
    #itemDefinition

    /**
    * @param {import("../index.mjs").ArmorSlotTypes} type
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
    * @param {import("../index.mjs").ArmorItemDefinitions} itemDefinition
    */
    setItemDefinition(itemDefinition) {
        this.#itemDefinition = itemDefinition;
        return this
    }

    get Weight() {
        return ItemWeight(this.#itemDefinition)
    }
}
