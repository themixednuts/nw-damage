import { ItemWeight } from "../utils.js";
import { MannequinSlot } from "./mannequinslot.js";

//@ts-check
export class MannequinWeaponSlot extends MannequinSlot {
    /**
     * @type { import("../index.js").WeaponItemDefinitions | undefined}
     */
    #itemDefinition

    /**
     * @param {import("../index.js").WeaponSlotTypes} type
     */
    constructor(type) {
        super(type)
    }

    get ItemDefinition() {
        if (!this.#itemDefinition) {
            throw new Error(`No ItemDefinition set for ${this.Type} slot`)
        }
        return this.#itemDefinition;
    }

    /**
    * @param {import("../index.js").WeaponItemDefinitions} itemDefinition
    */
    setItemDefinition(itemDefinition) {
        this.#itemDefinition = itemDefinition;
        return this
    }

    get Weight() {
        if(this.#itemDefinition) return ItemWeight(this.#itemDefinition)
    }
}
