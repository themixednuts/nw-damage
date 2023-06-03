//@ts-check

import { MannequinStats } from "./classes/mannequinstats.mjs"

/**
* @typedef {import("@mixednuts/types").ArmorItemDefinitions} ArmorItemDefinitions
* @typedef {import("@mixednuts/types").MasterItemDefinitions} MasterItemDefinitions
* @typedef {import("@mixednuts/types").PerkData} PerkData
* @typedef {import("@mixednuts/types").WeaponItemDefinitions} WeaponItemDefinitions
* @typedef {import("@mixednuts/types").VitalsData} VitalsData
* @typedef {import("@mixednuts/types/playerbaseattributes").PlayerBaseAttributesData} PlayerBaseAttributesData
* @typedef {import("@mixednuts/types").DamageTypeData} DamageTypeData
* @typedef {import("@mixednuts/types").EncumbranceData} EncumbranceData
* @typedef {import("@mixednuts/types").AffixStatData} AffixStatData
* @typedef {import("@mixednuts/types").AbilityData} AbilityData
* @typedef {import("@mixednuts/types").DamageData} DamageData
* @typedef {import("@mixednuts/types").ConsumableItemDefinitions} ConsumableItemDefinitions
* @typedef {import("@mixednuts/types").StatusEffectData} StatusEffectData
* @typedef {import("@mixednuts/types").StatusEffectCategoryData} StatusEffectCategoryData
* @typedef {import("@mixednuts/types").AttributeDefinition} AttributeDefinition
* @typedef {"head" | "chest" | "hands" | "legs" | "feet" | "ring" | "earring" | "trinket" } ArmorSlotTypes
* @typedef {"mainhand" | "offhand" | "shield" | "heartrune"} WeaponSlotTypes
* @typedef { ArmorSlotTypes | WeaponSlotTypes} SlotTypes
* @typedef {import("./classes/mannequinstats.mjs").StatsType} StatsType
*/

/**
* Takes a weapon and it's gearscore to return the gearscore scaled BaseDamage.
* @param {WeaponItemDefinitions} weaponDefinition
* @param {number} gearscore
* @param {PlayerBaseAttributesData} [playerBaseAttributes]
*/
export function WeaponBaseDamage(weaponDefinition, gearscore, playerBaseAttributes) {
    const baseDamageCompund =
        playerBaseAttributes?.['player attribute data']['base damage compound increase'] || 0.0112
    const compoundDiminishingMulti =
        playerBaseAttributes?.['player attribute data'][
        'compound increase diminishing multiplier'
        ] || 0.6667

    const baseDamage = weaponDefinition.BaseDamage

    if (baseDamage === null) {
        throw new Error("BaseDamage is null")
    }

    const base =
        (1 + baseDamageCompund) ** Math.floor((Math.min(500, Math.max(gearscore, 100)) - 100) / 5)
    const diminished =
        (1 + baseDamageCompund * compoundDiminishingMulti) ** Math.floor((Math.max(gearscore, 500) - 500) / 5)

    const result = baseDamage * base * diminished

    return result
}

/**
*
* @param {ArmorItemDefinitions} definition
*
*/
export function ItemWeight(definition) {
    return Math.floor(Number(definition.WeightOverride)) / 10
}

/**
*
* @param {DamageTypeData} damageTypeData
* @param {number} weaponGearscore
* @param {VitalsData} vitalsData
* @param {PlayerBaseAttributesData} [playerBaseAttributes]
* @param {number} [rating]
* @param {number} [armorBonus]
*/
export function Mitigation(damageTypeData, weaponGearscore, vitalsData, playerBaseAttributes, rating, armorBonus) {
    const category = damageTypeData.Category
    const vitalsMit = (category === 'Physical' ? vitalsData.PhysicalMitigation : category === 'Elemental' ? vitalsData.ElementalMitigation : null) ?? 0
    const vitalsGs = vitalsData.GearScoreOverride
    const playerAttrArmorExponent = playerBaseAttributes?.['player attribute data']['armor mitigation exponent'] ?? 1.2

    const convertToRating = (Number(vitalsGs) ** playerAttrArmorExponent * vitalsMit) / (1 - vitalsMit)
    const armorRating = rating ?? convertToRating

    const mit = 1 - 1 / (1 + Math.floor(armorRating * (1 + (armorBonus ?? 0))) / Math.max(weaponGearscore, 100) ** playerAttrArmorExponent)

    return mit
}

/**
*
* @param {number} weaponBaseDamage
* @param {number} statScaling
* @param {number} levelScaling
*/
export function WeaponDamage(weaponBaseDamage, statScaling, levelScaling) {
    return weaponBaseDamage * (1 + levelScaling + statScaling)
}

/**
 * 
 * @param {StatsType} stats 
 * @param {WeaponItemDefinitions} weaponItemDefinition 
 * @param {Map<number, AttributeDefinition>} attributeDefinition
 */
export function StatScaling(stats, weaponItemDefinition, attributeDefinition) {
    let sum = 0
    for (const stat of Object.keys(stats)) {
        if (stat === "Constitution") {
            continue
        }
        const attributeData = attributeDefinition.get(stats[stat])
        if (!attributeData) {
            throw new Error("No AttributeDefinition found")
        }
        const modifierValueSum = attributeData.ModifierValueSum
        if (modifierValueSum === null || modifierValueSum === undefined) {
            throw new Error("No ModifierValueSum found in the AttributeDefinition object")
        }
        sum += weaponItemDefinition[`Scaling${stat}`] * modifierValueSum
    }

    return sum
}

/**
 * Takes the level, substracts 1 and then multiplies it with the "level damage multiplier"
 * @param {number} level 
 * @param {PlayerBaseAttributesData} [playerBaseAttributesData] 
 */
export function LevelScaling(level, playerBaseAttributesData) {
    const levelMulti = playerBaseAttributesData?.['player attribute data']['level damage multiplier'] ?? 0.025

    return (level - 1) * levelMulti
}

/**
 * 
 * @param {EncumbranceData} encumbranceData 
 * @param {number} load 
 * @returns 
 */
export function EquipLoadBaseDamage(encumbranceData, load) {

    if (load < 13) {
        return encumbranceData.EquipLoadDamageMultFast
    }
    if (load >= 13 && load < 23) {
        return encumbranceData.EquipLoadDamageMultNormal
    }
    if (load >= 23) {
        return encumbranceData.EquipLoadDamageMultSlow
    }
}

/**
 * 
 * @param {MasterItemDefinitions} masterItemDefinition 
 * @param {PerkData} itemPerk 
 */
export function IsItemClassIncluded(masterItemDefinition, itemPerk) {
    const masterItemClass = MasterItemClassSplit(masterItemDefinition)
    return itemPerk.ItemClass.split(',').some(item => masterItemClass.includes(item))
}


/**
 * 
 * @param {MasterItemDefinitions} masterItemDefinition 
 * @param {PerkData} itemPerk 
 */
export function IsItemClassExclude(masterItemDefinition, itemPerk) {
    const masterItemClass = MasterItemClassSplit(masterItemDefinition)
    return itemPerk.ExcludeItemClass.split(',').some(item => masterItemClass.includes(item))
}

/**
 * 
 * @param {MasterItemDefinitions} masterItemDefinition 
 */
export function MasterItemClassSplit(masterItemDefinition) {
    return masterItemDefinition.ItemClass.split(',').map(item => item.trim())
}

/**
 * 
 * @param {number} gearscore 
 * @param {ConsumableItemDefinitions} data 
 * @param {PerkData} itemPerk 
 * @param {MasterItemDefinitions} itemDefinition 
 * @returns 
 */
export function ScaleProperties(gearscore, data, itemPerk, itemDefinition) {
    const isItemClassIncluded = IsItemClassIncluded(itemDefinition, itemPerk)
    const isItemClassExcluded = IsItemClassExclude(itemDefinition, itemPerk)

    if (!isItemClassIncluded) {
        throw new Error("MasterItemDefinition's ItemClass doesn't contain the required ItemClass that the PerkData is looking for.")
    }
    if (isItemClassExcluded) {
        throw new Error("MasterItemDefinition's ItemClass contains an ExcludedItemClass that the PerkData doesn't want.")
    }

    const scale = Number(itemPerk.ScalingPerGearScore) || 1
    const result = Object.fromEntries(Object.entries(data).map(([key, value]) => {
        if (!StatusEffectSummablePropterties.includes(key) && !AbilityDataSummableProperties.includes(key) && !AffixStatSummableProperties.includes(key)) {
            return [key, value]
        }

        if (typeof value === 'string' && value.includes('=')) {
            const arr = value.split("=")
            arr[1] = String(Number(arr[1]) * (1 + scale * (gearscore - 100)))
            value = arr.join('=')

            return [key, value]
        }

        return [key, value * (1 + scale * (gearscore - 100))]
    }))

    return result
}

/**
 * 
 * @param {StatusEffectData} statusData 
 * @param {number} acc 
 * @param {StatusEffectCategoryData} [statusCategoryData]
 */
export function StatusEffectLimit(statusData, acc, statusCategoryData) {
    const isCapped = statusData.EffectCategories.split('+').map(item => item.trim()).some(item => statusCategoryData?.StatusEffectCategoryID === item)
    const limit = statusCategoryData?.ValueLimits.split(',').map(item => item.trim())


}

export function GetPropertySum() {

}

export function VitalsCategoryCheck() {

}

/**
 * 
 * @param {WeaponItemDefinitions} weaponDefinition 
 * @param {number} weaponDamage 
 * @param {DamageData} damageRow 
 * @param {AbilityData[]} activeAbilities 
 * @param {StatusEffectData[]} activeStatusEffects 
 * @param {AffixStatData[]} activeAffixes 
 * @param {VitalsData} attackerVitalsData 
 * @param {number} equipLoadBaseDamage 
 */
export function Damage(weaponDefinition, weaponDamage, damageRow, activeAbilities, activeStatusEffects, activeAffixes, attackerVitalsData, equipLoadBaseDamage) {
    const { CritDamageMultiplier } = weaponDefinition
    const { DmgCoef, DmgCoefHead, DmgCoefCrit, DamageType } = damageRow

    if (!DmgCoef) {
        throw new Error("DamageTable Row doesn't contain a valid DmgCoef value.")
    }
    const baseFormula = weaponDamage
        * DmgCoef
}
