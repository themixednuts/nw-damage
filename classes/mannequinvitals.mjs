
/**
 * @typedef {import("@mixednuts/types/datasheets").VitalsData} VitalsData
 */
export class MannequinVitals {
    /** @type {VitalsData} */
    #data

    #level = 60

    /** @type {number} */
    #hp

    /** @type {number} */
    #mana

    /** @type {number} */
    #stamina


    /** @param {VitalsData} vitals */
    set(vitals) {
        this.#data = structuredClone(vitals)
        this.#hp = this.#data.HealthInitial
        this.#mana = this.#data.ManaInitial
        this.#stamina = this.#data.StaminaInitial

        return this
    }

    get() {
        return this.#data
    }


}