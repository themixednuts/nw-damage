import { MannequinSlot } from "./mannequinslot.mjs";

//@ts-check
export class MannequinWeaponSlot extends MannequinSlot {
    /**
     * @type { import("../index.mjs").WeaponItemDefinitions}
     */
    #itemDefinition

    /**
     * @param {import("../index.mjs").WeaponSlotTypes} type
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
    * @param {import("../index.mjs").WeaponItemDefinitions} itemDefinition
    */
    setItemDefinition(itemDefinition) {
        this.#itemDefinition = itemDefinition;
        return this
    }
}
