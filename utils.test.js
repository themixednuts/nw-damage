//@ts-check

import { EquipLoadBaseDamage, IsItemClassExcluded, IsItemClassIncluded, ItemWeight, LevelScaling, StatScaling, WeaponBaseDamage, WeaponDamage } from "./utils"
import { describe, expect, it } from "vitest"
import { armorDef, attributeDefinitions, fireGem_t2, masterItem_fireStaff, masterItem_heavyFeet, masterItem_sword, player_Encumbrance, wepDef } from "./variables"


describe("#WeaponBaseDamage", () => {
    it("625GS Sword with 64 base damage returns 187.8953441513981", () => expect(WeaponBaseDamage(wepDef, 625)).toBe(187.8953441513981))

    it("returns an error 'BaseDamage is null'", () => expect(() => WeaponBaseDamage({ ...wepDef, BaseDamage: null }, 625)).toThrowError("BaseDamage is null"))
})

describe("#ItemWeight", () => {
    it("ItemDefinition WeightOverride 23.25, returns the item weight value of 2.3 ", () => expect(ItemWeight(armorDef)).toBe(2.3))
})

describe("#LevelScaling", () => {
    it("Level 60 returns 1.475", () => expect(LevelScaling(60)).toBe(1.475))
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

        expect(StatScaling("Strength", stats.Strength, wepDef, attributeDefinitions)).toBe(4.782375)
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

describe('#EquipLoadBaseDamage', () => {
    const light = 12
    const med = 17
    const heavy = 30

    it("returns 20", () => expect(EquipLoadBaseDamage(player_Encumbrance, light)).toBe(.2))
    it("returns 10", () => expect(EquipLoadBaseDamage(player_Encumbrance, med)).toBe(.1))
    it("returns 0", () => expect(EquipLoadBaseDamage(player_Encumbrance, heavy)).toBe(0))
})

describe('#WeaponDamage', () => {
    it('', () => {
        const statScaling = 4.782375
        const levelScaling = 1.475
        const weaponBaseDamage = 187.8953441513981

        expect(WeaponDamage(weaponBaseDamage, statScaling, levelScaling)).toBe(1363.6269732607527)
    })
})