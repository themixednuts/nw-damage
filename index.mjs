//@ts-check

import { MannequinWeaponSlot } from "./classes/mannequinarmorslot.mjs";
import { MannequinStats } from "./classes/mannequinstats.mjs";
import { MannequinArmorSlot } from "./classes/mannequinweaponslot.mjs";

/**
* @typedef {import("@mixednuts/types").ArmorItemDefinitions} ArmorItemDefinitions
* @typedef {import("@mixednuts/types").MasterItemDefinitions} MasterItemDefinitions
* @typedef {import("@mixednuts/types").PerkData} PerkData
* @typedef {import("@mixednuts/types").WeaponItemDefinitions} WeaponItemDefinitions
* @typedef {import("@mixednuts/types").VitalsData} VitalsData
* @typedef {import("@mixednuts/types/playerbaseattributes").PlayerBaseAttributesData} PlayerBaseAttributesData
* @typedef {import("@mixednuts/types").DamageTypeData} DamageTypeData
* @typedef {"head" | "chest" | "hands" | "legs" | "feet" | "ring" | "earring" | "trinket" } ArmorSlotTypes
* @typedef {"mainhand" | "offhand" | "shield" | "heartrune"} WeaponSlotTypes
* @typedef { ArmorSlotTypes | WeaponSlotTypes} SlotTypes
*/

export default class Mannequin {
  /** @type {"player" | "target"} */
  #type
  /** @type {VitalsData | undefined} */
  #vitals
  /** @type {{[key in ArmorSlotTypes]: MannequinArmorSlot} & {[key in WeaponSlotTypes]: MannequinWeaponSlot}} */
  #equipment = {
    head: new MannequinArmorSlot("head"),
    chest: new MannequinArmorSlot("chest"),
    hands: new MannequinArmorSlot("hands"),
    legs: new MannequinArmorSlot("legs"),
    feet: new MannequinArmorSlot("feet"),
    ring: new MannequinArmorSlot("ring"),
    earring: new MannequinArmorSlot("earring"),
    trinket: new MannequinArmorSlot("trinket"),
    mainhand: new MannequinWeaponSlot("mainhand"),
    offhand: new MannequinWeaponSlot("offhand"),
    shield: new MannequinWeaponSlot("shield"),
    heartrune: new MannequinWeaponSlot("heartrune"),
  };

  /** @type {MannequinStats} */
  #stats = new MannequinStats();

  /** @param {"player" | "target"} type */
  constructor(type) {
    this.#type = type === "player" || type === "target" ? type : "player";
  }

  /** @param {VitalsData} vitals */
  setVitals(vitals) {
    this.#vitals = structuredClone(vitals);
    return this
  }

  get Vitals() {
    if (!this.#vitals) {
      throw new Error(`No VitalsData set for ${this.#type}`)
    }
    return this.#vitals;
  }

  get Equipment() {
    return this.#equipment;
  }

  get Stats() {
    return this.#stats
  }
}

const player = new Mannequin("player")

console.log(player.Equipment.head)
