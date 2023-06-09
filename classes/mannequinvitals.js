
/**
 * @typedef {import("@mixednuts/types").VitalsData} VitalsData
 */
export class MannequinVitals {
    /** @type {VitalsData | undefined} */
    #data

    #level = 60

    /** @type {number} */
    #hp = 0

    /** @type {number} */
    #mana = 0

    /** @type {number} */
    #stamina = 0


    /** @param {VitalsData} vitals */
    set(vitals) {
        this.#data = structuredClone(vitals)
        this.#hp = Number(this.#data.HealthInitial)
        this.#mana = this.#data.ManaInitial
        this.#stamina = this.#data.StaminaInitial

        return this
    }

    get() {
        return this.#data
    }


}