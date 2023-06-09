//@ts-check

export class MannequinSlot {
  /**
  * @type {import("@mixednuts/types").MasterItemDefinitions | undefined}
  */
  #masterDefinition
  /**
  * @type {import("../index.js").SlotTypes}
  */
  #type

  #gearscore = 625;

  /**
  * @type {import("../index.js").PerkData[]}
  */
  #perks = []

  /**
  * @param {import("../index.js").SlotTypes} type
  */
  constructor(type) {
    this.#type = type
  }

  /** @param {import("../index.js").MasterItemDefinitions} masterDefiniton */
  setMasterDefinition(masterDefiniton) {
    this.#masterDefinition = masterDefiniton
    return this
  }

  get MasterDefinition() {
    if (!this.#masterDefinition) {
      throw new Error(`No Master Definition set for ${this.Type}`)
    }
    return this.#masterDefinition;
  }

  get Type() {
    return this.#type;
  }

  get GearScore() {
    return this.#gearscore;
  }

  /**
  * @param {number} gearscore
  */
  setGearScore(gearscore) {
    this.#gearscore = gearscore;
    return this
  }

  get Perks() {
    return this.#perks;
  }


  /**
  * @param {import("../index.js").PerkData} perk
  * @param {number} index
  */
  setPerk(perk, index) {
    this.#perks[index] = perk;
    return this
  }

  EquippedAbilities() {

    const abilities = this.Perks.map(perk => perk.EquipAbility)

    /**
     * Contains an array of AbilityIDs and the gearscore of the item
     * @type {Map<string[], number>}
     */
    const map = new Map()
    map.set(abilities, this.GearScore)
    return map
  }
}
