//@ts-check

/**
 * @typedef {{Strength: number,Intelligence: number,Dexterity: number,Focus: number,Constitution: number}} StatsType
 */

export class MannequinStats {
    #str = 5
    #dex = 5
    #int = 5
    #foc = 5
    #con = 5

    get Strength() {
        return this.#str
    }
    get Dexterity() {
        return this.#str
    }
    get Intelligence() {
        return this.#str
    }
    get Focus() {
        return this.#str
    }
    get Constitution() {
        return this.#str
    }

    /**
     * @param {"str" | "dex" | "int" | "foc" | "con"} stat 
     * @param {number} value 
     * @example <caption>Example of setting a stat.</caption>
     * //sets "str" to 25, returns self
     * setStat("str", 25)
     */
    setStat(stat, value) {
        if (stat === "str") {
            this.#str = value
        }
        if (stat === "dex") {
            this.#dex = value
        }
        if (stat === "int") {
            this.#int = value
        }
        if (stat === "foc") {
            this.#foc = value
        }
        if (stat === "con") {
            this.#con = value
        }
        return this
    }

    toObject() {
        return {
            Strength: this.Strength,
            Intelligence: this.Intelligence,
            Dexterity: this.Dexterity,
            Focus: this.Focus,
            Constitution: this.Constitution
        }
    }
}
