//@ts-check

import { IsItemClassExcluded, IsItemClassIncluded, ItemWeight, LevelScaling, StatScaling, WeaponBaseDamage } from "./utils"
import { describe, expect, it } from "vitest"
import { armorDef, attributeDefinitions, fireGem_t2, masterItem_fireStaff, masterItem_heavyFeet, masterItem_sword, wepDef } from "./variables"


describe("#WeaponBaseDamage", () => {
    it("returns 187.8953441513981 using a 625GS Sword with 64 base damage", () => expect(WeaponBaseDamage(wepDef, 625)).toBe(187.8953441513981))

    it("returns an error 'BaseDamage is null'", () => expect(() => WeaponBaseDamage({ ...wepDef, BaseDamage: null }, 625)).toThrowError("BaseDamage is null"))
})

describe("#ItemWeight", () => {
    it("returns the item weight value of 2.3 ", () => expect(ItemWeight(armorDef)).toBe(2.3))
})

describe("#LevelScaling", () => {
    it("returns 1.475", () => expect(LevelScaling(60)).toBe(1.475))
})

describe("#StatScaling", () => {
    it("returns 4.782375", () => {
        const stats = {
            Strength: 500,
            Intelligence: 5,
            Dexterity: 5,
            Focus: 5,
            Constitution: 5
        }

        expect(StatScaling(stats, wepDef, attributeDefinitions)).toBe(4.782375)
    })
})

describe("#IsItemClassIncluded", () => {
    it("MasterItem OMEGA_HeavyFeet ItemClass, returns false", () => expect(IsItemClassIncluded(masterItem_heavyFeet, fireGem_t2)).toBe(false))

    it("MasterItem OMEGA_FireStaff ItemClass, returns true", () => expect(IsItemClassIncluded(masterItem_fireStaff, fireGem_t2)).toBe(true))

    it("MasterItem OMEGA_Sword ItemClass, returns true", () => expect(IsItemClassIncluded(masterItem_sword, fireGem_t2)).toBe(true))
})

describe("#IsItemClassExcluded", () => {
    it("MasterItem OMEGA_HeavyFeet ItemClass, returns false", () => expect(IsItemClassExcluded(masterItem_heavyFeet, fireGem_t2)).toBe(false))

    it("MasterItem OMEGA_FireStaff ItemClass, returns true", () => expect(IsItemClassExcluded(masterItem_fireStaff, fireGem_t2)).toBe(true))

    it("MasterItem OMEGA_Sword ItemClass, returns false", () => expect(IsItemClassExcluded(masterItem_sword, fireGem_t2)).toBe(false))
})