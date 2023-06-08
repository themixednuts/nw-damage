//@ts-check

/**
* @author Mixed Nuts
*
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
* @typedef {import("@mixednuts/types").VitalsLevelData} VitalsLevelData
* @typedef {import("@mixednuts/types").AttributeDefinition} AttributeDefinition
* @typedef {import("@mixednuts/types").DamageTypeDatumCategory} DamageTypeDatumCategory
* @typedef {import("@mixednuts/types").ABSVitalsCategoryABSVitalsCategory} ABSVitalsCategoryABSVitalsCategory
* @typedef {import("@mixednuts/types").DMGVitalsCategoryDMGVitalsCategory} DMGVitalsCategoryDMGVitalsCategoryb
* @typedef {"head" | "chest" | "hands" | "legs" | "feet" | "ring" | "earring" | "trinket" } ArmorSlotTypes
* @typedef {"mainhand" | "offhand" | "shield" | "heartrune"} WeaponSlotTypes
* @typedef { ArmorSlotTypes | WeaponSlotTypes} SlotTypes
* @typedef {import("./classes/mannequinstats.mjs").StatsType} StatsType
* @typedef {"Strength" | "Dexterity" | "Intelligence" | "Focus" | "Constitution"} AttributeNames
* @typedef {{"AbilityDataSum": Record<keyof AbilityData, number>, "StatusAffixDataSum": Record<keyof StatusEffectData | keyof AffixStatData, number>}} PropertySumObject 
*/

/**
* @template T
* @typedef {Pick<T, {[K in keyof T]: T[K] extends (infer U) ? U extends number ? K : never : never}[keyof T]>} NumberKeysOnly
*/

/**
* Takes a WeaponItemDefinition and it's gearscore and returns the gearscore scaled BaseDamage.
* @param {WeaponItemDefinitions} weaponDefinition - The weapon defintion.
* @param {number} gearscore - The gearscore of the weapon.
* @param {PlayerBaseAttributesData} [playerBaseAttributes] - Optional, if not provided will use default values.
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
* Returns the weight of the item.
* @param {ArmorItemDefinitions | WeaponItemDefinitions} definition
*/
export function ItemWeight(definition) {
  return Math.floor(Number(definition.WeightOverride)) / 10
}

/**
 * Converts the VitalsData ArmorMitigation to ArmorRating.
 * @param {number} vitalsLevelGearscore 
 * @param {number} vitalsArmorMitigation 
 * @param {number} playerAttrArmorExponent 
 */
export function ArmorMitigationToArmorRating(vitalsLevelGearscore, vitalsArmorMitigation, playerAttrArmorExponent) {
  return (vitalsLevelGearscore ** playerAttrArmorExponent * vitalsArmorMitigation) / (1 - vitalsArmorMitigation)
}

/**
* Returns the mitigation value.
* @param {DamageTypeDatumCategory} damageTypeData - The DamageType category.
* @param {number} weaponGearscore - The gearscore of the weapon.
* @param {VitalsData} vitalsData - VitalsData
* @param {VitalsLevelData} vitalsLevelData - VitalsLevelData - Match the level of the vitals data.
* @param {PlayerBaseAttributesData} [playerBaseAttributes] - Optional, if not provided will use default values.
* @param {number} [rating] - Optional, if not provided will calculate from vitals data. Used to overwrite, for example, if you want to calculate mitigation for a player with a specific armor rating.
* @param {number} [armorBonus] - Optional, if not provided will use 0. This is the property ElementalArmor and PhysicalArmor on the StatusEffectData.
*/
export function Mitigation(damageTypeData, weaponGearscore, vitalsData, vitalsLevelData, playerBaseAttributes, rating, armorBonus) {
  const vitalsMit = (damageTypeData === 'Physical' ? vitalsData.PhysicalMitigation : damageTypeData === 'Elemental' ? vitalsData.ElementalMitigation : null) ?? 0
  const { GearScore } = vitalsLevelData
  const armorMitigationExponent = playerBaseAttributes?.['player attribute data']['armor mitigation exponent'] ?? 1.2
  const armorRating = rating ?? ArmorMitigationToArmorRating(GearScore, armorMitigationExponent, vitalsMit)
  const mit = 1 - 1 / (1 + Math.floor(armorRating * (1 + (armorBonus ?? 0))) / Math.max(weaponGearscore, 100) ** armorMitigationExponent)

  return mit
}

/**
* Returns the weapon damage.
* @param {number} weaponBaseDamage Gearscore scaled BaseDamage. Use WeaponBaseDamage() to get this value.
* @param {number} statScaling - The stat scaling value. Use StatScaling() to get this value.
* @param {number} levelScaling - The level scaling value. Use LevelScaling() to get this value.
*/
export function WeaponDamage(weaponBaseDamage, statScaling, levelScaling) {
  return weaponBaseDamage * (1 + levelScaling + statScaling)
}

/**
 * Returns the stat scaling value for the WepaonItemDefinition and AttributeName 
 * @param {AttributeNames} attributeName - Name of the attribute to get the scaling value for. ie. "Strength"
 * @param {WeaponItemDefinitions} weaponItemDefinition - The WeaponItemDefinition object 
 * @param {AttributeDefinition} attributeDefinitions - The AttributeDefinition object
 * 
 * @example 
 * const statScaling = StatScaling("Strength", weaponItemDefinition, attributeDefinitions)
 */
export function StatScaling(attributeName, weaponItemDefinition, attributeDefinitions) {
  const { ModifierValueSum } = attributeDefinitions
  if (ModifierValueSum === null || ModifierValueSum === undefined) {
    throw new Error("No ModifierValueSum found in the AttributeDefinition object")
  }
  const scaled = weaponItemDefinition[`Scaling${attributeName}`] * ModifierValueSum

  return scaled
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
 * Returns the BaseDamage multiplier given the equipload value. 
 * @param {EncumbranceData} encumbranceData Pass the Player Encumbrance 
 * @param {number} equipLoad 
 */
export function EquipLoadBaseDamage(encumbranceData, equipLoad) {
  if (equipLoad < 13) {
    return encumbranceData.EquipLoadDamageMultFast ?? 0
  }
  if (equipLoad >= 13 && equipLoad < 23) {
    return encumbranceData.EquipLoadDamageMultNormal ?? 0
  }
  if (equipLoad >= 23) {
    return encumbranceData.EquipLoadDamageMultSlow ?? 0
  }

  return 0
}

/**
 * Checks if the MasterItemDefinition's ItemClass is included in the PerkData's ItemClass.
 * @param {MasterItemDefinitions} masterItemDefinition 
 * @param {PerkData} itemPerk 
 */
export function IsItemClassIncluded(masterItemDefinition, itemPerk) {
  const masterItemClass = MasterItemClassSplit(masterItemDefinition)
  return itemPerk.ItemClass.split('+').some(item => masterItemClass.includes(item))
}


/**
 * Checks if the MasterItemDefinition's ItemClass is excluded in the PerkData's ItemClass.
 * @param {MasterItemDefinitions} masterItemDefinition 
 * @param {PerkData} itemPerk 
 */
export function IsItemClassExcluded(masterItemDefinition, itemPerk) {
  const masterItemClass = MasterItemClassSplit(masterItemDefinition)
  return itemPerk.ExcludeItemClass.split('+').some(item => masterItemClass.includes(item))
}

/**
 * Splits the MasterItemDefinition's ItemClass into an array. 
 * @param {MasterItemDefinitions} masterItemDefinition 
 */
export function MasterItemClassSplit(masterItemDefinition) {
  return masterItemDefinition.ItemClass.split('+').map(item => item.trim())
}

/**
 * Returns the scaled ABSVitalsCategory or DMGVitalsCategory value. Checks if the value includes a '=' and if it does, it will split the value into an array and check if the vitalsCategory includes the key. If it does, it will return the value multiplied by the scaling value.
 * If the value does not include a '=', it will return 0.
 * @param { ABSVitalsCategoryABSVitalsCategory | DMGVitalsCategoryDMGVitalsCategoryb } value
 * @param {VitalsData['VitalsCategories']} vitalsCategory
 * @param {number} scaling 
 */
export function ScaleVitalsCategoryProperty(value, vitalsCategory, scaling) {
  if (!value.includes('=')) {
    return 0
  }

  const checks = value.split('+').map(item => item.trim())
  let isMatch
  let sum = 0
  for (const check of checks) {
    if (check.includes('=')) {
      const [key, val] = check.split('=')
      if (vitalsCategory.includes(key)) {
        isMatch = true
        sum += Number(val) * scaling
      }
    } else {
      isMatch = false
    }
  }

  if (isMatch) {
    return sum
  } else {
    return 0
  }
}

/**
 * TODO: Finish this function 
 * @param {StatusEffectData} statusData 
 * @param {StatusEffectCategoryData} [statusCategoryData]
 */
export function StatusEffectLimit(statusData, statusCategoryData) {
  const isCapped = statusData.EffectCategories.split('+').map(item => item.trim()).some(item => statusCategoryData?.StatusEffectCategoryID === item)
  const limit = statusCategoryData?.ValueLimits.split(',').map(item => item.trim())

}

/**
 * 
 * @param {PerkData} itemPerk 
 * @param {number} gearScore 
 * @param {MasterItemDefinitions} [masterDefiniton] 
 */
export function ItemPerkScaling(itemPerk, gearScore, masterDefiniton) {
  const { ScalingPerGearScore, ItemClassGSBonus } = itemPerk
  let bonus = 0

  if (masterDefiniton) {
    ItemClassGSBonus.split(",").forEach(gsbonus => {
      const arr = gsbonus.split(":")
      const itemClass = arr[0]
      const value = arr[1]

      if (masterDefiniton.ItemClass.includes(itemClass)) {
        bonus = Number(value)
      }
    })
  }

  return 1 + (Number(ScalingPerGearScore) || 0) * (gearScore + bonus - 100)
}

/**
 * @template T
 * @param {T[]} arr
 * @param {number} target 
 * @param {string} searchField
 */
export function binarySearchObject(arr, target, searchField) {
  let leftIndex = 0
  let rightIndex = arr.length - 1

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === arr[middleIndex][searchField]) return arr[middleIndex]

    if (target < arr[middleIndex][searchField]) rightIndex = middleIndex - 1
    else leftIndex = middleIndex + 1
  }
}
