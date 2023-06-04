// To parse this data:
//
//   import { Convert } from "./file";
//
//   const abilityData = Convert.toAbilityData(json);
//   const achievementData = Convert.toAchievementData(json);
//   const affixData = Convert.toAffixData(json);
//   const affixStatData = Convert.toAffixStatData(json);
//   const afflictionData = Convert.toAfflictionData(json);
//   const ammoItemDefinitions = Convert.toAmmoItemDefinitions(json);
//   const ancientGuardianGreatswordIceVariantStaminaCosts = Convert.toAncientGuardianGreatswordIceVariantStaminaCosts(json);
//   const armorAppearanceDefinitions = Convert.toArmorAppearanceDefinitions(json);
//   const armorItemDefinitions = Convert.toArmorItemDefinitions(json);
//   const attackTypes = Convert.toAttackTypes(json);
//   const attributeDefinition = Convert.toAttributeDefinition(json);
//   const backstoryDefinition = Convert.toBackstoryDefinition(json);
//   const beamData = Convert.toBeamData(json);
//   const blueprintItemDefinitions = Convert.toBlueprintItemDefinitions(json);
//   const buffBucketData = Convert.toBuffBucketData(json);
//   const cameraShakeData = Convert.toCameraShakeData(json);
//   const campSkinData = Convert.toCampSkinData(json);
//   const categoricalProgressionData = Convert.toCategoricalProgressionData(json);
//   const categoricalProgressionRankData = Convert.toCategoricalProgressionRankData(json);
//   const cinematicVideoStaticData = Convert.toCinematicVideoStaticData(json);
//   const collectibleStaticData = Convert.toCollectibleStaticData(json);
//   const combatTextSettings = Convert.toCombatTextSettings(json);
//   const consumableItemDefinitions = Convert.toConsumableItemDefinitions(json);
//   const contributionData = Convert.toContributionData(json);
//   const conversationStateData = Convert.toConversationStateData(json);
//   const conversationTopicData = Convert.toConversationTopicData(json);
//   const cooldownsPlayer = Convert.toCooldownsPlayer(json);
//   const craftingCategoryData = Convert.toCraftingCategoryData(json);
//   const craftingRecipeData = Convert.toCraftingRecipeData(json);
//   const crestPartData = Convert.toCrestPartData(json);
//   const currencyExchangeData = Convert.toCurrencyExchangeData(json);
//   const curseMutationStaticData = Convert.toCurseMutationStaticData(json);
//   const cutsceneCameraStaticData = Convert.toCutsceneCameraStaticData(json);
//   const damageData = Convert.toDamageData(json);
//   const damageTypeData = Convert.toDamageTypeData(json);
//   const dataPointData = Convert.toDataPointData(json);
//   const divertedLootData = Convert.toDivertedLootData(json);
//   const dyeColorData = Convert.toDyeColorData(json);
//   const dyeItemDefinitions = Convert.toDyeItemDefinitions(json);
//   const economyTrackerData = Convert.toEconomyTrackerData(json);
//   const elementalMutationStaticData = Convert.toElementalMutationStaticData(json);
//   const emoteData = Convert.toEmoteData(json);
//   const encumbranceData = Convert.toEncumbranceData(json);
//   const entitlementData = Convert.toEntitlementData(json);
//   const experienceData = Convert.toExperienceData(json);
//   const factionControlBuffDefinitions = Convert.toFactionControlBuffDefinitions(json);
//   const factionData = Convert.toFactionData(json);
//   const factionStatusEffectData = Convert.toFactionStatusEffectData(json);
//   const fishData = Convert.toFishData(json);
//   const fishingBaitData = Convert.toFishingBaitData(json);
//   const fishingBehaviorsData = Convert.toFishingBehaviorsData(json);
//   const fishingCatchablesData = Convert.toFishingCatchablesData(json);
//   const fishingHotspotsData = Convert.toFishingHotspotsData(json);
//   const fishingPolesData = Convert.toFishingPolesData(json);
//   const fishingWaterData = Convert.toFishingWaterData(json);
//   const gameEventData = Convert.toGameEventData(json);
//   const gameModeData = Convert.toGameModeData(json);
//   const gatherableData = Convert.toGatherableData(json);
//   const gearScoreUpgradeDefinition = Convert.toGearScoreUpgradeDefinition(json);
//   const generatorRecipes = Convert.toGeneratorRecipes(json);
//   const genericInviteData = Convert.toGenericInviteData(json);
//   const highWaterMarkRankData = Convert.toHighWaterMarkRankData(json);
//   const houseTypeData = Convert.toHouseTypeData(json);
//   const hunterSightData = Convert.toHunterSightData(json);
//   const impactAudioTable = Convert.toImpactAudioTable(json);
//   const impactSurfaceAlignmentTable = Convert.toImpactSurfaceAlignmentTable(json);
//   const impactTable = Convert.toImpactTable(json);
//   const interactionAnimationData = Convert.toInteractionAnimationData(json);
//   const itemCurrencyConversionData = Convert.toItemCurrencyConversionData(json);
//   const itemPerkSwapData = Convert.toItemPerkSwapData(json);
//   const itemSkinData = Convert.toItemSkinData(json);
//   const itemSoundEvents = Convert.toItemSoundEvents(json);
//   const itemTooltipLayout = Convert.toItemTooltipLayout(json);
//   const itemTransform = Convert.toItemTransform(json);
//   const jointAlias = Convert.toJointAlias(json);
//   const kitItemDefinitions = Convert.toKitItemDefinitions(json);
//   const leaderboardData = Convert.toLeaderboardData(json);
//   const leaderboardStatData = Convert.toLeaderboardStatData(json);
//   const levelDisparityData = Convert.toLevelDisparityData(json);
//   const lootBucketData = Convert.toLootBucketData(json);
//   const lootLimitData = Convert.toLootLimitData(json);
//   const lootTablesData = Convert.toLootTablesData(json);
//   const lootTagPresetData = Convert.toLootTagPresetData(json);
//   const loreData = Convert.toLoreData(json);
//   const loreItemDefinitions = Convert.toLoreItemDefinitions(json);
//   const manaCostsPlayer = Convert.toManaCostsPlayer(json);
//   const masterItemDefinitions = Convert.toMasterItemDefinitions(json);
//   const metaAchievementData = Convert.toMetaAchievementData(json);
//   const missionData = Convert.toMissionData(json);
//   const missionWeightsData = Convert.toMissionWeightsData(json);
//   const moonshot = Convert.toMoonshot(json);
//   const musicalInstrumentSlot = Convert.toMusicalInstrumentSlot(json);
//   const musicalPerformanceRewards = Convert.toMusicalPerformanceRewards(json);
//   const musicalRanking = Convert.toMusicalRanking(json);
//   const musicalScoring = Convert.toMusicalScoring(json);
//   const mutationDifficultyStaticData = Convert.toMutationDifficultyStaticData(json);
//   const mutationPerksStaticData = Convert.toMutationPerksStaticData(json);
//   const notificationData = Convert.toNotificationData(json);
//   const nPCData = Convert.toNPCData(json);
//   const objectives = Convert.toObjectives(json);
//   const objectivesGlobalReleaseData = Convert.toObjectivesGlobalReleaseData(json);
//   const objectiveTasks = Convert.toObjectiveTasks(json);
//   const particleContextualPriorityOverrideData = Convert.toParticleContextualPriorityOverrideData(json);
//   const particleData = Convert.toParticleData(json);
//   const perkBucketData = Convert.toPerkBucketData(json);
//   const perkData = Convert.toPerkData(json);
//   const perkExclusiveLabelData = Convert.toPerkExclusiveLabelData(json);
//   const playerTitleData = Convert.toPlayerTitleData(json);
//   const progressionPointData = Convert.toProgressionPointData(json);
//   const progressionPoolData = Convert.toProgressionPoolData(json);
//   const promotionMutationStaticData = Convert.toPromotionMutationStaticData(json);
//   const pVPRankData = Convert.toPVPRankData(json);
//   const pVPStoreData = Convert.toPVPStoreData(json);
//   const randomEncounterDefinitions = Convert.toRandomEncounterDefinitions(json);
//   const refiningRecipes = Convert.toRefiningRecipes(json);
//   const resourceItemDefinitions = Convert.toResourceItemDefinitions(json);
//   const rewardData = Convert.toRewardData(json);
//   const rewardMilestoneData = Convert.toRewardMilestoneData(json);
//   const rewardModifierData = Convert.toRewardModifierData(json);
//   const rewardTrackItemData = Convert.toRewardTrackItemData(json);
//   const scheduleData = Convert.toScheduleData(json);
//   const seasonPassRankData = Convert.toSeasonPassRankData(json);
//   const seasonsRewardData = Convert.toSeasonsRewardData(json);
//   const seasonsRewardsActivitiesConfig = Convert.toSeasonsRewardsActivitiesConfig(json);
//   const seasonsRewardsActivitiesTasksData = Convert.toSeasonsRewardsActivitiesTasksData(json);
//   const seasonsRewardsCardData = Convert.toSeasonsRewardsCardData(json);
//   const seasonsRewardsCardTemplates = Convert.toSeasonsRewardsCardTemplates(json);
//   const seasonsRewardsChapterData = Convert.toSeasonsRewardsChapterData(json);
//   const seasonsRewardsJourneyData = Convert.toSeasonsRewardsJourneyData(json);
//   const seasonsRewardsSeasonData = Convert.toSeasonsRewardsSeasonData(json);
//   const seasonsRewardsStats = Convert.toSeasonsRewardsStats(json);
//   const seasonsRewardsTasks = Convert.toSeasonsRewardsTasks(json);
//   const simpleTreeCategoryData = Convert.toSimpleTreeCategoryData(json);
//   const skillData = Convert.toSkillData(json);
//   const skillExperienceData = Convert.toSkillExperienceData(json);
//   const socketables = Convert.toSocketables(json);
//   const songBookData = Convert.toSongBookData(json);
//   const songBookSheets = Convert.toSongBookSheets(json);
//   const specializationDefinitions = Convert.toSpecializationDefinitions(json);
//   const spellData = Convert.toSpellData(json);
//   const staminaCostsDamned = Convert.toStaminaCostsDamned(json);
//   const staminaCostsPlayer = Convert.toStaminaCostsPlayer(json);
//   const statusEffectCategoryData = Convert.toStatusEffectCategoryData(json);
//   const statusEffectData = Convert.toStatusEffectData(json);
//   const storeProductData = Convert.toStoreProductData(json);
//   const structureFootprintData = Convert.toStructureFootprintData(json);
//   const structurePieceData = Convert.toStructurePieceData(json);
//   const territoryAdvancementLevel = Convert.toTerritoryAdvancementLevel(json);
//   const territoryDefinition = Convert.toTerritoryDefinition(json);
//   const territoryProgressionData = Convert.toTerritoryProgressionData(json);
//   const territoryUpkeepDefinition = Convert.toTerritoryUpkeepDefinition(json);
//   const throwableItemDefinitions = Convert.toThrowableItemDefinitions(json);
//   const timelineRegistryEntryData = Convert.toTimelineRegistryEntryData(json);
//   const trackedStatID = Convert.toTrackedStatID(json);
//   const tradeSkillPostCapData = Convert.toTradeSkillPostCapData(json);
//   const tradeskillRankData = Convert.toTradeskillRankData(json);
//   const twitchDropsStatDefinitions = Convert.toTwitchDropsStatDefinitions(json);
//   const twitchTagsStatDefinitions = Convert.toTwitchTagsStatDefinitions(json);
//   const variationData = Convert.toVariationData(json);
//   const vitalsCategoryData = Convert.toVitalsCategoryData(json);
//   const vitalsData = Convert.toVitalsData(json);
//   const vitalsLevelData = Convert.toVitalsLevelData(json);
//   const vitalsModifierData = Convert.toVitalsModifierData(json);
//   const warboardStatDefinitions = Convert.toWarboardStatDefinitions(json);
//   const weaponAccessoryDefinitions = Convert.toWeaponAccessoryDefinitions(json);
//   const weaponAppearanceDefinitions = Convert.toWeaponAppearanceDefinitions(json);
//   const weaponEffectData = Convert.toWeaponEffectData(json);
//   const weaponItemDefinitions = Convert.toWeaponItemDefinitions(json);
//   const whisperData = Convert.toWhisperData(json);
//   const whisperVfxData = Convert.toWhisperVfxData(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export type AbilityData = {
    AbilityID:                                      string;
    DisplayName:                                    string;
    Description:                                    string;
    UICategory:                                     UICategory;
    Icon:                                           string;
    StatusEffectIcon:                               string;
    Sound:                                          string;
    TelegraphStatusEffect:                          string;
    TelegraphCountOffset:                           string;
    OnEquipStatusEffect:                            string;
    WeaponTag:                                      WeaponTag;
    RequiredAbilityId:                              string;
    TreeId:                                         number | null | string;
    TreeRowPosition:                                number | null | string;
    TreeColumnPosition:                             number | null | string;
    IsActiveAbility:                                boolean | null | string;
    IsGlobalAbility:                                boolean | null | string;
    IsStackableAbility?:                            boolean | null | string;
    ScalingStrength:                                string;
    ScalingDexterity:                               string;
    ScalingIntelligence:                            string;
    ScalingSpirit:                                  string;
    ScalingConstitution:                            string;
    OnEventPassiveConditionsPass?:                  boolean | null;
    OnKill:                                         boolean | null;
    OnExecuted:                                     boolean | null;
    OnHit:                                          boolean | null;
    OnBlockedHit:                                   boolean | null;
    OnHitBehind?:                                   boolean | null;
    OnCrit:                                         boolean | null;
    OnCritTaken?:                                   boolean | null;
    OnHeadShot:                                     boolean | null;
    OnLegShot:                                      boolean | null;
    OnHitTaken:                                     boolean | null;
    OnDeath:                                        boolean | null;
    OnDeathsDoor:                                   boolean | null;
    OnHasDied?:                                     boolean | null;
    OnBlockBreak:                                   boolean | null;
    OnTargetBlockBreak:                             boolean | null;
    OnTargetSet?:                                   boolean | null;
    OnContributedKill?:                             boolean | null;
    OnHealthChanged?:                               boolean | null | string;
    OnStatusEffectApplied?:                         boolean | null;
    RequireReaction?:                               boolean | null | string;
    NumSuccessfulHits?:                             number | null | string;
    NumConsecutiveHits:                             number | null | string;
    MaxConsecutiveHits:                             number | null | string;
    TrackHitCount:                                  boolean | null | string;
    ResetConsecutiveOnSuccess:                      boolean | number | null | string;
    DamageIsRanged:                                 boolean | null | string;
    DamageIsMelee:                                  boolean | null | string;
    AllowSelfDamageForHitEvents?:                   boolean | null | string;
    ForceShowNameTag:                               string;
    TargetHasGritActive:                            boolean | null | string;
    DamageTableRow:                                 string;
    RemoteDamageTableRow:                           string;
    RangedAttackName:                               RangedAttackName;
    AttackType:                                     AttackType;
    DamageTypes?:                                   DamageTypes;
    CheckOwnedStatusEffects?:                       string;
    StatusEffect:                                   string;
    StatusEffectCategories:                         RemoveTargetStatusEffectCats;
    StatusEffectStackSize?:                         number | null | string;
    StatusEffectComparison?:                        AbilityCooldownComparisonType;
    DontHaveStatusEffect?:                          string;
    StatusEffectBeingApplied?:                      StatusEffectBeingApplied;
    TargetStatusEffect:                             string;
    TargetStatusEffectCategory:                     TargetStatusEffectCategory;
    TargetStatusEffectStackSize:                    number | null | string;
    TargetStatusEffectComparison:                   AbilityCooldownComparisonType;
    TargetCollisionFilters:                         TargetCollisionFilters;
    TargetMarker:                                   TargetMarker;
    MyHealthPercent:                                number | null | string;
    MyComparisonType:                               AbilityCooldownComparisonType;
    MyStaminaPercent:                               number | null | string;
    MyStaminaComparisonType:                        AbilityCooldownComparisonType;
    TargetHealthPercent:                            number | null | string;
    TargetComparisonType:                           AbilityCooldownComparisonType;
    DistFromDefender:                               number | null | string;
    DistComparisonType:                             AbilityCooldownComparisonType;
    NumAroundMe:                                    number | null | string;
    NumAroundComparisonType:                        AbilityCooldownComparisonType;
    AbilityList:                                    string;
    AbilityTrigger:                                 AbilityTrigger;
    InAction:                                       InAction;
    InActionTime:                                   number | null | string;
    AfterAction:                                    AfterAction;
    BaseDamage:                                     number | null | string;
    BaseDamageReduction:                            number | null | string;
    BlockDamage:                                    number | null | string;
    BlockDamageReduction:                           number | null | string;
    CritDamage:                                     number | null | string;
    CritChance:                                     number | null | string;
    HeadshotDamage:                                 number | null | string;
    StaggerDamage?:                                 number | null | string;
    StaggerDamageReduction:                         number | null | string;
    HitRateDmg:                                     string;
    HitRateDmgReduction:                            string;
    HealthDamageMitigation?:                        string;
    ThreatDamage:                                   number | null | string;
    ArmorPenetration:                               number | null | string;
    PhysicalArmor:                                  number | null | string;
    ElementalArmor:                                 number | null | string;
    LinearlyScaleToDistance?:                       number | null | string;
    Knockback:                                      number | null | string;
    WeaponAccuracy:                                 number | null | string;
    Health:                                         string;
    DmgPctToHealth:                                 number | null | string;
    MaxHealth:                                      number | null | string;
    Mana:                                           number | null | string;
    ManaRate?:                                      string;
    MaxMana:                                        number | null | string;
    DamageTableRowOverride:                         DamageTableRowOverride;
    StatusEffectDamageTableRowOverride?:            StatusEffectDamageTableRowOverride;
    ForceStatusEffectDamageTableRow?:               boolean | null | string;
    RangedAttackNameOverride:                       RangedAttackNameOverride;
    PowerLevelOverride?:                            string;
    EnableCrit:                                     string;
    PerStatusEffectOnTarget:                        boolean | null | string;
    ForceTakeStaminaDamage:                         string;
    CastSpell:                                      string;
    SelfApplyStatusEffect:                          string;
    OtherApplyStatusEffect:                         string;
    SelfApplyStatusEffectDurations?:                number | null | string;
    DoNotUnequipSelfAppliedSE?:                     boolean | null | string;
    SetPotencyAsCount:                              string;
    MultiplyRemovedByPotency?:                      string;
    OnlyChangeOwnedStatusEffects?:                  boolean | null | string;
    NumStatusEffectsToRemove?:                      number | null | string;
    NumStatusEffectStacksToRemove?:                 number | null | string;
    RemoveStatusEffects:                            RemoveStatusEffects;
    StatusEffectsList:                              StatusEffectsList;
    StatusEffectCategoriesList?:                    StatusEffectCategoriesList;
    RemoveTargetStatusEffectsList:                  List;
    ConsumeTargetStatusEffectMult:                  number | null | string;
    StatusEffectDurationReduction:                  number | null | string;
    TargetStatusEffectDurationList:                 List;
    TargetStatusEffectDurationMod:                  number | null | string;
    ActivationCooldown?:                            number | null | string;
    Duration:                                       number | null | string;
    CooldownId:                                     string;
    CDRImmediatelyOptions:                          Options;
    ResetCooldownTimers:                            ResetCooldownTimers;
    CooldownTimer:                                  number | null | string;
    NumFreeCooldownsPerUse:                         number | null | string;
    MaxHitCountMultiplier:                          number | null | string;
    SetMannequinTag:                                SetMannequinTag;
    SetMannequinTagStatus:                          boolean | null | string;
    IsNonCombatAbility?:                            boolean;
    OnHealed?:                                      boolean | null;
    OnSelfDamage?:                                  boolean | string;
    OnGatheringComplete?:                           boolean | null;
    GatheringTradeskill?:                           GatheringTradeskill;
    IgnoreDisabledAttackTypes?:                     IgnoreDisabledAttackTypes;
    DamageCategory?:                                DamageCategory;
    CritDamageReduction?:                           number | null | string;
    HitFromBehindDamage?:                           number | null | string;
    PhysicalArmorMaxHealthMod?:                     number | null | string;
    HealScalingValueMultiplier?:                    number | null | string;
    ConsumableHealMod?:                             number | null;
    StaminaCostList?:                               string;
    StaminaCostFlatMod?:                            number | null | string;
    ModifySelfApplyStatusEffectDuration?:           number | null | string;
    TargetStatusEffectDurationCats?:                TargetStatusEffectDurationCats;
    TargetStatusEffectDurationMult?:                number | null | string;
    RepairDustYieldMod?:                            number | null | string;
    ToolDurabilityLossMod?:                         number | null | string;
    FastTravelInnCooldownMod?:                      number | null | string;
    FastTravelAzothCostMod?:                        number | null | string;
    GiveAzothPercentChance?:                        number | null | string;
    Azoth?:                                         number | null | string;
    RefundAmmoPercentChance?:                       number | null | string;
    EquipWhenUnsheathed?:                           boolean | number | null | string;
    RequiredEquippedAbilityId?:                     AbilityIDToCheckForTrackedHits;
    MaxTrackedHitCounts?:                           number | null;
    NumberOfTrackedHits?:                           number | null | string;
    NumberOfHitsComparisonType?:                    NumberOfHitsComparisonType;
    LoadedAmmoCount?:                               number | null | string;
    LoadedAmmoCountComparisonType?:                 AbilityCooldownComparisonType;
    StatusEffectDamageTableIdForRowOverride?:       StatusEffectDamageTableIDForRowOverride;
    OnWeaponSwap?:                                  boolean | null | string;
    IgnoreResetConsecutiveOnDeath?:                 boolean | null | string;
    UISpellForManaCheck?:                           string;
    OnBlockedHitTaken?:                             boolean | null;
    OnHitTakenWhileInvulnerable?:                   boolean | null;
    DamageTableStatusEffectOverride?:               DamageTableStatusEffectOverride;
    UseDefenderWeaponOnApplyOtherSE?:               boolean | null;
    CanBeUnapplied?:                                boolean | null | string;
    OnAttachedSpellTargetDied?:                     boolean | null;
    OnProjPassedThrough?:                           boolean | null;
    OnUsedConsumable?:                              boolean | null;
    OnInActionLongEnough?:                          boolean | null | string;
    OnTargetStatusEffectRemoved?:                   boolean | null;
    OnEventConditionalActivationChance?:            boolean | string;
    EquipLoadCategory?:                             EquipLoadCategory;
    ExcludeFromGameModes?:                          ExcludeFromGameModes;
    DisableConsecutivePotency?:                     boolean | null | string;
    ResetTrackedOnSuccess?:                         boolean | null | string;
    AbilityIdToCheckForTrackedHits?:                AbilityIDToCheckForTrackedHits;
    HasGritActive?:                                 boolean | null | string;
    IsInCombatState?:                               boolean | null | string;
    IsNotInCombatState?:                            boolean | null | string;
    CheckStatusEffectsOnTargetOwned?:               boolean | null | string;
    MyMarker?:                                      MyMarker;
    MyManaPercent?:                                 number | null | string;
    MyManaComparisonType?:                          AbilityCooldownComparisonType;
    MaxNumAroundMe?:                                number | null | string;
    AbilityOnCooldownOptions?:                      Options;
    AbilitiesOnCooldown?:                           string;
    AbilityCooldownComparisonType?:                 AbilityCooldownComparisonType;
    AttachedTargetSpellIds?:                        string;
    IsConsumableIds?:                               string;
    IsNotConsumableIds?:                            IsNotConsumableIDS;
    AttackerVitalsCategory?:                        AttackerVitalsCategory;
    TargetVitalsCategory?:                          AttackerVitalsCategory;
    SetHealthOnFatalDamageTaken?:                   number | null | string;
    CritArmorPenetration?:                          string;
    HeadshotArmorPenetration?:                      number | null | string;
    HitFromBehindArmorPenetration?:                 number | null | string;
    RefundConsumablePercentChance?:                 number | null | string;
    HealthPenaltyPerStackRemoved?:                  string;
    ManaCostList?:                                  string;
    ManaCostMult?:                                  number | null | string;
    Stamina?:                                       number | null | string;
    EnableTaunt?:                                   boolean | null | string;
    CanBlockRangedOverride?:                        boolean | null | string;
    PerStatusEffectOnSelf?:                         boolean | null | string;
    PerStatusEffectOnSelfMax?:                      number | null | string;
    PerStatusEffectOnTargetMax?:                    number | null | string;
    DisableApplyPerStatusEffectStack?:              boolean | null | string;
    DisableScalePerTargetSEStack?:                  string;
    DisableCastSpellDurability?:                    boolean | null | string;
    OtherApplyStatusEffectDurations?:               string;
    UseMinAttackInfoForSelfAppliedSE?:              boolean | null | string;
    NumStatusEffectsToTransfer?:                    number | null | string;
    StatusEffectCategoryToTransfer?:                RemoveTargetStatusEffectCats;
    NumTargetStatusEffectsToRemove?:                number | null | string;
    RemoveTargetStatusEffectCats?:                  RemoveTargetStatusEffectCats;
    StatusEffectDurationCats?:                      StatusEffectDurationCats;
    StatusEffectDurationMod?:                       number | null | string;
    StatusEffectDurationMult?:                      number | null | string;
    ConsumableCooldownForReset?:                    string;
    ResetConsumableCooldowns?:                      RemoveStatusEffects;
    "stagger damage"?:                              string;
    UnlockDefault?:                                 boolean | null;
    OnFatalDamageTaken?:                            boolean;
    TargetStatusEffectPotency?:                     string;
    TargetStatusEffectPotencyComparison?:           string;
    EnableHoldConditionIfTrackedSpellExistsOfType?: EnableHoldConditionIfTrackedSpellExistsOfType;
    HoldConditionButtonIcon?:                       HoldConditionButtonIcon;
}

export type AbilityCooldownComparisonType = "" | "Equal" | "LessThan" | "GreaterThan" | "GreaterThanOrEqual" | "LessThanOrEqual" | "NotEqual";

export type AbilityIDToCheckForTrackedHits = "" | "Ultimate_Greatsword_Offense" | "Blunderbuss_Buckshot" | "Blunderbuss_Charge" | "Passive_Bow_Hunter_DmgOnFirst" | "Ultimate_Bow_Hunter" | "Upgrade_Greatsword_Dash_2" | "Upgrade_Greatsword_Combo_2" | "Passive_Greatsword_Off_8" | "Upgrade_Greatsword_Counter_1" | "Ability_Greatsword_Counter" | "Upgrade_Greatsword_Counter_2" | "Upgrade_Greatsword_Drain_1" | "Passive_Greatsword_Def_8" | "Ultimate_Greatsword_Defense" | "Passive_Hatchet_ThrowingAxe_CriticalThrows" | "Ult_Passive_Hatchet_ExtendDebuffDuration" | "Ability_Sword_FinalStand";

export type Options = "" | "ActiveWeapon" | "AbilitySpecific" | "AllExcept";

export type AbilityTrigger = "" | "OnPerform" | "AfterPerform";

export type AfterAction = "" | "Dodge" | "Hatchet_PowerThrow" | "Ability_Rapier_Slash";

export type AttackType = "" | "Heavy,Magic" | "Light,Heavy,Magic" | "Heavy,Magic,Ability" | "Light,Heavy,Ability" | "Ability" | "Light" | "Light,Heavy" | "Heavy" | "Heavy,Ability" | "Medium";

export type AttackerVitalsCategory = "" | "Player" | "Solo+" | "Elite+" | "Solo" | "Named_Solo+" | "EliteBoss" | "Dungeon" | "Dungeon+" | "Solo-" | "Dungeon-" | "Elite" | "Boss" | "DungeonBoss" | "Elite-" | "DungeonMiniBoss" | "EliteMiniBoss" | "Critter" | "Solo-_StarterBeach" | "Solo_StarterBeach" | "Named_Solo" | "Spell" | "OutpostRushSolo+" | "OutpostRushSolo" | "OutpostRushGroup+" | "Dungeon+_NoCurrency" | "Boss-" | "Boss+" | "Skull" | "Solo+_StarterBeach" | "Dungeon_NoCurrency" | "Dungeon-_NoCurrency";

export type DamageCategory = "" | "Elemental" | "Physical";

export type DamageTableRowOverride = "" | "Attack_Darkness_Calls" | "Reaction_Breakout" | "Bow_PoisonShot_Upgrade" | "BowAttackKnockBack" | "Bow_Penetrating_AttackA1" | "Rune_CannonBlast_Projectile_Greater" | "Rune_CannonBlast_Projectile_Survivor" | "Rune_HereticFall_AoE_Dominator" | "Hatchet_Berserk_Taunt" | "IceMagic_Spikes_Upgrade" | "1H_Rapier_Riposte_Taunt" | "2H_Spear_Javelin_Knockback" | "2H_Spear_Cyclone_Pushback" | "OH_Shield_Attack_Bash_Upgrade" | "OH_Shield_FinalStand" | "Warhammer_Damage_MightyGavel_Upg";

export type DamageTableStatusEffectOverride = "" | "Spear_Skewer_Bleed_Upgrade" | "Spear_Perforate_Rend_Upgrade";

export type DamageTypes = "" | "Fire" | "Slash,Strike" | "Thrust" | "Ice" | "Lightning" | "Nature" | "Corruption" | "Magic,Fire,Lightning,Corruption,Void,Life,Ice, Arcane, Nature" | "Arcane" | "Slashing" | "Void" | "Standard" | "Strike" | "Slash" | "Siege" | "Falling" | "Deflect" | "Magic" | "AfflictionDisease" | "AfflictionFrostbite" | "Acid" | "True" | "PhysFire" | "Brimstone";

export type EnableHoldConditionIfTrackedSpellExistsOfType = "" | "IcePylon";

export type EquipLoadCategory = "" | "Fast" | "Normal";

export type ExcludeFromGameModes = "" | "OutpostRush" | "Any" | "War" | "Location" | "Settlement" | "Expedition" | "Invasion";

export type GatheringTradeskill = "" | "Harvesting" | "Skinning" | "Logging" | "Mining" | "Arcana" | "Armoring" | "Cooking" | "Engineering" | "Furnishing" | "Jewelcrafting" | "Weaponsmithing" | "None" | "Leatherworking" | "Smelting" | "Stonecutting" | "Weaving" | "Woodworking" | "AzothStaff" | "Fishing" | "Musician";

export type HoldConditionButtonIcon = "" | "lyshineui/images/icons/abilities/iceMagic_Ability4.png";

export type IgnoreDisabledAttackTypes = "Heartgem" | "" | "Light" | "Heavy" | "Ability" | "Magic" | "MagicSpell" | "Bullet" | "Magic " | "Fall" | "Arcane" | "Falling";

export type InAction = "" | "Bow_JumpBackShot" | "Bow_RapidShot" | "Block_UpperBody" | "Dodge" | "." | "Greatsword_Counter" | "Block_Upperbody" | "Hatchet_Attack_Sprint_Land" | "Hatchet_RapidStrikes" | "Hatchet_InfectedThrow" | "Ability_Lifestaff_OrbofProtection_Cast" | "Firearm_AimShoot_SubState" | "Ability_Rapier_Flurry" | "Ability_Rapier_Evasion" | "Spear_Skewer" | "Spear_Perforate" | "VoidGauntlet_Harvest" | "Ability_WarHammer_ArmorBreaker" | "Ability_WarHammer_MightyGavel" | "Ability_WarHammer_ClearOut" | "Ability_WarHammer_Shockwave" | "Ability_WarHammer_PathOfDestiny";

export type IsNotConsumableIDS = "" | "PotionGypsumYellow";

export type MyMarker = "" | "BlockEarly";

export type NumberOfHitsComparisonType = "" | "LessThanOrEqual" | "LessthanOrEqual&#160;" | "GreaterThanOrEqual" | "Equal";

export type RangedAttackName = "" | "BlunderbussAzothShrapnel,BlunderbussAzothShrapnel_Upgraded" | "Basic";

export type RangedAttackNameOverride = "" | "BonusDMGOverDistance";

export type RemoveStatusEffects = "" | "AbilitySpecific" | "Global_Weapon_DodgeSuccess_FireDMG_Tracker" | "Global_Weapon_DodgeSuccess_NatureDMG_Tracker" | "Global_Weapon_DodgeSuccess_IceDMG_Tracker" | "Global_Weapon_DodgeSuccess_LightningDMG_Tracker" | "Global_Weapon_DodgeSuccess_VoidDMG_Tracker" | "Global_Weapon_DodgeSuccess_ArcaneDMG_Tracker" | "All";

export type RemoveTargetStatusEffectCats = "" | "Buff" | "Debuff" | "Root,Slow" | "FoodUtility" | "CC" | "Dot" | "Debilitate" | "Empower" | "Fortify,ArmorFortify" | "GreatswordBuff" | "FrostBuff" | "LastStand" | "HarvestHP";

export type List = "" | "AI_Thorpe_Force_Grab_Tracker" | "FireStaff_Pyro_DOT" | "Rapier_Bleed_DOT" | "Hatchet_RendingThrow_Rend" | "Hatchet_Infected_Disease,Hatchet_Infected_Weaken" | "Status_Ability_Lifestaff_Beacon" | "Musket_PowderBurn_Burn" | "Ability_Spear_Perforate" | "Sword_ShieldBash_Stun2" | "VoidGauntlet_Scream";

export type ResetCooldownTimers = "" | "All" | "ActiveWeapon";

export type SetMannequinTag = "" | "Detonate" | "Crouch";

export type StatusEffectBeingApplied = "" | "AI_AdmiralBrute_BarrelExplode" | "AI_SandElemental_Soldier_RockPile_Absorb" | "AI_Evil_Knight_Fire_Champion_DangerCheck" | "AI_Evil_Knight_Fire_Champion_Overheat" | "AI_Evil_Knight_Flamekeeper_Combustible" | "AI_BrotherUmberto_MinionDeath" | "AI_IceDragon_EmpoweringLink_Stack" | "Blunderbuss_ChargeMortarUsedSignal" | "Mut_Curse1_VFX_Kill" | "Mut_Curse1_Minor_OrbCount" | "Mut_Curse1_Fir_Major_Damage_DoT" | "Mut_Curse1_Lig_Major_Damage_DoT" | "Mut_Curse1_Voi_Major_Damage_DoT" | "Mut_Curse1_Nat_Major_Damage_DoT" | "Mut_Curse1_Ice_Major_Damage_DoT" | "Mut_Curse2_Fir_Major_Damage" | "Mut_Curse2_Voi_Major_Damage" | "Mut_Curse2_Nat_Major_Damage" | "Mut_Curse2_Ice_Major_Damage" | "PvP_Arena_PreRound" | "Rune_StoneForm_Dominator" | "Greatsword_Stance_Offense" | "Greatsword_Stance_Defense" | "Greatsword_Stance_Offense,Greatsword_Stance_Defense" | "Greatsword_Passive_BlockCount" | "VoidGauntlet_EssenceStack";

export type StatusEffectCategoriesList = "" | "Debuff" | "DoT" | "Debilitate" | "Slow,Root";

export type StatusEffectDamageTableIDForRowOverride = "" | "DamageTable";

export type StatusEffectDamageTableRowOverride = "" | "Dummy_Row" | "Glacier_Blade_2" | "Arcane_Wave_2" | "Common_DamageOverTime_Override" | "NO_ENTRY " | "FireStaff_Common_DoT" | "Common_HealOverTime_Override" | "1H_Rapier_Slash_Bleed" | "2H_Spear_Skewer_Bleed";

export type StatusEffectDurationCats = "" | "FoodUtility" | "CC" | "Dot" | "Debilitate" | "Empower" | "Haste" | "Debuff" | "StoneForm" | "Stance";

export type StatusEffectsList = "" | "Mut_Fir_AOE_VFX" | "Yeti_GlacierBlade_Damage" | "AI_AdmiralBrute_Blackpowder" | "AI_Evil_Knight_Fire_Champion_OverheatSpell_Phase01" | "AI_Evil_Knight_Fire_Champion_OverheatSpell_Phase02" | "AI_Evil_Knight_Flamekeeper_Stop_Drop_And_Roll" | "AI_Evil_Knight_Flamekeeper_Combustible" | "AI_IceDragon_EmpoweringLink" | "Blunderbuss_ChargeMortarUsedSignal" | "Blunderbuss_ChargeCooldown" | "Status_Passive_Firestaff_FireMage_DmgNoDmg" | "All" | "Mut_Curse1_Fir_Minor_Cast" | "Mut_Curse1_Lig_Minor_Cast" | "Mut_Curse1_Voi_Minor_Cast" | "Mut_Curse1_Nat_Minor_Cast" | "Mut_Curse1_Ice_Minor_Cast" | "Mut_Curse1_Fir_Major_Cast" | "Mut_Curse1_Lig_Major_Cast" | "Mut_Curse1_Voi_Major_Cast" | "Mut_Curse1_Nat_Major_Cast" | "Mut_Curse1_Ice_Major_Cast" | "Greatsword_Passive_BlockCount" | "Rapier_Fleche_Backstab" | "Rapier_Evade_Forward_Damage" | "Rapier_BonusDMGAfterAbility" | "Spear_CDROnHitAfterDodge" | "VoidGauntlet_EssenceStack";

export type TargetCollisionFilters = "" | "Structure";

export type TargetMarker = "" | "IsKnockedDown";

export type TargetStatusEffectCategory = "" | "Slow" | "CC,UnclampedSlow,Slow" | "Debuff" | "Burn,FireBurn" | "CC,Slow,UnclampedSlow" | "IgnoreDebuffs" | "Burn" | "Haste" | "Buff,NonDispellableBuff" | "ThrowingAxe" | "Frost" | "LifestaffBuff" | "PowderBurn" | "TrapRoot" | "CC" | "Trapper" | "Bleed" | "VoidGauntlet" | "Harvest" | "Warhammer";

export type TargetStatusEffectDurationCats = "" | "Dot" | "Buff" | "Debilitate,DoT" | "Empower" | "Haste" | "Poison" | "Bleed" | "Burn" | "Slow" | "Weaken" | "Disease" | "RainofArrows" | "ThrowingAxe" | "LifestaffBuff" | "Spear" | "Dot,Debilitate";

export type UICategory = "" | "Ranged Damage" | "Buff" | "Debuff" | "Passive" | "Magic Damage" | "Melee Damage" | "Heal";

export type WeaponTag = "" | "Blunderbuss" | "Bow" | "Fire" | "GreatAxe" | "Greatsword" | "Axe" | "Ice" | "Heal" | "Rifle" | "Rapier" | "Spear" | "Sword" | "VoidGauntlet" | "Warhammer" | "MagicStaff" | "MagicGauntlet" | "Club" | "Shield_OH";

export type AchievementData = {
    AchievementID:                                                  string;
    AchievementIndex:                                               number;
    Category:                                                       AchievementCategoryEnum;
    GameEventId:                                                    AchievementDatumGameEventID;
    "New AchivementIndex values must increase, current maximum is": string;
    "11590":                                                        string;
    "AchivementsIndex &gt; 16000 will require a code change!":      string;
}

export type AchievementCategoryEnum = "Map" | "Journal" | "Dye" | "Objective" | "Recipe" | "Title" | "" | "CampSkin" | "OneTimePersistenceValidation" | "MusicalPerformances" | "Store" | "MusicalPerformancesEasy" | "MusicalPerformancesMedium" | "MusicalPerformancesHard" | "FirstCraft" | "Whisper";

export type AchievementDatumGameEventID = "Read_LoreItem" | "" | "Chart_Location" | "Chart_location" | "Read_LoreItem_AncientGlyph" | "chart_location" | "Read_LoreItem_Monument_Small" | "Read_LoreItem_Monument_Large";

export type AffixData = {
    AffixID:               string;
    DisplayName:           string;
    Category:              AffixDatumCategory;
    AffixDataWeapon:       string;
    AffixDataArmor:        string;
    AffixDataMisc:         string;
    QualityContribution:   number | null;
    GearScoreContribution: number | null;
    Rarity:                number | null;
}

export type AffixDatumCategory = "Material" | "Magic" | "Type";

export type AffixStatData = {
    StatusID:                     string;
    BaseDamageModifier:           number | null;
    DisableDurabilityLoss:        boolean | null;
    DurabilityMod:                number | null;
    AfflictionDamage:             string;
    StaminaDamageModifier:        number | null;
    StaminaCostID:                string;
    StaminaCostMultiplier:        string;
    EffectDurationMultiplier:     string;
    EffectModMultiplier:          string;
    UseCountMultiplier:           number | null;
    Encumbrance:                  number | null;
    AfflictionMultiplier:         string;
    WeightMultiplier:             number | null;
    GatheringEfficiency:          number | null;
    AppendToTooltip:              string;
    BaseDamageType:               DamageTypes;
    DamageType:                   DamageTypes;
    DamagePercentage:             number | null;
    AdditionalDamage:             string;
    IsAdditiveDamage:             boolean | null;
    StatusEffect:                 string;
    HealMod:                      string;
    HealthRate:                   string;
    MaxHealthMod:                 number | null;
    StaminaRate:                  number | null;
    MaxStaminaMod:                number | null;
    ManaRate:                     number | null;
    MaxManaMod:                   number | null;
    MoveSpeedMod:                 string;
    FastTravelEncumbranceMod:     number | null;
    FishRarityRollModifier:       number | null;
    SummerFishRarityRollModifier: string;
    FishSizeRollModifier:         number | null;
    MaxCastDistance:              number | null;
    FishingLineStrength:          number | null;
    AttributeModifiers:           string;
    MODConstitution:              number | null;
    MODFocus:                     number | null;
    MODStrength:                  number | null;
    MODDexterity:                 number | null;
    MODIntelligence:              number | null;
    UseWeaponAttributeScaling:    string;
    PreferHigherScaling:          boolean | null;
    ScalingStrength:              number | null;
    ScalingDexterity:             number | null;
    ScalingIntelligence:          number | null;
    ScalingFocus:                 number | null;
    ABSStandard:                  number | null;
    ABSSiege:                     number | null;
    ABSStrike:                    number | null;
    ABSSlash:                     number | null;
    ABSThrust:                    number | null;
    ABSArcane:                    number | null;
    ABSIce:                       number | null;
    ABSNature:                    number | null;
    ABSFire:                      number | null;
    ABSLightning:                 number | null;
    ABSCorruption:                number | null;
    ABSVitalsCategory:            AffixStatDatumABSVitalsCategory;
    RESBlight:                    number | null;
    RESCurse:                     number | null;
    RESPoison:                    number | null;
    BLAStandard:                  number | null;
    BLASiege:                     number | null;
    BLAStrike:                    number | null;
    BLASlash:                     number | null;
    BLAThrust:                    number | null;
    BLAArcane:                    number | null;
    BLAFire:                      number | null;
    BLAIce:                       string;
    BLANature:                    string;
    BLALightning:                 number | null;
    BLACorruption:                number | null;
    ABAPoison:                    number | null;
    ABADisease:                   number | null;
    ABABleed:                     number | null;
    ABAFrostbite:                 number | null;
    ABACurse:                     number | null;
    WKNStandard:                  string;
    WKNSiege:                     string;
    WKNStrike:                    string;
    WKNSlash:                     string;
    WKNThrust:                    string;
    WKNArcane:                    string;
    WKNFire:                      string;
    WKNIce:                       string;
    WKNNature:                    string;
    WKNLightning:                 string;
    WKNCorruption:                string;
    DMGStandard:                  string;
    DMGSiege:                     string;
    DMGStrike:                    number | null;
    DMGSlash:                     number | null;
    DMGThrust:                    number | null;
    DMGArcane:                    number | null;
    DMGFire:                      number | null;
    DMGIce:                       number | null;
    DMGNature:                    number | null;
    DMGLightning:                 number | null;
    DMGCorruption:                number | null;
    DMGVitalsCategory:            AffixStatDatumDMGVitalsCategory;
    AFAPoison:                    number | null;
    AFADisease:                   string;
    AFABleed:                     string;
    AFAFrostbite:                 string;
    AFACurse:                     number | null;
    AFABlight:                    number | null;
    WeaponEffectType:             DamageTypes;
    MP_OpeningNotesPerfect:       number | null;
    MP_IgnoreMissedNotes:         number | null;
    MP_RakeReduction:             number | null;
    MP_GroupXPBonus:              number | null;
    MP_SoloXPBonus:               number | null;
    MP_FinalNotePerfectXPBonus:   number | null;
}

export type AffixStatDatumABSVitalsCategory = "" | "Ancient=0.025" | "Ancient=0.035" | "Ancient=0.05" | "AngryEarth=0.025" | "AngryEarth=0.035" | "AngryEarth=0.05" | "Beast=0.025" | "Beast=0.035" | "Beast=0.05" | "Corrupted=0.025" | "Corrupted=0.035" | "Corrupted=0.05" | "Lost=0.025" | "Lost=0.035" | "Lost=0.05" | "human=0.025" | "human=0.035" | "human=0.05";

export type AffixStatDatumDMGVitalsCategory = "" | "Ancient=0.08" | "Ancient=0.11" | "Ancient=0.15" | "AngryEarth=0.08" | "AngryEarth=0.11" | "AngryEarth=0.15" | "Beast=0.08" | "Beast=0.11" | "Beast=0.15" | "Corrupted=0.08" | "Corrupted=0.11" | "Corrupted=0.15" | "Lost=0.08" | "Lost=0.11" | "Lost=0.15" | "human=0.08" | "human=0.11" | "human=0.15" | "Ancient=0.05" | "AngryEarth=0.05" | "Beast=0.05" | "Corrupted=0.05" | "Lost=0.05" | "human=0.05";

export type AfflictionData = {
    AfflictionID:           string;
    IntID:                  number;
    StatusEffects:          string;
    DrainRate:              number;
    AfflictedDrainTime:     number;
    DrainDelay:             number;
    Max:                    number;
    IgnoreWhenAfflicted:    boolean;
    IsGlobalAffliction:     boolean | null;
    IsTimerAffliction:      boolean | null;
    ColorHex:               string;
    Icon:                   string;
    BGImage:                string;
    FillingColorHex:        string;
    LocalizedText:          string;
    LocalizedTextAfflicted: string;
    AfflictionTooltipText:  string;
    AfflictedTooltipText:   string;
}

export type AmmoItemDefinitions = {
    AmmoID:                string;
    AmmoType:              AmmoType;
    DamageModifier:        number;
    StaggerDamageModifier: number | null;
    AmmoPrefabPath:        string;
    AmmoWhizByTrigger:     AmmoWhizByTrigger;
    MeshOverride:          string;
}

export type AmmoType = "Arrow" | "Shot" | "Thrown" | "Siege" | "";

export type AmmoWhizByTrigger = "Play_Arrow_WhizzBys" | "Play_Bullet_WizzBys";

export type StaminaCostsPlayer = {
    CostID:      string;
    StaminaCost: number;
    Category:    AncientGuardianGreatswordIceVariantStaminaCostCategory;
}

export type AncientGuardianGreatswordIceVariantStaminaCostCategory = "Blocking" | "" | "Combat" | "Dodging" | "Sprinting" | "Gathering";

export type ArmorAppearanceDefinitions = {
    ItemID:                   string;
    Name:                     ArmorAppearanceDefinitionName;
    Description:              string;
    AppearanceName:           string;
    Gender:                   Gender;
    ItemClass:                ArmorAppearanceDefinitionItemClass;
    HairChop:                 HairChop;
    HideHair:                 number;
    HideFacialHair:           number;
    HideLegs:                 number;
    HideHead:                 number | null;
    MaskRColor:               ArmorAppearanceDefinitionMaskRColor;
    MaskROverride:            number;
    MaskR:                    number;
    MaskRDyeOverride:         number;
    MaskRDye:                 number;
    MaskGColor:               ArmorAppearanceDefinitionMaskGColor;
    MaskGOverride:            number;
    MaskG:                    number;
    MaskGDyeOverride:         number;
    MaskGDye:                 number;
    MaskBColor:               ArmorAppearanceDefinitionMaskBColor;
    MaskBOverride:            number;
    MaskB:                    number;
    MaskBDyeOverride:         number;
    MaskBDye:                 number;
    MaskASpecColor:           string;
    MaskASpec:                number;
    MaskASpecDye:             number;
    MaskAGlossShift:          number;
    MaskAGloss:               string;
    EmissiveColor:            string;
    EmissiveIntensity:        number | null;
    Skin1:                    string;
    Material1:                string;
    IsSkin1:                  number | null;
    Mask1:                    string;
    Skin2:                    string;
    Material2:                string;
    IsSkin2:                  number | null;
    Mask2:                    string;
    "Left/On":                LeftOn;
    "Right/Off":              RightOff;
    ForceShortsleeves:        number | null;
    ShortsleeveChestSkin:     string;
    ForceHideForearms:        number | null;
    HandsNoForearmsSkin:      string;
    AttachmentOffsets:        string;
    LeftHandOnlySkin:         string;
    RightHandOnlySkin:        string;
    LeftSleeveOnlyChestSkin:  string;
    RightSleeveOnlyChestSkin: string;
    AppearanceCDF:            string;
    RDyeSlotDisabled:         string;
    GDyeSlotDisabled:         string;
    BDyeSlotDisabled:         string;
    ADyeSlotDisabled:         string;
    IconPath:                 string;
    HiResIconPath:            string;
    IconCaptureGroup:         ArmorAppearanceDefinitionIconCaptureGroup;
}

export type Gender = "Male" | "" | "Female";

export type HairChop = "HELMBACK" | "NONE" | "BRIM" | "HELMFRONT" | "NO_HAT" | "" | "NO_HELM" | "HOOD";

export type ArmorAppearanceDefinitionIconCaptureGroup = "Head" | "Chest" | "" | "Arms" | "Legs" | "Feet";

export type ArmorAppearanceDefinitionItemClass = "EquippableHead+Armor+Heavy" | "EquippableChest+Armor+Heavy" | "" | "EquippableHands+Armor+Heavy" | "EquippableLegs+Armor+Heavy" | "EquippableFeet+Armor+Heavy" | "EquippableHead+Armor+Light" | "EquippableChest+Armor+Light" | "EquippableHands+Armor+Light" | "EquippableLegs+Armor+Light" | "EquippableFeet+Armor+Light" | "EquippableHead+Armor+Medium" | "EquippableChest+Armor+Medium" | "EquippableHands+Armor+Medium" | "EquippableLegs+Armor+Medium" | "EquippableFeet+Armor+Medium" | "EquippableChest" | "EquippableHead" | "EquippableLegs" | "EquippableFeet" | "EquippableHands" | "EquippableHead+Armor+Light+Named" | "EquippableChest+Armor+Heavy+Named" | "EquippableChest+Armor+Light+Named" | "EquippableChest+Armor+Medium+Named" | "EquippableHead+Armor+Heavy+Named" | "EquippableLegs+Armor+Heavy+Named" | "EquippableFeet+Armor+Heavy+Named" | "EquippableHands+Armor+Heavy+Named" | "EquippableLegs+Armor+Light+Named" | "EquippableFeet+Armor+Light+Named" | "EquippableHands+Armor+Light+Named" | "EquippableLegs+Armor+Medium+Named" | "EquippableFeet+Armor+Medium+Named" | "EquippableHead+Armor+Medium+Named" | "EquippableHands+Armor+Medium+Named" | "EquippableChest+Heavy" | "EquippableHead+Heavy" | "EquippableLegs+Heavy" | "EquippableFeet+Heavy" | "EquippableHands+Heavy";

export type LeftOn = "" | "FLY_MetalLight_Arm_L" | "FLY_ClothLight_Leg_L" | "FLY_MetalLight_Leg_L" | "Enable_MetalLight_VoiceFX" | "FLY_MetalMed_Arm_L" | "FLY_MetalMed_Leg_L" | "FLY_MetalMedArm_L" | "FLY_ClothLight_Arm_L" | "FLY_LeatherLight_Arm_L" | "FLY_LeatherLight_Leg_L";

export type ArmorAppearanceDefinitionMaskBColor = "#b8b8b8" | "#000000" | "#0b1721" | "#524a42" | "#1a1a1a" | "" | "#b8b8b9" | "#b8b8b10" | "#b8b8b11" | "#b8b8b12" | "#0c0c0c" | "#4F5270" | "#8f4e11" | "#b67f58" | "#4893ba" | "#9d0000" | "#d4d4ee" | "#54ffff" | "#0aedda" | "#849b6c" | "#b3b3b3" | "#cc815b" | "#a14cd2" | "#5f0006" | "#A4A3A3" | "#895B30" | "#656565" | "#656566" | "#656567" | "#656568" | "#656569" | "#656570" | "#656571" | "#656572" | "#d3bfda" | "#aeaeae" | "#4F5263" | "#3C363A" | "#5e562f" | "#67534a" | "#6c40c3" | "#c8cac0" | "#08cfbf" | "#53235d" | "#948968" | "#7443a0" | "#6495f9" | "#371b6f" | "#796546" | "#c38d75" | "#00e6ff" | "#8b8d8c" | "#868686" | "#97b2ca" | "#eacd89" | "#ba9780" | "#4d4167" | "#4c462c" | "#5F0006";

export type ArmorAppearanceDefinitionMaskGColor = "#b8b8b8" | "#000000" | "#360000" | "#6e5217" | "#ffffff" | "#0d330b" | "" | "#b8b8b9" | "#b8b8b10" | "#b8b8b11" | "#b8b8b12" | "#877965" | "#030303" | "#939ca4" | "#afb645" | "#00acdb" | "#ae0000" | "#9377b9" | "#80eeb7" | "#c327ce" | "#A3A7AC" | "#a35e00" | "#2fcce4" | "#1788a4" | "#b49a9a" | "#999999" | "#b0924c" | "#688bac" | "#ffce3b" | "#687C83" | "#C16675" | "#858d5e" | "#87a197" | "#86919c" | "#873333" | "#64876e" | "#55007f" | "#95b61d" | "#697d7f" | "#332730" | "#78e0cb" | "#3a085a" | "#5e3466" | "#7d9388" | "#00ff55" | "#8c828b" | "#90a18e" | "#850000" | "#bfb4a2" | "#daafdd" | "#826858" | "#4d4167" | "#680a0a" | "#3d4f89" | "#B49A9A";

export type ArmorAppearanceDefinitionMaskRColor = "#b8b8b8" | "#a69b90" | "#1e3945" | "#6e5217" | "" | "#b8b8b9" | "#b8b8b10" | "#b8b8b11" | "#b8b8b12" | "#2b2925" | "#000000" | "#878787" | "#808096" | "#998d48" | "#007400" | "#996c29" | "#860000" | "#1278a3" | "#1bc7c2" | "#26acca" | "#4b5f8e" | "#540000" | "#a38c76" | "#71538b" | "#2a1a18" | "#252525" | "#532311" | "#00710d" | "#77568e" | "#ca5a19" | "#ca5a20" | "#ca5a21" | "#ca5a22" | "#ca5a23" | "#ca5a24" | "#ca5a25" | "#ca5a26" | "#FFC800" | "#B7B9A4" | "#3B3B3B" | "#E0C260" | "#A6DCE8" | "#BAA66B" | "#424637" | "#6f5a43" | "#9b7d72" | "#82737b" | "#27aabf" | "#514d55" | "#3d393a" | "#eed49d" | "#8b7a6a" | "#791618" | "#6c6f46" | "#ff0004" | "#916e91" | "#736862" | "#c7f1f4" | "#f6d7b6" | "#583b87" | "#68540e" | "#2A1A18" | "#ffff00";

export type ArmorAppearanceDefinitionName = "" | "@HistoricMedDarkHorns_chest_TransmogName" | "@HistoricMedDarkHorns_head_TransmogName" | "@HistoricMedDarkHorns_legs_TransmogName" | "@HistoricMedDarkHorns_feet_TransmogName" | "@HistoricMedDarkHorns_gloves_TransmogName" | "@HistoricMedHounskull_chest_TransmogName" | "@HistoricMedHounskull_head_TransmogName" | "@HistoricMedHounskull_legs_TransmogName" | "@HistoricMedHounskull_feet_TransmogName" | "@HistoricMedHounskull_gloves_TransmogName" | "@HistoricMedDragonWings_chest_TransmogName" | "@HistoricMedDragonWings_head_TransmogName" | "@HistoricMedDragonWings_legs_TransmogName" | "@HistoricMedDragonWings_feet_TransmogName" | "@HistoricMedDragonWings_gloves_TransmogName" | "@HistoricMedDragonWingsDirty_chest_TransmogName" | "@HistoricMedDragonWingsDirty_head_TransmogName" | "@HistoricMedDragonWingsDirty_legs_TransmogName" | "@HistoricMedDragonWingsDirty_feet_TransmogName" | "@HistoricMedDragonWingsDirty_gloves_TransmogName";

export type RightOff = "" | "FLY_MetalLight_Arm_R" | "FLY_ClothLight_Leg_R" | "FLY_MetalLight_Leg_R" | "Disable_MetalLight_VoiceFX" | "FLY_MetalMed_Arm_R" | "FLY_MetalMed_Leg_R" | "FLY_MetalMedt_Arm_R" | "FLY_ClothLight_Arm_R" | "FLY_LeatherLight_Arm_R" | "FLY_LeatherLight_Leg_R";

export type ArmorItemDefinitions = {
    WeaponID:                     string;
    Grit:                         number | null;
    PhysicalArmorSetScaleFactor:  number | null;
    ElementalArmorSetScaleFactor: number | null;
    ArmorRatingScaleFactor:       number | null;
    WeightOverride:               number | null;
    Encumbrance:                  number | null;
    EncumbrancePerGS:             number | null;
    WeightClass:                  AttackType;
    EquipLoad:                    string;
    MaxHealthMod:                 string;
    HealthRate:                   string;
    MaxStaminaMod:                string;
    StaminaRate:                  string;
    MaxManaMod:                   string;
    ManaRate:                     string;
    MaxFoodMod:                   string;
    FoodBurn:                     string;
    MaxDrinkMod:                  string;
    DrinkBurn:                    string;
    BONLogging:                   string;
    BONMining:                    string;
    BONSkinning:                  string;
    BONHarvesting:                string;
    EFFLogging:                   string;
    EFFMining:                    string;
    EFFSkinning:                  string;
    EFFHarvesting:                string;
    ROLLogging:                   string;
    ROLMining:                    string;
    ROLSkinning:                  string;
    ROLHarvesting:                string;
    ROLAlchemy:                   string;
    ROLBlacksmithing:             string;
    ROLEngineering:               string;
    ROLOutfitting:                string;
    ROLProvisioning:              string;
    ROLCamping:                   string;
    DEFStandard:                  number | null;
    DEFSiege:                     number | null;
    DEFStrike:                    number | null;
    DEFSlash:                     number | null;
    DEFThrust:                    number | null;
    DEFMagic:                     number | null;
    DEFFire:                      number | null;
    DEFLightning:                 number | null;
    DEFCorruption:                number | null;
    ABSStandard:                  number | null;
    ABSSiege:                     number | null;
    ABSStrike:                    number | null;
    ABSSlash:                     number | null;
    ABSThrust:                    number | null;
    ABSMagic:                     number | null;
    ABSFire:                      number | null;
    ABSLightning:                 number | null;
    ABSCorruption:                number | null;
    RESPoison:                    number | null;
    RESDisease:                   number | null;
    RESBleed:                     number | null;
    RESFrostbite:                 number | null;
    RESCurse:                     number | null;
    BLAStandard:                  string;
    BLASiege:                     string;
    BLAStrike:                    string;
    BLASlash:                     string;
    BLAThrust:                    string;
    BLAMagic:                     string;
    BLAFire:                      string;
    BLALightning:                 string;
    BLACorruption:                string;
    ABAPoison:                    string;
    ABADisease:                   string;
    ABABleed:                     string;
    ABAFrostbite:                 string;
    ABACurse:                     string;
    DMGStandard:                  string;
    DMGSiege:                     string;
    DMGStrike:                    string;
    DMGSlash:                     string;
    DMGThrust:                    string;
    DMGMagic:                     string;
    DMGFire:                      string;
    DMGLightning:                 string;
    DMGCorruption:                string;
    DMGVitalsCategory:            string;
    AFAPoison:                    string;
    AFADisease:                   string;
    AFABleed:                     string;
    AFAFrostbite:                 string;
    AFACurse:                     string;
}

export type AttackTypes = {
    TypeID:   string;
    IntID:    number;
    Category: string;
}

export type AttributeDefinition = {
    Level:             number;
    Health:            number;
    HealthRate:        number;
    Stamina:           number;
    StaminaRate:       number;
    Mana:              number;
    ManaRate:          number;
    CastSpeed:         number;
    EquipLoad:         number;
    NumAttuneSlots:    number;
    Encumbrance:       number;
    AbsFalling:        number;
    DefStandard:       number;
    DefSlash:          number;
    DefThrust:         number;
    DefStrike:         number;
    DefMagic:          number;
    DefFire:           number;
    DefLightning:      number;
    DefCorruption:     number;
    ResFrostbite:      number;
    ResPoison:         number;
    ResBleed:          number;
    ResDisease:        number;
    ResCurse:          number;
    ModifierValue?:    number | null;
    ModifierValueSum?: number | null;
    EquipAbilities?:   EquipAbilities;
    AttbIncrease?:     number | null;
    ScalingValue?:     number;
    CDR?:              number;
    HealScaling?:      number;
}

export type EquipAbilities = "" | "Con_Bonus_50_1,Con_Bonus_50_2" | "Con_Bonus_100_1,Con_Bonus_100_2" | "Con_Bonus_150_1,Con_Bonus_150_2" | "Con_Bonus_200_1,Con_Bonus_200_2" | "Con_Bonus_250_1,Con_Bonus_250_2" | "Con_Bonus_300_1,Con_Bonus_300_2" | "Dex_Bonus_50_1,Dex_Bonus_50_2" | "Dex_Bonus_100_1,Dex_Bonus_100_2" | "Dex_Bonus_150_1,Dex_Bonus_150_2" | "Dex_Bonus_200_1,Dex_Bonus_200_2" | "Dex_Bonus_250_1,Dex_Bonus_250_2" | "Dex_Bonus_300_1,Dex_Bonus_300_2" | "Foc_Bonus_50_1,Foc_Bonus_50_2" | "Foc_Bonus_100_1,Foc_Bonus_100_2" | "Foc_Bonus_150_1,Foc_Bonus_150_2" | "Foc_Bonus_200_1,Foc_Bonus_200_2" | "Foc_Bonus_250_1,Foc_Bonus_250_2" | "Foc_Bonus_300_1,Foc_Bonus_300_2" | "Int_Bonus_50_1,Int_Bonus_50_2" | "Int_Bonus_100_1,Int_Bonus_100_2" | "Int_Bonus_150_1,Int_Bonus_150_2" | "Int_Bonus_200_1,Int_Bonus_200_2" | "Int_Bonus_250_1,Int_Bonus_250_2" | "Int_Bonus_300_1,Int_Bonus_300_2" | "Str_Bonus_50_1,Str_Bonus_50_2" | "Str_Bonus_100_1,Str_Bonus_100_2" | "Str_Bonus_150_1,Str_Bonus_150_2" | "Str_Bonus_200_1,Str_Bonus_200_2" | "Str_Bonus_250_1,Str_Bonus_250_2" | "Str_Bonus_300_1,Str_Bonus_300_2";

export type BackstoryDefinition = {
    BackstoryID:                string;
    BackstoryName:              string;
    "ReleaseVersion ":          ReleaseVersion;
    BackstoryText:              BackstoryText;
    LevelOverride:              number | null;
    PlaytestType:               ExcludeFromGameModes;
    FactionOverride:            Faction;
    Constitution:               number | null;
    Focus:                      number | null;
    Strength:                   number | null;
    Dexterity:                  number | null;
    Intelligence:               number | null;
    Weaponsmithing:             number | null;
    Armoring:                   number | null;
    Jewelcrafting:              number | null;
    Arcana:                     number | null;
    Cooking:                    number | null;
    Furnishing:                 number | null;
    Engineering:                number | null;
    Smelting:                   number | null;
    Woodworking:                number | null;
    Leatherworking:             number | null;
    Weaving:                    number | null;
    Stonecutting:               number | null;
    Skinning:                   number | null;
    Mining:                     number | null;
    Logging:                    number | null;
    Harvesting:                 number | null;
    AzothStaff:                 number | null;
    LootTableIndex:             number | null;
    Currency:                   number | null;
    RepairParts:                number | null;
    Azoth:                      number | null;
    FactionReputation:          number | null;
    FactionTokens:              number | null;
    CampUnlockTier:             number | null;
    PvPFlag:                    boolean | null;
    ConversationUnlockOverride: ConversationUnlockOverride;
    ObjectiveUnlockOverride:    string;
    AchievementUnlockOverride:  string;
    OutpostRushMinMMROverride:  number | null;
    OutpostRushMaxMMROverride:  number | null;
    WeaponMasteries:            string;
    CategoricalProgression:     string;
    RespawnPointTerritories:    RespawnPointTerritories;
    AddToLoadouts:              boolean | null;
    InventoryItem:              string;
}

export type BackstoryText = "Lorem Ipsum" | "";

export type ConversationUnlockOverride = "" | "0909_08_Adjudicator" | "0907_08_Commander" | "0908_08_Alchemist" | "0602_05_magistrate" | "9901_01_MSQ_Yonas" | "0511_03_Stranger";

export type Faction = "" | "Faction1" | "Faction2" | "Faction3" | "Any";

export type ReleaseVersion = "" | "Weapon_GreatSword" | "Feature_Heartgems" | "Feature_Heartgems_BileBomb" | "Feature_Heartgems_FireStorm" | "Feature_MusicalPerformances" | "Season_1_Perm" | "Feature_Runeglass" | "Quest_MSQ2_Brightwood" | "Quest_MSQ2_WeaversFen" | "Event_SpringtideBloom_Perm";

export type RespawnPointTerritories = "" | "2,3,4,5,6,7,8,9,10,11,12,13,14,15,16" | "2,3,4,5,6,7,8,9,10,11,12,13,14,15" | "2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17" | "2,3,4,5,6,7,8,9,10,11,12,13,14,15.16";

export type BeamData = {
    BeamID:                            string;
    StartDelayMS:                      number;
    BeamAttackAimMode:                 string;
    BeamEffectName:                    string;
    SourceEffectName:                  string;
    DestinationEffectName:             string;
    KillBeamEffectOnDeactivate:        boolean;
    KillSourceEffectOnDeactivate:      boolean;
    KillDestinationEffectOnDeactivate: boolean;
    InterpolationSmoothTimeSeconds:    number;
    MaxLength:                         number;
    Radius:                            number;
    BeamSpeed:                         number;
    CirclePatternPitchSpawnAngle:      number;
    CirclePatternYawSpawnAngle:        number;
    DealDamageOnHit:                   boolean;
    DisablePhysics:                    boolean;
    DamageDataTable:                   string;
    DamageDataTableEntry:              string;
    BaseDamage:                        number;
    DamageRate:                        number;
    Affliction:                        string;
    AfflictionValue:                   number;
    BlockStaminaDamage:                number;
    ForcePvPFlag:                      boolean;
    DamageGuildAndGroup:               boolean;
    InheritVitalsBaseDamage:           boolean;
    InheritSourceBaseDamage:           boolean;
    InheritSourceDamageTableRow:       boolean;
    InheritSourceAmmoId:               boolean;
    DoNotKillDoNotKillOnDeathsDoor:    boolean;
    CollisionFilter:                   string;
    LineStartPointOffset:              string;
    LineDestinationPointOffset:        string;
    UseBone:                           boolean;
    BoneName:                          string;
    BonePositionOffset:                string;
    BoneRotationOffset:                string;
    UseBoneDestination:                boolean;
    DestinationBoneName:               string;
    UsePaperdollDestination:           boolean;
    PaperdollSlot:                     string;
    DestinationBonePosOffset:          string;
    IgnoresTriggerBasedToggles:        boolean;
}

export type BlueprintItemDefinitions = {
    BlueprintID:               string;
    Name:                      string;
    DisplayClass:              string;
    AttachmentCategories:      AttachmentCategories;
    UseReducedBuildModeUI:     number;
    IsCamp:                    boolean | null;
    IsDeployable:              number | null;
    IsSiegeWeapon:             number | null;
    TradeskillLevel:           number | null;
    WarPoints:                 number | null;
    HP:                        number | null;
    FuelCost:                  number | null;
    FuelResource:              FuelResource;
    ResourceCost:              number | null;
    DeteriorationTick:         number | null;
    DeteriorationPercent:      number | null;
    AlwaysDeteriorate:         boolean | null;
    StructureHeightTag:        StructureHeightTag;
    StructureSize:             StructureSize;
    CreationGameEventID:       CreationGameEventID;
    ContributionGameEventID:   ContributionGameEventID;
    CompletionNotificationId:  CompletionNotificationID;
    BuildingTime:              number | null;
    StructureCost_Ingredient1: string;
    StructureCost_Ingredient2: string;
    StructureCost_Ingredient3: StructureCostIngredient3;
    StructureCost_Ingredient4: string;
    StructureCost_Qty1:        number | null;
    StructureCost_Qty2:        number | null;
    StructureCost_Qty3:        number | null;
    StructureCost_Qty4:        string;
    DEFStandard:               string;
    DEFSiege:                  string;
    DEFStrike:                 string;
    DEFSlash:                  string;
    DEFThrust:                 string;
    DEFMagic:                  string;
    DEFFire:                   string;
    DEFLightning:              string;
    DEFCorruption:             string;
    ABSStandard:               number | null;
    ABSSiege:                  number | null;
    ABSStrike:                 number | null;
    ABSSlash:                  number | null;
    ABSThrust:                 number | null;
    ABSMagic:                  number | null;
    ABSFire:                   number | null;
    ABSLightning:              number | null;
    ABSCorruption:             number | null;
    RESPoison:                 string;
    RESDisease:                string;
    RESBleed:                  string;
    RESFrostbite:              string;
    RESCurse:                  string;
    BLAStandard:               string;
    BLASiege:                  string;
    BLAStrike:                 string;
    BLASlash:                  string;
    BLAThrust:                 string;
    BLAMagic:                  string;
    BLAFire:                   string;
    BLALightning:              string;
    BLACorruption:             string;
    ABAPoison:                 string;
    ABADisease:                string;
    ABABleed:                  string;
    ABAFrostbite:              string;
    ABACurse:                  string;
    WKNStandard:               string;
    WKNSiege:                  number | null;
    WKNStrike:                 string;
    WKNSlash:                  string;
    WKNThrust:                 string;
    WKNMagic:                  string;
    WKNFire:                   string;
    WKNLightning:              string;
    WKNCorruption:             string;
    DMGStandard:               string;
    DMGSiege:                  number | null;
    DMGStrike:                 string;
    DMGSlash:                  string;
    DMGThrust:                 string;
    DMGMagic:                  string;
    DMGFire:                   string;
    DMGLightning:              string;
    DMGCorruption:             string;
    AFAPoison:                 string;
    AFADisease:                string;
    AFABleed:                  string;
    AFAFrostbite:              string;
    AFACurse:                  string;
    DisableMantle:             number | null;
    DisableStepUp:             number | null;
    DisableVaulting:           number | null;
    PrivilegeID:               PrivilegeID;
    PlacementGroundCastFilter: PlacementGroundCastFilter;
}

export type AttachmentCategories = "" | "Farm" | "AbandonedMine" | "TropicalCave" | "Shipwreck" | "farm" | "shipwreck" | "ancient_lighthouse" | "lookout" | "wolf_den" | "haunted_village" | "Lumbermill" | "Damned" | "GlowingSwamp" | "Mosquitoes" | "Brightwoods" | "Campground";

export type CompletionNotificationID = "Complete_Territory_Marker" | "" | "Place_Camp";

export type ContributionGameEventID = "" | "BuidingContribute1" | "BuidingContribute2" | "BuidingContribute3" | "BuidingContribute4" | "BuidingContribute5";

export type CreationGameEventID = "" | "BuildingFinish1" | "BuildingFinish2" | "BuildingFinish3" | "BuildingFinish4" | "BuildingFinish5" | "MakeCamp";

export type FuelResource = "AzureT1" | "";

export type PlacementGroundCastFilter = "" | "PlayerGroundCheck";

export type PrivilegeID = "" | "Farm_PlantSeed";

export type StructureCostIngredient3 = "" | "AnimusT3" | "CompostT2";

export type StructureHeightTag = "Low" | "Mid" | "High" | "";

export type StructureSize = "Small" | "Medium" | "Large" | "" | "Large_short" | "WH_Hit_L1" | "WH_Hit_L2" | "Small " | "WH_Hit_L4" | "WH_Hit_L3" | "Large_long" | "Invalid" | "None";

export type BuffBucketData = {
    BuffBucketId: string;
    TableType:    TableType;
    MaxRoll:      number | null;
    Buff1:        string;
    BuffType1:    BuffType;
    BuffPotency1: number | null;
    Buff2:        string;
    BuffType2:    BuffType;
    BuffPotency2: number | null;
    Buff3:        string;
    BuffType3:    BuffType;
    BuffPotency3: number | null;
    Buff4:        string;
    BuffType4:    BuffType;
    BuffPotency4: number | null;
    Buff5:        string;
    BuffType5:    BuffType;
    BuffPotency5: number | null;
    Buff6:        string;
    BuffType6:    BuffType;
    BuffPotency6: number | null;
}

export type BuffType = "StatusEffect" | "" | "BuffBucket" | "Ability" | "Promotion";

export type TableType = "AND" | "" | "OR";

export type CameraShakeData = {
    CameraShakeID:   string;
    ShakeShiftX:     number;
    ShakeShiftY:     number;
    ShakeShiftZ:     number;
    ShakeAngleX:     number;
    ShakeAngleY:     number;
    ShakeAngleZ:     number;
    SustainDuration: number;
    FadeInDuration:  number;
    FadeOutDuration: number;
    Frequency:       number;
    Randomness:      number;
    ShakeChannel:    number;
    FlipVec:         number;
    UpdateOnly:      number;
    Permanent:       number;
    IsSmooth:        number;
}

export type CampSkinData = {
    CampSkinID:            string;
    ItemId:                string;
    RequiredAchievementId: EdAchievementID;
    IsEntitlement:         boolean;
    IsEnabled:             boolean;
}

export type EdAchievementID = "CampSkin_Unlock_CampSkin_Winter01_A" | "";

export type CategoricalProgressionData = {
    CategoricalProgressionId: string;
    DisplayName:              string;
    MaxLevel:                 number;
    AutoRankUp:               boolean;
    InfiniteLevels:           boolean;
    RepeatMaxLevel:           boolean;
    AllowOverflow:            boolean | null;
    RankTableId:              string;
    ProgressionPointPool:     string;
    PreSkillCapSkill:         GatheringTradeskill;
    PostSkillCapSkill:        string;
    EconomyTrackerType:       EconomyTrackerType;
    GameEventId:              string;
    AchievementIdOnMaxRank:   AchievementIDOnMaxRank;
    MinTrackedLevel:          number | null;
    ShowAsObjectiveReward:    boolean | null;
    IconPath:                 string;
    UsesGlobalProgressionMod: boolean | null;
    ItemClass:                string;
    DisplayDescription:       DisplayDescription;
    EventId:                  EventID;
}

export type AchievementIDOnMaxRank = "" | "fish_hotspot_40030_charted";

export type DisplayDescription = "" | "@ui_unlock_camping_tooltip" | "@owg_faction_unlock_tooltip" | "@ui_event_reputation_description" | "Season 1";

export type EconomyTrackerType = "" | "AzothGenerated";

export type EventID = "" | "WinterConvergence" | "RefinedResources" | "ResourceDowngrade" | "CutStone" | "GypsumRefining" | "GypsumCasting" | "FlameCoreCasting" | "MaterialConversion" | "CutGems" | "FuseGems" | "Components" | "CorruptedRefining" | "Keys" | "Trinkets" | "TimelessShardsStr" | "TimelessShardsDex" | "TimelessShardsInt" | "TimelessShardsFoc" | "TimelessShardsCon" | "Scarab" | "Consumables" | "Weapons" | "DungeonNamedReplicas" | "DungeonReplicas" | "Tools" | "Ammo" | "Armor" | "Bags" | "Faction" | "MagicStaves" | "Concoctions" | "ArcanaRefining" | "BasicCooking" | "Foods" | "Dyes" | "Furniture" | "Instruments" | "CraftingQuestRecipe" | "NightveilHallow" | "SummerMedleyfaire" | "SpringtideBloom" | "Pattern" | "Salvage" | "SalvageCreate" | "TerritoryContribution" | "Glasswares" | "RuneglassFamily";

export type CategoricalProgressionRankData = {
    Rank:                         number;
    DisplayName?:                 string;
    MaximumInfluence:             number;
    RequiredLevel?:               number | string;
    InfluenceCost:                number | null | string;
    CurrencyCost?:                number | string;
    SanityCheck:                  boolean | null | string;
    GameEventId?:                 string;
    AvailableProgressionPoint1?:  AvailableProgressionPoint;
    AvailableProgressionPoint2?:  AvailableProgressionPoint2;
    AvailableProgressionPoint3?:  AvailableProgressionPoint;
    AvailableProgressionPoint4?:  AvailableProgressionPoint4;
    AzothCost?:                   number | string;
    MinMissionCountPVE?:          number | null;
    MaxMissionCountPVE?:          number | null;
    MinMissionCountPvP?:          number | null;
    MaxMissionCountPvP?:          number | null;
    EntitlementId?:               number | null | string;
    XpReward?:                    number | null;
    AdditionalProgressionPoints?: number;
    AzothRespecCost?:             number;
}

export type AvailableProgressionPoint = "" | "TB_GainStanding" | "TB_TaxStations" | "TB_TaxTradingPost" | "TB_GainXP" | "TB_TaxProperty" | "TB_GainStorage" | "TB_GainGatherRate";

export type AvailableProgressionPoint2 = "" | "TB_GainXP" | "TB_TaxTradingPost" | "TB_TaxStations" | "TB_GainFactionRep" | "TB_GainHousePoints" | "TB_GainStorage";

export type AvailableProgressionPoint4 = "" | "TB_PurchaseHouse";

export type CinematicVideoStaticData = {
    CinematicVideoId:       string;
    VideoPath:              string;
    Name:                   string;
    ReqAchievementId:       string;
    OnWatchedAchievementId: string;
    DurationInSec:          number;
    Description:            string;
    Subtitle:               string;
    Comment:                string;
}

export type CollectibleStaticData = {
    CollectibleId: string;
    DisplayName:   string;
    CategoricalId: string;
    Icon:          string;
    Description:   string;
    TerritoryId:   number;
}

export type CombatTextSettings = {
    ValueID: string;
    Value:   string;
}

export type ConsumableItemDefinitions = {
    ConsumableID:                 string;
    AddStatusEffects:             string;
    StatusEffectMod:              number | null;
    DurationOverrides:            number | null;
    MinDurationModifier:          number | null;
    MaxDurationModifier:          number | null;
    DurationScaleFactor:          number | null;
    MinPotencyModifier:           number | null;
    MaxPotencyModifier:           number | null;
    PotencyScaleFactor:           number | null;
    RemoveStatusEffects:          string;
    RemoveStatusEffectCategories: string;
    DisplayStatusEffect:          string;
    UseCount:                     number | null;
    WeaponUseCount:               string;
    DisableUseInCombat:           boolean | null;
    AfflictionDamage:             string;
    BaseDamageModifier:           string;
    BaseDamageType:               string;
    DamageType:                   string;
    Damage:                       string;
    DMGVitalsCategory:            string;
    OnUseAffliction:              string;
    StatMultipliers:              string;
    RequiredItemClass:            string;
    MannequinTag:                 ConsumableItemDefinitionMannequinTag;
    EquipAbility:                 string;
    CooldownDuration:             number | null;
    CooldownId:                   CooldownID;
}

export type CooldownID = "" | "PotionHealth" | "PotionMana" | "PotionRegen" | "PotionCleanse" | "PotionHaste" | "AbsorbBoost" | "Gypsum" | "HuntersVision" | "PotionEndurance" | "AcidCurse";

export type ConsumableItemDefinitionMannequinTag = "Drink" | "Eat" | "Potion" | "WeaponOil" | "Bandage" | "Call" | "" | "Boost";

export type ContributionData = {
    ContributionId: string;
    Category:       CardIDEnum;
    Value:          number;
    Shared:         boolean;
    Expires:        boolean;
}

export type CardIDEnum = "default" | "interaction" | "Default";

export type ConversationStateData = {
    ConversationStateId:         string;
    ConversationType:            ConversationType;
    IsInitialState:              boolean;
    DefaultDialogue:             string;
    RequiredFaction:             RequiredFaction;
    RequiredProgression?:        RequiredProgression;
    RequiredLevel:               number | null | string;
    RequiredAchievement:         string;
    RequiredActiveObjectiveId:   string;
    RequiredActiveTaskId:        string;
    LinearObjectiveId1:          string;
    LinearObjectiveId2:          LinearObjectiveId2;
    LinearObjectiveId3:          LinearObjectiveId3;
    LinearObjectiveId4:          LinearObjectiveId4;
    LinearObjectiveId5:          string;
    LinearObjectiveId6:          string;
    LinearObjectiveId7:          string;
    LinearObjectiveId8:          string;
    LinearObjectiveId9:          string;
    LinearObjectiveId10:         string;
    TopicId1?:                   string;
    TopicId2?:                   TopicId2;
    TopicId3?:                   TopicId3;
    TopicId4?:                   string;
    TopicId5?:                   string;
    TopicId6?:                   string;
    TopicId7?:                   string;
    TopicId8?:                   string;
    TopicId9?:                   string;
    TopicId10?:                  string;
    ConversationService1?:       ConversationService1;
    ConversationService2?:       ConversationService2;
    ConversationService3?:       string;
    Comments?:                   string;
    ShowTopics?:                 boolean;
    RequiredCompletedObjective?: RequiredCompletedObjective;
    RequiredFactionCooldown?:    RequiredFactionCooldown;
    Comment?:                    string;
}

export type ConversationService1 = "" | "Faction_Board" | "Inn" | "Join_Outpost_Rush" | "Join_3v3_Arena" | "Faction_Selection";

export type ConversationService2 = "" | "Join_Outpost_Rush" | "PvP_Guide";

export type ConversationType = "Linear_Objective" | "Conversation";

export type LinearObjectiveId2 = "" | "0699_0101_Barkimedes" | "0713_0101_explorerift" | "0718_0102_humble" | "0719_0101_reflectionsmountainheart" | "1005_0102_lightning_test" | "1010_0102_eternal_mixes";

export type LinearObjectiveId3 = "" | "0699_0102_Barkimedes2" | "0718_0101_guardian" | "0719_0201_madakisstratagem";

export type LinearObjectiveId4 = "" | "0718_0103_ultimatedefense";

export type RequiredCompletedObjective = "" | "7404_0101_devworldredkillwitheredquest" | "7504_0101_devworldbluekillwolfquest";

export type RequiredFaction = "" | "Marauder" | "Syndicate" | "Covenant" | "Any" | "Battle_Token" | "EventProgress" | "SummerEventProgress" | "HalloweenEventProgress" | "SpringEventProgress";

export type RequiredFactionCooldown = "" | "InCooldownMultipleDays" | "InCooldownSingleDay";

export type RequiredProgression = "" | "GreatAxeAbilityTable 9 0" | "LifeMagicAbilityTable 9 0" | "Syndicate 0 3000" | "Covenant 0 3000" | "Covenant 2 26000" | "WarHammerAbilityTable 19 0" | "FireMagicAbilityTable 19 0" | "LifeMagicAbilityTable 19 0" | "HatchetAbilityTable 19 0" | "IceMagicAbilityTable 19 0" | "VoidGauntletAbilityTable 19 0" | "Syndicate 3 49000" | "Covenant 3 49000" | "RapierAbilityTable 19 0" | "SpearAbilityTable 19 0" | "SwordAbilityTable 19 0" | "Marauder 3 49000" | "BlunderbussAbilityTable 19 0" | "SwordAbilityTable 9 0" | "Marauder 0 3000" | "Syndicate 2 26000" | "Marauder 1 11000" | "Syndicate 1 11000" | "Covenant 1 11000" | "FireMagicAbilityTable 9 0" | "BowAbilityTable 9 0" | "MusketAbilityTable 19 0" | "BowAbilityTable 19 0" | "Marauder 2 26000";

export type TopicId2 = "" | "0428_Jones_Tips" | "Dungeon_CutlassKeys00_Scalleywag_02" | "Topic_95_s01_10_TalkTo_Skye_WrapJoke" | "Topic_99B_MorgenGrave_beauty_correct" | "Topic_99B_MorgenGrave_beauty_incorrect";

export type TopicId3 = "" | "0428_Jones_House" | "Dungeon_CutlassKeys00_Scalleywag_03" | "Topic_95_s01_10_TalkTo_Skye_WrapFlirt" | "Topic_99B_MorgenGrave_hunter_incorrect" | "Topic_99B_MorgenGrave_hunter_correct";

export type ConversationTopicData = {
    ConversationTopicId:  string;
    PlayerPrompt:         string;
    NPCResponse:          string;
    AchievementUnlock:    string;
    RequiredAchievement?: string;
    RequiredFaction?:     RequiredFaction;
    RequiredLevel?:       number | null | string;
    ProvidedTopics?:      string;
}

export type CooldownsPlayer = {
    ID:        number;
    AbilityID: string;
    Time:      number;
    WeaponTag: WeaponTag;
}

export type CraftingCategoryData = {
    CategoryID:  string;
    ImagePath:   string;
    DisplayText: string;
    Description: string;
}

export type CraftingRecipeData = {
    RecipeID:                            string;
    FirstCraftAchievementId:             string;
    RecipeNameOverride:                  string;
    CraftingCategory:                    EventID;
    CraftingGroup:                       string;
    AdditionalFilterText:                string;
    RecipeTags:                          RecipeTags;
    DisplayIngredients:                  string;
    bKnownByDefault:                     boolean | null;
    bListedByDefault:                    boolean | null;
    CraftAll:                            boolean | null;
    IsRefining:                          boolean | null;
    IsProcedural:                        boolean | null;
    MaxPerkItemsAllowed:                 number | null;
    PerkItemsBucketPush:                 boolean | null;
    ExpertiseBumpChanceOverride:         number | null;
    IsExpertiseBasedGS:                  boolean | null;
    HWMProgressionID:                    string;
    IsTemporary:                         boolean | null;
    CraftingFee:                         number | null;
    UseCraftingTax:                      number | null;
    Tradeskill:                          GatheringTradeskill;
    RecipeLevel:                         number | null;
    StationType1:                        StationType1;
    StationType2:                        StationType2;
    StationType3:                        string;
    StationType4:                        string;
    CraftingTime:                        number | null;
    OutputQty:                           number | null;
    ItemID:                              string;
    SkipGrantItems:                      boolean | null;
    SkipGrantItemsDesc:                  SkipGrantItemsDesc;
    SkipGrantItemsTitle:                 SkipGrantItemsTitle;
    SkipGrantItemsBody:                  SkipGrantItemsBody;
    BaseGearScore:                       number | null;
    BaseTier:                            number | null;
    ProceduralTierID1:                   ProceduralTierId1;
    ProceduralTierID2:                   string;
    ProceduralTierID3:                   string;
    ProceduralTierID4:                   string;
    ProceduralTierID5:                   string;
    RequiredAchievementID:               string;
    UnlockedAchievementID:               EdAchievementID;
    UnlockedAchievementBlocksRecrafting: boolean | null;
    Ingredient1:                         string;
    Type1:                               Type1Enum;
    Ingredient2:                         string;
    Type2:                               Type1Enum;
    Ingredient3:                         string;
    Type3:                               Type1Enum;
    Ingredient4:                         string;
    Type4:                               Type1Enum;
    Ingredient5:                         string;
    Type5:                               Type1Enum;
    Ingredient6:                         string;
    Type6:                               Type1Enum;
    Ingredient7:                         Ingredient7;
    Type7:                               Type1Enum;
    Qty1:                                number | null;
    Qty2:                                number | null;
    Qty3:                                number | null;
    Qty4:                                number | null;
    Qty5:                                number | null;
    Qty6:                                number | null;
    Qty7:                                number | null;
    GameEventID:                         string;
    "Game Event Validation":             boolean | null;
    CooldownSeconds:                     number | null;
    CooldownQuantity:                    number | null;
    GearScoreBonus:                      GearScoreBonus;
    GearScoreReduction:                  GearScoreReduction;
    BonusItemChance:                     number | null;
    BonusItemChanceIncrease:             string;
    BonusItemChanceDecrease:             string;
    AttributeCost:                       number | null;
    PerkCost:                            number | null;
    GemSlotCost:                         number | null;
}

export type GearScoreBonus = "" | "5,10,15,20,25";

export type GearScoreReduction = "" | "-5,-10,-15,-20,-25";

export type Ingredient7 = "" | "GoldenScarab" | "OnyxCutT4" | "AmberCutT4" | "SmolderhideT1" | "OpalCutT4" | "CarnelianCutT3" | "AmethystCutT4" | "SapphireCutT4" | "ScarhideT1" | "AquamarineCutT4" | "JasperCutT4" | "BrokenBladeT5" | "JadeTalismanT1" | "SapphireCutT3" | "MalachiteCutT4" | "MoonstoneCutT4" | "AmethystCutT2" | "EmeraldCutT3" | "Blisterweavet1" | "TopazCutT4" | "BarbvineT1" | "CinnabarT1" | "BlisterweaveT1" | "ScaleclothT1" | "DiamondCutT4" | "TarragonT1" | "CauliflowerT1" | "GingerT1" | "StringBeanT1" | "BlueberryT1" | "OreganoT1" | "RosemaryT1" | "SeasoningBlendT1" | "ParsleyT1" | "GarlicT1" | "NutmegT1" | "OrangeT1" | "ThymeT1" | "EggT1" | "TomatoT1" | "SageT1" | "CookingOilT1" | "OnionT1" | "CornT1" | "PastryCrustT1" | "BarleyT1" | "SaltT1" | "PeppercornT1" | "PotatoT1" | "ButterT1" | "Instrument_HarmoniusReedT3" | "Instrument_ResonantHideT3" | "Instrument_PearlPlectrumT3" | "Instrument_IridescentInlayT3" | "Instrument_EbonyFingerboardT3" | "FlameCore";

export type ProceduralTierId1 = "" | "PotionHealthT1" | "PotionManaT1" | "PotionManaT2" | "PotionManaT3" | "PotionManaT4" | "PotionManaT5" | "PotionRegenT1" | "PotionRegenT2" | "PotionRegenT3" | "PotionRegenT4" | "PotionFocusT1" | "PotionFocusT2" | "PotionFocusT3" | "PotionFocusT4" | "FoodHealthRecoveryT1" | "FoodManaT1" | "SalvageSmall_TimberT1" | "1hClubT2" | "SalvageLarge_MetalT5" | "SalvageSmall_TimberT5" | "SalvageSmall_MetalT5" | "SalvageSmall_LeatherT5" | "SalvageLarge_LeatherT5" | "SalvageSmall_ClothT5" | "SalvageLarge_ClothT5" | "SalvageSmall_MetalT2" | "SalvageLarge_MetalT2" | "SalvageSmall_FlintT1" | "SalvageSmall_LeatherT2" | "SalvageSmall_LeatherT3" | "SalvageSmall_LeatherT4" | "SalvageLarge_LeatherT2" | "SalvageLarge_LeatherT3" | "SalvageLarge_LeatherT4" | "SalvageSmall_ClothT2" | "SalvageSmall_MetalT3" | "SalvageSmall_MetalT4" | "SalvageLarge_MetalT3" | "SalvageLarge_MetalT4" | "SalvageSmall_ClothT3" | "SalvageSmall_ClothT4" | "SalvageLarge_ClothT2" | "SalvageLarge_ClothT3" | "SalvageLarge_ClothT4" | "SalvageLarge_MetalPreciousT2" | "SalvageLarge_MetalPreciousT3" | "SalvageLarge_MetalPreciousT4" | "SalvageSmall_MetalPreciousT2" | "SalvageSmall_MetalPreciousT3" | "SalvageSmall_MetalPreciousT4" | "SalvageLarge_TimberT2" | "SalvageLarge_TimberT3" | "SalvageLarge_TimberT4" | "SalvageLarge_TimberT5" | "SalvageSmall_ClothT1" | "[LTID]LeatherT2" | "[LTID]LeatherT3" | "[LTID]LeatherT4" | "[LTID]BlockT2" | "[LTID]BlockT3" | "[LTID]BlockT4" | "[LTID]IngotT2" | "[LTID]IngotT3" | "[LTID]IngotT4" | "[LTID]TimberT2" | "[LTID]TimberT3" | "[LTID]TimberT4" | "[LTID]ClothT2" | "[LTID]ClothT3" | "[LTID]ClothT4" | "PotionHealthT2" | "PotionHealthT3" | "PotionHealthT4" | "PotionHealthT5" | "PotionEnduranceT1" | "PotionEnduranceT2" | "PotionEnduranceT3" | "PotionEncumbranceT1" | "PotionEncumbranceT2" | "PotionEncumbranceT3" | "CoatingBeastT2" | "CoatingBeastT3" | "CoatingBeastT4" | "CoatingBeastT5" | "CoatingLostT2" | "CoatingLostT3" | "CoatingLostT4" | "CoatingLostT5" | "CoatingCorruptedT2" | "CoatingCorruptedT3" | "CoatingCorruptedT4" | "CoatingCorruptedT5" | "CoatingAncientT2" | "CoatingAncientT3" | "CoatingAncientT4" | "CoatingAncientT5" | "CoatingAngryEarthT2" | "CoatingAngryEarthT3" | "CoatingAngryEarthT4" | "CoatingAngryEarthT5" | "CoatingAeternianT2" | "CoatingAeternianT3" | "CoatingAeternianT4" | "CoatingAeternianT5" | "TinctureCorruptionT2" | "TinctureCorruptionT3" | "TinctureCorruptionT4" | "TinctureCorruptionT5" | "TinctureBlightT2" | "TinctureBlightT3" | "TinctureBlightT4" | "TinctureBlightT5" | "TinctureFreezingT2" | "TinctureFreezingT3" | "TinctureFreezingT4" | "TinctureFreezingT5" | "BandageT2" | "PotionCurePoisonT1" | "PotionCureBurningT1" | "PotionCureShockT1" | "PotionCureDiseaseT1" | "PotionCureSlowT1" | "PotionCureSilenceT1" | "PotionCureRendT1" | "PotionCureWeakenT1" | "PotionBoostFireAbsT3" | "PotionBoostFireAbsT4" | "PotionBoostFireAbsT5" | "PotionBoostArcaneAbsT3" | "PotionBoostArcaneAbsT4" | "PotionBoostArcaneAbsT5" | "PotionBoostLightningAbsT3" | "PotionBoostLightningAbsT4" | "PotionBoostLightningAbsT5" | "PotionBoostVoidAbsT3" | "PotionBoostVoidAbsT4" | "PotionBoostVoidAbsT5" | "SalvageLarge_TimberT1" | "SalvageSmall_TimberT3" | "SalvageSmall_TimberT4" | "[LTID]DEV_Furniture" | "SalvageSmall_TimberT2";

export type RecipeTags = "" | "Amulet" | "Ring" | "Earring" | "DroppedBags" | "LoggingAxe" | "MiningPick" | "SkinningKnife" | "Sickle" | "Longsword" | "Rapier" | "Warhammer" | "Greataxe" | "Rshield" | "Kshield" | "Greatsword" | "GreatSword" | "Spear" | "Hatchet" | "Bow" | "Musket" | "FishingPole" | "Blunderbuss" | "PlateHead" | "PlateChest" | "PlateHands" | "PlateLegs" | "PlateFeet" | "LeatherHead" | "LeatherChest" | "LeatherHands" | "LeatherLegs" | "LeatherFeet" | "ClothHead" | "ClothChest" | "ClothHands" | "ClothLegs" | "ClothFeet" | "StaffFire" | "StaffLife" | "GauntletIce" | "GauntletVoid";

export type SkipGrantItemsBody = "" | "@cr_campskin_desc" | "@TerritoryStandingSuppliesT1_SGIBody" | "@TerritoryStandingSuppliesT2_SGIBody" | "@TerritoryStandingSuppliesT3_SGIBody" | "@TerritoryStandingSuppliesT4_SGIBody";

export type SkipGrantItemsDesc = "" | "@cr_unlockrecipe_info" | "@TerritoryStandingSuppliesT1_SGIDesc" | "@TerritoryStandingSuppliesT2_SGIDesc" | "@TerritoryStandingSuppliesT3_SGIDesc" | "@TerritoryStandingSuppliesT4_SGIDesc";

export type SkipGrantItemsTitle = "" | "@cr_campskin_title" | "@TerritoryStandingSuppliesT1_SGITitle" | "@TerritoryStandingSuppliesT2_SGITitle" | "@TerritoryStandingSuppliesT3_SGITitle" | "@TerritoryStandingSuppliesT4_SGITitle";

export type StationType1 = "" | "smelting3" | "smelting4" | "smelting5" | "tanning3" | "tanning4" | "tanning5" | "weaving3" | "weaving4" | "weaving5" | "carpentry3" | "carpentry4" | "carpentry5" | "masonry3" | "masonry4" | "masonry5" | "gypsumstation1" | "FlameCore_Forge" | "outfitting2" | "outfitting5" | "engineering5" | "outfitting3" | "outfitting4" | "blacksmith2" | "blacksmith3" | "blacksmith4" | "blacksmith5" | "alchemy2" | "engineering2" | "engineering3" | "engineering4" | "alchemy3" | "alchemy4" | "alchemy5" | "camp5" | "cooking2" | "cooking3" | "cooking4" | "cooking5" | "camp1" | "carpentry1" | "engineering1" | "alchemy1" | "cooking1";

export type StationType2 = "" | "camp1" | "camp2" | "camp3" | "camp4" | "camp5" | "alchemy2";

export type Type1Enum = "" | "Category_Only" | "Item" | "Currency";

export type CrestPartData = {
    Index:         number;
    OldIndex:      number;
    isForeground:  boolean;
    DisplayName:   string;
    EntitlementId: string;
    Image:         string;
    Color:         string;
    isEntitlement: boolean;
    isEnabled:     boolean;
    Faction:       Faction;
    Notes:         string;
    Intent:        Intent;
}

export type Intent = "" | "Animal Head" | "Merriment" | "Card Suite" | "Smugglers" | "Pre-Order" | "Prime Gaming" | "Animal head" | "Lunar New Year" | "Gesture" | "Weapons" | "Twitch";

export type CurrencyExchangeData = {
    ConversionID:                         string;
    FromCurrencyId:                       string;
    FromCurrencyIsCategoricalProgression: boolean;
    FromCurrencyQuantity:                 number;
    ToCurrencyId:                         string;
    ToCurrencyIsCategoricalProgression:   boolean;
    ToCurrencyQuantity:                   number;
}

export type CurseMutationStaticData = {
    CurseMutationId:  string;
    CurseMinor:       string;
    CurseMajor:       string;
    GlobalAffliction: string;
    Name:             string;
    Description:      string;
    IconPath:         string;
}

export type CutsceneCameraStaticData = {
    CutsceneCameraId:        string;
    CameraState:             string;
    CameraStateOrigin:       string;
    CameraStateLookAt:       string;
    EnterBlendTime:          number;
    ExitBlendTime:           string;
    HideUIOnTrigger:         string;
    OriginEnterBlendTime:    string;
    OriginExitBlendTime:     string;
    UseAbsolutePos:          string;
    HidePlayerAvatar:        string;
    HideNearbyPlayerAvatars: string;
    BlockPlayerInput:        string;
    CancelInventory:         string;
    InterruptInCombat:       string;
    InterruptOnMovement:     string;
    CanSkip:                 string;
    PlayFadeEffect:          string;
    BannerTitleLabelText:    string;
    BannerTitleText:         string;
    BannerDescriptionText:   string;
}

export type DamageData = {
    DamageID:                     string;
    WeaponCategory:               string;
    IgnoreInvulnerable:           boolean | number | null | string;
    NoReaction:                   boolean | number | null | string;
    IsRanged?:                    boolean | number | null | string;
    IsAbility?:                   boolean | null | string;
    AttackType?:                  IgnoreDisabledAttackTypes;
    DamageType:                   DamageTypes;
    Affliction?:                  Affliction;
    AddAffliction?:               DamageTypes | number | null;
    AfflictionPercent?:           number | null | string;
    StatusEffect?:                string;
    EffectOnlyOnDamage?:          boolean | number | null | string;
    SurfaceImpactEffect:          IgnoreDisabledAttackTypes;
    DeflectDamageID?:             boolean | DeflectDamageIDEnum | null;
    CanCrit?:                     boolean | null | string;
    Unblockable?:                 boolean | number | null | string;
    AttackDealsNoDurability?:     boolean | null | string;
    NoHeadshot?:                  boolean | null;
    NoBackstab?:                  boolean | null | string;
    NoLegShots?:                  boolean | null | string;
    CancelTargetHoming?:          boolean | null | string;
    DmgCoef:                      number | null;
    DmgCoefHead:                  number;
    DmgCoefCrit?:                 number | null | string;
    DurabilityCostOverride?:      number | null | string;
    PowerLevel:                   number | null;
    BlockPowerLevel:              number | null;
    CritPowerLevel?:              number | null | string;
    HitStun:                      number | null;
    BlockHitStun:                 number | null;
    CritHitStun?:                 number | null | string;
    ImpactDistanceX:              number | null;
    ImpactDistanceY:              number | null;
    ImpactDistanceZ:              number | null;
    ImpactDecayRate:              number | null;
    BlockImpactDistanceX:         number | null;
    BlockImpactDistanceY:         number | null;
    BlockImpactDistanceZ:         number | null;
    BlockImpactDecayRate:         number | null;
    CritImpactDistanceX?:         number | null | string;
    CritImpactDistanceY?:         number | null | string;
    CritImpactDistanceZ?:         number | null | string;
    CritImpactDecayRate?:         number | null | string;
    AddDmg:                       number | null;
    StaggerDmgModifier?:          number | null | string;
    StaggerResistModifier?:       number | null | string;
    CritStaggerDmgModifier?:      number | null | string;
    HitRateDmgModifier?:          number | null | string;
    MaxHitRateDmgMod?:            number | null;
    CameraShakeID?:               string;
    TargetCameraShakeID?:         string;
    BlockCameraShakeID?:          StructureSize;
    BlockTargetCameraShakeID?:    StructureSize;
    CritCameraShakeID?:           string;
    CritTargetCameraShakeID?:     StructureSize;
    ImpactRating:                 number | null | string;
    BlockStaminaDmgMod:           number | null;
    BlockAbsorptionModifier:      number | null | string;
    LOSCheckVerticalAngleOffset?: number | null | string;
    StunBreakoutIncrement?:       number | null;
    ThreatMultiplier?:            number | null;
    AddThreat?:                   number | null;
    IsTaunt?:                     boolean | null;
    TauntDuration?:               number | null;
    TauntThreatBoostPercentage?:  number | null;
    TauntMinimumThreatValue?:     number | null;
    UseAttackerPosForReaction?:   boolean | null | string;
    AttackRuneCharge?:            number | null;
    AttackBlockedRuneCharge?:     number | null;
    HitRuneCharge?:               number | null;
    HitBlockedRuneCharge?:        number | null;
    Affixes?:                     Affixes;
    StaminaDmg?:                  number | null;
    DamageGuildAndGroup?:         boolean | null | string;
    HungerDmg?:                   number;
    ThirstDmg?:                   number;
    stunBreakoutIncrementer?:     number | null | string;
    IsSiege?:                     boolean | null;
    DamageReceiverCooldown?:      number | null;
    CanBeBlocked?:                boolean | null;
    IgnoreSheatheStatus?:         boolean | null;
    EffectWhenNotBlocked?:        boolean | null;
}

export type Affixes = "" | "AI_ArcaneDMG_10" | "AI_FireDMG_100" | "AI_ArcaneDMG_25" | "AI_CorruptionDMG_50" | "AI_CorruptionDMG_25" | "AI_CorruptionDMG_75" | "AI_FireDMG_25" | "AI_FireDMG_50" | "AI_FireDMG_75" | "AI_LIghtningDMG_75";

export type Affliction = "" | "AfflictionBleed" | "AfflictionFrostbite" | "AfflictionDisease";

export type DeflectDamageIDEnum = "Deflect_Default" | "" | "Default" | "Unarmed";

export type DamageTypeData = {
    TypeID:                DamageTypes;
    IntID:                 number;
    DisplayName:           string;
    Category:              DamageTypeDatumCategory;
    Affliction:            string;
    AfflictionFrac:        number;
    DefenseBonusFrac:      number;
    MitigationBonusFrac:   number;
    DamageBonusAgainst:    HairChop;
    DamageBonusFrac:       number;
    UseAllDamageModifiers: UseAllDamageModifiers;
}

export type DamageTypeDatumCategory = "True" | "Physical" | "Elemental";

export type UseAllDamageModifiers = "" | "TRUE" | "`";

export type DataPointData = {
    DataPointId:   string;
    Type:          string;
    Cycle:         Cycle;
    DungeonId:     DungeonID;
    MutatorLevel:  number | null;
    GameEventType: ExcludeFromGameModes;
    IsPvP:         IsMajor;
    IsWar:         IsMajor;
    IsMajor:       IsMajor;
    IsWin:         IsMajor;
}

export type Cycle = "Monthly" | "Yearly" | "Weekly";

export type DungeonID = "BrimstoneSands" | "";

export type IsMajor = "" | "NO" | "YES" | "ANY";

export type DivertedLootData = {
    Id:                         string;
    CountToNextLevel:           number;
    TimeframeSeconds:           number;
    YellowDivertedLootModifier: number;
    RedDivertedLootModifier:    number;
    YellowXpMultiplier:         number;
    RedXpMultiplier:            number;
    GreenNotificationLocTag:    string;
    YellowNotificationLocTag:   string;
    RedNotificationLocTag:      string;
}

export type DyeColorData = {
    Index:          number;
    Name:           string;
    Color:          string;
    Category:       string;
    IsEntitlement:  number;
    ColorAmount:    number;
    ColorOverride:  number;
    SpecColor:      string;
    SpecAmount:     number;
    MaskGlossShift: number;
}

export type DyeItemDefinitions = {
    DyeItemId:  string;
    ColorIndex: number;
    NameNote:   string;
    BoolNote:   string;
}

export type EconomyTrackerData = {
    EconomyTrackerID: string;
    AlarmType:        AlarmType;
    ThresholdConfig1: string;
    MetricName1:      string;
    EnableMetric1:    boolean;
    ThresholdConfig2: string;
    MetricName2:      string;
    EnableMetric2:    boolean | null;
}

export type AlarmType = "PerHour" | "OneTime";

export type ElementalMutationStaticData = {
    ElementalMutationId:     string;
    Name:                    string;
    Description:             string;
    CategoryWildcard:        string;
    ElementalDifficultyTier: number;
    "Dungeon-":              string;
    Dungeon:                 string;
    "Dungeon+":              string;
    DungeonMiniBoss:         string;
    IconPath:                string;
    TextColor:               string;
    BackgroundColor:         string;
}

export type EmoteData = {
    UniqueTagID:           string;
    FragmentName:          string;
    DisplayName:           string;
    DisplayDescription:    string;
    DisplayGroup:          DisplayGroup;
    ChatBoxText:           string;
    SlashCommand:          string;
    SecondarySlashCommand: string;
    IsEntitlement:         number;
    IsPremiumEmote:        number;
    IsEnabled:             number;
    HasCooldown:           number;
    DisplayPriority:       number;
    UiImage:               string;
    UiImageHiRes:          string;
    GatherableTags:        GatherableTags;
    EmoteDuration:         number | null;
    AttributionId:         AttributionID;
}

export type AttributionID = "" | "WinterConvergence_2021" | "SummerMedleyfaire_2022" | "NightveilHallow_2022" | "WinterConvergence_2022" | "SpringtideBloom_2023" | "TurkeyTerror_2022" | "RabbitSeason_2023" | "Season_1" | "Housing_SettlerSet_2021" | "Housing_PirateSet_2021" | "Housing_DynastySet_2021" | "Housing_LegionSet_2022";

export type DisplayGroup = "Default" | "Friendly" | "Taunt" | "Other" | "Direction" | "Answer" | "Decisions" | "Emotion";

export type GatherableTags = "" | "dance";

export type EncumbranceData = {
    ContainerTypeID:                                 string;
    EncumbranceBaseMax:                              number;
    EncumbranceWarningPercent:                       number;
    EquipLoadBaseMax:                                number;
    EquipLoadWarningPercent:                         number;
    FullWhenEncumbered:                              number;
    EquipLoadRatioFast:                              number;
    EquipLoadRatioNormal:                            number;
    EquipLoadRatioSlow:                              number;
    EquipLoadRatioOverburdened:                      number;
    EquipLoadStaminaCostMultFast:                    number;
    EquipLoadStaminaCostMultNormal:                  number;
    EquipLoadStaminaCostMultSlow:                    number;
    EquipLoadStaminaCostMultOverburdened:            number;
    EquipLoadStaminaRegenMultFast:                   number;
    EquipLoadStaminaRegenMultNormal:                 number;
    EquipLoadStaminaRegenMultSlow:                   number;
    EquipLoadStaminaRegenMultOverburdened:           number;
    EquipLoadMoveSpeedMultFast:                      number;
    EquipLoadMoveSpeedMultNormal:                    number;
    EquipLoadMoveSpeedMultSlow:                      number;
    EquipLoadMoveSpeedMultOverburdened:              number;
    EquipLoadGritResistMultFast:                     number;
    EquipLoadGritResistMultNormal:                   number;
    EquipLoadGritResistMultSlow:                     number;
    EquipLoadGritResistMultOverburdened:             number;
    EquipLoadDefenseMultFast:                        number;
    EquipLoadDefenseMultNormal:                      number;
    EquipLoadDefenseMultSlow:                        number;
    EquipLoadDefenseMultOverburdened:                number;
    EquipLoadBlockStabilityMultFast:                 number;
    EquipLoadBlockStabilityMultNormal:               number;
    EquipLoadBlockStabilityMultSlow:                 number;
    EquipLoadBlockStabilityMultOverburdened:         number;
    EquipLoadStanceWeaponAccuracyFast:               number;
    EquipLoadStanceWeaponAccuracyNormal:             number;
    EquipLoadStanceWeaponAccuracySlow:               number;
    EquipLoadMovementWeaponAccuracyFast:             number;
    EquipLoadMovementWeaponAccuracyNormal:           number;
    EquipLoadMovementWeaponAccuracySlow:             number;
    EquipLoadDamageMultFast:                         number | null;
    EquipLoadDamageMultNormal:                       number | null;
    EquipLoadDamageMultSlow:                         number | null;
    EquipLoadDamageOverburdened:                     number | null;
    EquipLoadHealMultFast:                           number | null;
    EquipLoadHealMultNormal:                         number | null;
    EquipLoadHealMultSlow:                           number | null;
    EquipLoadCCStatusEffectDurationMultFast:         number | null;
    EquipLoadCCStatusEffectDurationMultNormal:       number | null;
    EquipLoadCCStatusEffectDurationMultSlow:         number | null;
    EquipLoadCCStatusEffectDurationMultOverburdened: number | null;
    EquipLoadCCStatusEffectCategories:               string;
}

export type EntitlementData = {
    UniqueTagID:      string;
    EntitlementIndex: number;
    IsEnabled:        boolean;
    DisplayName:      string;
    Description:      string;
    IsConsumable:     boolean | null;
    Icon:             string;
    RewardType:       ItemTypeEnum;
    "Reward(s)":      string;
    EntitlementInfo:  string;
    SourceType:       SourceType;
    AchievementId:    AchievementID;
    Notes:            EntitlementDatumNotes;
}

export type AchievementID = "" | "RewardClaim_DevStreamers_Event" | "RewardClaim_DevStreamers_Event_2" | "RewardClaim_DevStreamers_Event_3" | "RewardClaim_TwitchConEU_Cache" | "RewardClaim_BFNW2_Twitch" | "RewardClaim_Oct2022Prime_Container_2" | "RewardClaim_Bfriday_Prime" | "RewardClaim_Dec2022_Prime" | "RewardClaim_CS_MGContainer" | "RewardClaim_WinterDragon_Prime" | "RewardClaim_OmensOfWinter_Prime" | "RewardClaim_Firelight_Prime" | "RewardClaim_MakeGood_WinterDragon_Cache" | "RewardClaim_Highwayman_Prime" | "RewardClaim_May2023_Prime";

export type EntitlementDatumNotes = "" | "QA4" | "UX1" | "UX2" | "Server-1" | "Retail FRA" | "Retail IAD" | "Retail PDX" | "Retail GRU" | "Bug Bounty Retail usage";

export type ItemTypeEnum = "Entitlement" | "ItemSkin" | "Misc" | "FictionalCurrency" | "HousingItem" | "ItemDye" | "GuildCrest" | "Emote" | "PlayerTitle" | "InventoryItem" | "Service" | "CampSkin" | "Loadout" | "WorldId" | "StatusEffect" | "SeasonsRewards";

export type SourceType = "Twitch" | "Preorder" | "Prime" | "Store" | "" | "SaltTrack" | "Leaderboard" | "Leaderboards" | "SeasonJourney" | "SeasonRewardTrack";

export type ExperienceData = {
    "Level Number":              number;
    XPToLevel:                   number;
    XPAlarmThreshold1:           number;
    XPAlarmThreshold2:           number;
    PlayTimeAlarmThresholdMins1: number;
    PlayTimeAlarmThresholdMins2: number;
    AttributePoints:             number;
    Health:                      number;
    TradeSkillPoints:            number;
    AttributeRespecCost:         number;
    CanFreeAttributeRespec:      number;
    LootTagValue:                number;
    DefStandard:                 number;
    DefSlash:                    number;
    DefStrike:                   number;
    DefMagic:                    number;
    DefFire:                     number;
    DefLightning:                number;
    DefCorruption:               number;
    ResFrost:                    number;
    ResPoison:                   number;
    ResBleed:                    number;
    ResDisease:                  number;
    ResCurse:                    number;
    RecipeLevel:                 number;
    RollBonus:                   number;
    MinGearScoreBonus:           number;
    MaxGearScoreBonus:           number;
    RespawnCooldownMod:          number;
    EffectId:                    EffectID;
    BlueprintId:                 BlueprintID;
    IsMilestone:                 boolean | null;
    Tooltip:                     string;
    MaxEquippableGearScore:      number;
    IgnoreItemRarity:            boolean;
    GSLimitT1:                   GSLimitT1;
    GSLimitT2:                   string;
    GSLimitT3:                   string;
    GSLimitT4:                   string;
    GSLimitT5:                   string;
    GSBonusCritter:              string;
    GSBonusSolo:                 string;
    "GSBonusSolo-":              string;
    "GSBonusSolo+":              string;
    GSBonusGroup:                string;
    "GSBonusGroup-":             string;
    "GSBonusGroup+":             string;
    GSBonusBoss:                 string;
    HouseTrophySlots:            number;
}

export type BlueprintID = "CampT1" | "CampT2" | "CampT3" | "CampT4" | "CampT5";

export type EffectID = "CampRegenL0";

export type GSLimitT1 = "100-100" | "100-125" | "125-150" | "150-175" | "175-190" | "180-190" | "185-190";

export type FactionControlBuffDefinitions = {
    FactionControlBuffID: string;
    IsTerritoryBuff:      boolean;
    Value:                number;
    Name:                 string;
    Description:          string;
    Comments:             string;
}

export type FactionData = {
    FactionType:                 string;
    DisplayName:                 string;
    DisplayDesc:                 string;
    ForegroundColorIndex:        number;
    ForegroundCrestIndex:        number;
    BackgroundColorIndex:        number;
    BackgroundCrestIndex:        number;
    RequiredAchievementId:       string;
    RequiredLegacyAchievementId: string;
}

export type FishData = {
    FishId:    string;
    Size:      StructureSize;
    FishingXp: number;
    MinWeight: number;
    MaxWeight: number;
    IsSmall:   boolean;
    IsMedium:  boolean;
    IsLarge:   boolean;
}

export type FishingBaitData = {
    Id:                            string;
    FishRarityRollModifier:        number;
    FishSizeRollModifier:          number;
    SummerFishRarityRollModifier:  number;
    RequiredWaterTags:             RequiredWaterTags;
    ActiveAtDawn:                  boolean;
    ActiveAtDaytime:               boolean;
    ActiveAtDusk:                  boolean;
    ActiveAtNight:                 boolean;
    LootTableId:                   FishingBaitDatumLootTableID;
    TimeToNibbleSecondsMultiplier: number;
}

export type FishingBaitDatumLootTableID = "" | "FishingSalmonSpecial";

export type RequiredWaterTags = "Fresh" | "Salt" | "Fresh,Salt";

export type FishingBehaviorsData = {
    Id:                          string;
    FishBehaviorPattern:         number;
    FishBehaviorLocalizationKey: string;
}

export type FishingCatchablesData = {
    Id:                                 string;
    FishSize:                           StructureSize;
    FishWeightRange:                    string;
    FishLengthRange:                    string;
    FishingXp:                          number;
    FishDistanceSwamAwayPerSecond:      number;
    LineTensionGainPerSecondMultiplier: number;
    FishBehaviors:                      string;
    ZoomCameraOnSuccess:                boolean;
    FishCharacterDefinitionPath:        string;
    FishScale:                          number;
    RewardGameEventId:                  string;
}

export type FishingHotspotsData = {
    Id:                           string;
    DisplayName:                  string;
    FishRarityRollModifier:       number;
    FishSizeRollModifier:         number;
    SummerFishRarityRollModifier: number;
    LootTableId:                  FishingHotspotsDatumLootTableID;
    LootTag:                      LootTag;
    RequiredLevel:                number;
    TimeToNibbleSecondsRange:     TimeToNibbleSecondsRange;
    TimeToBiteSecondsRange:       TimeToBiteSecondsRange;
}

export type FishingHotspotsDatumLootTableID = "FishingHotspotLoot";

export type LootTag = "Broad" | "Rare" | "Secret";

export type TimeToBiteSecondsRange = "1-1.5";

export type TimeToNibbleSecondsRange = "3-6";

export type FishingPolesData = {
    Id:                           string;
    CastDistanceRange:            string;
    FishRarityRollModifier:       number;
    FishSizeRollModifier:         number;
    SummerFishRarityRollModifier: number;
    FishReelTimeSeconds:          number;
    LineTensionGainPerSecond:     number;
    LineTensionRecoverPerSecond:  number;
}

export type FishingWaterData = {
    Id:                       string;
    TimeToNibbleSecondsRange: string;
    TimeToBiteSecondsRange:   TimeToBiteSecondsRange;
}

export type GameEventData = {
    EventID:                                 string;
    GameEventType:                           GameEventType;
    Level:                                   number | null;
    CreatureType:                            CreatureTypeEnum;
    RewardModifier?:                         string;
    UniversalExpAmount:                      number | null | string;
    CurrencyReward:                          number | null | string;
    ItemReward:                              string;
    RewardsNotes?:                           string;
    GearScoreRange:                          number | null | string;
    CategoricalProgressionId:                string;
    CategoricalProgressionReward:            number | null | string;
    TerritoryStanding:                       number | null | string;
    FactionReputation:                       number | null | string;
    FactionTokens?:                          number | null | string;
    FactionInfluenceAmount:                  number | null | string;
    FactionInfluenceSrc:                     FactionInfluenceSrc;
    EmitTelemetry:                           boolean | null;
    AzothReward:                             number | null | string;
    AzothRewardChance:                       number | null;
    WhisperId?:                              string;
    WhisperID?:                              string;
    RewardNote?:                             RewardNote;
    RewardNotes?:                            RewardNotes;
    IgnoreEconomyTracker?:                   boolean | null;
    PVPXP?:                                  number | null;
    "Rewards Notes"?:                        RewardsNotes;
    "Reward Type"?:                          RewardType;
    UseRestedExp?:                           string;
    CoinRewardChance?:                       number | null;
    ItemRewardQty?:                          number | null;
    LootTags?:                               LootTags;
    AzothSalt?:                              number | null;
    AzothSaltChance?:                        number | null;
    PvpXp?:                                  number | null;
    EntitlementId?:                          EntitlementID;
    StatusEffectId?:                         StatusEffectID;
    RemoveStatusEffects?:                    string;
    RemoveStatusEffectCategories?:           GameEventDatumRemoveStatusEffectCategories;
    LootLimitId?:                            LootLimitID;
    LootLimitReachedGameEventId?:            LootLimitReachedGameEventID;
    LootLimitReachedGameEventKeepOverrides?: string;
    LeaderboardValue?:                       number | null;
    SeasonsXp?:                              number | null;
}

export type CreatureTypeEnum = "MSQ-" | "MSQ" | "Quest" | "Quest+" | "Quest-" | "" | "MSQ+" | "Mission+" | "Solo" | "Mission-" | "Mission" | "Mission++" | "MissionPvP" | "MissionPvP-" | "MissionPvP+" | "Project-" | "Project" | "Project+" | "CMission_raw-" | "CMission_raw" | "CMission_raw+" | "CMission_refined-" | "CMission_refined" | "CMission_refined+" | "CMission_Kill-" | "CMission_Kill" | "CMission_Kill+" | "Cmission_CraftingGear-" | "Cmission_CraftingGear" | "Cmission_CraftingGear+" | "Cmission_CraftingProvision&#45;-" | "Cmission_CraftingProvision-" | "Cmission_CraftingProvision" | "Cmission_CraftingProvision+" | "Cmission_Quest" | "DarknessMinor" | "DarknessMinor+" | "DarknessMajor" | "DarknessMajor+" | "ArenaSpriggan" | "AwardLostEvent" | "AwardDryadEvent" | "ArenaMyrkgard" | "Myrkgard" | "War" | "OutpostRush" | "PvPArenas" | "Arena3v3_Win_3_Round" | "DungeonBoss" | "DungeonMiniBoss";

export type EntitlementID = "" | "EntitlementSkin_Mask_RabbitSeason" | "EntitlementTitle_TurkeyTerror" | "EntitlementSkin_Feet_TurkeyTerror";

export type FactionInfluenceSrc = "" | "Missions" | "PvE" | "PvP" | "Quests" | "Progression" | "General" | "Destinations" | "Leaderboard";

export type GameEventType = "" | "PvPKill" | "Darkness" | "Arena" | "Invasion" | "War" | "OutpostRush" | "PvPArenas" | "Crafting" | "Gathering" | "EventEncounter";

export type LootLimitID = "" | "Arena3v3_Limit" | "PvP_FortTakeover_Limit" | "Tag_LegacyofCrassus_Ticker";

export type LootLimitReachedGameEventID = "" | "Arena3v3_Loss_DailyLimitReached" | "Arena3v3_Win_3_Round_DailyLimitReached" | "Arena3v3_Win_2_Round_DailyLimitReached" | "Arena3v3_Win_1_Round_DailyLimitReached" | "PvP_FortTakeover_LimitReached" | "WorldEvent_Crassus_BonusBox_Override";

export type LootTags = "" | "EnemyLevel:60";

export type GameEventDatumRemoveStatusEffectCategories = "" | "MusicBuff";

export type RewardType = "Exp" | "Named" | "" | "Mats" | "Azoth" | "Weapons" | "Standing" | "Coins" | "Armor";

export type RewardNote = "" | "Dungeon" | "Tokens";

export type RewardNotes = "" | "Death Rattle" | "Jewel of Vengence" | "Dark Pheonix" | "Boots of the Stallion" | "Edge of Rebellion " | "Lavaforged Legguards" | "Molten's Core" | "Victor's Helm" | "Spirit of Oblivion " | "Infinity Crystal" | "Vengeance Blast" | "Fortuna Chestplate" | "Contains Settler Table & Lighting" | "Contains materials for trophy";

export type RewardsNotes = "" | "Custom" | "Repeatable - no item" | "L65 Dungeon" | "Legendary Weapon";

export type StatusEffectID = "" | "MusicBuff_PlayerEncumbrance_T4_Amazing" | "MusicBuff_PlayerEncumbrance_T3_Great" | "MusicBuff_PlayerEncumbrance_T2_Okay" | "MusicBuff_PlayerEncumbrance_T1_Bad" | "MusicBuff_TerritoryStanding_T4_Amazing" | "MusicBuff_TerritoryStanding_T3_Great" | "MusicBuff_TerritoryStanding_T2_Okay" | "MusicBuff_TerritoryStanding_T1_Bad" | "MusicBuff_GroupXPSharing_T4_Amazing" | "MusicBuff_GroupXPSharing_T3_Great" | "MusicBuff_GroupXPSharing_T2_Okay" | "MusicBuff_GroupXPSharing_T1_Bad" | "MusicBuff_GatheringYield_T4_Amazing" | "MusicBuff_GatheringYield_T3_Great" | "MusicBuff_GatheringYield_T2_Okay" | "MusicBuff_GatheringYield_T1_Bad" | "MusicBuff_GatheringLuck_T4_Amazing" | "MusicBuff_GatheringLuck_T3_Great" | "MusicBuff_GatheringLuck_T2_Okay" | "MusicBuff_GatheringLuck_T1_Bad" | "MusicBuff_GatheringSpeed_T4_Amazing" | "MusicBuff_GatheringSpeed_T3_Great" | "MusicBuff_GatheringSpeed_T2_Okay" | "MusicBuff_GatheringSpeed_T1_Bad" | "MusicPerformance_Amazing_Celebration";

export type GameModeData = {
    GameModeId:                             GameModeID;
    ScriptName:                             GameModeID;
    SlicePath:                              string;
    RequiresTeamRaids:                      string;
    AdvanceThroughStatesOnUpdate:           string;
    DisplayName:                            string;
    Description:                            string;
    UiInteractOption:                       string;
    RequirementText:                        string;
    IconPath:                               string;
    SimpleImagePath:                        string;
    BackgroundImagePath:                    string;
    CoatlicueName:                          string;
    WorldBounds:                            string;
    TeamTeleportData:                       string;
    FeatureFlag:                            string;
    PurchasableItemClasses:                 string;
    PurchasableItemClassesRestrictedToMode: ItemClassesToRemoveOnExit;
    NonPurchasableItemClasses:              string;
    ItemClassesToRemoveOnExit:              ItemClassesToRemoveOnExit;
    RequiredConsumableItemClasses:          string;
    DisabledItemClasses:                    DisabledItemClasses;
    ClearBattleTokensOnExit:                string;
    RequiresGameModeGDEException:           string;
    RequiredLevel:                          number | null;
    QueueLevelBuckets:                      QueueLevelBuckets;
    QueueReadyThreshold:                    number | null;
    BackfillReadyThreshold:                 number | null;
    NumTeams:                               number | null;
    TeamCapacity:                           number | null;
    CombineTeamGroups:                      boolean | null;
    ModeNameLocStringId:                    ModeNameLOCStringIDEnum;
    GearScoreOverrideValueMin:              number | null;
    GearScoreOverrideValueMax:              number | null;
    MinPlayerLevelToUseGearScoreOverride:   number | null;
    MaxPlayerLevelToUseGearScoreOverride:   number | null;
    PossibleItemDropIds:                    string;
    MinGroupSize:                           number | null;
    PreserveOldGroup:                       boolean | null;
    IsDungeon:                              boolean | null;
    IsRaidTrial:                            null;
    IsMutable:                              boolean | null;
    DifficultyProgressionId:                string;
    RestrictGathering:                      boolean;
    RestrictWaterGathering:                 boolean;
    MapId:                                  string;
    LootTags:                               string;
    MutLootTagsOverride:                    MutLootTagsOverride;
    ContainerLevel:                         number | null;
    ContainerGS:                            number | null;
    MutContainerGSOverride:                 number | null;
    VictoryDelaySec:                        number | null;
    MaxAI:                                  AIDespawnRadius;
    AISpawnRadius:                          AIDespawnRadius;
    AIDespawnRadius:                        AIDespawnRadius;
    ProjectedCpuUsePercent:                 number | null;
    ProjectedMemoryUseMb:                   number | null;
    ProjectedDurationMinutes:               number | null;
    Priority:                               number | null;
    ImmediateLaunch:                        boolean | null;
    PauseTimeOfDay:                         boolean;
    FreezeTime:                             number;
    AILevelAdjustedPerceptionEnabled:       boolean;
    AILeashingOptOut:                       boolean;
    DisableDeathsDoor:                      boolean | null;
    DisableMSQTrackersOnHud:                boolean | null;
    AIPreventEnemyTraining:                 boolean;
    UseTeamNamePlate:                       boolean;
    QuitButtonTextId:                       QuitButtonTextID;
    CannotFastTravelTextId:                 CannotFastTravelTextID;
    LeaveDescTextId:                        LeaveDescTextID;
    LeaveTimeDescTextId:                    LeaveTimeDescTextID;
    LeaveTitleTextId:                       LeaveTitleTextID;
    WarBoardStatDefinitions:                WarBoardStatDefinitions;
    WarBoardAttackerTeamIdx:                number | null;
    WarBoardDefenderTeamIdx:                number | null;
    RaidInviteDelaySec:                     number;
    RaidInviteDurationSec:                  number;
    BackfillDelaySec:                       number;
    PriorityAddMin:                         number | null;
    PriorityAddMax:                         number | null;
    AllowPvpValueAccumulation:              boolean | null;
    MinAcceptedInvites:                     number | null;
    UsePendingListMatchmaking:              boolean;
    AutoEquipQuickslot:                     boolean | null;
    GrantConsumables:                       string;
    OverrideDungeonTimeout:                 string;
    SpecialQueueGroupSizes:                 number | null;
    ResetChargeOnEnter:                     boolean | null;
    ShouldShowAcceptedFlow:                 boolean | null;
    ScreenHeaderTextId:                     ScreenHeaderTextID;
    JoinButtonTextId:                       JoinButtonTextID;
    SignupTitleTextId:                      ModeNameLOCStringIDEnum;
    LeaveQueueTitleTextId:                  LeaveQueueTitleTextID;
    LeaveQueueDescriptionTextId:            LeaveQueueDescriptionTextID;
    FailGroupPenaltyTextId:                 FailGroupPenaltyTextID;
    RespawnTypeToUseForUnstuck:             RespawnTypeToUseForUnstuck;
}

export type AIDespawnRadius = "" | "OpenWorld";

export type CannotFastTravelTextID = "" | "\"@ui_cannot_travel_outpost_rush\"" | "\"@ui_cannot_travel_pvp_arena\"" | "\"@ui_cannot_travel_solo_arena\"";

export type DisabledItemClasses = "" | "NoPvPArenas";

export type FailGroupPenaltyTextID = "" | "@ui_outpost_rush_signup_failgrouppenalty" | "@ui_pvparenas_failgrouppenalty";

export type GameModeID = "" | "DungeonShatteredObelisk" | "Arena3v3" | "DungeonAmrine" | "DungeonReekwater00" | "DungeonEdengrove00" | "DungeonShatterMtn00" | "DungeonEbonscale00" | "DungeonCutlassKeys00" | "DungeonRestlessShores01" | "QuestApophis" | "DungeonBrimstoneSands00" | "DungeonGreatCleave01" | "QuestCaerDun" | "TestMode1" | "TestMode2" | "Duel" | "OutpostRush" | "GameModeTest";

export type ItemClassesToRemoveOnExit = "" | "OutpostRushOnly" | "DungeonItem" | "ArenaConsumable";

export type JoinButtonTextID = "" | "@ui_outpost_rush_signup_joinsolo";

export type LeaveDescTextID = "" | "\"@ui_outpost_rush_leave_desc\"" | "\"@ui_pvp_arena_leave_desc\"" | "\"@ui_solo_arena_leave_desc\"";

export type LeaveQueueDescriptionTextID = "" | "@ui_outpost_rush_leave_queue_desc" | "@ui_pvparenas_leave_queue_desc";

export type LeaveQueueTitleTextID = "" | "@ui_outpost_rush_leave_queue_title" | "@ui_pvparenas_leave_queue_title";

export type LeaveTimeDescTextID = "" | "\"@ui_outpost_rush_leave_desc_time\"" | "\"@ui_pvp_arena_leave_desc_time\"" | "\"@ui_solo_arena_leave_desc_time\"";

export type LeaveTitleTextID = "" | "\"@ui_outpost_rush_leave_title\"" | "\"@ui_pvp_arena_leave_title\"" | "\"@ui_solo_arena_leave_title\"";

export type ModeNameLOCStringIDEnum = "" | "@ui_outpost_rush_title" | "@ui_pvp_3v3_arena_signup_title";

export type MutLootTagsOverride = "" | "ShatteredObelisk_Mut,Ancient,GypsumBlue" | "Restless01_Mut,Corrupted,GypsumBlue" | "Ebonscale00_Mut,Corrupted,GypsumBlue";

export type QueueLevelBuckets = "" | "20,30,40,50,60";

export type QuitButtonTextID = "" | "\"@ui_outpost_rush_leave\"" | "\"@ui_pvp_arena_leave\"" | "\"@ui_solo_arena_leave\"";

export type RespawnTypeToUseForUnstuck = "" | "Raid" | "Hunt" | "Loot" | "Espionage" | "Control" | "Intercept" | "Poach" | "Kill" | "Explore" | "Courier" | "Log" | "Harvest" | "Mine" | "Craft" | "Gather";

export type ScreenHeaderTextID = "" | "@Topic_Prompt_Join_Outpost_Rush" | "@ui_pvparenas_title_join";

export type WarBoardStatDefinitions = "" | "ORWarboardStatDefinitions" | "PvPArenaWarboardStatDefinitions";

export type GatherableData = {
    GatherableID:                    string;
    DisplayName:                     string;
    GatheringAction:                 Gathering;
    GatheringType:                   Gathering;
    GatheringFragment:               GatheringFragment;
    FinalLootTable:                  string;
    LootTableDefaultMaterial:        string;
    MinRespawnRate:                  number;
    MaxRespawnRate:                  number;
    Tradeskill:                      GatheringTradeskill;
    RequiredTradeskillLevel:         number | null;
    DepletedGatherableID:            number | null;
    BaseGatherTime:                  number;
    WaitForImpact:                   boolean;
    Restriction:                     Restriction;
    AlignGatherer:                   boolean | null;
    GameEventID:                     string;
    ItemRestrictionId:               string;
    ItemRestrictionQuantity:         string;
    RequiredSongId:                  string;
    SongRewardId:                    string;
    ResetGatherTimeOnEndInteraction: boolean | null;
    IsLootContainer:                 boolean | null;
    IsDynamicPoiTarget:              boolean | null;
    RequireLootItems:                string;
    IconTypeUnlock:                  string;
    IgnoreAllObstructions:           boolean | null;
    ObstructBuildables:              boolean | null;
    RequireControllingFaction:       boolean | null;
    AddedStatusEffect:               EdStatusEffect;
    RequiredStatusEffect:            EdStatusEffect;
    ConsumedStatusEffect:            EdStatusEffect;
    NumRequiredToGather:             number | null;
    UsableEmoteTags:                 string;
    DisplayDescription:              string;
    IsLandmark:                      null;
    TooltipImage:                    string;
    LandmarkIconPath:                string;
    RequiredWhisperId:               RequiredWhisperID;
}

export type EdStatusEffect = "" | "AI_Torso_Boss_ArcaneOrb" | "Dungeon_AdmiralCannonBall" | "Dungeon_PurifyingFlame" | "Dungeon_ArcaneBarrierProtection" | "Dungeon_RelicBubble" | "Dungeon_SirenOffering" | "Shrine_MothersLove" | "Season_01_Event_DamageBoostEffect";

export type Gathering = "Chopping" | "ChoppingVertical" | "None" | "Cutting" | "Mining" | "Dressing" | "Fishing" | "Handcrafting" | "LootContainer" | "AzothStaffLow" | "AzothStaffHigh" | "Etching" | "Welling" | "Crafting" | "AzothStaffCreate" | "MSQTheRitual" | "Kicking" | "AzothStaff";

export type GatheringFragment = "" | "Interact_Box_FTUE" | "Emote_Pondering" | "Emote_Bow" | "Emote_Beckon" | "Emote_Hi" | "Emote_Wave" | "Interact_Play_Mandolin" | "Interact_Play_Guitar" | "Interact_Play_URBass" | "Interact_Play_Flute" | "Interact_PlayFlute_WindsofAutumn" | "Interact_Carpentry" | "Interact_BlacksmithLoop" | "Crafting_Interaction";

export type RequiredWhisperID = "" | "whisper_test_01" | "whisper_test_02" | "whisper_test_03" | "01_Whisper_FTUE_01" | "01_Whisper_FTUE_02" | "01_Whisper_FTUE_03" | "01_Whisper_FTUE_04" | "01_Whisper_FTUE_05" | "01_Whisper_Beach_01" | "01_Whisper_Beach_02" | "01_Whisper_Beach_03" | "01_Whisper_Beach_04" | "01_Whisper_Beach_05" | "01_Whisper_Beach_06" | "01_Whisper_Beach_07" | "12A_MB_Whisper_01" | "12A_MB_Whisper_02" | "12A_MB_Whisper_03" | "12A_MB_Whisper_04" | "98_Covenant_Whisper_01" | "98_Marauders_Whisper_01" | "98_Syndicate_Whisper_01" | "01_Watcher_FTUE_01";

export type Restriction = "ToolRequired" | "NoToolNecessary" | "ItemRequired" | "ToolOptional" | "WhisperRequired";

export type GearScoreUpgradeDefinition = {
    Level:                number;
    RequiredItemId:       GearScoreUpgradeDefinitionRequiredItemID;
    RequiredItemQuantity: number;
}

export type GearScoreUpgradeDefinitionRequiredItemID = "UmbralShardT1";

export type GeneratorRecipes = {
    StructureID:             string;
    Tickrate:                number;
    OutputItem:              string;
    OutputQty:               number | null;
    TooltipText:             string;
    FuelCategory:            string;
    TickrateProximityFactor: number | null;
}

export type GenericInviteData = {
    ActivityCrc:           string;
    ActivityType:          number;
    DurationSec:           number;
    Teams:                 number | null;
    MinLevel:              number | null;
    MaxLevel:              string;
    FactionType:           string;
    MinDistance:           string;
    MaxDistance:           number;
    AllowInSanctuary:      boolean;
    AllowInFtue:           boolean;
    AllowInWarPrep:        boolean;
    AllowInWar:            boolean;
    AllowInArena:          boolean;
    DisallowInGameModes:   string;
    DisallowedWaterDepths: string;
}

export type HighWaterMarkRankData = {
    Rank:                  number;
    ExceedMin0:            number;
    ExceedMax0:            number;
    FloorDistance:         number;
    ChanceToExceed0:       number;
    ChanceBump:            number;
    ModifierAffectsBump:   boolean;
    RollupChance:          number;
    RollRangeMaxBonus:     number;
    UmbralIncrementsLevel: boolean;
    CanUseUmbral:          boolean;
    CanUseUmbralOnMinGS:   number;
    CraftingAwardsUmbral:  boolean;
    CraftingGSForRewards:  number;
    ExceedMin1:            number;
    ExceedMax1:            number;
    ChanceToExceed1:       number;
}

export type HouseTypeData = {
    HouseTypeID:                                      string;
    Cost:                                             number;
    "Fast Travel Cooldown Time (Minutes)":            number;
    "Territory Standing Required Level":              number;
    "Max Number Total Housing Items (Without Perks)": number;
    "Localization Tag":                               string;
    "Housing Tag Limits":                             string;
}

export type HunterSightData = {
    SightID:                 string;
    StatusEffectToListenFor: string;
    SightCategoryFlag:       string;
}

export type ImpactSurfaceAlignmentTable = {
    Name:                     string;
    Filter:                   string;
    VerticalCastDist:         number;
    MaxRotAngle:              number;
    TiltToSurface:            boolean;
    SnapToPos:                boolean;
    AlignToDamageableTargets: boolean;
}

export type InteractionAnimationData = {
    InteractionAnimationID:                  InteractionAnimationID;
    PlayerMannequinFragmentStartInteraction: string;
    InteractableTimelineStartInteraction:    InteractableTimelineStartInteraction;
    InteractableTimelineEndInteraction:      InteractableTimelineEndInteraction;
    Notes:                                   string;
}

export type InteractableTimelineEndInteraction = "Interact_End";

export type InteractableTimelineStartInteraction = "Interact_Start";

export type InteractionAnimationID = "" | "HousingItemSitOnChair" | "HousingItemFeedBird" | "HousingItemStandingInteract" | "HousingItemStirPot" | "HousingItemPetBobcat" | "HousingItemPetDeer" | "HousingItemPetTiger" | "HousingItemLieOnBed" | "HousingItemLieOnRug" | "HousingItemPetRabbit" | "HousingItemPetPig" | "HousingItemTouchMimic" | "HousingItemPetBird" | "HousingItemSpookyBook" | "HousingItemSpiderTricks" | "HousingItemPetCat" | "HousingItemPetDog" | "HousingItemPetWolf" | "HousingItemCheerYeti" | "HousingItemWatering" | "HousingItemLieOnBedMirror" | "HousingItemPetHare" | "HousingItemSitOnChair_Snapped" | "QuestAnim_AzothStaff_Create" | "QuestAnim_MSQ_TheRitual";

export type ItemCurrencyConversionData = {
    ConversionID:                       string;
    ItemID:                             string;
    EntitlementId:                      string;
    Perk1:                              string;
    Perk2:                              string;
    Perk3:                              string;
    Perk4:                              string;
    Bought:                             number;
    Sold:                               number;
    ItemQty:                            number;
    DisplayOrder:                       number;
    CategoricalProgressionId:           ItemCurrencyConversionDatumCategoricalProgressionID;
    RankCheckCategoricalProgressionId:  RequiredFaction;
    RequiredCategoricalProgressionRank: number;
    BuyCategoricalProgressionCost:      number | null;
    BuyCurrencyCost:                    number | null;
    BuyCurrencyItemName:                BuyCurrencyItemName;
    BuyCurrencyItemCost:                number | null;
    BuyCooldownSeconds:                 number | null;
    SellCategoricalProgressionCost:     number | null;
    SellCurrencyCost:                   number | null;
    SellAzothCost:                      string;
    InContracts:                        boolean | null;
}

export type BuyCurrencyItemName = "" | "OutpostRushAzothEssence" | "WCToken" | "WCPToken" | "SummerMedley_Token" | "SummerMedley_PremiumToken" | "NightveilHallow_Token" | "Springtide_Token" | "Springtide_PremiumToken";

export type ItemCurrencyConversionDatumCategoricalProgressionID = "MarauderTokens" | "CovenantTokens" | "SyndicateTokens" | "Battle_Token" | "" | "EventProgress" | "SummerEventProgress" | "HalloweenEventProgress" | "SpringEventProgress";

export type ItemPerkSwapData = {
    Key:     string;
    KeyType: string;
    OldPerk: string;
    NewPerk: string;
}

export type ItemSkinData = {
    ItemSkinID:      string;
    IndexID:         number;
    IsEntitlement:   number;
    FromItemIDs:     string;
    NeedsOneClasses: NeedsOneClasses;
    RequiredClasses: RequiredClasses;
    ExcludedClasses: string;
    ToItemID:        string;
    Outfit:          string;
    IsTemporarySkin: boolean;
}

export type NeedsOneClasses = "EquippableHead" | "EquippableChest" | "EquippableHands" | "EquippableLegs" | "EquippableFeet" | "EquippableMainHand" | "EquippableOffHand" | "EquippableTwoHand" | "EquippableTool";

export type RequiredClasses = "" | "Hatchet" | "Sword" | "Shield" | "2HHammer" | "FireStaff" | "2HAxe" | "Rapier" | "Spear" | "Bow" | "IceMagic" | "LifeStaff" | "Musket" | "VoidGauntlet" | "SkinningKnife" | "Sickle" | "Pickaxe" | "LoggingAxe" | "FishingPole" | "AzothStaff" | "Blunderbuss" | "InstrumentFlute" | "InstrumentDrums" | "InstrumentGuitar" | "InstrumentUprightBass" | "InstrumentMandolin" | "GreatSword" | "ShieldK" | "ShieldR" | "ShieldT";

export type ItemSoundEvents = {
    ItemSoundID:  ItemSoundIDEnum;
    Sheathe:      string;
    Unsheathe:    string;
    SheatheFLY:   string;
    UnsheatheFLY: UnsheatheFLY;
    Defense:      Defense;
}

export type Defense = "Play_1H_Melee_Block" | "Play_1H_ShieldA_Metal_Defense" | "Play_1H_ShieldA_Wood_Defense" | "";

export type ItemSoundIDEnum = "" | "1H_ShieldA_metal" | "2H_Spear" | "1H_Rapier" | "2H_Blunderbuss" | "1H_Sword" | "1H_ShieldA_wood" | "1H_Axe" | "2H_GreatSword" | "2H_WarHammer" | "2H_GreatAxe" | "2H_Bow" | "2H_Rifle" | "Staff_Fire" | "Staff_Life" | "Gauntlet_Ice" | "1H_Knife" | "1H_Sickle" | "2H_Axe" | "1H_Pick" | "2H_Pick" | "MXMI_Flute" | "MXMI_Drums" | "MXMI_Guitar" | "MXMI_UprightBass" | "MXMI_Mandolin" | "MagicStaff" | "Gauntlet_Void" | "2H_Greatsword" | "Staff_fire" | "1h_axe" | "default" | "1H_Club" | "1H_Melee_Default" | "1H_Pistol" | "1H_Torch" | "2H_Club" | "2H_Melee_Default";

export type UnsheatheFLY = "" | "Play_1H_ShieldA_Metal_FLY_Unsheathed" | "Play_1H_ShieldA_Wood_FLY_Unsheathed" | "Play_2HRifle_FLY_Unsheathed" | "Play_Blunderbuss_FLY_Unsheathed";

export type ItemTooltipLayout = {
    ItemID:                 string;
    "Loc Note":             string;
    DerivedFromText:        string;
    DerivedFromIcon:        string;
    RefinedAtText:          string;
    RefinedAtLabelText:     string;
    RefinedAtIcon:          string;
    CanBeCraftedTextsSmall: string;
    CanBeCraftedIconsSmall: string;
    SpecialInstructions:    string;
    UsedAtTexts:            string;
    UsedAtIcons:            string;
    CommonUsesLabelText:    string;
    CommonUsesTextsLarge:   string;
    CommonUsesIconsLarge:   string;
    CommonUsesItemsLarge:   string;
    CommonUsesTextsSmall:   string;
    CommonUsesIconsSmall:   string;
    CommonUsesItemsSmall:   string;
    CanBeCraftedTextsLarge: string;
    CanBeCraftedIconsLarge: string;
    ResourcesLabelText:     string;
    ResourcesTexts:         string;
    ResourcesIcons:         string;
    ResourcesAmounts:       string;
    RefineryInputText:      string;
    RefineryInputIcon:      string;
    RefineryInputAmount:    string;
    RefineryOutputText:     string;
    RefineryOutputIcon:     string;
    RefineryOutputAmount:   string;
    MainHeaderIcon:         string;
    ResourcesHeaderIcon:    string;
}

export type ItemTransform = {
    FromItemId: string;
    ToItemId:   string;
    KeepPerks:  boolean;
}

export type JointAlias = {
    SkeletonName:  string;
    Xform:         Xform;
    Head:          string;
    Neck:          string;
    Spine:         string;
    RightHand:     string;
    RightForeArm:  string;
    RightMidArm:   string;
    RightUpperArm: string;
    LeftHand:      string;
    LeftForeArm:   string;
    LeftMidArm:    string;
    LeftUpperArm:  string;
}

export type Xform = "Xform" | "bind_xform" | "xform_C0_0_jnt" | "xform";

export type KitItemDefinitions = {
    ItemID:       string;
    KitType:      KitType;
    StationTypes: string;
}

export type KitType = "Crafting" | "Repair";

export type LeaderboardData = {
    LeaderboardId:                  string;
    IsEnabled:                      boolean;
    Namespace:                      Namespace;
    Rotation:                       Rotation;
    LeaderboardDefinitionId:        string;
    FactionLeaderboardDefinitionId: string;
    DataSheetCategory:              DataSheetCategory;
    CharacterLeaderboard:           boolean;
    GroupLeaderboard:               boolean;
    CompanyLeaderboard:             boolean;
    FactionLeaderboard:             boolean;
    GameMode:                       string;
    FirstLevelCategory:             FirstLevelCategory;
    SecondLevelCategory:            string;
    SecondLevelCategoryPriority:    number | null;
    DisplayName:                    string;
    DisplayNamePriority:            number | null;
    Category:                       string;
    CategoryPriority:               number | null;
    Faction:                        string;
    Rewards:                        string;
    ItemRewards:                    string;
    EntitlementRewards:             string;
    CategoryDescription:            CategoryDescription;
    CategoryAdditionalHeader:       CategoryAdditionalHeader;
    RewardType:                     string;
    NameString:                     string;
    ValueString:                    ValueString;
}

export type CategoryAdditionalHeader = "" | "@ui_leaderboard_with_gold";

export type CategoryDescription = "@ui_leaderboard_tip_war_score" | "" | "@ui_leaderboard_tip_inv_war_wins" | "@ui_leaderboard_tip_invasion_score" | "@ui_leaderboard_tip_outpostrush_score" | "@ui_leaderboard_tip_darkness_score";

export type DataSheetCategory = "War" | "Invasion" | "Outpost Rush" | "Darkness Breaches" | "Open World PVP" | "Expeditions" | "Trials" | "Territory Control" | "PVP Arenas" | "Tradeskills";

export type FirstLevelCategory = "Faction War" | "Vs. Environment" | "Vs. Players" | "Mutated Expeditions" | "Trade Skills";

export type Namespace = "pc";

export type Rotation = "Month" | "Season" | "Week";

export type ValueString = "@ui_leaderboard_column_score" | "@ui_leaderboard_column_damage" | "@ui_leaderboard_column_heals" | "@ui_leaderboard_column_kills" | "@ui_leaderboard_column_wins" | "@ui_leaderboard_column_ratio" | "@ui_leaderboard_column_contributed" | "@ui_leaderboard_column_influence" | "@ui_leaderboard_column_captured" | "@ui_leaderboard_column_time" | "@ui_leaderboard_column_completed" | "@ui_leaderboard_column_days" | "@ui_leaderboard_column_crafted" | "@ui_leaderboard_column_caught";

export type LeaderboardStatData = {
    LeaderboardStatId:        string;
    Notes:                    LeaderboardStatDatumNotes;
    Namespace:                Namespace;
    Rotation:                 Rotation;
    StatType:                 string;
    Aggregation:              Aggregation;
    ServiceStatId:            string;
    CategoricalProgressionId: GatheringTradeskill;
    GameMode:                 GameMode;
    Scope:                    Scope;
    PersonalBest:             string;
}

export type Aggregation = "Max" | "Sum" | "Min";

export type GameMode = "War" | "OutpostRush" | "Invasion" | "Darkness" | "" | "OpenWorldPvp" | "Arena_LostSiren_Reekwater" | "Arena_Spriggan_AngryEarth_T1" | "Arena_SwampBeast_Reekwater" | "Arena3v3" | "Expedition" | "DungeonGreatCleave01";

export type LeaderboardStatDatumNotes = "" | "Brightwood" | "Everfall" | "Reekwater" | "Windsward" | "Ebonscale" | "First Light" | "CutlassKeys" | "Mourningdale" | "Monarchs Bluffs" | "WeaversFen" | "Restless Shore" | "Brimstone Sands";

export type Scope = "Character" | "Company" | "Global" | "Group";

export type LevelDisparityData = {
    LevelDisparity:               number;
    DamageModifier:               number;
    PhysicalArmorRatingModifier:  number;
    ElementalArmorRatingModifier: number;
    SkipDeathsDoor:               AdjustPowerLevel;
    IncomingPowerLevelZero:       AdjustPowerLevel;
    AdjustPowerLevel:             AdjustPowerLevel;
    RequiredPowerLevel:           number;
    AdjustedPowerLevel:           number;
    AdjustedHitStun:              number;
    VisionDistanceAdjustment:     number;
    MaxRewardLevelDelta:          number;
    KillExpModifier:              number;
    EventExpModifier:             number;
}

export type AdjustPowerLevel = "FALSE" | "TRUE";

export type LootLimitData = {
    LootLimitID:                 string;
    IsReplicated:                boolean;
    MinLimitSeconds:             number;
    MaxLimitSeconds:             number;
    CountLimit:                  number;
    MinLimitMult:                number;
    MaxLimitMult:                number;
    LimitExpireSeconds:          number;
    LootTagValuePerCount:        number | null;
    LootTagValueOverrideAtLimit: string;
    LimitNotificationLocTag:     LimitNotificationLOCTag;
}

export type LimitNotificationLOCTag = "" | "@ui_reached_max_fort_takeover_rewards" | "@ui_reached_max_daily_pvp_arena_reward";

export type LootTablesData = {
    LootTableID:            string;
    "AND/OR":               TableType;
    RollBonusSetting:       RollBonusSetting;
    Conditions:             Conditions;
    ConditionOverridesRoll: UseAllDamageModifiers | number | null;
    TriggerLimitOnVisit?:   UseAllDamageModifiers;
    UseLevelGS:             UseAllDamageModifiers;
    HWMMult:                number | null | string;
    ChanceToExceedIndex:    string;
    GSBonus:                number | null | string;
    MaxRoll:                number | null;
    Item1:                  string;
    GearScoreRange1:        string;
    PerkBucketOverrides1:   string;
    Item2:                  string;
    GearScoreRange2:        string;
    PerkBucketOverrides2:   PerkBucketOverrides2;
    Item3:                  string;
    GearScoreRange3:        string;
    PerkOverrides3:         string;
    Item4:                  string;
    GearScoreRange4:        string;
    PerkOverrides4:         string;
    Item5:                  string;
    GearScoreRange5:        string;
    PerkOverrides5:         string;
    Item6:                  string;
    GearScoreRange6:        string;
    PerkOverrides6:         string;
    Item7:                  string;
    GearScoreRange7:        string;
    PerkOverrides7:         string;
    Item8:                  string;
    GearScoreRange8:        string;
    PerkOverrides8:         string;
    Item9:                  string;
    GearScoreRange9:        string;
    PerkOverrides9:         string;
    Item10:                 string;
    GearScoreRange10:       GearScoreRange10;
    PerkOverrides10:        string;
    Item11:                 string;
    GearScoreRange11:       GearScoreRange11;
    PerkOverrides11:        string;
    Item12:                 string;
    GearScoreRange12:       GearScoreRange12;
    PerkOverrides12:        string;
    Item13:                 string;
    GearScoreRange13:       GearScoreRange13;
    PerkOverrides13:        string;
    Item14:                 string;
    GearScoreRange14:       GearScoreRange14;
    PerkOverrides14:        string;
    Item15:                 string;
    GearScoreRange15:       GearScoreRange15;
    PerkOverrides15:        string;
    Item16:                 string;
    GearScoreRange16:       GearScoreRange1;
    PerkOverrides16:        string;
    Item17:                 string;
    GearScoreRange17:       GearScoreRange1;
    PerkOverrides17:        string;
    Item18:                 string;
    GearScoreRange18:       GearScoreRange18;
    PerkOverrides18:        string;
    Item19:                 string;
    GearScoreRange19:       GearScoreRange19;
    PerkOverrides19:        string;
    Item20:                 string;
    GearScoreRange20:       GearScoreRange20;
    PerkOverrides20:        string;
    Item21:                 string;
    GearScoreRange21:       GearScoreRange21;
    PerkOverrides21:        string;
    Item22:                 string;
    GearScoreRange22:       GearScoreRange22;
    PerkOverrides22:        string;
    Item23:                 string;
    GearScoreRange23:       GearScoreRange23;
    PerkOverrides23:        string;
    Item24:                 string;
    GearScoreRange24:       GearScoreRange24;
    PerkOverrides24:        string;
    Item25:                 string;
    GearScoreRange25:       GearScoreRange25;
    PerkOverrides25:        string;
    Item26:                 string;
    GearScoreRange26:       GearScoreRange2;
    PerkOverrides26:        string;
    Item27:                 string;
    GearScoreRange27:       GearScoreRange2;
    PerkOverrides27:        string;
    Item28:                 string;
    GearScoreRange28:       GearScoreRange28;
    PerkOverrides28:        string;
    Item29:                 string;
    GearScoreRange29:       string;
    PerkOverrides29:        string;
    Item30:                 string;
    GearScoreRange30:       string;
    PerkOverrides30:        string;
    Item31:                 string;
    GearScoreRange31:       string;
    PerkOverrides31:        string;
    Item32:                 string;
    GearScoreRange32:       string;
    PerkOverrides32:        string;
    Item33:                 string;
    GearScoreRange33:       string;
    PerkOverrides33:        string;
    Item34?:                string;
    GearScoreRange34?:      string;
    PerkOverrides34?:       string;
    Item35?:                string;
    GearScoreRange35?:      string;
    PerkOverrides35?:       string;
}

export type Conditions = "" | "EnemyLevel" | "EnemyLevel,Elite" | "MinPOIContLevel" | "MinContLevel,Varangian" | "MinContLevel,VarangianPOI" | "VarangianPOI" | "MinContLevel,GreatCleave01" | "GreatCleave01" | "Level" | "GlobalMod" | "LootTableDiverted" | "Fresh,FishRarity" | "FishSize" | "Salt,FishRarity" | "Elite" | "Named" | "Common" | "BossTrophyArtifact" | "GypsumYellow" | "GypsumBlue" | "GypsumBlack" | "MinContLevel" | "Amrine" | "ShatteredObelisk" | "ShatteredObelisk_Mut" | "Reekwater00" | "Edengrove00" | "Ebonscale00" | "Ebonscale00_Mut" | "RestlessShores01" | "Restless01_Mut" | "ShatterMtn00" | "CutlassKeys00" | "BrimstoneSands00" | "Fire" | "Ice" | "Nature" | "Void" | "MutDiff" | "Goblin" | "ToolMoteFire" | "ToolMoteEarth" | "ToolMoteAir" | "ToolMoteWater" | "ToolMoteSpirit" | "ToolMoteLife" | "ToolMoteDeath" | "SerpentsPass" | "Hermopolis" | "PyramidTemple" | "Victualis" | "PyramidObservatory" | "Westwall" | "ScorpionNest" | "Diospolis" | "Wadi" | "ScorpionLair" | "Sutekh" | "LegionHQ" | "SalvageItemTier" | "SalvageItemRarity" | "SalvageItemGearScore" | "[LIM]Tag_S1Event_PityTicker" | "Varangian,Named" | "TurkeyKnife";

export type GearScoreRange10 = "" | "300-335";

export type GearScoreRange11 = "" | "300-345";

export type GearScoreRange12 = "" | "300-355";

export type GearScoreRange13 = "" | "300-365";

export type GearScoreRange14 = "" | "300-375";

export type GearScoreRange15 = "" | "300-385";

export type GearScoreRange1 = "" | "300-395";

export type GearScoreRange18 = "" | "400-415";

export type GearScoreRange19 = "" | "400-425";

export type GearScoreRange20 = "" | "400-435";

export type GearScoreRange21 = "" | "400-445";

export type GearScoreRange22 = "" | "400-455";

export type GearScoreRange23 = "" | "400-465";

export type GearScoreRange24 = "" | "400-475";

export type GearScoreRange25 = "" | "400-485";

export type GearScoreRange2 = "" | "400-495";

export type GearScoreRange28 = "" | "500-515";

export type PerkBucketOverrides2 = "" | "GlobalAttributeBucketT5,GlobalBucket,GlobalGemSlotChanceT5";

export type RollBonusSetting = "AddToRoll" | "" | "ClampMax" | "IgnoreBonus";

export type LootTagPresetData = {
    LootTagPresetID: string;
    LootTags:        string;
}

export type LoreData = {
    LoreID:            string;
    Type:              LoreDatumType;
    Title:             string;
    Subtitle:          string;
    Body:              string;
    AchievementId:     string;
    ParentID:          string;
    Order:             number;
    ImagePath:         string;
    LocationName:      LocationName;
    LocationXY:        LocationXY;
    AssociatedQuest:   AssociatedQuest;
    Writer:            Writer;
    LocNotes:          string;
    RecordingStatus:   RecordingStatus;
    LoreNotesLocation: string;
}

export type AssociatedQuest = "" | "An Antiquarian's Dream" | "Amateur Adventurer" | "End of MSQ" | "FactionIntro_Covenant_02" | "99A_MSQ_01_LearnSoulwardens" | "99A_MSQ_01B_LearnSoulwardens" | "06A_MSQ_08_DefeatCommander" | "06A_MSQ_10_LootPirateCrates" | "06A_Z_01_GetBisonNotes" | "06A_IR_01_FindCreed" | "99B_MSQ_01_searchwalsham" | "99B_MSQ_02_meetgalahad" | "99B_MSQ_03_lostvillages" | "99B_MSQ_06_lostcathedral" | "99B_MSQ_07_cursedcemetery" | "99C_MSQ_01_Periville" | "99C_MSQ_03_AncientBridge" | "The Charmed Child";

export type LocationName = "" | "@FTUE_Location_lore1a" | "@Lore_Title_Outpost_LordEveretts" | "@Lore_Title_Outpost_TrueDuncansWatch" | "@Lore_Title_Outpost_AuroraAeternae" | "@Lore_Title_Outpost_FirstLight" | "@Lore_Title_Outpost_WeaversStation" | "@Lore_Title_Outpost_WeaversPost" | "@Lore_Title_Outpost_WeaversPeak" | "@Lore_Title_Outpost_MonarchStation";

export type LocationXY = "" | "7756.703,2911.032" | "9192.671,2803.025" | "9124.650,3782.668" | "8039.102,2196.508" | "11183.032,5123.895" | "12363.708,5760.285" | "10900.025,4266.920" | "7837.036,5530.253";

export type RecordingStatus = "" | "Not Recorded";

export type LoreDatumType = "Default" | "Chapter" | "Topic";

export type Writer = "" | "Grace Li" | "Pierre Auguste" | "Pierre-Auguste" | "Lerato Molefe" | "Hirai Harunobu" | "Jan Jaansen" | "Jennifer Klasing" | "Carrie Berg" | "Daniel Jacobs" | "Benjamin Barker" | "James Huang" | "David McKenzie" | "Rob Chestney" | "Divya" | "David Dunne";

export type LoreItemDefinitions = {
    LoreItemId: string;
    LoreId:     string;
}

export type ManaCostsPlayer = {
    ID:        number;
    CostID:    string;
    ManaCost:  number;
    WeaponTag: WeaponTag;
}

export type MasterItemDefinitions = {
    ItemID:                          string;
    Name:                            string;
    ItemType:                        ItemType;
    ItemTypeDisplayName:             ItemTypeDisplayName;
    Description:                     string;
    ItemClass:                       string;
    TradingCategory:                 TradingCategory;
    TradingFamily:                   TradingFamil;
    TradingGroup:                    MasterItemDefinitionTradingGroup;
    BindOnPickup:                    number | null | string;
    BindOnEquip:                     number | null | string;
    GearScoreOverride:               number | null | string;
    MinGearScore:                    number | null | string;
    MaxGearScore:                    number | null | string;
    Tier:                            number | null | string;
    ItemStatsRef:                    string;
    GrantsHWMBump:                   string;
    IgnoreNameChanges:               number | null | string;
    IgnoreHWMScaling:                number | null | string;
    CanHavePerks:                    number | null | string;
    CanReplaceGem:                   number | null | string;
    Perk1:                           Perk1;
    Perk2:                           string;
    Perk3:                           string;
    Perk4:                           string;
    Perk5:                           string;
    PerkBucket1:                     PerkBucket1;
    PerkBucket2:                     PerkBucket2;
    PerkBucket3:                     PerkBucket3;
    PerkBucket4:                     PerkBucket4;
    PerkBucket5:                     PerkBucket5;
    ForceRarity:                     number | null | string;
    RequiredLevel:                   number | null | string;
    UseTypeAffix:                    number | null;
    UseMaterialAffix:                number | null;
    UseMagicAffix:                   number | null;
    UiItemClass:                     UIItemClass;
    ArmorAppearanceM:                string;
    ArmorAppearanceF:                string;
    WeaponAppearanceOverride:        string;
    ConfirmDestroy:                  number | null | string;
    ConfirmBeforeUse:                number | null;
    ConsumeOnUse:                    number | null | string;
    PrefabPath:                      string;
    HousingTags:                     string;
    IconPath:                        string;
    HiResIconPath:                   number | string;
    MaxStackSize:                    number | null;
    DeathDropPercentage:             number | null | string;
    Nonremovable:                    number | null | string;
    IsMissionItem:                   number | null | string;
    IsUniqueItem:                    number | null | string;
    IsRequiredItem?:                 number | null;
    ContainerLevel:                  number | null | string;
    ContainerGS:                     number | null | string;
    ExceedMinIndex?:                 string;
    ExceedMaxIndex?:                 string;
    IsSalvageable:                   number | null | string;
    SalvageResources:                number | null | string;
    IsRepairable:                    number | null | string;
    RepairDustModifier:              number | null | string;
    RepairRecipe:                    string;
    CraftingRecipe:                  ProceduralTierId1;
    RepairGameEventID:               string;
    SalvageGameEventID:              string;
    SalvageAchievement:              string;
    RepairTypes:                     string;
    IngredientCategories:            string;
    IngredientBonusPrimary:          number | null | string;
    IngredientBonusSecondary:        number | null | string;
    IngredientGearScoreBaseBonus:    number | null | string;
    IngredientGearScoreMaxBonus:     number | null | string;
    ExtraBonusItemChance:            string;
    Durability:                      number | null | string;
    DurabilityDmgOnDeath:            number | null | string;
    DestroyOnBreak:                  number | null;
    Weight:                          number | null | string;
    AcquisitionNotificationId:       AudioPickup | number | null;
    AudioPickup:                     AudioPickup;
    AudioPlace:                      MasterItemDefinitionAudioPlace;
    AudioUse:                        AudioUse;
    AudioCreated:                    AudioCreated;
    AudioDestroyed:                  AudioDestroyed;
    MannequinTag:                    MasterItemDefinitionMannequinTag;
    SoundTableID:                    ItemSoundIDEnum;
    WarboardGatherStat:              WarboardGatherStat;
    WarboardDepositStat:             string;
    Notes:                           string;
    HideInLootTicker:                number | null | string;
    CanRollPerkOnUpgrade?:           number | null | string;
    WeaponAccessory?:                WeaponAccessory;
    SalvageLootTags?:                string;
    EventId?:                        string;
    AttributionId?:                  AttributionID;
    ObtainableReleaseVersion?:       ObtainableReleaseVersion;
    HeartgemRuneTooltipTitle?:       HeartgemRuneTooltipTitle;
    HeartgemTooltipBackgroundImage?: HeartgemTooltipBackgroundImage;
    HideFromRewardOpenPopup?:        number | null | string;
    ExclusivelyForWarCampTier?:      number | null;
    SalvageEntitlementId?:           string;
    ParentItemId_DVT?:               string;
    IgnoreParentColumns_DVT?:        IgnoreParentColumnsDVT;
}

export type AudioPickup = "" | "Play_UI_Pickup_Blueprint" | "Play_UI_Pickup_Generic" | "Play_UI_Pickup_Firearm" | "Play_UI_Pickup_Wood" | "Play_UI_Pickup_Bow" | "Play_UI_Pickup_Stone_Tool" | "Play_UI_Pickup_Sword" | "Play_UI_Pickup_Axe" | "Play_UI_Pickup_Knife" | "Play_UI_Pickup_Arrow" | "Play_UI_Pickup_Liquid" | "Play_UI_Pickup_Armour" | "Play_UI_Pickup_Leather" | "Play_UI_Pickup_Metal_Weapon" | "Play_UI_Pickup_Cloth" | "Play_UI_Pickup_Bullet" | "Play_UI_Pickup_Coin" | "Play_UI_Pickup_Slimy" | "Play_UI_Pickup_Paper" | "Play_UI_Pickup_Stone" | "Play_UI_Pickup_Metal" | "Play_UI_Pickup_Foliage" | "Play_UI_Pickup_Grass" | "Play_UI_Pickup_Meat" | "Play_UI_Drop_Blueprint";

export type AudioCreated = "Play_UI_Created_Generic" | "Play_UI_Created_Firearm" | "Play_UI_Created_Wood" | "Play_UI_Created_Bow" | "Play_UI_Created_Stone_Tool" | "Play_UI_Created_Sword" | "Play_UI_Created_Axe" | "Play_UI_Created_Knife" | "Play_UI_Created_Arrow" | "Play_UI_Created_Liquid" | "Play_UI_Created_Armour" | "Play_UI_Created_Leather" | "Play_UI_Created_Metal_Weapon" | "Play_UI_Created_Cloth" | "" | "Play_UI_Created_Bullet" | "Play_UI_Created_Blueprint" | "Play_UI_Created_Coin" | "Play_UI_Created_Slimy" | "Play_UI_Created_Paper" | "Play_UI_Created_Stone" | "Play_UI_Created_Metal" | "Play_UI_Created_Foliage" | "Play_UI_Created_Grass" | "Play_UI_Created_Meat";

export type AudioDestroyed = "Play_UI_item_broken" | "";

export type MasterItemDefinitionAudioPlace = "Play_UI_Drop_Generic" | "Play_UI_Drop_Firearm" | "Play_UI_Drop_Wood" | "Play_UI_Drop_Bow" | "Play_UI_Drop_Stone_Tool" | "Play_UI_Drop_Sword" | "Play_UI_Drop_Axe" | "Play_UI_Drop_Knife" | "Play_UI_Drop_Arrow" | "Play_UI_Drop_Liquid" | "Play_UI_Legion_Axe" | "Play_UI_Drop_Armour" | "Play_UI_Drop_Leather" | "Play_UI_Drop_Metal_Weapon" | "Play_UI_Drop_Cloth" | "" | "Play_UI_Drop_Bullet" | "Play_UI_Drop_Blueprint" | "Play_UI_Drop_Coin" | "Play_UI_Drop_Slimy" | "Play_UI_Drop_Paper" | "Play_UI_Drop_Stone" | "Play_UI_Drop_Metal" | "Play_UI_Drop_Foliage" | "Play_UI_Drop_Grass" | "Play_UI_Drop_Meat" | "Play_UI_MXMI_AZF_Equip_Inventory" | "Play_UI_MXMI_DRM_Equip_Inventory" | "Play_UI_MXMI_AG_Equip_Inventory" | "Play_UI_MXMI_URB_Equip_Inventory" | "Play_UI_MXMI_MAN_Equip_Inventory" | "Play_UI_Corrupted_Axe" | "Play_UI_Lost_Axe" | "Play_UI_Ancient_Axe" | "Play_UI_AngryEarth_Axe" | "Play_UI_Drowned_Axe" | "Play_UI_Dynasty_Axe" | "Play_UI_Graverobber_Axe" | "Play_UI_Use_Blueprint";

export type AudioUse = "Play_UI_Use_Generic" | "Play_UI_Use_Firearm" | "Play_UI_Use_Wood" | "Play_UI_Use_Bow" | "Play_UI_Use_Stone_Tool" | "Play_UI_Use_Sword" | "Play_UI_Use_Axe" | "Play_UI_Use_Knife" | "Play_UI_Use_Arrow" | "play_turkey_vox_alertcall" | "Play_UI_Use_Liquid" | "Play_UI_Use_Armour" | "Play_UI_Use_Leather" | "Play_UI_Use_Metal_Weapon" | "Play_UI_Use_Cloth" | "" | "Play_UI_Use_Bullet" | "Play_UI_Use_Blueprint" | "Play_UI_Use_Coin" | "Play_UI_Use_Slimy" | "Play_UI_Use_Paper" | "Play_UI_Use_Stone" | "Play_UI_Use_Metal" | "Play_UI_Use_Foliage" | "Play_UI_Use_Grass" | "Play_UI_Use_Meat" | "Play_UI_Created_Blueprint";

export type HeartgemRuneTooltipTitle = "" | "@ui_itemtooltiptitle_heartgem_rune_stone_form" | "@ui_itemtooltiptitle_heartgem_rune_detonate" | "@ui_itemtooltiptitle_heartgem_rune_grasping_vines" | "@ui_itemtooltiptitle_heartgem_rune_heretics_fall" | "@ui_itemtooltiptitle_heartgem_rune_cannon_blast" | "@ui_itemtooltiptitle_heartgem_rune_bile_bomb" | "@ui_itemtooltiptitle_heartgem_rune_fire_storm";

export type HeartgemTooltipBackgroundImage = "" | "lyshineui/images/tooltipimages/runestoneformtooltip.dds" | "lyshineui/images/tooltipimages/runedetonatetooltip.dds" | "lyshineui/images/tooltipimages/runegraspingvinestooltip.dds" | "lyshineui/images/tooltipimages/runehereticsfalltooltip.dds" | "lyshineui/images/tooltipimages/runecannonblasttooltip.dds" | "lyshineui/images/tooltipimages/runebilebombtooltip.dds" | "lyshineui/images/tooltipimages/runeFireStormtooltip.dds";

export type IgnoreParentColumnsDVT = "GearScoreOverride,SalvageResources,GrantsHWMBump" | "ForceRarity,GearScoreOverride,CanRollPerkOnUpgrade" | "Perk5,ForceRarity,GearScoreOverride,CanRollPerkOnUpgrade" | "";

export type ItemType = "Weapon" | "Resource" | "Ammo" | "Consumable" | "Armor" | "Dye" | "Blueprint" | "Currency" | "Lore" | "ThrowableItem" | "";

export type ItemTypeDisplayName = "" | "@ui_itemtypedescription_tool" | "@DungeonCutlassKeys00_CannonBall_MasterName" | "@ui_itemtypedescription_ammo" | "@ui_itemtypedescription_consumable" | "@ui_itemtypedescription_resource" | "@ui_itemtypedescription_dye" | "@ui_itemtypedescription_axe" | "@ui_itemtypedescription_greatsword" | "@ui_itemtypedescription_bow" | "@ui_itemtypedescription_firestaff" | "@ui_itemtypedescription_heavy_chest_slot" | "@ui_itemtypedescription_heavy_glove_slot" | "@ui_itemtypedescription_normal_head_slot" | "@ui_itemtypedescription_normal_feet_slot" | "@ui_itemtypedescription_sword" | "@ui_itemtypedescription_hatchet" | "@ui_itemtypedescription_warhammer" | "@ui_itemtypedescription_musket" | "@ui_itemtypedescription_roundshield" | "@ui_itemtypedescription_kiteshield" | "@ui_itemtypedescription_towershield" | "@ui_itemtypedescription_lifestaff" | "@ui_itemtypedescription_spear" | "@ui_itemtypedescription_rapier" | "@ui_itemtypedescription_icegauntlet" | "@ui_itemtypedescription_voidgauntlet" | "@ui_itemtypedescription_blunderbuss" | "@ui_itemtypedescription_heavy_head_slot" | "@ui_itemtypedescription_heavy_legs_slot" | "@ui_itemtypedescription_heavy_feet_slot" | "@ui_itemtypedescription_normal_chest_slot" | "@ui_itemtypedescription_normal_glove_slot" | "@ui_itemtypedescription_normal_legs_slot" | "@ui_itemtypedescription_light_head_slot" | "@ui_itemtypedescription_light_chest_slot" | "@ui_itemtypedescription_light_glove_slot" | "@ui_itemtypedescription_light_legs_slot" | "@ui_itemtypedescription_light_feet_slot" | "@ui_itemtypedescription_bag" | "@ui_itemtypedescription_Normal_head_slot" | "@ui_itemtypedescription_Normal_chest_slot" | "@ui_itemtypedescription_Normal_glove_slot" | "@ui_itemtypedescription_Normal_legs_slot" | "@ui_itemtypedescription_Normal_feet_slot" | "@ui_itemtypedescription_Key_item" | "@ui_itemtypedescription_furniture" | "@ui_itemtypedescription_recipe" | "@ui_itemtypedescription_bait" | "@ui_itemtypedescription_instrument" | "@ui_itemtypedescription_weapon" | "@ui_itemtypedescription_amuletjewelry" | "@ui_itemtypedescription_ringjewelry" | "@ui_itemtypedescription_earringjewelry" | "@ui_itemtypedescription_heartgem_rune" | "@ui_itemtypedescription_outpostrush" | "@ui_itemtypedescription_Heavy_head_slot" | "@ui_itemtypedescription_medium_chest_slot" | "@ui_itemtypedescription_medium_feet_slot" | "@ui_itemtypedescription_quest_item" | "@reward_type_marks_of_fortune" | "@reward_type_statuseffect" | "@reward_type_player_title" | "@reward_type_Apparelskin_legs_slot" | "@reward_type_Apparelskin_feet_slot" | "@reward_type_Apparelskin_chest_slot" | "@reward_type_Apparelskin_hands_slot" | "@reward_type_Apparelskin_head_slot" | "@reward_type_house_pet" | "@reward_type_loadout" | "@reward_type_emote" | "@reward_type_campskin" | "@reward_type_guildcrest_pack" | "@reward_type_Toolskin_miningpick" | "@reward_type_Toolskin_azothstaff" | "@reward_type_Toolskin_harvestingsickle" | "@reward_type_Toolskin_skinningknife" | "@reward_type_Toolskin_fishingpole" | "@reward_type_Toolskin_loggingaxe" | "@reward_type_Weaponskin_GreatAxe" | "@reward_type_Weaponskin_FireStaff" | "@reward_type_Weaponskin_Musket" | "@reward_type_Weaponskin_Spear" | "@reward_type_Weaponskin_IceGauntlet" | "@reward_type_Weaponskin_Hatchet" | "@reward_type_Weaponskin_kiteshield" | "@reward_type_Weaponskin_Sword" | "@reward_type_Weaponskin_Bow" | "@reward_type_Apparelskin_Set" | "@reward_type_housing_item" | "@ui_itemtypedescription_housingitem";

export type MasterItemDefinitionMannequinTag = "" | "DebugOil" | "HolyOil" | "2H_Rifle";

export type ObtainableReleaseVersion = "" | "Feature_RabbitSeason";

export type Perk1 = "" | "PerkID_Stat_TwoHandSoldier" | "PerkID_Stat_TwoHandRanger" | "PerkID_Stat_TwoHandScholar" | "PerkID_Stat_ArmorSoldier" | "PerkID_Stat_ArmorSentry" | "PerkID_Stat_ArmorRanger" | "PerkID_Stat_ArmorScholar" | "PerkID_Stat_ArmorSage" | "PerkID_Stat_ArmorCleric" | "PerkID_Stat_ArmorBarbarian" | "PerkID_Stat_ArmorBrigand" | "PerkID_Stat_ArmorOccultist" | "PerkID_Stat_ArmorMonk" | "PerkID_Stat_ArmorDuelist" | "PerkID_Stat_ArmorMage" | "PerkID_Stat_OneHandBarbarian" | "PerkID_Stat_TwoHandMage" | "PerkID_Stat_TwoHandSage" | "PerkID_Stat_TwoHandWarden" | "PerkID_Stat_ArmorPriest" | "FishLineStrengthSalt3" | "FishLuckDay3" | "FishLineStrengthFresh3" | "FishLuckNight3" | "FishLuckDay1" | "FishLuckDay2" | "PerkID_Stat_OneHandFighter" | "PerkID_Stat_TwoHandFighter" | "PerkID_Stat_TwoHandAssassin" | "PerkID_Stat_TwoHandCavalier" | "PerkID_Stat_ArmorFighter" | "PerkID_Stat_OneHandSoldier" | "PerkID_Weapon_DmgAeternian" | "PerkID_Armor_DefAeternian" | "PerkID_Stat_OneHandRanger" | "PerkID_Stat_OneHandScholar" | "PerkID_Stat_OneHandSage" | "PerkID_Stat_OneHandSentry" | "PerkID_Stat_TwoHandSentry" | "PerkID_HeartgemRune_StoneForm_Major" | "PerkID_HeartgemRune_Detonate_Major" | "PerkID_HeartgemRune_GraspingVines_Major" | "PerkID_HeartgemRune_HereticsFall_Major" | "PerkID_HeartgemRune_CannonBlast_Major" | "PerkID_HeartgemRune_BileBomb_Major" | "PerkID_HeartgemRune_FireStorm_Major" | "PerkID_Stat_TwoHandBrigand" | "PerkID_Stat_TwoHandBarbarian" | "PerkID_Stat_TwoHandOccultist" | "PerkID_Stat_TwoHandCleric" | "PerkID_Stat_TwoHandPriest" | "PerkID_Stat_TwoHandTrickster" | "PerkID_Stat_OneHandKnight" | "PerkID_Stat_OneHandCavalier" | "PerkID_Stat_OneHandNomad" | "PerkID_Stat_OneHandWarden" | "PerkID_Stat_OneHandBrigand" | "PerkID_Stat_TwoHandKnight" | "PerkID_Stat_ArmorCavalier" | "PerkID_Stat_ArmorSpellsword" | "PerkID_Stat_ArmorKnight" | "PerkID_Stat_ArmorZealot" | "PerkID_Stat_ArmorNomad" | "PerkID_Stat_ArmorWarden" | "PerkID_Stat_ArmorDruid" | "PerkID_Stat_ArmorAssassin" | "PerkID_Stat_ArmorBattlemage" | "PerkID_Stat_ArmorTrickster" | "PerkID_Stat_TwoHandSpellsword" | "perkid_stat_twohandbarbarian" | "perkid_stat_onehandknight" | "perkid_stat_twohandoccultist" | "PerkID_Stat_OneHandSpellsword" | "PerkID_Stat_OneHandMonk" | "PerkID_Stat_OneHandZealot" | "PerkID_Stat_OneHandCleric" | "PerkID_Stat_OneHandDruid" | "PerkID_Stat_OneHandBattlemage" | "PerkID_Stat_OneHandAssassin" | "PerkID_Stat_TwoHandMonk" | "PerkID_Stat_TwoHandDuelist" | "PerkID_Stat_TwoHandArtificer" | "PerkID_Stat_TwoHandBattlemage" | "PerkID_Stat_TwoHandZealot" | "PerkID_Stat_TwoHandBattleMage" | "PerkID_Stat_TwoHandDruid" | "PerkID_Stat_TwoHandNomad" | "PerkID_Bags_WeightAdd" | "PerkID_Tools_Durability" | "FishDurability3" | "perkid_stat_twohandfighter" | "perkid_stat_armorsentry" | "perkid_stat_armoroccultist" | "perkid_stat_twohandmage" | "perkid_stat_armorsoldier" | "perkid_stat_onehandbarbarian" | "PerkID_Earring_Weaponsmith" | "perkid_stat_armordruid" | "PerkID_Stat_ArmorArtificer" | "PerkID_Armor_MiningLuck" | "PerkID_Armor_HarvestingLuck" | "perkid_stat_armorpriest" | "perkid_stat_twohandscholar" | "perkid_stat_twohandknight" | "perkid_stat_armorwarden" | "perkid_stat_twohandranger" | "perkid_stat_twohandsoldier" | "perkid_stat_armorassassin";

export type PerkBucket1 = "" | "CraftingAttributeBucketT5" | "AttributeSwordT5" | "AttributeHatchetT5" | "AttributeWarhammerT5" | "AttributeGreatAxeT5" | "AttributeBowT5" | "AttributeMusketT5" | "AttributeShieldT5" | "AttributeFireStaffT5" | "AttributeLifeStaffT5" | "AttributeSpearT5" | "AttributeRapierT5" | "AttributeVoidGauntletT5" | "AttributeBlunderbussT5" | "AttributeGreatSwordT5" | "GlobalAttributeBucketT5" | "GlobalAttributeBucket" | "CraftingAttributeBucketT2" | "CraftingAttributeBucketT3" | "CraftingAttributeBucketT4" | "GlobalAttributeBucketChanceT5" | "PerkBucket_SkinningItemT1BucketChance" | "PerkBucket_SkinningItemT2BucketChance" | "PerkBucket_SkinningItemT3BucketChance" | "PerkBucket_HarvestingItemT1BucketChance" | "PerkBucket_HarvestingItemT2BucketChance" | "PerkBucket_HarvestingItemT3BucketChance" | "PerkBucket_LoggingItemT1BucketChance" | "PerkBucket_LoggingItemT2BucketChance" | "PerkBucket_LoggingItemT3BucketChance" | "PerkBucket_MiningItemT1BucketChance" | "PerkBucket_MiningItemT2BucketChance" | "PerkBucket_MiningItemT3BucketChance" | "FishingItemT1BucketChance" | "FishingItemT2BucketChance" | "FishingItemT3BucketChance" | "PerkBucket_InstrumentsT2Chance" | "PerkBucket_InstrumentsT3Chance" | "PerkBucket_InstrumentsT4Chance" | "PerkBucket_InstrumentsT5Chance" | "AttributeSwordT2" | "AttributeSwordT3" | "AttributeSwordT4" | "AttributeRapierT2" | "AttributeRapierT3" | "AttributeRapierT4" | "AttributeHatchetT2" | "AttributeHatchetT3" | "AttributeHatchetT4" | "AttributeGreatSwordT2" | "AttributeGreatSwordT3" | "AttributeGreatSwordT4" | "AttributeWarhammerT2" | "AttributeWarhammerT3" | "AttributeWarhammerT4" | "AttributeGreatAxeT2" | "AttributeGreatAxeT3" | "AttributeGreatAxeT4" | "AttributeSpearT2" | "AttributeSpearT3" | "AttributeSpearT4" | "AttributeBowT2" | "AttributeBowT3" | "AttributeBowT4" | "AttributeMusketT2" | "AttributeMusketT3" | "AttributeMusketT4" | "AttributeBlunderbussT2" | "AttributeBlunderbussT3" | "AttributeBlunderbussT4" | "AttributeFireStaffT2" | "AttributeFireStaffT3" | "AttributeFireStaffT4" | "AttributeLifeStaffT2" | "AttributeLifeStaffT3" | "AttributeLifeStaffT4" | "AttributeShieldT2" | "AttributeShieldT3" | "AttributeShieldT4" | "AttributeVoidGauntletT2" | "AttributeVoidGauntletT3" | "AttributeVoidGauntletT4" | "GlobalAttributeBucketT2" | "GlobalAttributeBucketT3" | "GlobalAttributeBucketT4" | "PerkBucket_CraftedPerkBucketRollT2" | "PerkBucket_CraftedPerkBucketRollT3" | "PerkBucket_CraftedPerkBucketRollT4Bucket3" | "PerkBucket_CraftedPerkBucketRollT5Bucket3" | "SingleStat_AttributesT5" | "CastAttributeSwordT5" | "CastAttributeHatchetT5" | "CastAttributeWarhammerT5" | "CastAttributeBowT5" | "CastAttributeMusketT5" | "CastAttributeBlunderbussT5" | "CastAttributeFireStaffT5" | "CastAttributeLifeStaffT5" | "CastAttributeSpearT5" | "CastAttributeGreatAxeT5" | "CastAttributeGreatSwordT5" | "CastAttributeRapierT5" | "CastAttributeVoidGauntletT5" | "CastAttributeShieldT5" | "CastAttributeBucketChanceT5" | "CastAttributeBucketT5" | "FlameCoreAttributeSwordT5" | "FlameCoreAttributeHatchetT5" | "FlameCoreAttributeWarhammerT5" | "FlameCoreAttributeBowT5" | "FlameCoreAttributeMusketT5" | "FlameCoreAttributeBlunderbussT5" | "FlameCoreAttributeFireStaffT5" | "FlameCoreAttributeLifeStaffT5" | "FlameCoreAttributeSpearT5" | "FlameCoreAttributeGreatAxeT5" | "FlameCoreAttributeGreatSwordT5" | "FlameCoreAttributeRapierT5" | "FlameCoreAttributeVoidGauntletT5" | "FlameCoreAttributeShieldT5" | "PerkBucket_FlameCore_SingleStat_Armor" | "GlobalAttributeBucketChanceT2" | "GlobalAttributeBucketChanceT3" | "GlobalAttributeBucketChanceT4" | "FishingArmorT2Bucket" | "FishingArmorT3Bucket" | "FishingArmorT4Bucket" | "FishingArmorT5Bucket" | "AttributeGreatswordT4" | "AttributeGreatswordT5" | "SingleStatPVPRT_AttributesT2_Heavy" | "SingleStatPVPRT_AttributesT3_Heavy" | "SingleStatPVPRT_AttributesT4_Heavy" | "SingleStatPVPRT_AttributesT5_Heavy" | "SingleStatPVPRT_AttributesT2_Medium" | "SingleStatPVPRT_AttributesT3_Medium" | "SingleStatPVPRT_AttributesT4_Medium" | "SingleStatPVPRT_AttributesT5_Medium" | "SingleStatPVPRT_AttributesT2_Light" | "SingleStatPVPRT_AttributesT3_Light" | "SingleStatPVPRT_AttributesT4_Light" | "SingleStatPVPRT_AttributesT5_Light" | "SingleStatPVPRT_Attributes_Acc" | "SingleStat_AttributesT5_Light_Always" | "SingleStat_AttributesT5_Medium_Always" | "SingleStat_AttributesT5_Heavy_Always";

export type PerkBucket2 = "" | "PerkBucket_MasterGlobalPerkBucketRoll" | "GlobalGemSlotChanceT5" | "CraftingGemSlotChanceT2" | "CraftingGemSlotChanceT3" | "CraftingGemSlotChanceT4" | "CraftingGemSlotChanceT5" | "PerkBucket_SkinningItemT1BucketChance" | "PerkBucket_SkinningItemT2BucketChance" | "PerkBucket_SkinningItemT3BucketChance" | "PerkBucket_HarvestingItemT1BucketChance" | "PerkBucket_HarvestingItemT2BucketChance" | "PerkBucket_HarvestingItemT3BucketChance" | "PerkBucket_LoggingItemT1BucketChance" | "PerkBucket_LoggingItemT2BucketChance" | "PerkBucket_LoggingItemT3BucketChance" | "PerkBucket_MiningItemT1BucketChance" | "PerkBucket_MiningItemT2BucketChance" | "PerkBucket_MiningItemT3BucketChance" | "FishingItemT1BucketChance" | "FishingItemT2BucketChance" | "FishingItemT3BucketChance" | "PerkBucket_InstrumentsT2Chance" | "PerkBucket_InstrumentsT3Chance" | "PerkBucket_InstrumentsT4Chance" | "PerkBucket_InstrumentsT5Chance" | "PerkBucket_CraftedPerkBucketRollT2" | "PerkBucket_CraftedPerkBucketRollT3" | "PerkBucket_CraftedPerkBucketRollT4Bucket3" | "PerkBucket_CraftedPerkBucketRollT5Bucket3" | "PerkBucket_CraftedPerkBucketRollT4Bucket4" | "PerkBucket_CraftedPerkBucketRollT5Bucket4" | "PerkBucket_AmrineBucket" | "PerkBucket_ObeliskBucket" | "PerkBucket_TheDepthsBucket" | "PerkBucket_DynastyShipyardBucket" | "PerkBucket_LazarusBucket" | "PerkBucket_GenesisBucket" | "PerkBucket_MyrkgardBucket" | "PerkBucket_GlobalBucketChanceT5" | "PerkBucket_BarnaclesBucket" | "GlobalGemSlotT5" | "PerkBucket_CraftedPerkBucketRollT5Fixed" | "PerkBucket_CastPerkBucketRollT5Bucket2" | "CastGemSlotChanceT5Bucket2" | "CastGemSlotChanceT5Bucket3" | "PerkBucket_CastPerkBucketRollT5Bucket3" | "PerkBucket_WinterEvent" | "PerkBucket_SpringEvent" | "PerkBucket_SummerEvent" | "PerkBucket_GlobalPerkBucketRollT2" | "PerkBucket_GlobalPerkBucketRollT3" | "PerkBucket_GlobalPerkBucketRollT4Bucket3" | "PerkBucket_GlobalPerkBucketRollT5Bucket3" | "PerkBucket_WarGemsBucket" | "PerkBucket_PvPBucket1" | "PerkBucket_PvPGemsBucket" | "PerkBucket_CorruptedBucketChanceT2" | "PerkBucket_CorruptedBucketChanceT3" | "PerkBucket_CorruptedBucketChanceT4Bucket3" | "PerkBucket_CorruptedBucketChanceT5Bucket3" | "PerkBucket_CorruptedBucket" | "PerkBucket_LostBucketChanceT2" | "PerkBucket_LostBucketChanceT3" | "PerkBucket_LostBucketChanceT4Bucket3" | "PerkBucket_LostBucketChanceT5Bucket3" | "PerkBucket_LostBucket" | "PerkBucket_AncientBucketChanceT2" | "PerkBucket_AncientBucketChanceT3" | "PerkBucket_AncientBucketChanceT4Bucket3" | "PerkBucket_AncientBucketChanceT5Bucket3" | "PerkBucket_AncientBucket" | "PerkBucket_AngryEarthBucketChanceT2" | "PerkBucket_AngryEarthBucketChanceT3" | "PerkBucket_AngryEarthBucketChanceT4Bucket3" | "PerkBucket_AngryEarthBucketChanceT5Bucket3" | "PerkBucket_AngryEarthBucket" | "PerkBucket_EliteLostBucket" | "PerkBucket_EliteAncientBucket" | "PerkBucket_EliteAngryEarthBucket" | "PerkBucket_EliteCorruptedBucket" | "PerkBucket_EliteDrownedBucket" | "GlobalAttributeBucketT2" | "GlobalAttributeBucketT3" | "GlobalAttributeBucketT4" | "GlobalAttributeBucketT5" | "PerkBucket_InvasionGemsBucket" | "GlobalGemSlotChanceT2" | "GlobalGemSlotChanceT3" | "PerkBucket_BreachBucket" | "PerkBucket_BreachFamily_T3Chance" | "PerkBucket_BreachFamily_T4Chance" | "PerkBucket_BreachFamily_T5Chance" | "PerkBucket_GlobalBucket" | "PerkBucket_PVPRTPerks_T2Bucket2Chance" | "PerkBucket_PVPRTPerks_T3Bucket2Chance" | "PerkBucket_PVPRTPerks_T4Bucket2Chance" | "PerkBucket_PVPRTPerks_T5Bucket2Chance" | "PerkBucket_PvPRT_GemsBucketPrestige_T5" | "PerkBucket_PVPRTPerks_T4PrestigeBucket4Chance" | "PerkBucket_PVPRTPerks_T5PrestigeBucket4Chance" | "PerkBucket_TrackBucketGuarantee_Weapons" | "PerkBucket_TrackBucketGuaranteeDefense_Armor";

export type PerkBucket3 = "" | "PerkBucket_CraftingPerkBucketChanceT5" | "PerkBucket_CraftingPerkBucketChanceT2" | "PerkBucket_CraftingPerkBucketChanceT3" | "PerkBucket_CraftingPerkBucketChanceT4" | "PerkBucket_GlobalBucketChanceT5" | "PerkBucket_SkinningItemT2BucketChance" | "PerkBucket_SkinningItemT3BucketChance" | "PerkBucket_HarvestingItemT2BucketChance" | "PerkBucket_HarvestingItemT3BucketChance" | "PerkBucket_LoggingItemT2BucketChance" | "PerkBucket_LoggingItemT3BucketChance" | "PerkBucket_MiningItemT2BucketChance" | "PerkBucket_MiningItemT3BucketChance" | "FishingItemT1BucketChance" | "FishingItemT2BucketChance" | "FishingItemT3BucketChance" | "PerkBucket_InstrumentsT3Chance2" | "PerkBucket_InstrumentsT4Chance2" | "PerkBucket_InstrumentsT5Chance2" | "CraftingGemSlotChanceT2" | "CraftingGemSlotChanceT3" | "CraftingGemSlotChanceT4" | "CraftingGemSlotChanceT5" | "PerkBucket_CraftedPerkBucketRollT4Bucket4" | "PerkBucket_CraftedPerkBucketRollT5Bucket4" | "PerkBucket_CraftedPerkBucketRollT3" | "PerkBucket_CraftedPerkBucketRollT4Bucket3" | "PerkBucket_CraftedPerkBucketRollT5Bucket3" | "PerkBucket_CraftedPerkBucketRollT5Bucket5" | "PerkBucket_TheDepthsBucketChanceT4Bucket4" | "PerkBucket_DynastyShipyardBucketChanceT4Bucket4" | "PerkBucket_LazarusBucketChanceT5Bucket4" | "PerkBucket_GenesisBucketChanceT5Bucket4" | "PerkBucket_MyrkgardBucketChanceT5Bucket4" | "PerkBucket_BarnaclesBucketChanceT5Bucket4" | "GlobalGemSlotChanceT5" | "GlobalGemSlotChanceT4" | "GlobalGemSlotT5" | "PerkBucket_CraftedPerkBucketRollT5Fixed" | "CastGemSlotChanceT5Bucket3" | "PerkBucket_CastPerkBucketRollT5Bucket3" | "PerkBucket_FlameCore_Weapon" | "PerkBucket_FlameCore_Armor" | "SummerGemSlot" | "PerkBucket_WinterEvent" | "GlobalGemSlotChanceT2" | "GlobalGemSlotChanceT3" | "PerkBucket_WarBucket" | "PerkBucket_OutpostRushBucket" | "PerkBucket_PvPGemsBucket" | "PerkBucket_PvPBucket1" | "PerkBucket_CorruptedBucketChanceT2" | "PerkBucket_CorruptedBucketChanceT3" | "PerkBucket_CorruptedBucketChanceT4Bucket3" | "PerkBucket_CorruptedBucketChanceT5Bucket3" | "PerkBucket_LostBucketChanceT2" | "PerkBucket_LostBucketChanceT3" | "PerkBucket_LostBucketChanceT4Bucket3" | "PerkBucket_LostBucketChanceT5Bucket3" | "PerkBucket_AncientBucketChanceT2" | "PerkBucket_AncientBucketChanceT3" | "PerkBucket_AncientBucketChanceT4Bucket3" | "PerkBucket_AncientBucketChanceT5Bucket3" | "PerkBucket_AngryEarthBucketChanceT2" | "PerkBucket_AngryEarthBucketChanceT3" | "PerkBucket_AngryEarthBucketChanceT4Bucket3" | "PerkBucket_AngryEarthBucketChanceT5Bucket3" | "PerkBucket_BreachBucket" | "PerkBucket_InvasionBucket" | "PerkBucket_GlobalPerkBucketRollT3" | "PerkBucket_InvasionGemsBucket" | "PerkBucket_AngryEarthBucket" | "PerkBucket_GlobalBucket" | "PerkBucket_EliteLostBucket" | "PerkBucket_EliteAngryEarthBucket" | "BreachGemSlotChanceT3" | "BreachGemSlotChanceT4" | "BreachGemSlotChanceT5" | "PerkBucket_BreachPerksBucket4_T4Chance" | "PerkBucket_BreachPerksBucket4_T5Chance" | "EliteBreachGemSlotChanceT3" | "EliteBreachGemSlotChanceT4" | "EliteBreachGemSlotChanceT5" | "PerkBucket_EliteBreachPerksBucket4_T4Chance" | "PerkBucket_EliteBreachPerksBucket4_T5Chance" | "PerkBucket_CraftingCarnelian" | "PerkBucket_CraftingMalachite" | "PerkBucket_CraftingOpal" | "PerkBucket_CraftingSapphire" | "PerkBucket_CraftingDiamond" | "PerkBucket_OpPlaytest_WeaponBucket" | "PerkBucket_OpPlaytest_ArmorBucket" | "PerkBucket_PvPRT_GemsBucket_T2" | "PerkBucket_PvPRT_GemsBucket_T3" | "PerkBucket_PvPRT_GemsBucket_T4" | "PerkBucket_PvPRT_GemsBucket_T5" | "PerkBucket_PVPRTPerks_T4PrestigeBucket4Chance" | "PerkBucket_PVPRTPerks_T5PrestigeBucket4Chance" | "PerkBucket_PvPRT_GemsBucketPrestige_T5" | "PerkBucket_PVPRTPerks_T4Bucket4Chance" | "PerkBucket_PVPRTPerks_T5Bucket4Chance" | "PerkBucket_PVPRTPerks_T5Bucket5Chance";

export type PerkBucket4 = "" | "PerkBucket_CraftingPerkBucketChanceT5" | "PerkBucket_GlobalPerkBucketRollT5Bucket4" | "PerkBucket_CraftingPerkBucketChanceT3" | "PerkBucket_CraftingPerkBucketChanceT4" | "PerkBucket_GlobalBucketChanceT5" | "PerkBucket_SkinningItemT3BucketChance" | "PerkBucket_HarvestingItemT3BucketChance" | "PerkBucket_LoggingItemT3BucketChance" | "PerkBucket_MiningItemT3BucketChance" | "FishingItemT2BucketChance" | "FishingItemT3BucketChance" | "PerkBucket_InstrumentsT4Chance3" | "PerkBucket_InstrumentsT5Chance3" | "PerkBucket_CraftedPerkBucketRollT4Bucket4" | "PerkBucket_CraftedPerkBucketRollT5Bucket4" | "PerkBucket_CraftedPerkBucketRollT5Bucket5" | "PerkBucket_TheDepthsBucketChanceT4Bucket4" | "PerkBucket_DynastyShipyardBucketChanceT4Bucket4" | "PerkBucket_LazarusBucketChanceT5Bucket4" | "PerkBucket_GenesisBucketChanceT5Bucket4" | "PerkBucket_MyrkgardBucketChanceT5Bucket4" | "PerkBucket_BarnaclesBucketChanceT5Bucket4" | "PerkBucket_LazarusBucketChanceT5Bucket5" | "PerkBucket_GenesisBucketChanceT5Bucket5" | "PerkBucket_MyrkgardBucketChanceT5Bucket5" | "PerkBucket_BarnaclesBucketChanceT5Bucket5" | "PerkBucket_HalloweenEvent" | "PerkBucket_CraftedPerkBucketRollT5Fixed" | "PerkBucket_CastPerkBucketRollT5Bucket4" | "PerkBucket_FlameCore_Weapon" | "PerkBucket_FlameCore_Armor" | "PerkBucket_WinterEvent" | "PerkBucket_SpringEvent" | "PerkBucket_SummerEvent" | "PerkBucket_GlobalPerkBucketRollT4Bucket4" | "PerkBucket_WarBucket" | "PerkBucket_WarBucketChanceT4" | "PerkBucket_OutpostRushBucketChanceT5Bucket4" | "PerkBucket_PvPBucket1Chance" | "PerkBucket_WarBucketChanceT5" | "PerkBucket_PvPBucket2Chance" | "PerkBucket_CorruptedBucketChanceT4Bucket4" | "PerkBucket_CorruptedBucketChanceT5Bucket4" | "PerkBucket_LostBucketChanceT4Bucket4" | "PerkBucket_LostBucketChanceT5Bucket4" | "PerkBucket_AncientBucketChanceT4Bucket4" | "PerkBucket_AncientBucketChanceT5Bucket4" | "PerkBucket_AngryEarthBucketChanceT4Bucket4" | "PerkBucket_AngryEarthBucketChanceT5Bucket4" | "PerkBucket_EliteLostBucketChanceT4Bucket4" | "PerkBucket_EliteLostBucketChanceT5Bucket4" | "PerkBucket_EliteAncientBucketChanceT5Bucket4" | "PerkBucket_EliteAngryEarthBucketChanceT5Bucket4" | "PerkBucket_EliteCorruptedBucketChanceT5Bucket4" | "PerkBucket_EliteDrownedBucketChanceT5Bucket4" | "FishingArmorT3BucketChance" | "FishingArmorT4BucketChance" | "FishingArmorT5BucketChance" | "PerkBucket_BreachBucketChanceT5Bucket4" | "PerkBucket_InvasionBucketChanceT4" | "PerkBucket_InvasionBucket" | "PerkBucket_BreachBucketChanceT4Bucket4" | "PerkBucket_TheDepthsBucketChance" | "PerkBucket_DynastyShipyardBucketChance" | "PerkBucket_LazarusBucketChanceT5" | "PerkBucket_GenesisBucketChanceT5" | "PerkBucket_ObeliskBucketChance" | "PerkBucket_InvasionBucketChanceT5" | "PerkBucket_MutatorDynastyShipyardRollT5Bucket5" | "PerkBucket_MutatorDepthsRollT5Bucket5" | "PerkBucket_MutatorShatteredObeliskRollT5Bucket5" | "PerkBucket_InjectedMutatorPerkBucketRollT5Bucket4" | "PerkBucket_MutatorArmorPerkBucketRollT5Bucket5" | "PerkBucket_MutatorEarringRollT5Bucket5" | "PerkBucket_MutatorRingRollT5Bucket5" | "PerkBucket_BreachPerksBucket4_T4Chance" | "PerkBucket_BreachPerksBucket4_T5Chance" | "PerkBucket_BreachPerksBucket5_T5Chance" | "PerkBucket_EliteBreachPerksBucket4_T4Chance" | "PerkBucket_EliteBreachPerksBucket4_T5Chance" | "PerkBucket_EliteBreachPerksBucket5_T5Chance" | "PerkBucket_GlobalBucket" | "PerkBucket_OpPlaytest_ArmorBucket" | "PerkBucket_OpPlaytest_WeaponBucket" | "PerkBucket_PVPRTPerks_T4Bucket4Chance" | "PerkBucket_PVPRTPerks_T5Bucket4Chance" | "PerkBucket_PVPRTPerks_T5Bucket5Chance" | "PerkBucket_PVPRTPerks_T5PrestigeBucket4Chance" | "PerkBucket_TrackBucket4_Chance" | "PerkBucket_TrackBucketGuarantee_Weapons" | "PerkBucket_TrackBucketGuarantee_Trinkets" | "PerkBucket_TrackBucket45ChanceOther_Armor" | "PerkBucket_TrackBucketGuaranteeOther_Armor" | "PerkBucket_MasterGlobalPerkBucketRoll";

export type PerkBucket5 = "" | "PerkBucket_CraftingPerkBucketChanceT5" | "PerkBucket_CraftedPerkBucketRollT5Bucket5" | "PerkBucket_GlobalPerkBucketRollT5Bucket5" | "PerkBucket_GlobalBucketChanceT5" | "PerkBucket_CraftingPerkBucketChanceT4" | "PerkBucket_Tool5thPerk" | "PerkBucket_InstrumentsT5Chance3" | "PerkBucket_Bag5thPerk" | "PerkBucket_LazarusBucketChanceT5Bucket5" | "PerkBucket_GenesisBucketChanceT5Bucket5" | "PerkBucket_MyrkgardBucketChanceT5Bucket5" | "PerkBucket_BarnaclesBucketChanceT5Bucket5" | "PerkBucket_HalloweenEvent" | "PerkBucket_CraftedPerkBucketRollT5Fixed" | "PerkBucket_CastPerkBucketRollT5Bucket5" | "PerkBucket_WinterEvent" | "PerkBucket_SpringEvent" | "PerkBucket_SummerEvent" | "PerkBucket_WarBucketChanceT5" | "PerkBucket_PvPBucket1Chance" | "PerkBucket_CorruptedBucketChanceT5Bucket5" | "PerkBucket_LostBucketChanceT5Bucket5" | "PerkBucket_AncientBucketChanceT5Bucket5" | "PerkBucket_AngryEarthBucketChanceT5Bucket5" | "PerkBucket_EliteLostBucketChanceT5Bucket5" | "PerkBucket_EliteAncientBucketChanceT5Bucket5" | "PerkBucket_EliteAngryEarthBucketChanceT5Bucket5" | "PerkBucket_EliteCorruptedBucketChanceT5Bucket5" | "PerkBucket_EliteDrownedBucketChanceT5Bucket5" | "FishingArmorT4BucketChance" | "FishingArmorT5BucketChance" | "PerkBucket_BreachBucketChanceT5Bucket5" | "PerkBucket_InvasionBucketChanceT5" | "PerkBucket_BreachBucketChanceT5Bucket5_Weights" | "PerkBucket_LazarusBucketChanceT5" | "PerkBucket_GenesisBucketChanceT5" | "PerkBucket_InvasionBucketChance" | "GlobalGemSlotChanceT5" | "PerkBucket_MutatorShatteredObeliskRollT5Bucket5" | "PerkBucket_MutatorDynastyShipyardRollT5Bucket5" | "PerkBucket_TheDepthsBucketChanceT4Bucket4" | "PerkBucket_MutatorDepthsRollT5Bucket5" | "PerkBucket_InjectedMutatorPerkBucketRollT5Bucket5" | "PerkBucket_MutatorArmorPerkBucketRollT5Bucket5" | "PerkBucket_InjectedArmorPerkBucketRollT5Bucket5" | "PerkBucket_MutatorAmuletRollT5Bucket5" | "PerkBucket_MutatorEarringRollT5Bucket5" | "PerkBucket_MutatorRingRollT5Bucket5" | "PerkBucket_BreachPerksBucket5_T5Chance" | "PerkBucket_EliteBreachPerksBucket5_T5Chance" | "PerkBucket_GlobalBucket" | "PerkBucket_OpPlaytest_ArmorBucket" | "PerkBucket_OpPlaytest_WeaponBucket" | "PerkBucket_PVPRTPerks_T5Bucket5Chance" | "PerkBucket_TrackBucket5_Chance" | "PerkBucket_TrackBucketGuarantee_Weapons" | "PerkBucket_TrackBucketGuarantee_Trinkets" | "PerkBucket_TrackBucket45ChanceOther_Armor" | "PerkBucket_TrackBucketGuaranteeOther_Armor";

export type TradingCategory = "" | "Utilities" | "Resources" | "Weapons" | "Apparel" | "Furnishings" | "Tools" | "Ammo";

export type TradingFamil = "" | "EventConsumables" | "Components" | "Dyes" | "1Handed" | "2Handed" | "Shields" | "Magical" | "ArmorHeavy" | "ArmorMedium" | "ArmorLight" | "RawResources" | "MusicSheets" | "RefinedResources" | "Azoth" | "AlchemyResources" | "CookingIngredients" | "SchematicsFurnishing" | "CookingRecipes" | "ArcanaResources" | "SpecialResources" | "Potion" | "Coating" | "Tincture" | "Enhancements" | "Bait" | "FoodRecovery" | "FoodTradeskill" | "FoodAttribute" | "GatheringTools" | "Instruments" | "AmmoIron" | "AmmoSteel" | "AmmoStarmetal" | "AmmoOrichalcum" | "Amulets" | "Rings" | "Earrings" | "Bags" | "DyeIngredients" | "RuneglassFamily" | "CraftingConsumables";

export type MasterItemDefinitionTradingGroup = "" | "FoodAttribute" | "CraftingPatterns" | "ConsumableLuck" | "DyeYellow" | "DyeMagenta" | "DyeCyan" | "Swords" | "Hatchets" | "WarHammers" | "GreatAxes" | "Bows" | "Muskets" | "ShieldsRound" | "ShieldsKite" | "ShieldsTower" | "StavesFire" | "StavesLife" | "Spears" | "Rapiers" | "GauntletIce" | "GauntletVoid" | "Blunderbuss" | "GreatSword" | "SlotHead" | "SlotChest" | "SlotHands" | "SlotLegs" | "SlotFeet" | "Salvage" | "Guitars" | "Drums" | "UprightBass" | "Mandolins" | "Flutes" | "Rawhide" | "Leather" | "Stone" | "Block" | "Flint" | "Ore" | "Ingot" | "OrePrecious" | "IngotPrecious" | "Wood" | "Timber" | "Fiber" | "Cloth" | "CraftingComponents" | "AzothVial" | "Oil" | "Beeswax" | "AlchemyProtective" | "AlchemyOffensive" | "Charcoal" | "Feather" | "Gunpowder" | "RefiningComponents" | "Berry" | "RecipeFurnishing" | "Seasonings" | "Meat" | "Water" | "Grain" | "Egg" | "Fruit" | "Vegetable" | "Nut" | "Honey" | "CookingComponents" | "Recipes" | "AlchemyMedicinal" | "AlchemyMagical" | "ArcanaEarth" | "ArcanaFire" | "ArcanaAir" | "ArcanaWater" | "ArcanaSpirit" | "ArcanaLife" | "ArcanaDeath" | "AttributeItem" | "FishLarge" | "FishingSalvage" | "FishMedium" | "FishSmall" | "RawGem" | "CutGem" | "Utility" | "Defensive" | "Offensive" | "Conditional" | "PotionHealth" | "PotionMana" | "PotionFocus" | "PotionEncumbrance" | "CoatingBeast" | "CoatingLost" | "CoatingCorrupted" | "CoatingAncient" | "CoatingAngryEarth" | "CoatingAeternian" | "PotionPurifyB" | "PotionWellness" | "PotionElemDefense" | "CraftingConsumables" | "BaitFresh" | "BaitSalt" | "FoodHealthRecovery" | "FoodMana" | "FoodMiner" | "FoodHarvester" | "FoodHunter" | "FoodLumberjack" | "FoodWeaponsmith" | "FoodJewelcrafter" | "FoodEngineer" | "FoodArcanist" | "FoodArmorer" | "FoodSTR" | "FoodDEX" | "FoodINT" | "FoodCON" | "FoodFOC" | "1hSkinningKnife" | "1hSickle" | "2hAxe" | "2hPick" | "FishingPoles" | "InstrumentComponents" | "Arrows" | "Shots" | "TrinketComponents" | "CraftedAmulet" | "CraftedRing" | "CraftedEarring" | "BagA" | "DyeGrey" | "DyeBrown" | "DyeRed" | "DyeOrange" | "DyeGreen" | "DyeTurquoise" | "DyeBlue" | "DyePurple" | "Pigments" | "RuneglassAmber" | "RuneglassAmethyst" | "RuneglassAquamarine" | "RuneglassCarnelian" | "RuneglassDiamond" | "RuneglassEmerald" | "RuneglassJasper" | "RuneglassMalachite" | "RuneglassMoonstone" | "RuneglassOnyx" | "RuneglassOpal" | "RuneglassRuby" | "RuneglassSapphire" | "RuneglassTopaz" | "RuneglassEmpty" | "DroppedEarring" | "DroppedRing" | "DroppedAmulet" | "RepairKit";

export type UIItemClass = "UI_Weapon" | "UI_Tools" | "UI_Material" | "UI_Ammo" | "UI_Consumable" | "UI_Rewards" | "UI_AttributeFood" | "UI_BasicFood" | "UI_Dye" | "UI_Armor" | "" | "UI_Lore" | "UI_Leatherworking" | "UI_Stonecutting" | "UI_Smelting" | "UI_Woodworking" | "UI_Weaving" | "UI_Alchemy" | "UI_Refining" | "UI_Furniture" | "UI_Cooking" | "UI_OutpostRush" | "UI_TuningOrbs" | "UI_Quest" | "UI_CraftingModifiers" | "UI_Bait" | "UI_Jewelcrafting" | "UI_TradeskillFood" | "UI_Instruments" | "UI_Runes" | "UI_RepairKit";

export type WarboardGatherStat = "" | "Liquid" | "Grass" | "Metal" | "Stone" | "Wood" | "Coin" | "Firearm" | "Cloth" | "Generic" | "Blueprint" | "Sword" | "Bow" | "Axe" | "Knife" | "Leather" | "Foliage" | "Meat" | "Slimy" | "Dirt" | "Armour" | "Stone Tool" | "Paper" | "Arrow" | "Bullet" | "InfusedWoodGathered" | "InfusedOreGathered" | "InfusedHideGathered" | "AzothEssenceGathered";

export type WeaponAccessory = "" | "2hBowT5" | "1hElementalGauntlet_IceT5" | "1hVoidGauntlet_VoidT5" | "2hIceGauntletHeroicT5" | "2hVoidGauntletHeroicT5" | "2hIceGauntletVarangianKnightsV3T5" | "2hVoidGauntletVarangianKnightsV3T5" | "2hIceGauntletCondemedSacrariumT5" | "2hVoidGauntletCondemedSacrariumT5" | "1hicegauntletGraverobberT5" | "VoidGauntletGraverobberT5" | "1hicegauntletShatteredObelisk" | "1hvoidgauntletShatteredObelisk" | "2hBowT3" | "2hBowT4" | "1hElementalGauntlet_IceT3" | "1hElementalGauntlet_IceT4" | "2hVoidGauntletCorruptedT3" | "2hVoidGauntletCorruptedT4" | "2hVoidGauntletCorruptedT5" | "2hIceGauntletBreachT5" | "2hVoidGauntletBreachT5" | "2hicegauntletImmolatedT5" | "2hVoidGauntletVoidbentT5" | "2hVoidGauntletCrystallinePVPBT5" | "2hVoidGauntletDefiledT5" | "2hBowDropT5" | "2hIceGauntletMossborneT5" | "2hVoidGauntletMossborneT5" | "2hIceGauntletWinterDragonT5" | "2hIceGauntletFirelightT5" | "2hVoidGauntletFirelightT5" | "2hIceGauntletHighwaymanT5";

export type MetaAchievementData = {
    MetaAchievementId:                string;
    ReadyForSteam:                    boolean | null;
    SteamApiName:                     string;
    Type:                             string;
    "Predecessor MetaAchievementIds": string;
    ProgressId:                       string;
    ProgressIdParent:                 string;
    UIDisplayCategory:                string;
    HideFromUI:                       boolean | null;
    Title:                            string;
    Description:                      string;
    "Hidden Text":                    HiddenText;
    "Notification Verbosity":         NotificationVerbosity;
    Tier:                             Tier;
    Icon:                             string;
    "Entitlement Id":                 string;
    AchievePoints:                    number;
    Total:                            number | null;
    VitalsCategories:                 VitalsCategories;
    "Categorical Progression":        string;
    LorePagesTopicIds:                LorePagesTopicIDS;
    TradeskillType:                   GatheringTradeskill;
    ItemClass:                        MetaAchievementDatumItemClass;
    TrueFalse:                        boolean | null;
    QuestGroupTag:                    QuestTag;
    GameEventType:                    GameEventType;
    TerritoryId:                      number | null;
    IsPvp:                            IsMajor;
    InGroup:                          IsMajor;
    FactionType:                      RequiredFaction;
    MissionGoalType:                  RespawnTypeToUseForUnstuck;
    GameModeId:                       GameMode;
    GameModeResult:                   GameModeResult;
    AttributeType:                    AttributeType;
    AchievementsID:                   string;
    AchievementCategory:              AchievementCategoryEnum;
}

export type AttributeType = "" | "Strength" | "Dexterity" | "Intelligence" | "Focus" | "Constitution";

export type GameModeResult = "" | "Victory" | "FlawlessVictory";

export type HiddenText = "" | "@ui_metachievement_hidden_pve_preykills_turkeys" | "@ui_metachievement_hidden_pve_preykills_rabbits" | "@ui_metachievement_hidden_pve_preykills_cows" | "@ui_metachievement_hidden_pve_preykills_boars" | "@ui_metachievement_hidden_instance_dungeonboss" | "@ui_metachievement_hidden_progression_characterlevel1" | "@ui_metachievement_hidden_progression_characterlevel2" | "@ui_metachievement_hidden_progression_characterlevel3" | "@ui_metachievement_hidden_progression_characterlevel4" | "@ui_metachievement_hidden_progression_characterlevel5" | "@ui_metachievement_hidden_progression_characterlevel6" | "@ui_metachievement_hidden_emotes_usedalot" | "@ui_metachievement_hidden_player_deaths1" | "@ui_metachievement_hidden_generic" | "@ui_metachievement_hidden_brimstone_ancientglyphs" | "@ui_metachievement_hidden_brimstone" | "@ui_metachievement_hidden_everfall" | "@ui_metachievement_hidden_monarchs" | "@ui_metachievement_hidden_weaversfen" | "@ui_metachievement_hidden_windsward";

export type MetaAchievementDatumItemClass = "" | "bow" | "firestaff" | "2haxe" | "2hhammer" | "hatchet" | "icemagic" | "lifestaff" | "musket" | "rapier" | "spear" | "sword" | "voidgauntlet" | "blunderbuss" | "greatsword" | "wood" | "ore" | "rawhide";

export type LorePagesTopicIDS = "" | "Topic_02_Brightwood" | "Topic_Tales_of_Brimstone_Sands" | "Topic_10_CutlassKeys" | "Topic_08_EbonscaleReach" | "Topic_14_Edengrove" | "Topic_04_Everfall" | "Topic_09_FirstLight" | "Topic_03_GreatCleave" | "Topic_12_MonarchsBluffs" | "Topic_11_Mourningdale" | "Topic_05_Reekwater" | "Topic_15_RestlessShore" | "Topic_07_ShatteredMountain" | "Topic_13_WeaversFen" | "Topic_06_Windsward" | "Topic_00_Aeternum" | "Topic_ThreeFactions" | "Topic_99_MSQ";

export type NotificationVerbosity = "OneHundred" | "SeventyFiveOneHundred";

export type QuestTag = "" | "Brightwoodv2Arc4" | "Brightwoodv2Arc3" | "GreatCleaveArc2" | "GreatCleaveArc1" | "GreatCleaveArc3" | "ReekwaterArc1" | "ReekwaterArc2" | "ReekwaterArc3" | "FishingQuestsArc" | "ShateredMtnArc1" | "ShateredMtnArc3" | "ShateredMtnArc2" | "EbonscaleReachArc3" | "EbonscaleReachArc1" | "EbonscaleReachArc2" | "CutlassKeysArc1" | "CutlassKeysArc2" | "CutlassKeysArc3" | "CutlassKeysArc4" | "MourningdaleArc3" | "MourningdaleArc1" | "MourningdaleArc2" | "EdengroveArc1" | "EdengroveArc2" | "EdengroveArc3" | "RestlessShoreArc2" | "RestlessShoreArc3" | "RestlessShoreArc1" | "BrimstoneSandsArc3" | "BrimstoneSandsArc5" | "BrimstoneSandsArc4" | "BrimstoneSandsArc2" | "BrimstoneSandsArc1" | "Brightwoodv2Arc1" | "Brightwoodv2Arc2";

export type Tier = "@ui_meta_achievements_roman_numeral_i" | "@ui_meta_achievements_roman_numeral_ii" | "@ui_meta_achievements_roman_numeral_iii" | "@ui_meta_achievements_roman_numeral_iv" | "@ui_meta_achievements_roman_numeral_v" | "" | "@ui_meta_achievements_roman_numeral_vi" | "@ui_meta_achievements_roman_numeral_vii";

export type VitalsCategories = "Corrupted" | "Lost" | "AngryEarth" | "Ancient" | "Predator" | "Turkey" | "Rabbit" | "Cow" | "Boar" | "Named,Corrupted" | "Named,Lost" | "Named,AngryEarth" | "Named,Ancient" | "Named,Predator" | "" | "Withered_Brute_Named_08" | "AncientGuardian_Heavy_Boss_Named_DG_Everfall_00" | "Damned_LongSwordsman_Commander_Named_DG_Restless_00" | "Naga_AngryEarth" | "Torso_Boss" | "Dynasty_Empress" | "Isabella_DG_ShatterMtn_Phase2_00" | "Dryad_Siren" | "AnubianGuardian_Horus_Boss" | "Evil_Knight_Fire_Champion_DG_GreatCleave_01";

export type MissionData = {
    MissionID:                                     string;
    MissionTier:                                   number;
    ObjectiveID:                                   string;
    IsCustomObjective?:                            boolean | null;
    CategoricalProgressionId:                      string;
    IsPvpMission?:                                 boolean | null;
    AvailableTerritoryId?:                         number | null;
    RequiredFaction?:                              RequiredFaction;
    RequiredAchievementConditional:                RequiredAchievementConditional;
    RequiredFortControlStatus?:                    number | null;
    ReturnToGiverOverride:                         boolean;
    IsSettlementValidDestination:                  boolean | null;
    IsOutpostValidDestination:                     boolean | null;
    TaskKillContributionOverride:                  string;
    TaskKillContributionQtyOverride:               number | null;
    TerritoryIDOverride:                           number | null | string;
    POITagOverride:                                string;
    TaskGiveAndTakeItemOverride:                   TaskGiveAndTakeItemOverride;
    TaskHaveAndReturnItemsOverride:                string;
    TaskHaveAndReturnItemsQtyOverride:             number | null;
    TaskHaveAndReturnItemsDropProbabilityOverride: number | null | string;
    TaskHaveAndReturnChestDropProbabilityOverride: number | null;
    TaskHaveAndReturnItemsItemsDropVCOverride:     string;
    LootTagOverride:                               string;
    PauseAndClearLootOnTaskCompleteOverride?:      boolean | null;
    TurninDistance:                                string;
    TaskTimerOverride:                             number | null;
    SuccessGameEventIdOverride:                    string;
    FailureGameEventIdOverride:                    FailureGameEventIDOverride;
    TitleOverride:                                 string;
    DescriptionOverride:                           string;
    ImagePath:                                     string;
    MissionGoalType:                               RespawnTypeToUseForUnstuck;
    ProviderDistanceLimit:                         number | null;
    MinLevel:                                      number | null | string;
    MaxLevel:                                      number | null;
    RequiredTradeskill:                            GatheringTradeskill;
    TradeskillLevel:                               number | null;
    Enabled:                                       boolean;
    DevName?:                                      string;
    VCLevelRange?:                                 string;
    RecommendedGroupSize:                          number | null | string;
    PatrolDuration?:                               number | null;
    PatrolPoi1?:                                   PatrolPoi1;
    PatrolPoi2?:                                   string;
    PatrolPoi3?:                                   string;
    PatrolPoi4?:                                   string;
    GrantRewardsToOriginTerritory?:                boolean | null;
    ORMReleaseEventTagsOverride?:                  string;
    OverrideLocation?:                             string;
    TerritoryProjectId?:                           TerritoryProjectID;
    CommunityGoalAmount?:                          number;
    UseGlobalStorageOverride?:                     boolean;
    PauseAndClearLootTagOnTaskCompleteOverride?:   boolean | null;
    DetailImagePath?:                              DetailImagePath;
    EstimatedCompletionTimeMinutes?:               string;
    DifficultyHintString?:                         string;
    AvailableTerritoryID?:                         string;
}

export type DetailImagePath = "" | "LyShineUI\\Images\\MissionImages\\missionImage_wolf.png" | "LyShineUI\\Images\\MissionImages\\missionImage_elk.png" | "LyShineUI\\Images\\MissionImages\\missionImage_rabbit.png" | "LyShineUI\\Images\\MissionImages\\missionImage_turkey.png" | "LyShineUI\\Images\\MissionImages\\missionImage_boar.png" | "LyShineUI\\Images\\MissionImages\\missionImage_sheep.png" | "LyShineUI\\Images\\MissionImages\\missionImage_goat.png" | "LyShineUI\\Images\\MissionImages\\missionImage_bison.png" | "LyShineUI\\Images\\MissionImages\\missionImage_lynx.png" | "LyShineUI\\Images\\MissionImages\\missionImage_alligator.png" | "LyShineUI\\Images\\MissionImages\\missionImage_bear.png" | "LyShineUI\\Images\\MissionImages\\missionImage_ruins2.png";

export type FailureGameEventIDOverride = "FactionMission_Failure" | "PVPMission_Failure" | "CMission_Failure";

export type PatrolPoi1 = "" | "DevWorld_Farm" | "DevWorld_Cave" | "factionarea_40278" | "abandoned_village_40253" | "factionarea_40341" | "factionarea_40285" | "factionarea_40286" | "factionarea_40284" | "factionarea_50147" | "factionarea_50148" | "factionarea_40169" | "factionarea_40424" | "poi_30313_factionarea" | "poi_30245_factionarea" | "poi_30244_factionarea" | "factionarea_40036" | "factionarea_40035" | "factionarea_40034" | "poi_30035_factionarea" | "poi_30036_factionarea" | "poi_30037_factionarea" | "factionarea_60412" | "factionarea_60413" | "factionarea_60411" | "poi_30146_factionarea" | "poi_30147_factionarea" | "poi_30148_factionarea" | "factionarea_60236" | "factionarea_60237" | "factionarea_50394" | "factionarea_50395" | "factionarea_50393" | "factionarea_50247" | "factionarea_50249" | "factionarea_50248" | "factionarea_30329" | "factionarea_30330" | "factionarea_30328";

export type RequiredAchievementConditional = "" | "16_BSMSQ_00" | "16_BSMSQ_05" | "16_BSMSQ_10" | "16_BSMSQ_09";

export type TaskGiveAndTakeItemOverride = "" | "PVP_TimberBundle_1" | "WorkOrder_Faction_Armaments01_T2" | "WorkOrder_Faction_Armaments02_T2" | "WorkOrder_Faction_Armaments03_T2" | "WorkOrder_Faction_Armaments04_T2" | "WorkOrder_Faction_Armaments05_T2" | "WorkOrder_Faction_Armaments06_T2" | "WorkOrder_Faction_Armaments07_T2" | "WorkOrder_Faction_Armaments08_T2" | "WorkOrder_Faction_Armaments09_T2" | "WorkOrder_Faction_Armaments10_T2" | "WorkOrder_Faction_Armaments01_T3" | "WorkOrder_Faction_Armaments02_T3" | "WorkOrder_Faction_Armaments03_T3" | "WorkOrder_Faction_Armaments04_T3" | "WorkOrder_Faction_Armaments05_T3" | "WorkOrder_Faction_Armaments06_T3" | "WorkOrder_Faction_Armaments07_T3" | "WorkOrder_Faction_Armaments08_T3" | "WorkOrder_Faction_Armaments09_T3" | "WorkOrder_Faction_Armaments10_T3" | "WorkOrder_Faction_Armaments01_T4" | "WorkOrder_Faction_Armaments02_T4" | "WorkOrder_Faction_Armaments03_T4" | "WorkOrder_Faction_Armaments04_T4" | "WorkOrder_Faction_Armaments05_T4" | "WorkOrder_Faction_Armaments06_T4" | "WorkOrder_Faction_Armaments07_T4" | "WorkOrder_Faction_Armaments08_T4" | "WorkOrder_Faction_Armaments09_T4" | "WorkOrder_Faction_Armaments10_T4" | "WorkOrder_Faction_Armaments01_T5" | "WorkOrder_Faction_Armaments02_T5" | "WorkOrder_Faction_Armaments03_T5" | "WorkOrder_Faction_Armaments04_T5" | "WorkOrder_Faction_Armaments05_T5" | "WorkOrder_Faction_Armaments06_T5" | "WorkOrder_Faction_Armaments07_T5" | "WorkOrder_Faction_Armaments08_T5" | "WorkOrder_Faction_Armaments09_T5" | "WorkOrder_Faction_Armaments10_T5" | "WorkOrder_Faction_ArmorSet01_T2" | "WorkOrder_Faction_ArmorSet02_T2" | "WorkOrder_Faction_ArmorSet03_T2" | "WorkOrder_Faction_ArmorSet04_T2" | "WorkOrder_Faction_ArmorSet05_T2" | "WorkOrder_Faction_ArmorSet06_T2" | "WorkOrder_Faction_ArmorSet07_T2" | "WorkOrder_Faction_ArmorSet01_T3" | "WorkOrder_Faction_ArmorSet02_T3" | "WorkOrder_Faction_ArmorSet03_T3" | "WorkOrder_Faction_ArmorSet04_T3" | "WorkOrder_Faction_ArmorSet05_T3" | "WorkOrder_Faction_ArmorSet06_T3" | "WorkOrder_Faction_ArmorSet07_T3" | "WorkOrder_Faction_ArmorSet01_T4" | "WorkOrder_Faction_ArmorSet02_T4" | "WorkOrder_Faction_ArmorSet03_T4" | "WorkOrder_Faction_ArmorSet04_T4" | "WorkOrder_Faction_ArmorSet05_T4" | "WorkOrder_Faction_ArmorSet06_T4" | "WorkOrder_Faction_ArmorSet07_T4" | "WorkOrder_Faction_ArmorSet01_T5" | "WorkOrder_Faction_ArmorSet02_T5" | "WorkOrder_Faction_ArmorSet03_T5" | "WorkOrder_Faction_ArmorSet04_T5" | "WorkOrder_Faction_ArmorSet05_T5" | "WorkOrder_Faction_ArmorSet06_T5" | "WorkOrder_Faction_ArmorSet07_T5" | "WorkOrder_Faction_Provisions01_T1" | "WorkOrder_Faction_Provisions01_T2" | "WorkOrder_Faction_Provisions01_T3" | "WorkOrder_Faction_Provisions01_T4" | "WorkOrder_Faction_Provisions01_T5" | "WorkOrder_Faction_Provisions02_T1" | "WorkOrder_Faction_Provisions02_T2" | "WorkOrder_Faction_Provisions02_T3" | "WorkOrder_Faction_Provisions02_T4" | "WorkOrder_Faction_Provisions02_T5" | "WorkOrder_Faction_Provisions03_T1" | "WorkOrder_Faction_Provisions03_T2" | "WorkOrder_Faction_Provisions03_T3" | "WorkOrder_Faction_Provisions03_T4" | "WorkOrder_Faction_Provisions03_T5" | "WorkOrder_Faction_Provisions04_T2" | "WorkOrder_Faction_Provisions04_T3" | "WorkOrder_Faction_Provisions04_T4" | "WorkOrder_Faction_Provisions04_T5" | "WorkOrder_Faction_Provisions05_T2" | "WorkOrder_Faction_Provisions05_T3" | "WorkOrder_Faction_Provisions05_T4" | "WorkOrder_Faction_Provisions05_T5" | "WorkOrder_Faction_Provisions06_T2" | "WorkOrder_Faction_Provisions06_T3" | "WorkOrder_Faction_Provisions06_T4" | "WorkOrder_Faction_Provisions06_T5" | "WorkOrder_Faction_Provisions07_T2" | "WorkOrder_Faction_Provisions07_T3" | "WorkOrder_Faction_Provisions07_T4" | "WorkOrder_Faction_Provisions07_T5" | "WorkOrder_Faction_Provisions08_T2" | "WorkOrder_Faction_Provisions08_T3" | "WorkOrder_Faction_Provisions08_T4" | "WorkOrder_Faction_Provisions08_T5" | "WorkOrder_Faction_Provisions09_T2" | "WorkOrder_Faction_Provisions10_T2" | "WorkOrder_Faction_Provisions09_T3" | "WorkOrder_Faction_Provisions10_T3" | "WorkOrder_Faction_Provisions09_T4" | "WorkOrder_Faction_Provisions10_T4" | "WorkOrder_Faction_Provisions09_T5" | "WorkOrder_Faction_Provisions10_T5";

export type TerritoryProjectID = "CommunityProjectId" | "BlacksmithProjectId" | "EngineeringProjectId" | "OutfittingProjectId" | "AlchemistProjectId" | "CookingProjectId" | "SmeltingProjectId" | "MasonryProjectId" | "CarpentryProjectId" | "TanningProjectId" | "WeavingProjectId" | "FortGatesProjectId" | "FortHardPointsProjectId" | "BallistaUpgradeProjectId" | "ExplosiveUpgradeProjectId" | "RepeaterUpgradeProjectId" | "HornUpgradeProjectId" | "FireBarrelUpgradeProjectId" | "LumberJackSpiritProjectId" | "MinersResolveProjectId" | "HuntersBountyProjectId" | "FarmersHarvestProjectId" | "ArcaneBlessingProjectId" | "HaleAndHeartyProjectId" | "StalwartProjectId" | "OutfittersInspirationProjectId" | "BlacksmithTemperamentProjectId" | "ArcaneWisdomProjectId" | "ChefsPassionProjectId" | "EngineersPatienceProjectId";

export type MissionWeightsData = {
    MissionWeightId: string;
    SlotNumber:      number;
    IsPvpSlot:       boolean | null;
    MissionGoalType: RespawnTypeToUseForUnstuck;
    Weight:          number;
}

export type Moonshot = {
    Slice:       string;
    PowerLevel:  number;
    Destruction: number;
    Disruption:  number;
    Defense:     number;
    RangeInside: number;
    RangeClose:  number;
    RangeMid:    number;
    RangeFar:    number;
    Type:        MoonshotType;
    Family:      MoonshotFamily;
    Available:   number;
}

export type MoonshotFamily = "Ancient" | "Corrupted" | "Damned" | "Earth" | "Withered" | "Unaffiliated";

export type MoonshotType = "Infantry" | "Siege";

export type MusicalInstrumentSlot = {
    PaperdollId:  PaperdollID;
    Name:         string;
    ClefIconPath: string;
}

export type PaperdollID = "instrument-guitar-slot" | "instrument-drums-slot" | "instrument-uprightbass-slot" | "instrument-mandolin-slot" | "instrument-flute-slot";

export type MusicalPerformanceRewards = {
    RewardId:                 string;
    Name:                     string;
    Description:              string;
    Rank:                     number;
    FilterType:               FilterType;
    GameEventId_Rank_Amazing: string;
    GameEventId_Rank_Great:   string;
    GameEventId_Rank_Okay:    string;
    GameEventId_Rank_Bad:     string;
}

export type FilterType = "Summer" | "DefaultPerformance";

export type MusicalRanking = {
    Grade:            string;
    MinimumScore:     number;
    RankGameEventId:  string;
    MusicalScoreMult: number;
}

export type MusicalScoring = {
    InputType: string;
    Points:    number;
}

export type MutationDifficultyStaticData = {
    MutationDifficulty:            number;
    DifficultyTier:                number;
    ReqItemsToEnter:               string;
    HealthIncreaseMod:             HealthIncreaseMod;
    DamageIncreaseMod:             DamageIncreaseMod;
    "HealthPotency_Dungeon-":      number;
    "DamagePotency_Dungeon-":      number;
    HealthPotency_Dungeon:         number;
    DamagePotency_Dungeon:         number;
    "HealthPotency_Dungeon+":      number;
    "DamagePotency_Dungeon+":      number;
    HealthPotency_DungeonMiniBoss: number;
    DamagePotency_DungeonMiniBoss: number;
    HealthPotency_DungeonBoss:     number;
    DamagePotency_DungeonBoss:     number;
    HasMinorCurse:                 AdjustPowerLevel;
    HasMajorCurse:                 AdjustPowerLevel;
    RecommendedGearScore:          number;
    GearScoreDeltaModifier:        number;
    BaseCurseDamageMod:            number;
    InjectedLootTags:              string;
    InjectedCreatureLoot:          InjectedCLoot;
    InjectedCreatureLootRoll:      string;
    InjectedContainerLoot:         InjectedCLoot;
    InjectedContainerLootRoll:     string;
    PossibleItemDropIds:           string;
    CompletionEvent1:              string;
    CompletionEvent2:              string;
    CompletionEvent3:              string;
    PerkRollMult1:                 number;
    PerkRollMult2:                 number;
    PerkRollMult3:                 number;
    PerkRollMult4:                 number;
    PerkRollMult5:                 number;
    HWMRangeBias:                  number;
    HWMRangeBiasChance:            number;
    HWMExceedMod:                  number;
}

export type DamageIncreaseMod = "Mut_DamageScale";

export type HealthIncreaseMod = "Mut_HealthScale";

export type InjectedCLoot = "MutatorLoot_Difficulty";

export type MutationPerksStaticData = {
    ElementalMutationTypeId:   string;
    InjectedPerkBucket1:       string;
    InjectedPerkBucketWeight1: string;
    InjectedPerkBucket2:       string;
    InjectedPerkBucketWeight2: string;
    InjectedPerkBucket3:       string;
    InjectedPerkBucketWeight3: string;
    InjectedPerkBucket4:       string;
    InjectedPerkBucketWeight4: string;
    InjectedPerkBucket5:       string;
    InjectedPerkBucketWeight5: string;
    InjectedCreatureLoot:      string;
    InjectedContainerLoot:     string;
    InjectedLootTags:          DamageTypes;
    Name:                      string;
    Description:               string;
}

export type NotificationData = {
    NotificationId:    string;
    DisplayTitle:      string;
    DisplayText:       string;
    SecondaryText:     string;
    IconPath:          string;
    MaxDisplayCount:   number | null;
    NotificationType:  NotificationType;
    TrackDisplayCount: number | null;
    DurationOverride:  number | null;
    CooldownSeconds:   number | null;
    Keybind:           Keybind;
    KeybindActionmap:  KeybindActionmap;
    NumberFields:      NumberFields;
}

export type Keybind = "" | "toggleCriminalIntent";

export type KeybindActionmap = "" | "ui";

export type NotificationType = "" | "Social" | "Popup" | "Minor";

export type NumberFields = "" | "amount";

export type NPCData = {
    NPCId:                             string;
    Title:                             string;
    GenericName:                       string;
    InteractOptionDisplayNameOverride: InteractOptionDisplayNameOverride;
    ConversationStateId1:              string;
    ConversationStateId2:              string;
    ConversationStateId3:              string;
    ConversationStateId4:              string;
    ConversationStateId5:              string;
    ConversationStateId6:              string;
    ConversationStateId7:              string;
    ConversationStateId8:              string;
    ConversationStateId9:              string;
    ConversationStateId10:             ConversationStateId10;
    ConversationStateId11?:            ConversationStateId11;
    ConversationStateId12?:            ConversationStateId12;
    ConversationStateId13?:            ConversationStateId13;
    ConversationStateId14?:            ConversationStateId14;
    ConversationStateId15?:            ConversationStateId15;
    ConversationStateId16?:            ConversationStateId16;
    ConversationStateId17?:            ConversationStateId17;
    ConversationStateId18?:            ConversationStateId18;
    ConversationStateId19?:            ConversationStateId19;
    ConversationStateId20?:            ConversationStateId20;
    TopicId1?:                         string;
    TopicId2?:                         string;
    TopicId3?:                         string;
    TopicId4?:                         string;
    TopicId5?:                         string;
    TopicId6?:                         string;
    TopicId7?:                         string;
    TopicId8?:                         string;
    TopicId9?:                         string;
    TopicId10?:                        string;
    Location1?:                        string;
    Location2?:                        string;
    Location3?:                        string;
    Location4?:                        string;
    Location5?:                        string;
    Location6?:                        string;
    Location7?:                        string;
    Location8?:                        string;
    Location9?:                        string;
    Location10?:                       string;
    Location11?:                       string;
    Location12?:                       string;
    Location13?:                       string;
    Location14?:                       string;
}

export type ConversationStateId10 = "" | "0208_06pre_Alchemist" | "0209_06pre_Adjudicator" | "0440a_00_AtticusDelphi_TaskTopic_MSQRumors" | "06_06_MarcelDupont" | "06_09_GraceOMalley" | "06_08_SaatvikAgrawal" | "06_08_NessaHarrower" | "06_08_LeovixSilva" | "12_08_RegentJinJae" | "12_09_MB_Grace" | "12_05_SerPayneBennett" | "1507_06pre_Commander" | "1602_08_Crassus" | "1602_09_Crassus" | "1625_09_Ghazi_p6" | "Yonas_01_09" | "GuardCaptain_TaskTopic_PlayForTown" | "9901_10_MSQ_Yonas" | "9901_20_MSQ_Yonas" | "9902_13_MSQ_Adiana";

export type ConversationStateId11 = "" | "0208_06_Alchemist" | "0209_06_Adjudicator" | "06_09_SaatvikAgrawal" | "06_09_NessaHarrower" | "06_09_LeovixSilva" | "12_09A_RegentJinJae" | "12_10_MB_Grace" | "12_06_SerPayneBennett" | "1507_06_Commander" | "1602_09_Crassus" | "1602_10_Crassus" | "Yonas_TaskTopic_AmrineSkip" | "GuardCaptain_01A_TaskTopic_MSQRumors" | "9901_11_MSQ_Yonas" | "9901_21_MSQ_Yonas";

export type ConversationStateId12 = "" | "06_10_SaatvikAgrawal" | "06_10_NessaHarrower" | "06_10_LeovixSilva" | "12_09_RegentJinJae" | "12_11_MB_Grace" | "12_07_SerPayneBennett" | "1602_10_Crassus" | "1602_11_Crassus" | "GuardCaptain_02_TaskTopic_Adiana" | "9901_12_MSQ_Yonas" | "9901_22_MSQ_Yonas";

export type ConversationStateId13 = "" | "06_11_SaatvikAgrawal" | "06_11_NessaHarrower" | "06_11_LeovixSilva" | "12_10_RegentJinJae" | "12_12_MB_Grace" | "12_09_SerPayneBennett" | "1602_11_Crassus" | "1602_12_Crassus";

export type ConversationStateId14 = "" | "06_12_NessaHarrower" | "06_12_LeovixSilva" | "12_10a_RegentJinJae" | "12_10_SerPayneBennett" | "1602_13_Crassus";

export type ConversationStateId15 = "" | "06_13_NessaHarrower" | "12_11_RegentJinJae" | "1602_14_Crassus";

export type ConversationStateId16 = "" | "06_14_NessaHarrower";

export type ConversationStateId17 = "" | "06_15_NessaHarrower";

export type ConversationStateId18 = "" | "06_16_NessaHarrower";

export type ConversationStateId19 = "" | "06_17_NessaHarrower";

export type ConversationStateId20 = "" | "06_18_NessaHarrower";

export type InteractOptionDisplayNameOverride = "" | "@0251a_Headstone_InteractOverride" | "@0444a_LostAlchemy_InteractOverride" | "@0445a_RequisitionNote_InteractOverride" | "@0446a_AncientScroll_InteractOverride" | "@0447a_Locket_InteractOverride" | "@0449a_HeronNote_InteractOverride" | "@0451a_MineCart_InteractOverride" | "@0727_BookOfIsabella_Interact" | "@1124_Override" | "@1129_Override" | "@12_KnightsDecree_InteractOverride" | "@12_ClericLetter_InteractOverride" | "@1678_EmptyChest_int" | "@99B_gravestone_interactoverride" | "@9928_MSQ_YonasMemorial_Examine" | "@9927_VK_ScoutsNote_Examine";

export type Objectives = {
    ObjectiveID:                            string;
    Type:                                   ObjectiveType;
    Difficulty:                             Difficulty;
    DifficultyLevel:                        number | null | string;
    MaxInfluenceLevel:                      string;
    FlagPvp:                                boolean | null | string;
    CanBeShared:                            boolean | null | string;
    CanFastTravel:                          boolean | null | string;
    Task:                                   string;
    NpcDestinationId:                       string;
    ExclusiveTerritory?:                    number | null | string;
    AchievementId:                          string;
    RequiredAchievementId?:                 string;
    RequiredFaction?:                       RequiredFaction;
    RequiredLevel?:                         number | null | string;
    SuccessGameEventId:                     string;
    FailureGameEventId:                     FailureGameEventID;
    ProgressionReward?:                     ProgressionReward;
    ExperienceReward:                       string;
    ObjectiveReward:                        ObjectiveReward;
    ItemRewardName:                         string;
    ItemRewardQty:                          number | null | string;
    ShouldResetOnFactionChange?:            boolean | null | string;
    Repeatable:                             boolean | number | null | string;
    CanBeAbandoned:                         boolean | null | string;
    Title:                                  string;
    Description:                            string;
    PlayerPrompt:                           string;
    ObjectiveProposalResponse:              string;
    InProgressResponse:                     string;
    DestinationCompletionAvailablePrompt:   DestinationCompletionAvailablePrompt;
    DestinationCompletionAvailableResponse: string;
    ObjectiveCompletionResponse:            string;
    ObjectiveAcceptanceResponse:            string;
    HideIncompleteTurninMarker:             boolean | UseAllDamageModifiers | null;
    ORMReleaseEventTags?:                   ORMReleaseEventTags;
    ORMReleaseActiveOverride?:              string;
    SkipReqAchievmentWhenInvalid?:          boolean | null | string;
    EntitlementId:                          string;
    QuestArcTag?:                           QuestTag;
    "HideAvailableMapIcon "?:               boolean | null | string;
    TurnInTaskDescription?:                 string;
    RequiredProgression?:                   string;
    RewardWithPlayerLevel?:                 boolean | null;
    RewardType?:                            CreatureTypeEnum;
}

export type DestinationCompletionAvailablePrompt = "@complete_available_prompt_DEFAULT" | "";

export type Difficulty = "" | "Easy";

export type FailureGameEventID = "" | "0511_0101_aguardiansplight_failure" | "FactionMission_Failure" | "Mission_Failure_Merchant_T1" | "Mission_Failure_Procurer_T1" | "Mission_Failure_Explorer_T1" | "Mission_Failure_Bounty_T1" | "PVPMission_Failure";

export type ORMReleaseEventTags = "" | "CANCELLED";

export type ObjectiveReward = "01_SoleSurvivor2" | "" | "98_M_0102_RankUp" | "98_M_0203_RankUp" | "98_M_0304_RankUp" | "98_S_0102_RankUp" | "98_S_0203_RankUp" | "98_S_0304_RankUp" | "98_C_0102_RankUp" | "98_C_0203_RankUp" | "98_C_0304_RankUp" | "0504_0102_defianceanddoubt" | "06A_TS_03_LearnTownBoard" | "0721_0101_BW_00" | "0831_0103_LastArgument_Polished" | "0831_0105_LastArgument_Perfection" | "0831_0107_LastArgument_Darkness" | "12A_Side_17_MarketBoard" | "1625_0701_challengingpharaoh" | "9906_0050_thescenicrouteb";

export type ProgressionReward = "" | "Marauder 1" | "MarauderTokens 1 1500" | "Marauder 2" | "MarauderTokens 2 3000" | "Marauder 3" | "MarauderTokens 3 6000" | "Marauder 4" | "MarauderTokens 4 12000" | "Syndicate 1" | "SyndicateTokens 1 1500" | "Syndicate 2" | "SyndicateTokens 2 3000" | "Syndicate 3" | "SyndicateTokens 3 6000" | "Syndicate 4" | "SyndicateTokens 4 12000" | "Covenant 1" | "CovenantTokens 1 1500" | "Covenant 2" | "CovenantTokens 2 3000" | "Covenant 3" | "CovenantTokens 3 6000" | "Covenant 4" | "CovenantTokens 4 12000";

export type ObjectiveType = "MainStoryQuest" | "Journey" | "FactionStory_Marauders" | "FactionStory_Syndicate" | "FactionStory_Covenant" | "EpicEquipment" | "Mission" | "SkillProgression" | "SeasonQuest" | "CommunityGoal" | "Darkness";

export type ObjectiveTasks = {
    TaskID:                          string;
    Type:                            ObjectiveTaskType;
    FailOnCondition:                 boolean | number | null | string;
    StayActive:                      number | null | string;
    RequiredLevel?:                  number | null | string;
    TargetQty:                       number | null | string;
    ItemName:                        string;
    ItemDropVC:                      string;
    ItemDropProbability:             number | null | string;
    ChestDropProbability:            number | null | string;
    EnforceLocationRequirement:      boolean | null | string;
    TerritoryID:                     number | null | string;
    POITag:                          string;
    GameModeID?:                     GameModeID;
    LootTag:                         string;
    PauseAndClearLootOnTaskComplete: boolean | null | string;
    AwardOnlyOnce?:                  boolean | null | string;
    ShouldCheckPoints?:              boolean | null | string;
    GuranteedDropAttempts?:          boolean | number | null | string;
    TargetThreshold?:                number | null | string;
    CraftingRecipeId:                CraftingRecipeID;
    CraftAnyRecipe:                  string;
    InteractTag:                     string;
    UIScreenTag:                     string;
    TriggerAreaType:                 TriggerAreaType;
    KillEnemyType:                   string;
    KillEnemyWeaponID:               KillEnemyWeaponIDEnum;
    Duration:                        number | null | string;
    TaskBuySellType:                 string;
    IsPurchaseOrEarn:                string;
    IsExactMatch:                    string;
    UseTypeAffix:                    string;
    TypeAffix:                       string;
    UseMatAffix:                     string;
    MatAffix:                        string;
    UseMagicAffix:                   string;
    MagicAffix:                      string;
    MapMarkerMapIcon:                string;
    MapMarkerTitleLocTag:            string;
    MapMarkerDescriptionLocTag:      string;
    MapMarkerWorldPositionX:         number | null | string;
    MapMarkerWorldPositionY:         number | null | string;
    MapMarkerWorldDistanceThreshold: number | null | string;
    UseLargeItemDisplay:             number | null | string;
    TP_TargetTag:                    string;
    TP_DescriptionTag:               string;
    TargetDescriptionTaskId?:        TargetDescriptionTaskID;
    OverrideLocation?:               string;
    IsHidden:                        number | null | string;
    HideDiegeticGatherablePins?:     boolean | null | string;
    ShowDiegeticTaskPin?:            boolean | null | string;
    DiegeticPinZOverride?:           number | null | string;
    SS_VariantName?:                 string;
    SS_StatePreset?:                 SSStatePreset;
    CompletedNotificationId:         string;
    GridLayout:                      string;
    CommunityGoalTag:                string;
    HideChildren:                    string;
    TriggerAnalyticsEvent:           null | string;
    OnInteractStart?:                boolean | null | string;
    SubTask1:                        string;
    SubTask2:                        string;
    SubTask3:                        string;
    SubTask4:                        string;
    SubTask5:                        string;
    UseGlobalStorage?:               boolean | null | string;
    DiegeticTaskPinZPosOverride?:    string;
    TP_StayComplete?:                number | null | string;
    TP_MapIcon?:                     string;
    TP_ShowOnMap?:                   string;
    TP_ShowOnCompass?:               string;
    ResetOnCondition?:               number | null;
}

export type CraftingRecipeID = "" | "Procedural_HealthRecoveryT1" | "SwordAbilityTable" | "0511_0204_UmbrasReach_Glove" | "0511_0204_UmbrasReach_Lens" | "0511_0204_UmbrasReach_Leather" | "0831_0102_HardIronwoodPlank" | "0831_0104_CustomBlunderbussLock" | "0831_0109_GunpowderAdditive" | "Procedural_LongswordT2" | "1225_0501_AncientProtectionStone" | "1679_0101_DesertCerate" | "1625_0502_ImhotepRemedy" | "95_s01_04_HealingSalve" | "95_s01_07_SearingTemper";

export type KillEnemyWeaponIDEnum = "" | "SwordAbilityTable" | "RapierAbilityTable" | "HatchetAbilityTable" | "GreatAxeAbilityTable" | "WarHammerAbilityTable" | "SpearAbilityTable" | "BowAbilityTable" | "MusketAbilityTable" | "FireMagicAbilityTable" | "LifeMagicAbilityTable" | "IceMagicAbilityTable" | "TEMP_Crafting_Specialization_Blacksmithing" | "TEMP_Crafting_Specialization_Alchemy" | "TEMP_Crafting_Specialization_Outfitting" | "BlunderbussAbilityTable" | "VoidGauntletAbilityTable" | "GreatSwordAbilityTable";

export type SSStatePreset = "" | "FM_16_PVP_ControlSpot_Marauder_first" | "FM_16_PVP_ControlSpot_Marauder_task" | "FM_16_PVP_SpySpot_Marauder_2_step_container" | "FM_16_PVP_SpySpot_Marauder_first_ordie" | "FM_16_PVP_SpySpot_Marauder_first" | "FM_16_PVP_SpySpot_Marauder_turnin" | "FM_16_PVP_SpySpot_Marauder_task" | "FM_16_PVP_ControlSpot_Syndicate_first" | "FM_16_PVP_ControlSpot_Syndicate_task" | "FM_16_PVP_SpySpot_Syndicate_2_step_container" | "FM_16_PVP_SpySpot_Syndicate_first_ordie" | "FM_16_PVP_SpySpot_Syndicate_first" | "FM_16_PVP_SpySpot_Syndicate_turnin" | "FM_16_PVP_SpySpot_Syndicate_task" | "FM_16_PVP_ControlSpot_Covenant_first" | "FM_16_PVP_ControlSpot_Covenant_task" | "FM_16_PVP_SpySpot_Covenant_2_step_container" | "FM_16_PVP_SpySpot_Covenant_first_ordie" | "FM_16_PVP_SpySpot_Covenant_first" | "FM_16_PVP_SpySpot_Covenant_turnin" | "FM_16_PVP_SpySpot_Covenant_task";

export type TargetDescriptionTaskID = "" | "FM_04_EXP_01a_leg_A_task" | "FM_04_EXP_02a_leg_A_task" | "FM_04_EXP_03a_leg_A_task" | "0411_0413_d_01_task_GoToPOI" | "0411_0414_d_01_task_GoToPOI" | "FM_04_EXP_02_leg_A_task" | "0502_0106_d_01_gotoPOI" | "FM_05_EXP_01_leg_A_task" | "FM_05_EXP_01_leg_B_task" | "FM_05_EXP_02_leg_A_task" | "FM_05_EXP_03_leg_A_task" | "FM_05_EXP_03_leg_B_task" | "06A_P_03_RecoverEyepiece_enterDungeon" | "0699_0101_d_01_TaskGoToPOI" | "0699_0102_d_01_TaskGoToPOI" | "0699_0103_d_01_TaskGoToPOI" | "FM_06_EXP_01_leg_A_task" | "0714_0105_d_01_goto_POI" | "0718_0103_d_01_gotoPOI" | "0726_0101_d_01_TaskGoToPOITag" | "0726_0102_d_01_TaskGoToPOITag" | "0726_0103_d_01_TaskGoToPOITag" | "0726_0104_d_01_TaskGoToPOITag" | "0726_0105_d_01_TaskGoToPOITag" | "0726_0106_d_01_TaskGoToPOITag" | "0726_0107_d_01_TaskGoToPOITag" | "FM_07_EXP_01_leg_A_task" | "FM_07_EXP_02_leg_A_task" | "FM_07_EXP_03_leg_A_task" | "0811_0803_d_01_TaskGoToPOITag_dungeon" | "0899_0801_d_01_TaskGoToPOITag_Liberator" | "0831_0102_d_02_01_02_01_HaveAndReturnItems_4_ImbuedResin" | "FM_08_EXP_01_leg_A_task" | "FM_08_EXP_03_leg_A_task" | "FM_10_EXP_01_leg_A_task" | "FM_10_EXP_02_leg_A_task" | "FM_10_EXP_03_leg_A_task" | "1403A_0301_d_01_Task" | "FM_14_EXP_01_leg_A_task" | "FM_14_EXP_02_leg_A_task" | "FM_14_EXP_03_leg_A_task" | "1502_1511_d_01_Task_Goto" | "1599_1513_d_01_Task_Goto" | "FM_15_EXP_01_leg_A_task" | "FM_15_EXP_02_leg_B_task" | "FM_15_EXP_03_leg_B_task" | "1625_0101_d_03_02_container_breadcrumbs" | "1625_0601_d_02_container_reflectors" | "1625_0601_d_04_container_enterVault" | "FM_16_EXP_14_leg_A_task" | "FM_S_16_EXP_14_leg_A_task" | "FM_C_16_EXP_14_leg_A_task" | "99B_MSQ_07_d_02_04_01_01_GameEvent_EncounterStart" | "9901_0057_d_02_GameMode";

export type TriggerAreaType = "" | "Enter" | "Leave" | "HUD";

export type ObjectiveTaskType = "ConsecutiveTaskContainer" | "TaskGiveItem" | "TaskOpenUiScreen" | "TaskTriggerArea" | "TaskGameEvent" | "TaskTriggerGameEvent" | "TaskTimer" | "SimpleTaskContainer" | "TaskKillContribution" | "TaskUnlockAchievement" | "TaskLockAchievement" | "TaskGoToPOITag" | "PartialTaskContainer" | "TaskHaveItems" | "TaskEquipItem" | "TaskGatherItems" | "TaskCraftRecipe" | "TaskInteract" | "TaskAchievement" | "TaskGatherAndReturnItems" | "TaskConversationTopic" | "TaskConversationState" | "TaskTemporaryUnlockAchievement" | "TaskGiveAndTakeItem" | "TaskHaveAndReturnItems" | "TaskRequireGatherItems" | "TaskGameMode" | "TaskRemoveItem" | "PatrolTask" | "TaskObjective" | "TaskPerformSong" | "TaskCraftWeaponFamily" | "TaskHaveItemsWithWeaponFamily" | "TaskChooseFaction" | "TaskHaveLevel" | "TaskGatherCyclicState" | "TaskFishingEquip" | "TaskFishingCast" | "TaskFishingHook" | "TaskFishingReel" | "TaskFishingCatchFish" | "TaskSalvageItem" | "TaskFishingHotspotAny" | "TaskFishingCatchAnyFish" | "TaskFishingCatchLength" | "TaskFishingCatchWeight" | "e" | "TaskHouseScore" | "" | "TaskUseItems" | "TaskUnLockAchievement" | "TaskDarknessWaves" | "TaskDarknessKill" | "TaskDie" | "TaskGoToPOITagOnTerritory" | "TaskGoToTerritory" | "TaskControlPoint";

export type ParticleContextualPriorityOverrideData = {
    EffectName:       string;
    PriorityOverride: PriorityOverride;
}

export type PriorityOverride = "High" | "Required" | "Normal";

export type ParticleData = {
    "Effect Name":           string;
    Group:                   string;
    "Priority Within Group": number;
    "Max Number":            number;
    Priority:                number;
    Constants:               number | null;
}

export type PerkData = {
    PerkID:                    string;
    PerkType:                  PerkType;
    ConditionEvent:            ConditionEvent;
    ItemClass:                 string;
    ExcludeItemClass:          string;
    Channel:                   number;
    ExclusiveLabels:           string;
    ItemPerkConflictsLocText?: ItemPerkConflictsLOCText;
    DeprecatedPerkId:          DeprecatedPerkID;
    ScalingPerGearScore:       number | null | string;
    ItemClassGSBonus:          ItemClassGSBonus;
    DisplayName:               string;
    Description:               string;
    GroupName:                 GroupName;
    Tier:                      number | null | string;
    ExcludeFromTradingPost:    string;
    AppliedPrefix:             AppliedPrefix;
    AppliedSuffix:             AppliedSuffix;
    NamePriority:              string;
    IconPath:                  string;
    Affix:                     string;
    EquipAbility:              string;
    DayPhases:                 DayPhases;
    FishingWaterType:          FishingWaterType;
    TerritoryId:               string;
    CombatStatus:              string;
    WeaponTag?:                WeaponTag;
    Category:                  AchievementCategoryEnum;
}

export type AppliedPrefix = "" | "@AbyssalPrefix" | "@ElectrifiedPrefix" | "@EmpoweredPrefix" | "@IgnitedPrefix" | "@FrozenPrefix" | "@ArborealPrefix" | "@BrashPrefix" | "@OpportunistPrefix" | "@RetaliatePrefix" | "@ExhilaratePrefix" | "@CruelPrefix" | "@GambitPrefix" | "@RallyPrefix" | "@AbyssalWardPrefix" | "@FireWardPrefix" | "@LightningWardPrefix" | "@ArcaneWardPrefix" | "@IceWardPrefix" | "@NatureWardPrefix" | "@SlashWardPrefix" | "@StrikeWardPrefix" | "@ThrustWardPrefix" | "@PhysicalWardPrefix" | "@WildernessWardPrefix" | "@ElementalWardPrefix" | "@SpectralWardPrefix";

export type AppliedSuffix = "@ArtificerSuffix" | "@AssassinSuffix" | "@BarbarianSuffix" | "@BattlemageSuffix" | "@BrigandSuffix" | "@CavalierSuffix" | "@ClericSuffix" | "@DruidSuffix" | "@DuelistSuffix" | "@FighterSuffix" | "@KnightSuffix" | "@MageSuffix" | "@MonkSuffix" | "@NomadSuffix" | "@OccultistSuffix" | "@PriestSuffix" | "@RangerSuffix" | "@SageSuffix" | "@ScholarSuffix" | "@SentrySuffix" | "@SoldierSuffix" | "@SpellswordSuffix" | "@TricksterSuffix" | "@WardenSuffix" | "@ZealotSuffix" | "";

export type ConditionEvent = "OnEquip" | "OnActive" | "OnUnsheathed";

export type DayPhases = "" | "Day" | "Night";

export type DeprecatedPerkID = "" | "PerkID_Bags_AmmoReturn";

export type FishingWaterType = "" | "Salt" | "Fresh";

export type GroupName = "" | "Amethyst_VoidDMG" | "Topaz_LightningDMG" | "Sapphire_ArcaneDMG" | "Ruby_FireDMG" | "Aquamarine_IceDMG" | "Amber_NatureDMG" | "Onyx_BrashGem" | "Emerald_OpportunistGem" | "Jasper_RetaliateGem" | "Moonstone_ExhilarateGem" | "Malachite_CruelGem" | "Opal_GambitGem" | "Diamond_RallyGem" | "Amethyst_AbyssalWard" | "Ruby_FireWard" | "Topaz_LightningWard" | "Sapphire_ArcaneWard" | "Aquamarine_IceWard" | "Amber_NatureWard" | "Moonstone_SlashWard" | "Jasper_StrikeWard" | "Emerald_ThrustWard" | "Onyx_PhysicalWard" | "Diamond_WildernessWard" | "Opal_ElementalWard" | "Malachite_SpectralWard";

export type ItemClassGSBonus = "" | "Hatchet:500" | "2HHammer:433" | "2HHammer:500" | "2HHammer:340" | "Musket:500" | "Musket:400" | "Spear:500" | "Spear:200" | "Spear:570" | "Bow:500" | "Rapier:500" | "LifeStaff:500" | "FireStaff:500" | "FireStaff:220" | "Sword:500" | "Shield:500" | "2hAxe:500" | "IceMagic:500" | "VoidGauntlet:500" | "VoidGauntlet:300" | "VoidGauntlet:450" | "Blunderbuss:500" | "GreatSword:500" | "Magic:500,Ranged:500";

export type ItemPerkConflictsLOCText = "" | "@incompatible_elemental_perk";

export type PerkType = "Inherent" | "Gem" | "Generated";

export type PerkExclusiveLabelData = {
    ExclusiveLabelID:   string;
    Weight:             number;
    ItemClassOverrides: ItemClassOverrides;
}

export type ItemClassOverrides = "" | "Shield:200";

export type PlayerTitleData = {
    TitleID:                             string;
    TitleType:                           TitleType;
    UIDisplayCategory:                   string;
    TitleMale:                           string;
    TitleFemale:                         string;
    TitleNeutral:                        string;
    Description:                         string;
    MetaAchievementId:                   string;
    AchievementId:                       PermanentOwnershipAchievementIDEnum;
    CategoricalProgressionId:            GatheringTradeskill;
    RequiredCategoricalProgressionLevel: number | null;
    RequiredPlayerLevel:                 number | null;
}

export type PermanentOwnershipAchievementIDEnum = "" | "TerritoryPermanentOwner02" | "TerritoryPermanentOwner04" | "TerritoryPermanentOwner05" | "TerritoryPermanentOwner06" | "TerritoryPermanentOwner08" | "TerritoryPermanentOwner09" | "TerritoryPermanentOwner10" | "TerritoryPermanentOwner11" | "TerritoryPermanentOwner12" | "TerritoryPermanentOwner13" | "TerritoryPermanentOwner15" | "TerritoryPermanentOwner16";

export type TitleType = "Account" | "Character";

export type ProgressionPointData = {
    ProgressionPointId:                  string;
    Description:                         string;
    PointPoolId:                         KillEnemyWeaponIDEnum;
    IsAbility:                           string;
    DoNotSpendPoint:                     UseAllDamageModifiers;
    PoolCategory:                        PoolCategory;
    TerritoryBonusCategory:              TerritoryBonusCategory;
    MaxLevel:                            number;
    RequiredCharacterLevel:              string;
    RequiredCategoricalProgressionId:    string;
    RequiredCategoricalProgressionLevel: number | null;
    RequiredProgressionPointId:          string;
    RequiredProgressionPointLevel:       number | null;
    UpgradeCardDescription:              string;
    UpgradeCardSprite:                   UpgradeCardSprite;
    UpgradeCardIcon:                     string;
    UpgradeCardCategory:                 UpgradeCardCategory;
    UpgradeCardStat:                     UpgradeCardStat;
}

export type PoolCategory = "" | "Territory";

export type TerritoryBonusCategory = "" | "GainStanding" | "GainXP" | "GainStorage" | "GainGatherRate" | "GainFactionRep" | "GainHousePoints" | "TradingTax" | "StationTax" | "PropertyTax" | "HousePurchase";

export type UpgradeCardCategory = "" | "@ui_territory_standing_upgrade_category_standing_gain" | "@ui_territory_standing_upgrade_category_xp_gain" | "@ui_territory_standing_upgrade_category_storage" | "@ui_territory_standing_upgrade_category_gather" | "@ui_territory_standing_upgrade_category_reputation" | "@ui_territory_standing_upgrade_category_housepoint" | "@ui_territory_standing_upgrade_category_trading_tax" | "@ui_territory_standing_upgrade_category_crafting_fee" | "@ui_territory_standing_upgrade_category_property_tax" | "@ui_territory_standing_upgrade_category_house_ownership";

export type UpgradeCardSprite = "" | "LyShineUI/Images/Territory/StandingRewards/GainStanding.dds" | "LyShineUI/Images/Territory/StandingRewards/ExperienceBoost.dds" | "LyShineUI/Images/Territory/StandingRewards/Storage.dds" | "LyShineUI/Images/Territory/StandingRewards/GatherBoost.dds" | "LyShineUI/Images/Territory/StandingRewards/FactionReputation.dds" | "LyShineUI/Images/Territory/StandingRewards/HousePoint.dds" | "LyShineUI/Images/Territory/StandingRewards/TradingTax.dds" | "LyShineUI/Images/Territory/StandingRewards/StationFee.dds" | "LyShineUI/Images/Territory/StandingRewards/PropertyTax.dds" | "LyShineUI/Images/Territory/StandingRewards/HouseOwnership.dds";

export type UpgradeCardStat = "" | "@ui_territory_standing_upgrade_stat_territory_standing" | "@ui_territory_standing_upgrade_stat_xp_gain" | "@ui_territory_standing_upgrade_stat_storage" | "@ui_territory_standing_upgrade_stat_gathering_speed" | "@ui_territory_standing_upgrade_stat_faction_rep" | "@ui_territory_standing_upgrade_stat_house_point" | "@ui_territory_standing_upgrade_stat_trading_tax" | "@ui_territory_standing_upgrade_stat_crafting_fee" | "@ui_territory_standing_upgrade_stat_property_tax";

export type ProgressionPoolData = {
    ProgressionPoolId: string;
    Category:          ProgressionPoolDatumCategory;
    PointCap:          number;
    InitialPoints:     string;
    VersionNumber:     number | null;
}

export type ProgressionPoolDatumCategory = "Player" | "Territory";

export type PromotionMutationStaticData = {
    PromotionMutationId: string;
    Promotion1:          string;
    Promotion2:          string;
    Promotion3:          string;
    Name:                string;
    Description:         string;
    IconPath:            string;
    TextColor:           string;
    BackgroundColor:     string;
}

export type PVPRankData = {
    Level:             number;
    DisplayName:       PVPRankDatumDisplayName;
    RequiredLevel:     number;
    MaximumInfluence:  number;
    InfluenceCost:     number;
    Stage1XP:          number;
    Stage2XP:          number;
    Stage3XP:          number;
    BorderTier:        number;
    GameEventId:       PVPRankDatumGameEventID;
    AzothSaltReward:   number | null;
    RewardDescription: RewardDescription;
    SkipStage1Salt:    number;
    SkipStage2Salt:    number;
    SkipStage3Salt:    number;
}

export type PVPRankDatumDisplayName = "@ui_pvp_rank_name_0" | "@ui_pvp_rank_name_1" | "" | "@ui_pvp_rank_name_2" | "@ui_pvp_rank_name_3" | "@ui_pvp_rank_name_4" | "@ui_pvp_rank_name_5" | "@ui_pvp_rank_name_6";

export type PVPRankDatumGameEventID = "" | "PvP_LevelUpItemReward";

export type RewardDescription = "" | "@ui_pvp_track_bannerrewards_1" | "@ui_pvp_track_bannerrewards_2" | "@ui_pvp_track_bannerrewards_3" | "@ui_pvp_track_bannerrewards_4" | "@ui_pvp_track_bannerrewards_5" | "@ui_pvp_track_bannerrewards_6";

export type PVPStoreData = {
    RowPlaceholders:     string;
    Bucket1:             Bucket1;
    Tag1:                string;
    MatchOne1:           boolean | null;
    RewardId1:           string;
    Entitlement1:        string;
    GameEvent1:          string;
    Item1:               string;
    RandomWeights1:      number | null;
    BudgetContribution1: number | null;
    Type1:               ExcludeTypeShop1;
    SelectOnceOnly1:     boolean | null;
    ExcludeTypeStage1:   ExcludeTypeShop1;
    ExcludeTypeShop1:    ExcludeTypeShop1;
    Bucket2:             Bucket2;
    Tag2:                string;
    MatchOne2:           boolean | null;
    RewardId2:           string;
    Entitlement2:        string;
    GameEvent2:          string;
    Item2:               string;
    RandomWeights2:      number;
    BudgetContribution2: number;
    Type2:               ExcludeTypeShop1;
    SelectOnceOnly2:     boolean;
    ExcludeTypeStage2:   ItemType;
    ExcludeTypeShop2:    ExcludeTypeShop1;
    Bucket3:             Bucket3;
    Tag3:                string;
    MatchOne3:           boolean | null;
    RewardId3:           string;
    Entitlement3:        Entitlement3;
    GameEvent3:          string;
    Item3:               string;
    RandomWeights3:      number | null;
    BudgetContribution3: number | null;
    Type3:               ExcludeTypeShop1;
    SelectOnceOnly3:     boolean | null;
    ExcludeTypeStage3:   ExcludeTypeShop1;
    ExcludeTypeShop3:    ExcludeTypeShop1;
}

export type Bucket1 = "NotchOne" | "";

export type Bucket2 = "NotchTwo" | "";

export type Bucket3 = "NotchThree" | "";

export type Entitlement3 = "" | "Ent_Emote_Autograph" | "Ent_Emote_QueenWave" | "Ent_Emote_Pushups" | "Ent_Emote_GiveFlower" | "Emote_Curtsy";

export type ExcludeTypeShop1 = "" | "PotionsSmall" | "PotionsMed" | "PotionsLarge" | "Shards" | "XP" | "Coin" | "Token" | "Salt" | "Named" | "Emote" | "Weapon" | "Special";

export type RandomEncounterDefinitions = {
    AreaID:           string;
    VitalsLevelRange: VitalsLevelRange;
}

export type VitalsLevelRange = "" | "60-61";

export type RefiningRecipes = {
    StructureID:  string;
    RefineType:   string;
    TooltipText:  string;
    FuelCategory: string;
}

export type ResourceItemDefinitions = {
    ResourceID: string;
    SocketType: SocketType;
    GemPerk:    string;
    PerkBucket: string;
}

export type SocketType = "" | "Gem" | "Chitin" | "Runeglass";

export type RewardMilestoneData = {
    RewardID:       string;
    MilestoneType:  MilestoneType;
    MilestoneLevel: number;
    Name:           string;
    Icon:           string;
    Image:          string;
    Tooltip:        string;
    Notes:          RewardMilestoneDatumNotes;
}

export type MilestoneType = "major" | "" | "territory" | "minor";

export type RewardMilestoneDatumNotes = "Located in PBA" | "";

export type RewardModifierData = {
    Modifiers:                 string;
    Experience:                number;
    Currency:                  number | null;
    CurrencyRewardChance:      number | null;
    TerritoryStanding:         number | null;
    Azoth:                     number | null;
    LootDropModifier:          number;
    FactionReputationModifier: number | null;
    FactionTokenModifier:      number | null;
    AzothSaltModifier:         number | null;
    PvpXpModifier:             number | null;
    SeasonsXpModifier:         number;
    Notes:                     string;
    "Found in":                string;
}

export type RewardTrackItemData = {
    RewardId:                      string;
    Entitlement:                   Entitlement;
    GameEvent:                     string;
    Item:                          string;
    Name:                          string;
    Description:                   string;
    Quantity:                      number;
    RollOnPresent:                 boolean | null;
    CategoricalProgressionId:      RewardTrackItemDatumCategoricalProgressionID;
    BuyCategoricalProgressionCost: number;
    IconPath:                      string;
    HiResIconPath:                 string;
    UseLevelGS:                    string;
}

export type RewardTrackItemDatumCategoricalProgressionID = "AzothSalt_Currency";

export type Entitlement = "" | "Emote_Frustrated" | "Emote_BreakItUp" | "Emote_ImmatureTaunt" | "Emote_Umpire" | "Emote_MimeInBox";

export type ScheduleData = {
    ScheduleId:   string;
    StartDate:    string;
    EndDate:      string;
    StartWeekday: string;
    EndWeekday:   string;
    UTC:          boolean | null;
    Comments:     string;
}

export type SeasonPassRankData = {
    Level:            number;
    MaximumInfluence: number;
    InfluenceCost:    number;
    FreeRewardId:     string;
    PremiumRewardId:  string;
}

export type SeasonsRewardData = {
    RewardId:              string;
    RewardIndex:           number;
    RewardType:            RewardTypeEnum;
    ItemId:                string;
    EntitlementId:         string;
    EntitlementQuantity:   number | null;
    DisplayItemId:         string;
    SeasonsXp:             number | null;
    SeasonsXpModifiable:   string;
    LimitingEntitlementId: LimitingEntitlementID;
}

export type LimitingEntitlementID = "" | "Entitlement_Season1_UnclaimedFreePass05" | "Entitlement_Season1_UnclaimedFreePass30" | "Entitlement_Season1_UnclaimedFreePass40" | "Entitlement_Season1_UnclaimedFreePass60" | "Entitlement_Season1_UnclaimedFreePass80" | "Entitlement_Season1_UnclaimedFreePass99" | "Entitlement_Season1_UnclaimedGearSetStorage" | "Entitlement_Season1_UnclaimedPremiumPass05" | "Entitlement_Season1_UnclaimedPremiumPass20" | "Entitlement_Season1_UnclaimedPremiumPass35" | "Entitlement_Season1_UnclaimedPremiumPass55" | "Entitlement_Season1_UnclaimedPremiumPass80";

export type RewardTypeEnum = "BattlePass_Free" | "BattlePass_Premium" | "Journey" | "Chapter";

export type SeasonsRewardsActivitiesConfig = {
    ConfigId:    string;
    ConfigValue: number;
}

export type SeasonsRewardsActivitiesTasksData = {
    ActivitiesTaskId: string;
    Task:             string;
    Type:             Column1TypeEnum;
    Description:      string;
    Active:           Active;
}

export type Active = "" | "DISABLED" | "RABBITSREVENGE_EVENT" | "SPRINGTIDEBLOOM_EVENT";

export type Column1TypeEnum = "Pve" | "Pvp" | "Gathering" | "Crafting" | "Season" | "Expedition";

export type SeasonsRewardsCardData = {
    CardID:           CardIDEnum;
    StampsToComplete: number;
    LineBonusXp:      number;
    PatternBonusXp:   number;
    CardBonusXp:      number;
}

export type SeasonsRewardsCardTemplates = {
    CardAndRowID:   string;
    Column1Type:    Column1TypeEnum;
    Column1XP:      number;
    Column1Special: string;
    Column2Type:    Column1TypeEnum;
    Column2XP:      number;
    Column2Special: string;
    Column3Type:    Column1TypeEnum;
    Column3XP:      number;
    Column3Special: string;
    Column4Type:    Column1TypeEnum;
    Column4XP:      number;
    Column4Special: string;
}

export type SeasonsRewardsChapterData = {
    ChapterId:        Chapter;
    ChapterType:      string;
    ChapterIndex:     number;
    ChapterTaskCount: number;
    ChapterRewardId:  string;
}

export type Chapter = "Season1Chapter1" | "Season1Chapter2" | "Season1Chapter3" | "Season1Chapter4" | "Season1Chapter5" | "Season1Challenge";

export type SeasonsRewardsJourneyData = {
    JourneyTaskId: string;
    Chapter:       Chapter;
    Task:          string;
    RewardID:      string;
    SortOrder:     number;
}

export type SeasonsRewardsSeasonData = {
    SeasonId:                     string;
    SeasonIndex:                  number;
    Name:                         string;
    Description:                  string;
    TotalXPToEarn:                number;
    PremiumEntitlementId:         string;
    PurchasedLevelsEntitlementId: string;
}

export type SeasonsRewardsStats = {
    TrackedStatID:              string;
    StatType:                   string;
    TargetID?:                  string;
    Categories?:                string;
    MustWin?:                   boolean | null;
    GameModeResult?:            string;
    CategoricalProgressionIds?: string;
    TrackingType?:              string;
    IsDebit?:                   boolean | null;
    Reasons?:                   string;
    IsPVP?:                     boolean | null;
    IsHealing?:                 boolean;
    IsDamage?:                  boolean;
    GameMode?:                  GameMode;
    IsInvasion?:                boolean | null | string;
    IsWar?:                     string;
    IsOutpostRush?:             boolean;
    Target?:                    string;
    ItemTier?:                  number | null;
    ItemClass?:                 string;
    TradingCategories?:         TradingCategories;
    TradingFamilies?:           TradingFamil;
    TradingGroups?:             TradingGroups;
    IngredientItemID?:          string;
    ResultItemID?:              string;
    ItemGS?:                    number | null;
    ItemRarity?:                number | null;
    ExcludeItemClass?:          string;
    CraftingType?:              CraftingType;
    PerUse?:                    boolean | null | string;
    Tradeskills?:               string;
    CraftingCategories?:        string;
    CraftingGroups?:            string;
    Level?:                     number | null | string;
    MutationLevel?:             number | null;
    RequireGroup?:              boolean | null | string;
    Score?:                     number | null;
    MutatorRank?:               MutatorRank;
    IsFlawless?:                boolean | null;
    MinWeight?:                 string;
    Precision?:                 number | null;
    GameEventTypes?:            GameEventType;
    CreatureTypes?:             string;
    GameEventIDs?:              string;
    ItemType?:                  ItemType;
    ChapterType?:               string;
    ChapterIndex?:              number | null;
    IsPermanent?:               boolean;
    VitalsCategories?:          string;
    WeaponMasteryIds?:          string;
    OpenWorldOnly?:             boolean | null;
    POITags?:                   string;
    LootTags?:                  Conditions;
    IsKillingBlow?:             boolean | null;
    QuestType?:                 string;
    SongDifficulty?:            string;
    SongRank?:                  string;
}

export type CraftingType = "" | "Refining";

export type MutatorRank = "" | "SILVER";

export type TradingCategories = "" | "Weapons,Apparel";

export type TradingGroups = "" | "CraftingConsumables" | "PotionElemDefense,PotionWellness,PotionPurifyB";

export type SeasonsRewardsTasks = {
    SeasonsTaskID:        string;
    SeasonsTrackedStatID: string;
    TaskMaxValue:         number;
    Name:                 string;
    Description:          string;
}

export type SimpleTreeCategoryData = {
    MetaAchievementCategoryId: string;
    "Parent Category":         FactionInfluenceSrc;
    Index:                     number;
    Title:                     string;
    "Icon Color Background"?:  string;
    HideFromUI?:               boolean | null;
}

export type SkillData = {
    SkillID:             string;
    Name:                string;
    CategoryID:          CategoryID;
    CategoryDisplay:     CategoryDisplay;
    MaxLevel:            number;
    Icon:                string;
    PassiveStatusEffect: string;
    Perks:               string;
    Description:         string;
}

export type CategoryDisplay = "General Skills" | "Combat Skills" | "Gathering Skills" | "Crafting Skills";

export type CategoryID = "General" | "Combat" | "Gathering" | "Crafting";

export type SkillExperienceData = {
    SkillLevel:  number;
    RequiredExp: number;
}

export type Socketables = {
    SocketableID: string;
    DisplayName:  string;
    Health:       number;
}

export type SongBookData = {
    SongId:                   string;
    MusicTitle:               string;
    Performance:              Performance;
    FilterType:               FilterType;
    NotePattern:              NotePattern;
    SoundBank:                string;
    Slot01:                   string;
    Slot02:                   string;
    Slot03:                   string;
    Slot04:                   string;
    Slot05:                   string;
    Crowd:                    string;
    Tempo:                    number;
    ScrollSpeed:              number;
    Duration:                 number;
    HitZone:                  number;
    PerfectZone:              number;
    DanceTimeline:            DanceTimeline;
    CompletionGameEvent:      CompletionGameEvent;
    TippingDurationMs:        number | null;
    HighestRankAchievementId: string;
}

export type CompletionGameEvent = "SongCompletedEasy" | "SongCompletedMedium" | "SongCompletedHard";

export type DanceTimeline = "Performance_Dance";

export type NotePattern = "Novice" | "Skilled" | "Expert";

export type Performance = "Easy" | "Medium" | "Hard";

export type SongBookSheets = {
    SheetId:    string;
    Instrument: PaperdollID;
    SheetName:  SheetName;
    Pages:      string;
    AudioEvent: string;
    ErrorEvent: ErrorEvent;
    Timeline:   string;
}

export type ErrorEvent = "AG_MISTAKE" | "DRM_MISTAKE" | "URB_MISTAKE" | "MAN_MISTAKE" | "AZF_MISTAKE";

export type SheetName = "@ui_music_guitar_part_1" | "@ui_music_guitar_part_2" | "" | "@ui_music_flute_part_1" | "@ui_music_flute_part_2" | "@ui_music_mandolin_part_1" | "@ui_music_mandolin_part_2" | "@ui_music_guitar_part_3";

export type SpellData = {
    SpellID:                                         string;
    StatusEffects:                                   string;
    StatusEffectDurations:                           number | null | string;
    Revive:                                          boolean | null | string;
    Siphon:                                          boolean | null | string;
    AttachToOwner:                                   boolean | null | string;
    StickWhenAttached:                               boolean | null | string;
    StoreOffsetWhenStuckToGDE:                       boolean | null | string;
    UseDirectTargetAsAttachOwner:                    boolean | null | string;
    SpawnSecondaryOnElapsed:                         boolean | null | string;
    SpawnSecondaryOnCollision:                       boolean | null | string;
    EndOnCasterDeath:                                boolean | null | string;
    IgnoreTargetIfAtDeathsDoor:                      boolean | null | string;
    IgnoreTargetIfDead:                              boolean | null | string;
    UseCameraTargetLock:                             boolean | null | string;
    TrackNumInVolume:                                boolean | null | string;
    ClearOnExit:                                     boolean | null | string;
    ClearOnEnd:                                      boolean | null | string;
    ManaCost:                                        string;
    UseStatusEffectDuration:                         boolean | null;
    Duration:                                        number | null;
    DurationScaling:                                 string;
    Height:                                          number | null | string;
    Length:                                          number | null | string;
    Radius:                                          number | null;
    InnerRadius:                                     number | null | string;
    RadiusScaling:                                   number | null | string;
    MaxRadiusScaling:                                string;
    CastDistance:                                    number | null;
    CastHeight:                                      number | null | string;
    CastRadius:                                      number | null | string;
    ConeAngle:                                       number | null | string;
    ConeWidth:                                       number | null | string;
    ChannelTime:                                     number | null;
    ChainDelayDuration:                              number | null | string;
    MaxChainNum:                                     number | null | string;
    UseChainCasterPaperdoll:                         boolean | null | string;
    SpawnBeamCasterJoint?:                           SpawnBeamCasterJoint;
    NumToSpawn:                                      number | null | string;
    NumToSpawnBeforeFail:                            number | null | string;
    SpawnRate:                                       number | null | string;
    SpawnAngle:                                      number | null | string;
    EvenlyDistributeMeteorSpawns?:                   boolean | null;
    SecondarySpellProjectileLaunchAngles:            string;
    SecondaryProjectileLaunchMinZSpeeds?:            string;
    SecondaryProjectileLaunchMaxZSpeeds?:            string;
    SecondaryProjectileLaunchZOffset?:               number | null;
    IgnoreRotationForSecondaryProjectileLaunchZSpd?: boolean | null;
    ScaleWithCharacterBoundingBox:                   boolean | null | string;
    ScaleWithDynamicScale:                           boolean | null | string;
    TargetTypes:                                     TargetTypes;
    SpellTypes:                                      SpellTypes;
    CastingTypes:                                    CastingTypes;
    HitAiTarget:                                     boolean | null | string;
    OverrideTargetForAiThreat:                       boolean | null | string;
    ShapeTypes:                                      ShapeTypes;
    DamageType:                                      DamageTypes;
    CheckObstructions:                               boolean | null | string;
    IgnoreOverheadCollision:                         boolean | null;
    IgnoreStructures:                                boolean | null | string;
    IgnoreSelf:                                      boolean | null | string;
    IsUnaffiliated?:                                 boolean | null;
    WeaponSlotOverride:                              WeaponSlotOverride;
    RangedAttackProfile:                             string;
    RangedAttackName:                                string;
    FireJointName:                                   FireJointName;
    ProjPosOffsetX:                                  number | null | string;
    ProjPosOffsetY:                                  number | null | string;
    ProjPosOffsetZ:                                  number | null | string;
    ProjRotOffsetX:                                  number | null | string;
    ProjRotOffsetY:                                  number | null | string;
    ProjRotOffsetZ:                                  number | null | string;
    CharRelPosOffsetX:                               number | null | string;
    CharRelPosOffsetY:                               number | null | string;
    CharRelPosOffsetZ:                               number | null | string;
    CharRelRotOffsetX:                               number | null | string;
    CharRelRotOffsetY:                               number | null | string;
    CharRelRotOffsetZ:                               number | null | string;
    ProjRaycastOrientation:                          ProjRaycastOrientation;
    BaseDamage:                                      number | string;
    DamageTable:                                     string;
    DamageTableRow:                                  string;
    AbilityId:                                       AbilityID;
    TargetAbilityCondition:                          TargetAbilityCondition;
    BeamEffect:                                      BeamEffect;
    IndicatorVFX:                                    string;
    SpellPrefabPath:                                 string;
    SecondaryPrefabPath:                             string;
    SecondarySpellID:                                string;
    TertiaryPrefabPath:                              string;
    TertiarySpellID:                                 TertiarySpellID;
    AmmoSlot?:                                       AmmoSlot;
    AttachProjectileOnCollision?:                    boolean | null | string;
    SpawnSecondaryOnPassthrough?:                    boolean | null | string;
    MaintainDistanceFromGround?:                     boolean | null;
}

export type AbilityID = "" | "Passive_Bow_Skirmish_HasteWhenFoesNear" | "Upgrade_Greataxe_GravityWell_DmgPerFoe" | "Upgrade_Greataxe_Whirlwind_DmgWhenFoesNear" | "Passive_Greataxe_Mauler_DmgWhenFoesNear" | "Passive_Greataxe_Mauler_ArmorWhenFoesNear" | "Ultimate_Greataxe_Reaper" | "Passive_Hatchet_Berserk_DMGPerNearbyEnemy" | "Ability_Hatchet_InfectedThrow" | "IceStormPunishingStorm" | "Passive_Musket_Trapper_BackSpdNearEnemy" | "SpinAttackDamagePerk1" | "SpinAttackDamagePerk2" | "SpinAttackDamagePerk3" | "GlobalPerk_Ability_Sword_WhirlingBlade" | "Passive_VoidGauntlet_EmpowerCloseRange" | "Ultimate_VoidGauntlet_DotHealAura" | "Passive_WarHammer_CrowdCrusher_ArmorPerNearbyEnemy";

export type AmmoSlot = "cartridge-ammo" | "" | "arrow-ammo";

export type BeamEffect = "" | "wFX_Void_Range.Chain" | "cFX_npc_AngryEarthNaga.Poison_Pool_Beam" | "wFX_Arcane_Range.Chain" | "cFX_npc_Dryad.Swamp_Buff_Beam" | "wFX_Lightning_Range.Chain" | "cFX_npc_LegionSignifer.HOL_Tether" | "cfx_npc_AncientAnubianHorus.InstrumentOfJudgement_beam" | "wFX_Blunderbuss_Containment.Claw_Proj_Chain" | "wFX_Fire_Range.Chain" | "wFX_Nature_Range.Chain" | "wFX_Ice_Range.Chain" | "cFX_npc_UmbertoSpectre.soulSplit_tether" | "wFX_VoidGaunt_Decay.Drain_HitScan";

export type CastingTypes = "AoE" | "Meteor" | "Burnout" | "" | "Chain" | "Projectile" | "PathOfDestiny" | "Direct" | "ClosestTargetInAoe" | "BeamAttack" | "NoTargetSpawnFromRaycast" | "IceSpikes" | "Aoe" | "Line" | "SpawnFromWeaponAimRaycast" | "AOE";

export type FireJointName = "" | "right_hand_attach" | "left_hand_attach" | "left_hand_attachment" | "HANDS_SLOT" | "aim_direction" | "vfx_muzzle" | "Xform" | "musketA_muzzle" | "fireJoint";

export type ProjRaycastOrientation = "" | "ZNegative" | "Znegative";

export type ShapeTypes = "Sphere" | "" | "Cylinder" | "SquareToroid" | "Box" | "Wedge" | "NoShape" | "Capsule";

export type SpawnBeamCasterJoint = "" | "Wings_BND";

export type SpellTypes = "Elemental" | "" | "Ability" | "Celestial" | "ClawShot";

export type TargetAbilityCondition = "" | "AI_Empress_WaveImmunity" | "Ability_Lifestaff_DivineEmbrace";

export type TargetTypes = "Enemy" | "All" | "" | "Friend" | "Friendly" | "Self" | "GroupNoRange" | "Group";

export type TertiarySpellID = "" | "IceMagic_Spell_Shower_Quick" | "Rune_FireStorm_AoE_Friendly" | "Rune_FireStorm_AoE_Greater_Friendly" | "Rune_FireStorm_AoE_Survivor_Friendly" | "Rune_FireStorm_AoE_Dominator_Friendly" | "VoidGauntlet_NullChamber_Empower" | "VoidGauntlet_NullChamber_Empower_BonusStamina" | "VoidGauntlet_SiphonAura_Heal";

export type WeaponSlotOverride = "" | "heart-gem-slot";

export type StatusEffectCategoryData = {
    StatusEffectCategoryID: string;
    DurationDiminishingMod: number | null;
    DurationModMin:         number | null;
    DurationModMax:         number | null;
    PotencyDiminishingMod:  number | null;
    PotencyModMin:          number | null;
    PotencyModMax:          number | null;
    ValueLimits:            string;
}

export type StatusEffectData = {
    StatusID:                                    string;
    DisplayName:                                 string;
    Description:                                 string;
    Notes?:                                      string;
    WindowHeader?:                               WindowHeader;
    RankSorting?:                                number | null;
    EffectCategories:                            string;
    PlaceholderIcon:                             string;
    ShowInUITray:                                boolean | null | string;
    ShowTextInDamageNumbers:                     boolean | null;
    FxScriptOn:                                  string;
    FxScriptOff:                                 FxScriptOff;
    ShouldRefreshFxScript:                       string;
    WeaponEffectType:                            DamageTypes;
    Notification:                                Notification;
    DisableTelemetry:                            boolean | UseAllDamageModifiers | null;
    IsClientPredicted:                           boolean | number | null | string;
    PotencyPerLevel:                             number | null | string;
    HideHudDurationNumbers?:                     boolean | null;
    BaseDuration:                                number | null;
    TickRate:                                    number | null;
    DelayInitialTick:                            boolean | number | null | string;
    TickCondition:                               Condition;
    OnTickStatusEffect:                          OnTickStatusEffect;
    KeepOnTickEffectOnEnd:                       boolean | null | string;
    StopOnHitCount:                              number | null | string;
    HitCondition:                                Condition;
    RequireReaction:                             boolean | null | string;
    OnStackStatusEffect:                         OnStackStatusEffect;
    AddOnStackSize:                              number | null | string;
    AddOnStackSizeComparison:                    AbilityCooldownComparisonType;
    HealThreatMultiplier:                        number | null | string;
    ScaleAmountOverTime:                         number | null | string;
    ScaleAmountOverTimeMin:                      string;
    ScaleAmountOverTimeMax:                      number | null | string;
    DamageSkipsDeathsDoor:                       boolean | null | string;
    Health:                                      number | null | string;
    HealthMin:                                   number | null | string;
    HealthModifierPercent:                       number | null | string;
    HealthModifierDamageBased:                   number | null | string;
    UseHealScalingValue:                         boolean | null | string;
    HealScalingValueMultiplier:                  number | null | string;
    StaminaDamageModifier:                       number | null | string;
    ManaModifierDamageBased:                     number | null | string;
    DamageType:                                  DamageTypes;
    CritChanceModifier:                          number | null | string;
    CritDamageModifier:                          string;
    OnEndStatusEffect:                           OnStatusEffect;
    DontApplyOnEndEffectOnRemove?:               boolean | null;
    CastSpell:                                   string;
    TargetOwnsSpell:                             boolean | null | string;
    UseSourceWeaponForSpell:                     boolean | null | string;
    FromAlchemy:                                 number | null | string;
    FromSpell:                                   number | null | string;
    NoHealthRegen:                               number | null | string;
    HealMod:                                     number | null;
    MaxHealthMod:                                number | null | string;
    HealthRate:                                  number | null | string;
    CoreTempMod:                                 number | null | string;
    TempMod:                                     number | null | string;
    Stamina:                                     number | null | string;
    StaminaRate:                                 number | null;
    Mana:                                        number | null | string;
    ManaRate:                                    number | null | string;
    Food:                                        number | null | string;
    FoodBurn:                                    number | null | string;
    Drink:                                       number | null | string;
    DrinkBurn:                                   number | null | string;
    Encumbrance:                                 number | null | string;
    ItemClassWeightMods:                         string;
    XPIncreases:                                 XPIncreasesEnum | number | null;
    AzothMod:                                    number | null | string;
    FactionReputationMod:                        number | null | string;
    FactionTokensMod:                            number | null | string;
    EXPLogging:                                  number | null | string;
    EXPMining:                                   number | null | string;
    EXPHarvesting:                               number | null | string;
    EXPSkinning:                                 number | null | string;
    EXPSmelting:                                 number | null | string;
    EXPWoodworking:                              number | EXPWoodworkingEnum | null;
    EXPLeatherworking:                           number | null | string;
    EXPWeaving:                                  number | null | string;
    EXPStonecutting:                             number | null | string;
    GrantSanctuary:                              number | null | string;
    NoSprint:                                    number | null;
    NoRun:                                       number | null;
    NoDodge:                                     number | null;
    NoNav:                                       number | null;
    Silenced:                                    number | null;
    Stunned:                                     number | null;
    RemoveOnDeath:                               number | null | string;
    RemoveOnDeathsDoor:                          number | null | string;
    RemoveOnRespawn:                             number | null | string;
    RemoveOnGameModeExit:                        number | null | string;
    IgnoreDiminishingReturns:                    boolean | null | string;
    OnlyChangeOwnedStatusEffects:                string;
    Afflictions:                                 Afflictions;
    OnHitAffixes:                                OnHitAffixes;
    EquipAbility:                                string;
    UseSourceWeaponForAbilityEffect:             boolean | null | string;
    IsNegative:                                  boolean | null | string;
    RespecTradeskills:                           number | null | string;
    RespecAttributes:                            number | null | string;
    EffectDurationMods:                          string;
    EffectPotencyMods:                           EffectPotencyMods;
    RemoveStatusEffects:                         string;
    RemoveStatusEffectCategories:                StatusEffectDatumRemoveStatusEffectCategories;
    GlobalRollMod:                               number | null | string;
    FishingLineStrength:                         number | null | string;
    FishSizeRollModifier:                        number | null | string;
    MODConstitution:                             number | null | string;
    MODFocus:                                    number | null | string;
    MODStrength:                                 number | null | string;
    MODDexterity:                                number | null | string;
    MODIntelligence:                             number | null | string;
    MGSArcana:                                   number | null | string;
    MGSWeaponsmithing:                           number | null | string;
    MGSJewelcrafting:                            number | null | string;
    MGSEngineering:                              number | null | string;
    MGSArmoring:                                 number | null | string;
    MaxGSArcana:                                 number | null | string;
    MaxGSWeaponsmithing:                         number | null | string;
    MaxGSJewelcrafting:                          number | null | string;
    MaxGSEngineering:                            number | null | string;
    MaxGSArmoring:                               number | null | string;
    ROLCooking:                                  number | null | string;
    ROLWeaving:                                  number | null | string;
    ROLStonecutting:                             number | null | string;
    ROLSmelting:                                 number | null | string;
    ROLLeatherworking:                           number | null | string;
    ROLWoodworking:                              number | null | string;
    ROLLogging:                                  number | null | string;
    ROLMining:                                   number | null | string;
    ROLSkinning:                                 number | null | string;
    ROLHarvesting:                               number | null | string;
    ROLFishing:                                  number | null | string;
    MULTLogging:                                 number | null | string;
    MULTMining:                                  number | null | string;
    MULTSkinning:                                number | null | string;
    MULTHarvesting:                              number | null | string;
    MULTFishing:                                 number | null | string;
    EFFLogging:                                  number | null | string;
    EFFMining:                                   number | null | string;
    EFFSkinning:                                 number | null | string;
    EFFHarvesting:                               number | null | string;
    INSLogging:                                  number | null | string;
    INSMining:                                   number | null | string;
    INSSkinning:                                 string;
    INSHarvesting:                               string;
    PhysicalArmor:                               number | null | string;
    ElementalArmor:                              number | null | string;
    ABSStandard:                                 number | null | string;
    ABSSiege:                                    number | null | string;
    ABSStrike:                                   number | null | string;
    ABSSlash:                                    number | null | string;
    ABSThrust:                                   number | null | string;
    ABSArcane:                                   number | null | string;
    ABSFire:                                     number | null | string;
    ABSIce:                                      number | null | string;
    ABSNature:                                   number | null | string;
    ABSLightning:                                number | null | string;
    ABSCorruption:                               number | null | string;
    ABSVitalsCategory:                           number | ABSVitalsCategoryABSVitalsCategory | null;
    RESPoison:                                   number | null | string;
    RESDisease:                                  number | null | string;
    RESBleed:                                    number | null | string;
    RESFrostbite:                                number | null | string;
    RESCurse:                                    number | null | string;
    RESBlight:                                   number | null | string;
    BLAStandard:                                 number | null | string;
    BLASiege:                                    number | null | string;
    BLAStrike:                                   number | null | string;
    BLASlash:                                    number | null | string;
    BLAThrust:                                   number | null | string;
    BLAArcane:                                   number | null | string;
    BLAFire:                                     number | null | string;
    BLAIce:                                      number | null | string;
    BLALightning:                                number | null | string;
    BLACorruption:                               number | null | string;
    ABAPoison:                                   number | null | string;
    ABADisease:                                  number | null | string;
    ABABleed:                                    number | null | string;
    ABAFrostbite:                                number | null | string;
    ABACurse:                                    number | null | string;
    ABABlight:                                   number | null | string;
    WKNStandard:                                 number | null | string;
    WKNSiege:                                    number | null | string;
    WKNStrike:                                   number | null | string;
    WKNSlash:                                    number | null | string;
    WKNThrust:                                   number | null | string;
    WKNArcane:                                   number | null | string;
    WKNFire:                                     number | null | string;
    WKNIce:                                      number | null | string;
    WKNNature:                                   number | null | string;
    WKNLightning:                                number | null | string;
    WKNCorruption:                               number | null | string;
    DMGStandard:                                 number | null | string;
    DMGSiege:                                    number | null | string;
    DMGStrike:                                   number | null | string;
    DMGSlash:                                    number | null | string;
    DMGThrust:                                   number | null | string;
    DMGArcane:                                   number | null | string;
    DMGFire:                                     number | null | string;
    DMGIce:                                      number | null | string;
    DMGNature:                                   number | null | string;
    DMGLightning:                                number | null | string;
    DMGCorruption:                               number | null | string;
    DMGVitalsCategory:                           number | DMGVitalsCategoryDMGVitalsCategory | null;
    AFAPoison:                                   number | null | string;
    AFADisease:                                  number | null | string;
    AFABleed:                                    number | null | string;
    AFAFrostbite:                                number | null | string;
    AFACurse:                                    number | null | string;
    AFABlight:                                   number | null | string;
    StackDuration:                               boolean | number | null | string;
    DurationMax:                                 number | null | string;
    InheritDuration:                             boolean | number | null | string;
    InheritTotalDuration:                        boolean | null | string;
    RefreshDuration:                             boolean | null | string;
    StackMax:                                    number | null;
    InitialStackSize:                            string;
    RemoveUnappliedStacks:                       boolean | null | string;
    PotencyMax:                                  number | null | string;
    DontReplaceStack:                            boolean | null | string;
    MoveSpeedMod:                                number | null | string;
    SprintSpeedMod:                              number | null | string;
    FastTravelEncumbranceMod:                    string;
    GameEventId:                                 StatusEffectDatumGameEventID;
    HealRewardGameEventId:                       HealRewardGameEventID;
    HealRewardThreshold:                         number | null | string;
    WeaponMasteryCategoryId:                     KillEnemyWeaponIDEnum | number | null;
    UIPriority:                                  number | null;
    UiNameplatePriority:                         number | null;
    ShowInNameplates:                            boolean | null | string;
    ShowTextInNameplates:                        boolean | null | string;
    OverrideOtherNameplateText:                  boolean | null | string;
    HidesOtherStatusEffectIcons:                 boolean | null | string;
    DynamicModelScaleFactor:                     number | null | string;
    DynamicModelScaleRampTimeSecs:               number | null | string;
    SpawnSlice:                                  string;
    DisableSupportContributionRewards:           boolean | null | string;
    BlockMultipleEffectsFromSameSource:          boolean | null | string;
    AllowSelfOnlyAsSourceForAbilities:           boolean | null | string;
    IgnoreInvulnerable:                          boolean | null | string;
    NotCombatAction:                             boolean | null | string;
    UseLightweightReplication?:                  boolean | null | string;
    SourceRuneChargeOnApply?:                    number | null | string;
    SourceRuneChargeOnTick?:                     number | null | string;
    SourceRuneChargeOnHealthChangeOnly?:         boolean | null | string;
    ShowInTokenTray?:                            boolean | null;
    IgnoreFxScriptWhenPotencyIsZero?:            boolean | null;
    ReapplyAfterPersistenceReload?:              boolean | null | string;
    PersistEffectInCrossWorldInstances?:         boolean | null;
    PauseInGameModesList?:                       ExcludeFromGameModes;
    PauseOnDisable?:                             boolean | null;
    IsTrueDamage?:                               boolean | null;
    ShowUiDamageNumbersOnHeal?:                  boolean | null;
    XPIncreasesTooltip?:                         number | null;
    TerritoryStandingMod?:                       number | null;
    EXPCategoricalProgression?:                  string;
    ABSAcid?:                                    number | null;
    DMGVitalsCategory_Tooltip?:                  number | null;
    DisableAllNonAttributePerks?:                boolean | null;
    DisableAllNonAttributePerksExceptionLabels?: DisableAllNonAttributePerksExceptionLabels;
    PreventPassiveAbilitiesOnEquip?:             boolean | null;
    GrantedSkinId?:                              string;
    AllowAddIfDead?:                             boolean | null;
    AntirequisiteEffectCategories?:              AntirequisiteEffectCategories;
    ApplicationCooldown?:                        number | null;
    HealthModifierBasePercent?:                  number | null | string;
    EXPFishing?:                                 number | null;
    RemoveEffectModsOnInactive?:                 boolean | null;
    LootTags?:                                   Conditions;
    ItemLootVolumeMods?:                         ItemLootVolumeMods;
    NonConsumableHealMod?:                       number | null;
    PotencyPerGearScore?:                        string;
    DurationScalingPerGearScore?:                string;
    DisableCastSpellDurability?:                 boolean | null;
    SlotToFillWeaponDamageInfo?:                 SlotToFillWeaponDamageInfo;
    ForceReplicateToRemotes?:                    boolean | null;
    OnDeathStatusEffect?:                        OnStatusEffect;
    DontApplyOnEndEffectOnTimeOutDeath?:         boolean | null;
}

export type ABSVitalsCategoryABSVitalsCategory = "" | "Corrupted=.05" | "OutpostRush=.15" | "Player=.05" | "Wraith=.05" | "AngryEarth=.05" | "Beast=.05" | "Ancient=.05" | "Corrupted=.1" | "Wraith=.1" | "AngryEarth=.1" | "Beast=.1" | "Ancient=.1" | "Corrupted=.15" | "Wraith=.15" | "AngryEarth=.15" | "Beast=.15" | "Ancient=.15" | "Corrupted=.2" | "Wraith=.2" | "AngryEarth=.2" | "Beast=.2" | "Ancient=.2" | "Lost=.05" | "Lost=.10" | "Lost=.15" | "Corrupted=.10" | "AngryEarth=.10" | "Ancient=.10" | "Beast=.10" | "MegaTurkey=0.66+Beast=.15" | "Human=.05" | "Human=.10" | "Human=.15";

export type Afflictions = "" | "AfflictionCurse=18" | "AfflictionBlight=-99" | "AfflictionBlight=5" | "AfflictionCurse=5" | "AfflictionCurse=15" | "AfflictionPoison=5" | "AfflictionPoison=1" | "AfflictionCurse=2" | "AfflictionCurse=20" | "AfflictionCurse=1" | "AfflictionCurse=3" | "AfflictionCurse=10" | "AfflictionBlight=2" | "AfflictionBlight=20" | "AfflictionBlight=1" | "AfflictionBlight=3" | "AfflictionBlight=10" | "AfflictionDrowning=1" | "AfflictionPoison=2" | "AfflictionPoison=20" | "AfflictionPoison=3" | "AfflictionPoison=10" | "AfflictionPoison=30" | "AfflictionCurse2=1" | "AfflictionCurse2=-1" | "AfflictionCurse2=-30" | "AfflictionCurse3=1" | "AfflictionCurse3=-60" | "AfflictionCurse4=1" | "AfflictionCurse4=-60";

export type AntirequisiteEffectCategories = "" | "GatherBoost" | "TokenGatherBoost";

export type DMGVitalsCategoryDMGVitalsCategory = "" | "Hostile=0.02+Prey=0.02" | "0.05" | "OutpostRush=.15" | "Player=.05" | "Corrupted=0.03" | "Corrupted=0.04" | "Corrupted=0.05" | "Beast=0.03" | "Beast=0.04" | "Beast=0.05" | "Ancient=0.03" | "Ancient=0.04" | "Ancient=0.05" | "Lost=0.03" | "Lost=0.04" | "Lost=0.05" | "AngryEarth=0.03" | "AngryEarth=0.04" | "AngryEarth=0.05" | "Varangian=0.03" | "Varangian=0.04" | "Varangian=0.05" | "Season_01_Event=10.0";

export type DisableAllNonAttributePerksExceptionLabels = "" | "EncumReduce+EncumAdd";

export type EXPWoodworkingEnum = "" | "StatFX_Silence_ON";

export type EffectPotencyMods = "" | "Slow=-1.0+Root=-1.0+Debuff=-1.0" | "Debuff=-1.0" | "Slow=-1.0+Root=-1.0+UnclampedSlow=-1.0" | "Stun=-1.0" | "Slow=-1.0+Root=-1.0+Stun=-1.0" | "Burn=-1.0" | "TeamWipeCat=-1.0" | "Immortal=-1.0+Uninterruptible=-1.0" | "Debuff=0.1" | "Debuff=-0.1" | "Burn=0.1" | "Burn=-0.1" | "Poison=0.1" | "Poison=-0.1" | "Bleed=0.1" | "Bleed=-0.1" | "Rend=0.1" | "Rend=-0.1" | "Weaken=0.1" | "Weaken=-0.1" | "Shock=0.1" | "Shock=-0.1" | "Slow=0.1" | "Slow=-0.1" | "Disease=0.1" | "Disease=-0.1" | "Silence=0.1" | "Silence=-0.1" | "Stun=0.1" | "Stun=-0.1" | "Frostbite=0.1" | "Frostbite=-0.1" | "Exhaust=0.1" | "Exhaust=-0.1" | "CC=0.1" | "CC=-0.1" | "Dot=0.1" | "Dot=-0.1" | "Root=0.1" | "Root=-0.1" | "DeathFog=-1.0" | "PassiveFoodRegen=1.5" | "HarvestHP=-0.35" | "EssenceRuptureT1=-1" | "EssenceRuptureT1=-1+EssenceRuptureT2=-1";

export type FxScriptOff = "" | "StatFX_Disease_OFF" | "StatFX_Shatter_OFF" | "StatFX_Wound_OFF" | "StatFX_Burn_OFF" | "StatFX_Void_OFF" | "StatFX_Void_ON" | "StatFX_Poison_OFF" | "StatFX_Frostbite_OFF" | "StatFX_Root_OFF" | "StatFX_Slow_OFF" | "StatFX_ShatterSwift_BuffHaste_OFF" | "StatFX_Weaken_OFF" | "StatFX_EnrageLimited_OFF" | "StatFX_EnrageUnlimited_OFF" | "Siphon_Damage_OFF" | "Shield_Off" | "Bow_SmokeBomb_Stop" | "Torso_Boss_Arcane_Orb_Off" | "StatFX_BlackPowder_OFF" | "Thorpe_Force_Pop" | "AOE_Corruption_Off" | "StatFX_Drown_OFF" | "StatFX_Bloodbath_OFF" | "StatFX_Overload_OFF" | "StatFX_Burn02_OFF" | "AOE_Blight_OFF" | "Dungeon_Corruption_Bubble_Protection OFF" | "EssenceRupture_Heal" | "OverchargeOrb_Stack1_OFF" | "OverchargeOrb_Stack2_OFF" | "OverchargeOrb_Stack3_OFF" | "BloodOrb_Stack1_OFF" | "BloodOrb_Stack2_OFF" | "BloodOrb_Stack3_OFF" | "POTION_Cure" | "Siphon_Heal_OFF" | "Rune_Detonate_Charge_Off" | "Rune_StoneForm_Off" | "StatFX_ArmorRend_OFF" | "DrainingTether_Slow_OFF";

export type StatusEffectDatumGameEventID = "" | "War_Battle_Token_Gen";

export type HealRewardGameEventID = "" | "War_Heal";

export type Condition = "" | "OnHitTaken" | "OnHit" | "OnAllSourcesRemoved";

export type ItemLootVolumeMods = "" | "WCGleamite=1.0" | "SB_Wispybloom=1.0";

export type Notification = "" | "Exit_World_Bounds" | "Boss_Team_Wipe";

export type OnStatusEffect = "" | "VoidGauntlet_EssenceRupture_AoE_OnEnd_CastSpell" | "Mut_Fir_AOE_VFX" | "AI_Staggered_StaggerDamageResist" | "AI_AnubianGuardian_HorusBoss_InstrumentOfJudgement_OnTick" | "AI_AnubianGuardian_Horus_MultiSun_StatusEffect_Cast" | "AI_AnubianGuardian_Horus_MultiSun_StatusEffect_Fire_Cast" | "AI_Naga_AngryEarth_Channel_Poison" | "AI_Naga_AngryEarth_Spawn_PoisonPool" | "AI_Naga_AncientGuardian_Bomb_StatusEffect_Cast" | "AI_Thorpe_Phase_2" | "AI_Mage_Miniboss_Orbs_StatusEffect_Cast" | "AI_Lost_Monarch_Beseech_Removed" | "AI_Remnant_CoreStabilize" | "AI_Evil_Knight_Fire_Champion_OverheatSpell" | "AI_Evil_Knight_Flamekeeper_Living_Bomb_Kill" | "AI_Evil_Knight_Flamekeeper_Roving_Meteor_Shower_Cast" | "Dungeon_ArcaneBarrierProtection" | "Dungeon_RelicBubbleRelease" | "Dungeon_CorruptedTether" | "ATB_Dex_Bonus_CritOnDodge_SpamPrevention" | "Mut_Curse1_VFX_Kill" | "Mut_Curse2_VFX_Kill" | "Status_Passive_Firestaff_FireMage_DmgNoDmg" | "Status_Passive_Greataxe_Mauler_StamVsLowHp_Timer" | "Status_WhenFoesNearCleanup" | "Status_Passive_GreatAxe_Gravity_Root_Hold" | "Hatchet_Berserk_HP" | "Hatchet_Pass_DoTPurgeTimer" | "Hatchet_Ult_ImmortalTimer" | "IceMagic_IceStorm_UT_Duration" | "IceMagic_Frostbite_Dur3" | "IceMagic_Frostbite_Dur3_Rend" | "IceMagic_Frostbite_Dur3_Rend_DeadlyFrost" | "IceMagic_QuickShower_Dur2" | "IceMagic_Freeze_Cooldown" | "IceMagic_IceShower_Freeze_Cooldown" | "Status_Perk_Tool_HasteOnGatherApp" | "Rune_Detonate_CastAoE" | "Rune_StoneForm_Dominator_CastAoE" | "Status_Ability_Sword_FinalStand_Heal_Heal" | "Status_Ultimate_Sword_Defender_Timer" | "VoidGauntlet_HealOnDodgeMaxMana_Timer";

export type OnHitAffixes = "" | "AI_FireDMG_50" | "AI_CorruptionDMG_50" | "AI_NatureDMG_50" | "AI_IceDMG_50" | "AI_LightningDMG_50" | "AI_ArcaneDMG_50" | "AI_FireDMG_20_Additive" | "AI_CorruptionDMG_10_Additive";

export type OnStackStatusEffect = "" | "Mut_Enrage_Empower" | "Mut_Voi_Stacks_1_Cast" | "Mut_Voi_Stacks_2_Cast" | "Mut_Ice_DeathFreeze_Root" | "AI_Evil_Knight_Fire_Champion_HeatingUpSpell" | "AI_Evil_Knight_Fire_Champion_OverheatSpell_Warning" | "Status_Passive_Bow_Skirmish_HasteOnSwap_Timer" | "Mut_Curse1_Fir_Minor_Cast" | "Mut_Curse1_Voi_Minor_Cast" | "Mut_Curse1_Nat_Minor_Cast" | "Mut_Curse1_Ice_Minor_Cast" | "Mut_Curse1_Fir_Major_Cast" | "Mut_Curse1_Voi_Major_Cast" | "Mut_Curse1_Nat_Major_Cast" | "Mut_Curse1_Ice_Major_Cast";

export type OnTickStatusEffect = "" | "Mut_Enrage_Timer" | "Mut_Voi_Stacks_1_Effect" | "Mut_Voi_Stacks_2_Effect" | "Mut_Voi_Leech_Block" | "AI_Rend" | "AI_Disease" | "AI_AnubianGuardian_HorusBoss_DivineDoom_CastSpell" | "AI_AnubianGuardian_HorusBoss_InstrumentOfJudgement_Damage" | "AI_AnubianGuardian_BruteBoss_DivineAnguish_DamageBuff_Reapply" | "AI_AnubianGuardian_BruteBoss_DivineAnguish_DamageBuff" | "AI_AnubianGuardian_HorusBoss_DivineAnguish_DamageBuff_Reapply" | "AI_AnubianGuardian_HorusBoss_DivineAnguish_DamageBuff" | "AI_DryadSiren_Spin_Phase2_Ability" | "AI_DryadSiren_Spin_Phase2_A_Tick" | "AI_DryadSiren_Spin_Phase2_B_Tick" | "AI_DryadSiren_Spin_Phase2_C_Tick" | "AI_DryadSiren_Spin_Phase2_D_Tick" | "AI_DryadSiren_Spin_Phase3_Ability" | "AI_DryadSiren_Spin_Phase3_A_Tick" | "AI_DryadSiren_Spin_Phase3_B_Tick" | "AI_DryadSiren_Spin_Phase3_C_Tick" | "AI_DryadSiren_Spin_Phase3_D_Tick" | "AI_DryadSiren_Spin_Phase3_E_Tick" | "AI_DryadSiren_Spin_Phase3_F_Tick" | "AI_Thorpe_Burn" | "AI_Heartforge_Guardian_Explosive_Walk_CastSpell" | "Armadillo_ResistanceOnHitTaken" | "AI_SandElemental_QuestBoss_Targeted_Tremor_Tick" | "AI_SulfurBurn" | "AI_Evil_Knight_Fire_Champion_Spin_Ability" | "AI_Evil_Knight_Fire_Champion_Spin_F_Tick" | "AI_Evil_Knight_Fire_Champion_Spin_R_Tick" | "AI_Evil_Knight_Fire_Champion_Spin_B_Tick" | "AI_Evil_Knight_Fire_Champion_Spin_L_Tick" | "Dungeon_LaserBeamDeath_RemoveImmortal" | "PVP_Arena_ScalingHealingDebuff" | "Status_Passive_Firestaff_Pyro_Ultimate_Removal" | "IceMagic_IceShower_Freeze" | "IceMagic_Frostbite_DeadlyFrost_Dur3" | "IceMagic_UltimateChill" | "IceMagic_PylonRefresh" | "Rune_FireStorm_DoT" | "Status_Rune_FireStorm_Survivor_DoT";

export type StatusEffectDatumRemoveStatusEffectCategories = "" | "ClearOnReset" | "Stun+Slow+Root+Silence+Rend+Weaken+Disease+Fortify" | "Stun+Slow+Root+Silence+Rend+Weaken+Disease" | "Burn" | "TeamWipeCat" | "Immortal+TraversalHaste+Haste" | "Immortal+Uninterruptible" | "Debuff" | "MutatorCurse" | "GSOffenseOnly" | "CC" | "CC+SprintDelayCombat" | "DoT" | "Buff";

export type SlotToFillWeaponDamageInfo = "HEART_GEM_SLOT";

export type WindowHeader = "" | "@AllEnemies_Header" | "@SomeEnemies_Header";

export type XPIncreasesEnum = "" | "General=0.5+Gathering=0.5" | "General=1.0" | "Group=0.15" | "Group=0.10" | "Group=0.07" | "Group=0.04";

export type StoreProductData = {
    UniqueTagID:     string;
    IsEnabled:       number;
    DisplayName:     string;
    Description:     string;
    PortraitImage:   string;
    LandscapeImage:  string;
    SquareImage:     string;
    ThumbnailImage:  string;
    TypeDescription: string;
}

export type StructureFootprintData = {
    FootprintID:   string;
    SidesTakenUp:  string;
    Rotation:      number;
    FootprintType: string;
}

export type StructurePieceData = {
    StructurePieceId:     string;
    FootprintDataTableId: FootprintDataTableID;
    FootprintId:          string;
    PreviewMeshPath:      string;
    PrefabPath:           string;
}

export type FootprintDataTableID = "WallFootprint";

export type TerritoryAdvancementLevel = {
    "Scaling Group": string;
    "0":             number;
    "1":             number;
    "2":             number;
    "3":             number;
    "4":             number;
    "5":             number;
    "6":             number;
    "7":             number;
    "8":             number;
    "9":             number;
    "10":            number;
    "11":            number;
    "12":            number;
    "13":            number;
    "14":            number;
    "15":            number;
    "16":            number;
    "17":            number;
    "18":            number;
    "19":            number;
    "20":            number;
    "21":            number;
    "22":            number;
    "23":            number;
    "24":            number;
    "25":            number;
    "26":            number;
    "27":            number;
    "28":            number;
    "29":            number;
    "30":            number;
    "31":            number;
    "32":            number;
    "33":            number;
    "34":            number;
    "35":            number;
    "36":            number;
    "37":            number;
    "38":            number;
    "39":            number;
}

export type TerritoryDefinition = {
    TerritoryID:                             number;
    NameLocalizationKey:                     string;
    IsPOI:                                   boolean | null;
    IsDiscoverable?:                         boolean | string;
    IsChartable?:                            boolean | string;
    DefaultAchievement?:                     number | null | string;
    LootTags?:                               string;
    DiscoveredAchievement?:                  string;
    ChartedAchievement?:                     string;
    POITag?:                                 string;
    AudioGroup?:                             AudioGroup;
    AudioState?:                             string;
    AudioBank?:                              AttachmentCategories;
    POILevel?:                               number;
    CanPlaceCamp?:                           boolean | null | string;
    IsArea?:                                 boolean;
    PoiDiscoveryXpModifier?:                 number | null;
    AIVariantLevelOverride?:                 number;
    AIVariantVitalsCategoryPostfixOverride?: string;
    MapIcon?:                                string;
    CompassIcon?:                            CompassIcon;
    DiscoveryRadius?:                        number | string;
    Debug?:                                  Debug;
    GroupSize?:                              number | null | string;
    RecommendedLevel?:                       number | null | string;
    TooltipBackground?:                      string;
    RequiredItemId?:                         TerritoryDefinitionRequiredItemID;
    PulseColor?:                             string;
    BaseStructureLimit?:                     number | string;
    MaxStructureLimit?:                      number | string;
    TerritoryScore?:                         number | null | string;
    OutpostId?:                              string;
    DevName?:                                string;
    VitalsCategory?:                         string;
    LevelRange?:                             number | null | string;
    Containers?:                             number | null | string;
    GameMode?:                               GameModeID;
    UnchartedIcon?:                          UnchartedIcon;
    EventId?:                                TerritoryDefinitionEventID;
    IsCollapsible?:                          null;
    POIObjectiveAchievementId?:              string;
    Grade?:                                  string;
    MaximumLevel?:                           number | null;
    MinCompanyDefenders?:                    number | null;
    MinCompanyAttackers?:                    number | null;
    ObjectiveID?:                            ObjectiveID;
    IsTerritory?:                            boolean | null;
    FactionControlBuff?:                     string;
    FactionControlTerritoryBuffs?:           FactionControlTerritoryBuffs;
    PermanentOwnershipAchievementId?:        PermanentOwnershipAchievementIDEnum;
    UpkeepModifier?:                         number | null;
    TerritoryStandingXpModifier?:            number | null;
    EntryAchievementId?:                     string;
    EntryStatusEffectId?:                    string;
}

export type AudioGroup = "Music_Territory" | "PvE_Arena" | "POI_State" | "" | "MX_Territory" | "Music_POI";

export type CompassIcon = "LyShineUI/Images/Map/Icon/POIs/angryearth_spriggan_elite.png" | "LyShineUI/Images/Map/Icon/POIs/hero_shipwreck_elite.png" | "LyShineUI\\Images\\Map\\Icon\\POIs\\angryearth_ruins_elite.png" | "LyShineUI/Images/map/Icon/POIs/damned_compass.png" | "LyShineUI/Images/map/Icon/POIs/damned_major_compass.png" | "LyShineUI/Images/Map/Icon/POIs/maudlinbug.png" | "LyShineUI/Images/map/Icon/POIs/damned_compass_danger.png" | "LyShineUI/Images/Map/Icon/POIs/Baalphazu.png" | "" | "LyShineUI/Images/Map/Icon/POIs/winter_warrior.png" | "LyShineUI/Images/Map/Icon/POIs/Turkey.png" | "LyShineUI/Images/Map/Icon/POIs/cyclops.png" | "LyShineUI/Images/Map/Icon/POIs/furySpriggan.png" | "LyShineUI\\Images\\Icons\\Objectives\\icon_Objective_Quest.png" | "LyShineUI\\Images\\Map\\Icon\\POIs\\spirit_shrine_charted.dds" | "LyShineUI/Images/Map/Icon/POIs/outpost_compass.png";

export type Debug = "" | "B+";

export type TerritoryDefinitionEventID = "" | "CrowsNest";

export type FactionControlTerritoryBuffs = "None" | "InfluencePoints_Modifier,ExperiencePoints_Modifier" | "";

export type ObjectiveID = "" | "12_getoffbeach" | "06_getoffbeach";

export type TerritoryDefinitionRequiredItemID = "Darkness_AzothStaff_T1" | "2hInstrumentGuitarT2" | "";

export type UnchartedIcon = "" | "LyShineUI/Images/Map/Icon/POIs/spirit_shrine.png" | "LyShineUI\\Images\\Map\\Icon\\POIs\\brimstone\\brimstone_pyramid.png" | "LyShineUI/Images/Map/Icon/POIs/azure_tree.png" | "LyShineUI\\Images\\Map\\Icon\\POIs\\brimstone\\brimstone_colossus.png" | "LyShineUI\\Images\\Map\\Icon\\POIs\\ancient_shrine.png";

export type TerritoryProgressionData = {
    ProjectId:                   string;
    Cost:                        number;
    Level:                       number;
    Icon:                        string;
    Title:                       string;
    ChatNotificationTitle:       string;
    ButtonLabel:                 string;
    Image:                       string;
    CurrentTier:                 number;
    CraftingAzothDiscount:       number | null;
    Description:                 string;
    TerritoryProgressionNeeded:  number;
    CompletionTimeMinutes:       number;
    PrevLevelProjectId:          string;
    NextLevelProjectId:          string;
    ProjectType:                 DisplayColumn;
    DisplayColumn:               DisplayColumn;
    ProgressionCategory:         string;
    ProgressionCategoryName:     string;
    ProgressionLevel:            number;
    LifestyleBuffEffectId:       string;
    LifestyleBuffEffectDuration: number | null;
}

export type DisplayColumn = "Settlement" | "Fortress" | "Lifestyle" | "AlwaysAvailable";

export type ThrowableItemDefinitions = {
    ThrowableId:          string;
    ActivationTime:       number;
    SpawnSliceOnActivate: boolean;
    ActivationSlicePath:  string;
    GatherableSlicePath:  string;
    SpellName:            string;
    AttachmentName:       string;
    WarningTime:          number;
    AttachmentSlicePath:  string;
}

export type TimelineRegistryEntryData = {
    TimelineEntryName:   string;
    TimelineAssetPath:   string;
    AssetDependencyPath: string;
}

export type TradeSkillPostCapData = {
    TradeSkillType:     string;
    TradeSkillRewardXP: number;
    SubRewardPerc1:     number;
    SubRewardPerc2:     number;
    SubRewardPerc3:     string;
    SubRewardPerc4:     string;
    SubRewardPerc5:     string;
    SubRewardPerc6:     string;
    SubRewardPerc7:     string;
    SubRewardPerc8:     string;
    SubRewardPerc9:     string;
    SubReward1:         string;
    SubReward2:         string;
    SubReward3:         string;
    SubReward4:         string;
    SubReward5:         string;
    SubReward6:         string;
    SubReward7:         string;
    SubReward8:         string;
    SubReward9:         string;
    Reward:             string;
    GameEvent1:         GameEvent;
    GameEvent2:         GameEvent;
    GameEvent:          GameEvent;
}

export type GameEvent = "GypsumGreenEvent";

export type TradeskillRankData = {
    Level:                        number;
    DisplayName:                  TradeskillRankDatumDisplayName;
    RequiredLevel:                number;
    MaximumInfluence:             number;
    InfluenceCost:                number;
    CurrencyCost:                 number;
    SanityCheck:                  boolean | null;
    GameEventId?:                 string;
    SpecializationPoint?:         string;
    SkillBonus?:                  string;
    RecipeLevel?:                 number;
    RollBonus?:                   number;
    MinGearScoreBonus?:           number;
    MaxGearScoreBonus?:           number;
    MinGearScoreBonusT2?:         number | null;
    MaxGearScoreBonusT2?:         number | null;
    MinGearScoreBonusT3?:         number | null;
    MaxGearScoreBonusT3?:         number | null;
    MinGearScoreBonusT4?:         number | null;
    MaxGearScoreBonusT4?:         number | null;
    MinGearScoreBonusT5?:         number | null;
    MaxGearScoreBonusT5?:         number | null;
    ResourceTierUnlocks?:         number;
    EntitlementId?:               string;
    XpReward?:                    number;
    IsMilestone?:                 boolean | null;
    FishingMaxCastDistanceBonus?: number;
    GatheringMultiplier?:         number;
    GatheringEfficiency?:         number;
    IconTypeUnlock?:              IconTypeUnlock;
    Tooltip?:                     Tooltip;
    MaxGatherableLevel?:          number;
    GatherableLevelModifier?:     number | null;
    "%Increase"?:                 number | null;
    Intensify?:                   number | null;
}

export type TradeskillRankDatumDisplayName = "" | "@ui_farmplants" | "@ui_hemp" | "@ui_alchemy1" | "@ui_aloe" | "@ui_hempT4" | "@ui_alchemy3" | "@ui_hempT5" | "@ui_wyrdwood" | "@ui_ironwood" | "@ui_iron" | "@ui_silver" | "@ui_oil" | "@ui_gold" | "@ui_alchemyStones" | "@ui_lodestone" | "@ui_starmetal" | "@ui_sandstone" | "@ui_platinum" | "@ui_brimstone" | "@ui_orichalcum" | "@ui_smallprey" | "@ui_mediumprey" | "@ui_largeprey" | "@ui_smallpredator" | "@ui_largepredator";

export type IconTypeUnlock = "" | "FarmPlants" | "Hemp" | "Alchemy1" | "Aloe" | "harvestingplantT4" | "Alchemy3" | "harvestingplantT5" | "Wyrdwood" | "Ironwood" | "Iron" | "Silver" | "Oil" | "Gold" | "Alchemy2" | "Lodestone" | "Starmetal" | "Sandstone" | "Platinum" | "Brimstone" | "Orichalcum" | "SmallPrey" | "MediumPrey" | "LargePrey" | "SmallPredator" | "LargePredator";

export type Tooltip = "" | "Proficient Harvester" | "Gather Alchemy Plants" | "Detect Cooking Ingredients" | "Detect Hemp" | "Detect Alchemy Plants" | "Detect T4 plants" | "Detect Alchemy Creatures" | "Detect T5 plants" | "Proficient Logger" | "Chop Wyrdwood" | "Detect Wyrdwood" | "Chop Ironwood" | "Detect Ironwood" | "Mine Boulders, Iron" | "Proficient Miner" | "Mine Silver" | "Mine Seeping Stone" | "Detect Iron" | "Detect Seeping Stones" | "Detect Silver" | "Mine Lodestone" | "Mine Alchemy Stones" | "Detect Alchemy Stones" | "Mine Gold" | "Detect Lodestone" | "Detect Gold" | "Mine Starmetal" | "Detect Sandstone" | "Detect Brimstone" | "Detect Starmetal" | "Mine Platinum" | "Detect Platinum" | "Mine Orichalcum" | "Detect Orichalcum";

export type TwitchDropsStatDefinitions = {
    TwitchDropId: string;
    RuleKeyEvent: string;
}

export type TwitchTagsStatDefinitions = {
    TwitchTagId:  string;
    TagGroupId:   number;
    KeyValuePair: string;
    DisplayName:  string;
}

export type VariationData = {
    HouseItemID?:                            string;
    ExcludeFromGame?:                        number;
    PrefabPath?:                             string;
    "DEV-FurnitureSet"?:                     DEVFurnitureSet;
    UIHousingCategory?:                      UIHousingCategory;
    "HousingTag1 Placed"?:                   HousingTag1Placed;
    "HousingTag2 Points"?:                   HousingTag2Points;
    "HousingTag3 Limiter"?:                  HousingTag3Limiter;
    "HousingTag5 Buffs"?:                    HousingTag5Buffs;
    HousingTags?:                            string;
    IsEntitlement?:                          boolean | null | string;
    AttributionId?:                          AttributionID;
    "HowToOptain (Primarily)"?:              HowToOptainPrimarily;
    ItemRarity?:                             ItemRarity;
    ForceRarity?:                            number;
    RankingPointsDuplicateLimit?:            number;
    RankingPointsNegativeLimit?:             number;
    PointModifier?:                          number;
    RankingPoints?:                          number | RankingPointsEnum;
    MaxPotentialPoints?:                     number | string;
    HousingStatusEffect?:                    string;
    StorageBonus?:                           number | null | string;
    InteractionAnimationID?:                 InteractionAnimationID;
    Name?:                                   string;
    Description?:                            string;
    IconPath?:                               string;
    HiResIconPath?:                          string;
    Weight?:                                 number;
    TradingCategory?:                        TradingCategory;
    TradingFamily?:                          TradingFamily;
    TradingGroup?:                           VariationDatumTradingGroup;
    ItemType?:                               ItemTypeEnum;
    UiItemClass?:                            UIItemClass;
    Tier?:                                   number;
    IsSalvageable?:                          boolean;
    SalvageResources?:                       boolean;
    IsRepairable?:                           boolean;
    BindOnPickup?:                           boolean;
    CraftingRecipe?:                         string;
    RepairRecipe?:                           string;
    SalvageRecipe?:                          string;
    SalvageGameEventID?:                     SalvageGameEventID;
    RepairDustModifier?:                     number;
    ConfirmBeforeUse?:                       boolean;
    ConsumeOnUse?:                           boolean;
    MaxStackSize?:                           number;
    DeathDropPercentage?:                    number;
    ItemTypeDisplayName?:                    ItemTypeDisplayName;
    Nonremovable?:                           boolean;
    AudioPickup?:                            AudioPickup;
    AudioPlace?:                             MasterItemDefinitionAudioPlace;
    AudioUse?:                               AudioUse;
    AudioCreated?:                           AudioCreated;
    AudioDestroyed?:                         string;
    "Primary Color"?:                        ColorFamilies;
    "Secondary Color"?:                      string;
    "Tertiary Color"?:                       string;
    ColorFamilies?:                          ColorFamilies;
    PlacementGridDisplaySize?:               PlacementGridDisplaySize;
    Notes?:                                  string;
    VariantID?:                              string;
    "Task Name"?:                            string;
    "Task Config Name"?:                     string;
    StartMesh?:                              string;
    Mass?:                                   number;
    StartMeshLOD?:                           number | string;
    Play_Falling_SFX?:                       PlayFallingSFX;
    Stop_Falling_SFX?:                       StopFallingSFX;
    Play_Sliding_SFX?:                       PlaySlidingSFX;
    X_Sliding_SFX?:                          number;
    Y_Sliding_SFX?:                          number;
    Z_Sliding_SFX?:                          number;
    CutMaterial?:                            string;
    Visuals_Healthy?:                        string;
    GatherableEntryID?:                      string;
    GatheringRadius?:                        number | null;
    InteractionRadius?:                      number | null;
    DetectableRadius?:                       number | null;
    MarkerRadius?:                           number | null;
    AudioPreload_loop?:                      string;
    AudioPreload_Burst_1?:                   string;
    AudioPreload_Burst_2?:                   string;
    AudioPreload_Burst_3?:                   string;
    AudioPreload_depleted?:                  string;
    SFX_depleted?:                           string;
    SFX_Idle?:                               string;
    VFX_Idle?:                               string;
    SFX_Burst_1?:                            SfxBurst;
    SFX_Burst_2?:                            SfxBurst;
    SFX_Burst_3?:                            SfxBurst;
    VFX_Burst_1?:                            string;
    VFX_Burst_2?:                            string;
    VFX_Burst_3?:                            string;
    IdleVFX_Offset_Z?:                       number | null | string;
    DepletedVFX?:                            string;
    DepletedMesh?:                           string;
    EndMeshLOD?:                             number | null | string;
    GatheringFX?:                            GatheringFX;
    ShowOnMap?:                              number | null | string;
    ShowOnCompass?:                          number | null | string;
    MapIcon?:                                string;
    CompassIcon?:                            string;
    TradeskillIconUnlockType?:               IconTypeUnlock;
    MapTooltipTitleLocTag?:                  string;
    MapTooltipDescLocTag?:                   string;
    EnableBurstParticle1?:                   boolean | null | string;
    EnableBurstParticle2?:                   boolean | null | string;
    EnableBurstParticle3?:                   boolean | null | string;
    InteractionMarker_Offset_X?:             number | null | string;
    InteractionMarker_Offset_Y?:             number | null | string;
    InteractionMarker_Offset_Z?:             number | null;
    StartMat?:                               string;
    AudioPreload_Depletion?:                 AudioPreloadDepletion;
    Depleted_SFX?:                           DepletedSFXEnum;
    Collision_Play_SFX?:                     CollisionPlaySFX;
    Collision_Stop_SFX?:                     CollisionStopSFX;
    DepletedMat?:                            string;
    AmbientType?:                            AmbientType;
    AllowGatheringInGameModes?:              ExcludeFromGameModes;
    ResetTime?:                              number;
    ForgetInstancedStateTime?:               string;
    NumCyclicStates?:                        number;
    InteractTag?:                            string;
    Visual_BaseMesh?:                        string;
    Visual_RotatedBaseMesh?:                 string;
    Visual_WaitingForReset?:                 string;
    Visual_NotOnRequiredQuest?:              string;
    Gatherable_0?:                           Gatherable;
    Gatherable_0_Variant?:                   string;
    Delay_0?:                                number | null;
    RotationPercent_0?:                      number | null;
    Gatherable_1?:                           Gatherable;
    Gatherable_1_Variant?:                   string;
    Delay_1?:                                number | null;
    RotationPercent_1?:                      number | null;
    Gatherable_2?:                           Gatherable;
    Gatherable_2_Variant?:                   string;
    Delay_2?:                                number | null;
    RotationPercent_2?:                      number | null;
    Gatherable_3?:                           Gatherable;
    Gatherable_3_Variant?:                   string;
    Delay_3?:                                number | null;
    RotationPercent_3?:                      number | null;
    Gatherable_4?:                           Gatherable;
    Gatherable_4_Variant?:                   string;
    Delay_4?:                                number | null;
    RotationPercent_4?:                      number | null;
    "AE.0_RequiredAchievementConditional"?:  string;
    "AE.1_RE.0_TargetRotationPercent"?:      number | null;
    DetectableObjectRadius?:                 number;
    IdleVFX?:                                string;
    DepletedSFX?:                            DepletedSFX;
    InteractOnlyOnQuest?:                    boolean | null | string;
    Visual_Healthy?:                         string;
    Visual_Depleted?:                        string;
    Visual_Basemesh?:                        string;
    AudioPreload_idle?:                      AudioPreloadIdle;
    depletedVFX_Offset_Z?:                   number | null | string;
    gatheringVFX_Offzet_Z?:                  number | null | string;
    interactionMarker_Offset_Z?:             number | null | string;
    InteractionEvent?:                       string;
    AchievementID?:                          string;
    AchievementServerState?:                 AchievementServerState;
    Visual_Loot?:                            string;
    Idle_VFX?:                               IdleVFX;
    Visual_Frame?:                           string;
    InteractionX?:                           number;
    InteractionY?:                           number;
    InteractionZ?:                           number;
    DetectableX?:                            number;
    DetectableY?:                            number;
    DetectableZ?:                            number;
    MarkerX?:                                number;
    MarkerY?:                                number;
    MarkerZ?:                                number;
    Visual_Chest?:                           string;
    LootTableComponent?:                     string;
    DepletedPreload?:                        Preload;
    DepletedFX?:                             DepletedFX;
    LoS_Override?:                           boolean | null;
    MarkerOffset_Z?:                         number | null;
    DepletedFXOffset_Y?:                     null;
    DepletedFXOffset_Z?:                     null;
    IdleFXOffset_Y?:                         string;
    IdleFXOffset_Z?:                         string;
    LootLockSlice?:                          string;
    Idle_SFX_Preload?:                       Preload;
    Depleted_SFX_Particle_Preload?:          Preload;
    Depleted_SFX_Offset_Y?:                  null;
    Depleted_SFX_Offset_Z?:                  null;
    Idle_SFX_Offset_Y?:                      null;
    Idle_SFX_Offset_Z?:                      null;
    Idle_SFX_Play?:                          IdleSFXPlay;
    Idle_SFX_Stop?:                          IdleSFXStop;
    IdleSFX?:                                IdleSFX;
    AudioPreloadName?:                       AudioPreloadName;
    DepletedMaterial?:                       string;
    VegAreaClearRadius?:                     number;
    AcceptSnow?:                             boolean;
    GatherableEntryId?:                      string;
    NPC_Visuals?:                            string;
    NPC_IdleAnimTimeline?:                   string;
    NPC_RunawayTimeline?:                    string;
    NPC_OnInteract_VFX?:                     string;
    NPC_OnInteract_SFX?:                     string;
    CollisionFX?:                            CollisionFX;
    StartSlice?:                             string;
    DepletedSlice?:                          string;
    VegAreaDataSet?:                         VegAreaDataSet;
    VegAreaInnerRadius?:                     number;
    VegAreaOuterRadius?:                     number;
    AOIRadius?:                              number;
    InteractionHeight?:                      number;
    BaseSlice?:                              string;
    DepletedVFX_Quest?:                      DepletedVFXQuest;
    DepletedVFX_Quest_Offset_Z?:             number | null | string;
    IsStateControlledBySlayerScript?:        boolean | null | string;
    RequireLoS?:                             null | string;
    RequiredAchievement?:                    string;
    AudioPreload_gathering?:                 AudioPreload;
    SFX_gathering?:                          SFXGathering;
    SFX_depleted_idle_play?:                 SFXDepletedIdlePlay;
    SFX_depleted_idle_stop?:                 SFXDepletedIdleStop;
    AudioPreload_Depleted_idle?:             AudioPreload;
    InteractPromptRadius?:                   number;
    CollisionAssetOverride?:                 string;
    ShouldHaveStaticCollision?:              boolean | null;
    Collision_Offset_Z?:                     number | null;
    VisualHealthy_Offset_Z?:                 null;
    Collision_Scale_X?:                      number | null;
    Collision_Scale_Y?:                      number | null;
    Collision_Scale_Z?:                      number | null;
    Force_Display_Health_Bar?:               boolean | null;
    Marker_Creature_Type_Override?:          MarkerCreatureTypeOverride;
    Marker_Vertical_Offset?:                 number | null;
    DetectionVolumeSphereRadius?:            number | null;
    DepletedVFX_Pos?:                        number;
    DepletedSpawnVariant?:                   string;
    RequiredAchievementConditional?:         string;
    InteractGatherableSlice?:                string;
    LootTableID?:                            string;
    BottomMesh?:                             string;
    BottomMat?:                              string;
    TopMesh?:                                string;
    TopMat?:                                 string;
    TopMesh_TransformX?:                     string;
    TopMesh_TransformY?:                     string;
    TopMesh_TransformZ?:                     number | null;
    NPCId?:                                  string;
    CharacterDefinition?:                    string;
    ByeTimeline?:                            string;
    GreetTimeline?:                          string;
    IdleTimeline?:                           string;
    InteractTimeline?:                       string;
    SwapAchievementId?:                      string;
    PlaceholderMesh?:                        string;
    AttachedMesh?:                           string;
    AttachmentPositionX?:                    number | null | string;
    AttachmentPositionY?:                    number | null | string;
    AttachmentPositionZ?:                    number | null | string;
    AttachmentRotationX?:                    number | null | string;
    AttachmentRotationY?:                    number | null | string;
    AttachmentRotationZ?:                    number | null | string;
    InteractOverride_X?:                     null | string;
    InteractOverride_Y?:                     null | string;
    CharacterDefinitionEditor?:              string;
    WalkawayTimeline?:                       string;
    "AE.9_RequiredAchievementConditional"?:  number;
    "AE.0_EventDelayDuration"?:              number;
    "AE.9_EventDelayDuration"?:              number;
    "AE.1_EventDelayDuration"?:              number;
    "AE.1_OE.0_OpacityTransitionDuration"?:  number;
    "AE.2_EventDelayDuration"?:              number;
    WalkInTimeline?:                         WalkInTimeline;
    "AE.3_RequiredAchievementConditional"?:  string;
    "AE.10_RequiredAchievementConditional"?: number | null;
    "AE.3_EventDelayDuration"?:              number;
    "AE.10_EventDelayDuration"?:             number;
    "AE.4_EventDelayDuration"?:              number;
    "AE.4_OE.0_OpacityTransitionDuration"?:  number;
    "AE.5_EventDelayDuration"?:              number;
    "AE.6_EventDelayDuration"?:              number;
    AreaID?:                                 string;
    VitalsLevelOverride_001?:                number;
    VitalsCategoryOverride_001?:             string;
    VitalsLevelOverride_002?:                string;
    VitalsCategoryOverride_002?:             string;
    VitalsLevelOverride_003?:                string;
    VitalsCategoryOverride_003?:             string;
}

export type AchievementServerState = "" | "Depleted";

export type AmbientType = "Bush" | "Cattail" | "" | "BeechTree" | "DeadTree" | "OakTree" | "PineTree" | "PoplarTree" | "BananaTree" | "BaldCypressTree" | "KapokTree";

export type AudioPreloadName = "" | "gath_oilseep";

export type AudioPreload = "" | "missions_brightwood" | "Struct_BrimstoneSands_AzothProjector" | "missions_everfall";

export type AudioPreloadDepletion = "gath_bush_leaves_big" | "gath_bush_leaves_med" | "gath_bush_leaves_small" | "N/A" | "";

export type AudioPreloadIdle = "" | "Corruption_Beam_A" | "gath_bush_leaves_small" | "BrimstoneSands_Seedpod_Devices" | "Missions_BreakCurse" | "missions_brightwood";

export type CollisionFX = "Gatherable.Edible_Flora.Loop_Burstberry_Summer_A" | "";

export type CollisionPlaySFX = "Play_Foliage_Green_Med" | "Play_Foliage_Green_Tropical_Med" | "Play_Foliage_Green_Jungle_Med" | "";

export type CollisionStopSFX = "Stop_Foliage_Green_Med" | "Stop_Foliage_Green_Tropical_Med" | "Stop_Foliage_Green_Jungle_Med" | "";

export type ColorFamilies = "" | "DecorColor_Yellows";

export type DEVFurnitureSet = "0-TEST_ONLY-0" | "MTX-Pack-01-Pirate" | "MTX-Pack-02-Spooky" | "MTX-Pack-03-Royal" | "MTX-Pack-04-Winter-2021" | "MTX-Pack-05-NewYears-2021" | "MTX-Pack-06-Love" | "MTX-Pack-07-Spring" | "MTX-Pack-08-FateFortune" | "MTX-Pack-09-RPG" | "MTX-Pack-10-Metal" | "MTX-Pack-11-Phoenix" | "MTX-Pack-12-Egyptian" | "MTX-Pack-13-Nightveil" | "MTX-Pack-14-DarkFae" | "MTX-Pack-15-Winter-2022" | "NA-Basic" | "NA-Buffs" | "NA-Other" | "Pack-01-HolidayWinter-2021" | "Pack-01-HolidayWinter-2022" | "Pack-02-HolidaySummer-2022" | "Pack-03-HolidayFall-2022" | "Set-01-Settler" | "Set-02-Pirate" | "Set-03-Dynasty" | "Set-04-Legion" | "Pack-04-HolidaySpring-2023" | "" | "MTX-Pack-16-NewYears-2023" | "MTX-Pack-17-Omens-2023" | "MTX-Pack-18-Firelight-2023";

export type DepletedFX = "cFX_Loot.Chest_Big_Celebration01" | "cFX_Loot.Chest_Medium_Celebration01" | "cFX_Loot.Chest_Small_Celebration01" | "cFX_Loot.Chest_Big_Celebration02" | "cFX_Loot.Settlement_Small_Celebration01" | "cFX_Loot.Settlement_Medium_Celebration01" | "cFX_Loot.Settlement_Medium_Celebration02" | "cFX_Loot.Chest_Big_Celebration03" | "cFX_Loot.Chest_Big_Celebration04";

export type Preload = "loot_container";

export type DepletedSFX = "" | "Play_Gather_Log_Med" | "Play_Gather_Chest_Large" | "Play_Gather_Chest_Small" | "Play_Gather_Boulder_Lrg" | "Play_Gather_Boulder_Med" | "Play_Gather_Boulder_Sml" | "Play_Gather_Stones" | "Play_Gather_Bush_Sml" | "Play_Gather_Nuts";

export type DepletedVFXQuest = "cFX_Loot.Loot_Quest_Small_Depleted" | "" | "Gatherable_Alchemy_Plant.Ambience.Plant_Fire_Deplete01" | "cFX_LifeStaff.MassRez_Spawn" | "cFX_Loot.Loot_Quest_Medium_Depleted" | "env_darkness_grove.Minor.Main_DES_Expl" | "cFX_npc_DryadArcher.Weapon_Ignite" | "Buildables.Camp.Ruin_Campfire_01" | "Gatherable.Mineral.Demolish.Boulder_sm_C" | "Gatherable.Log.Demolish.RottenLog_C" | "ENV_Dungeon_Ancient_Gate.Seal_Break_02" | "Gatherable.Edible_Flora.Demolish.Grain_A" | "gatherable_Alchemy_Plant.Ambience.Plant_Air_Burst02" | "cFX_Loot.Chest_Big_Celebration01" | "env_msq_collectable.CorruptedOrb.Orb_Explosion" | "env_everfall.Forge_Complete" | "Buildables.Placement.Dust_A" | "Reveries_Fireworks.Fireworks_Shootingstar_Spectrum" | "gatherable_alchemy_boid.Ambience.Boid_Death_Burst03" | "vfx_ezra_lead.Forgebreaker" | "cFX_Loot.Loot_Quest_Small" | "cfx_npc_ancient_heavy.Heavy_Jump_Wave" | "env_msq_collectable.Witch.witchs_fire_bursting";

export type DepletedSFXEnum = "Play_Gather_Bush_Lrg" | "Play_Gather_Bush_Med" | "Play_Gather_Bush_Sml";

export type Gatherable = "slices\\Gatherables\\Master_Quest.slice" | "slices\\Gatherables\\Master_Quest_Instanced.slice" | "slices\\Gatherables\\Master_Quest_Proximity_Instanced.slice" | "slices\\Gatherables\\Master_Quest_Damageable_Instanced.slice" | "slices\\WorldEvents\\Varangian\\CustomMQI_9926_VKCannon_A_00.slice" | "slices\\WorldEvents\\Varangian\\CustomMQI_9926_VKCannon_B_00.slice" | "";

export type GatheringFX = "env_darkness.Core.Core_minor_monolith_gather01" | "" | "dungeon_shatteredobelisk.Beam_Charge";

export type HousingTag1Placed = "" | "OnFloor" | "OnCeiling" | "OnWall" | "OnFurniture";

export type HousingTag2Points = "" | "+IsChairOther" | "+IsLighting" | "+IsAnimal" | "+IsLargeDecor" | "+IsBooksPaper" | "+IsVeg" | "+IsPainting" | "+IsSmallDecor" | "+IsMediumDecor" | "+IsCurtain" | "+IsBed" | "+IsChairDining" | "+IsTableOther" | "+IsRug" | "+IsTableDining" | "+IsShelfWall" | "+IsShelves" | "+IsCabinetShort" | "+IsDishes" | "+IsPlaceSetting" | "+IsStoveOven" | "+IsStorage" | "+IsUnique" | "+IsTrophyBuff" | "+IsCabinetTall" | "#NAME?";

export type HousingTag3Limiter = "" | "+LimiterLighting" | "+LimiterAnimatedRigged" | "+LimiterAnimatedTimelineInteract" | "+LimiterAnimatedTimelineLooping" | "+LimiterStorage" | "+LimiterTrophyBuff" | "#NAME?";

export type HousingTag5Buffs = "" | "+NoStacking" | "+CraftingAlchemyBonus" | "+CraftingBlacksmithingBonus" | "+CraftingCookingBonus" | "+CombatAncientBonus" | "+CombatAngryEarthBonus" | "+CombatBeastBonus" | "+CombatCorruptedBonus" | "+CombatLostBonus" | "+CombatVarangianBonus" | "+CraftingEngineeringBonus" | "+GatheringFishingBonus" | "+GatheringHarvestingBonus" | "+GatheringLoggingBonus" | "+OtherLootLuckBonus" | "+GatheringMiningBonus" | "+CraftingOutfittingBonus" | "+GatheringSkinningBonus" | "+OtherFoodTimeBonus" | "+SeasonXPBonus" | "#NAME?";

export type HowToOptainPrimarily = "" | "MTX Shop/Gift" | "Crafting - Common Materials" | "Crafting - Uncommon Materials" | "Crafting - Rare Materials" | "Loot Drop - Uncommon" | "Loot Drop - Common" | "Loot Drop - Rare" | "Crafting - Epic Materials" | "Fishing Treasure Chest" | "Loot Drop - Elite" | "Quest Reward" | "Holiday Shop" | "Loot Drop - Legendary" | "Season Journey Reward" | "Exploration Painting Rewards" | "From Salvage - Epic" | "LiveOps Make-Good" | "Fishing Tournament Rewards" | "Season Event Drop";

export type IdleSFX = "" | "Play_AMB_3D_OilSeep";

export type IdleSFXPlay = "Play_Loot_Small_Idle";

export type IdleSFXStop = "Stop_Loot_Small_Idle";

export type IdleVFX = "Loot.Crate_small01" | "Loot.Chest_big_open01" | "Loot.Crate_xsmall01" | "Loot.Crate_tall01" | "Loot.Chest_big_closed01" | "Loot.Chest_big_peek01" | "Loot.Chest_xbig01" | "Loot.GlyphChest_big_open1";

export type ItemRarity = "" | "Rare" | "Common" | "Uncommon" | "Epic" | "Legendary";

export type MarkerCreatureTypeOverride = "" | "DamageableGatherable";

export type PlacementGridDisplaySize = "" | "GridSize_Large";

export type PlayFallingSFX = "Play_Gather_TreeFall_Med" | "Play_Gather_TreeFall_Small" | "Play_Gather_TreeFall_Big" | "Play_Gather_CactusFall_Med";

export type PlaySlidingSFX = "Play_Slide_Tree_Med" | "Play_Slide_Tree_Small" | "Play_Slide_Tree_Hvy" | "";

export type RankingPointsEnum = "0.02" | "0.12" | "0.11" | "0.04" | "0.08" | "0.06" | "7.0000000000000007E-2" | "0.03" | "0.09" | "0.05" | "0.13" | "0.1" | "0.14000000000000001" | "0.16" | "0.18" | "0.2" | "#N/A" | "0.15";

export type SfxBurst = "Play_Alchemy_Fire_Boid" | "" | "Play_Alchemy_Fire_Plant" | "Play_Alchemy_Air_Sparks_Boid_01" | "Play_Alchemy_Death_Plant" | "Play_Alchemy_Earth_Stone" | "Play_Alchemy_Fire_Stone" | "Play_Alchemy_Air_Sparks_Stone" | "Play_Alchemy_Earth_Boid" | "Play_Alchemy_Life_Moth" | "Play_Alchemy_Soul_Boid" | "Play_Alchemy_Air_Sparks_Boid_02" | "Play_Alchemy_Air_Sparks_Boid_03";

export type SFXDepletedIdlePlay = "" | "Play_SFX_Missions_Brightwood_BurnCaskets";

export type SFXDepletedIdleStop = "" | "Stop_SFX_Missions_Brightwood_BurnCaskets";

export type SFXGathering = "" | "Play_SFX_AzothProjector_Movement";

export type SalvageGameEventID = "" | "SalvageCoinGrantT2" | "SalvageCoinGrantT3" | "SalvageCoinGrantT4";

export type StopFallingSFX = "Stop_Gather_TreeFall_Med" | "Stop_Gather_TreeFall_Small" | "Stop_Gather_TreeFall_Big" | "Stop_Gather_CactusFall_Med";

export type TradingFamily = "" | "HousingTrdF_Furniture" | "HousingTrdF_Misc" | "HousingTrdF_Decorations" | "HousingTrdF_Trophies";

export type VariationDatumTradingGroup = "" | "HousingTrdG_Shelves" | "HousingTrdG_MiscOther" | "HousingTrdG_DecorOther" | "HousingTrdG_Beds" | "HousingTrdG_Chairs" | "HousingTrdG_Curtains" | "HousingTrdG_Dishes" | "HousingTrdG_Lighting" | "HousingTrdG_BooksPaper" | "HousingTrdG_Rugs" | "HousingTrdG_Cabinets" | "HousingTrdG_Stoves" | "HousingTrdG_Storage" | "HousingTrdG_Tables" | "HousingTrdG_Veg" | "HousingTrdG_BuffCrafting" | "HousingTrdG_BuffCombat" | "HousingTrdG_BuffGathering" | "HousingTrdG_BuffOther" | "HousingTrdG_Paintings" | "HousingTrdG_Animals";

export type UIHousingCategory = "" | "Chairs" | "Lighting" | "Pets" | "Misc" | "Decorations" | "Vegetation" | "Beds" | "Tables" | "Shelves" | "Trophies";

export type VegAreaDataSet = "GroundCover/ObjectSets/Nature/bush_01.vegsetdb" | "";

export type WalkInTimeline = "Libs\\Timeline\\Npc\\npc_01_reeseww_walkaway_left.timeline" | "Timelines\\EmptyTimeline.timeline" | "Libs\\Timeline\\Npc\\npc_01_graceww_00_walkin.timeline";

export type VitalsCategoryData = {
    VitalsCategoryID:          string;
    DisplayName:               string;
    Icon:                      Icon;
    LocationHint:              LocationHint;
    LocStringGenerationHelper: string;
    GroupVitalsCategoryId:     string;
    IsNamed:                   boolean | null;
    IsDynamicPoiTarget:        boolean | null;
    LootDropChanceOverride:    number | null;
    MtlOverride:               string;
    FemaleMtlOverride:         string;
}

export type Icon = "" | "LyShineUI\\Images\\missions\\kill\\Ancient.png" | "LyShineUI\\Images\\Missions\\Kill\\Bear.PNG" | "LyShineUI\\Images\\Missions\\Kill\\Bison.PNG" | "LyShineUI\\Images\\Missions\\Kill\\Boar.PNG" | "LyShineUI\\Images\\Missions\\Kill\\Corrupted.PNG" | "LyShineUI\\Images\\missions\\kill\\Spriggan.png" | "LyShineUI\\Images\\Missions\\Kill\\Withered.PNG" | "LyShineUI\\Images\\Missions\\Kill\\Elk.PNG" | "LyShineUI\\Images\\Missions\\Kill\\Boss.PNG" | "LyShineUI\\Images\\Missions\\Kill\\Wolf.PNG" | "LyShineUI\\Images\\Missions\\Kill\\Turkey.PNG";

export type LocationHint = "" | "Ebony_Hawk";

export type VitalsData = {
    VitalsID:                                  string;
    DisplayName:                               string;
    VitalsCategories:                          string;
    Level?:                                    number | null;
    Family?:                                   VitalsDatumFamily;
    CreatureType?:                             AttackerVitalsCategory;
    DifficultyTierOverride?:                   number | null;
    NoExpNoCoin?:                              string;
    CanDropLoot?:                              boolean;
    GearScoreOverride?:                        string;
    BaseDamageOverride?:                       string;
    DamageMod?:                                number | null;
    HealthMin:                                 number;
    HealthBaseMax:                             number | string;
    HealthInitial:                             number | string;
    HealthMod?:                                number | null;
    HealthOverridePercentSpellOwnerMaxHealth?: number | null;
    PhysicalArmorRatingOverride?:              string;
    PhysicalMitigation?:                       number | null;
    ElementalArmorRatingOverride?:             string;
    ElementalMitigation?:                      number | null;
    MinionVitalsId?:                           MinionVitalsID;
    BuffBuckets?:                              string;
    BaseStaggerDamageOverride?:                string;
    BlockStaminaDamageOverride?:               string;
    HealthBaseTickRate:                        number;
    HealthRegenCappedBy:                       number | null;
    HealthRegenThresholds:                     HealthRegenThresholds;
    HealthTickDelay:                           number;
    HealthFullyDepletedDelay:                  number;
    HealthLowerThreshold:                      number;
    HealthUpperThreshold:                      number;
    HealthUpdateIfDeathsDoor:                  number;
    HealthUpdateIfDead:                        number;
    BlockDamageMitigation:                     number;
    BlockStaminaCost:                          number;
    StaminaMin:                                number;
    StaminaBaseMax:                            number;
    StaminaInitial:                            number;
    StaminaBaseTickRate:                       number;
    StaminaRegenCappedBy:                      number | null;
    StaminaRegenThresholds:                    StaminaRegenThresholds;
    StaminaTickDelay:                          number;
    StaminaRegenDelay?:                        number;
    StaminaRegenDelayOnEmpty?:                 number;
    StaminaFullyDepletedDelay:                 number;
    StaminaLowerThreshold:                     number;
    StaminaUpperThreshold:                     number;
    StaminaUpdateIfDeathsDoor:                 number;
    StaminaUpdateIfDead:                       number;
    StaminaCostMitigation:                     number;
    MinMana:                                   number;
    ManaBaseMax:                               number;
    ManaInitial:                               number;
    ManaBaseRegenRate:                         number;
    ManaRegenDelay:                            number;
    ManaRegenDelayOnEmpty:                     number;
    DeathsDoorTime:                            number;
    DeathsDoorDelay:                           number;
    HelpUpHealthPct:                           number;
    FoodMin:                                   string;
    FoodBaseMax:                               number;
    FoodInitial:                               number;
    FoodBaseTickRate:                          number;
    FoodTickDelay:                             number;
    FoodFullyDepletedDelay:                    number;
    FoodLowerThreshold:                        number;
    FoodUpperThreshold:                        number;
    DrinkMin:                                  number;
    DrinkInitial:                              number;
    DrinkBaseMax:                              number;
    DrinkBaseTickRate:                         number;
    DrinkTickDelay:                            number;
    DrinkFullyDepletedDelay:                   number;
    DrinkLowerThreshold:                       number;
    DrinkUpperThreshold:                       number;
    DamageCooldown:                            number;
    MaxDefenseMitigationPercent:               number;
    AfflictionAbsorption:                      string;
    GameModeKillEventIds?:                     string;
    GameModeAssistEventIds?:                   string;
    WarKillEventId?:                           WarKillEventID;
    WarAssistEventId?:                         WarAssistEventID;
    KillEventIdOverride?:                      KillEventIDOverride;
    LootDropChance:                            number | null | string;
    IgnoreLootDropModifier?:                   AdjustPowerLevel;
    LootTableId:                               VitalsDatumLootTableID;
    LootTags?:                                 string;
    IgnoreEffectCategories?:                   string;
    DEFStandard:                               number | null;
    DEFSiege:                                  string;
    DEFStrike:                                 number | null | string;
    DEFSlash:                                  number | null | string;
    DEFThrust:                                 number | null | string;
    DEFArcane?:                                number | null;
    DEFFire:                                   number | null | string;
    DEFIce?:                                   string;
    DEFNature?:                                string;
    DEFLightning:                              number | null | string;
    DEFCorruption:                             number | null | string;
    ABSStandard:                               number | null;
    ABSSiege:                                  number | null;
    ABSStrike:                                 number | null;
    ABSSlash:                                  number | null;
    ABSThrust:                                 number | null;
    ABSArcane?:                                number;
    ABSIce?:                                   number;
    ABSNature?:                                number | null;
    ABSFire:                                   number | null;
    ABSLightning:                              number | null;
    ABSCorruption:                             number | null;
    RESPoison:                                 number | null;
    RESDisease:                                number | null;
    RESBleed:                                  number | null | string;
    RESFrostbite:                              number | null | string;
    RESCurse:                                  number | null | string;
    RESBlight?:                                number | null;
    BLAStandard:                               string;
    BLASiege:                                  string;
    BLAStrike:                                 string;
    BLASlash:                                  string;
    BLAThrust:                                 string;
    BLAArcane?:                                string;
    BLAFire:                                   string;
    BLAIce?:                                   string;
    BLANature?:                                string;
    BLALightning:                              string;
    BLACorruption:                             string;
    ABAPoison:                                 string;
    ABADisease:                                string;
    ABABleed:                                  string;
    ABAFrostbite:                              string;
    ABACurse:                                  string;
    ABABlight?:                                string;
    WKNStandard:                               number | null;
    WKNSiege:                                  number | null | string;
    WKNStrike:                                 number | null | string;
    WKNSlash:                                  number | null | string;
    WKNThrust:                                 number | null | string;
    WKNArcane?:                                number | null;
    WKNIce?:                                   number | null;
    WKNNature?:                                number | null;
    WKNFire:                                   number | null | string;
    WKNLightning:                              number | null | string;
    WKNCorruption:                             number | null | string;
    DMGStandard:                               number | null;
    DMGSiege:                                  number | null;
    DMGStrike:                                 number | null;
    DMGSlash:                                  number | null;
    DMGThrust:                                 number | null;
    DMGArcane?:                                number;
    DMGFire:                                   number | null;
    DMGIce?:                                   number;
    DMGNature?:                                number;
    DMGLightning:                              number | null;
    DMGCorruption:                             number | null;
    AFAPoison:                                 number | null | string;
    AFADisease:                                number | null | string;
    AFABleed:                                  number | null | string;
    AFAFrostbite:                              AFAFrostbite;
    AFACurse:                                  string;
    AFABlight?:                                string;
    CharacterScale?:                           number | null;
    IsMinion?:                                 boolean | null;
    ChainSpellImmune?:                         boolean | null;
    MutatorDifficultyMod?:                     string;
    MutatorPotencyMod?:                        number | null;
    HealthPercentForLootContributionOverride?: number | null;
    WarPoints?:                                string;
    KillEventId?:                              string;
    DEFMagic?:                                 string;
    ABSMagic?:                                 number | null;
    BLAMagic?:                                 string;
    WKNMagic?:                                 string;
    DMGMagic?:                                 number | null;
}

export type AFAFrostbite = "" | "c";

export type VitalsDatumFamily = "Wildlife" | "AncientGuardian" | "" | "Corrupted" | "AngryEarth" | "Lost" | "Human";

export type HealthRegenThresholds = "" | "Health;100:0;75:50;50:200;25:350;10:500;0.1:500;0:0" | "Health;100:0;75:50;50:200;25:350;10:500;0.1:500;0:1" | "Health;100:0;75:50;50:200;25:350;10:500;0.1:500;0:2" | "Food;60:100;25:65;10:25;0:0";

export type KillEventIDOverride = "" | "AncientGuardian_Heavy_Boss_Named_DG_GreatCleave_01" | "Damned_LongSwordsman_Commander_Named_DG_Restless_00" | "KillStructure" | "KillFTUE_Sailor_T1_2" | "Isabella_Phase2_DG_ShatterMtn_00" | "Kill_TerrorTurkey" | "Naga";

export type VitalsDatumLootTableID = "CreatureLootMaster" | "" | "NullRoll" | "GoblinLoot" | "GoblinLoot60" | "OutpostRush_Large_Creatures" | "OutpostRush_Creatures" | "OutpostRush_Undead_Brute" | "PlayerMaster" | "Darkness_Damned_Acolyte" | "DarknessRiftBoss" | "Elk";

export type MinionVitalsID = "" | "AncientGuardian_Mage_Minion_44" | "AncientGuardian_Mage_Minion_36" | "AncientGuardian_Mage_Minion_37" | "AncientGuardian_Mage_Minion_38" | "AncientGuardian_Mage_Minion_39" | "AncientGuardian_Mage_Minion_40" | "AncientGuardian_Mage_Minion_41" | "AncientGuardian_Mage_Minion_42" | "AncientGuardian_Mage_Minion_43" | "AncientGuardian_Mage_Minion_45" | "AncientGuardian_Mage_Minion_49" | "AncientGuardian_Mage_Minion_58" | "AncientGuardian_Mage_Minion_59" | "AncientGuardian_Mage_Minion_60" | "AncientGuardian_Mage_Minion_61" | "AncientGuardian_Mage_Minion_62" | "AncientGuardian_Mage_Minion_67_ELITE" | "AncientGuardian_Mage_Minion_22" | "AncientGuardian_Mage_Minion_DG_Everfall_00" | "Bear_Cub_Elemental" | "Lesser_Dryad_65" | "Lesser_Dryad_64" | "Lesser_Dryad_35" | "Corrupted_Mine" | "Corrupted_Mine_60" | "Corrupted_Mine_49" | "Corrupted_Mine_65" | "Corrupted_Mine_61" | "Corrupted_Mine_63" | "Corrupted_Mine_25" | "Corrupted_Mine_35" | "Corrupted_Mine_45" | "Corrupted_Mine_55" | "Corrupted_Mine_50" | "Damned_Priest_Hound_65" | "Priest_Lesser_DamnedHound_RestlessShores" | "Damned_Priest_Hound_62" | "Damned_Priest_Hound_46" | "Naga_AngryEarth_Minion" | "OR_Wolf" | "Unstable_Swamp_Fiend_Minion" | "Swamp_Fiend_Arena" | "Torso_Boss_Minion" | "Risen_Brute_Minion" | "Wolf_Minion_15" | "Wolf_Minion_10" | "Wolf_Minion_11" | "Wolf_Minion_7" | "Wolf_Minion_16" | "Wolf_Minion_21" | "Wolf_Minion_26" | "Wolf_Minion_34" | "Wolf_Minion_40" | "Wolf_Minion_08QP05";

export type StaminaRegenThresholds = "" | "Drink;60:100;25:100;10:100;0:100";

export type WarAssistEventID = "War_Assist_Minor" | "" | "War_Assist_Special" | "War_Assist_Major";

export type WarKillEventID = "War_Kill_Minor" | "" | "War_Kill_Special" | "War_Kill_Major";

export type VitalsLevelData = {
    Level:                number;
    GearScore:            number;
    BaseDamage:           number;
    BaseMaxHealth:        number;
    InitialHealth:        number;
    PhysicalArmorRating:  number;
    ElementalArmorRating: number;
    LootGSBonus:          number;
    LootGSBonusChance:    number;
    "Solo Damage":        string;
    "Solo Health":        string;
}

export type VitalsModifierData = {
    CategoryId:            AttackerVitalsCategory;
    CategoryDamageMod:     number;
    CategoryHealthMod:     number;
    CategoryDropChanceMod: number;
}

export type WarboardStatDefinitions = {
    WarboardStatID:              string;
    InGameStat:                  boolean;
    EndGameStat:                 boolean;
    AG_TotalDamageDealt:         number;
    AG_HealingDone:              number;
    AG_Score:                    number;
    AG_AITakedowns?:             number;
    AG_PlayerTakedowns?:         number;
    AG_TotalResourcesDeposited?: number;
    AG_Kills?:                   number;
    AG_DamageTaken?:             number;
}

export type WeaponAccessoryDefinitions = {
    "#":               number;
    WeaponID:          string;
    PrefabPath:        PrefabPath;
    MeshOverride:      string;
    SkinOverride1:     string;
    MaterialOverride1: string;
    SkinOverride2:     WeaponAccessoryDefinitionSkinOverride2;
    MaterialOverride2: MaterialOverride2;
    SkinOverride3:     string;
    MaterialOverride3: string;
    SkinOverride4:     string;
    MaterialOverride4: string;
    EquipType:         WeaponAccessoryDefinitionEquipType;
    SheathMode:        MaterialOverride2;
}

export type WeaponAccessoryDefinitionEquipType = "Quiver" | "Gauntlet";

export type MaterialOverride2 = "" | "ALWAYS_VISIBLE";

export type PrefabPath = "Items/Weapons/weapon_accessory";

export type WeaponAccessoryDefinitionSkinOverride2 = "" | "Quiver";

export type WeaponAppearanceDefinitions = {
    WeaponAppearanceID:          string;
    Name:                        WeaponAppearanceDefinitionName;
    Description:                 string;
    ItemClass:                   WeaponAppearanceDefinitionItemClass;
    "Art ID Names":              string;
    "Weapon Material name Info": string;
    MeshOverride:                string;
    SkinOverride1:               SkinOverride1;
    MaterialOverride1:           string;
    SkinOverride2:               WeaponAppearanceDefinitionSkinOverride2;
    MaterialOverride2:           string;
    SkinOverride3:               string;
    MaterialOverride3:           string;
    SkinOverride4:               string;
    MaterialOverride4:           string;
    MaskRColor:                  WeaponAppearanceDefinitionMaskRColor;
    MaskROverride:               number | null;
    MaskR:                       number | null;
    MaskGColor:                  WeaponAppearanceDefinitionMaskGColor;
    MaskGOverride:               number | null;
    MaskG:                       number | null;
    MaskBColor:                  WeaponAppearanceDefinitionMaskBColor;
    MaskBOverride:               number | null;
    MaskB:                       number | null;
    MaskASpecColor:              MaskASpecColor;
    MaskASpec:                   number | null;
    MaskAGlossShift:             number | null;
    MaskAGloss:                  number | null;
    EmissiveColor:               EmissiveColor;
    EmissiveIntensity:           number | null;
    SoundTableID?:               ItemSoundIDEnum;
    IconCaptureGroup:            WeaponAppearanceDefinitionIconCaptureGroup;
    IconPath:                    string;
    HiResIconPath:               string;
    Appearance?:                 string;
    FemaleAppearance?:           string;
    RDyeSlotDisabled?:           string;
    GDyeSlotDisabled?:           string;
    BDyeSlotDisabled?:           string;
    ADyeSlotDisabled?:           string;
}

export type EmissiveColor = "" | "#63C5DA" | "#2C9D41" | "#9E8818" | "#00A095" | "#FF7200" | "#80D3FF" | "#A465CE" | "#007D00" | "#7AA8FD" | "#BC0C0E" | "#0080FE" | "#B7E124" | "#B8B8B8" | "#FF5500" | "#FFFFFF" | "#E3C76E" | "#E2D6A1" | "#E0A40C" | "#FF18FC" | "#E0AD2B" | "#02B7E8";

export type WeaponAppearanceDefinitionIconCaptureGroup = "Mandolin" | "Guitar" | "Bass" | "Flute" | "" | "Drum" | "RoundShield" | "KiteShield" | "TowerShield" | "Longsword" | "StaffFire" | "GreatAxe" | "WarHammer" | "Rapier" | "Spear" | "ThrowingAxe" | "1hLoggingAxe" | "GreatSword" | "StaffLife" | "Bow" | "Musket" | "Blunderbuss" | "Gauntlet" | "AzothStaff" | "FishingPole" | "2hLoggingAxe" | "1hPickAxe" | "2hPickAxe" | "Sickle" | "SkinningKnife" | "a" | "Pistol";

export type WeaponAppearanceDefinitionItemClass = "" | "EquippableTool+InstrumentMandolin" | "EquippableTool+InstrumentGuitar" | "EquippableTool+InstrumentUprightBass" | "EquippableTool+InstrumentFlute" | "EquippableTool+InstrumentDrums" | "Weapon+EquippableOffHand+Shield+RoundShield" | "Weapon+EquippableOffHand+Shield+RoundShield+Named" | "EquippableOffHand+Shield" | "Weapon+EquippableOffHand+Shield+KiteShield" | "Weapon+EquippableOffHand+Shield+KiteShield+Named" | "EquippableOffHand+Shield+Kite" | "Weapon+EquippableOffHand+Shield+TowerShield" | "Weapon+EquippableMainHand+Sword+Melee" | "Weapon+EquippableMainHand+Sword+Melee+Named" | "EquippableMainHand+Sword+Melee" | "EquippableMainHand+FireStaff+Magic" | "EquippableTwoHand+2HAxe+Melee" | "EquippableTwoHand+2HHammer+Melee" | "Weapon+EquippableMainHand+Rapier+Melee" | "Weapon+EquippableMainHand+Rapier+Melee+Named" | "Weapon+EquippableTwoHand+Spear+Melee" | "Weapon+EquippableTwoHand+Spear+Melee+Named" | "EquippableTwoHand+Spear+Melee" | "EquippableMainHand+Hatchet+Melee" | "Weapon+EquippableTool+Axe+LoggingAxe" | "Weapon+EquippableMainHand+Hatchet+Melee" | "Weapon+EquippableMainHand+Hatchet+Melee+Named" | "Weapon+EquippableTwoHand+2HAxe+Melee" | "Weapon+EquippableTwoHand+2HAxe+Melee+Named" | "Weapon+EquippableTwoHand+2HHammer+Melee" | "Weapon+EquippableTwoHand+2HHammer+Melee+Named" | "Weapon+EquippableTwoHand+GreatSword+Melee" | "Weapon+EquippableTwoHand+GreatSword+Melee+Named" | "Weapon+EquippableMainHand+FireStaff+Magic+Named" | "Weapon+EquippableMainHand+FireStaff+Magic" | "Weapon+EquippableMainHand+LifeStaff+Magic+Named" | "Weapon+EquippableMainHand+LifeStaff+Magic" | "Weapon+EquippableTwoHand+Bow+Ranged" | "Weapon+EquippableTwoHand+Bow+Ranged+Named" | "EquippableTwoHand+Bow+Ranged" | "Weapon+EquippableTwoHand+Musket+Ranged" | "Weapon+EquippableTwoHand+Musket+Ranged+Named" | "Weapon+EquippableTwoHand+Blunderbuss+Ranged" | "Weapon+EquippableTwoHand+Blunderbuss+Ranged+Named" | "Weapon+EquippableMainHand+IceMagic+Magic" | "Weapon+EquippableMainHand+VoidGauntlet+Magic" | "Weapon+EquippableMainHand+IceMagic+Magic+Named" | "Weapon+EquippableMainHand+VoidGauntlet+Magic+Named" | "Weapon+EquippableTool+Axe+AzothStaff" | "EquippableTool+FishingPole" | "EquippableTool+Axe+LoggingAxe" | "EquippableTool+Axe+PickAxe" | "EquippableTool+Axe+Sickle" | "EquippableTool+Axe+SkinningKnife" | "Weapon+EquippableTwoHand" | "Weapon+EquippableMainHand+Sword" | "EquippableTwoHand+Musket+Ranged" | "EquippableMainHand+Rapier+Melee" | "EquippableMainHand+LifeStaff+Magic" | "EquippableMainHand+IceMagic+Magic" | "EquippableMainHand+VoidGauntlet+Magic" | "EquippableTwoHand+Blunderbuss+Ranged" | "EquippableMainHand+Musket+Ranged" | "Weapon+EquippableOffHand+Shield+TowerShield+Named" | "EquippableTwoHand+FireStaff+Magic" | "EquippableTwoHand+LifeStaff+Magic" | "EquippableTool+Axe+Pickaxe";

export type MaskASpecColor = "#B8B8B8" | "#86BDFF" | "#411208" | "#A0A0A0" | "#AA865A" | "#3D3D3D" | "#6C5A2F" | "#000000" | "#A4669A" | "#666677" | "#856C39" | "#790002" | "#58566C" | "#37044C" | "#6D5C31" | "#5C4A65" | "#683F27" | "#55412A" | "#343536" | "#141414" | "#0E0E14" | "#A09FBB" | "#807A60" | "#5C5C69" | "#754827" | "#8E4600" | "#443D53" | "#906C09" | "#625D92" | "#625D93" | "#625D94" | "#625D95" | "#625D96" | "#635E5A" | "#930408" | "#1ADAD8" | "#605856" | "#54B72F" | "#C2D4C3" | "#B3EFFB" | "#8B8B8B" | "#9D9DA0" | "#B60486" | "#595959" | "#585858" | "#B6A980" | "#625D104" | "#625D105" | "#782FA4" | "#FFEEA2" | "#63561F" | "#C054BE" | "#575757" | "#8F824D" | "#E9CC86" | "#422C3F" | "#676570" | "#46371B" | "#717171" | "#525F70" | "#383842" | "#30321A" | "#250904" | "#3D310A" | "#69697B" | "#695B00" | "#9B3B1D" | "#2B1D33" | "#856C44" | "#856C46" | "#856C50" | "#856C45" | "#856C40" | "#856C49" | "#856C43" | "#856C41" | "#856C42" | "#856C47" | "#856C48" | "#644B05" | "#3D3518" | "#46381C" | "#6A6A6A" | "#3D4F89" | "#656565" | "#DAA375" | "#3C363A" | "#939800" | "" | "#69190E" | "#7752A2" | "#286301" | "#354A69";

export type WeaponAppearanceDefinitionMaskBColor = "#B8B8B8" | "#849B6C" | "#5F0006" | "#A4A3A3" | "#895B30" | "#B67F58" | "#4893BA" | "#9D0000" | "#0AEDDA" | "#D4D4EE" | "#54FFFF" | "#B3B3B3" | "#CC815B" | "#432C99" | "#656565" | "#D3BFDA" | "#AEAEAE" | "#948E7B" | "#6D685A" | "#0C0C0C" | "#8F4E11" | "#585EA0" | "#575757" | "#4F5270" | "#F6F5E9" | "#334154" | "#1A1600" | "#A14CD2" | "#A14CD3" | "#A14CD4" | "#A14CD5" | "#A14CD6" | "#7C8B75" | "#740000" | "#7D613C" | "#4B4039" | "#5E562F" | "#67534A" | "#6C40C3" | "#C4C4C4" | "#C8CAC0" | "#000000" | "#08CFBF" | "#53235D" | "#948968" | "#7443A0" | "#6495F9" | "#371B6F" | "#796546" | "#C38D75" | "#00E6FF" | "#8B8D8C" | "#868686" | "#97B2CA" | "#EACD89" | "#BA9780" | "#4D4167" | "#4C462C" | "#9B1A9B" | "#0C9A5A" | "#8F95A3" | "#A3A09A" | "#8D9F61" | "#661010" | "#732EB8" | "#2A0606" | "#A7A28B" | "#BC5F0D" | "#5E73AA" | "#985555" | "#1A7EB4" | "#C9D1E5" | "#191500" | "#860000" | "#700000" | "#3D4E88" | "#3D4F89" | "#6E6E6E" | "#AFB645" | "#FFC800" | "#4F5263" | "#BAA66B" | "#3C363A" | "#eaea84" | "";

export type WeaponAppearanceDefinitionMaskGColor = "#B8B8B8" | "#A3A7AC" | "#B49A9A" | "#999999" | "#AFB645" | "#00ACDB" | "#AE0000" | "#C327CE" | "#9377B9" | "#80EEB7" | "#A35E00" | "#2FCCE4" | "#8982A0" | "#B0924C" | "#688BAC" | "#FFCE3B" | "#877C63" | "#7F766D" | "#030303" | "#939CA4" | "#000000" | "#1788A4" | "#1788A5" | "#1788A6" | "#1788A7" | "#1788A8" | "#A19E87" | "#D30003" | "#44372E" | "#890A1B" | "#858D5E" | "#87A197" | "#86919C" | "#FFFFFF" | "#873333" | "#64876E" | "#55007F" | "#95B61D" | "#697D7F" | "#332730" | "#78E0CB" | "#3A085A" | "#5E3466" | "#7D9388" | "#00FF55" | "#8C828B" | "#90A18E" | "#850000" | "#BFB4A2" | "#DAAFDD" | "#826858" | "#4D4167" | "#700a0a" | "#3D4F89" | "#A494A4" | "#0A6813" | "#A0A7B6" | "#D4D2BE" | "#72774F" | "#590B0B" | "#7A7AB6" | "#871212" | "#A99D5E" | "#605A55" | "#394667" | "#A6ADBD" | "#80EEB12" | "#80EEB14" | "#80EEB18" | "#80EEB13" | "#80EEB8" | "#80EEB17" | "#80EEB11" | "#80EEB9" | "#80EEB10" | "#80EEB15" | "#80EEB16" | "#680A0A" | "#611A02" | "#2E363D" | "#3D4E88" | "#9D0000" | "#FFC800" | "#687C83" | "#C16675" | "#eaea84" | "";

export type WeaponAppearanceDefinitionMaskRColor = "#B8B8B8" | "#4B5F8E" | "#2A1A18" | "#252525" | "#532311" | "#007400" | "#996C29" | "#860000" | "#26ACCA" | "#1278A3" | "#1BC7C2" | "#540000" | "#A38C76" | "#26037F" | "#00710D" | "#77568E" | "#CA5A19" | "#826B59" | "#90A8B8" | "#000000" | "#998D48" | "#9797B0" | "#878787" | "#808096" | "#A08C33" | "#030303" | "#5A2B15" | "#8E5E11" | "#234659" | "#71538B" | "#046618" | "#FF0004" | "#7D613C" | "#685D56" | "#6F5A43" | "#9B7D72" | "#82737B" | "#D76A6A" | "#27AABF" | "#514D55" | "#3D393A" | "#EED49D" | "#8B7A6A" | "#791618" | "#6C6F46" | "#916E91" | "#736862" | "#C7F1F4" | "#F6D7B6" | "#583B87" | "#68540E" | "#943194" | "#3E7254" | "#7B8CBB" | "#9B9A8E" | "#007A00" | "#935A54" | "#7A7AB6" | "#920202" | "#7A6316" | "#8F2400" | "#343536" | "#7484B0" | "#83571A" | "#645500" | "#647298" | "#1BC7C7" | "#1BC7C9" | "#1BC7C13" | "#1BC7C8" | "#1BC7C3" | "#1BC7C12" | "#1BC7C6" | "#1BC7C4" | "#1BC7C5" | "#1BC7C10" | "#1BC7C11" | "#7D7D7D" | "#88793A" | "#69550F" | "#3D4E88" | "#68540D" | "#3D4F89" | "#FFC800" | "#BAA66B" | "#424637" | "#baba00" | "#eaea84" | "" | "#B7B9A4" | "#3B3B3B" | "#E0C260" | "#A6DCE8";

export type WeaponAppearanceDefinitionName = "" | "@2hGreatAxeMedievalT5_TransmogName" | "@1hSwordMedievalT5_TransmogName" | "@2hSpearMedievalT5_TransmogName" | "@2hFireStaffMedievalT5_TransmogName" | "@2hBlunderbussMedievalT5_TransmogName" | "@2hGreatswordMedievalT5_TransmogName";

export type SkinOverride1 = "" | "Objects/Weapons/Ranged/Bows/BowA/wep_ran2h_BowA_T1.skin" | "Objects/Weapons/Ranged/Bows/BowA/wep_ran2h_BowA_T2.skin" | "Objects/Weapons/Ranged/Bows/BowA/wep_ran2h_BowA_T3.skin";

export type WeaponAppearanceDefinitionSkinOverride2 = "" | "Objects/Weapons/Ranged/Bows/BowA/wep_ran2h_BowA_T1_string.skin";

export type WeaponEffectData = {
    WeaponEffectId: string;
    Default:        string;
    Fire:           string;
    Arcane:         string;
    Void:           string;
    Lightning:      string;
    Ice:            string;
    Nature:         string;
}

export type WeaponItemDefinitions = {
    WeaponID:                     string;
    BaseWeaponID:                 string;
    "DEV Prio":                   number | null;
    PrimaryUse:                   PrimaryUse;
    IconPath:                     IconPath;
    MaxStackSize:                 number | null;
    EquipType:                    WeaponItemDefinitionEquipType;
    DamageStatMultiplier:         DamageStatMultiplier;
    WeaponMasteryCategoryId:      KillEnemyWeaponIDEnum;
    TierNumber:                   number | null;
    BaseDamage:                   number | null;
    CritChance:                   number | null;
    CritDamageMultiplier:         number | null;
    BaseStaggerDamage:            number | null;
    CritStaggerDamageMultiplier:  number | null;
    ReticleName:                  ReticleName;
    ReticleTargetName:            ReticleTargetName;
    ReticleRayCastDistance:       number | null;
    AmmoType:                     AmmoType;
    MaxLoadedAmmo:                number | null | string;
    AutoReloadAmmoSeconds:        number | null | string;
    AmmoMesh:                     string;
    MannequinTag:                 string;
    OffHandMannequinTag:          OffHandMannequinTag;
    MeshOverride:                 string;
    SkinOverride1:                string;
    MaterialOverride1:            string;
    SkinOverride2:                WeaponAppearanceDefinitionSkinOverride2;
    MaterialOverride2:            string;
    SkinOverride3:                string;
    MaterialOverride3:            string;
    SkinOverride4:                string;
    MaterialOverride4:            string;
    FireJoint:                    FireJoint;
    DamageTableRow:               DamageTableRow;
    TooltipPrimaryAttackData:     string;
    TooltipAlternateAttackData:   string;
    AnimDbPath:                   string;
    GatheringTypes:               GatheringTypes;
    GatheringMultiplier:          number | null;
    GatheringEfficiency:          number | null;
    MinGatherEFF:                 number | null | string;
    MaxGatherEFF:                 number | null | string;
    AudioPickup:                  WeaponItemDefinitionAudioPickup;
    AudioPlace:                   WeaponItemDefinitionAudioPlace;
    "Primary Hand":               PrimaryHand;
    EquipmentCategories:          string;
    RequiredStrength:             number | null;
    RequiredDexterity:            number | null;
    RequiredIntelligence:         number | null;
    RequiredFocus:                number | null;
    ScalingStrength:              number | null;
    ScalingDexterity:             number | null;
    ScalingIntelligence:          number | null;
    ScalingFocus:                 number | null;
    Resistances:                  string;
    Weaknesses:                   Weaknesses;
    StatBonuses:                  string;
    StatMultipliers:              string;
    EquipmentCategoryMultiplier:  string;
    AttackGameEventID:            AttackGameEventID;
    PhysicalArmorSetScaleFactor:  number | null | string;
    ElementalArmorSetScaleFactor: number | null | string;
    ArmorRatingScaleFactor:       number | null | string;
    WeightOverride:               number | null | string;
    BlockStaminaDamage:           number | null;
    BlockStability:               number | null;
    DeflectionRating:             number | null;
    BLAStandard:                  number | string;
    BLASiege:                     number | null;
    BLAStrike:                    number | null;
    BLASlash:                     number | null;
    BLAThrust:                    number | null;
    BLAArcane:                    number | null;
    BLAFire:                      number | null;
    BLAIce:                       number | null;
    BLANature:                    number | null;
    BLALightning:                 number | null;
    BLACorruption:                number | null;
    ABAPoison:                    number | null;
    ABADisease:                   number | null;
    ABABleed:                     number | null;
    ABAFrostbite:                 number | null;
    ABACurse:                     number | null;
    RangedAttackProfile:          string;
    AttachedSpellData:            AttachedSpellData;
    Appearance:                   Appearance;
    FemaleAppearance:             FemaleAppearance;
    CanBlockRanged:               boolean | null | string;
    ManaCostId:                   ManaCostID;
    WeaponEffectId:               string;
    BaseAccuracy:                 number | null;
    EquipAbility?:                string;
    SoundTableID:                 ItemSoundIDEnum;
}

export type Appearance = "" | "Elemental_Gauntlet_T2_Ice" | "Elemental_Gauntlet_T3_Ice" | "Elemental_Gauntlet_T4_Ice" | "Elemental_Gauntlet_T5_Ice";

export type AttachedSpellData = "" | "Elemental_Fire_AoE" | "Celestial_Heal_AoE";

export type AttackGameEventID = "DamageEnemyUnarmed" | "WeaponHit1" | "WeaponHit2" | "WeaponHit3" | "WeaponHit4" | "WeaponHit5" | "";

export type WeaponItemDefinitionAudioPickup = "Play_Beep1_2D" | "";

export type WeaponItemDefinitionAudioPlace = "Play_Beep3_2D" | "";

export type DamageStatMultiplier = "" | "OneHandAxeDamage" | "KnifeDamage" | "OneHandPickDamage" | "TwoHandAxeDamage" | "TwoHandPickDamage" | "OneHandSwordDamage" | "TwoHandSwordDamage" | "TwoHandClubDamage" | "OneHandClubDamage" | "TwoHandSpearDamage" | "BowDamage" | "RifleDamage" | "PistolDamage";

export type DamageTableRow = "" | "BowAttack1";

export type WeaponItemDefinitionEquipType = "RSword_LeftHolster" | "Hammer_Axe" | "GeneralInstrument" | "Greatsword" | "Spear" | "Bow" | "Rifle" | "RPistol_LeftHolster" | "Shield" | "EquippableMouth" | "AlwaysUnsheathed_RHand" | "Tendril" | "Drum" | "AlwaysUnsheathed_LHand" | "GrappleSheath" | "Brute" | "BowmanSword" | "";

export type FemaleAppearance = "" | "F_Elemental_Gauntlet_T2_Ice" | "F_Elemental_Gauntlet_T3_Ice" | "F_Elemental_Gauntlet_T4_Ice" | "F_Elemental_Gauntlet_T5_Ice";

export type FireJoint = "" | "handattach" | "bind_spline_g" | "arrowAttach_tip_jnt" | "musketA_muzzle" | "FXattach_A" | "siphon_attachment_point" | "aim_direction" | "neck" | "arrowAttach_tip_jnt_jnt" | "bow_root_jnt" | "arrowAttach_tip" | "Spear";

export type GatheringTypes = "None" | "Chopping" | "Dressing" | "Cutting" | "Mining" | "Fishing" | "AzothFlutePlaying+MusicalPerformances" | "DrumPlaying+MusicalPerformances" | "GuitarPlaying+MusicalPerformances" | "UprightBassPlaying+MusicalPerformances" | "MandolinPlaying+MusicalPerformances" | "AzothStaff" | "";

export type IconPath = "" | "LoggingAxe" | "Skinning" | "Sickle" | "PickAxe" | "weapon_ironrapier" | "placeholder";

export type ManaCostID = "" | "SpecialAttack";

export type OffHandMannequinTag = "" | "Melee_OH" | "Ranged_OH" | "Shield_OH" | "Shield_OH, TowerShield" | "Hatchet_OH" | "Sickle_OH" | "Torch_OH" | "Pistol_OH" | "1H_Melee, Sickle_OH";

export type PrimaryHand = "Main" | "";

export type PrimaryUse = "Combat Melee" | "Tool" | "Combat Ranged" | "";

export type ReticleName = "melee" | "spear" | "bow" | "rifle" | "blunderbuss" | "pistol" | "";

export type ReticleTargetName = "meleeHaveTarget" | "bowHaveTarget" | "spearHaveTarget" | "rifleHaveTarget" | "blunderbussHaveTarget" | "pistolHaveTarget" | "";

export type Weaknesses = "" | "Magic=8" | "Fire=8";

export type WhisperData = {
    WhisperId:             string;
    TriggerType:           TriggerType;
    RequiredAchievementId: RequiredAchievementID;
    TimelineId:            string;
    Duration:              number;
    GameEvent:             string;
    VoiceOver:             string;
    Subtitle:              Subtitle;
    AchievementId:         string;
    UseVFX:                boolean;
    VfxId:                 VfxID;
}

export type RequiredAchievementID = "" | "06A_WW_whisper_01_unlock" | "06A_WW_whisper_02_unlock" | "06A_WW_whisper_03_unlock";

export type Subtitle = "" | "@Miners_Shazaan_line1" | "@Miners_Tomira_line1" | "@Miners_Chandu_line1";

export type TriggerType = "GAME_EVENT";

export type VfxID = "whisper_vfx_test" | "whisper_vfx_01" | "";

export type WhisperVfxData = {
    WhisperVfxId:          VfxID;
    VfxLibrary:            string;
    IntroFlash:            string;
    IntroFx:               string;
    MainFx:                string;
    Main_VoiceFx:          string;
    Main_VoiceFx_Pulse:    string;
    Main_VoiceFx_Tendrils: string;
    RefractPlayer:         string;
    RefractWisp:           string;
    ExitFx:                string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toAbilityData(json: string): AbilityData[] {
        return cast(JSON.parse(json), a(r("AbilityData")));
    }

    public static abilityDataToJson(value: AbilityData[]): string {
        return JSON.stringify(uncast(value, a(r("AbilityData"))), null, 2);
    }

    public static toAchievementData(json: string): AchievementData[] {
        return cast(JSON.parse(json), a(r("AchievementData")));
    }

    public static achievementDataToJson(value: AchievementData[]): string {
        return JSON.stringify(uncast(value, a(r("AchievementData"))), null, 2);
    }

    public static toAffixData(json: string): AffixData[] {
        return cast(JSON.parse(json), a(r("AffixData")));
    }

    public static affixDataToJson(value: AffixData[]): string {
        return JSON.stringify(uncast(value, a(r("AffixData"))), null, 2);
    }

    public static toAffixStatData(json: string): AffixStatData[] {
        return cast(JSON.parse(json), a(r("AffixStatData")));
    }

    public static affixStatDataToJson(value: AffixStatData[]): string {
        return JSON.stringify(uncast(value, a(r("AffixStatData"))), null, 2);
    }

    public static toAfflictionData(json: string): AfflictionData[] {
        return cast(JSON.parse(json), a(r("AfflictionData")));
    }

    public static afflictionDataToJson(value: AfflictionData[]): string {
        return JSON.stringify(uncast(value, a(r("AfflictionData"))), null, 2);
    }

    public static toAmmoItemDefinitions(json: string): AmmoItemDefinitions[] {
        return cast(JSON.parse(json), a(r("AmmoItemDefinitions")));
    }

    public static ammoItemDefinitionsToJson(value: AmmoItemDefinitions[]): string {
        return JSON.stringify(uncast(value, a(r("AmmoItemDefinitions"))), null, 2);
    }

    public static toAncientGuardianGreatswordIceVariantStaminaCosts(json: string): StaminaCostsPlayer[] {
        return cast(JSON.parse(json), a(r("StaminaCostsPlayer")));
    }

    public static ancientGuardianGreatswordIceVariantStaminaCostsToJson(value: StaminaCostsPlayer[]): string {
        return JSON.stringify(uncast(value, a(r("StaminaCostsPlayer"))), null, 2);
    }

    public static toArmorAppearanceDefinitions(json: string): ArmorAppearanceDefinitions[] {
        return cast(JSON.parse(json), a(r("ArmorAppearanceDefinitions")));
    }

    public static armorAppearanceDefinitionsToJson(value: ArmorAppearanceDefinitions[]): string {
        return JSON.stringify(uncast(value, a(r("ArmorAppearanceDefinitions"))), null, 2);
    }

    public static toArmorItemDefinitions(json: string): ArmorItemDefinitions[] {
        return cast(JSON.parse(json), a(r("ArmorItemDefinitions")));
    }

    public static armorItemDefinitionsToJson(value: ArmorItemDefinitions[]): string {
        return JSON.stringify(uncast(value, a(r("ArmorItemDefinitions"))), null, 2);
    }

    public static toAttackTypes(json: string): AttackTypes[] {
        return cast(JSON.parse(json), a(r("AttackTypes")));
    }

    public static attackTypesToJson(value: AttackTypes[]): string {
        return JSON.stringify(uncast(value, a(r("AttackTypes"))), null, 2);
    }

    public static toAttributeDefinition(json: string): AttributeDefinition[] {
        return cast(JSON.parse(json), a(r("AttributeDefinition")));
    }

    public static attributeDefinitionToJson(value: AttributeDefinition[]): string {
        return JSON.stringify(uncast(value, a(r("AttributeDefinition"))), null, 2);
    }

    public static toBackstoryDefinition(json: string): BackstoryDefinition[] {
        return cast(JSON.parse(json), a(r("BackstoryDefinition")));
    }

    public static backstoryDefinitionToJson(value: BackstoryDefinition[]): string {
        return JSON.stringify(uncast(value, a(r("BackstoryDefinition"))), null, 2);
    }

    public static toBeamData(json: string): BeamData[] {
        return cast(JSON.parse(json), a(r("BeamData")));
    }

    public static beamDataToJson(value: BeamData[]): string {
        return JSON.stringify(uncast(value, a(r("BeamData"))), null, 2);
    }

    public static toBlueprintItemDefinitions(json: string): BlueprintItemDefinitions[] {
        return cast(JSON.parse(json), a(r("BlueprintItemDefinitions")));
    }

    public static blueprintItemDefinitionsToJson(value: BlueprintItemDefinitions[]): string {
        return JSON.stringify(uncast(value, a(r("BlueprintItemDefinitions"))), null, 2);
    }

    public static toBuffBucketData(json: string): BuffBucketData[] {
        return cast(JSON.parse(json), a(r("BuffBucketData")));
    }

    public static buffBucketDataToJson(value: BuffBucketData[]): string {
        return JSON.stringify(uncast(value, a(r("BuffBucketData"))), null, 2);
    }

    public static toCameraShakeData(json: string): CameraShakeData[] {
        return cast(JSON.parse(json), a(r("CameraShakeData")));
    }

    public static cameraShakeDataToJson(value: CameraShakeData[]): string {
        return JSON.stringify(uncast(value, a(r("CameraShakeData"))), null, 2);
    }

    public static toCampSkinData(json: string): CampSkinData[] {
        return cast(JSON.parse(json), a(r("CampSkinData")));
    }

    public static campSkinDataToJson(value: CampSkinData[]): string {
        return JSON.stringify(uncast(value, a(r("CampSkinData"))), null, 2);
    }

    public static toCategoricalProgressionData(json: string): CategoricalProgressionData[] {
        return cast(JSON.parse(json), a(r("CategoricalProgressionData")));
    }

    public static categoricalProgressionDataToJson(value: CategoricalProgressionData[]): string {
        return JSON.stringify(uncast(value, a(r("CategoricalProgressionData"))), null, 2);
    }

    public static toCategoricalProgressionRankData(json: string): CategoricalProgressionRankData[] {
        return cast(JSON.parse(json), a(r("CategoricalProgressionRankData")));
    }

    public static categoricalProgressionRankDataToJson(value: CategoricalProgressionRankData[]): string {
        return JSON.stringify(uncast(value, a(r("CategoricalProgressionRankData"))), null, 2);
    }

    public static toCinematicVideoStaticData(json: string): CinematicVideoStaticData[] {
        return cast(JSON.parse(json), a(r("CinematicVideoStaticData")));
    }

    public static cinematicVideoStaticDataToJson(value: CinematicVideoStaticData[]): string {
        return JSON.stringify(uncast(value, a(r("CinematicVideoStaticData"))), null, 2);
    }

    public static toCollectibleStaticData(json: string): CollectibleStaticData[] {
        return cast(JSON.parse(json), a(r("CollectibleStaticData")));
    }

    public static collectibleStaticDataToJson(value: CollectibleStaticData[]): string {
        return JSON.stringify(uncast(value, a(r("CollectibleStaticData"))), null, 2);
    }

    public static toCombatTextSettings(json: string): CombatTextSettings[] {
        return cast(JSON.parse(json), a(r("CombatTextSettings")));
    }

    public static combatTextSettingsToJson(value: CombatTextSettings[]): string {
        return JSON.stringify(uncast(value, a(r("CombatTextSettings"))), null, 2);
    }

    public static toConsumableItemDefinitions(json: string): ConsumableItemDefinitions[] {
        return cast(JSON.parse(json), a(r("ConsumableItemDefinitions")));
    }

    public static consumableItemDefinitionsToJson(value: ConsumableItemDefinitions[]): string {
        return JSON.stringify(uncast(value, a(r("ConsumableItemDefinitions"))), null, 2);
    }

    public static toContributionData(json: string): ContributionData[] {
        return cast(JSON.parse(json), a(r("ContributionData")));
    }

    public static contributionDataToJson(value: ContributionData[]): string {
        return JSON.stringify(uncast(value, a(r("ContributionData"))), null, 2);
    }

    public static toConversationStateData(json: string): ConversationStateData[] {
        return cast(JSON.parse(json), a(r("ConversationStateData")));
    }

    public static conversationStateDataToJson(value: ConversationStateData[]): string {
        return JSON.stringify(uncast(value, a(r("ConversationStateData"))), null, 2);
    }

    public static toConversationTopicData(json: string): ConversationTopicData[] {
        return cast(JSON.parse(json), a(r("ConversationTopicData")));
    }

    public static conversationTopicDataToJson(value: ConversationTopicData[]): string {
        return JSON.stringify(uncast(value, a(r("ConversationTopicData"))), null, 2);
    }

    public static toCooldownsPlayer(json: string): CooldownsPlayer[] {
        return cast(JSON.parse(json), a(r("CooldownsPlayer")));
    }

    public static cooldownsPlayerToJson(value: CooldownsPlayer[]): string {
        return JSON.stringify(uncast(value, a(r("CooldownsPlayer"))), null, 2);
    }

    public static toCraftingCategoryData(json: string): CraftingCategoryData[] {
        return cast(JSON.parse(json), a(r("CraftingCategoryData")));
    }

    public static craftingCategoryDataToJson(value: CraftingCategoryData[]): string {
        return JSON.stringify(uncast(value, a(r("CraftingCategoryData"))), null, 2);
    }

    public static toCraftingRecipeData(json: string): CraftingRecipeData[] {
        return cast(JSON.parse(json), a(r("CraftingRecipeData")));
    }

    public static craftingRecipeDataToJson(value: CraftingRecipeData[]): string {
        return JSON.stringify(uncast(value, a(r("CraftingRecipeData"))), null, 2);
    }

    public static toCrestPartData(json: string): CrestPartData[] {
        return cast(JSON.parse(json), a(r("CrestPartData")));
    }

    public static crestPartDataToJson(value: CrestPartData[]): string {
        return JSON.stringify(uncast(value, a(r("CrestPartData"))), null, 2);
    }

    public static toCurrencyExchangeData(json: string): CurrencyExchangeData[] {
        return cast(JSON.parse(json), a(r("CurrencyExchangeData")));
    }

    public static currencyExchangeDataToJson(value: CurrencyExchangeData[]): string {
        return JSON.stringify(uncast(value, a(r("CurrencyExchangeData"))), null, 2);
    }

    public static toCurseMutationStaticData(json: string): CurseMutationStaticData[] {
        return cast(JSON.parse(json), a(r("CurseMutationStaticData")));
    }

    public static curseMutationStaticDataToJson(value: CurseMutationStaticData[]): string {
        return JSON.stringify(uncast(value, a(r("CurseMutationStaticData"))), null, 2);
    }

    public static toCutsceneCameraStaticData(json: string): CutsceneCameraStaticData[] {
        return cast(JSON.parse(json), a(r("CutsceneCameraStaticData")));
    }

    public static cutsceneCameraStaticDataToJson(value: CutsceneCameraStaticData[]): string {
        return JSON.stringify(uncast(value, a(r("CutsceneCameraStaticData"))), null, 2);
    }

    public static toDamageData(json: string): DamageData[] {
        return cast(JSON.parse(json), a(r("DamageData")));
    }

    public static damageDataToJson(value: DamageData[]): string {
        return JSON.stringify(uncast(value, a(r("DamageData"))), null, 2);
    }

    public static toDamageTypeData(json: string): DamageTypeData[] {
        return cast(JSON.parse(json), a(r("DamageTypeData")));
    }

    public static damageTypeDataToJson(value: DamageTypeData[]): string {
        return JSON.stringify(uncast(value, a(r("DamageTypeData"))), null, 2);
    }

    public static toDataPointData(json: string): DataPointData[] {
        return cast(JSON.parse(json), a(r("DataPointData")));
    }

    public static dataPointDataToJson(value: DataPointData[]): string {
        return JSON.stringify(uncast(value, a(r("DataPointData"))), null, 2);
    }

    public static toDivertedLootData(json: string): DivertedLootData[] {
        return cast(JSON.parse(json), a(r("DivertedLootData")));
    }

    public static divertedLootDataToJson(value: DivertedLootData[]): string {
        return JSON.stringify(uncast(value, a(r("DivertedLootData"))), null, 2);
    }

    public static toDyeColorData(json: string): DyeColorData[] {
        return cast(JSON.parse(json), a(r("DyeColorData")));
    }

    public static dyeColorDataToJson(value: DyeColorData[]): string {
        return JSON.stringify(uncast(value, a(r("DyeColorData"))), null, 2);
    }

    public static toDyeItemDefinitions(json: string): DyeItemDefinitions[] {
        return cast(JSON.parse(json), a(r("DyeItemDefinitions")));
    }

    public static dyeItemDefinitionsToJson(value: DyeItemDefinitions[]): string {
        return JSON.stringify(uncast(value, a(r("DyeItemDefinitions"))), null, 2);
    }

    public static toEconomyTrackerData(json: string): EconomyTrackerData[] {
        return cast(JSON.parse(json), a(r("EconomyTrackerData")));
    }

    public static economyTrackerDataToJson(value: EconomyTrackerData[]): string {
        return JSON.stringify(uncast(value, a(r("EconomyTrackerData"))), null, 2);
    }

    public static toElementalMutationStaticData(json: string): ElementalMutationStaticData[] {
        return cast(JSON.parse(json), a(r("ElementalMutationStaticData")));
    }

    public static elementalMutationStaticDataToJson(value: ElementalMutationStaticData[]): string {
        return JSON.stringify(uncast(value, a(r("ElementalMutationStaticData"))), null, 2);
    }

    public static toEmoteData(json: string): EmoteData[] {
        return cast(JSON.parse(json), a(r("EmoteData")));
    }

    public static emoteDataToJson(value: EmoteData[]): string {
        return JSON.stringify(uncast(value, a(r("EmoteData"))), null, 2);
    }

    public static toEncumbranceData(json: string): EncumbranceData[] {
        return cast(JSON.parse(json), a(r("EncumbranceData")));
    }

    public static encumbranceDataToJson(value: EncumbranceData[]): string {
        return JSON.stringify(uncast(value, a(r("EncumbranceData"))), null, 2);
    }

    public static toEntitlementData(json: string): EntitlementData[] {
        return cast(JSON.parse(json), a(r("EntitlementData")));
    }

    public static entitlementDataToJson(value: EntitlementData[]): string {
        return JSON.stringify(uncast(value, a(r("EntitlementData"))), null, 2);
    }

    public static toExperienceData(json: string): ExperienceData[] {
        return cast(JSON.parse(json), a(r("ExperienceData")));
    }

    public static experienceDataToJson(value: ExperienceData[]): string {
        return JSON.stringify(uncast(value, a(r("ExperienceData"))), null, 2);
    }

    public static toFactionControlBuffDefinitions(json: string): FactionControlBuffDefinitions[] {
        return cast(JSON.parse(json), a(r("FactionControlBuffDefinitions")));
    }

    public static factionControlBuffDefinitionsToJson(value: FactionControlBuffDefinitions[]): string {
        return JSON.stringify(uncast(value, a(r("FactionControlBuffDefinitions"))), null, 2);
    }

    public static toFactionData(json: string): FactionData[] {
        return cast(JSON.parse(json), a(r("FactionData")));
    }

    public static factionDataToJson(value: FactionData[]): string {
        return JSON.stringify(uncast(value, a(r("FactionData"))), null, 2);
    }

    public static toFactionStatusEffectData(json: string): any[] {
        return cast(JSON.parse(json), a("any"));
    }

    public static factionStatusEffectDataToJson(value: any[]): string {
        return JSON.stringify(uncast(value, a("any")), null, 2);
    }

    public static toFishData(json: string): FishData[] {
        return cast(JSON.parse(json), a(r("FishData")));
    }

    public static fishDataToJson(value: FishData[]): string {
        return JSON.stringify(uncast(value, a(r("FishData"))), null, 2);
    }

    public static toFishingBaitData(json: string): FishingBaitData[] {
        return cast(JSON.parse(json), a(r("FishingBaitData")));
    }

    public static fishingBaitDataToJson(value: FishingBaitData[]): string {
        return JSON.stringify(uncast(value, a(r("FishingBaitData"))), null, 2);
    }

    public static toFishingBehaviorsData(json: string): FishingBehaviorsData[] {
        return cast(JSON.parse(json), a(r("FishingBehaviorsData")));
    }

    public static fishingBehaviorsDataToJson(value: FishingBehaviorsData[]): string {
        return JSON.stringify(uncast(value, a(r("FishingBehaviorsData"))), null, 2);
    }

    public static toFishingCatchablesData(json: string): FishingCatchablesData[] {
        return cast(JSON.parse(json), a(r("FishingCatchablesData")));
    }

    public static fishingCatchablesDataToJson(value: FishingCatchablesData[]): string {
        return JSON.stringify(uncast(value, a(r("FishingCatchablesData"))), null, 2);
    }

    public static toFishingHotspotsData(json: string): FishingHotspotsData[] {
        return cast(JSON.parse(json), a(r("FishingHotspotsData")));
    }

    public static fishingHotspotsDataToJson(value: FishingHotspotsData[]): string {
        return JSON.stringify(uncast(value, a(r("FishingHotspotsData"))), null, 2);
    }

    public static toFishingPolesData(json: string): FishingPolesData[] {
        return cast(JSON.parse(json), a(r("FishingPolesData")));
    }

    public static fishingPolesDataToJson(value: FishingPolesData[]): string {
        return JSON.stringify(uncast(value, a(r("FishingPolesData"))), null, 2);
    }

    public static toFishingWaterData(json: string): FishingWaterData[] {
        return cast(JSON.parse(json), a(r("FishingWaterData")));
    }

    public static fishingWaterDataToJson(value: FishingWaterData[]): string {
        return JSON.stringify(uncast(value, a(r("FishingWaterData"))), null, 2);
    }

    public static toGameEventData(json: string): GameEventData[] {
        return cast(JSON.parse(json), a(r("GameEventData")));
    }

    public static gameEventDataToJson(value: GameEventData[]): string {
        return JSON.stringify(uncast(value, a(r("GameEventData"))), null, 2);
    }

    public static toGameModeData(json: string): GameModeData[] {
        return cast(JSON.parse(json), a(r("GameModeData")));
    }

    public static gameModeDataToJson(value: GameModeData[]): string {
        return JSON.stringify(uncast(value, a(r("GameModeData"))), null, 2);
    }

    public static toGatherableData(json: string): GatherableData[] {
        return cast(JSON.parse(json), a(r("GatherableData")));
    }

    public static gatherableDataToJson(value: GatherableData[]): string {
        return JSON.stringify(uncast(value, a(r("GatherableData"))), null, 2);
    }

    public static toGearScoreUpgradeDefinition(json: string): GearScoreUpgradeDefinition[] {
        return cast(JSON.parse(json), a(r("GearScoreUpgradeDefinition")));
    }

    public static gearScoreUpgradeDefinitionToJson(value: GearScoreUpgradeDefinition[]): string {
        return JSON.stringify(uncast(value, a(r("GearScoreUpgradeDefinition"))), null, 2);
    }

    public static toGeneratorRecipes(json: string): GeneratorRecipes[] {
        return cast(JSON.parse(json), a(r("GeneratorRecipes")));
    }

    public static generatorRecipesToJson(value: GeneratorRecipes[]): string {
        return JSON.stringify(uncast(value, a(r("GeneratorRecipes"))), null, 2);
    }

    public static toGenericInviteData(json: string): GenericInviteData[] {
        return cast(JSON.parse(json), a(r("GenericInviteData")));
    }

    public static genericInviteDataToJson(value: GenericInviteData[]): string {
        return JSON.stringify(uncast(value, a(r("GenericInviteData"))), null, 2);
    }

    public static toHighWaterMarkRankData(json: string): HighWaterMarkRankData[] {
        return cast(JSON.parse(json), a(r("HighWaterMarkRankData")));
    }

    public static highWaterMarkRankDataToJson(value: HighWaterMarkRankData[]): string {
        return JSON.stringify(uncast(value, a(r("HighWaterMarkRankData"))), null, 2);
    }

    public static toHouseTypeData(json: string): HouseTypeData[] {
        return cast(JSON.parse(json), a(r("HouseTypeData")));
    }

    public static houseTypeDataToJson(value: HouseTypeData[]): string {
        return JSON.stringify(uncast(value, a(r("HouseTypeData"))), null, 2);
    }

    public static toHunterSightData(json: string): HunterSightData[] {
        return cast(JSON.parse(json), a(r("HunterSightData")));
    }

    public static hunterSightDataToJson(value: HunterSightData[]): string {
        return JSON.stringify(uncast(value, a(r("HunterSightData"))), null, 2);
    }

    public static toImpactAudioTable(json: string): { [key: string]: string }[] {
        return cast(JSON.parse(json), a(m("")));
    }

    public static impactAudioTableToJson(value: { [key: string]: string }[]): string {
        return JSON.stringify(uncast(value, a(m(""))), null, 2);
    }

    public static toImpactSurfaceAlignmentTable(json: string): ImpactSurfaceAlignmentTable[] {
        return cast(JSON.parse(json), a(r("ImpactSurfaceAlignmentTable")));
    }

    public static impactSurfaceAlignmentTableToJson(value: ImpactSurfaceAlignmentTable[]): string {
        return JSON.stringify(uncast(value, a(r("ImpactSurfaceAlignmentTable"))), null, 2);
    }

    public static toImpactTable(json: string): { [key: string]: string }[] {
        return cast(JSON.parse(json), a(m("")));
    }

    public static impactTableToJson(value: { [key: string]: string }[]): string {
        return JSON.stringify(uncast(value, a(m(""))), null, 2);
    }

    public static toInteractionAnimationData(json: string): InteractionAnimationData[] {
        return cast(JSON.parse(json), a(r("InteractionAnimationData")));
    }

    public static interactionAnimationDataToJson(value: InteractionAnimationData[]): string {
        return JSON.stringify(uncast(value, a(r("InteractionAnimationData"))), null, 2);
    }

    public static toItemCurrencyConversionData(json: string): ItemCurrencyConversionData[] {
        return cast(JSON.parse(json), a(r("ItemCurrencyConversionData")));
    }

    public static itemCurrencyConversionDataToJson(value: ItemCurrencyConversionData[]): string {
        return JSON.stringify(uncast(value, a(r("ItemCurrencyConversionData"))), null, 2);
    }

    public static toItemPerkSwapData(json: string): ItemPerkSwapData[] {
        return cast(JSON.parse(json), a(r("ItemPerkSwapData")));
    }

    public static itemPerkSwapDataToJson(value: ItemPerkSwapData[]): string {
        return JSON.stringify(uncast(value, a(r("ItemPerkSwapData"))), null, 2);
    }

    public static toItemSkinData(json: string): ItemSkinData[] {
        return cast(JSON.parse(json), a(r("ItemSkinData")));
    }

    public static itemSkinDataToJson(value: ItemSkinData[]): string {
        return JSON.stringify(uncast(value, a(r("ItemSkinData"))), null, 2);
    }

    public static toItemSoundEvents(json: string): ItemSoundEvents[] {
        return cast(JSON.parse(json), a(r("ItemSoundEvents")));
    }

    public static itemSoundEventsToJson(value: ItemSoundEvents[]): string {
        return JSON.stringify(uncast(value, a(r("ItemSoundEvents"))), null, 2);
    }

    public static toItemTooltipLayout(json: string): ItemTooltipLayout[] {
        return cast(JSON.parse(json), a(r("ItemTooltipLayout")));
    }

    public static itemTooltipLayoutToJson(value: ItemTooltipLayout[]): string {
        return JSON.stringify(uncast(value, a(r("ItemTooltipLayout"))), null, 2);
    }

    public static toItemTransform(json: string): ItemTransform[] {
        return cast(JSON.parse(json), a(r("ItemTransform")));
    }

    public static itemTransformToJson(value: ItemTransform[]): string {
        return JSON.stringify(uncast(value, a(r("ItemTransform"))), null, 2);
    }

    public static toJointAlias(json: string): JointAlias[] {
        return cast(JSON.parse(json), a(r("JointAlias")));
    }

    public static jointAliasToJson(value: JointAlias[]): string {
        return JSON.stringify(uncast(value, a(r("JointAlias"))), null, 2);
    }

    public static toKitItemDefinitions(json: string): KitItemDefinitions[] {
        return cast(JSON.parse(json), a(r("KitItemDefinitions")));
    }

    public static kitItemDefinitionsToJson(value: KitItemDefinitions[]): string {
        return JSON.stringify(uncast(value, a(r("KitItemDefinitions"))), null, 2);
    }

    public static toLeaderboardData(json: string): LeaderboardData[] {
        return cast(JSON.parse(json), a(r("LeaderboardData")));
    }

    public static leaderboardDataToJson(value: LeaderboardData[]): string {
        return JSON.stringify(uncast(value, a(r("LeaderboardData"))), null, 2);
    }

    public static toLeaderboardStatData(json: string): LeaderboardStatData[] {
        return cast(JSON.parse(json), a(r("LeaderboardStatData")));
    }

    public static leaderboardStatDataToJson(value: LeaderboardStatData[]): string {
        return JSON.stringify(uncast(value, a(r("LeaderboardStatData"))), null, 2);
    }

    public static toLevelDisparityData(json: string): LevelDisparityData[] {
        return cast(JSON.parse(json), a(r("LevelDisparityData")));
    }

    public static levelDisparityDataToJson(value: LevelDisparityData[]): string {
        return JSON.stringify(uncast(value, a(r("LevelDisparityData"))), null, 2);
    }

    public static toLootBucketData(json: string): { [key: string]: boolean | number | null | string }[] {
        return cast(JSON.parse(json), a(m(u(true, 0, null, ""))));
    }

    public static lootBucketDataToJson(value: { [key: string]: boolean | number | null | string }[]): string {
        return JSON.stringify(uncast(value, a(m(u(true, 0, null, "")))), null, 2);
    }

    public static toLootLimitData(json: string): LootLimitData[] {
        return cast(JSON.parse(json), a(r("LootLimitData")));
    }

    public static lootLimitDataToJson(value: LootLimitData[]): string {
        return JSON.stringify(uncast(value, a(r("LootLimitData"))), null, 2);
    }

    public static toLootTablesData(json: string): LootTablesData[] {
        return cast(JSON.parse(json), a(r("LootTablesData")));
    }

    public static lootTablesDataToJson(value: LootTablesData[]): string {
        return JSON.stringify(uncast(value, a(r("LootTablesData"))), null, 2);
    }

    public static toLootTagPresetData(json: string): LootTagPresetData[] {
        return cast(JSON.parse(json), a(r("LootTagPresetData")));
    }

    public static lootTagPresetDataToJson(value: LootTagPresetData[]): string {
        return JSON.stringify(uncast(value, a(r("LootTagPresetData"))), null, 2);
    }

    public static toLoreData(json: string): LoreData[] {
        return cast(JSON.parse(json), a(r("LoreData")));
    }

    public static loreDataToJson(value: LoreData[]): string {
        return JSON.stringify(uncast(value, a(r("LoreData"))), null, 2);
    }

    public static toLoreItemDefinitions(json: string): LoreItemDefinitions[] {
        return cast(JSON.parse(json), a(r("LoreItemDefinitions")));
    }

    public static loreItemDefinitionsToJson(value: LoreItemDefinitions[]): string {
        return JSON.stringify(uncast(value, a(r("LoreItemDefinitions"))), null, 2);
    }

    public static toManaCostsPlayer(json: string): ManaCostsPlayer[] {
        return cast(JSON.parse(json), a(r("ManaCostsPlayer")));
    }

    public static manaCostsPlayerToJson(value: ManaCostsPlayer[]): string {
        return JSON.stringify(uncast(value, a(r("ManaCostsPlayer"))), null, 2);
    }

    public static toMasterItemDefinitions(json: string): MasterItemDefinitions[] {
        return cast(JSON.parse(json), a(r("MasterItemDefinitions")));
    }

    public static masterItemDefinitionsToJson(value: MasterItemDefinitions[]): string {
        return JSON.stringify(uncast(value, a(r("MasterItemDefinitions"))), null, 2);
    }

    public static toMetaAchievementData(json: string): MetaAchievementData[] {
        return cast(JSON.parse(json), a(r("MetaAchievementData")));
    }

    public static metaAchievementDataToJson(value: MetaAchievementData[]): string {
        return JSON.stringify(uncast(value, a(r("MetaAchievementData"))), null, 2);
    }

    public static toMissionData(json: string): MissionData[] {
        return cast(JSON.parse(json), a(r("MissionData")));
    }

    public static missionDataToJson(value: MissionData[]): string {
        return JSON.stringify(uncast(value, a(r("MissionData"))), null, 2);
    }

    public static toMissionWeightsData(json: string): MissionWeightsData[] {
        return cast(JSON.parse(json), a(r("MissionWeightsData")));
    }

    public static missionWeightsDataToJson(value: MissionWeightsData[]): string {
        return JSON.stringify(uncast(value, a(r("MissionWeightsData"))), null, 2);
    }

    public static toMoonshot(json: string): Moonshot[] {
        return cast(JSON.parse(json), a(r("Moonshot")));
    }

    public static moonshotToJson(value: Moonshot[]): string {
        return JSON.stringify(uncast(value, a(r("Moonshot"))), null, 2);
    }

    public static toMusicalInstrumentSlot(json: string): MusicalInstrumentSlot[] {
        return cast(JSON.parse(json), a(r("MusicalInstrumentSlot")));
    }

    public static musicalInstrumentSlotToJson(value: MusicalInstrumentSlot[]): string {
        return JSON.stringify(uncast(value, a(r("MusicalInstrumentSlot"))), null, 2);
    }

    public static toMusicalPerformanceRewards(json: string): MusicalPerformanceRewards[] {
        return cast(JSON.parse(json), a(r("MusicalPerformanceRewards")));
    }

    public static musicalPerformanceRewardsToJson(value: MusicalPerformanceRewards[]): string {
        return JSON.stringify(uncast(value, a(r("MusicalPerformanceRewards"))), null, 2);
    }

    public static toMusicalRanking(json: string): MusicalRanking[] {
        return cast(JSON.parse(json), a(r("MusicalRanking")));
    }

    public static musicalRankingToJson(value: MusicalRanking[]): string {
        return JSON.stringify(uncast(value, a(r("MusicalRanking"))), null, 2);
    }

    public static toMusicalScoring(json: string): MusicalScoring[] {
        return cast(JSON.parse(json), a(r("MusicalScoring")));
    }

    public static musicalScoringToJson(value: MusicalScoring[]): string {
        return JSON.stringify(uncast(value, a(r("MusicalScoring"))), null, 2);
    }

    public static toMutationDifficultyStaticData(json: string): MutationDifficultyStaticData[] {
        return cast(JSON.parse(json), a(r("MutationDifficultyStaticData")));
    }

    public static mutationDifficultyStaticDataToJson(value: MutationDifficultyStaticData[]): string {
        return JSON.stringify(uncast(value, a(r("MutationDifficultyStaticData"))), null, 2);
    }

    public static toMutationPerksStaticData(json: string): MutationPerksStaticData[] {
        return cast(JSON.parse(json), a(r("MutationPerksStaticData")));
    }

    public static mutationPerksStaticDataToJson(value: MutationPerksStaticData[]): string {
        return JSON.stringify(uncast(value, a(r("MutationPerksStaticData"))), null, 2);
    }

    public static toNotificationData(json: string): NotificationData[] {
        return cast(JSON.parse(json), a(r("NotificationData")));
    }

    public static notificationDataToJson(value: NotificationData[]): string {
        return JSON.stringify(uncast(value, a(r("NotificationData"))), null, 2);
    }

    public static toNPCData(json: string): NPCData[] {
        return cast(JSON.parse(json), a(r("NPCData")));
    }

    public static nPCDataToJson(value: NPCData[]): string {
        return JSON.stringify(uncast(value, a(r("NPCData"))), null, 2);
    }

    public static toObjectives(json: string): Objectives[] {
        return cast(JSON.parse(json), a(r("Objectives")));
    }

    public static objectivesToJson(value: Objectives[]): string {
        return JSON.stringify(uncast(value, a(r("Objectives"))), null, 2);
    }

    public static toObjectivesGlobalReleaseData(json: string): any[] {
        return cast(JSON.parse(json), a("any"));
    }

    public static objectivesGlobalReleaseDataToJson(value: any[]): string {
        return JSON.stringify(uncast(value, a("any")), null, 2);
    }

    public static toObjectiveTasks(json: string): ObjectiveTasks[] {
        return cast(JSON.parse(json), a(r("ObjectiveTasks")));
    }

    public static objectiveTasksToJson(value: ObjectiveTasks[]): string {
        return JSON.stringify(uncast(value, a(r("ObjectiveTasks"))), null, 2);
    }

    public static toParticleContextualPriorityOverrideData(json: string): ParticleContextualPriorityOverrideData[] {
        return cast(JSON.parse(json), a(r("ParticleContextualPriorityOverrideData")));
    }

    public static particleContextualPriorityOverrideDataToJson(value: ParticleContextualPriorityOverrideData[]): string {
        return JSON.stringify(uncast(value, a(r("ParticleContextualPriorityOverrideData"))), null, 2);
    }

    public static toParticleData(json: string): ParticleData[] {
        return cast(JSON.parse(json), a(r("ParticleData")));
    }

    public static particleDataToJson(value: ParticleData[]): string {
        return JSON.stringify(uncast(value, a(r("ParticleData"))), null, 2);
    }

    public static toPerkBucketData(json: string): { [key: string]: number | null | string }[] {
        return cast(JSON.parse(json), a(m(u(3.14, null, ""))));
    }

    public static perkBucketDataToJson(value: { [key: string]: number | null | string }[]): string {
        return JSON.stringify(uncast(value, a(m(u(3.14, null, "")))), null, 2);
    }

    public static toPerkData(json: string): PerkData[] {
        return cast(JSON.parse(json), a(r("PerkData")));
    }

    public static perkDataToJson(value: PerkData[]): string {
        return JSON.stringify(uncast(value, a(r("PerkData"))), null, 2);
    }

    public static toPerkExclusiveLabelData(json: string): PerkExclusiveLabelData[] {
        return cast(JSON.parse(json), a(r("PerkExclusiveLabelData")));
    }

    public static perkExclusiveLabelDataToJson(value: PerkExclusiveLabelData[]): string {
        return JSON.stringify(uncast(value, a(r("PerkExclusiveLabelData"))), null, 2);
    }

    public static toPlayerTitleData(json: string): PlayerTitleData[] {
        return cast(JSON.parse(json), a(r("PlayerTitleData")));
    }

    public static playerTitleDataToJson(value: PlayerTitleData[]): string {
        return JSON.stringify(uncast(value, a(r("PlayerTitleData"))), null, 2);
    }

    public static toProgressionPointData(json: string): ProgressionPointData[] {
        return cast(JSON.parse(json), a(r("ProgressionPointData")));
    }

    public static progressionPointDataToJson(value: ProgressionPointData[]): string {
        return JSON.stringify(uncast(value, a(r("ProgressionPointData"))), null, 2);
    }

    public static toProgressionPoolData(json: string): ProgressionPoolData[] {
        return cast(JSON.parse(json), a(r("ProgressionPoolData")));
    }

    public static progressionPoolDataToJson(value: ProgressionPoolData[]): string {
        return JSON.stringify(uncast(value, a(r("ProgressionPoolData"))), null, 2);
    }

    public static toPromotionMutationStaticData(json: string): PromotionMutationStaticData[] {
        return cast(JSON.parse(json), a(r("PromotionMutationStaticData")));
    }

    public static promotionMutationStaticDataToJson(value: PromotionMutationStaticData[]): string {
        return JSON.stringify(uncast(value, a(r("PromotionMutationStaticData"))), null, 2);
    }

    public static toPVPRankData(json: string): PVPRankData[] {
        return cast(JSON.parse(json), a(r("PVPRankData")));
    }

    public static pVPRankDataToJson(value: PVPRankData[]): string {
        return JSON.stringify(uncast(value, a(r("PVPRankData"))), null, 2);
    }

    public static toPVPStoreData(json: string): PVPStoreData[] {
        return cast(JSON.parse(json), a(r("PVPStoreData")));
    }

    public static pVPStoreDataToJson(value: PVPStoreData[]): string {
        return JSON.stringify(uncast(value, a(r("PVPStoreData"))), null, 2);
    }

    public static toRandomEncounterDefinitions(json: string): RandomEncounterDefinitions[] {
        return cast(JSON.parse(json), a(r("RandomEncounterDefinitions")));
    }

    public static randomEncounterDefinitionsToJson(value: RandomEncounterDefinitions[]): string {
        return JSON.stringify(uncast(value, a(r("RandomEncounterDefinitions"))), null, 2);
    }

    public static toRefiningRecipes(json: string): RefiningRecipes[] {
        return cast(JSON.parse(json), a(r("RefiningRecipes")));
    }

    public static refiningRecipesToJson(value: RefiningRecipes[]): string {
        return JSON.stringify(uncast(value, a(r("RefiningRecipes"))), null, 2);
    }

    public static toResourceItemDefinitions(json: string): ResourceItemDefinitions[] {
        return cast(JSON.parse(json), a(r("ResourceItemDefinitions")));
    }

    public static resourceItemDefinitionsToJson(value: ResourceItemDefinitions[]): string {
        return JSON.stringify(uncast(value, a(r("ResourceItemDefinitions"))), null, 2);
    }

    public static toRewardData(json: string): { [key: string]: number | null }[] {
        return cast(JSON.parse(json), a(m(u(0, null))));
    }

    public static rewardDataToJson(value: { [key: string]: number | null }[]): string {
        return JSON.stringify(uncast(value, a(m(u(0, null)))), null, 2);
    }

    public static toRewardMilestoneData(json: string): RewardMilestoneData[] {
        return cast(JSON.parse(json), a(r("RewardMilestoneData")));
    }

    public static rewardMilestoneDataToJson(value: RewardMilestoneData[]): string {
        return JSON.stringify(uncast(value, a(r("RewardMilestoneData"))), null, 2);
    }

    public static toRewardModifierData(json: string): RewardModifierData[] {
        return cast(JSON.parse(json), a(r("RewardModifierData")));
    }

    public static rewardModifierDataToJson(value: RewardModifierData[]): string {
        return JSON.stringify(uncast(value, a(r("RewardModifierData"))), null, 2);
    }

    public static toRewardTrackItemData(json: string): RewardTrackItemData[] {
        return cast(JSON.parse(json), a(r("RewardTrackItemData")));
    }

    public static rewardTrackItemDataToJson(value: RewardTrackItemData[]): string {
        return JSON.stringify(uncast(value, a(r("RewardTrackItemData"))), null, 2);
    }

    public static toScheduleData(json: string): ScheduleData[] {
        return cast(JSON.parse(json), a(r("ScheduleData")));
    }

    public static scheduleDataToJson(value: ScheduleData[]): string {
        return JSON.stringify(uncast(value, a(r("ScheduleData"))), null, 2);
    }

    public static toSeasonPassRankData(json: string): SeasonPassRankData[] {
        return cast(JSON.parse(json), a(r("SeasonPassRankData")));
    }

    public static seasonPassRankDataToJson(value: SeasonPassRankData[]): string {
        return JSON.stringify(uncast(value, a(r("SeasonPassRankData"))), null, 2);
    }

    public static toSeasonsRewardData(json: string): SeasonsRewardData[] {
        return cast(JSON.parse(json), a(r("SeasonsRewardData")));
    }

    public static seasonsRewardDataToJson(value: SeasonsRewardData[]): string {
        return JSON.stringify(uncast(value, a(r("SeasonsRewardData"))), null, 2);
    }

    public static toSeasonsRewardsActivitiesConfig(json: string): SeasonsRewardsActivitiesConfig[] {
        return cast(JSON.parse(json), a(r("SeasonsRewardsActivitiesConfig")));
    }

    public static seasonsRewardsActivitiesConfigToJson(value: SeasonsRewardsActivitiesConfig[]): string {
        return JSON.stringify(uncast(value, a(r("SeasonsRewardsActivitiesConfig"))), null, 2);
    }

    public static toSeasonsRewardsActivitiesTasksData(json: string): SeasonsRewardsActivitiesTasksData[] {
        return cast(JSON.parse(json), a(r("SeasonsRewardsActivitiesTasksData")));
    }

    public static seasonsRewardsActivitiesTasksDataToJson(value: SeasonsRewardsActivitiesTasksData[]): string {
        return JSON.stringify(uncast(value, a(r("SeasonsRewardsActivitiesTasksData"))), null, 2);
    }

    public static toSeasonsRewardsCardData(json: string): SeasonsRewardsCardData[] {
        return cast(JSON.parse(json), a(r("SeasonsRewardsCardData")));
    }

    public static seasonsRewardsCardDataToJson(value: SeasonsRewardsCardData[]): string {
        return JSON.stringify(uncast(value, a(r("SeasonsRewardsCardData"))), null, 2);
    }

    public static toSeasonsRewardsCardTemplates(json: string): SeasonsRewardsCardTemplates[] {
        return cast(JSON.parse(json), a(r("SeasonsRewardsCardTemplates")));
    }

    public static seasonsRewardsCardTemplatesToJson(value: SeasonsRewardsCardTemplates[]): string {
        return JSON.stringify(uncast(value, a(r("SeasonsRewardsCardTemplates"))), null, 2);
    }

    public static toSeasonsRewardsChapterData(json: string): SeasonsRewardsChapterData[] {
        return cast(JSON.parse(json), a(r("SeasonsRewardsChapterData")));
    }

    public static seasonsRewardsChapterDataToJson(value: SeasonsRewardsChapterData[]): string {
        return JSON.stringify(uncast(value, a(r("SeasonsRewardsChapterData"))), null, 2);
    }

    public static toSeasonsRewardsJourneyData(json: string): SeasonsRewardsJourneyData[] {
        return cast(JSON.parse(json), a(r("SeasonsRewardsJourneyData")));
    }

    public static seasonsRewardsJourneyDataToJson(value: SeasonsRewardsJourneyData[]): string {
        return JSON.stringify(uncast(value, a(r("SeasonsRewardsJourneyData"))), null, 2);
    }

    public static toSeasonsRewardsSeasonData(json: string): SeasonsRewardsSeasonData[] {
        return cast(JSON.parse(json), a(r("SeasonsRewardsSeasonData")));
    }

    public static seasonsRewardsSeasonDataToJson(value: SeasonsRewardsSeasonData[]): string {
        return JSON.stringify(uncast(value, a(r("SeasonsRewardsSeasonData"))), null, 2);
    }

    public static toSeasonsRewardsStats(json: string): SeasonsRewardsStats[] {
        return cast(JSON.parse(json), a(r("SeasonsRewardsStats")));
    }

    public static seasonsRewardsStatsToJson(value: SeasonsRewardsStats[]): string {
        return JSON.stringify(uncast(value, a(r("SeasonsRewardsStats"))), null, 2);
    }

    public static toSeasonsRewardsTasks(json: string): SeasonsRewardsTasks[] {
        return cast(JSON.parse(json), a(r("SeasonsRewardsTasks")));
    }

    public static seasonsRewardsTasksToJson(value: SeasonsRewardsTasks[]): string {
        return JSON.stringify(uncast(value, a(r("SeasonsRewardsTasks"))), null, 2);
    }

    public static toSimpleTreeCategoryData(json: string): SimpleTreeCategoryData[] {
        return cast(JSON.parse(json), a(r("SimpleTreeCategoryData")));
    }

    public static simpleTreeCategoryDataToJson(value: SimpleTreeCategoryData[]): string {
        return JSON.stringify(uncast(value, a(r("SimpleTreeCategoryData"))), null, 2);
    }

    public static toSkillData(json: string): SkillData[] {
        return cast(JSON.parse(json), a(r("SkillData")));
    }

    public static skillDataToJson(value: SkillData[]): string {
        return JSON.stringify(uncast(value, a(r("SkillData"))), null, 2);
    }

    public static toSkillExperienceData(json: string): SkillExperienceData[] {
        return cast(JSON.parse(json), a(r("SkillExperienceData")));
    }

    public static skillExperienceDataToJson(value: SkillExperienceData[]): string {
        return JSON.stringify(uncast(value, a(r("SkillExperienceData"))), null, 2);
    }

    public static toSocketables(json: string): Socketables[] {
        return cast(JSON.parse(json), a(r("Socketables")));
    }

    public static socketablesToJson(value: Socketables[]): string {
        return JSON.stringify(uncast(value, a(r("Socketables"))), null, 2);
    }

    public static toSongBookData(json: string): SongBookData[] {
        return cast(JSON.parse(json), a(r("SongBookData")));
    }

    public static songBookDataToJson(value: SongBookData[]): string {
        return JSON.stringify(uncast(value, a(r("SongBookData"))), null, 2);
    }

    public static toSongBookSheets(json: string): SongBookSheets[] {
        return cast(JSON.parse(json), a(r("SongBookSheets")));
    }

    public static songBookSheetsToJson(value: SongBookSheets[]): string {
        return JSON.stringify(uncast(value, a(r("SongBookSheets"))), null, 2);
    }

    public static toSpecializationDefinitions(json: string): { [key: string]: number }[] {
        return cast(JSON.parse(json), a(m(3.14)));
    }

    public static specializationDefinitionsToJson(value: { [key: string]: number }[]): string {
        return JSON.stringify(uncast(value, a(m(3.14))), null, 2);
    }

    public static toSpellData(json: string): SpellData[] {
        return cast(JSON.parse(json), a(r("SpellData")));
    }

    public static spellDataToJson(value: SpellData[]): string {
        return JSON.stringify(uncast(value, a(r("SpellData"))), null, 2);
    }

    public static toStaminaCostsDamned(json: string): StaminaCostsPlayer[] {
        return cast(JSON.parse(json), a(r("StaminaCostsPlayer")));
    }

    public static staminaCostsDamnedToJson(value: StaminaCostsPlayer[]): string {
        return JSON.stringify(uncast(value, a(r("StaminaCostsPlayer"))), null, 2);
    }

    public static toStaminaCostsPlayer(json: string): StaminaCostsPlayer[] {
        return cast(JSON.parse(json), a(r("StaminaCostsPlayer")));
    }

    public static staminaCostsPlayerToJson(value: StaminaCostsPlayer[]): string {
        return JSON.stringify(uncast(value, a(r("StaminaCostsPlayer"))), null, 2);
    }

    public static toStatusEffectCategoryData(json: string): StatusEffectCategoryData[] {
        return cast(JSON.parse(json), a(r("StatusEffectCategoryData")));
    }

    public static statusEffectCategoryDataToJson(value: StatusEffectCategoryData[]): string {
        return JSON.stringify(uncast(value, a(r("StatusEffectCategoryData"))), null, 2);
    }

    public static toStatusEffectData(json: string): StatusEffectData[] {
        return cast(JSON.parse(json), a(r("StatusEffectData")));
    }

    public static statusEffectDataToJson(value: StatusEffectData[]): string {
        return JSON.stringify(uncast(value, a(r("StatusEffectData"))), null, 2);
    }

    public static toStoreProductData(json: string): StoreProductData[] {
        return cast(JSON.parse(json), a(r("StoreProductData")));
    }

    public static storeProductDataToJson(value: StoreProductData[]): string {
        return JSON.stringify(uncast(value, a(r("StoreProductData"))), null, 2);
    }

    public static toStructureFootprintData(json: string): StructureFootprintData[] {
        return cast(JSON.parse(json), a(r("StructureFootprintData")));
    }

    public static structureFootprintDataToJson(value: StructureFootprintData[]): string {
        return JSON.stringify(uncast(value, a(r("StructureFootprintData"))), null, 2);
    }

    public static toStructurePieceData(json: string): StructurePieceData[] {
        return cast(JSON.parse(json), a(r("StructurePieceData")));
    }

    public static structurePieceDataToJson(value: StructurePieceData[]): string {
        return JSON.stringify(uncast(value, a(r("StructurePieceData"))), null, 2);
    }

    public static toTerritoryAdvancementLevel(json: string): TerritoryAdvancementLevel[] {
        return cast(JSON.parse(json), a(r("TerritoryAdvancementLevel")));
    }

    public static territoryAdvancementLevelToJson(value: TerritoryAdvancementLevel[]): string {
        return JSON.stringify(uncast(value, a(r("TerritoryAdvancementLevel"))), null, 2);
    }

    public static toTerritoryDefinition(json: string): TerritoryDefinition[] {
        return cast(JSON.parse(json), a(r("TerritoryDefinition")));
    }

    public static territoryDefinitionToJson(value: TerritoryDefinition[]): string {
        return JSON.stringify(uncast(value, a(r("TerritoryDefinition"))), null, 2);
    }

    public static toTerritoryProgressionData(json: string): TerritoryProgressionData[] {
        return cast(JSON.parse(json), a(r("TerritoryProgressionData")));
    }

    public static territoryProgressionDataToJson(value: TerritoryProgressionData[]): string {
        return JSON.stringify(uncast(value, a(r("TerritoryProgressionData"))), null, 2);
    }

    public static toTerritoryUpkeepDefinition(json: string): { [key: string]: number }[] {
        return cast(JSON.parse(json), a(m(3.14)));
    }

    public static territoryUpkeepDefinitionToJson(value: { [key: string]: number }[]): string {
        return JSON.stringify(uncast(value, a(m(3.14))), null, 2);
    }

    public static toThrowableItemDefinitions(json: string): ThrowableItemDefinitions[] {
        return cast(JSON.parse(json), a(r("ThrowableItemDefinitions")));
    }

    public static throwableItemDefinitionsToJson(value: ThrowableItemDefinitions[]): string {
        return JSON.stringify(uncast(value, a(r("ThrowableItemDefinitions"))), null, 2);
    }

    public static toTimelineRegistryEntryData(json: string): TimelineRegistryEntryData[] {
        return cast(JSON.parse(json), a(r("TimelineRegistryEntryData")));
    }

    public static timelineRegistryEntryDataToJson(value: TimelineRegistryEntryData[]): string {
        return JSON.stringify(uncast(value, a(r("TimelineRegistryEntryData"))), null, 2);
    }

    public static toTrackedStatID(json: string): any[] {
        return cast(JSON.parse(json), a("any"));
    }

    public static trackedStatIDToJson(value: any[]): string {
        return JSON.stringify(uncast(value, a("any")), null, 2);
    }

    public static toTradeSkillPostCapData(json: string): TradeSkillPostCapData[] {
        return cast(JSON.parse(json), a(r("TradeSkillPostCapData")));
    }

    public static tradeSkillPostCapDataToJson(value: TradeSkillPostCapData[]): string {
        return JSON.stringify(uncast(value, a(r("TradeSkillPostCapData"))), null, 2);
    }

    public static toTradeskillRankData(json: string): TradeskillRankData[] {
        return cast(JSON.parse(json), a(r("TradeskillRankData")));
    }

    public static tradeskillRankDataToJson(value: TradeskillRankData[]): string {
        return JSON.stringify(uncast(value, a(r("TradeskillRankData"))), null, 2);
    }

    public static toTwitchDropsStatDefinitions(json: string): TwitchDropsStatDefinitions[] {
        return cast(JSON.parse(json), a(r("TwitchDropsStatDefinitions")));
    }

    public static twitchDropsStatDefinitionsToJson(value: TwitchDropsStatDefinitions[]): string {
        return JSON.stringify(uncast(value, a(r("TwitchDropsStatDefinitions"))), null, 2);
    }

    public static toTwitchTagsStatDefinitions(json: string): TwitchTagsStatDefinitions[] {
        return cast(JSON.parse(json), a(r("TwitchTagsStatDefinitions")));
    }

    public static twitchTagsStatDefinitionsToJson(value: TwitchTagsStatDefinitions[]): string {
        return JSON.stringify(uncast(value, a(r("TwitchTagsStatDefinitions"))), null, 2);
    }

    public static toVariationData(json: string): VariationData[] {
        return cast(JSON.parse(json), a(r("VariationData")));
    }

    public static variationDataToJson(value: VariationData[]): string {
        return JSON.stringify(uncast(value, a(r("VariationData"))), null, 2);
    }

    public static toVitalsCategoryData(json: string): VitalsCategoryData[] {
        return cast(JSON.parse(json), a(r("VitalsCategoryData")));
    }

    public static vitalsCategoryDataToJson(value: VitalsCategoryData[]): string {
        return JSON.stringify(uncast(value, a(r("VitalsCategoryData"))), null, 2);
    }

    public static toVitalsData(json: string): VitalsData[] {
        return cast(JSON.parse(json), a(r("VitalsData")));
    }

    public static vitalsDataToJson(value: VitalsData[]): string {
        return JSON.stringify(uncast(value, a(r("VitalsData"))), null, 2);
    }

    public static toVitalsLevelData(json: string): VitalsLevelData[] {
        return cast(JSON.parse(json), a(r("VitalsLevelData")));
    }

    public static vitalsLevelDataToJson(value: VitalsLevelData[]): string {
        return JSON.stringify(uncast(value, a(r("VitalsLevelData"))), null, 2);
    }

    public static toVitalsModifierData(json: string): VitalsModifierData[] {
        return cast(JSON.parse(json), a(r("VitalsModifierData")));
    }

    public static vitalsModifierDataToJson(value: VitalsModifierData[]): string {
        return JSON.stringify(uncast(value, a(r("VitalsModifierData"))), null, 2);
    }

    public static toWarboardStatDefinitions(json: string): WarboardStatDefinitions[] {
        return cast(JSON.parse(json), a(r("WarboardStatDefinitions")));
    }

    public static warboardStatDefinitionsToJson(value: WarboardStatDefinitions[]): string {
        return JSON.stringify(uncast(value, a(r("WarboardStatDefinitions"))), null, 2);
    }

    public static toWeaponAccessoryDefinitions(json: string): WeaponAccessoryDefinitions[] {
        return cast(JSON.parse(json), a(r("WeaponAccessoryDefinitions")));
    }

    public static weaponAccessoryDefinitionsToJson(value: WeaponAccessoryDefinitions[]): string {
        return JSON.stringify(uncast(value, a(r("WeaponAccessoryDefinitions"))), null, 2);
    }

    public static toWeaponAppearanceDefinitions(json: string): WeaponAppearanceDefinitions[] {
        return cast(JSON.parse(json), a(r("WeaponAppearanceDefinitions")));
    }

    public static weaponAppearanceDefinitionsToJson(value: WeaponAppearanceDefinitions[]): string {
        return JSON.stringify(uncast(value, a(r("WeaponAppearanceDefinitions"))), null, 2);
    }

    public static toWeaponEffectData(json: string): WeaponEffectData[] {
        return cast(JSON.parse(json), a(r("WeaponEffectData")));
    }

    public static weaponEffectDataToJson(value: WeaponEffectData[]): string {
        return JSON.stringify(uncast(value, a(r("WeaponEffectData"))), null, 2);
    }

    public static toWeaponItemDefinitions(json: string): WeaponItemDefinitions[] {
        return cast(JSON.parse(json), a(r("WeaponItemDefinitions")));
    }

    public static weaponItemDefinitionsToJson(value: WeaponItemDefinitions[]): string {
        return JSON.stringify(uncast(value, a(r("WeaponItemDefinitions"))), null, 2);
    }

    public static toWhisperData(json: string): WhisperData[] {
        return cast(JSON.parse(json), a(r("WhisperData")));
    }

    public static whisperDataToJson(value: WhisperData[]): string {
        return JSON.stringify(uncast(value, a(r("WhisperData"))), null, 2);
    }

    public static toWhisperVfxData(json: string): WhisperVfxData[] {
        return cast(JSON.parse(json), a(r("WhisperVfxData")));
    }

    public static whisperVfxDataToJson(value: WhisperVfxData[]): string {
        return JSON.stringify(uncast(value, a(r("WhisperVfxData"))), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "AbilityData": o([
        { json: "AbilityID", js: "AbilityID", typ: "" },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "Description", js: "Description", typ: "" },
        { json: "UICategory", js: "UICategory", typ: r("UICategory") },
        { json: "Icon", js: "Icon", typ: "" },
        { json: "StatusEffectIcon", js: "StatusEffectIcon", typ: "" },
        { json: "Sound", js: "Sound", typ: "" },
        { json: "TelegraphStatusEffect", js: "TelegraphStatusEffect", typ: "" },
        { json: "TelegraphCountOffset", js: "TelegraphCountOffset", typ: "" },
        { json: "OnEquipStatusEffect", js: "OnEquipStatusEffect", typ: "" },
        { json: "WeaponTag", js: "WeaponTag", typ: r("WeaponTag") },
        { json: "RequiredAbilityId", js: "RequiredAbilityId", typ: "" },
        { json: "TreeId", js: "TreeId", typ: u(0, null, "") },
        { json: "TreeRowPosition", js: "TreeRowPosition", typ: u(0, null, "") },
        { json: "TreeColumnPosition", js: "TreeColumnPosition", typ: u(0, null, "") },
        { json: "IsActiveAbility", js: "IsActiveAbility", typ: u(true, null, "") },
        { json: "IsGlobalAbility", js: "IsGlobalAbility", typ: u(true, null, "") },
        { json: "IsStackableAbility", js: "IsStackableAbility", typ: u(undefined, u(true, null, "")) },
        { json: "ScalingStrength", js: "ScalingStrength", typ: "" },
        { json: "ScalingDexterity", js: "ScalingDexterity", typ: "" },
        { json: "ScalingIntelligence", js: "ScalingIntelligence", typ: "" },
        { json: "ScalingSpirit", js: "ScalingSpirit", typ: "" },
        { json: "ScalingConstitution", js: "ScalingConstitution", typ: "" },
        { json: "OnEventPassiveConditionsPass", js: "OnEventPassiveConditionsPass", typ: u(undefined, u(true, null)) },
        { json: "OnKill", js: "OnKill", typ: u(true, null) },
        { json: "OnExecuted", js: "OnExecuted", typ: u(true, null) },
        { json: "OnHit", js: "OnHit", typ: u(true, null) },
        { json: "OnBlockedHit", js: "OnBlockedHit", typ: u(true, null) },
        { json: "OnHitBehind", js: "OnHitBehind", typ: u(undefined, u(true, null)) },
        { json: "OnCrit", js: "OnCrit", typ: u(true, null) },
        { json: "OnCritTaken", js: "OnCritTaken", typ: u(undefined, u(true, null)) },
        { json: "OnHeadShot", js: "OnHeadShot", typ: u(true, null) },
        { json: "OnLegShot", js: "OnLegShot", typ: u(true, null) },
        { json: "OnHitTaken", js: "OnHitTaken", typ: u(true, null) },
        { json: "OnDeath", js: "OnDeath", typ: u(true, null) },
        { json: "OnDeathsDoor", js: "OnDeathsDoor", typ: u(true, null) },
        { json: "OnHasDied", js: "OnHasDied", typ: u(undefined, u(true, null)) },
        { json: "OnBlockBreak", js: "OnBlockBreak", typ: u(true, null) },
        { json: "OnTargetBlockBreak", js: "OnTargetBlockBreak", typ: u(true, null) },
        { json: "OnTargetSet", js: "OnTargetSet", typ: u(undefined, u(true, null)) },
        { json: "OnContributedKill", js: "OnContributedKill", typ: u(undefined, u(true, null)) },
        { json: "OnHealthChanged", js: "OnHealthChanged", typ: u(undefined, u(true, null, "")) },
        { json: "OnStatusEffectApplied", js: "OnStatusEffectApplied", typ: u(undefined, u(true, null)) },
        { json: "RequireReaction", js: "RequireReaction", typ: u(undefined, u(true, null, "")) },
        { json: "NumSuccessfulHits", js: "NumSuccessfulHits", typ: u(undefined, u(0, null, "")) },
        { json: "NumConsecutiveHits", js: "NumConsecutiveHits", typ: u(0, null, "") },
        { json: "MaxConsecutiveHits", js: "MaxConsecutiveHits", typ: u(0, null, "") },
        { json: "TrackHitCount", js: "TrackHitCount", typ: u(true, null, "") },
        { json: "ResetConsecutiveOnSuccess", js: "ResetConsecutiveOnSuccess", typ: u(true, 0, null, "") },
        { json: "DamageIsRanged", js: "DamageIsRanged", typ: u(true, null, "") },
        { json: "DamageIsMelee", js: "DamageIsMelee", typ: u(true, null, "") },
        { json: "AllowSelfDamageForHitEvents", js: "AllowSelfDamageForHitEvents", typ: u(undefined, u(true, null, "")) },
        { json: "ForceShowNameTag", js: "ForceShowNameTag", typ: "" },
        { json: "TargetHasGritActive", js: "TargetHasGritActive", typ: u(true, null, "") },
        { json: "DamageTableRow", js: "DamageTableRow", typ: "" },
        { json: "RemoteDamageTableRow", js: "RemoteDamageTableRow", typ: "" },
        { json: "RangedAttackName", js: "RangedAttackName", typ: r("RangedAttackName") },
        { json: "AttackType", js: "AttackType", typ: r("AttackType") },
        { json: "DamageTypes", js: "DamageTypes", typ: u(undefined, r("DamageTypes")) },
        { json: "CheckOwnedStatusEffects", js: "CheckOwnedStatusEffects", typ: u(undefined, "") },
        { json: "StatusEffect", js: "StatusEffect", typ: "" },
        { json: "StatusEffectCategories", js: "StatusEffectCategories", typ: r("RemoveTargetStatusEffectCats") },
        { json: "StatusEffectStackSize", js: "StatusEffectStackSize", typ: u(undefined, u(0, null, "")) },
        { json: "StatusEffectComparison", js: "StatusEffectComparison", typ: u(undefined, r("AbilityCooldownComparisonType")) },
        { json: "DontHaveStatusEffect", js: "DontHaveStatusEffect", typ: u(undefined, "") },
        { json: "StatusEffectBeingApplied", js: "StatusEffectBeingApplied", typ: u(undefined, r("StatusEffectBeingApplied")) },
        { json: "TargetStatusEffect", js: "TargetStatusEffect", typ: "" },
        { json: "TargetStatusEffectCategory", js: "TargetStatusEffectCategory", typ: r("TargetStatusEffectCategory") },
        { json: "TargetStatusEffectStackSize", js: "TargetStatusEffectStackSize", typ: u(0, null, "") },
        { json: "TargetStatusEffectComparison", js: "TargetStatusEffectComparison", typ: r("AbilityCooldownComparisonType") },
        { json: "TargetCollisionFilters", js: "TargetCollisionFilters", typ: r("TargetCollisionFilters") },
        { json: "TargetMarker", js: "TargetMarker", typ: r("TargetMarker") },
        { json: "MyHealthPercent", js: "MyHealthPercent", typ: u(0, null, "") },
        { json: "MyComparisonType", js: "MyComparisonType", typ: r("AbilityCooldownComparisonType") },
        { json: "MyStaminaPercent", js: "MyStaminaPercent", typ: u(0, null, "") },
        { json: "MyStaminaComparisonType", js: "MyStaminaComparisonType", typ: r("AbilityCooldownComparisonType") },
        { json: "TargetHealthPercent", js: "TargetHealthPercent", typ: u(0, null, "") },
        { json: "TargetComparisonType", js: "TargetComparisonType", typ: r("AbilityCooldownComparisonType") },
        { json: "DistFromDefender", js: "DistFromDefender", typ: u(0, null, "") },
        { json: "DistComparisonType", js: "DistComparisonType", typ: r("AbilityCooldownComparisonType") },
        { json: "NumAroundMe", js: "NumAroundMe", typ: u(0, null, "") },
        { json: "NumAroundComparisonType", js: "NumAroundComparisonType", typ: r("AbilityCooldownComparisonType") },
        { json: "AbilityList", js: "AbilityList", typ: "" },
        { json: "AbilityTrigger", js: "AbilityTrigger", typ: r("AbilityTrigger") },
        { json: "InAction", js: "InAction", typ: r("InAction") },
        { json: "InActionTime", js: "InActionTime", typ: u(3.14, null, "") },
        { json: "AfterAction", js: "AfterAction", typ: r("AfterAction") },
        { json: "BaseDamage", js: "BaseDamage", typ: u(3.14, null, "") },
        { json: "BaseDamageReduction", js: "BaseDamageReduction", typ: u(3.14, null, "") },
        { json: "BlockDamage", js: "BlockDamage", typ: u(3.14, null, "") },
        { json: "BlockDamageReduction", js: "BlockDamageReduction", typ: u(3.14, null, "") },
        { json: "CritDamage", js: "CritDamage", typ: u(3.14, null, "") },
        { json: "CritChance", js: "CritChance", typ: u(3.14, null, "") },
        { json: "HeadshotDamage", js: "HeadshotDamage", typ: u(3.14, null, "") },
        { json: "StaggerDamage", js: "StaggerDamage", typ: u(undefined, u(3.14, null, "")) },
        { json: "StaggerDamageReduction", js: "StaggerDamageReduction", typ: u(3.14, null, "") },
        { json: "HitRateDmg", js: "HitRateDmg", typ: "" },
        { json: "HitRateDmgReduction", js: "HitRateDmgReduction", typ: "" },
        { json: "HealthDamageMitigation", js: "HealthDamageMitigation", typ: u(undefined, "") },
        { json: "ThreatDamage", js: "ThreatDamage", typ: u(3.14, null, "") },
        { json: "ArmorPenetration", js: "ArmorPenetration", typ: u(3.14, null, "") },
        { json: "PhysicalArmor", js: "PhysicalArmor", typ: u(3.14, null, "") },
        { json: "ElementalArmor", js: "ElementalArmor", typ: u(3.14, null, "") },
        { json: "LinearlyScaleToDistance", js: "LinearlyScaleToDistance", typ: u(undefined, u(0, null, "")) },
        { json: "Knockback", js: "Knockback", typ: u(3.14, null, "") },
        { json: "WeaponAccuracy", js: "WeaponAccuracy", typ: u(3.14, null, "") },
        { json: "Health", js: "Health", typ: "" },
        { json: "DmgPctToHealth", js: "DmgPctToHealth", typ: u(3.14, null, "") },
        { json: "MaxHealth", js: "MaxHealth", typ: u(3.14, null, "") },
        { json: "Mana", js: "Mana", typ: u(3.14, null, "") },
        { json: "ManaRate", js: "ManaRate", typ: u(undefined, "") },
        { json: "MaxMana", js: "MaxMana", typ: u(3.14, null, "") },
        { json: "DamageTableRowOverride", js: "DamageTableRowOverride", typ: r("DamageTableRowOverride") },
        { json: "StatusEffectDamageTableRowOverride", js: "StatusEffectDamageTableRowOverride", typ: u(undefined, r("StatusEffectDamageTableRowOverride")) },
        { json: "ForceStatusEffectDamageTableRow", js: "ForceStatusEffectDamageTableRow", typ: u(undefined, u(true, null, "")) },
        { json: "RangedAttackNameOverride", js: "RangedAttackNameOverride", typ: r("RangedAttackNameOverride") },
        { json: "PowerLevelOverride", js: "PowerLevelOverride", typ: u(undefined, "") },
        { json: "EnableCrit", js: "EnableCrit", typ: "" },
        { json: "PerStatusEffectOnTarget", js: "PerStatusEffectOnTarget", typ: u(true, null, "") },
        { json: "ForceTakeStaminaDamage", js: "ForceTakeStaminaDamage", typ: "" },
        { json: "CastSpell", js: "CastSpell", typ: "" },
        { json: "SelfApplyStatusEffect", js: "SelfApplyStatusEffect", typ: "" },
        { json: "OtherApplyStatusEffect", js: "OtherApplyStatusEffect", typ: "" },
        { json: "SelfApplyStatusEffectDurations", js: "SelfApplyStatusEffectDurations", typ: u(undefined, u(0, null, "")) },
        { json: "DoNotUnequipSelfAppliedSE", js: "DoNotUnequipSelfAppliedSE", typ: u(undefined, u(true, null, "")) },
        { json: "SetPotencyAsCount", js: "SetPotencyAsCount", typ: "" },
        { json: "MultiplyRemovedByPotency", js: "MultiplyRemovedByPotency", typ: u(undefined, "") },
        { json: "OnlyChangeOwnedStatusEffects", js: "OnlyChangeOwnedStatusEffects", typ: u(undefined, u(true, null, "")) },
        { json: "NumStatusEffectsToRemove", js: "NumStatusEffectsToRemove", typ: u(undefined, u(0, null, "")) },
        { json: "NumStatusEffectStacksToRemove", js: "NumStatusEffectStacksToRemove", typ: u(undefined, u(0, null, "")) },
        { json: "RemoveStatusEffects", js: "RemoveStatusEffects", typ: r("RemoveStatusEffects") },
        { json: "StatusEffectsList", js: "StatusEffectsList", typ: r("StatusEffectsList") },
        { json: "StatusEffectCategoriesList", js: "StatusEffectCategoriesList", typ: u(undefined, r("StatusEffectCategoriesList")) },
        { json: "RemoveTargetStatusEffectsList", js: "RemoveTargetStatusEffectsList", typ: r("List") },
        { json: "ConsumeTargetStatusEffectMult", js: "ConsumeTargetStatusEffectMult", typ: u(3.14, null, "") },
        { json: "StatusEffectDurationReduction", js: "StatusEffectDurationReduction", typ: u(3.14, null, "") },
        { json: "TargetStatusEffectDurationList", js: "TargetStatusEffectDurationList", typ: r("List") },
        { json: "TargetStatusEffectDurationMod", js: "TargetStatusEffectDurationMod", typ: u(0, null, "") },
        { json: "ActivationCooldown", js: "ActivationCooldown", typ: u(undefined, u(3.14, null, "")) },
        { json: "Duration", js: "Duration", typ: u(3.14, null, "") },
        { json: "CooldownId", js: "CooldownId", typ: "" },
        { json: "CDRImmediatelyOptions", js: "CDRImmediatelyOptions", typ: r("Options") },
        { json: "ResetCooldownTimers", js: "ResetCooldownTimers", typ: r("ResetCooldownTimers") },
        { json: "CooldownTimer", js: "CooldownTimer", typ: u(3.14, null, "") },
        { json: "NumFreeCooldownsPerUse", js: "NumFreeCooldownsPerUse", typ: u(0, null, "") },
        { json: "MaxHitCountMultiplier", js: "MaxHitCountMultiplier", typ: u(0, null, "") },
        { json: "SetMannequinTag", js: "SetMannequinTag", typ: r("SetMannequinTag") },
        { json: "SetMannequinTagStatus", js: "SetMannequinTagStatus", typ: u(true, null, "") },
        { json: "IsNonCombatAbility", js: "IsNonCombatAbility", typ: u(undefined, true) },
        { json: "OnHealed", js: "OnHealed", typ: u(undefined, u(true, null)) },
        { json: "OnSelfDamage", js: "OnSelfDamage", typ: u(undefined, u(true, "")) },
        { json: "OnGatheringComplete", js: "OnGatheringComplete", typ: u(undefined, u(true, null)) },
        { json: "GatheringTradeskill", js: "GatheringTradeskill", typ: u(undefined, r("GatheringTradeskill")) },
        { json: "IgnoreDisabledAttackTypes", js: "IgnoreDisabledAttackTypes", typ: u(undefined, r("IgnoreDisabledAttackTypes")) },
        { json: "DamageCategory", js: "DamageCategory", typ: u(undefined, r("DamageCategory")) },
        { json: "CritDamageReduction", js: "CritDamageReduction", typ: u(undefined, u(3.14, null, "")) },
        { json: "HitFromBehindDamage", js: "HitFromBehindDamage", typ: u(undefined, u(3.14, null, "")) },
        { json: "PhysicalArmorMaxHealthMod", js: "PhysicalArmorMaxHealthMod", typ: u(undefined, u(3.14, null, "")) },
        { json: "HealScalingValueMultiplier", js: "HealScalingValueMultiplier", typ: u(undefined, u(3.14, null, "")) },
        { json: "ConsumableHealMod", js: "ConsumableHealMod", typ: u(undefined, u(3.14, null)) },
        { json: "StaminaCostList", js: "StaminaCostList", typ: u(undefined, "") },
        { json: "StaminaCostFlatMod", js: "StaminaCostFlatMod", typ: u(undefined, u(0, null, "")) },
        { json: "ModifySelfApplyStatusEffectDuration", js: "ModifySelfApplyStatusEffectDuration", typ: u(undefined, u(0, null, "")) },
        { json: "TargetStatusEffectDurationCats", js: "TargetStatusEffectDurationCats", typ: u(undefined, r("TargetStatusEffectDurationCats")) },
        { json: "TargetStatusEffectDurationMult", js: "TargetStatusEffectDurationMult", typ: u(undefined, u(3.14, null, "")) },
        { json: "RepairDustYieldMod", js: "RepairDustYieldMod", typ: u(undefined, u(3.14, null, "")) },
        { json: "ToolDurabilityLossMod", js: "ToolDurabilityLossMod", typ: u(undefined, u(3.14, null, "")) },
        { json: "FastTravelInnCooldownMod", js: "FastTravelInnCooldownMod", typ: u(undefined, u(3.14, null, "")) },
        { json: "FastTravelAzothCostMod", js: "FastTravelAzothCostMod", typ: u(undefined, u(3.14, null, "")) },
        { json: "GiveAzothPercentChance", js: "GiveAzothPercentChance", typ: u(undefined, u(3.14, null, "")) },
        { json: "Azoth", js: "Azoth", typ: u(undefined, u(0, null, "")) },
        { json: "RefundAmmoPercentChance", js: "RefundAmmoPercentChance", typ: u(undefined, u(3.14, null, "")) },
        { json: "EquipWhenUnsheathed", js: "EquipWhenUnsheathed", typ: u(undefined, u(true, 0, null, "")) },
        { json: "RequiredEquippedAbilityId", js: "RequiredEquippedAbilityId", typ: u(undefined, r("AbilityIDToCheckForTrackedHits")) },
        { json: "MaxTrackedHitCounts", js: "MaxTrackedHitCounts", typ: u(undefined, u(0, null)) },
        { json: "NumberOfTrackedHits", js: "NumberOfTrackedHits", typ: u(undefined, u(0, null, "")) },
        { json: "NumberOfHitsComparisonType", js: "NumberOfHitsComparisonType", typ: u(undefined, r("NumberOfHitsComparisonType")) },
        { json: "LoadedAmmoCount", js: "LoadedAmmoCount", typ: u(undefined, u(0, null, "")) },
        { json: "LoadedAmmoCountComparisonType", js: "LoadedAmmoCountComparisonType", typ: u(undefined, r("AbilityCooldownComparisonType")) },
        { json: "StatusEffectDamageTableIdForRowOverride", js: "StatusEffectDamageTableIdForRowOverride", typ: u(undefined, r("StatusEffectDamageTableIDForRowOverride")) },
        { json: "OnWeaponSwap", js: "OnWeaponSwap", typ: u(undefined, u(true, null, "")) },
        { json: "IgnoreResetConsecutiveOnDeath", js: "IgnoreResetConsecutiveOnDeath", typ: u(undefined, u(true, null, "")) },
        { json: "UISpellForManaCheck", js: "UISpellForManaCheck", typ: u(undefined, "") },
        { json: "OnBlockedHitTaken", js: "OnBlockedHitTaken", typ: u(undefined, u(true, null)) },
        { json: "OnHitTakenWhileInvulnerable", js: "OnHitTakenWhileInvulnerable", typ: u(undefined, u(true, null)) },
        { json: "DamageTableStatusEffectOverride", js: "DamageTableStatusEffectOverride", typ: u(undefined, r("DamageTableStatusEffectOverride")) },
        { json: "UseDefenderWeaponOnApplyOtherSE", js: "UseDefenderWeaponOnApplyOtherSE", typ: u(undefined, u(true, null)) },
        { json: "CanBeUnapplied", js: "CanBeUnapplied", typ: u(undefined, u(true, null, "")) },
        { json: "OnAttachedSpellTargetDied", js: "OnAttachedSpellTargetDied", typ: u(undefined, u(true, null)) },
        { json: "OnProjPassedThrough", js: "OnProjPassedThrough", typ: u(undefined, u(true, null)) },
        { json: "OnUsedConsumable", js: "OnUsedConsumable", typ: u(undefined, u(true, null)) },
        { json: "OnInActionLongEnough", js: "OnInActionLongEnough", typ: u(undefined, u(true, null, "")) },
        { json: "OnTargetStatusEffectRemoved", js: "OnTargetStatusEffectRemoved", typ: u(undefined, u(true, null)) },
        { json: "OnEventConditionalActivationChance", js: "OnEventConditionalActivationChance", typ: u(undefined, u(true, "")) },
        { json: "EquipLoadCategory", js: "EquipLoadCategory", typ: u(undefined, r("EquipLoadCategory")) },
        { json: "ExcludeFromGameModes", js: "ExcludeFromGameModes", typ: u(undefined, r("ExcludeFromGameModes")) },
        { json: "DisableConsecutivePotency", js: "DisableConsecutivePotency", typ: u(undefined, u(true, null, "")) },
        { json: "ResetTrackedOnSuccess", js: "ResetTrackedOnSuccess", typ: u(undefined, u(true, null, "")) },
        { json: "AbilityIdToCheckForTrackedHits", js: "AbilityIdToCheckForTrackedHits", typ: u(undefined, r("AbilityIDToCheckForTrackedHits")) },
        { json: "HasGritActive", js: "HasGritActive", typ: u(undefined, u(true, null, "")) },
        { json: "IsInCombatState", js: "IsInCombatState", typ: u(undefined, u(true, null, "")) },
        { json: "IsNotInCombatState", js: "IsNotInCombatState", typ: u(undefined, u(true, null, "")) },
        { json: "CheckStatusEffectsOnTargetOwned", js: "CheckStatusEffectsOnTargetOwned", typ: u(undefined, u(true, null, "")) },
        { json: "MyMarker", js: "MyMarker", typ: u(undefined, r("MyMarker")) },
        { json: "MyManaPercent", js: "MyManaPercent", typ: u(undefined, u(0, null, "")) },
        { json: "MyManaComparisonType", js: "MyManaComparisonType", typ: u(undefined, r("AbilityCooldownComparisonType")) },
        { json: "MaxNumAroundMe", js: "MaxNumAroundMe", typ: u(undefined, u(0, null, "")) },
        { json: "AbilityOnCooldownOptions", js: "AbilityOnCooldownOptions", typ: u(undefined, r("Options")) },
        { json: "AbilitiesOnCooldown", js: "AbilitiesOnCooldown", typ: u(undefined, "") },
        { json: "AbilityCooldownComparisonType", js: "AbilityCooldownComparisonType", typ: u(undefined, r("AbilityCooldownComparisonType")) },
        { json: "AttachedTargetSpellIds", js: "AttachedTargetSpellIds", typ: u(undefined, "") },
        { json: "IsConsumableIds", js: "IsConsumableIds", typ: u(undefined, "") },
        { json: "IsNotConsumableIds", js: "IsNotConsumableIds", typ: u(undefined, r("IsNotConsumableIDS")) },
        { json: "AttackerVitalsCategory", js: "AttackerVitalsCategory", typ: u(undefined, r("AttackerVitalsCategory")) },
        { json: "TargetVitalsCategory", js: "TargetVitalsCategory", typ: u(undefined, r("AttackerVitalsCategory")) },
        { json: "SetHealthOnFatalDamageTaken", js: "SetHealthOnFatalDamageTaken", typ: u(undefined, u(0, null, "")) },
        { json: "CritArmorPenetration", js: "CritArmorPenetration", typ: u(undefined, "") },
        { json: "HeadshotArmorPenetration", js: "HeadshotArmorPenetration", typ: u(undefined, u(3.14, null, "")) },
        { json: "HitFromBehindArmorPenetration", js: "HitFromBehindArmorPenetration", typ: u(undefined, u(3.14, null, "")) },
        { json: "RefundConsumablePercentChance", js: "RefundConsumablePercentChance", typ: u(undefined, u(3.14, null, "")) },
        { json: "HealthPenaltyPerStackRemoved", js: "HealthPenaltyPerStackRemoved", typ: u(undefined, "") },
        { json: "ManaCostList", js: "ManaCostList", typ: u(undefined, "") },
        { json: "ManaCostMult", js: "ManaCostMult", typ: u(undefined, u(3.14, null, "")) },
        { json: "Stamina", js: "Stamina", typ: u(undefined, u(0, null, "")) },
        { json: "EnableTaunt", js: "EnableTaunt", typ: u(undefined, u(true, null, "")) },
        { json: "CanBlockRangedOverride", js: "CanBlockRangedOverride", typ: u(undefined, u(true, null, "")) },
        { json: "PerStatusEffectOnSelf", js: "PerStatusEffectOnSelf", typ: u(undefined, u(true, null, "")) },
        { json: "PerStatusEffectOnSelfMax", js: "PerStatusEffectOnSelfMax", typ: u(undefined, u(0, null, "")) },
        { json: "PerStatusEffectOnTargetMax", js: "PerStatusEffectOnTargetMax", typ: u(undefined, u(0, null, "")) },
        { json: "DisableApplyPerStatusEffectStack", js: "DisableApplyPerStatusEffectStack", typ: u(undefined, u(true, null, "")) },
        { json: "DisableScalePerTargetSEStack", js: "DisableScalePerTargetSEStack", typ: u(undefined, "") },
        { json: "DisableCastSpellDurability", js: "DisableCastSpellDurability", typ: u(undefined, u(true, null, "")) },
        { json: "OtherApplyStatusEffectDurations", js: "OtherApplyStatusEffectDurations", typ: u(undefined, "") },
        { json: "UseMinAttackInfoForSelfAppliedSE", js: "UseMinAttackInfoForSelfAppliedSE", typ: u(undefined, u(true, null, "")) },
        { json: "NumStatusEffectsToTransfer", js: "NumStatusEffectsToTransfer", typ: u(undefined, u(0, null, "")) },
        { json: "StatusEffectCategoryToTransfer", js: "StatusEffectCategoryToTransfer", typ: u(undefined, r("RemoveTargetStatusEffectCats")) },
        { json: "NumTargetStatusEffectsToRemove", js: "NumTargetStatusEffectsToRemove", typ: u(undefined, u(0, null, "")) },
        { json: "RemoveTargetStatusEffectCats", js: "RemoveTargetStatusEffectCats", typ: u(undefined, r("RemoveTargetStatusEffectCats")) },
        { json: "StatusEffectDurationCats", js: "StatusEffectDurationCats", typ: u(undefined, r("StatusEffectDurationCats")) },
        { json: "StatusEffectDurationMod", js: "StatusEffectDurationMod", typ: u(undefined, u(0, null, "")) },
        { json: "StatusEffectDurationMult", js: "StatusEffectDurationMult", typ: u(undefined, u(3.14, null, "")) },
        { json: "ConsumableCooldownForReset", js: "ConsumableCooldownForReset", typ: u(undefined, "") },
        { json: "ResetConsumableCooldowns", js: "ResetConsumableCooldowns", typ: u(undefined, r("RemoveStatusEffects")) },
        { json: "stagger damage", js: "stagger damage", typ: u(undefined, "") },
        { json: "UnlockDefault", js: "UnlockDefault", typ: u(undefined, u(true, null)) },
        { json: "OnFatalDamageTaken", js: "OnFatalDamageTaken", typ: u(undefined, true) },
        { json: "TargetStatusEffectPotency", js: "TargetStatusEffectPotency", typ: u(undefined, "") },
        { json: "TargetStatusEffectPotencyComparison", js: "TargetStatusEffectPotencyComparison", typ: u(undefined, "") },
        { json: "EnableHoldConditionIfTrackedSpellExistsOfType", js: "EnableHoldConditionIfTrackedSpellExistsOfType", typ: u(undefined, r("EnableHoldConditionIfTrackedSpellExistsOfType")) },
        { json: "HoldConditionButtonIcon", js: "HoldConditionButtonIcon", typ: u(undefined, r("HoldConditionButtonIcon")) },
    ], false),
    "AchievementData": o([
        { json: "AchievementID", js: "AchievementID", typ: "" },
        { json: "AchievementIndex", js: "AchievementIndex", typ: 0 },
        { json: "Category", js: "Category", typ: r("AchievementCategoryEnum") },
        { json: "GameEventId", js: "GameEventId", typ: r("AchievementDatumGameEventID") },
        { json: "New AchivementIndex values must increase, current maximum is", js: "New AchivementIndex values must increase, current maximum is", typ: "" },
        { json: "11590", js: "11590", typ: "" },
        { json: "AchivementsIndex &gt; 16000 will require a code change!", js: "AchivementsIndex &gt; 16000 will require a code change!", typ: "" },
    ], false),
    "AffixData": o([
        { json: "AffixID", js: "AffixID", typ: "" },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "Category", js: "Category", typ: r("AffixDatumCategory") },
        { json: "AffixDataWeapon", js: "AffixDataWeapon", typ: "" },
        { json: "AffixDataArmor", js: "AffixDataArmor", typ: "" },
        { json: "AffixDataMisc", js: "AffixDataMisc", typ: "" },
        { json: "QualityContribution", js: "QualityContribution", typ: u(0, null) },
        { json: "GearScoreContribution", js: "GearScoreContribution", typ: u(0, null) },
        { json: "Rarity", js: "Rarity", typ: u(0, null) },
    ], false),
    "AffixStatData": o([
        { json: "StatusID", js: "StatusID", typ: "" },
        { json: "BaseDamageModifier", js: "BaseDamageModifier", typ: u(3.14, null) },
        { json: "DisableDurabilityLoss", js: "DisableDurabilityLoss", typ: u(true, null) },
        { json: "DurabilityMod", js: "DurabilityMod", typ: u(3.14, null) },
        { json: "AfflictionDamage", js: "AfflictionDamage", typ: "" },
        { json: "StaminaDamageModifier", js: "StaminaDamageModifier", typ: u(3.14, null) },
        { json: "StaminaCostID", js: "StaminaCostID", typ: "" },
        { json: "StaminaCostMultiplier", js: "StaminaCostMultiplier", typ: "" },
        { json: "EffectDurationMultiplier", js: "EffectDurationMultiplier", typ: "" },
        { json: "EffectModMultiplier", js: "EffectModMultiplier", typ: "" },
        { json: "UseCountMultiplier", js: "UseCountMultiplier", typ: u(3.14, null) },
        { json: "Encumbrance", js: "Encumbrance", typ: u(3.14, null) },
        { json: "AfflictionMultiplier", js: "AfflictionMultiplier", typ: "" },
        { json: "WeightMultiplier", js: "WeightMultiplier", typ: u(3.14, null) },
        { json: "GatheringEfficiency", js: "GatheringEfficiency", typ: u(3.14, null) },
        { json: "AppendToTooltip", js: "AppendToTooltip", typ: "" },
        { json: "BaseDamageType", js: "BaseDamageType", typ: r("DamageTypes") },
        { json: "DamageType", js: "DamageType", typ: r("DamageTypes") },
        { json: "DamagePercentage", js: "DamagePercentage", typ: u(3.14, null) },
        { json: "AdditionalDamage", js: "AdditionalDamage", typ: "" },
        { json: "IsAdditiveDamage", js: "IsAdditiveDamage", typ: u(true, null) },
        { json: "StatusEffect", js: "StatusEffect", typ: "" },
        { json: "HealMod", js: "HealMod", typ: "" },
        { json: "HealthRate", js: "HealthRate", typ: "" },
        { json: "MaxHealthMod", js: "MaxHealthMod", typ: u(3.14, null) },
        { json: "StaminaRate", js: "StaminaRate", typ: u(3.14, null) },
        { json: "MaxStaminaMod", js: "MaxStaminaMod", typ: u(3.14, null) },
        { json: "ManaRate", js: "ManaRate", typ: u(3.14, null) },
        { json: "MaxManaMod", js: "MaxManaMod", typ: u(3.14, null) },
        { json: "MoveSpeedMod", js: "MoveSpeedMod", typ: "" },
        { json: "FastTravelEncumbranceMod", js: "FastTravelEncumbranceMod", typ: u(3.14, null) },
        { json: "FishRarityRollModifier", js: "FishRarityRollModifier", typ: u(3.14, null) },
        { json: "SummerFishRarityRollModifier", js: "SummerFishRarityRollModifier", typ: "" },
        { json: "FishSizeRollModifier", js: "FishSizeRollModifier", typ: u(3.14, null) },
        { json: "MaxCastDistance", js: "MaxCastDistance", typ: u(3.14, null) },
        { json: "FishingLineStrength", js: "FishingLineStrength", typ: u(3.14, null) },
        { json: "AttributeModifiers", js: "AttributeModifiers", typ: "" },
        { json: "MODConstitution", js: "MODConstitution", typ: u(3.14, null) },
        { json: "MODFocus", js: "MODFocus", typ: u(3.14, null) },
        { json: "MODStrength", js: "MODStrength", typ: u(3.14, null) },
        { json: "MODDexterity", js: "MODDexterity", typ: u(3.14, null) },
        { json: "MODIntelligence", js: "MODIntelligence", typ: u(3.14, null) },
        { json: "UseWeaponAttributeScaling", js: "UseWeaponAttributeScaling", typ: "" },
        { json: "PreferHigherScaling", js: "PreferHigherScaling", typ: u(true, null) },
        { json: "ScalingStrength", js: "ScalingStrength", typ: u(0, null) },
        { json: "ScalingDexterity", js: "ScalingDexterity", typ: u(0, null) },
        { json: "ScalingIntelligence", js: "ScalingIntelligence", typ: u(3.14, null) },
        { json: "ScalingFocus", js: "ScalingFocus", typ: u(3.14, null) },
        { json: "ABSStandard", js: "ABSStandard", typ: u(3.14, null) },
        { json: "ABSSiege", js: "ABSSiege", typ: u(3.14, null) },
        { json: "ABSStrike", js: "ABSStrike", typ: u(3.14, null) },
        { json: "ABSSlash", js: "ABSSlash", typ: u(3.14, null) },
        { json: "ABSThrust", js: "ABSThrust", typ: u(3.14, null) },
        { json: "ABSArcane", js: "ABSArcane", typ: u(3.14, null) },
        { json: "ABSIce", js: "ABSIce", typ: u(3.14, null) },
        { json: "ABSNature", js: "ABSNature", typ: u(3.14, null) },
        { json: "ABSFire", js: "ABSFire", typ: u(3.14, null) },
        { json: "ABSLightning", js: "ABSLightning", typ: u(3.14, null) },
        { json: "ABSCorruption", js: "ABSCorruption", typ: u(3.14, null) },
        { json: "ABSVitalsCategory", js: "ABSVitalsCategory", typ: r("AffixStatDatumABSVitalsCategory") },
        { json: "RESBlight", js: "RESBlight", typ: u(3.14, null) },
        { json: "RESCurse", js: "RESCurse", typ: u(3.14, null) },
        { json: "RESPoison", js: "RESPoison", typ: u(3.14, null) },
        { json: "BLAStandard", js: "BLAStandard", typ: u(3.14, null) },
        { json: "BLASiege", js: "BLASiege", typ: u(3.14, null) },
        { json: "BLAStrike", js: "BLAStrike", typ: u(3.14, null) },
        { json: "BLASlash", js: "BLASlash", typ: u(3.14, null) },
        { json: "BLAThrust", js: "BLAThrust", typ: u(3.14, null) },
        { json: "BLAArcane", js: "BLAArcane", typ: u(3.14, null) },
        { json: "BLAFire", js: "BLAFire", typ: u(3.14, null) },
        { json: "BLAIce", js: "BLAIce", typ: "" },
        { json: "BLANature", js: "BLANature", typ: "" },
        { json: "BLALightning", js: "BLALightning", typ: u(3.14, null) },
        { json: "BLACorruption", js: "BLACorruption", typ: u(3.14, null) },
        { json: "ABAPoison", js: "ABAPoison", typ: u(3.14, null) },
        { json: "ABADisease", js: "ABADisease", typ: u(3.14, null) },
        { json: "ABABleed", js: "ABABleed", typ: u(3.14, null) },
        { json: "ABAFrostbite", js: "ABAFrostbite", typ: u(3.14, null) },
        { json: "ABACurse", js: "ABACurse", typ: u(3.14, null) },
        { json: "WKNStandard", js: "WKNStandard", typ: "" },
        { json: "WKNSiege", js: "WKNSiege", typ: "" },
        { json: "WKNStrike", js: "WKNStrike", typ: "" },
        { json: "WKNSlash", js: "WKNSlash", typ: "" },
        { json: "WKNThrust", js: "WKNThrust", typ: "" },
        { json: "WKNArcane", js: "WKNArcane", typ: "" },
        { json: "WKNFire", js: "WKNFire", typ: "" },
        { json: "WKNIce", js: "WKNIce", typ: "" },
        { json: "WKNNature", js: "WKNNature", typ: "" },
        { json: "WKNLightning", js: "WKNLightning", typ: "" },
        { json: "WKNCorruption", js: "WKNCorruption", typ: "" },
        { json: "DMGStandard", js: "DMGStandard", typ: "" },
        { json: "DMGSiege", js: "DMGSiege", typ: "" },
        { json: "DMGStrike", js: "DMGStrike", typ: u(3.14, null) },
        { json: "DMGSlash", js: "DMGSlash", typ: u(3.14, null) },
        { json: "DMGThrust", js: "DMGThrust", typ: u(3.14, null) },
        { json: "DMGArcane", js: "DMGArcane", typ: u(3.14, null) },
        { json: "DMGFire", js: "DMGFire", typ: u(3.14, null) },
        { json: "DMGIce", js: "DMGIce", typ: u(3.14, null) },
        { json: "DMGNature", js: "DMGNature", typ: u(3.14, null) },
        { json: "DMGLightning", js: "DMGLightning", typ: u(3.14, null) },
        { json: "DMGCorruption", js: "DMGCorruption", typ: u(3.14, null) },
        { json: "DMGVitalsCategory", js: "DMGVitalsCategory", typ: r("AffixStatDatumDMGVitalsCategory") },
        { json: "AFAPoison", js: "AFAPoison", typ: u(3.14, null) },
        { json: "AFADisease", js: "AFADisease", typ: "" },
        { json: "AFABleed", js: "AFABleed", typ: "" },
        { json: "AFAFrostbite", js: "AFAFrostbite", typ: "" },
        { json: "AFACurse", js: "AFACurse", typ: u(3.14, null) },
        { json: "AFABlight", js: "AFABlight", typ: u(3.14, null) },
        { json: "WeaponEffectType", js: "WeaponEffectType", typ: r("DamageTypes") },
        { json: "MP_OpeningNotesPerfect", js: "MP_OpeningNotesPerfect", typ: u(0, null) },
        { json: "MP_IgnoreMissedNotes", js: "MP_IgnoreMissedNotes", typ: u(0, null) },
        { json: "MP_RakeReduction", js: "MP_RakeReduction", typ: u(0, null) },
        { json: "MP_GroupXPBonus", js: "MP_GroupXPBonus", typ: u(3.14, null) },
        { json: "MP_SoloXPBonus", js: "MP_SoloXPBonus", typ: u(3.14, null) },
        { json: "MP_FinalNotePerfectXPBonus", js: "MP_FinalNotePerfectXPBonus", typ: u(3.14, null) },
    ], false),
    "AfflictionData": o([
        { json: "AfflictionID", js: "AfflictionID", typ: "" },
        { json: "IntID", js: "IntID", typ: 0 },
        { json: "StatusEffects", js: "StatusEffects", typ: "" },
        { json: "DrainRate", js: "DrainRate", typ: 3.14 },
        { json: "AfflictedDrainTime", js: "AfflictedDrainTime", typ: 3.14 },
        { json: "DrainDelay", js: "DrainDelay", typ: 3.14 },
        { json: "Max", js: "Max", typ: 0 },
        { json: "IgnoreWhenAfflicted", js: "IgnoreWhenAfflicted", typ: true },
        { json: "IsGlobalAffliction", js: "IsGlobalAffliction", typ: u(true, null) },
        { json: "IsTimerAffliction", js: "IsTimerAffliction", typ: u(true, null) },
        { json: "ColorHex", js: "ColorHex", typ: "" },
        { json: "Icon", js: "Icon", typ: "" },
        { json: "BGImage", js: "BGImage", typ: "" },
        { json: "FillingColorHex", js: "FillingColorHex", typ: "" },
        { json: "LocalizedText", js: "LocalizedText", typ: "" },
        { json: "LocalizedTextAfflicted", js: "LocalizedTextAfflicted", typ: "" },
        { json: "AfflictionTooltipText", js: "AfflictionTooltipText", typ: "" },
        { json: "AfflictedTooltipText", js: "AfflictedTooltipText", typ: "" },
    ], false),
    "AmmoItemDefinitions": o([
        { json: "AmmoID", js: "AmmoID", typ: "" },
        { json: "AmmoType", js: "AmmoType", typ: r("AmmoType") },
        { json: "DamageModifier", js: "DamageModifier", typ: 3.14 },
        { json: "StaggerDamageModifier", js: "StaggerDamageModifier", typ: u(3.14, null) },
        { json: "AmmoPrefabPath", js: "AmmoPrefabPath", typ: "" },
        { json: "AmmoWhizByTrigger", js: "AmmoWhizByTrigger", typ: r("AmmoWhizByTrigger") },
        { json: "MeshOverride", js: "MeshOverride", typ: "" },
    ], false),
    "StaminaCostsPlayer": o([
        { json: "CostID", js: "CostID", typ: "" },
        { json: "StaminaCost", js: "StaminaCost", typ: 0 },
        { json: "Category", js: "Category", typ: r("AncientGuardianGreatswordIceVariantStaminaCostCategory") },
    ], false),
    "ArmorAppearanceDefinitions": o([
        { json: "ItemID", js: "ItemID", typ: "" },
        { json: "Name", js: "Name", typ: r("ArmorAppearanceDefinitionName") },
        { json: "Description", js: "Description", typ: "" },
        { json: "AppearanceName", js: "AppearanceName", typ: "" },
        { json: "Gender", js: "Gender", typ: r("Gender") },
        { json: "ItemClass", js: "ItemClass", typ: r("ArmorAppearanceDefinitionItemClass") },
        { json: "HairChop", js: "HairChop", typ: r("HairChop") },
        { json: "HideHair", js: "HideHair", typ: 0 },
        { json: "HideFacialHair", js: "HideFacialHair", typ: 0 },
        { json: "HideLegs", js: "HideLegs", typ: 0 },
        { json: "HideHead", js: "HideHead", typ: u(0, null) },
        { json: "MaskRColor", js: "MaskRColor", typ: r("ArmorAppearanceDefinitionMaskRColor") },
        { json: "MaskROverride", js: "MaskROverride", typ: 3.14 },
        { json: "MaskR", js: "MaskR", typ: 3.14 },
        { json: "MaskRDyeOverride", js: "MaskRDyeOverride", typ: 3.14 },
        { json: "MaskRDye", js: "MaskRDye", typ: 0 },
        { json: "MaskGColor", js: "MaskGColor", typ: r("ArmorAppearanceDefinitionMaskGColor") },
        { json: "MaskGOverride", js: "MaskGOverride", typ: 3.14 },
        { json: "MaskG", js: "MaskG", typ: 3.14 },
        { json: "MaskGDyeOverride", js: "MaskGDyeOverride", typ: 3.14 },
        { json: "MaskGDye", js: "MaskGDye", typ: 0 },
        { json: "MaskBColor", js: "MaskBColor", typ: r("ArmorAppearanceDefinitionMaskBColor") },
        { json: "MaskBOverride", js: "MaskBOverride", typ: 3.14 },
        { json: "MaskB", js: "MaskB", typ: 3.14 },
        { json: "MaskBDyeOverride", js: "MaskBDyeOverride", typ: 3.14 },
        { json: "MaskBDye", js: "MaskBDye", typ: 0 },
        { json: "MaskASpecColor", js: "MaskASpecColor", typ: "" },
        { json: "MaskASpec", js: "MaskASpec", typ: 3.14 },
        { json: "MaskASpecDye", js: "MaskASpecDye", typ: 3.14 },
        { json: "MaskAGlossShift", js: "MaskAGlossShift", typ: 3.14 },
        { json: "MaskAGloss", js: "MaskAGloss", typ: "" },
        { json: "EmissiveColor", js: "EmissiveColor", typ: "" },
        { json: "EmissiveIntensity", js: "EmissiveIntensity", typ: u(3.14, null) },
        { json: "Skin1", js: "Skin1", typ: "" },
        { json: "Material1", js: "Material1", typ: "" },
        { json: "IsSkin1", js: "IsSkin1", typ: u(0, null) },
        { json: "Mask1", js: "Mask1", typ: "" },
        { json: "Skin2", js: "Skin2", typ: "" },
        { json: "Material2", js: "Material2", typ: "" },
        { json: "IsSkin2", js: "IsSkin2", typ: u(0, null) },
        { json: "Mask2", js: "Mask2", typ: "" },
        { json: "Left/On", js: "Left/On", typ: r("LeftOn") },
        { json: "Right/Off", js: "Right/Off", typ: r("RightOff") },
        { json: "ForceShortsleeves", js: "ForceShortsleeves", typ: u(0, null) },
        { json: "ShortsleeveChestSkin", js: "ShortsleeveChestSkin", typ: "" },
        { json: "ForceHideForearms", js: "ForceHideForearms", typ: u(0, null) },
        { json: "HandsNoForearmsSkin", js: "HandsNoForearmsSkin", typ: "" },
        { json: "AttachmentOffsets", js: "AttachmentOffsets", typ: "" },
        { json: "LeftHandOnlySkin", js: "LeftHandOnlySkin", typ: "" },
        { json: "RightHandOnlySkin", js: "RightHandOnlySkin", typ: "" },
        { json: "LeftSleeveOnlyChestSkin", js: "LeftSleeveOnlyChestSkin", typ: "" },
        { json: "RightSleeveOnlyChestSkin", js: "RightSleeveOnlyChestSkin", typ: "" },
        { json: "AppearanceCDF", js: "AppearanceCDF", typ: "" },
        { json: "RDyeSlotDisabled", js: "RDyeSlotDisabled", typ: "" },
        { json: "GDyeSlotDisabled", js: "GDyeSlotDisabled", typ: "" },
        { json: "BDyeSlotDisabled", js: "BDyeSlotDisabled", typ: "" },
        { json: "ADyeSlotDisabled", js: "ADyeSlotDisabled", typ: "" },
        { json: "IconPath", js: "IconPath", typ: "" },
        { json: "HiResIconPath", js: "HiResIconPath", typ: "" },
        { json: "IconCaptureGroup", js: "IconCaptureGroup", typ: r("ArmorAppearanceDefinitionIconCaptureGroup") },
    ], false),
    "ArmorItemDefinitions": o([
        { json: "WeaponID", js: "WeaponID", typ: "" },
        { json: "Grit", js: "Grit", typ: u(3.14, null) },
        { json: "PhysicalArmorSetScaleFactor", js: "PhysicalArmorSetScaleFactor", typ: u(3.14, null) },
        { json: "ElementalArmorSetScaleFactor", js: "ElementalArmorSetScaleFactor", typ: u(3.14, null) },
        { json: "ArmorRatingScaleFactor", js: "ArmorRatingScaleFactor", typ: u(3.14, null) },
        { json: "WeightOverride", js: "WeightOverride", typ: u(3.14, null) },
        { json: "Encumbrance", js: "Encumbrance", typ: u(0, null) },
        { json: "EncumbrancePerGS", js: "EncumbrancePerGS", typ: u(0, null) },
        { json: "WeightClass", js: "WeightClass", typ: r("AttackType") },
        { json: "EquipLoad", js: "EquipLoad", typ: "" },
        { json: "MaxHealthMod", js: "MaxHealthMod", typ: "" },
        { json: "HealthRate", js: "HealthRate", typ: "" },
        { json: "MaxStaminaMod", js: "MaxStaminaMod", typ: "" },
        { json: "StaminaRate", js: "StaminaRate", typ: "" },
        { json: "MaxManaMod", js: "MaxManaMod", typ: "" },
        { json: "ManaRate", js: "ManaRate", typ: "" },
        { json: "MaxFoodMod", js: "MaxFoodMod", typ: "" },
        { json: "FoodBurn", js: "FoodBurn", typ: "" },
        { json: "MaxDrinkMod", js: "MaxDrinkMod", typ: "" },
        { json: "DrinkBurn", js: "DrinkBurn", typ: "" },
        { json: "BONLogging", js: "BONLogging", typ: "" },
        { json: "BONMining", js: "BONMining", typ: "" },
        { json: "BONSkinning", js: "BONSkinning", typ: "" },
        { json: "BONHarvesting", js: "BONHarvesting", typ: "" },
        { json: "EFFLogging", js: "EFFLogging", typ: "" },
        { json: "EFFMining", js: "EFFMining", typ: "" },
        { json: "EFFSkinning", js: "EFFSkinning", typ: "" },
        { json: "EFFHarvesting", js: "EFFHarvesting", typ: "" },
        { json: "ROLLogging", js: "ROLLogging", typ: "" },
        { json: "ROLMining", js: "ROLMining", typ: "" },
        { json: "ROLSkinning", js: "ROLSkinning", typ: "" },
        { json: "ROLHarvesting", js: "ROLHarvesting", typ: "" },
        { json: "ROLAlchemy", js: "ROLAlchemy", typ: "" },
        { json: "ROLBlacksmithing", js: "ROLBlacksmithing", typ: "" },
        { json: "ROLEngineering", js: "ROLEngineering", typ: "" },
        { json: "ROLOutfitting", js: "ROLOutfitting", typ: "" },
        { json: "ROLProvisioning", js: "ROLProvisioning", typ: "" },
        { json: "ROLCamping", js: "ROLCamping", typ: "" },
        { json: "DEFStandard", js: "DEFStandard", typ: u(0, null) },
        { json: "DEFSiege", js: "DEFSiege", typ: u(0, null) },
        { json: "DEFStrike", js: "DEFStrike", typ: u(0, null) },
        { json: "DEFSlash", js: "DEFSlash", typ: u(0, null) },
        { json: "DEFThrust", js: "DEFThrust", typ: u(0, null) },
        { json: "DEFMagic", js: "DEFMagic", typ: u(0, null) },
        { json: "DEFFire", js: "DEFFire", typ: u(0, null) },
        { json: "DEFLightning", js: "DEFLightning", typ: u(0, null) },
        { json: "DEFCorruption", js: "DEFCorruption", typ: u(0, null) },
        { json: "ABSStandard", js: "ABSStandard", typ: u(0, null) },
        { json: "ABSSiege", js: "ABSSiege", typ: u(0, null) },
        { json: "ABSStrike", js: "ABSStrike", typ: u(0, null) },
        { json: "ABSSlash", js: "ABSSlash", typ: u(0, null) },
        { json: "ABSThrust", js: "ABSThrust", typ: u(0, null) },
        { json: "ABSMagic", js: "ABSMagic", typ: u(0, null) },
        { json: "ABSFire", js: "ABSFire", typ: u(0, null) },
        { json: "ABSLightning", js: "ABSLightning", typ: u(0, null) },
        { json: "ABSCorruption", js: "ABSCorruption", typ: u(0, null) },
        { json: "RESPoison", js: "RESPoison", typ: u(0, null) },
        { json: "RESDisease", js: "RESDisease", typ: u(0, null) },
        { json: "RESBleed", js: "RESBleed", typ: u(0, null) },
        { json: "RESFrostbite", js: "RESFrostbite", typ: u(0, null) },
        { json: "RESCurse", js: "RESCurse", typ: u(0, null) },
        { json: "BLAStandard", js: "BLAStandard", typ: "" },
        { json: "BLASiege", js: "BLASiege", typ: "" },
        { json: "BLAStrike", js: "BLAStrike", typ: "" },
        { json: "BLASlash", js: "BLASlash", typ: "" },
        { json: "BLAThrust", js: "BLAThrust", typ: "" },
        { json: "BLAMagic", js: "BLAMagic", typ: "" },
        { json: "BLAFire", js: "BLAFire", typ: "" },
        { json: "BLALightning", js: "BLALightning", typ: "" },
        { json: "BLACorruption", js: "BLACorruption", typ: "" },
        { json: "ABAPoison", js: "ABAPoison", typ: "" },
        { json: "ABADisease", js: "ABADisease", typ: "" },
        { json: "ABABleed", js: "ABABleed", typ: "" },
        { json: "ABAFrostbite", js: "ABAFrostbite", typ: "" },
        { json: "ABACurse", js: "ABACurse", typ: "" },
        { json: "DMGStandard", js: "DMGStandard", typ: "" },
        { json: "DMGSiege", js: "DMGSiege", typ: "" },
        { json: "DMGStrike", js: "DMGStrike", typ: "" },
        { json: "DMGSlash", js: "DMGSlash", typ: "" },
        { json: "DMGThrust", js: "DMGThrust", typ: "" },
        { json: "DMGMagic", js: "DMGMagic", typ: "" },
        { json: "DMGFire", js: "DMGFire", typ: "" },
        { json: "DMGLightning", js: "DMGLightning", typ: "" },
        { json: "DMGCorruption", js: "DMGCorruption", typ: "" },
        { json: "DMGVitalsCategory", js: "DMGVitalsCategory", typ: "" },
        { json: "AFAPoison", js: "AFAPoison", typ: "" },
        { json: "AFADisease", js: "AFADisease", typ: "" },
        { json: "AFABleed", js: "AFABleed", typ: "" },
        { json: "AFAFrostbite", js: "AFAFrostbite", typ: "" },
        { json: "AFACurse", js: "AFACurse", typ: "" },
    ], false),
    "AttackTypes": o([
        { json: "TypeID", js: "TypeID", typ: "" },
        { json: "IntID", js: "IntID", typ: 0 },
        { json: "Category", js: "Category", typ: "" },
    ], false),
    "AttributeDefinition": o([
        { json: "Level", js: "Level", typ: 0 },
        { json: "Health", js: "Health", typ: 0 },
        { json: "HealthRate", js: "HealthRate", typ: 0 },
        { json: "Stamina", js: "Stamina", typ: 0 },
        { json: "StaminaRate", js: "StaminaRate", typ: 0 },
        { json: "Mana", js: "Mana", typ: 0 },
        { json: "ManaRate", js: "ManaRate", typ: 0 },
        { json: "CastSpeed", js: "CastSpeed", typ: 0 },
        { json: "EquipLoad", js: "EquipLoad", typ: 0 },
        { json: "NumAttuneSlots", js: "NumAttuneSlots", typ: 0 },
        { json: "Encumbrance", js: "Encumbrance", typ: 0 },
        { json: "AbsFalling", js: "AbsFalling", typ: 0 },
        { json: "DefStandard", js: "DefStandard", typ: 3.14 },
        { json: "DefSlash", js: "DefSlash", typ: 3.14 },
        { json: "DefThrust", js: "DefThrust", typ: 3.14 },
        { json: "DefStrike", js: "DefStrike", typ: 3.14 },
        { json: "DefMagic", js: "DefMagic", typ: 0 },
        { json: "DefFire", js: "DefFire", typ: 0 },
        { json: "DefLightning", js: "DefLightning", typ: 3.14 },
        { json: "DefCorruption", js: "DefCorruption", typ: 3.14 },
        { json: "ResFrostbite", js: "ResFrostbite", typ: 0 },
        { json: "ResPoison", js: "ResPoison", typ: 0 },
        { json: "ResBleed", js: "ResBleed", typ: 0 },
        { json: "ResDisease", js: "ResDisease", typ: 0 },
        { json: "ResCurse", js: "ResCurse", typ: 0 },
        { json: "ModifierValue", js: "ModifierValue", typ: u(undefined, u(3.14, null)) },
        { json: "ModifierValueSum", js: "ModifierValueSum", typ: u(undefined, u(3.14, null)) },
        { json: "EquipAbilities", js: "EquipAbilities", typ: u(undefined, r("EquipAbilities")) },
        { json: "AttbIncrease", js: "AttbIncrease", typ: u(undefined, u(0, null)) },
        { json: "ScalingValue", js: "ScalingValue", typ: u(undefined, 3.14) },
        { json: "CDR", js: "CDR", typ: u(undefined, 0) },
        { json: "HealScaling", js: "HealScaling", typ: u(undefined, 3.14) },
    ], false),
    "BackstoryDefinition": o([
        { json: "BackstoryID", js: "BackstoryID", typ: "" },
        { json: "BackstoryName", js: "BackstoryName", typ: "" },
        { json: "ReleaseVersion ", js: "ReleaseVersion ", typ: r("ReleaseVersion") },
        { json: "BackstoryText", js: "BackstoryText", typ: r("BackstoryText") },
        { json: "LevelOverride", js: "LevelOverride", typ: u(0, null) },
        { json: "PlaytestType", js: "PlaytestType", typ: r("ExcludeFromGameModes") },
        { json: "FactionOverride", js: "FactionOverride", typ: r("Faction") },
        { json: "Constitution", js: "Constitution", typ: u(0, null) },
        { json: "Focus", js: "Focus", typ: u(0, null) },
        { json: "Strength", js: "Strength", typ: u(0, null) },
        { json: "Dexterity", js: "Dexterity", typ: u(0, null) },
        { json: "Intelligence", js: "Intelligence", typ: u(0, null) },
        { json: "Weaponsmithing", js: "Weaponsmithing", typ: u(0, null) },
        { json: "Armoring", js: "Armoring", typ: u(0, null) },
        { json: "Jewelcrafting", js: "Jewelcrafting", typ: u(0, null) },
        { json: "Arcana", js: "Arcana", typ: u(0, null) },
        { json: "Cooking", js: "Cooking", typ: u(0, null) },
        { json: "Furnishing", js: "Furnishing", typ: u(0, null) },
        { json: "Engineering", js: "Engineering", typ: u(0, null) },
        { json: "Smelting", js: "Smelting", typ: u(0, null) },
        { json: "Woodworking", js: "Woodworking", typ: u(0, null) },
        { json: "Leatherworking", js: "Leatherworking", typ: u(0, null) },
        { json: "Weaving", js: "Weaving", typ: u(0, null) },
        { json: "Stonecutting", js: "Stonecutting", typ: u(0, null) },
        { json: "Skinning", js: "Skinning", typ: u(0, null) },
        { json: "Mining", js: "Mining", typ: u(0, null) },
        { json: "Logging", js: "Logging", typ: u(0, null) },
        { json: "Harvesting", js: "Harvesting", typ: u(0, null) },
        { json: "AzothStaff", js: "AzothStaff", typ: u(0, null) },
        { json: "LootTableIndex", js: "LootTableIndex", typ: u(0, null) },
        { json: "Currency", js: "Currency", typ: u(0, null) },
        { json: "RepairParts", js: "RepairParts", typ: u(0, null) },
        { json: "Azoth", js: "Azoth", typ: u(0, null) },
        { json: "FactionReputation", js: "FactionReputation", typ: u(0, null) },
        { json: "FactionTokens", js: "FactionTokens", typ: u(0, null) },
        { json: "CampUnlockTier", js: "CampUnlockTier", typ: u(0, null) },
        { json: "PvPFlag", js: "PvPFlag", typ: u(true, null) },
        { json: "ConversationUnlockOverride", js: "ConversationUnlockOverride", typ: r("ConversationUnlockOverride") },
        { json: "ObjectiveUnlockOverride", js: "ObjectiveUnlockOverride", typ: "" },
        { json: "AchievementUnlockOverride", js: "AchievementUnlockOverride", typ: "" },
        { json: "OutpostRushMinMMROverride", js: "OutpostRushMinMMROverride", typ: u(0, null) },
        { json: "OutpostRushMaxMMROverride", js: "OutpostRushMaxMMROverride", typ: u(0, null) },
        { json: "WeaponMasteries", js: "WeaponMasteries", typ: "" },
        { json: "CategoricalProgression", js: "CategoricalProgression", typ: "" },
        { json: "RespawnPointTerritories", js: "RespawnPointTerritories", typ: r("RespawnPointTerritories") },
        { json: "AddToLoadouts", js: "AddToLoadouts", typ: u(true, null) },
        { json: "InventoryItem", js: "InventoryItem", typ: "" },
    ], false),
    "BeamData": o([
        { json: "BeamID", js: "BeamID", typ: "" },
        { json: "StartDelayMS", js: "StartDelayMS", typ: 0 },
        { json: "BeamAttackAimMode", js: "BeamAttackAimMode", typ: "" },
        { json: "BeamEffectName", js: "BeamEffectName", typ: "" },
        { json: "SourceEffectName", js: "SourceEffectName", typ: "" },
        { json: "DestinationEffectName", js: "DestinationEffectName", typ: "" },
        { json: "KillBeamEffectOnDeactivate", js: "KillBeamEffectOnDeactivate", typ: true },
        { json: "KillSourceEffectOnDeactivate", js: "KillSourceEffectOnDeactivate", typ: true },
        { json: "KillDestinationEffectOnDeactivate", js: "KillDestinationEffectOnDeactivate", typ: true },
        { json: "InterpolationSmoothTimeSeconds", js: "InterpolationSmoothTimeSeconds", typ: 3.14 },
        { json: "MaxLength", js: "MaxLength", typ: 0 },
        { json: "Radius", js: "Radius", typ: 3.14 },
        { json: "BeamSpeed", js: "BeamSpeed", typ: 0 },
        { json: "CirclePatternPitchSpawnAngle", js: "CirclePatternPitchSpawnAngle", typ: 0 },
        { json: "CirclePatternYawSpawnAngle", js: "CirclePatternYawSpawnAngle", typ: 0 },
        { json: "DealDamageOnHit", js: "DealDamageOnHit", typ: true },
        { json: "DisablePhysics", js: "DisablePhysics", typ: true },
        { json: "DamageDataTable", js: "DamageDataTable", typ: "" },
        { json: "DamageDataTableEntry", js: "DamageDataTableEntry", typ: "" },
        { json: "BaseDamage", js: "BaseDamage", typ: 0 },
        { json: "DamageRate", js: "DamageRate", typ: 3.14 },
        { json: "Affliction", js: "Affliction", typ: "" },
        { json: "AfflictionValue", js: "AfflictionValue", typ: 0 },
        { json: "BlockStaminaDamage", js: "BlockStaminaDamage", typ: 0 },
        { json: "ForcePvPFlag", js: "ForcePvPFlag", typ: true },
        { json: "DamageGuildAndGroup", js: "DamageGuildAndGroup", typ: true },
        { json: "InheritVitalsBaseDamage", js: "InheritVitalsBaseDamage", typ: true },
        { json: "InheritSourceBaseDamage", js: "InheritSourceBaseDamage", typ: true },
        { json: "InheritSourceDamageTableRow", js: "InheritSourceDamageTableRow", typ: true },
        { json: "InheritSourceAmmoId", js: "InheritSourceAmmoId", typ: true },
        { json: "DoNotKillDoNotKillOnDeathsDoor", js: "DoNotKillDoNotKillOnDeathsDoor", typ: true },
        { json: "CollisionFilter", js: "CollisionFilter", typ: "" },
        { json: "LineStartPointOffset", js: "LineStartPointOffset", typ: "" },
        { json: "LineDestinationPointOffset", js: "LineDestinationPointOffset", typ: "" },
        { json: "UseBone", js: "UseBone", typ: true },
        { json: "BoneName", js: "BoneName", typ: "" },
        { json: "BonePositionOffset", js: "BonePositionOffset", typ: "" },
        { json: "BoneRotationOffset", js: "BoneRotationOffset", typ: "" },
        { json: "UseBoneDestination", js: "UseBoneDestination", typ: true },
        { json: "DestinationBoneName", js: "DestinationBoneName", typ: "" },
        { json: "UsePaperdollDestination", js: "UsePaperdollDestination", typ: true },
        { json: "PaperdollSlot", js: "PaperdollSlot", typ: "" },
        { json: "DestinationBonePosOffset", js: "DestinationBonePosOffset", typ: "" },
        { json: "IgnoresTriggerBasedToggles", js: "IgnoresTriggerBasedToggles", typ: true },
    ], false),
    "BlueprintItemDefinitions": o([
        { json: "BlueprintID", js: "BlueprintID", typ: "" },
        { json: "Name", js: "Name", typ: "" },
        { json: "DisplayClass", js: "DisplayClass", typ: "" },
        { json: "AttachmentCategories", js: "AttachmentCategories", typ: r("AttachmentCategories") },
        { json: "UseReducedBuildModeUI", js: "UseReducedBuildModeUI", typ: 0 },
        { json: "IsCamp", js: "IsCamp", typ: u(true, null) },
        { json: "IsDeployable", js: "IsDeployable", typ: u(0, null) },
        { json: "IsSiegeWeapon", js: "IsSiegeWeapon", typ: u(0, null) },
        { json: "TradeskillLevel", js: "TradeskillLevel", typ: u(0, null) },
        { json: "WarPoints", js: "WarPoints", typ: u(0, null) },
        { json: "HP", js: "HP", typ: u(0, null) },
        { json: "FuelCost", js: "FuelCost", typ: u(0, null) },
        { json: "FuelResource", js: "FuelResource", typ: r("FuelResource") },
        { json: "ResourceCost", js: "ResourceCost", typ: u(0, null) },
        { json: "DeteriorationTick", js: "DeteriorationTick", typ: u(0, null) },
        { json: "DeteriorationPercent", js: "DeteriorationPercent", typ: u(3.14, null) },
        { json: "AlwaysDeteriorate", js: "AlwaysDeteriorate", typ: u(true, null) },
        { json: "StructureHeightTag", js: "StructureHeightTag", typ: r("StructureHeightTag") },
        { json: "StructureSize", js: "StructureSize", typ: r("StructureSize") },
        { json: "CreationGameEventID", js: "CreationGameEventID", typ: r("CreationGameEventID") },
        { json: "ContributionGameEventID", js: "ContributionGameEventID", typ: r("ContributionGameEventID") },
        { json: "CompletionNotificationId", js: "CompletionNotificationId", typ: r("CompletionNotificationID") },
        { json: "BuildingTime", js: "BuildingTime", typ: u(0, null) },
        { json: "StructureCost_Ingredient1", js: "StructureCost_Ingredient1", typ: "" },
        { json: "StructureCost_Ingredient2", js: "StructureCost_Ingredient2", typ: "" },
        { json: "StructureCost_Ingredient3", js: "StructureCost_Ingredient3", typ: r("StructureCostIngredient3") },
        { json: "StructureCost_Ingredient4", js: "StructureCost_Ingredient4", typ: "" },
        { json: "StructureCost_Qty1", js: "StructureCost_Qty1", typ: u(0, null) },
        { json: "StructureCost_Qty2", js: "StructureCost_Qty2", typ: u(0, null) },
        { json: "StructureCost_Qty3", js: "StructureCost_Qty3", typ: u(0, null) },
        { json: "StructureCost_Qty4", js: "StructureCost_Qty4", typ: "" },
        { json: "DEFStandard", js: "DEFStandard", typ: "" },
        { json: "DEFSiege", js: "DEFSiege", typ: "" },
        { json: "DEFStrike", js: "DEFStrike", typ: "" },
        { json: "DEFSlash", js: "DEFSlash", typ: "" },
        { json: "DEFThrust", js: "DEFThrust", typ: "" },
        { json: "DEFMagic", js: "DEFMagic", typ: "" },
        { json: "DEFFire", js: "DEFFire", typ: "" },
        { json: "DEFLightning", js: "DEFLightning", typ: "" },
        { json: "DEFCorruption", js: "DEFCorruption", typ: "" },
        { json: "ABSStandard", js: "ABSStandard", typ: u(3.14, null) },
        { json: "ABSSiege", js: "ABSSiege", typ: u(3.14, null) },
        { json: "ABSStrike", js: "ABSStrike", typ: u(3.14, null) },
        { json: "ABSSlash", js: "ABSSlash", typ: u(3.14, null) },
        { json: "ABSThrust", js: "ABSThrust", typ: u(3.14, null) },
        { json: "ABSMagic", js: "ABSMagic", typ: u(3.14, null) },
        { json: "ABSFire", js: "ABSFire", typ: u(3.14, null) },
        { json: "ABSLightning", js: "ABSLightning", typ: u(3.14, null) },
        { json: "ABSCorruption", js: "ABSCorruption", typ: u(3.14, null) },
        { json: "RESPoison", js: "RESPoison", typ: "" },
        { json: "RESDisease", js: "RESDisease", typ: "" },
        { json: "RESBleed", js: "RESBleed", typ: "" },
        { json: "RESFrostbite", js: "RESFrostbite", typ: "" },
        { json: "RESCurse", js: "RESCurse", typ: "" },
        { json: "BLAStandard", js: "BLAStandard", typ: "" },
        { json: "BLASiege", js: "BLASiege", typ: "" },
        { json: "BLAStrike", js: "BLAStrike", typ: "" },
        { json: "BLASlash", js: "BLASlash", typ: "" },
        { json: "BLAThrust", js: "BLAThrust", typ: "" },
        { json: "BLAMagic", js: "BLAMagic", typ: "" },
        { json: "BLAFire", js: "BLAFire", typ: "" },
        { json: "BLALightning", js: "BLALightning", typ: "" },
        { json: "BLACorruption", js: "BLACorruption", typ: "" },
        { json: "ABAPoison", js: "ABAPoison", typ: "" },
        { json: "ABADisease", js: "ABADisease", typ: "" },
        { json: "ABABleed", js: "ABABleed", typ: "" },
        { json: "ABAFrostbite", js: "ABAFrostbite", typ: "" },
        { json: "ABACurse", js: "ABACurse", typ: "" },
        { json: "WKNStandard", js: "WKNStandard", typ: "" },
        { json: "WKNSiege", js: "WKNSiege", typ: u(3.14, null) },
        { json: "WKNStrike", js: "WKNStrike", typ: "" },
        { json: "WKNSlash", js: "WKNSlash", typ: "" },
        { json: "WKNThrust", js: "WKNThrust", typ: "" },
        { json: "WKNMagic", js: "WKNMagic", typ: "" },
        { json: "WKNFire", js: "WKNFire", typ: "" },
        { json: "WKNLightning", js: "WKNLightning", typ: "" },
        { json: "WKNCorruption", js: "WKNCorruption", typ: "" },
        { json: "DMGStandard", js: "DMGStandard", typ: "" },
        { json: "DMGSiege", js: "DMGSiege", typ: u(0, null) },
        { json: "DMGStrike", js: "DMGStrike", typ: "" },
        { json: "DMGSlash", js: "DMGSlash", typ: "" },
        { json: "DMGThrust", js: "DMGThrust", typ: "" },
        { json: "DMGMagic", js: "DMGMagic", typ: "" },
        { json: "DMGFire", js: "DMGFire", typ: "" },
        { json: "DMGLightning", js: "DMGLightning", typ: "" },
        { json: "DMGCorruption", js: "DMGCorruption", typ: "" },
        { json: "AFAPoison", js: "AFAPoison", typ: "" },
        { json: "AFADisease", js: "AFADisease", typ: "" },
        { json: "AFABleed", js: "AFABleed", typ: "" },
        { json: "AFAFrostbite", js: "AFAFrostbite", typ: "" },
        { json: "AFACurse", js: "AFACurse", typ: "" },
        { json: "DisableMantle", js: "DisableMantle", typ: u(0, null) },
        { json: "DisableStepUp", js: "DisableStepUp", typ: u(0, null) },
        { json: "DisableVaulting", js: "DisableVaulting", typ: u(0, null) },
        { json: "PrivilegeID", js: "PrivilegeID", typ: r("PrivilegeID") },
        { json: "PlacementGroundCastFilter", js: "PlacementGroundCastFilter", typ: r("PlacementGroundCastFilter") },
    ], false),
    "BuffBucketData": o([
        { json: "BuffBucketId", js: "BuffBucketId", typ: "" },
        { json: "TableType", js: "TableType", typ: r("TableType") },
        { json: "MaxRoll", js: "MaxRoll", typ: u(0, null) },
        { json: "Buff1", js: "Buff1", typ: "" },
        { json: "BuffType1", js: "BuffType1", typ: r("BuffType") },
        { json: "BuffPotency1", js: "BuffPotency1", typ: u(0, null) },
        { json: "Buff2", js: "Buff2", typ: "" },
        { json: "BuffType2", js: "BuffType2", typ: r("BuffType") },
        { json: "BuffPotency2", js: "BuffPotency2", typ: u(0, null) },
        { json: "Buff3", js: "Buff3", typ: "" },
        { json: "BuffType3", js: "BuffType3", typ: r("BuffType") },
        { json: "BuffPotency3", js: "BuffPotency3", typ: u(0, null) },
        { json: "Buff4", js: "Buff4", typ: "" },
        { json: "BuffType4", js: "BuffType4", typ: r("BuffType") },
        { json: "BuffPotency4", js: "BuffPotency4", typ: u(0, null) },
        { json: "Buff5", js: "Buff5", typ: "" },
        { json: "BuffType5", js: "BuffType5", typ: r("BuffType") },
        { json: "BuffPotency5", js: "BuffPotency5", typ: u(0, null) },
        { json: "Buff6", js: "Buff6", typ: "" },
        { json: "BuffType6", js: "BuffType6", typ: r("BuffType") },
        { json: "BuffPotency6", js: "BuffPotency6", typ: u(0, null) },
    ], false),
    "CameraShakeData": o([
        { json: "CameraShakeID", js: "CameraShakeID", typ: "" },
        { json: "ShakeShiftX", js: "ShakeShiftX", typ: 3.14 },
        { json: "ShakeShiftY", js: "ShakeShiftY", typ: 3.14 },
        { json: "ShakeShiftZ", js: "ShakeShiftZ", typ: 3.14 },
        { json: "ShakeAngleX", js: "ShakeAngleX", typ: 3.14 },
        { json: "ShakeAngleY", js: "ShakeAngleY", typ: 3.14 },
        { json: "ShakeAngleZ", js: "ShakeAngleZ", typ: 3.14 },
        { json: "SustainDuration", js: "SustainDuration", typ: 3.14 },
        { json: "FadeInDuration", js: "FadeInDuration", typ: 3.14 },
        { json: "FadeOutDuration", js: "FadeOutDuration", typ: 3.14 },
        { json: "Frequency", js: "Frequency", typ: 3.14 },
        { json: "Randomness", js: "Randomness", typ: 3.14 },
        { json: "ShakeChannel", js: "ShakeChannel", typ: 0 },
        { json: "FlipVec", js: "FlipVec", typ: 0 },
        { json: "UpdateOnly", js: "UpdateOnly", typ: 0 },
        { json: "Permanent", js: "Permanent", typ: 0 },
        { json: "IsSmooth", js: "IsSmooth", typ: 0 },
    ], false),
    "CampSkinData": o([
        { json: "CampSkinID", js: "CampSkinID", typ: "" },
        { json: "ItemId", js: "ItemId", typ: "" },
        { json: "RequiredAchievementId", js: "RequiredAchievementId", typ: r("EdAchievementID") },
        { json: "IsEntitlement", js: "IsEntitlement", typ: true },
        { json: "IsEnabled", js: "IsEnabled", typ: true },
    ], false),
    "CategoricalProgressionData": o([
        { json: "CategoricalProgressionId", js: "CategoricalProgressionId", typ: "" },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "MaxLevel", js: "MaxLevel", typ: 0 },
        { json: "AutoRankUp", js: "AutoRankUp", typ: true },
        { json: "InfiniteLevels", js: "InfiniteLevels", typ: true },
        { json: "RepeatMaxLevel", js: "RepeatMaxLevel", typ: true },
        { json: "AllowOverflow", js: "AllowOverflow", typ: u(true, null) },
        { json: "RankTableId", js: "RankTableId", typ: "" },
        { json: "ProgressionPointPool", js: "ProgressionPointPool", typ: "" },
        { json: "PreSkillCapSkill", js: "PreSkillCapSkill", typ: r("GatheringTradeskill") },
        { json: "PostSkillCapSkill", js: "PostSkillCapSkill", typ: "" },
        { json: "EconomyTrackerType", js: "EconomyTrackerType", typ: r("EconomyTrackerType") },
        { json: "GameEventId", js: "GameEventId", typ: "" },
        { json: "AchievementIdOnMaxRank", js: "AchievementIdOnMaxRank", typ: r("AchievementIDOnMaxRank") },
        { json: "MinTrackedLevel", js: "MinTrackedLevel", typ: u(0, null) },
        { json: "ShowAsObjectiveReward", js: "ShowAsObjectiveReward", typ: u(true, null) },
        { json: "IconPath", js: "IconPath", typ: "" },
        { json: "UsesGlobalProgressionMod", js: "UsesGlobalProgressionMod", typ: u(true, null) },
        { json: "ItemClass", js: "ItemClass", typ: "" },
        { json: "DisplayDescription", js: "DisplayDescription", typ: r("DisplayDescription") },
        { json: "EventId", js: "EventId", typ: r("EventID") },
    ], false),
    "CategoricalProgressionRankData": o([
        { json: "Rank", js: "Rank", typ: 0 },
        { json: "DisplayName", js: "DisplayName", typ: u(undefined, "") },
        { json: "MaximumInfluence", js: "MaximumInfluence", typ: 0 },
        { json: "RequiredLevel", js: "RequiredLevel", typ: u(undefined, u(0, "")) },
        { json: "InfluenceCost", js: "InfluenceCost", typ: u(0, null, "") },
        { json: "CurrencyCost", js: "CurrencyCost", typ: u(undefined, u(0, "")) },
        { json: "SanityCheck", js: "SanityCheck", typ: u(true, null, "") },
        { json: "GameEventId", js: "GameEventId", typ: u(undefined, "") },
        { json: "AvailableProgressionPoint1", js: "AvailableProgressionPoint1", typ: u(undefined, r("AvailableProgressionPoint")) },
        { json: "AvailableProgressionPoint2", js: "AvailableProgressionPoint2", typ: u(undefined, r("AvailableProgressionPoint2")) },
        { json: "AvailableProgressionPoint3", js: "AvailableProgressionPoint3", typ: u(undefined, r("AvailableProgressionPoint")) },
        { json: "AvailableProgressionPoint4", js: "AvailableProgressionPoint4", typ: u(undefined, r("AvailableProgressionPoint4")) },
        { json: "AzothCost", js: "AzothCost", typ: u(undefined, u(0, "")) },
        { json: "MinMissionCountPVE", js: "MinMissionCountPVE", typ: u(undefined, u(0, null)) },
        { json: "MaxMissionCountPVE", js: "MaxMissionCountPVE", typ: u(undefined, u(0, null)) },
        { json: "MinMissionCountPvP", js: "MinMissionCountPvP", typ: u(undefined, u(0, null)) },
        { json: "MaxMissionCountPvP", js: "MaxMissionCountPvP", typ: u(undefined, u(0, null)) },
        { json: "EntitlementId", js: "EntitlementId", typ: u(undefined, u(0, null, "")) },
        { json: "XpReward", js: "XpReward", typ: u(undefined, u(0, null)) },
        { json: "AdditionalProgressionPoints", js: "AdditionalProgressionPoints", typ: u(undefined, 0) },
        { json: "AzothRespecCost", js: "AzothRespecCost", typ: u(undefined, 0) },
    ], false),
    "CinematicVideoStaticData": o([
        { json: "CinematicVideoId", js: "CinematicVideoId", typ: "" },
        { json: "VideoPath", js: "VideoPath", typ: "" },
        { json: "Name", js: "Name", typ: "" },
        { json: "ReqAchievementId", js: "ReqAchievementId", typ: "" },
        { json: "OnWatchedAchievementId", js: "OnWatchedAchievementId", typ: "" },
        { json: "DurationInSec", js: "DurationInSec", typ: 0 },
        { json: "Description", js: "Description", typ: "" },
        { json: "Subtitle", js: "Subtitle", typ: "" },
        { json: "Comment", js: "Comment", typ: "" },
    ], false),
    "CollectibleStaticData": o([
        { json: "CollectibleId", js: "CollectibleId", typ: "" },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "CategoricalId", js: "CategoricalId", typ: "" },
        { json: "Icon", js: "Icon", typ: "" },
        { json: "Description", js: "Description", typ: "" },
        { json: "TerritoryId", js: "TerritoryId", typ: 0 },
    ], false),
    "CombatTextSettings": o([
        { json: "ValueID", js: "ValueID", typ: "" },
        { json: "Value", js: "Value", typ: "" },
    ], false),
    "ConsumableItemDefinitions": o([
        { json: "ConsumableID", js: "ConsumableID", typ: "" },
        { json: "AddStatusEffects", js: "AddStatusEffects", typ: "" },
        { json: "StatusEffectMod", js: "StatusEffectMod", typ: u(0, null) },
        { json: "DurationOverrides", js: "DurationOverrides", typ: u(0, null) },
        { json: "MinDurationModifier", js: "MinDurationModifier", typ: u(0, null) },
        { json: "MaxDurationModifier", js: "MaxDurationModifier", typ: u(0, null) },
        { json: "DurationScaleFactor", js: "DurationScaleFactor", typ: u(0, null) },
        { json: "MinPotencyModifier", js: "MinPotencyModifier", typ: u(0, null) },
        { json: "MaxPotencyModifier", js: "MaxPotencyModifier", typ: u(3.14, null) },
        { json: "PotencyScaleFactor", js: "PotencyScaleFactor", typ: u(0, null) },
        { json: "RemoveStatusEffects", js: "RemoveStatusEffects", typ: "" },
        { json: "RemoveStatusEffectCategories", js: "RemoveStatusEffectCategories", typ: "" },
        { json: "DisplayStatusEffect", js: "DisplayStatusEffect", typ: "" },
        { json: "UseCount", js: "UseCount", typ: u(0, null) },
        { json: "WeaponUseCount", js: "WeaponUseCount", typ: "" },
        { json: "DisableUseInCombat", js: "DisableUseInCombat", typ: u(true, null) },
        { json: "AfflictionDamage", js: "AfflictionDamage", typ: "" },
        { json: "BaseDamageModifier", js: "BaseDamageModifier", typ: "" },
        { json: "BaseDamageType", js: "BaseDamageType", typ: "" },
        { json: "DamageType", js: "DamageType", typ: "" },
        { json: "Damage", js: "Damage", typ: "" },
        { json: "DMGVitalsCategory", js: "DMGVitalsCategory", typ: "" },
        { json: "OnUseAffliction", js: "OnUseAffliction", typ: "" },
        { json: "StatMultipliers", js: "StatMultipliers", typ: "" },
        { json: "RequiredItemClass", js: "RequiredItemClass", typ: "" },
        { json: "MannequinTag", js: "MannequinTag", typ: r("ConsumableItemDefinitionMannequinTag") },
        { json: "EquipAbility", js: "EquipAbility", typ: "" },
        { json: "CooldownDuration", js: "CooldownDuration", typ: u(0, null) },
        { json: "CooldownId", js: "CooldownId", typ: r("CooldownID") },
    ], false),
    "ContributionData": o([
        { json: "ContributionId", js: "ContributionId", typ: "" },
        { json: "Category", js: "Category", typ: r("CardIDEnum") },
        { json: "Value", js: "Value", typ: 0 },
        { json: "Shared", js: "Shared", typ: true },
        { json: "Expires", js: "Expires", typ: true },
    ], false),
    "ConversationStateData": o([
        { json: "ConversationStateId", js: "ConversationStateId", typ: "" },
        { json: "ConversationType", js: "ConversationType", typ: r("ConversationType") },
        { json: "IsInitialState", js: "IsInitialState", typ: true },
        { json: "DefaultDialogue", js: "DefaultDialogue", typ: "" },
        { json: "RequiredFaction", js: "RequiredFaction", typ: r("RequiredFaction") },
        { json: "RequiredProgression", js: "RequiredProgression", typ: u(undefined, r("RequiredProgression")) },
        { json: "RequiredLevel", js: "RequiredLevel", typ: u(0, null, "") },
        { json: "RequiredAchievement", js: "RequiredAchievement", typ: "" },
        { json: "RequiredActiveObjectiveId", js: "RequiredActiveObjectiveId", typ: "" },
        { json: "RequiredActiveTaskId", js: "RequiredActiveTaskId", typ: "" },
        { json: "LinearObjectiveId1", js: "LinearObjectiveId1", typ: "" },
        { json: "LinearObjectiveId2", js: "LinearObjectiveId2", typ: r("LinearObjectiveId2") },
        { json: "LinearObjectiveId3", js: "LinearObjectiveId3", typ: r("LinearObjectiveId3") },
        { json: "LinearObjectiveId4", js: "LinearObjectiveId4", typ: r("LinearObjectiveId4") },
        { json: "LinearObjectiveId5", js: "LinearObjectiveId5", typ: "" },
        { json: "LinearObjectiveId6", js: "LinearObjectiveId6", typ: "" },
        { json: "LinearObjectiveId7", js: "LinearObjectiveId7", typ: "" },
        { json: "LinearObjectiveId8", js: "LinearObjectiveId8", typ: "" },
        { json: "LinearObjectiveId9", js: "LinearObjectiveId9", typ: "" },
        { json: "LinearObjectiveId10", js: "LinearObjectiveId10", typ: "" },
        { json: "TopicId1", js: "TopicId1", typ: u(undefined, "") },
        { json: "TopicId2", js: "TopicId2", typ: u(undefined, r("TopicId2")) },
        { json: "TopicId3", js: "TopicId3", typ: u(undefined, r("TopicId3")) },
        { json: "TopicId4", js: "TopicId4", typ: u(undefined, "") },
        { json: "TopicId5", js: "TopicId5", typ: u(undefined, "") },
        { json: "TopicId6", js: "TopicId6", typ: u(undefined, "") },
        { json: "TopicId7", js: "TopicId7", typ: u(undefined, "") },
        { json: "TopicId8", js: "TopicId8", typ: u(undefined, "") },
        { json: "TopicId9", js: "TopicId9", typ: u(undefined, "") },
        { json: "TopicId10", js: "TopicId10", typ: u(undefined, "") },
        { json: "ConversationService1", js: "ConversationService1", typ: u(undefined, r("ConversationService1")) },
        { json: "ConversationService2", js: "ConversationService2", typ: u(undefined, r("ConversationService2")) },
        { json: "ConversationService3", js: "ConversationService3", typ: u(undefined, "") },
        { json: "Comments", js: "Comments", typ: u(undefined, "") },
        { json: "ShowTopics", js: "ShowTopics", typ: u(undefined, true) },
        { json: "RequiredCompletedObjective", js: "RequiredCompletedObjective", typ: u(undefined, r("RequiredCompletedObjective")) },
        { json: "RequiredFactionCooldown", js: "RequiredFactionCooldown", typ: u(undefined, r("RequiredFactionCooldown")) },
        { json: "Comment", js: "Comment", typ: u(undefined, "") },
    ], false),
    "ConversationTopicData": o([
        { json: "ConversationTopicId", js: "ConversationTopicId", typ: "" },
        { json: "PlayerPrompt", js: "PlayerPrompt", typ: "" },
        { json: "NPCResponse", js: "NPCResponse", typ: "" },
        { json: "AchievementUnlock", js: "AchievementUnlock", typ: "" },
        { json: "RequiredAchievement", js: "RequiredAchievement", typ: u(undefined, "") },
        { json: "RequiredFaction", js: "RequiredFaction", typ: u(undefined, r("RequiredFaction")) },
        { json: "RequiredLevel", js: "RequiredLevel", typ: u(undefined, u(0, null, "")) },
        { json: "ProvidedTopics", js: "ProvidedTopics", typ: u(undefined, "") },
    ], false),
    "CooldownsPlayer": o([
        { json: "ID", js: "ID", typ: 0 },
        { json: "AbilityID", js: "AbilityID", typ: "" },
        { json: "Time", js: "Time", typ: 0 },
        { json: "WeaponTag", js: "WeaponTag", typ: r("WeaponTag") },
    ], false),
    "CraftingCategoryData": o([
        { json: "CategoryID", js: "CategoryID", typ: "" },
        { json: "ImagePath", js: "ImagePath", typ: "" },
        { json: "DisplayText", js: "DisplayText", typ: "" },
        { json: "Description", js: "Description", typ: "" },
    ], false),
    "CraftingRecipeData": o([
        { json: "RecipeID", js: "RecipeID", typ: "" },
        { json: "FirstCraftAchievementId", js: "FirstCraftAchievementId", typ: "" },
        { json: "RecipeNameOverride", js: "RecipeNameOverride", typ: "" },
        { json: "CraftingCategory", js: "CraftingCategory", typ: r("EventID") },
        { json: "CraftingGroup", js: "CraftingGroup", typ: "" },
        { json: "AdditionalFilterText", js: "AdditionalFilterText", typ: "" },
        { json: "RecipeTags", js: "RecipeTags", typ: r("RecipeTags") },
        { json: "DisplayIngredients", js: "DisplayIngredients", typ: "" },
        { json: "bKnownByDefault", js: "bKnownByDefault", typ: u(true, null) },
        { json: "bListedByDefault", js: "bListedByDefault", typ: u(true, null) },
        { json: "CraftAll", js: "CraftAll", typ: u(true, null) },
        { json: "IsRefining", js: "IsRefining", typ: u(true, null) },
        { json: "IsProcedural", js: "IsProcedural", typ: u(true, null) },
        { json: "MaxPerkItemsAllowed", js: "MaxPerkItemsAllowed", typ: u(0, null) },
        { json: "PerkItemsBucketPush", js: "PerkItemsBucketPush", typ: u(true, null) },
        { json: "ExpertiseBumpChanceOverride", js: "ExpertiseBumpChanceOverride", typ: u(3.14, null) },
        { json: "IsExpertiseBasedGS", js: "IsExpertiseBasedGS", typ: u(true, null) },
        { json: "HWMProgressionID", js: "HWMProgressionID", typ: "" },
        { json: "IsTemporary", js: "IsTemporary", typ: u(true, null) },
        { json: "CraftingFee", js: "CraftingFee", typ: u(0, null) },
        { json: "UseCraftingTax", js: "UseCraftingTax", typ: u(0, null) },
        { json: "Tradeskill", js: "Tradeskill", typ: r("GatheringTradeskill") },
        { json: "RecipeLevel", js: "RecipeLevel", typ: u(0, null) },
        { json: "StationType1", js: "StationType1", typ: r("StationType1") },
        { json: "StationType2", js: "StationType2", typ: r("StationType2") },
        { json: "StationType3", js: "StationType3", typ: "" },
        { json: "StationType4", js: "StationType4", typ: "" },
        { json: "CraftingTime", js: "CraftingTime", typ: u(0, null) },
        { json: "OutputQty", js: "OutputQty", typ: u(0, null) },
        { json: "ItemID", js: "ItemID", typ: "" },
        { json: "SkipGrantItems", js: "SkipGrantItems", typ: u(true, null) },
        { json: "SkipGrantItemsDesc", js: "SkipGrantItemsDesc", typ: r("SkipGrantItemsDesc") },
        { json: "SkipGrantItemsTitle", js: "SkipGrantItemsTitle", typ: r("SkipGrantItemsTitle") },
        { json: "SkipGrantItemsBody", js: "SkipGrantItemsBody", typ: r("SkipGrantItemsBody") },
        { json: "BaseGearScore", js: "BaseGearScore", typ: u(0, null) },
        { json: "BaseTier", js: "BaseTier", typ: u(0, null) },
        { json: "ProceduralTierID1", js: "ProceduralTierID1", typ: r("ProceduralTierId1") },
        { json: "ProceduralTierID2", js: "ProceduralTierID2", typ: "" },
        { json: "ProceduralTierID3", js: "ProceduralTierID3", typ: "" },
        { json: "ProceduralTierID4", js: "ProceduralTierID4", typ: "" },
        { json: "ProceduralTierID5", js: "ProceduralTierID5", typ: "" },
        { json: "RequiredAchievementID", js: "RequiredAchievementID", typ: "" },
        { json: "UnlockedAchievementID", js: "UnlockedAchievementID", typ: r("EdAchievementID") },
        { json: "UnlockedAchievementBlocksRecrafting", js: "UnlockedAchievementBlocksRecrafting", typ: u(true, null) },
        { json: "Ingredient1", js: "Ingredient1", typ: "" },
        { json: "Type1", js: "Type1", typ: r("Type1Enum") },
        { json: "Ingredient2", js: "Ingredient2", typ: "" },
        { json: "Type2", js: "Type2", typ: r("Type1Enum") },
        { json: "Ingredient3", js: "Ingredient3", typ: "" },
        { json: "Type3", js: "Type3", typ: r("Type1Enum") },
        { json: "Ingredient4", js: "Ingredient4", typ: "" },
        { json: "Type4", js: "Type4", typ: r("Type1Enum") },
        { json: "Ingredient5", js: "Ingredient5", typ: "" },
        { json: "Type5", js: "Type5", typ: r("Type1Enum") },
        { json: "Ingredient6", js: "Ingredient6", typ: "" },
        { json: "Type6", js: "Type6", typ: r("Type1Enum") },
        { json: "Ingredient7", js: "Ingredient7", typ: r("Ingredient7") },
        { json: "Type7", js: "Type7", typ: r("Type1Enum") },
        { json: "Qty1", js: "Qty1", typ: u(0, null) },
        { json: "Qty2", js: "Qty2", typ: u(0, null) },
        { json: "Qty3", js: "Qty3", typ: u(0, null) },
        { json: "Qty4", js: "Qty4", typ: u(0, null) },
        { json: "Qty5", js: "Qty5", typ: u(0, null) },
        { json: "Qty6", js: "Qty6", typ: u(0, null) },
        { json: "Qty7", js: "Qty7", typ: u(0, null) },
        { json: "GameEventID", js: "GameEventID", typ: "" },
        { json: "Game Event Validation", js: "Game Event Validation", typ: u(true, null) },
        { json: "CooldownSeconds", js: "CooldownSeconds", typ: u(0, null) },
        { json: "CooldownQuantity", js: "CooldownQuantity", typ: u(0, null) },
        { json: "GearScoreBonus", js: "GearScoreBonus", typ: r("GearScoreBonus") },
        { json: "GearScoreReduction", js: "GearScoreReduction", typ: r("GearScoreReduction") },
        { json: "BonusItemChance", js: "BonusItemChance", typ: u(3.14, null) },
        { json: "BonusItemChanceIncrease", js: "BonusItemChanceIncrease", typ: "" },
        { json: "BonusItemChanceDecrease", js: "BonusItemChanceDecrease", typ: "" },
        { json: "AttributeCost", js: "AttributeCost", typ: u(0, null) },
        { json: "PerkCost", js: "PerkCost", typ: u(0, null) },
        { json: "GemSlotCost", js: "GemSlotCost", typ: u(0, null) },
    ], false),
    "CrestPartData": o([
        { json: "Index", js: "Index", typ: 0 },
        { json: "OldIndex", js: "OldIndex", typ: 0 },
        { json: "isForeground", js: "isForeground", typ: true },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "EntitlementId", js: "EntitlementId", typ: "" },
        { json: "Image", js: "Image", typ: "" },
        { json: "Color", js: "Color", typ: "" },
        { json: "isEntitlement", js: "isEntitlement", typ: true },
        { json: "isEnabled", js: "isEnabled", typ: true },
        { json: "Faction", js: "Faction", typ: r("Faction") },
        { json: "Notes", js: "Notes", typ: "" },
        { json: "Intent", js: "Intent", typ: r("Intent") },
    ], false),
    "CurrencyExchangeData": o([
        { json: "ConversionID", js: "ConversionID", typ: "" },
        { json: "FromCurrencyId", js: "FromCurrencyId", typ: "" },
        { json: "FromCurrencyIsCategoricalProgression", js: "FromCurrencyIsCategoricalProgression", typ: true },
        { json: "FromCurrencyQuantity", js: "FromCurrencyQuantity", typ: 0 },
        { json: "ToCurrencyId", js: "ToCurrencyId", typ: "" },
        { json: "ToCurrencyIsCategoricalProgression", js: "ToCurrencyIsCategoricalProgression", typ: true },
        { json: "ToCurrencyQuantity", js: "ToCurrencyQuantity", typ: 0 },
    ], false),
    "CurseMutationStaticData": o([
        { json: "CurseMutationId", js: "CurseMutationId", typ: "" },
        { json: "CurseMinor", js: "CurseMinor", typ: "" },
        { json: "CurseMajor", js: "CurseMajor", typ: "" },
        { json: "GlobalAffliction", js: "GlobalAffliction", typ: "" },
        { json: "Name", js: "Name", typ: "" },
        { json: "Description", js: "Description", typ: "" },
        { json: "IconPath", js: "IconPath", typ: "" },
    ], false),
    "CutsceneCameraStaticData": o([
        { json: "CutsceneCameraId", js: "CutsceneCameraId", typ: "" },
        { json: "CameraState", js: "CameraState", typ: "" },
        { json: "CameraStateOrigin", js: "CameraStateOrigin", typ: "" },
        { json: "CameraStateLookAt", js: "CameraStateLookAt", typ: "" },
        { json: "EnterBlendTime", js: "EnterBlendTime", typ: 0 },
        { json: "ExitBlendTime", js: "ExitBlendTime", typ: "" },
        { json: "HideUIOnTrigger", js: "HideUIOnTrigger", typ: "" },
        { json: "OriginEnterBlendTime", js: "OriginEnterBlendTime", typ: "" },
        { json: "OriginExitBlendTime", js: "OriginExitBlendTime", typ: "" },
        { json: "UseAbsolutePos", js: "UseAbsolutePos", typ: "" },
        { json: "HidePlayerAvatar", js: "HidePlayerAvatar", typ: "" },
        { json: "HideNearbyPlayerAvatars", js: "HideNearbyPlayerAvatars", typ: "" },
        { json: "BlockPlayerInput", js: "BlockPlayerInput", typ: "" },
        { json: "CancelInventory", js: "CancelInventory", typ: "" },
        { json: "InterruptInCombat", js: "InterruptInCombat", typ: "" },
        { json: "InterruptOnMovement", js: "InterruptOnMovement", typ: "" },
        { json: "CanSkip", js: "CanSkip", typ: "" },
        { json: "PlayFadeEffect", js: "PlayFadeEffect", typ: "" },
        { json: "BannerTitleLabelText", js: "BannerTitleLabelText", typ: "" },
        { json: "BannerTitleText", js: "BannerTitleText", typ: "" },
        { json: "BannerDescriptionText", js: "BannerDescriptionText", typ: "" },
    ], false),
    "DamageData": o([
        { json: "DamageID", js: "DamageID", typ: "" },
        { json: "WeaponCategory", js: "WeaponCategory", typ: "" },
        { json: "IgnoreInvulnerable", js: "IgnoreInvulnerable", typ: u(true, 0, null, "") },
        { json: "NoReaction", js: "NoReaction", typ: u(true, 0, null, "") },
        { json: "IsRanged", js: "IsRanged", typ: u(undefined, u(true, 0, null, "")) },
        { json: "IsAbility", js: "IsAbility", typ: u(undefined, u(true, null, "")) },
        { json: "AttackType", js: "AttackType", typ: u(undefined, r("IgnoreDisabledAttackTypes")) },
        { json: "DamageType", js: "DamageType", typ: r("DamageTypes") },
        { json: "Affliction", js: "Affliction", typ: u(undefined, r("Affliction")) },
        { json: "AddAffliction", js: "AddAffliction", typ: u(undefined, u(r("DamageTypes"), 0, null)) },
        { json: "AfflictionPercent", js: "AfflictionPercent", typ: u(undefined, u(0, null, "")) },
        { json: "StatusEffect", js: "StatusEffect", typ: u(undefined, "") },
        { json: "EffectOnlyOnDamage", js: "EffectOnlyOnDamage", typ: u(undefined, u(true, 0, null, "")) },
        { json: "SurfaceImpactEffect", js: "SurfaceImpactEffect", typ: r("IgnoreDisabledAttackTypes") },
        { json: "DeflectDamageID", js: "DeflectDamageID", typ: u(undefined, u(true, r("DeflectDamageIDEnum"), null)) },
        { json: "CanCrit", js: "CanCrit", typ: u(undefined, u(true, null, "")) },
        { json: "Unblockable", js: "Unblockable", typ: u(undefined, u(true, 0, null, "")) },
        { json: "AttackDealsNoDurability", js: "AttackDealsNoDurability", typ: u(undefined, u(true, null, "")) },
        { json: "NoHeadshot", js: "NoHeadshot", typ: u(undefined, u(true, null)) },
        { json: "NoBackstab", js: "NoBackstab", typ: u(undefined, u(true, null, "")) },
        { json: "NoLegShots", js: "NoLegShots", typ: u(undefined, u(true, null, "")) },
        { json: "CancelTargetHoming", js: "CancelTargetHoming", typ: u(undefined, u(true, null, "")) },
        { json: "DmgCoef", js: "DmgCoef", typ: u(3.14, null) },
        { json: "DmgCoefHead", js: "DmgCoefHead", typ: 3.14 },
        { json: "DmgCoefCrit", js: "DmgCoefCrit", typ: u(undefined, u(3.14, null, "")) },
        { json: "DurabilityCostOverride", js: "DurabilityCostOverride", typ: u(undefined, u(0, null, "")) },
        { json: "PowerLevel", js: "PowerLevel", typ: u(0, null) },
        { json: "BlockPowerLevel", js: "BlockPowerLevel", typ: u(0, null) },
        { json: "CritPowerLevel", js: "CritPowerLevel", typ: u(undefined, u(3.14, null, "")) },
        { json: "HitStun", js: "HitStun", typ: u(0, null) },
        { json: "BlockHitStun", js: "BlockHitStun", typ: u(0, null) },
        { json: "CritHitStun", js: "CritHitStun", typ: u(undefined, u(0, null, "")) },
        { json: "ImpactDistanceX", js: "ImpactDistanceX", typ: u(3.14, null) },
        { json: "ImpactDistanceY", js: "ImpactDistanceY", typ: u(3.14, null) },
        { json: "ImpactDistanceZ", js: "ImpactDistanceZ", typ: u(3.14, null) },
        { json: "ImpactDecayRate", js: "ImpactDecayRate", typ: u(3.14, null) },
        { json: "BlockImpactDistanceX", js: "BlockImpactDistanceX", typ: u(3.14, null) },
        { json: "BlockImpactDistanceY", js: "BlockImpactDistanceY", typ: u(3.14, null) },
        { json: "BlockImpactDistanceZ", js: "BlockImpactDistanceZ", typ: u(3.14, null) },
        { json: "BlockImpactDecayRate", js: "BlockImpactDecayRate", typ: u(3.14, null) },
        { json: "CritImpactDistanceX", js: "CritImpactDistanceX", typ: u(undefined, u(3.14, null, "")) },
        { json: "CritImpactDistanceY", js: "CritImpactDistanceY", typ: u(undefined, u(3.14, null, "")) },
        { json: "CritImpactDistanceZ", js: "CritImpactDistanceZ", typ: u(undefined, u(3.14, null, "")) },
        { json: "CritImpactDecayRate", js: "CritImpactDecayRate", typ: u(undefined, u(3.14, null, "")) },
        { json: "AddDmg", js: "AddDmg", typ: u(3.14, null) },
        { json: "StaggerDmgModifier", js: "StaggerDmgModifier", typ: u(undefined, u(3.14, null, "")) },
        { json: "StaggerResistModifier", js: "StaggerResistModifier", typ: u(undefined, u(3.14, null, "")) },
        { json: "CritStaggerDmgModifier", js: "CritStaggerDmgModifier", typ: u(undefined, u(3.14, null, "")) },
        { json: "HitRateDmgModifier", js: "HitRateDmgModifier", typ: u(undefined, u(3.14, null, "")) },
        { json: "MaxHitRateDmgMod", js: "MaxHitRateDmgMod", typ: u(undefined, u(3.14, null)) },
        { json: "CameraShakeID", js: "CameraShakeID", typ: u(undefined, "") },
        { json: "TargetCameraShakeID", js: "TargetCameraShakeID", typ: u(undefined, "") },
        { json: "BlockCameraShakeID", js: "BlockCameraShakeID", typ: u(undefined, r("StructureSize")) },
        { json: "BlockTargetCameraShakeID", js: "BlockTargetCameraShakeID", typ: u(undefined, r("StructureSize")) },
        { json: "CritCameraShakeID", js: "CritCameraShakeID", typ: u(undefined, "") },
        { json: "CritTargetCameraShakeID", js: "CritTargetCameraShakeID", typ: u(undefined, r("StructureSize")) },
        { json: "ImpactRating", js: "ImpactRating", typ: u(0, null, "") },
        { json: "BlockStaminaDmgMod", js: "BlockStaminaDmgMod", typ: u(3.14, null) },
        { json: "BlockAbsorptionModifier", js: "BlockAbsorptionModifier", typ: u(3.14, null, "") },
        { json: "LOSCheckVerticalAngleOffset", js: "LOSCheckVerticalAngleOffset", typ: u(undefined, u(3.14, null, "")) },
        { json: "StunBreakoutIncrement", js: "StunBreakoutIncrement", typ: u(undefined, u(3.14, null)) },
        { json: "ThreatMultiplier", js: "ThreatMultiplier", typ: u(undefined, u(3.14, null)) },
        { json: "AddThreat", js: "AddThreat", typ: u(undefined, u(0, null)) },
        { json: "IsTaunt", js: "IsTaunt", typ: u(undefined, u(true, null)) },
        { json: "TauntDuration", js: "TauntDuration", typ: u(undefined, u(0, null)) },
        { json: "TauntThreatBoostPercentage", js: "TauntThreatBoostPercentage", typ: u(undefined, u(3.14, null)) },
        { json: "TauntMinimumThreatValue", js: "TauntMinimumThreatValue", typ: u(undefined, u(0, null)) },
        { json: "UseAttackerPosForReaction", js: "UseAttackerPosForReaction", typ: u(undefined, u(true, null, "")) },
        { json: "AttackRuneCharge", js: "AttackRuneCharge", typ: u(undefined, u(3.14, null)) },
        { json: "AttackBlockedRuneCharge", js: "AttackBlockedRuneCharge", typ: u(undefined, u(3.14, null)) },
        { json: "HitRuneCharge", js: "HitRuneCharge", typ: u(undefined, u(3.14, null)) },
        { json: "HitBlockedRuneCharge", js: "HitBlockedRuneCharge", typ: u(undefined, u(3.14, null)) },
        { json: "Affixes", js: "Affixes", typ: u(undefined, r("Affixes")) },
        { json: "StaminaDmg", js: "StaminaDmg", typ: u(undefined, u(0, null)) },
        { json: "DamageGuildAndGroup", js: "DamageGuildAndGroup", typ: u(undefined, u(true, null, "")) },
        { json: "HungerDmg", js: "HungerDmg", typ: u(undefined, 0) },
        { json: "ThirstDmg", js: "ThirstDmg", typ: u(undefined, 0) },
        { json: "stunBreakoutIncrementer", js: "stunBreakoutIncrementer", typ: u(undefined, u(0, null, "")) },
        { json: "IsSiege", js: "IsSiege", typ: u(undefined, u(true, null)) },
        { json: "DamageReceiverCooldown", js: "DamageReceiverCooldown", typ: u(undefined, u(3.14, null)) },
        { json: "CanBeBlocked", js: "CanBeBlocked", typ: u(undefined, u(true, null)) },
        { json: "IgnoreSheatheStatus", js: "IgnoreSheatheStatus", typ: u(undefined, u(true, null)) },
        { json: "EffectWhenNotBlocked", js: "EffectWhenNotBlocked", typ: u(undefined, u(true, null)) },
    ], false),
    "DamageTypeData": o([
        { json: "TypeID", js: "TypeID", typ: r("DamageTypes") },
        { json: "IntID", js: "IntID", typ: 0 },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "Category", js: "Category", typ: r("DamageTypeDatumCategory") },
        { json: "Affliction", js: "Affliction", typ: "" },
        { json: "AfflictionFrac", js: "AfflictionFrac", typ: 0 },
        { json: "DefenseBonusFrac", js: "DefenseBonusFrac", typ: 0 },
        { json: "MitigationBonusFrac", js: "MitigationBonusFrac", typ: 0 },
        { json: "DamageBonusAgainst", js: "DamageBonusAgainst", typ: r("HairChop") },
        { json: "DamageBonusFrac", js: "DamageBonusFrac", typ: 0 },
        { json: "UseAllDamageModifiers", js: "UseAllDamageModifiers", typ: r("UseAllDamageModifiers") },
    ], false),
    "DataPointData": o([
        { json: "DataPointId", js: "DataPointId", typ: "" },
        { json: "Type", js: "Type", typ: "" },
        { json: "Cycle", js: "Cycle", typ: r("Cycle") },
        { json: "DungeonId", js: "DungeonId", typ: r("DungeonID") },
        { json: "MutatorLevel", js: "MutatorLevel", typ: u(0, null) },
        { json: "GameEventType", js: "GameEventType", typ: r("ExcludeFromGameModes") },
        { json: "IsPvP", js: "IsPvP", typ: r("IsMajor") },
        { json: "IsWar", js: "IsWar", typ: r("IsMajor") },
        { json: "IsMajor", js: "IsMajor", typ: r("IsMajor") },
        { json: "IsWin", js: "IsWin", typ: r("IsMajor") },
    ], false),
    "DivertedLootData": o([
        { json: "Id", js: "Id", typ: "" },
        { json: "CountToNextLevel", js: "CountToNextLevel", typ: 0 },
        { json: "TimeframeSeconds", js: "TimeframeSeconds", typ: 0 },
        { json: "YellowDivertedLootModifier", js: "YellowDivertedLootModifier", typ: 0 },
        { json: "RedDivertedLootModifier", js: "RedDivertedLootModifier", typ: 0 },
        { json: "YellowXpMultiplier", js: "YellowXpMultiplier", typ: 3.14 },
        { json: "RedXpMultiplier", js: "RedXpMultiplier", typ: 3.14 },
        { json: "GreenNotificationLocTag", js: "GreenNotificationLocTag", typ: "" },
        { json: "YellowNotificationLocTag", js: "YellowNotificationLocTag", typ: "" },
        { json: "RedNotificationLocTag", js: "RedNotificationLocTag", typ: "" },
    ], false),
    "DyeColorData": o([
        { json: "Index", js: "Index", typ: 0 },
        { json: "Name", js: "Name", typ: "" },
        { json: "Color", js: "Color", typ: "" },
        { json: "Category", js: "Category", typ: "" },
        { json: "IsEntitlement", js: "IsEntitlement", typ: 0 },
        { json: "ColorAmount", js: "ColorAmount", typ: 0 },
        { json: "ColorOverride", js: "ColorOverride", typ: 3.14 },
        { json: "SpecColor", js: "SpecColor", typ: "" },
        { json: "SpecAmount", js: "SpecAmount", typ: 3.14 },
        { json: "MaskGlossShift", js: "MaskGlossShift", typ: 3.14 },
    ], false),
    "DyeItemDefinitions": o([
        { json: "DyeItemId", js: "DyeItemId", typ: "" },
        { json: "ColorIndex", js: "ColorIndex", typ: 0 },
        { json: "NameNote", js: "NameNote", typ: "" },
        { json: "BoolNote", js: "BoolNote", typ: "" },
    ], false),
    "EconomyTrackerData": o([
        { json: "EconomyTrackerID", js: "EconomyTrackerID", typ: "" },
        { json: "AlarmType", js: "AlarmType", typ: r("AlarmType") },
        { json: "ThresholdConfig1", js: "ThresholdConfig1", typ: "" },
        { json: "MetricName1", js: "MetricName1", typ: "" },
        { json: "EnableMetric1", js: "EnableMetric1", typ: true },
        { json: "ThresholdConfig2", js: "ThresholdConfig2", typ: "" },
        { json: "MetricName2", js: "MetricName2", typ: "" },
        { json: "EnableMetric2", js: "EnableMetric2", typ: u(true, null) },
    ], false),
    "ElementalMutationStaticData": o([
        { json: "ElementalMutationId", js: "ElementalMutationId", typ: "" },
        { json: "Name", js: "Name", typ: "" },
        { json: "Description", js: "Description", typ: "" },
        { json: "CategoryWildcard", js: "CategoryWildcard", typ: "" },
        { json: "ElementalDifficultyTier", js: "ElementalDifficultyTier", typ: 0 },
        { json: "Dungeon-", js: "Dungeon-", typ: "" },
        { json: "Dungeon", js: "Dungeon", typ: "" },
        { json: "Dungeon+", js: "Dungeon+", typ: "" },
        { json: "DungeonMiniBoss", js: "DungeonMiniBoss", typ: "" },
        { json: "IconPath", js: "IconPath", typ: "" },
        { json: "TextColor", js: "TextColor", typ: "" },
        { json: "BackgroundColor", js: "BackgroundColor", typ: "" },
    ], false),
    "EmoteData": o([
        { json: "UniqueTagID", js: "UniqueTagID", typ: "" },
        { json: "FragmentName", js: "FragmentName", typ: "" },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "DisplayDescription", js: "DisplayDescription", typ: "" },
        { json: "DisplayGroup", js: "DisplayGroup", typ: r("DisplayGroup") },
        { json: "ChatBoxText", js: "ChatBoxText", typ: "" },
        { json: "SlashCommand", js: "SlashCommand", typ: "" },
        { json: "SecondarySlashCommand", js: "SecondarySlashCommand", typ: "" },
        { json: "IsEntitlement", js: "IsEntitlement", typ: 0 },
        { json: "IsPremiumEmote", js: "IsPremiumEmote", typ: 0 },
        { json: "IsEnabled", js: "IsEnabled", typ: 0 },
        { json: "HasCooldown", js: "HasCooldown", typ: 0 },
        { json: "DisplayPriority", js: "DisplayPriority", typ: 0 },
        { json: "UiImage", js: "UiImage", typ: "" },
        { json: "UiImageHiRes", js: "UiImageHiRes", typ: "" },
        { json: "GatherableTags", js: "GatherableTags", typ: r("GatherableTags") },
        { json: "EmoteDuration", js: "EmoteDuration", typ: u(0, null) },
        { json: "AttributionId", js: "AttributionId", typ: r("AttributionID") },
    ], false),
    "EncumbranceData": o([
        { json: "ContainerTypeID", js: "ContainerTypeID", typ: "" },
        { json: "EncumbranceBaseMax", js: "EncumbranceBaseMax", typ: 0 },
        { json: "EncumbranceWarningPercent", js: "EncumbranceWarningPercent", typ: 0 },
        { json: "EquipLoadBaseMax", js: "EquipLoadBaseMax", typ: 0 },
        { json: "EquipLoadWarningPercent", js: "EquipLoadWarningPercent", typ: 0 },
        { json: "FullWhenEncumbered", js: "FullWhenEncumbered", typ: 0 },
        { json: "EquipLoadRatioFast", js: "EquipLoadRatioFast", typ: 0 },
        { json: "EquipLoadRatioNormal", js: "EquipLoadRatioNormal", typ: 0 },
        { json: "EquipLoadRatioSlow", js: "EquipLoadRatioSlow", typ: 0 },
        { json: "EquipLoadRatioOverburdened", js: "EquipLoadRatioOverburdened", typ: 0 },
        { json: "EquipLoadStaminaCostMultFast", js: "EquipLoadStaminaCostMultFast", typ: 0 },
        { json: "EquipLoadStaminaCostMultNormal", js: "EquipLoadStaminaCostMultNormal", typ: 0 },
        { json: "EquipLoadStaminaCostMultSlow", js: "EquipLoadStaminaCostMultSlow", typ: 0 },
        { json: "EquipLoadStaminaCostMultOverburdened", js: "EquipLoadStaminaCostMultOverburdened", typ: 0 },
        { json: "EquipLoadStaminaRegenMultFast", js: "EquipLoadStaminaRegenMultFast", typ: 0 },
        { json: "EquipLoadStaminaRegenMultNormal", js: "EquipLoadStaminaRegenMultNormal", typ: 0 },
        { json: "EquipLoadStaminaRegenMultSlow", js: "EquipLoadStaminaRegenMultSlow", typ: 0 },
        { json: "EquipLoadStaminaRegenMultOverburdened", js: "EquipLoadStaminaRegenMultOverburdened", typ: 0 },
        { json: "EquipLoadMoveSpeedMultFast", js: "EquipLoadMoveSpeedMultFast", typ: 0 },
        { json: "EquipLoadMoveSpeedMultNormal", js: "EquipLoadMoveSpeedMultNormal", typ: 0 },
        { json: "EquipLoadMoveSpeedMultSlow", js: "EquipLoadMoveSpeedMultSlow", typ: 0 },
        { json: "EquipLoadMoveSpeedMultOverburdened", js: "EquipLoadMoveSpeedMultOverburdened", typ: 0 },
        { json: "EquipLoadGritResistMultFast", js: "EquipLoadGritResistMultFast", typ: 0 },
        { json: "EquipLoadGritResistMultNormal", js: "EquipLoadGritResistMultNormal", typ: 0 },
        { json: "EquipLoadGritResistMultSlow", js: "EquipLoadGritResistMultSlow", typ: 0 },
        { json: "EquipLoadGritResistMultOverburdened", js: "EquipLoadGritResistMultOverburdened", typ: 0 },
        { json: "EquipLoadDefenseMultFast", js: "EquipLoadDefenseMultFast", typ: 0 },
        { json: "EquipLoadDefenseMultNormal", js: "EquipLoadDefenseMultNormal", typ: 0 },
        { json: "EquipLoadDefenseMultSlow", js: "EquipLoadDefenseMultSlow", typ: 0 },
        { json: "EquipLoadDefenseMultOverburdened", js: "EquipLoadDefenseMultOverburdened", typ: 0 },
        { json: "EquipLoadBlockStabilityMultFast", js: "EquipLoadBlockStabilityMultFast", typ: 0 },
        { json: "EquipLoadBlockStabilityMultNormal", js: "EquipLoadBlockStabilityMultNormal", typ: 0 },
        { json: "EquipLoadBlockStabilityMultSlow", js: "EquipLoadBlockStabilityMultSlow", typ: 3.14 },
        { json: "EquipLoadBlockStabilityMultOverburdened", js: "EquipLoadBlockStabilityMultOverburdened", typ: 0 },
        { json: "EquipLoadStanceWeaponAccuracyFast", js: "EquipLoadStanceWeaponAccuracyFast", typ: 3.14 },
        { json: "EquipLoadStanceWeaponAccuracyNormal", js: "EquipLoadStanceWeaponAccuracyNormal", typ: 3.14 },
        { json: "EquipLoadStanceWeaponAccuracySlow", js: "EquipLoadStanceWeaponAccuracySlow", typ: 3.14 },
        { json: "EquipLoadMovementWeaponAccuracyFast", js: "EquipLoadMovementWeaponAccuracyFast", typ: 3.14 },
        { json: "EquipLoadMovementWeaponAccuracyNormal", js: "EquipLoadMovementWeaponAccuracyNormal", typ: 3.14 },
        { json: "EquipLoadMovementWeaponAccuracySlow", js: "EquipLoadMovementWeaponAccuracySlow", typ: 3.14 },
        { json: "EquipLoadDamageMultFast", js: "EquipLoadDamageMultFast", typ: u(3.14, null) },
        { json: "EquipLoadDamageMultNormal", js: "EquipLoadDamageMultNormal", typ: u(3.14, null) },
        { json: "EquipLoadDamageMultSlow", js: "EquipLoadDamageMultSlow", typ: u(0, null) },
        { json: "EquipLoadDamageOverburdened", js: "EquipLoadDamageOverburdened", typ: u(0, null) },
        { json: "EquipLoadHealMultFast", js: "EquipLoadHealMultFast", typ: u(3.14, null) },
        { json: "EquipLoadHealMultNormal", js: "EquipLoadHealMultNormal", typ: u(0, null) },
        { json: "EquipLoadHealMultSlow", js: "EquipLoadHealMultSlow", typ: u(3.14, null) },
        { json: "EquipLoadCCStatusEffectDurationMultFast", js: "EquipLoadCCStatusEffectDurationMultFast", typ: u(0, null) },
        { json: "EquipLoadCCStatusEffectDurationMultNormal", js: "EquipLoadCCStatusEffectDurationMultNormal", typ: u(0, null) },
        { json: "EquipLoadCCStatusEffectDurationMultSlow", js: "EquipLoadCCStatusEffectDurationMultSlow", typ: u(0, null) },
        { json: "EquipLoadCCStatusEffectDurationMultOverburdened", js: "EquipLoadCCStatusEffectDurationMultOverburdened", typ: u(0, null) },
        { json: "EquipLoadCCStatusEffectCategories", js: "EquipLoadCCStatusEffectCategories", typ: "" },
    ], false),
    "EntitlementData": o([
        { json: "UniqueTagID", js: "UniqueTagID", typ: "" },
        { json: "EntitlementIndex", js: "EntitlementIndex", typ: 0 },
        { json: "IsEnabled", js: "IsEnabled", typ: true },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "Description", js: "Description", typ: "" },
        { json: "IsConsumable", js: "IsConsumable", typ: u(true, null) },
        { json: "Icon", js: "Icon", typ: "" },
        { json: "RewardType", js: "RewardType", typ: r("ItemTypeEnum") },
        { json: "Reward(s)", js: "Reward(s)", typ: "" },
        { json: "EntitlementInfo", js: "EntitlementInfo", typ: "" },
        { json: "SourceType", js: "SourceType", typ: r("SourceType") },
        { json: "AchievementId", js: "AchievementId", typ: r("AchievementID") },
        { json: "Notes", js: "Notes", typ: r("EntitlementDatumNotes") },
    ], false),
    "ExperienceData": o([
        { json: "Level Number", js: "Level Number", typ: 0 },
        { json: "XPToLevel", js: "XPToLevel", typ: 0 },
        { json: "XPAlarmThreshold1", js: "XPAlarmThreshold1", typ: 0 },
        { json: "XPAlarmThreshold2", js: "XPAlarmThreshold2", typ: 0 },
        { json: "PlayTimeAlarmThresholdMins1", js: "PlayTimeAlarmThresholdMins1", typ: 0 },
        { json: "PlayTimeAlarmThresholdMins2", js: "PlayTimeAlarmThresholdMins2", typ: 0 },
        { json: "AttributePoints", js: "AttributePoints", typ: 0 },
        { json: "Health", js: "Health", typ: 0 },
        { json: "TradeSkillPoints", js: "TradeSkillPoints", typ: 0 },
        { json: "AttributeRespecCost", js: "AttributeRespecCost", typ: 0 },
        { json: "CanFreeAttributeRespec", js: "CanFreeAttributeRespec", typ: 0 },
        { json: "LootTagValue", js: "LootTagValue", typ: 0 },
        { json: "DefStandard", js: "DefStandard", typ: 0 },
        { json: "DefSlash", js: "DefSlash", typ: 0 },
        { json: "DefStrike", js: "DefStrike", typ: 0 },
        { json: "DefMagic", js: "DefMagic", typ: 0 },
        { json: "DefFire", js: "DefFire", typ: 0 },
        { json: "DefLightning", js: "DefLightning", typ: 0 },
        { json: "DefCorruption", js: "DefCorruption", typ: 0 },
        { json: "ResFrost", js: "ResFrost", typ: 0 },
        { json: "ResPoison", js: "ResPoison", typ: 0 },
        { json: "ResBleed", js: "ResBleed", typ: 0 },
        { json: "ResDisease", js: "ResDisease", typ: 0 },
        { json: "ResCurse", js: "ResCurse", typ: 0 },
        { json: "RecipeLevel", js: "RecipeLevel", typ: 0 },
        { json: "RollBonus", js: "RollBonus", typ: 0 },
        { json: "MinGearScoreBonus", js: "MinGearScoreBonus", typ: 0 },
        { json: "MaxGearScoreBonus", js: "MaxGearScoreBonus", typ: 0 },
        { json: "RespawnCooldownMod", js: "RespawnCooldownMod", typ: 0 },
        { json: "EffectId", js: "EffectId", typ: r("EffectID") },
        { json: "BlueprintId", js: "BlueprintId", typ: r("BlueprintID") },
        { json: "IsMilestone", js: "IsMilestone", typ: u(true, null) },
        { json: "Tooltip", js: "Tooltip", typ: "" },
        { json: "MaxEquippableGearScore", js: "MaxEquippableGearScore", typ: 0 },
        { json: "IgnoreItemRarity", js: "IgnoreItemRarity", typ: true },
        { json: "GSLimitT1", js: "GSLimitT1", typ: r("GSLimitT1") },
        { json: "GSLimitT2", js: "GSLimitT2", typ: "" },
        { json: "GSLimitT3", js: "GSLimitT3", typ: "" },
        { json: "GSLimitT4", js: "GSLimitT4", typ: "" },
        { json: "GSLimitT5", js: "GSLimitT5", typ: "" },
        { json: "GSBonusCritter", js: "GSBonusCritter", typ: "" },
        { json: "GSBonusSolo", js: "GSBonusSolo", typ: "" },
        { json: "GSBonusSolo-", js: "GSBonusSolo-", typ: "" },
        { json: "GSBonusSolo+", js: "GSBonusSolo+", typ: "" },
        { json: "GSBonusGroup", js: "GSBonusGroup", typ: "" },
        { json: "GSBonusGroup-", js: "GSBonusGroup-", typ: "" },
        { json: "GSBonusGroup+", js: "GSBonusGroup+", typ: "" },
        { json: "GSBonusBoss", js: "GSBonusBoss", typ: "" },
        { json: "HouseTrophySlots", js: "HouseTrophySlots", typ: 0 },
    ], false),
    "FactionControlBuffDefinitions": o([
        { json: "FactionControlBuffID", js: "FactionControlBuffID", typ: "" },
        { json: "IsTerritoryBuff", js: "IsTerritoryBuff", typ: true },
        { json: "Value", js: "Value", typ: 3.14 },
        { json: "Name", js: "Name", typ: "" },
        { json: "Description", js: "Description", typ: "" },
        { json: "Comments", js: "Comments", typ: "" },
    ], false),
    "FactionData": o([
        { json: "FactionType", js: "FactionType", typ: "" },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "DisplayDesc", js: "DisplayDesc", typ: "" },
        { json: "ForegroundColorIndex", js: "ForegroundColorIndex", typ: 0 },
        { json: "ForegroundCrestIndex", js: "ForegroundCrestIndex", typ: 0 },
        { json: "BackgroundColorIndex", js: "BackgroundColorIndex", typ: 0 },
        { json: "BackgroundCrestIndex", js: "BackgroundCrestIndex", typ: 0 },
        { json: "RequiredAchievementId", js: "RequiredAchievementId", typ: "" },
        { json: "RequiredLegacyAchievementId", js: "RequiredLegacyAchievementId", typ: "" },
    ], false),
    "FishData": o([
        { json: "FishId", js: "FishId", typ: "" },
        { json: "Size", js: "Size", typ: r("StructureSize") },
        { json: "FishingXp", js: "FishingXp", typ: 0 },
        { json: "MinWeight", js: "MinWeight", typ: 0 },
        { json: "MaxWeight", js: "MaxWeight", typ: 0 },
        { json: "IsSmall", js: "IsSmall", typ: true },
        { json: "IsMedium", js: "IsMedium", typ: true },
        { json: "IsLarge", js: "IsLarge", typ: true },
    ], false),
    "FishingBaitData": o([
        { json: "Id", js: "Id", typ: "" },
        { json: "FishRarityRollModifier", js: "FishRarityRollModifier", typ: 3.14 },
        { json: "FishSizeRollModifier", js: "FishSizeRollModifier", typ: 3.14 },
        { json: "SummerFishRarityRollModifier", js: "SummerFishRarityRollModifier", typ: 0 },
        { json: "RequiredWaterTags", js: "RequiredWaterTags", typ: r("RequiredWaterTags") },
        { json: "ActiveAtDawn", js: "ActiveAtDawn", typ: true },
        { json: "ActiveAtDaytime", js: "ActiveAtDaytime", typ: true },
        { json: "ActiveAtDusk", js: "ActiveAtDusk", typ: true },
        { json: "ActiveAtNight", js: "ActiveAtNight", typ: true },
        { json: "LootTableId", js: "LootTableId", typ: r("FishingBaitDatumLootTableID") },
        { json: "TimeToNibbleSecondsMultiplier", js: "TimeToNibbleSecondsMultiplier", typ: 3.14 },
    ], false),
    "FishingBehaviorsData": o([
        { json: "Id", js: "Id", typ: "" },
        { json: "FishBehaviorPattern", js: "FishBehaviorPattern", typ: 0 },
        { json: "FishBehaviorLocalizationKey", js: "FishBehaviorLocalizationKey", typ: "" },
    ], false),
    "FishingCatchablesData": o([
        { json: "Id", js: "Id", typ: "" },
        { json: "FishSize", js: "FishSize", typ: r("StructureSize") },
        { json: "FishWeightRange", js: "FishWeightRange", typ: "" },
        { json: "FishLengthRange", js: "FishLengthRange", typ: "" },
        { json: "FishingXp", js: "FishingXp", typ: 0 },
        { json: "FishDistanceSwamAwayPerSecond", js: "FishDistanceSwamAwayPerSecond", typ: 3.14 },
        { json: "LineTensionGainPerSecondMultiplier", js: "LineTensionGainPerSecondMultiplier", typ: 3.14 },
        { json: "FishBehaviors", js: "FishBehaviors", typ: "" },
        { json: "ZoomCameraOnSuccess", js: "ZoomCameraOnSuccess", typ: true },
        { json: "FishCharacterDefinitionPath", js: "FishCharacterDefinitionPath", typ: "" },
        { json: "FishScale", js: "FishScale", typ: 3.14 },
        { json: "RewardGameEventId", js: "RewardGameEventId", typ: "" },
    ], false),
    "FishingHotspotsData": o([
        { json: "Id", js: "Id", typ: "" },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "FishRarityRollModifier", js: "FishRarityRollModifier", typ: 3.14 },
        { json: "FishSizeRollModifier", js: "FishSizeRollModifier", typ: 0 },
        { json: "SummerFishRarityRollModifier", js: "SummerFishRarityRollModifier", typ: 0 },
        { json: "LootTableId", js: "LootTableId", typ: r("FishingHotspotsDatumLootTableID") },
        { json: "LootTag", js: "LootTag", typ: r("LootTag") },
        { json: "RequiredLevel", js: "RequiredLevel", typ: 0 },
        { json: "TimeToNibbleSecondsRange", js: "TimeToNibbleSecondsRange", typ: r("TimeToNibbleSecondsRange") },
        { json: "TimeToBiteSecondsRange", js: "TimeToBiteSecondsRange", typ: r("TimeToBiteSecondsRange") },
    ], false),
    "FishingPolesData": o([
        { json: "Id", js: "Id", typ: "" },
        { json: "CastDistanceRange", js: "CastDistanceRange", typ: "" },
        { json: "FishRarityRollModifier", js: "FishRarityRollModifier", typ: 3.14 },
        { json: "FishSizeRollModifier", js: "FishSizeRollModifier", typ: 0 },
        { json: "SummerFishRarityRollModifier", js: "SummerFishRarityRollModifier", typ: 3.14 },
        { json: "FishReelTimeSeconds", js: "FishReelTimeSeconds", typ: 0 },
        { json: "LineTensionGainPerSecond", js: "LineTensionGainPerSecond", typ: 3.14 },
        { json: "LineTensionRecoverPerSecond", js: "LineTensionRecoverPerSecond", typ: 3.14 },
    ], false),
    "FishingWaterData": o([
        { json: "Id", js: "Id", typ: "" },
        { json: "TimeToNibbleSecondsRange", js: "TimeToNibbleSecondsRange", typ: "" },
        { json: "TimeToBiteSecondsRange", js: "TimeToBiteSecondsRange", typ: r("TimeToBiteSecondsRange") },
    ], false),
    "GameEventData": o([
        { json: "EventID", js: "EventID", typ: "" },
        { json: "GameEventType", js: "GameEventType", typ: r("GameEventType") },
        { json: "Level", js: "Level", typ: u(0, null) },
        { json: "CreatureType", js: "CreatureType", typ: r("CreatureTypeEnum") },
        { json: "RewardModifier", js: "RewardModifier", typ: u(undefined, "") },
        { json: "UniversalExpAmount", js: "UniversalExpAmount", typ: u(0, null, "") },
        { json: "CurrencyReward", js: "CurrencyReward", typ: u(0, null, "") },
        { json: "ItemReward", js: "ItemReward", typ: "" },
        { json: "RewardsNotes", js: "RewardsNotes", typ: u(undefined, "") },
        { json: "GearScoreRange", js: "GearScoreRange", typ: u(0, null, "") },
        { json: "CategoricalProgressionId", js: "CategoricalProgressionId", typ: "" },
        { json: "CategoricalProgressionReward", js: "CategoricalProgressionReward", typ: u(0, null, "") },
        { json: "TerritoryStanding", js: "TerritoryStanding", typ: u(0, null, "") },
        { json: "FactionReputation", js: "FactionReputation", typ: u(0, null, "") },
        { json: "FactionTokens", js: "FactionTokens", typ: u(undefined, u(0, null, "")) },
        { json: "FactionInfluenceAmount", js: "FactionInfluenceAmount", typ: u(0, null, "") },
        { json: "FactionInfluenceSrc", js: "FactionInfluenceSrc", typ: r("FactionInfluenceSrc") },
        { json: "EmitTelemetry", js: "EmitTelemetry", typ: u(true, null) },
        { json: "AzothReward", js: "AzothReward", typ: u(3.14, null, "") },
        { json: "AzothRewardChance", js: "AzothRewardChance", typ: u(3.14, null) },
        { json: "WhisperId", js: "WhisperId", typ: u(undefined, "") },
        { json: "WhisperID", js: "WhisperID", typ: u(undefined, "") },
        { json: "RewardNote", js: "RewardNote", typ: u(undefined, r("RewardNote")) },
        { json: "RewardNotes", js: "RewardNotes", typ: u(undefined, r("RewardNotes")) },
        { json: "IgnoreEconomyTracker", js: "IgnoreEconomyTracker", typ: u(undefined, u(true, null)) },
        { json: "PVPXP", js: "PVPXP", typ: u(undefined, u(0, null)) },
        { json: "Rewards Notes", js: "Rewards Notes", typ: u(undefined, r("RewardsNotes")) },
        { json: "Reward Type", js: "Reward Type", typ: u(undefined, r("RewardType")) },
        { json: "UseRestedExp", js: "UseRestedExp", typ: u(undefined, "") },
        { json: "CoinRewardChance", js: "CoinRewardChance", typ: u(undefined, u(3.14, null)) },
        { json: "ItemRewardQty", js: "ItemRewardQty", typ: u(undefined, u(0, null)) },
        { json: "LootTags", js: "LootTags", typ: u(undefined, r("LootTags")) },
        { json: "AzothSalt", js: "AzothSalt", typ: u(undefined, u(0, null)) },
        { json: "AzothSaltChance", js: "AzothSaltChance", typ: u(undefined, u(0, null)) },
        { json: "PvpXp", js: "PvpXp", typ: u(undefined, u(0, null)) },
        { json: "EntitlementId", js: "EntitlementId", typ: u(undefined, r("EntitlementID")) },
        { json: "StatusEffectId", js: "StatusEffectId", typ: u(undefined, r("StatusEffectID")) },
        { json: "RemoveStatusEffects", js: "RemoveStatusEffects", typ: u(undefined, "") },
        { json: "RemoveStatusEffectCategories", js: "RemoveStatusEffectCategories", typ: u(undefined, r("GameEventDatumRemoveStatusEffectCategories")) },
        { json: "LootLimitId", js: "LootLimitId", typ: u(undefined, r("LootLimitID")) },
        { json: "LootLimitReachedGameEventId", js: "LootLimitReachedGameEventId", typ: u(undefined, r("LootLimitReachedGameEventID")) },
        { json: "LootLimitReachedGameEventKeepOverrides", js: "LootLimitReachedGameEventKeepOverrides", typ: u(undefined, "") },
        { json: "LeaderboardValue", js: "LeaderboardValue", typ: u(undefined, u(0, null)) },
        { json: "SeasonsXp", js: "SeasonsXp", typ: u(undefined, u(0, null)) },
    ], false),
    "GameModeData": o([
        { json: "GameModeId", js: "GameModeId", typ: r("GameModeID") },
        { json: "ScriptName", js: "ScriptName", typ: r("GameModeID") },
        { json: "SlicePath", js: "SlicePath", typ: "" },
        { json: "RequiresTeamRaids", js: "RequiresTeamRaids", typ: "" },
        { json: "AdvanceThroughStatesOnUpdate", js: "AdvanceThroughStatesOnUpdate", typ: "" },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "Description", js: "Description", typ: "" },
        { json: "UiInteractOption", js: "UiInteractOption", typ: "" },
        { json: "RequirementText", js: "RequirementText", typ: "" },
        { json: "IconPath", js: "IconPath", typ: "" },
        { json: "SimpleImagePath", js: "SimpleImagePath", typ: "" },
        { json: "BackgroundImagePath", js: "BackgroundImagePath", typ: "" },
        { json: "CoatlicueName", js: "CoatlicueName", typ: "" },
        { json: "WorldBounds", js: "WorldBounds", typ: "" },
        { json: "TeamTeleportData", js: "TeamTeleportData", typ: "" },
        { json: "FeatureFlag", js: "FeatureFlag", typ: "" },
        { json: "PurchasableItemClasses", js: "PurchasableItemClasses", typ: "" },
        { json: "PurchasableItemClassesRestrictedToMode", js: "PurchasableItemClassesRestrictedToMode", typ: r("ItemClassesToRemoveOnExit") },
        { json: "NonPurchasableItemClasses", js: "NonPurchasableItemClasses", typ: "" },
        { json: "ItemClassesToRemoveOnExit", js: "ItemClassesToRemoveOnExit", typ: r("ItemClassesToRemoveOnExit") },
        { json: "RequiredConsumableItemClasses", js: "RequiredConsumableItemClasses", typ: "" },
        { json: "DisabledItemClasses", js: "DisabledItemClasses", typ: r("DisabledItemClasses") },
        { json: "ClearBattleTokensOnExit", js: "ClearBattleTokensOnExit", typ: "" },
        { json: "RequiresGameModeGDEException", js: "RequiresGameModeGDEException", typ: "" },
        { json: "RequiredLevel", js: "RequiredLevel", typ: u(0, null) },
        { json: "QueueLevelBuckets", js: "QueueLevelBuckets", typ: r("QueueLevelBuckets") },
        { json: "QueueReadyThreshold", js: "QueueReadyThreshold", typ: u(0, null) },
        { json: "BackfillReadyThreshold", js: "BackfillReadyThreshold", typ: u(0, null) },
        { json: "NumTeams", js: "NumTeams", typ: u(0, null) },
        { json: "TeamCapacity", js: "TeamCapacity", typ: u(0, null) },
        { json: "CombineTeamGroups", js: "CombineTeamGroups", typ: u(true, null) },
        { json: "ModeNameLocStringId", js: "ModeNameLocStringId", typ: r("ModeNameLOCStringIDEnum") },
        { json: "GearScoreOverrideValueMin", js: "GearScoreOverrideValueMin", typ: u(0, null) },
        { json: "GearScoreOverrideValueMax", js: "GearScoreOverrideValueMax", typ: u(0, null) },
        { json: "MinPlayerLevelToUseGearScoreOverride", js: "MinPlayerLevelToUseGearScoreOverride", typ: u(0, null) },
        { json: "MaxPlayerLevelToUseGearScoreOverride", js: "MaxPlayerLevelToUseGearScoreOverride", typ: u(0, null) },
        { json: "PossibleItemDropIds", js: "PossibleItemDropIds", typ: "" },
        { json: "MinGroupSize", js: "MinGroupSize", typ: u(0, null) },
        { json: "PreserveOldGroup", js: "PreserveOldGroup", typ: u(true, null) },
        { json: "IsDungeon", js: "IsDungeon", typ: u(true, null) },
        { json: "IsRaidTrial", js: "IsRaidTrial", typ: null },
        { json: "IsMutable", js: "IsMutable", typ: u(true, null) },
        { json: "DifficultyProgressionId", js: "DifficultyProgressionId", typ: "" },
        { json: "RestrictGathering", js: "RestrictGathering", typ: true },
        { json: "RestrictWaterGathering", js: "RestrictWaterGathering", typ: true },
        { json: "MapId", js: "MapId", typ: "" },
        { json: "LootTags", js: "LootTags", typ: "" },
        { json: "MutLootTagsOverride", js: "MutLootTagsOverride", typ: r("MutLootTagsOverride") },
        { json: "ContainerLevel", js: "ContainerLevel", typ: u(0, null) },
        { json: "ContainerGS", js: "ContainerGS", typ: u(0, null) },
        { json: "MutContainerGSOverride", js: "MutContainerGSOverride", typ: u(0, null) },
        { json: "VictoryDelaySec", js: "VictoryDelaySec", typ: u(0, null) },
        { json: "MaxAI", js: "MaxAI", typ: r("AIDespawnRadius") },
        { json: "AISpawnRadius", js: "AISpawnRadius", typ: r("AIDespawnRadius") },
        { json: "AIDespawnRadius", js: "AIDespawnRadius", typ: r("AIDespawnRadius") },
        { json: "ProjectedCpuUsePercent", js: "ProjectedCpuUsePercent", typ: u(3.14, null) },
        { json: "ProjectedMemoryUseMb", js: "ProjectedMemoryUseMb", typ: u(0, null) },
        { json: "ProjectedDurationMinutes", js: "ProjectedDurationMinutes", typ: u(0, null) },
        { json: "Priority", js: "Priority", typ: u(0, null) },
        { json: "ImmediateLaunch", js: "ImmediateLaunch", typ: u(true, null) },
        { json: "PauseTimeOfDay", js: "PauseTimeOfDay", typ: true },
        { json: "FreezeTime", js: "FreezeTime", typ: 3.14 },
        { json: "AILevelAdjustedPerceptionEnabled", js: "AILevelAdjustedPerceptionEnabled", typ: true },
        { json: "AILeashingOptOut", js: "AILeashingOptOut", typ: true },
        { json: "DisableDeathsDoor", js: "DisableDeathsDoor", typ: u(true, null) },
        { json: "DisableMSQTrackersOnHud", js: "DisableMSQTrackersOnHud", typ: u(true, null) },
        { json: "AIPreventEnemyTraining", js: "AIPreventEnemyTraining", typ: true },
        { json: "UseTeamNamePlate", js: "UseTeamNamePlate", typ: true },
        { json: "QuitButtonTextId", js: "QuitButtonTextId", typ: r("QuitButtonTextID") },
        { json: "CannotFastTravelTextId", js: "CannotFastTravelTextId", typ: r("CannotFastTravelTextID") },
        { json: "LeaveDescTextId", js: "LeaveDescTextId", typ: r("LeaveDescTextID") },
        { json: "LeaveTimeDescTextId", js: "LeaveTimeDescTextId", typ: r("LeaveTimeDescTextID") },
        { json: "LeaveTitleTextId", js: "LeaveTitleTextId", typ: r("LeaveTitleTextID") },
        { json: "WarBoardStatDefinitions", js: "WarBoardStatDefinitions", typ: r("WarBoardStatDefinitions") },
        { json: "WarBoardAttackerTeamIdx", js: "WarBoardAttackerTeamIdx", typ: u(0, null) },
        { json: "WarBoardDefenderTeamIdx", js: "WarBoardDefenderTeamIdx", typ: u(0, null) },
        { json: "RaidInviteDelaySec", js: "RaidInviteDelaySec", typ: 0 },
        { json: "RaidInviteDurationSec", js: "RaidInviteDurationSec", typ: 0 },
        { json: "BackfillDelaySec", js: "BackfillDelaySec", typ: 0 },
        { json: "PriorityAddMin", js: "PriorityAddMin", typ: u(0, null) },
        { json: "PriorityAddMax", js: "PriorityAddMax", typ: u(0, null) },
        { json: "AllowPvpValueAccumulation", js: "AllowPvpValueAccumulation", typ: u(true, null) },
        { json: "MinAcceptedInvites", js: "MinAcceptedInvites", typ: u(0, null) },
        { json: "UsePendingListMatchmaking", js: "UsePendingListMatchmaking", typ: true },
        { json: "AutoEquipQuickslot", js: "AutoEquipQuickslot", typ: u(true, null) },
        { json: "GrantConsumables", js: "GrantConsumables", typ: "" },
        { json: "OverrideDungeonTimeout", js: "OverrideDungeonTimeout", typ: "" },
        { json: "SpecialQueueGroupSizes", js: "SpecialQueueGroupSizes", typ: u(0, null) },
        { json: "ResetChargeOnEnter", js: "ResetChargeOnEnter", typ: u(true, null) },
        { json: "ShouldShowAcceptedFlow", js: "ShouldShowAcceptedFlow", typ: u(true, null) },
        { json: "ScreenHeaderTextId", js: "ScreenHeaderTextId", typ: r("ScreenHeaderTextID") },
        { json: "JoinButtonTextId", js: "JoinButtonTextId", typ: r("JoinButtonTextID") },
        { json: "SignupTitleTextId", js: "SignupTitleTextId", typ: r("ModeNameLOCStringIDEnum") },
        { json: "LeaveQueueTitleTextId", js: "LeaveQueueTitleTextId", typ: r("LeaveQueueTitleTextID") },
        { json: "LeaveQueueDescriptionTextId", js: "LeaveQueueDescriptionTextId", typ: r("LeaveQueueDescriptionTextID") },
        { json: "FailGroupPenaltyTextId", js: "FailGroupPenaltyTextId", typ: r("FailGroupPenaltyTextID") },
        { json: "RespawnTypeToUseForUnstuck", js: "RespawnTypeToUseForUnstuck", typ: r("RespawnTypeToUseForUnstuck") },
    ], false),
    "GatherableData": o([
        { json: "GatherableID", js: "GatherableID", typ: "" },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "GatheringAction", js: "GatheringAction", typ: r("Gathering") },
        { json: "GatheringType", js: "GatheringType", typ: r("Gathering") },
        { json: "GatheringFragment", js: "GatheringFragment", typ: r("GatheringFragment") },
        { json: "FinalLootTable", js: "FinalLootTable", typ: "" },
        { json: "LootTableDefaultMaterial", js: "LootTableDefaultMaterial", typ: "" },
        { json: "MinRespawnRate", js: "MinRespawnRate", typ: 0 },
        { json: "MaxRespawnRate", js: "MaxRespawnRate", typ: 3.14 },
        { json: "Tradeskill", js: "Tradeskill", typ: r("GatheringTradeskill") },
        { json: "RequiredTradeskillLevel", js: "RequiredTradeskillLevel", typ: u(0, null) },
        { json: "DepletedGatherableID", js: "DepletedGatherableID", typ: u(0, null) },
        { json: "BaseGatherTime", js: "BaseGatherTime", typ: 3.14 },
        { json: "WaitForImpact", js: "WaitForImpact", typ: true },
        { json: "Restriction", js: "Restriction", typ: r("Restriction") },
        { json: "AlignGatherer", js: "AlignGatherer", typ: u(true, null) },
        { json: "GameEventID", js: "GameEventID", typ: "" },
        { json: "ItemRestrictionId", js: "ItemRestrictionId", typ: "" },
        { json: "ItemRestrictionQuantity", js: "ItemRestrictionQuantity", typ: "" },
        { json: "RequiredSongId", js: "RequiredSongId", typ: "" },
        { json: "SongRewardId", js: "SongRewardId", typ: "" },
        { json: "ResetGatherTimeOnEndInteraction", js: "ResetGatherTimeOnEndInteraction", typ: u(true, null) },
        { json: "IsLootContainer", js: "IsLootContainer", typ: u(true, null) },
        { json: "IsDynamicPoiTarget", js: "IsDynamicPoiTarget", typ: u(true, null) },
        { json: "RequireLootItems", js: "RequireLootItems", typ: "" },
        { json: "IconTypeUnlock", js: "IconTypeUnlock", typ: "" },
        { json: "IgnoreAllObstructions", js: "IgnoreAllObstructions", typ: u(true, null) },
        { json: "ObstructBuildables", js: "ObstructBuildables", typ: u(true, null) },
        { json: "RequireControllingFaction", js: "RequireControllingFaction", typ: u(true, null) },
        { json: "AddedStatusEffect", js: "AddedStatusEffect", typ: r("EdStatusEffect") },
        { json: "RequiredStatusEffect", js: "RequiredStatusEffect", typ: r("EdStatusEffect") },
        { json: "ConsumedStatusEffect", js: "ConsumedStatusEffect", typ: r("EdStatusEffect") },
        { json: "NumRequiredToGather", js: "NumRequiredToGather", typ: u(0, null) },
        { json: "UsableEmoteTags", js: "UsableEmoteTags", typ: "" },
        { json: "DisplayDescription", js: "DisplayDescription", typ: "" },
        { json: "IsLandmark", js: "IsLandmark", typ: null },
        { json: "TooltipImage", js: "TooltipImage", typ: "" },
        { json: "LandmarkIconPath", js: "LandmarkIconPath", typ: "" },
        { json: "RequiredWhisperId", js: "RequiredWhisperId", typ: r("RequiredWhisperID") },
    ], false),
    "GearScoreUpgradeDefinition": o([
        { json: "Level", js: "Level", typ: 0 },
        { json: "RequiredItemId", js: "RequiredItemId", typ: r("GearScoreUpgradeDefinitionRequiredItemID") },
        { json: "RequiredItemQuantity", js: "RequiredItemQuantity", typ: 0 },
    ], false),
    "GeneratorRecipes": o([
        { json: "StructureID", js: "StructureID", typ: "" },
        { json: "Tickrate", js: "Tickrate", typ: 0 },
        { json: "OutputItem", js: "OutputItem", typ: "" },
        { json: "OutputQty", js: "OutputQty", typ: u(0, null) },
        { json: "TooltipText", js: "TooltipText", typ: "" },
        { json: "FuelCategory", js: "FuelCategory", typ: "" },
        { json: "TickrateProximityFactor", js: "TickrateProximityFactor", typ: u(3.14, null) },
    ], false),
    "GenericInviteData": o([
        { json: "ActivityCrc", js: "ActivityCrc", typ: "" },
        { json: "ActivityType", js: "ActivityType", typ: 0 },
        { json: "DurationSec", js: "DurationSec", typ: 0 },
        { json: "Teams", js: "Teams", typ: u(0, null) },
        { json: "MinLevel", js: "MinLevel", typ: u(0, null) },
        { json: "MaxLevel", js: "MaxLevel", typ: "" },
        { json: "FactionType", js: "FactionType", typ: "" },
        { json: "MinDistance", js: "MinDistance", typ: "" },
        { json: "MaxDistance", js: "MaxDistance", typ: 0 },
        { json: "AllowInSanctuary", js: "AllowInSanctuary", typ: true },
        { json: "AllowInFtue", js: "AllowInFtue", typ: true },
        { json: "AllowInWarPrep", js: "AllowInWarPrep", typ: true },
        { json: "AllowInWar", js: "AllowInWar", typ: true },
        { json: "AllowInArena", js: "AllowInArena", typ: true },
        { json: "DisallowInGameModes", js: "DisallowInGameModes", typ: "" },
        { json: "DisallowedWaterDepths", js: "DisallowedWaterDepths", typ: "" },
    ], false),
    "HighWaterMarkRankData": o([
        { json: "Rank", js: "Rank", typ: 0 },
        { json: "ExceedMin0", js: "ExceedMin0", typ: 0 },
        { json: "ExceedMax0", js: "ExceedMax0", typ: 0 },
        { json: "FloorDistance", js: "FloorDistance", typ: 0 },
        { json: "ChanceToExceed0", js: "ChanceToExceed0", typ: 3.14 },
        { json: "ChanceBump", js: "ChanceBump", typ: 3.14 },
        { json: "ModifierAffectsBump", js: "ModifierAffectsBump", typ: true },
        { json: "RollupChance", js: "RollupChance", typ: 3.14 },
        { json: "RollRangeMaxBonus", js: "RollRangeMaxBonus", typ: 0 },
        { json: "UmbralIncrementsLevel", js: "UmbralIncrementsLevel", typ: true },
        { json: "CanUseUmbral", js: "CanUseUmbral", typ: true },
        { json: "CanUseUmbralOnMinGS", js: "CanUseUmbralOnMinGS", typ: 0 },
        { json: "CraftingAwardsUmbral", js: "CraftingAwardsUmbral", typ: true },
        { json: "CraftingGSForRewards", js: "CraftingGSForRewards", typ: 0 },
        { json: "ExceedMin1", js: "ExceedMin1", typ: 0 },
        { json: "ExceedMax1", js: "ExceedMax1", typ: 0 },
        { json: "ChanceToExceed1", js: "ChanceToExceed1", typ: 3.14 },
    ], false),
    "HouseTypeData": o([
        { json: "HouseTypeID", js: "HouseTypeID", typ: "" },
        { json: "Cost", js: "Cost", typ: 0 },
        { json: "Fast Travel Cooldown Time (Minutes)", js: "Fast Travel Cooldown Time (Minutes)", typ: 0 },
        { json: "Territory Standing Required Level", js: "Territory Standing Required Level", typ: 0 },
        { json: "Max Number Total Housing Items (Without Perks)", js: "Max Number Total Housing Items (Without Perks)", typ: 0 },
        { json: "Localization Tag", js: "Localization Tag", typ: "" },
        { json: "Housing Tag Limits", js: "Housing Tag Limits", typ: "" },
    ], false),
    "HunterSightData": o([
        { json: "SightID", js: "SightID", typ: "" },
        { json: "StatusEffectToListenFor", js: "StatusEffectToListenFor", typ: "" },
        { json: "SightCategoryFlag", js: "SightCategoryFlag", typ: "" },
    ], false),
    "ImpactSurfaceAlignmentTable": o([
        { json: "Name", js: "Name", typ: "" },
        { json: "Filter", js: "Filter", typ: "" },
        { json: "VerticalCastDist", js: "VerticalCastDist", typ: 3.14 },
        { json: "MaxRotAngle", js: "MaxRotAngle", typ: 0 },
        { json: "TiltToSurface", js: "TiltToSurface", typ: true },
        { json: "SnapToPos", js: "SnapToPos", typ: true },
        { json: "AlignToDamageableTargets", js: "AlignToDamageableTargets", typ: true },
    ], false),
    "InteractionAnimationData": o([
        { json: "InteractionAnimationID", js: "InteractionAnimationID", typ: r("InteractionAnimationID") },
        { json: "PlayerMannequinFragmentStartInteraction", js: "PlayerMannequinFragmentStartInteraction", typ: "" },
        { json: "InteractableTimelineStartInteraction", js: "InteractableTimelineStartInteraction", typ: r("InteractableTimelineStartInteraction") },
        { json: "InteractableTimelineEndInteraction", js: "InteractableTimelineEndInteraction", typ: r("InteractableTimelineEndInteraction") },
        { json: "Notes", js: "Notes", typ: "" },
    ], false),
    "ItemCurrencyConversionData": o([
        { json: "ConversionID", js: "ConversionID", typ: "" },
        { json: "ItemID", js: "ItemID", typ: "" },
        { json: "EntitlementId", js: "EntitlementId", typ: "" },
        { json: "Perk1", js: "Perk1", typ: "" },
        { json: "Perk2", js: "Perk2", typ: "" },
        { json: "Perk3", js: "Perk3", typ: "" },
        { json: "Perk4", js: "Perk4", typ: "" },
        { json: "Bought", js: "Bought", typ: 0 },
        { json: "Sold", js: "Sold", typ: 0 },
        { json: "ItemQty", js: "ItemQty", typ: 0 },
        { json: "DisplayOrder", js: "DisplayOrder", typ: 0 },
        { json: "CategoricalProgressionId", js: "CategoricalProgressionId", typ: r("ItemCurrencyConversionDatumCategoricalProgressionID") },
        { json: "RankCheckCategoricalProgressionId", js: "RankCheckCategoricalProgressionId", typ: r("RequiredFaction") },
        { json: "RequiredCategoricalProgressionRank", js: "RequiredCategoricalProgressionRank", typ: 0 },
        { json: "BuyCategoricalProgressionCost", js: "BuyCategoricalProgressionCost", typ: u(0, null) },
        { json: "BuyCurrencyCost", js: "BuyCurrencyCost", typ: u(0, null) },
        { json: "BuyCurrencyItemName", js: "BuyCurrencyItemName", typ: r("BuyCurrencyItemName") },
        { json: "BuyCurrencyItemCost", js: "BuyCurrencyItemCost", typ: u(0, null) },
        { json: "BuyCooldownSeconds", js: "BuyCooldownSeconds", typ: u(0, null) },
        { json: "SellCategoricalProgressionCost", js: "SellCategoricalProgressionCost", typ: u(0, null) },
        { json: "SellCurrencyCost", js: "SellCurrencyCost", typ: u(0, null) },
        { json: "SellAzothCost", js: "SellAzothCost", typ: "" },
        { json: "InContracts", js: "InContracts", typ: u(true, null) },
    ], false),
    "ItemPerkSwapData": o([
        { json: "Key", js: "Key", typ: "" },
        { json: "KeyType", js: "KeyType", typ: "" },
        { json: "OldPerk", js: "OldPerk", typ: "" },
        { json: "NewPerk", js: "NewPerk", typ: "" },
    ], false),
    "ItemSkinData": o([
        { json: "ItemSkinID", js: "ItemSkinID", typ: "" },
        { json: "IndexID", js: "IndexID", typ: 0 },
        { json: "IsEntitlement", js: "IsEntitlement", typ: 0 },
        { json: "FromItemIDs", js: "FromItemIDs", typ: "" },
        { json: "NeedsOneClasses", js: "NeedsOneClasses", typ: r("NeedsOneClasses") },
        { json: "RequiredClasses", js: "RequiredClasses", typ: r("RequiredClasses") },
        { json: "ExcludedClasses", js: "ExcludedClasses", typ: "" },
        { json: "ToItemID", js: "ToItemID", typ: "" },
        { json: "Outfit", js: "Outfit", typ: "" },
        { json: "IsTemporarySkin", js: "IsTemporarySkin", typ: true },
    ], false),
    "ItemSoundEvents": o([
        { json: "ItemSoundID", js: "ItemSoundID", typ: r("ItemSoundIDEnum") },
        { json: "Sheathe", js: "Sheathe", typ: "" },
        { json: "Unsheathe", js: "Unsheathe", typ: "" },
        { json: "SheatheFLY", js: "SheatheFLY", typ: "" },
        { json: "UnsheatheFLY", js: "UnsheatheFLY", typ: r("UnsheatheFLY") },
        { json: "Defense", js: "Defense", typ: r("Defense") },
    ], false),
    "ItemTooltipLayout": o([
        { json: "ItemID", js: "ItemID", typ: "" },
        { json: "Loc Note", js: "Loc Note", typ: "" },
        { json: "DerivedFromText", js: "DerivedFromText", typ: "" },
        { json: "DerivedFromIcon", js: "DerivedFromIcon", typ: "" },
        { json: "RefinedAtText", js: "RefinedAtText", typ: "" },
        { json: "RefinedAtLabelText", js: "RefinedAtLabelText", typ: "" },
        { json: "RefinedAtIcon", js: "RefinedAtIcon", typ: "" },
        { json: "CanBeCraftedTextsSmall", js: "CanBeCraftedTextsSmall", typ: "" },
        { json: "CanBeCraftedIconsSmall", js: "CanBeCraftedIconsSmall", typ: "" },
        { json: "SpecialInstructions", js: "SpecialInstructions", typ: "" },
        { json: "UsedAtTexts", js: "UsedAtTexts", typ: "" },
        { json: "UsedAtIcons", js: "UsedAtIcons", typ: "" },
        { json: "CommonUsesLabelText", js: "CommonUsesLabelText", typ: "" },
        { json: "CommonUsesTextsLarge", js: "CommonUsesTextsLarge", typ: "" },
        { json: "CommonUsesIconsLarge", js: "CommonUsesIconsLarge", typ: "" },
        { json: "CommonUsesItemsLarge", js: "CommonUsesItemsLarge", typ: "" },
        { json: "CommonUsesTextsSmall", js: "CommonUsesTextsSmall", typ: "" },
        { json: "CommonUsesIconsSmall", js: "CommonUsesIconsSmall", typ: "" },
        { json: "CommonUsesItemsSmall", js: "CommonUsesItemsSmall", typ: "" },
        { json: "CanBeCraftedTextsLarge", js: "CanBeCraftedTextsLarge", typ: "" },
        { json: "CanBeCraftedIconsLarge", js: "CanBeCraftedIconsLarge", typ: "" },
        { json: "ResourcesLabelText", js: "ResourcesLabelText", typ: "" },
        { json: "ResourcesTexts", js: "ResourcesTexts", typ: "" },
        { json: "ResourcesIcons", js: "ResourcesIcons", typ: "" },
        { json: "ResourcesAmounts", js: "ResourcesAmounts", typ: "" },
        { json: "RefineryInputText", js: "RefineryInputText", typ: "" },
        { json: "RefineryInputIcon", js: "RefineryInputIcon", typ: "" },
        { json: "RefineryInputAmount", js: "RefineryInputAmount", typ: "" },
        { json: "RefineryOutputText", js: "RefineryOutputText", typ: "" },
        { json: "RefineryOutputIcon", js: "RefineryOutputIcon", typ: "" },
        { json: "RefineryOutputAmount", js: "RefineryOutputAmount", typ: "" },
        { json: "MainHeaderIcon", js: "MainHeaderIcon", typ: "" },
        { json: "ResourcesHeaderIcon", js: "ResourcesHeaderIcon", typ: "" },
    ], false),
    "ItemTransform": o([
        { json: "FromItemId", js: "FromItemId", typ: "" },
        { json: "ToItemId", js: "ToItemId", typ: "" },
        { json: "KeepPerks", js: "KeepPerks", typ: true },
    ], false),
    "JointAlias": o([
        { json: "SkeletonName", js: "SkeletonName", typ: "" },
        { json: "Xform", js: "Xform", typ: r("Xform") },
        { json: "Head", js: "Head", typ: "" },
        { json: "Neck", js: "Neck", typ: "" },
        { json: "Spine", js: "Spine", typ: "" },
        { json: "RightHand", js: "RightHand", typ: "" },
        { json: "RightForeArm", js: "RightForeArm", typ: "" },
        { json: "RightMidArm", js: "RightMidArm", typ: "" },
        { json: "RightUpperArm", js: "RightUpperArm", typ: "" },
        { json: "LeftHand", js: "LeftHand", typ: "" },
        { json: "LeftForeArm", js: "LeftForeArm", typ: "" },
        { json: "LeftMidArm", js: "LeftMidArm", typ: "" },
        { json: "LeftUpperArm", js: "LeftUpperArm", typ: "" },
    ], false),
    "KitItemDefinitions": o([
        { json: "ItemID", js: "ItemID", typ: "" },
        { json: "KitType", js: "KitType", typ: r("KitType") },
        { json: "StationTypes", js: "StationTypes", typ: "" },
    ], false),
    "LeaderboardData": o([
        { json: "LeaderboardId", js: "LeaderboardId", typ: "" },
        { json: "IsEnabled", js: "IsEnabled", typ: true },
        { json: "Namespace", js: "Namespace", typ: r("Namespace") },
        { json: "Rotation", js: "Rotation", typ: r("Rotation") },
        { json: "LeaderboardDefinitionId", js: "LeaderboardDefinitionId", typ: "" },
        { json: "FactionLeaderboardDefinitionId", js: "FactionLeaderboardDefinitionId", typ: "" },
        { json: "DataSheetCategory", js: "DataSheetCategory", typ: r("DataSheetCategory") },
        { json: "CharacterLeaderboard", js: "CharacterLeaderboard", typ: true },
        { json: "GroupLeaderboard", js: "GroupLeaderboard", typ: true },
        { json: "CompanyLeaderboard", js: "CompanyLeaderboard", typ: true },
        { json: "FactionLeaderboard", js: "FactionLeaderboard", typ: true },
        { json: "GameMode", js: "GameMode", typ: "" },
        { json: "FirstLevelCategory", js: "FirstLevelCategory", typ: r("FirstLevelCategory") },
        { json: "SecondLevelCategory", js: "SecondLevelCategory", typ: "" },
        { json: "SecondLevelCategoryPriority", js: "SecondLevelCategoryPriority", typ: u(0, null) },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "DisplayNamePriority", js: "DisplayNamePriority", typ: u(0, null) },
        { json: "Category", js: "Category", typ: "" },
        { json: "CategoryPriority", js: "CategoryPriority", typ: u(0, null) },
        { json: "Faction", js: "Faction", typ: "" },
        { json: "Rewards", js: "Rewards", typ: "" },
        { json: "ItemRewards", js: "ItemRewards", typ: "" },
        { json: "EntitlementRewards", js: "EntitlementRewards", typ: "" },
        { json: "CategoryDescription", js: "CategoryDescription", typ: r("CategoryDescription") },
        { json: "CategoryAdditionalHeader", js: "CategoryAdditionalHeader", typ: r("CategoryAdditionalHeader") },
        { json: "RewardType", js: "RewardType", typ: "" },
        { json: "NameString", js: "NameString", typ: "" },
        { json: "ValueString", js: "ValueString", typ: r("ValueString") },
    ], false),
    "LeaderboardStatData": o([
        { json: "LeaderboardStatId", js: "LeaderboardStatId", typ: "" },
        { json: "Notes", js: "Notes", typ: r("LeaderboardStatDatumNotes") },
        { json: "Namespace", js: "Namespace", typ: r("Namespace") },
        { json: "Rotation", js: "Rotation", typ: r("Rotation") },
        { json: "StatType", js: "StatType", typ: "" },
        { json: "Aggregation", js: "Aggregation", typ: r("Aggregation") },
        { json: "ServiceStatId", js: "ServiceStatId", typ: "" },
        { json: "CategoricalProgressionId", js: "CategoricalProgressionId", typ: r("GatheringTradeskill") },
        { json: "GameMode", js: "GameMode", typ: r("GameMode") },
        { json: "Scope", js: "Scope", typ: r("Scope") },
        { json: "PersonalBest", js: "PersonalBest", typ: "" },
    ], false),
    "LevelDisparityData": o([
        { json: "LevelDisparity", js: "LevelDisparity", typ: 0 },
        { json: "DamageModifier", js: "DamageModifier", typ: 3.14 },
        { json: "PhysicalArmorRatingModifier", js: "PhysicalArmorRatingModifier", typ: 3.14 },
        { json: "ElementalArmorRatingModifier", js: "ElementalArmorRatingModifier", typ: 3.14 },
        { json: "SkipDeathsDoor", js: "SkipDeathsDoor", typ: r("AdjustPowerLevel") },
        { json: "IncomingPowerLevelZero", js: "IncomingPowerLevelZero", typ: r("AdjustPowerLevel") },
        { json: "AdjustPowerLevel", js: "AdjustPowerLevel", typ: r("AdjustPowerLevel") },
        { json: "RequiredPowerLevel", js: "RequiredPowerLevel", typ: 0 },
        { json: "AdjustedPowerLevel", js: "AdjustedPowerLevel", typ: 0 },
        { json: "AdjustedHitStun", js: "AdjustedHitStun", typ: 0 },
        { json: "VisionDistanceAdjustment", js: "VisionDistanceAdjustment", typ: 0 },
        { json: "MaxRewardLevelDelta", js: "MaxRewardLevelDelta", typ: 0 },
        { json: "KillExpModifier", js: "KillExpModifier", typ: 3.14 },
        { json: "EventExpModifier", js: "EventExpModifier", typ: 3.14 },
    ], false),
    "LootLimitData": o([
        { json: "LootLimitID", js: "LootLimitID", typ: "" },
        { json: "IsReplicated", js: "IsReplicated", typ: true },
        { json: "MinLimitSeconds", js: "MinLimitSeconds", typ: 0 },
        { json: "MaxLimitSeconds", js: "MaxLimitSeconds", typ: 0 },
        { json: "CountLimit", js: "CountLimit", typ: 0 },
        { json: "MinLimitMult", js: "MinLimitMult", typ: 0 },
        { json: "MaxLimitMult", js: "MaxLimitMult", typ: 0 },
        { json: "LimitExpireSeconds", js: "LimitExpireSeconds", typ: 0 },
        { json: "LootTagValuePerCount", js: "LootTagValuePerCount", typ: u(0, null) },
        { json: "LootTagValueOverrideAtLimit", js: "LootTagValueOverrideAtLimit", typ: "" },
        { json: "LimitNotificationLocTag", js: "LimitNotificationLocTag", typ: r("LimitNotificationLOCTag") },
    ], false),
    "LootTablesData": o([
        { json: "LootTableID", js: "LootTableID", typ: "" },
        { json: "AND/OR", js: "AND/OR", typ: r("TableType") },
        { json: "RollBonusSetting", js: "RollBonusSetting", typ: r("RollBonusSetting") },
        { json: "Conditions", js: "Conditions", typ: r("Conditions") },
        { json: "ConditionOverridesRoll", js: "ConditionOverridesRoll", typ: u(r("UseAllDamageModifiers"), 0, null) },
        { json: "TriggerLimitOnVisit", js: "TriggerLimitOnVisit", typ: u(undefined, r("UseAllDamageModifiers")) },
        { json: "UseLevelGS", js: "UseLevelGS", typ: r("UseAllDamageModifiers") },
        { json: "HWMMult", js: "HWMMult", typ: u(3.14, null, "") },
        { json: "ChanceToExceedIndex", js: "ChanceToExceedIndex", typ: "" },
        { json: "GSBonus", js: "GSBonus", typ: u(0, null, "") },
        { json: "MaxRoll", js: "MaxRoll", typ: u(0, null) },
        { json: "Item1", js: "Item1", typ: "" },
        { json: "GearScoreRange1", js: "GearScoreRange1", typ: "" },
        { json: "PerkBucketOverrides1", js: "PerkBucketOverrides1", typ: "" },
        { json: "Item2", js: "Item2", typ: "" },
        { json: "GearScoreRange2", js: "GearScoreRange2", typ: "" },
        { json: "PerkBucketOverrides2", js: "PerkBucketOverrides2", typ: r("PerkBucketOverrides2") },
        { json: "Item3", js: "Item3", typ: "" },
        { json: "GearScoreRange3", js: "GearScoreRange3", typ: "" },
        { json: "PerkOverrides3", js: "PerkOverrides3", typ: "" },
        { json: "Item4", js: "Item4", typ: "" },
        { json: "GearScoreRange4", js: "GearScoreRange4", typ: "" },
        { json: "PerkOverrides4", js: "PerkOverrides4", typ: "" },
        { json: "Item5", js: "Item5", typ: "" },
        { json: "GearScoreRange5", js: "GearScoreRange5", typ: "" },
        { json: "PerkOverrides5", js: "PerkOverrides5", typ: "" },
        { json: "Item6", js: "Item6", typ: "" },
        { json: "GearScoreRange6", js: "GearScoreRange6", typ: "" },
        { json: "PerkOverrides6", js: "PerkOverrides6", typ: "" },
        { json: "Item7", js: "Item7", typ: "" },
        { json: "GearScoreRange7", js: "GearScoreRange7", typ: "" },
        { json: "PerkOverrides7", js: "PerkOverrides7", typ: "" },
        { json: "Item8", js: "Item8", typ: "" },
        { json: "GearScoreRange8", js: "GearScoreRange8", typ: "" },
        { json: "PerkOverrides8", js: "PerkOverrides8", typ: "" },
        { json: "Item9", js: "Item9", typ: "" },
        { json: "GearScoreRange9", js: "GearScoreRange9", typ: "" },
        { json: "PerkOverrides9", js: "PerkOverrides9", typ: "" },
        { json: "Item10", js: "Item10", typ: "" },
        { json: "GearScoreRange10", js: "GearScoreRange10", typ: r("GearScoreRange10") },
        { json: "PerkOverrides10", js: "PerkOverrides10", typ: "" },
        { json: "Item11", js: "Item11", typ: "" },
        { json: "GearScoreRange11", js: "GearScoreRange11", typ: r("GearScoreRange11") },
        { json: "PerkOverrides11", js: "PerkOverrides11", typ: "" },
        { json: "Item12", js: "Item12", typ: "" },
        { json: "GearScoreRange12", js: "GearScoreRange12", typ: r("GearScoreRange12") },
        { json: "PerkOverrides12", js: "PerkOverrides12", typ: "" },
        { json: "Item13", js: "Item13", typ: "" },
        { json: "GearScoreRange13", js: "GearScoreRange13", typ: r("GearScoreRange13") },
        { json: "PerkOverrides13", js: "PerkOverrides13", typ: "" },
        { json: "Item14", js: "Item14", typ: "" },
        { json: "GearScoreRange14", js: "GearScoreRange14", typ: r("GearScoreRange14") },
        { json: "PerkOverrides14", js: "PerkOverrides14", typ: "" },
        { json: "Item15", js: "Item15", typ: "" },
        { json: "GearScoreRange15", js: "GearScoreRange15", typ: r("GearScoreRange15") },
        { json: "PerkOverrides15", js: "PerkOverrides15", typ: "" },
        { json: "Item16", js: "Item16", typ: "" },
        { json: "GearScoreRange16", js: "GearScoreRange16", typ: r("GearScoreRange1") },
        { json: "PerkOverrides16", js: "PerkOverrides16", typ: "" },
        { json: "Item17", js: "Item17", typ: "" },
        { json: "GearScoreRange17", js: "GearScoreRange17", typ: r("GearScoreRange1") },
        { json: "PerkOverrides17", js: "PerkOverrides17", typ: "" },
        { json: "Item18", js: "Item18", typ: "" },
        { json: "GearScoreRange18", js: "GearScoreRange18", typ: r("GearScoreRange18") },
        { json: "PerkOverrides18", js: "PerkOverrides18", typ: "" },
        { json: "Item19", js: "Item19", typ: "" },
        { json: "GearScoreRange19", js: "GearScoreRange19", typ: r("GearScoreRange19") },
        { json: "PerkOverrides19", js: "PerkOverrides19", typ: "" },
        { json: "Item20", js: "Item20", typ: "" },
        { json: "GearScoreRange20", js: "GearScoreRange20", typ: r("GearScoreRange20") },
        { json: "PerkOverrides20", js: "PerkOverrides20", typ: "" },
        { json: "Item21", js: "Item21", typ: "" },
        { json: "GearScoreRange21", js: "GearScoreRange21", typ: r("GearScoreRange21") },
        { json: "PerkOverrides21", js: "PerkOverrides21", typ: "" },
        { json: "Item22", js: "Item22", typ: "" },
        { json: "GearScoreRange22", js: "GearScoreRange22", typ: r("GearScoreRange22") },
        { json: "PerkOverrides22", js: "PerkOverrides22", typ: "" },
        { json: "Item23", js: "Item23", typ: "" },
        { json: "GearScoreRange23", js: "GearScoreRange23", typ: r("GearScoreRange23") },
        { json: "PerkOverrides23", js: "PerkOverrides23", typ: "" },
        { json: "Item24", js: "Item24", typ: "" },
        { json: "GearScoreRange24", js: "GearScoreRange24", typ: r("GearScoreRange24") },
        { json: "PerkOverrides24", js: "PerkOverrides24", typ: "" },
        { json: "Item25", js: "Item25", typ: "" },
        { json: "GearScoreRange25", js: "GearScoreRange25", typ: r("GearScoreRange25") },
        { json: "PerkOverrides25", js: "PerkOverrides25", typ: "" },
        { json: "Item26", js: "Item26", typ: "" },
        { json: "GearScoreRange26", js: "GearScoreRange26", typ: r("GearScoreRange2") },
        { json: "PerkOverrides26", js: "PerkOverrides26", typ: "" },
        { json: "Item27", js: "Item27", typ: "" },
        { json: "GearScoreRange27", js: "GearScoreRange27", typ: r("GearScoreRange2") },
        { json: "PerkOverrides27", js: "PerkOverrides27", typ: "" },
        { json: "Item28", js: "Item28", typ: "" },
        { json: "GearScoreRange28", js: "GearScoreRange28", typ: r("GearScoreRange28") },
        { json: "PerkOverrides28", js: "PerkOverrides28", typ: "" },
        { json: "Item29", js: "Item29", typ: "" },
        { json: "GearScoreRange29", js: "GearScoreRange29", typ: "" },
        { json: "PerkOverrides29", js: "PerkOverrides29", typ: "" },
        { json: "Item30", js: "Item30", typ: "" },
        { json: "GearScoreRange30", js: "GearScoreRange30", typ: "" },
        { json: "PerkOverrides30", js: "PerkOverrides30", typ: "" },
        { json: "Item31", js: "Item31", typ: "" },
        { json: "GearScoreRange31", js: "GearScoreRange31", typ: "" },
        { json: "PerkOverrides31", js: "PerkOverrides31", typ: "" },
        { json: "Item32", js: "Item32", typ: "" },
        { json: "GearScoreRange32", js: "GearScoreRange32", typ: "" },
        { json: "PerkOverrides32", js: "PerkOverrides32", typ: "" },
        { json: "Item33", js: "Item33", typ: "" },
        { json: "GearScoreRange33", js: "GearScoreRange33", typ: "" },
        { json: "PerkOverrides33", js: "PerkOverrides33", typ: "" },
        { json: "Item34", js: "Item34", typ: u(undefined, "") },
        { json: "GearScoreRange34", js: "GearScoreRange34", typ: u(undefined, "") },
        { json: "PerkOverrides34", js: "PerkOverrides34", typ: u(undefined, "") },
        { json: "Item35", js: "Item35", typ: u(undefined, "") },
        { json: "GearScoreRange35", js: "GearScoreRange35", typ: u(undefined, "") },
        { json: "PerkOverrides35", js: "PerkOverrides35", typ: u(undefined, "") },
    ], false),
    "LootTagPresetData": o([
        { json: "LootTagPresetID", js: "LootTagPresetID", typ: "" },
        { json: "LootTags", js: "LootTags", typ: "" },
    ], false),
    "LoreData": o([
        { json: "LoreID", js: "LoreID", typ: "" },
        { json: "Type", js: "Type", typ: r("LoreDatumType") },
        { json: "Title", js: "Title", typ: "" },
        { json: "Subtitle", js: "Subtitle", typ: "" },
        { json: "Body", js: "Body", typ: "" },
        { json: "AchievementId", js: "AchievementId", typ: "" },
        { json: "ParentID", js: "ParentID", typ: "" },
        { json: "Order", js: "Order", typ: 0 },
        { json: "ImagePath", js: "ImagePath", typ: "" },
        { json: "LocationName", js: "LocationName", typ: r("LocationName") },
        { json: "LocationXY", js: "LocationXY", typ: r("LocationXY") },
        { json: "AssociatedQuest", js: "AssociatedQuest", typ: r("AssociatedQuest") },
        { json: "Writer", js: "Writer", typ: r("Writer") },
        { json: "LocNotes", js: "LocNotes", typ: "" },
        { json: "RecordingStatus", js: "RecordingStatus", typ: r("RecordingStatus") },
        { json: "LoreNotesLocation", js: "LoreNotesLocation", typ: "" },
    ], false),
    "LoreItemDefinitions": o([
        { json: "LoreItemId", js: "LoreItemId", typ: "" },
        { json: "LoreId", js: "LoreId", typ: "" },
    ], false),
    "ManaCostsPlayer": o([
        { json: "ID", js: "ID", typ: 0 },
        { json: "CostID", js: "CostID", typ: "" },
        { json: "ManaCost", js: "ManaCost", typ: 3.14 },
        { json: "WeaponTag", js: "WeaponTag", typ: r("WeaponTag") },
    ], false),
    "MasterItemDefinitions": o([
        { json: "ItemID", js: "ItemID", typ: "" },
        { json: "Name", js: "Name", typ: "" },
        { json: "ItemType", js: "ItemType", typ: r("ItemType") },
        { json: "ItemTypeDisplayName", js: "ItemTypeDisplayName", typ: r("ItemTypeDisplayName") },
        { json: "Description", js: "Description", typ: "" },
        { json: "ItemClass", js: "ItemClass", typ: "" },
        { json: "TradingCategory", js: "TradingCategory", typ: r("TradingCategory") },
        { json: "TradingFamily", js: "TradingFamily", typ: r("TradingFamil") },
        { json: "TradingGroup", js: "TradingGroup", typ: r("MasterItemDefinitionTradingGroup") },
        { json: "BindOnPickup", js: "BindOnPickup", typ: u(0, null, "") },
        { json: "BindOnEquip", js: "BindOnEquip", typ: u(0, null, "") },
        { json: "GearScoreOverride", js: "GearScoreOverride", typ: u(0, null, "") },
        { json: "MinGearScore", js: "MinGearScore", typ: u(0, null, "") },
        { json: "MaxGearScore", js: "MaxGearScore", typ: u(0, null, "") },
        { json: "Tier", js: "Tier", typ: u(0, null, "") },
        { json: "ItemStatsRef", js: "ItemStatsRef", typ: "" },
        { json: "GrantsHWMBump", js: "GrantsHWMBump", typ: "" },
        { json: "IgnoreNameChanges", js: "IgnoreNameChanges", typ: u(0, null, "") },
        { json: "IgnoreHWMScaling", js: "IgnoreHWMScaling", typ: u(0, null, "") },
        { json: "CanHavePerks", js: "CanHavePerks", typ: u(0, null, "") },
        { json: "CanReplaceGem", js: "CanReplaceGem", typ: u(0, null, "") },
        { json: "Perk1", js: "Perk1", typ: r("Perk1") },
        { json: "Perk2", js: "Perk2", typ: "" },
        { json: "Perk3", js: "Perk3", typ: "" },
        { json: "Perk4", js: "Perk4", typ: "" },
        { json: "Perk5", js: "Perk5", typ: "" },
        { json: "PerkBucket1", js: "PerkBucket1", typ: r("PerkBucket1") },
        { json: "PerkBucket2", js: "PerkBucket2", typ: r("PerkBucket2") },
        { json: "PerkBucket3", js: "PerkBucket3", typ: r("PerkBucket3") },
        { json: "PerkBucket4", js: "PerkBucket4", typ: r("PerkBucket4") },
        { json: "PerkBucket5", js: "PerkBucket5", typ: r("PerkBucket5") },
        { json: "ForceRarity", js: "ForceRarity", typ: u(0, null, "") },
        { json: "RequiredLevel", js: "RequiredLevel", typ: u(0, null, "") },
        { json: "UseTypeAffix", js: "UseTypeAffix", typ: u(0, null) },
        { json: "UseMaterialAffix", js: "UseMaterialAffix", typ: u(0, null) },
        { json: "UseMagicAffix", js: "UseMagicAffix", typ: u(0, null) },
        { json: "UiItemClass", js: "UiItemClass", typ: r("UIItemClass") },
        { json: "ArmorAppearanceM", js: "ArmorAppearanceM", typ: "" },
        { json: "ArmorAppearanceF", js: "ArmorAppearanceF", typ: "" },
        { json: "WeaponAppearanceOverride", js: "WeaponAppearanceOverride", typ: "" },
        { json: "ConfirmDestroy", js: "ConfirmDestroy", typ: u(0, null, "") },
        { json: "ConfirmBeforeUse", js: "ConfirmBeforeUse", typ: u(0, null) },
        { json: "ConsumeOnUse", js: "ConsumeOnUse", typ: u(0, null, "") },
        { json: "PrefabPath", js: "PrefabPath", typ: "" },
        { json: "HousingTags", js: "HousingTags", typ: "" },
        { json: "IconPath", js: "IconPath", typ: "" },
        { json: "HiResIconPath", js: "HiResIconPath", typ: u(0, "") },
        { json: "MaxStackSize", js: "MaxStackSize", typ: u(0, null) },
        { json: "DeathDropPercentage", js: "DeathDropPercentage", typ: u(0, null, "") },
        { json: "Nonremovable", js: "Nonremovable", typ: u(0, null, "") },
        { json: "IsMissionItem", js: "IsMissionItem", typ: u(0, null, "") },
        { json: "IsUniqueItem", js: "IsUniqueItem", typ: u(0, null, "") },
        { json: "IsRequiredItem", js: "IsRequiredItem", typ: u(undefined, u(0, null)) },
        { json: "ContainerLevel", js: "ContainerLevel", typ: u(0, null, "") },
        { json: "ContainerGS", js: "ContainerGS", typ: u(0, null, "") },
        { json: "ExceedMinIndex", js: "ExceedMinIndex", typ: u(undefined, "") },
        { json: "ExceedMaxIndex", js: "ExceedMaxIndex", typ: u(undefined, "") },
        { json: "IsSalvageable", js: "IsSalvageable", typ: u(0, null, "") },
        { json: "SalvageResources", js: "SalvageResources", typ: u(0, null, "") },
        { json: "IsRepairable", js: "IsRepairable", typ: u(0, null, "") },
        { json: "RepairDustModifier", js: "RepairDustModifier", typ: u(3.14, null, "") },
        { json: "RepairRecipe", js: "RepairRecipe", typ: "" },
        { json: "CraftingRecipe", js: "CraftingRecipe", typ: r("ProceduralTierId1") },
        { json: "RepairGameEventID", js: "RepairGameEventID", typ: "" },
        { json: "SalvageGameEventID", js: "SalvageGameEventID", typ: "" },
        { json: "SalvageAchievement", js: "SalvageAchievement", typ: "" },
        { json: "RepairTypes", js: "RepairTypes", typ: "" },
        { json: "IngredientCategories", js: "IngredientCategories", typ: "" },
        { json: "IngredientBonusPrimary", js: "IngredientBonusPrimary", typ: u(0, null, "") },
        { json: "IngredientBonusSecondary", js: "IngredientBonusSecondary", typ: u(0, null, "") },
        { json: "IngredientGearScoreBaseBonus", js: "IngredientGearScoreBaseBonus", typ: u(0, null, "") },
        { json: "IngredientGearScoreMaxBonus", js: "IngredientGearScoreMaxBonus", typ: u(0, null, "") },
        { json: "ExtraBonusItemChance", js: "ExtraBonusItemChance", typ: "" },
        { json: "Durability", js: "Durability", typ: u(0, null, "") },
        { json: "DurabilityDmgOnDeath", js: "DurabilityDmgOnDeath", typ: u(3.14, null, "") },
        { json: "DestroyOnBreak", js: "DestroyOnBreak", typ: u(0, null) },
        { json: "Weight", js: "Weight", typ: u(3.14, null, "") },
        { json: "AcquisitionNotificationId", js: "AcquisitionNotificationId", typ: u(r("AudioPickup"), 0, null) },
        { json: "AudioPickup", js: "AudioPickup", typ: r("AudioPickup") },
        { json: "AudioPlace", js: "AudioPlace", typ: r("MasterItemDefinitionAudioPlace") },
        { json: "AudioUse", js: "AudioUse", typ: r("AudioUse") },
        { json: "AudioCreated", js: "AudioCreated", typ: r("AudioCreated") },
        { json: "AudioDestroyed", js: "AudioDestroyed", typ: r("AudioDestroyed") },
        { json: "MannequinTag", js: "MannequinTag", typ: r("MasterItemDefinitionMannequinTag") },
        { json: "SoundTableID", js: "SoundTableID", typ: r("ItemSoundIDEnum") },
        { json: "WarboardGatherStat", js: "WarboardGatherStat", typ: r("WarboardGatherStat") },
        { json: "WarboardDepositStat", js: "WarboardDepositStat", typ: "" },
        { json: "Notes", js: "Notes", typ: "" },
        { json: "HideInLootTicker", js: "HideInLootTicker", typ: u(0, null, "") },
        { json: "CanRollPerkOnUpgrade", js: "CanRollPerkOnUpgrade", typ: u(undefined, u(0, null, "")) },
        { json: "WeaponAccessory", js: "WeaponAccessory", typ: u(undefined, r("WeaponAccessory")) },
        { json: "SalvageLootTags", js: "SalvageLootTags", typ: u(undefined, "") },
        { json: "EventId", js: "EventId", typ: u(undefined, "") },
        { json: "AttributionId", js: "AttributionId", typ: u(undefined, r("AttributionID")) },
        { json: "ObtainableReleaseVersion", js: "ObtainableReleaseVersion", typ: u(undefined, r("ObtainableReleaseVersion")) },
        { json: "HeartgemRuneTooltipTitle", js: "HeartgemRuneTooltipTitle", typ: u(undefined, r("HeartgemRuneTooltipTitle")) },
        { json: "HeartgemTooltipBackgroundImage", js: "HeartgemTooltipBackgroundImage", typ: u(undefined, r("HeartgemTooltipBackgroundImage")) },
        { json: "HideFromRewardOpenPopup", js: "HideFromRewardOpenPopup", typ: u(undefined, u(0, null, "")) },
        { json: "ExclusivelyForWarCampTier", js: "ExclusivelyForWarCampTier", typ: u(undefined, u(0, null)) },
        { json: "SalvageEntitlementId", js: "SalvageEntitlementId", typ: u(undefined, "") },
        { json: "ParentItemId_DVT", js: "ParentItemId_DVT", typ: u(undefined, "") },
        { json: "IgnoreParentColumns_DVT", js: "IgnoreParentColumns_DVT", typ: u(undefined, r("IgnoreParentColumnsDVT")) },
    ], false),
    "MetaAchievementData": o([
        { json: "MetaAchievementId", js: "MetaAchievementId", typ: "" },
        { json: "ReadyForSteam", js: "ReadyForSteam", typ: u(true, null) },
        { json: "SteamApiName", js: "SteamApiName", typ: "" },
        { json: "Type", js: "Type", typ: "" },
        { json: "Predecessor MetaAchievementIds", js: "Predecessor MetaAchievementIds", typ: "" },
        { json: "ProgressId", js: "ProgressId", typ: "" },
        { json: "ProgressIdParent", js: "ProgressIdParent", typ: "" },
        { json: "UIDisplayCategory", js: "UIDisplayCategory", typ: "" },
        { json: "HideFromUI", js: "HideFromUI", typ: u(true, null) },
        { json: "Title", js: "Title", typ: "" },
        { json: "Description", js: "Description", typ: "" },
        { json: "Hidden Text", js: "Hidden Text", typ: r("HiddenText") },
        { json: "Notification Verbosity", js: "Notification Verbosity", typ: r("NotificationVerbosity") },
        { json: "Tier", js: "Tier", typ: r("Tier") },
        { json: "Icon", js: "Icon", typ: "" },
        { json: "Entitlement Id", js: "Entitlement Id", typ: "" },
        { json: "AchievePoints", js: "AchievePoints", typ: 0 },
        { json: "Total", js: "Total", typ: u(0, null) },
        { json: "VitalsCategories", js: "VitalsCategories", typ: r("VitalsCategories") },
        { json: "Categorical Progression", js: "Categorical Progression", typ: "" },
        { json: "LorePagesTopicIds", js: "LorePagesTopicIds", typ: r("LorePagesTopicIDS") },
        { json: "TradeskillType", js: "TradeskillType", typ: r("GatheringTradeskill") },
        { json: "ItemClass", js: "ItemClass", typ: r("MetaAchievementDatumItemClass") },
        { json: "TrueFalse", js: "TrueFalse", typ: u(true, null) },
        { json: "QuestGroupTag", js: "QuestGroupTag", typ: r("QuestTag") },
        { json: "GameEventType", js: "GameEventType", typ: r("GameEventType") },
        { json: "TerritoryId", js: "TerritoryId", typ: u(0, null) },
        { json: "IsPvp", js: "IsPvp", typ: r("IsMajor") },
        { json: "InGroup", js: "InGroup", typ: r("IsMajor") },
        { json: "FactionType", js: "FactionType", typ: r("RequiredFaction") },
        { json: "MissionGoalType", js: "MissionGoalType", typ: r("RespawnTypeToUseForUnstuck") },
        { json: "GameModeId", js: "GameModeId", typ: r("GameMode") },
        { json: "GameModeResult", js: "GameModeResult", typ: r("GameModeResult") },
        { json: "AttributeType", js: "AttributeType", typ: r("AttributeType") },
        { json: "AchievementsID", js: "AchievementsID", typ: "" },
        { json: "AchievementCategory", js: "AchievementCategory", typ: r("AchievementCategoryEnum") },
    ], false),
    "MissionData": o([
        { json: "MissionID", js: "MissionID", typ: "" },
        { json: "MissionTier", js: "MissionTier", typ: 0 },
        { json: "ObjectiveID", js: "ObjectiveID", typ: "" },
        { json: "IsCustomObjective", js: "IsCustomObjective", typ: u(undefined, u(true, null)) },
        { json: "CategoricalProgressionId", js: "CategoricalProgressionId", typ: "" },
        { json: "IsPvpMission", js: "IsPvpMission", typ: u(undefined, u(true, null)) },
        { json: "AvailableTerritoryId", js: "AvailableTerritoryId", typ: u(undefined, u(0, null)) },
        { json: "RequiredFaction", js: "RequiredFaction", typ: u(undefined, r("RequiredFaction")) },
        { json: "RequiredAchievementConditional", js: "RequiredAchievementConditional", typ: r("RequiredAchievementConditional") },
        { json: "RequiredFortControlStatus", js: "RequiredFortControlStatus", typ: u(undefined, u(0, null)) },
        { json: "ReturnToGiverOverride", js: "ReturnToGiverOverride", typ: true },
        { json: "IsSettlementValidDestination", js: "IsSettlementValidDestination", typ: u(true, null) },
        { json: "IsOutpostValidDestination", js: "IsOutpostValidDestination", typ: u(true, null) },
        { json: "TaskKillContributionOverride", js: "TaskKillContributionOverride", typ: "" },
        { json: "TaskKillContributionQtyOverride", js: "TaskKillContributionQtyOverride", typ: u(0, null) },
        { json: "TerritoryIDOverride", js: "TerritoryIDOverride", typ: u(0, null, "") },
        { json: "POITagOverride", js: "POITagOverride", typ: "" },
        { json: "TaskGiveAndTakeItemOverride", js: "TaskGiveAndTakeItemOverride", typ: r("TaskGiveAndTakeItemOverride") },
        { json: "TaskHaveAndReturnItemsOverride", js: "TaskHaveAndReturnItemsOverride", typ: "" },
        { json: "TaskHaveAndReturnItemsQtyOverride", js: "TaskHaveAndReturnItemsQtyOverride", typ: u(0, null) },
        { json: "TaskHaveAndReturnItemsDropProbabilityOverride", js: "TaskHaveAndReturnItemsDropProbabilityOverride", typ: u(0, null, "") },
        { json: "TaskHaveAndReturnChestDropProbabilityOverride", js: "TaskHaveAndReturnChestDropProbabilityOverride", typ: u(0, null) },
        { json: "TaskHaveAndReturnItemsItemsDropVCOverride", js: "TaskHaveAndReturnItemsItemsDropVCOverride", typ: "" },
        { json: "LootTagOverride", js: "LootTagOverride", typ: "" },
        { json: "PauseAndClearLootOnTaskCompleteOverride", js: "PauseAndClearLootOnTaskCompleteOverride", typ: u(undefined, u(true, null)) },
        { json: "TurninDistance", js: "TurninDistance", typ: "" },
        { json: "TaskTimerOverride", js: "TaskTimerOverride", typ: u(0, null) },
        { json: "SuccessGameEventIdOverride", js: "SuccessGameEventIdOverride", typ: "" },
        { json: "FailureGameEventIdOverride", js: "FailureGameEventIdOverride", typ: r("FailureGameEventIDOverride") },
        { json: "TitleOverride", js: "TitleOverride", typ: "" },
        { json: "DescriptionOverride", js: "DescriptionOverride", typ: "" },
        { json: "ImagePath", js: "ImagePath", typ: "" },
        { json: "MissionGoalType", js: "MissionGoalType", typ: r("RespawnTypeToUseForUnstuck") },
        { json: "ProviderDistanceLimit", js: "ProviderDistanceLimit", typ: u(0, null) },
        { json: "MinLevel", js: "MinLevel", typ: u(0, null, "") },
        { json: "MaxLevel", js: "MaxLevel", typ: u(0, null) },
        { json: "RequiredTradeskill", js: "RequiredTradeskill", typ: r("GatheringTradeskill") },
        { json: "TradeskillLevel", js: "TradeskillLevel", typ: u(0, null) },
        { json: "Enabled", js: "Enabled", typ: true },
        { json: "DevName", js: "DevName", typ: u(undefined, "") },
        { json: "VCLevelRange", js: "VCLevelRange", typ: u(undefined, "") },
        { json: "RecommendedGroupSize", js: "RecommendedGroupSize", typ: u(0, null, "") },
        { json: "PatrolDuration", js: "PatrolDuration", typ: u(undefined, u(0, null)) },
        { json: "PatrolPoi1", js: "PatrolPoi1", typ: u(undefined, r("PatrolPoi1")) },
        { json: "PatrolPoi2", js: "PatrolPoi2", typ: u(undefined, "") },
        { json: "PatrolPoi3", js: "PatrolPoi3", typ: u(undefined, "") },
        { json: "PatrolPoi4", js: "PatrolPoi4", typ: u(undefined, "") },
        { json: "GrantRewardsToOriginTerritory", js: "GrantRewardsToOriginTerritory", typ: u(undefined, u(true, null)) },
        { json: "ORMReleaseEventTagsOverride", js: "ORMReleaseEventTagsOverride", typ: u(undefined, "") },
        { json: "OverrideLocation", js: "OverrideLocation", typ: u(undefined, "") },
        { json: "TerritoryProjectId", js: "TerritoryProjectId", typ: u(undefined, r("TerritoryProjectID")) },
        { json: "CommunityGoalAmount", js: "CommunityGoalAmount", typ: u(undefined, 0) },
        { json: "UseGlobalStorageOverride", js: "UseGlobalStorageOverride", typ: u(undefined, true) },
        { json: "PauseAndClearLootTagOnTaskCompleteOverride", js: "PauseAndClearLootTagOnTaskCompleteOverride", typ: u(undefined, u(true, null)) },
        { json: "DetailImagePath", js: "DetailImagePath", typ: u(undefined, r("DetailImagePath")) },
        { json: "EstimatedCompletionTimeMinutes", js: "EstimatedCompletionTimeMinutes", typ: u(undefined, "") },
        { json: "DifficultyHintString", js: "DifficultyHintString", typ: u(undefined, "") },
        { json: "AvailableTerritoryID", js: "AvailableTerritoryID", typ: u(undefined, "") },
    ], false),
    "MissionWeightsData": o([
        { json: "MissionWeightId", js: "MissionWeightId", typ: "" },
        { json: "SlotNumber", js: "SlotNumber", typ: 0 },
        { json: "IsPvpSlot", js: "IsPvpSlot", typ: u(true, null) },
        { json: "MissionGoalType", js: "MissionGoalType", typ: r("RespawnTypeToUseForUnstuck") },
        { json: "Weight", js: "Weight", typ: 0 },
    ], false),
    "Moonshot": o([
        { json: "Slice", js: "Slice", typ: "" },
        { json: "PowerLevel", js: "PowerLevel", typ: 0 },
        { json: "Destruction", js: "Destruction", typ: 0 },
        { json: "Disruption", js: "Disruption", typ: 0 },
        { json: "Defense", js: "Defense", typ: 0 },
        { json: "RangeInside", js: "RangeInside", typ: 0 },
        { json: "RangeClose", js: "RangeClose", typ: 0 },
        { json: "RangeMid", js: "RangeMid", typ: 0 },
        { json: "RangeFar", js: "RangeFar", typ: 0 },
        { json: "Type", js: "Type", typ: r("MoonshotType") },
        { json: "Family", js: "Family", typ: r("MoonshotFamily") },
        { json: "Available", js: "Available", typ: 0 },
    ], false),
    "MusicalInstrumentSlot": o([
        { json: "PaperdollId", js: "PaperdollId", typ: r("PaperdollID") },
        { json: "Name", js: "Name", typ: "" },
        { json: "ClefIconPath", js: "ClefIconPath", typ: "" },
    ], false),
    "MusicalPerformanceRewards": o([
        { json: "RewardId", js: "RewardId", typ: "" },
        { json: "Name", js: "Name", typ: "" },
        { json: "Description", js: "Description", typ: "" },
        { json: "Rank", js: "Rank", typ: 0 },
        { json: "FilterType", js: "FilterType", typ: r("FilterType") },
        { json: "GameEventId_Rank_Amazing", js: "GameEventId_Rank_Amazing", typ: "" },
        { json: "GameEventId_Rank_Great", js: "GameEventId_Rank_Great", typ: "" },
        { json: "GameEventId_Rank_Okay", js: "GameEventId_Rank_Okay", typ: "" },
        { json: "GameEventId_Rank_Bad", js: "GameEventId_Rank_Bad", typ: "" },
    ], false),
    "MusicalRanking": o([
        { json: "Grade", js: "Grade", typ: "" },
        { json: "MinimumScore", js: "MinimumScore", typ: 3.14 },
        { json: "RankGameEventId", js: "RankGameEventId", typ: "" },
        { json: "MusicalScoreMult", js: "MusicalScoreMult", typ: 3.14 },
    ], false),
    "MusicalScoring": o([
        { json: "InputType", js: "InputType", typ: "" },
        { json: "Points", js: "Points", typ: 0 },
    ], false),
    "MutationDifficultyStaticData": o([
        { json: "MutationDifficulty", js: "MutationDifficulty", typ: 0 },
        { json: "DifficultyTier", js: "DifficultyTier", typ: 0 },
        { json: "ReqItemsToEnter", js: "ReqItemsToEnter", typ: "" },
        { json: "HealthIncreaseMod", js: "HealthIncreaseMod", typ: r("HealthIncreaseMod") },
        { json: "DamageIncreaseMod", js: "DamageIncreaseMod", typ: r("DamageIncreaseMod") },
        { json: "HealthPotency_Dungeon-", js: "HealthPotency_Dungeon-", typ: 0 },
        { json: "DamagePotency_Dungeon-", js: "DamagePotency_Dungeon-", typ: 0 },
        { json: "HealthPotency_Dungeon", js: "HealthPotency_Dungeon", typ: 0 },
        { json: "DamagePotency_Dungeon", js: "DamagePotency_Dungeon", typ: 0 },
        { json: "HealthPotency_Dungeon+", js: "HealthPotency_Dungeon+", typ: 0 },
        { json: "DamagePotency_Dungeon+", js: "DamagePotency_Dungeon+", typ: 0 },
        { json: "HealthPotency_DungeonMiniBoss", js: "HealthPotency_DungeonMiniBoss", typ: 0 },
        { json: "DamagePotency_DungeonMiniBoss", js: "DamagePotency_DungeonMiniBoss", typ: 0 },
        { json: "HealthPotency_DungeonBoss", js: "HealthPotency_DungeonBoss", typ: 0 },
        { json: "DamagePotency_DungeonBoss", js: "DamagePotency_DungeonBoss", typ: 0 },
        { json: "HasMinorCurse", js: "HasMinorCurse", typ: r("AdjustPowerLevel") },
        { json: "HasMajorCurse", js: "HasMajorCurse", typ: r("AdjustPowerLevel") },
        { json: "RecommendedGearScore", js: "RecommendedGearScore", typ: 0 },
        { json: "GearScoreDeltaModifier", js: "GearScoreDeltaModifier", typ: 3.14 },
        { json: "BaseCurseDamageMod", js: "BaseCurseDamageMod", typ: 3.14 },
        { json: "InjectedLootTags", js: "InjectedLootTags", typ: "" },
        { json: "InjectedCreatureLoot", js: "InjectedCreatureLoot", typ: r("InjectedCLoot") },
        { json: "InjectedCreatureLootRoll", js: "InjectedCreatureLootRoll", typ: "" },
        { json: "InjectedContainerLoot", js: "InjectedContainerLoot", typ: r("InjectedCLoot") },
        { json: "InjectedContainerLootRoll", js: "InjectedContainerLootRoll", typ: "" },
        { json: "PossibleItemDropIds", js: "PossibleItemDropIds", typ: "" },
        { json: "CompletionEvent1", js: "CompletionEvent1", typ: "" },
        { json: "CompletionEvent2", js: "CompletionEvent2", typ: "" },
        { json: "CompletionEvent3", js: "CompletionEvent3", typ: "" },
        { json: "PerkRollMult1", js: "PerkRollMult1", typ: 3.14 },
        { json: "PerkRollMult2", js: "PerkRollMult2", typ: 3.14 },
        { json: "PerkRollMult3", js: "PerkRollMult3", typ: 3.14 },
        { json: "PerkRollMult4", js: "PerkRollMult4", typ: 3.14 },
        { json: "PerkRollMult5", js: "PerkRollMult5", typ: 3.14 },
        { json: "HWMRangeBias", js: "HWMRangeBias", typ: 0 },
        { json: "HWMRangeBiasChance", js: "HWMRangeBiasChance", typ: 3.14 },
        { json: "HWMExceedMod", js: "HWMExceedMod", typ: 3.14 },
    ], false),
    "MutationPerksStaticData": o([
        { json: "ElementalMutationTypeId", js: "ElementalMutationTypeId", typ: "" },
        { json: "InjectedPerkBucket1", js: "InjectedPerkBucket1", typ: "" },
        { json: "InjectedPerkBucketWeight1", js: "InjectedPerkBucketWeight1", typ: "" },
        { json: "InjectedPerkBucket2", js: "InjectedPerkBucket2", typ: "" },
        { json: "InjectedPerkBucketWeight2", js: "InjectedPerkBucketWeight2", typ: "" },
        { json: "InjectedPerkBucket3", js: "InjectedPerkBucket3", typ: "" },
        { json: "InjectedPerkBucketWeight3", js: "InjectedPerkBucketWeight3", typ: "" },
        { json: "InjectedPerkBucket4", js: "InjectedPerkBucket4", typ: "" },
        { json: "InjectedPerkBucketWeight4", js: "InjectedPerkBucketWeight4", typ: "" },
        { json: "InjectedPerkBucket5", js: "InjectedPerkBucket5", typ: "" },
        { json: "InjectedPerkBucketWeight5", js: "InjectedPerkBucketWeight5", typ: "" },
        { json: "InjectedCreatureLoot", js: "InjectedCreatureLoot", typ: "" },
        { json: "InjectedContainerLoot", js: "InjectedContainerLoot", typ: "" },
        { json: "InjectedLootTags", js: "InjectedLootTags", typ: r("DamageTypes") },
        { json: "Name", js: "Name", typ: "" },
        { json: "Description", js: "Description", typ: "" },
    ], false),
    "NotificationData": o([
        { json: "NotificationId", js: "NotificationId", typ: "" },
        { json: "DisplayTitle", js: "DisplayTitle", typ: "" },
        { json: "DisplayText", js: "DisplayText", typ: "" },
        { json: "SecondaryText", js: "SecondaryText", typ: "" },
        { json: "IconPath", js: "IconPath", typ: "" },
        { json: "MaxDisplayCount", js: "MaxDisplayCount", typ: u(0, null) },
        { json: "NotificationType", js: "NotificationType", typ: r("NotificationType") },
        { json: "TrackDisplayCount", js: "TrackDisplayCount", typ: u(0, null) },
        { json: "DurationOverride", js: "DurationOverride", typ: u(0, null) },
        { json: "CooldownSeconds", js: "CooldownSeconds", typ: u(3.14, null) },
        { json: "Keybind", js: "Keybind", typ: r("Keybind") },
        { json: "KeybindActionmap", js: "KeybindActionmap", typ: r("KeybindActionmap") },
        { json: "NumberFields", js: "NumberFields", typ: r("NumberFields") },
    ], false),
    "NPCData": o([
        { json: "NPCId", js: "NPCId", typ: "" },
        { json: "Title", js: "Title", typ: "" },
        { json: "GenericName", js: "GenericName", typ: "" },
        { json: "InteractOptionDisplayNameOverride", js: "InteractOptionDisplayNameOverride", typ: r("InteractOptionDisplayNameOverride") },
        { json: "ConversationStateId1", js: "ConversationStateId1", typ: "" },
        { json: "ConversationStateId2", js: "ConversationStateId2", typ: "" },
        { json: "ConversationStateId3", js: "ConversationStateId3", typ: "" },
        { json: "ConversationStateId4", js: "ConversationStateId4", typ: "" },
        { json: "ConversationStateId5", js: "ConversationStateId5", typ: "" },
        { json: "ConversationStateId6", js: "ConversationStateId6", typ: "" },
        { json: "ConversationStateId7", js: "ConversationStateId7", typ: "" },
        { json: "ConversationStateId8", js: "ConversationStateId8", typ: "" },
        { json: "ConversationStateId9", js: "ConversationStateId9", typ: "" },
        { json: "ConversationStateId10", js: "ConversationStateId10", typ: r("ConversationStateId10") },
        { json: "ConversationStateId11", js: "ConversationStateId11", typ: u(undefined, r("ConversationStateId11")) },
        { json: "ConversationStateId12", js: "ConversationStateId12", typ: u(undefined, r("ConversationStateId12")) },
        { json: "ConversationStateId13", js: "ConversationStateId13", typ: u(undefined, r("ConversationStateId13")) },
        { json: "ConversationStateId14", js: "ConversationStateId14", typ: u(undefined, r("ConversationStateId14")) },
        { json: "ConversationStateId15", js: "ConversationStateId15", typ: u(undefined, r("ConversationStateId15")) },
        { json: "ConversationStateId16", js: "ConversationStateId16", typ: u(undefined, r("ConversationStateId16")) },
        { json: "ConversationStateId17", js: "ConversationStateId17", typ: u(undefined, r("ConversationStateId17")) },
        { json: "ConversationStateId18", js: "ConversationStateId18", typ: u(undefined, r("ConversationStateId18")) },
        { json: "ConversationStateId19", js: "ConversationStateId19", typ: u(undefined, r("ConversationStateId19")) },
        { json: "ConversationStateId20", js: "ConversationStateId20", typ: u(undefined, r("ConversationStateId20")) },
        { json: "TopicId1", js: "TopicId1", typ: u(undefined, "") },
        { json: "TopicId2", js: "TopicId2", typ: u(undefined, "") },
        { json: "TopicId3", js: "TopicId3", typ: u(undefined, "") },
        { json: "TopicId4", js: "TopicId4", typ: u(undefined, "") },
        { json: "TopicId5", js: "TopicId5", typ: u(undefined, "") },
        { json: "TopicId6", js: "TopicId6", typ: u(undefined, "") },
        { json: "TopicId7", js: "TopicId7", typ: u(undefined, "") },
        { json: "TopicId8", js: "TopicId8", typ: u(undefined, "") },
        { json: "TopicId9", js: "TopicId9", typ: u(undefined, "") },
        { json: "TopicId10", js: "TopicId10", typ: u(undefined, "") },
        { json: "Location1", js: "Location1", typ: u(undefined, "") },
        { json: "Location2", js: "Location2", typ: u(undefined, "") },
        { json: "Location3", js: "Location3", typ: u(undefined, "") },
        { json: "Location4", js: "Location4", typ: u(undefined, "") },
        { json: "Location5", js: "Location5", typ: u(undefined, "") },
        { json: "Location6", js: "Location6", typ: u(undefined, "") },
        { json: "Location7", js: "Location7", typ: u(undefined, "") },
        { json: "Location8", js: "Location8", typ: u(undefined, "") },
        { json: "Location9", js: "Location9", typ: u(undefined, "") },
        { json: "Location10", js: "Location10", typ: u(undefined, "") },
        { json: "Location11", js: "Location11", typ: u(undefined, "") },
        { json: "Location12", js: "Location12", typ: u(undefined, "") },
        { json: "Location13", js: "Location13", typ: u(undefined, "") },
        { json: "Location14", js: "Location14", typ: u(undefined, "") },
    ], false),
    "Objectives": o([
        { json: "ObjectiveID", js: "ObjectiveID", typ: "" },
        { json: "Type", js: "Type", typ: r("ObjectiveType") },
        { json: "Difficulty", js: "Difficulty", typ: r("Difficulty") },
        { json: "DifficultyLevel", js: "DifficultyLevel", typ: u(0, null, "") },
        { json: "MaxInfluenceLevel", js: "MaxInfluenceLevel", typ: "" },
        { json: "FlagPvp", js: "FlagPvp", typ: u(true, null, "") },
        { json: "CanBeShared", js: "CanBeShared", typ: u(true, null, "") },
        { json: "CanFastTravel", js: "CanFastTravel", typ: u(true, null, "") },
        { json: "Task", js: "Task", typ: "" },
        { json: "NpcDestinationId", js: "NpcDestinationId", typ: "" },
        { json: "ExclusiveTerritory", js: "ExclusiveTerritory", typ: u(undefined, u(0, null, "")) },
        { json: "AchievementId", js: "AchievementId", typ: "" },
        { json: "RequiredAchievementId", js: "RequiredAchievementId", typ: u(undefined, "") },
        { json: "RequiredFaction", js: "RequiredFaction", typ: u(undefined, r("RequiredFaction")) },
        { json: "RequiredLevel", js: "RequiredLevel", typ: u(undefined, u(0, null, "")) },
        { json: "SuccessGameEventId", js: "SuccessGameEventId", typ: "" },
        { json: "FailureGameEventId", js: "FailureGameEventId", typ: r("FailureGameEventID") },
        { json: "ProgressionReward", js: "ProgressionReward", typ: u(undefined, r("ProgressionReward")) },
        { json: "ExperienceReward", js: "ExperienceReward", typ: "" },
        { json: "ObjectiveReward", js: "ObjectiveReward", typ: r("ObjectiveReward") },
        { json: "ItemRewardName", js: "ItemRewardName", typ: "" },
        { json: "ItemRewardQty", js: "ItemRewardQty", typ: u(0, null, "") },
        { json: "ShouldResetOnFactionChange", js: "ShouldResetOnFactionChange", typ: u(undefined, u(true, null, "")) },
        { json: "Repeatable", js: "Repeatable", typ: u(true, 0, null, "") },
        { json: "CanBeAbandoned", js: "CanBeAbandoned", typ: u(true, null, "") },
        { json: "Title", js: "Title", typ: "" },
        { json: "Description", js: "Description", typ: "" },
        { json: "PlayerPrompt", js: "PlayerPrompt", typ: "" },
        { json: "ObjectiveProposalResponse", js: "ObjectiveProposalResponse", typ: "" },
        { json: "InProgressResponse", js: "InProgressResponse", typ: "" },
        { json: "DestinationCompletionAvailablePrompt", js: "DestinationCompletionAvailablePrompt", typ: r("DestinationCompletionAvailablePrompt") },
        { json: "DestinationCompletionAvailableResponse", js: "DestinationCompletionAvailableResponse", typ: "" },
        { json: "ObjectiveCompletionResponse", js: "ObjectiveCompletionResponse", typ: "" },
        { json: "ObjectiveAcceptanceResponse", js: "ObjectiveAcceptanceResponse", typ: "" },
        { json: "HideIncompleteTurninMarker", js: "HideIncompleteTurninMarker", typ: u(true, r("UseAllDamageModifiers"), null) },
        { json: "ORMReleaseEventTags", js: "ORMReleaseEventTags", typ: u(undefined, r("ORMReleaseEventTags")) },
        { json: "ORMReleaseActiveOverride", js: "ORMReleaseActiveOverride", typ: u(undefined, "") },
        { json: "SkipReqAchievmentWhenInvalid", js: "SkipReqAchievmentWhenInvalid", typ: u(undefined, u(true, null, "")) },
        { json: "EntitlementId", js: "EntitlementId", typ: "" },
        { json: "QuestArcTag", js: "QuestArcTag", typ: u(undefined, r("QuestTag")) },
        { json: "HideAvailableMapIcon ", js: "HideAvailableMapIcon ", typ: u(undefined, u(true, null, "")) },
        { json: "TurnInTaskDescription", js: "TurnInTaskDescription", typ: u(undefined, "") },
        { json: "RequiredProgression", js: "RequiredProgression", typ: u(undefined, "") },
        { json: "RewardWithPlayerLevel", js: "RewardWithPlayerLevel", typ: u(undefined, u(true, null)) },
        { json: "RewardType", js: "RewardType", typ: u(undefined, r("CreatureTypeEnum")) },
    ], false),
    "ObjectiveTasks": o([
        { json: "TaskID", js: "TaskID", typ: "" },
        { json: "Type", js: "Type", typ: r("ObjectiveTaskType") },
        { json: "FailOnCondition", js: "FailOnCondition", typ: u(true, 0, null, "") },
        { json: "StayActive", js: "StayActive", typ: u(0, null, "") },
        { json: "RequiredLevel", js: "RequiredLevel", typ: u(undefined, u(0, null, "")) },
        { json: "TargetQty", js: "TargetQty", typ: u(0, null, "") },
        { json: "ItemName", js: "ItemName", typ: "" },
        { json: "ItemDropVC", js: "ItemDropVC", typ: "" },
        { json: "ItemDropProbability", js: "ItemDropProbability", typ: u(0, null, "") },
        { json: "ChestDropProbability", js: "ChestDropProbability", typ: u(0, null, "") },
        { json: "EnforceLocationRequirement", js: "EnforceLocationRequirement", typ: u(true, null, "") },
        { json: "TerritoryID", js: "TerritoryID", typ: u(0, null, "") },
        { json: "POITag", js: "POITag", typ: "" },
        { json: "GameModeID", js: "GameModeID", typ: u(undefined, r("GameModeID")) },
        { json: "LootTag", js: "LootTag", typ: "" },
        { json: "PauseAndClearLootOnTaskComplete", js: "PauseAndClearLootOnTaskComplete", typ: u(true, null, "") },
        { json: "AwardOnlyOnce", js: "AwardOnlyOnce", typ: u(undefined, u(true, null, "")) },
        { json: "ShouldCheckPoints", js: "ShouldCheckPoints", typ: u(undefined, u(true, null, "")) },
        { json: "GuranteedDropAttempts", js: "GuranteedDropAttempts", typ: u(undefined, u(true, 0, null, "")) },
        { json: "TargetThreshold", js: "TargetThreshold", typ: u(undefined, u(0, null, "")) },
        { json: "CraftingRecipeId", js: "CraftingRecipeId", typ: r("CraftingRecipeID") },
        { json: "CraftAnyRecipe", js: "CraftAnyRecipe", typ: "" },
        { json: "InteractTag", js: "InteractTag", typ: "" },
        { json: "UIScreenTag", js: "UIScreenTag", typ: "" },
        { json: "TriggerAreaType", js: "TriggerAreaType", typ: r("TriggerAreaType") },
        { json: "KillEnemyType", js: "KillEnemyType", typ: "" },
        { json: "KillEnemyWeaponID", js: "KillEnemyWeaponID", typ: r("KillEnemyWeaponIDEnum") },
        { json: "Duration", js: "Duration", typ: u(3.14, null, "") },
        { json: "TaskBuySellType", js: "TaskBuySellType", typ: "" },
        { json: "IsPurchaseOrEarn", js: "IsPurchaseOrEarn", typ: "" },
        { json: "IsExactMatch", js: "IsExactMatch", typ: "" },
        { json: "UseTypeAffix", js: "UseTypeAffix", typ: "" },
        { json: "TypeAffix", js: "TypeAffix", typ: "" },
        { json: "UseMatAffix", js: "UseMatAffix", typ: "" },
        { json: "MatAffix", js: "MatAffix", typ: "" },
        { json: "UseMagicAffix", js: "UseMagicAffix", typ: "" },
        { json: "MagicAffix", js: "MagicAffix", typ: "" },
        { json: "MapMarkerMapIcon", js: "MapMarkerMapIcon", typ: "" },
        { json: "MapMarkerTitleLocTag", js: "MapMarkerTitleLocTag", typ: "" },
        { json: "MapMarkerDescriptionLocTag", js: "MapMarkerDescriptionLocTag", typ: "" },
        { json: "MapMarkerWorldPositionX", js: "MapMarkerWorldPositionX", typ: u(0, null, "") },
        { json: "MapMarkerWorldPositionY", js: "MapMarkerWorldPositionY", typ: u(0, null, "") },
        { json: "MapMarkerWorldDistanceThreshold", js: "MapMarkerWorldDistanceThreshold", typ: u(0, null, "") },
        { json: "UseLargeItemDisplay", js: "UseLargeItemDisplay", typ: u(0, null, "") },
        { json: "TP_TargetTag", js: "TP_TargetTag", typ: "" },
        { json: "TP_DescriptionTag", js: "TP_DescriptionTag", typ: "" },
        { json: "TargetDescriptionTaskId", js: "TargetDescriptionTaskId", typ: u(undefined, r("TargetDescriptionTaskID")) },
        { json: "OverrideLocation", js: "OverrideLocation", typ: u(undefined, "") },
        { json: "IsHidden", js: "IsHidden", typ: u(0, null, "") },
        { json: "HideDiegeticGatherablePins", js: "HideDiegeticGatherablePins", typ: u(undefined, u(true, null, "")) },
        { json: "ShowDiegeticTaskPin", js: "ShowDiegeticTaskPin", typ: u(undefined, u(true, null, "")) },
        { json: "DiegeticPinZOverride", js: "DiegeticPinZOverride", typ: u(undefined, u(3.14, null, "")) },
        { json: "SS_VariantName", js: "SS_VariantName", typ: u(undefined, "") },
        { json: "SS_StatePreset", js: "SS_StatePreset", typ: u(undefined, r("SSStatePreset")) },
        { json: "CompletedNotificationId", js: "CompletedNotificationId", typ: "" },
        { json: "GridLayout", js: "GridLayout", typ: "" },
        { json: "CommunityGoalTag", js: "CommunityGoalTag", typ: "" },
        { json: "HideChildren", js: "HideChildren", typ: "" },
        { json: "TriggerAnalyticsEvent", js: "TriggerAnalyticsEvent", typ: u(null, "") },
        { json: "OnInteractStart", js: "OnInteractStart", typ: u(undefined, u(true, null, "")) },
        { json: "SubTask1", js: "SubTask1", typ: "" },
        { json: "SubTask2", js: "SubTask2", typ: "" },
        { json: "SubTask3", js: "SubTask3", typ: "" },
        { json: "SubTask4", js: "SubTask4", typ: "" },
        { json: "SubTask5", js: "SubTask5", typ: "" },
        { json: "UseGlobalStorage", js: "UseGlobalStorage", typ: u(undefined, u(true, null, "")) },
        { json: "DiegeticTaskPinZPosOverride", js: "DiegeticTaskPinZPosOverride", typ: u(undefined, "") },
        { json: "TP_StayComplete", js: "TP_StayComplete", typ: u(undefined, u(0, null, "")) },
        { json: "TP_MapIcon", js: "TP_MapIcon", typ: u(undefined, "") },
        { json: "TP_ShowOnMap", js: "TP_ShowOnMap", typ: u(undefined, "") },
        { json: "TP_ShowOnCompass", js: "TP_ShowOnCompass", typ: u(undefined, "") },
        { json: "ResetOnCondition", js: "ResetOnCondition", typ: u(undefined, u(0, null)) },
    ], false),
    "ParticleContextualPriorityOverrideData": o([
        { json: "EffectName", js: "EffectName", typ: "" },
        { json: "PriorityOverride", js: "PriorityOverride", typ: r("PriorityOverride") },
    ], false),
    "ParticleData": o([
        { json: "Effect Name", js: "Effect Name", typ: "" },
        { json: "Group", js: "Group", typ: "" },
        { json: "Priority Within Group", js: "Priority Within Group", typ: 0 },
        { json: "Max Number", js: "Max Number", typ: 0 },
        { json: "Priority", js: "Priority", typ: 0 },
        { json: "Constants", js: "Constants", typ: u(0, null) },
    ], false),
    "PerkData": o([
        { json: "PerkID", js: "PerkID", typ: "" },
        { json: "PerkType", js: "PerkType", typ: r("PerkType") },
        { json: "ConditionEvent", js: "ConditionEvent", typ: r("ConditionEvent") },
        { json: "ItemClass", js: "ItemClass", typ: "" },
        { json: "ExcludeItemClass", js: "ExcludeItemClass", typ: "" },
        { json: "Channel", js: "Channel", typ: 0 },
        { json: "ExclusiveLabels", js: "ExclusiveLabels", typ: "" },
        { json: "ItemPerkConflictsLocText", js: "ItemPerkConflictsLocText", typ: u(undefined, r("ItemPerkConflictsLOCText")) },
        { json: "DeprecatedPerkId", js: "DeprecatedPerkId", typ: r("DeprecatedPerkID") },
        { json: "ScalingPerGearScore", js: "ScalingPerGearScore", typ: u(3.14, null, "") },
        { json: "ItemClassGSBonus", js: "ItemClassGSBonus", typ: r("ItemClassGSBonus") },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "Description", js: "Description", typ: "" },
        { json: "GroupName", js: "GroupName", typ: r("GroupName") },
        { json: "Tier", js: "Tier", typ: u(0, null, "") },
        { json: "ExcludeFromTradingPost", js: "ExcludeFromTradingPost", typ: "" },
        { json: "AppliedPrefix", js: "AppliedPrefix", typ: r("AppliedPrefix") },
        { json: "AppliedSuffix", js: "AppliedSuffix", typ: r("AppliedSuffix") },
        { json: "NamePriority", js: "NamePriority", typ: "" },
        { json: "IconPath", js: "IconPath", typ: "" },
        { json: "Affix", js: "Affix", typ: "" },
        { json: "EquipAbility", js: "EquipAbility", typ: "" },
        { json: "DayPhases", js: "DayPhases", typ: r("DayPhases") },
        { json: "FishingWaterType", js: "FishingWaterType", typ: r("FishingWaterType") },
        { json: "TerritoryId", js: "TerritoryId", typ: "" },
        { json: "CombatStatus", js: "CombatStatus", typ: "" },
        { json: "WeaponTag", js: "WeaponTag", typ: u(undefined, r("WeaponTag")) },
        { json: "Category", js: "Category", typ: r("AchievementCategoryEnum") },
    ], false),
    "PerkExclusiveLabelData": o([
        { json: "ExclusiveLabelID", js: "ExclusiveLabelID", typ: "" },
        { json: "Weight", js: "Weight", typ: 0 },
        { json: "ItemClassOverrides", js: "ItemClassOverrides", typ: r("ItemClassOverrides") },
    ], false),
    "PlayerTitleData": o([
        { json: "TitleID", js: "TitleID", typ: "" },
        { json: "TitleType", js: "TitleType", typ: r("TitleType") },
        { json: "UIDisplayCategory", js: "UIDisplayCategory", typ: "" },
        { json: "TitleMale", js: "TitleMale", typ: "" },
        { json: "TitleFemale", js: "TitleFemale", typ: "" },
        { json: "TitleNeutral", js: "TitleNeutral", typ: "" },
        { json: "Description", js: "Description", typ: "" },
        { json: "MetaAchievementId", js: "MetaAchievementId", typ: "" },
        { json: "AchievementId", js: "AchievementId", typ: r("PermanentOwnershipAchievementIDEnum") },
        { json: "CategoricalProgressionId", js: "CategoricalProgressionId", typ: r("GatheringTradeskill") },
        { json: "RequiredCategoricalProgressionLevel", js: "RequiredCategoricalProgressionLevel", typ: u(0, null) },
        { json: "RequiredPlayerLevel", js: "RequiredPlayerLevel", typ: u(0, null) },
    ], false),
    "ProgressionPointData": o([
        { json: "ProgressionPointId", js: "ProgressionPointId", typ: "" },
        { json: "Description", js: "Description", typ: "" },
        { json: "PointPoolId", js: "PointPoolId", typ: r("KillEnemyWeaponIDEnum") },
        { json: "IsAbility", js: "IsAbility", typ: "" },
        { json: "DoNotSpendPoint", js: "DoNotSpendPoint", typ: r("UseAllDamageModifiers") },
        { json: "PoolCategory", js: "PoolCategory", typ: r("PoolCategory") },
        { json: "TerritoryBonusCategory", js: "TerritoryBonusCategory", typ: r("TerritoryBonusCategory") },
        { json: "MaxLevel", js: "MaxLevel", typ: 0 },
        { json: "RequiredCharacterLevel", js: "RequiredCharacterLevel", typ: "" },
        { json: "RequiredCategoricalProgressionId", js: "RequiredCategoricalProgressionId", typ: "" },
        { json: "RequiredCategoricalProgressionLevel", js: "RequiredCategoricalProgressionLevel", typ: u(0, null) },
        { json: "RequiredProgressionPointId", js: "RequiredProgressionPointId", typ: "" },
        { json: "RequiredProgressionPointLevel", js: "RequiredProgressionPointLevel", typ: u(0, null) },
        { json: "UpgradeCardDescription", js: "UpgradeCardDescription", typ: "" },
        { json: "UpgradeCardSprite", js: "UpgradeCardSprite", typ: r("UpgradeCardSprite") },
        { json: "UpgradeCardIcon", js: "UpgradeCardIcon", typ: "" },
        { json: "UpgradeCardCategory", js: "UpgradeCardCategory", typ: r("UpgradeCardCategory") },
        { json: "UpgradeCardStat", js: "UpgradeCardStat", typ: r("UpgradeCardStat") },
    ], false),
    "ProgressionPoolData": o([
        { json: "ProgressionPoolId", js: "ProgressionPoolId", typ: "" },
        { json: "Category", js: "Category", typ: r("ProgressionPoolDatumCategory") },
        { json: "PointCap", js: "PointCap", typ: 0 },
        { json: "InitialPoints", js: "InitialPoints", typ: "" },
        { json: "VersionNumber", js: "VersionNumber", typ: u(0, null) },
    ], false),
    "PromotionMutationStaticData": o([
        { json: "PromotionMutationId", js: "PromotionMutationId", typ: "" },
        { json: "Promotion1", js: "Promotion1", typ: "" },
        { json: "Promotion2", js: "Promotion2", typ: "" },
        { json: "Promotion3", js: "Promotion3", typ: "" },
        { json: "Name", js: "Name", typ: "" },
        { json: "Description", js: "Description", typ: "" },
        { json: "IconPath", js: "IconPath", typ: "" },
        { json: "TextColor", js: "TextColor", typ: "" },
        { json: "BackgroundColor", js: "BackgroundColor", typ: "" },
    ], false),
    "PVPRankData": o([
        { json: "Level", js: "Level", typ: 0 },
        { json: "DisplayName", js: "DisplayName", typ: r("PVPRankDatumDisplayName") },
        { json: "RequiredLevel", js: "RequiredLevel", typ: 0 },
        { json: "MaximumInfluence", js: "MaximumInfluence", typ: 0 },
        { json: "InfluenceCost", js: "InfluenceCost", typ: 0 },
        { json: "Stage1XP", js: "Stage1XP", typ: 0 },
        { json: "Stage2XP", js: "Stage2XP", typ: 0 },
        { json: "Stage3XP", js: "Stage3XP", typ: 0 },
        { json: "BorderTier", js: "BorderTier", typ: 0 },
        { json: "GameEventId", js: "GameEventId", typ: r("PVPRankDatumGameEventID") },
        { json: "AzothSaltReward", js: "AzothSaltReward", typ: u(0, null) },
        { json: "RewardDescription", js: "RewardDescription", typ: r("RewardDescription") },
        { json: "SkipStage1Salt", js: "SkipStage1Salt", typ: 0 },
        { json: "SkipStage2Salt", js: "SkipStage2Salt", typ: 0 },
        { json: "SkipStage3Salt", js: "SkipStage3Salt", typ: 0 },
    ], false),
    "PVPStoreData": o([
        { json: "RowPlaceholders", js: "RowPlaceholders", typ: "" },
        { json: "Bucket1", js: "Bucket1", typ: r("Bucket1") },
        { json: "Tag1", js: "Tag1", typ: "" },
        { json: "MatchOne1", js: "MatchOne1", typ: u(true, null) },
        { json: "RewardId1", js: "RewardId1", typ: "" },
        { json: "Entitlement1", js: "Entitlement1", typ: "" },
        { json: "GameEvent1", js: "GameEvent1", typ: "" },
        { json: "Item1", js: "Item1", typ: "" },
        { json: "RandomWeights1", js: "RandomWeights1", typ: u(0, null) },
        { json: "BudgetContribution1", js: "BudgetContribution1", typ: u(0, null) },
        { json: "Type1", js: "Type1", typ: r("ExcludeTypeShop1") },
        { json: "SelectOnceOnly1", js: "SelectOnceOnly1", typ: u(true, null) },
        { json: "ExcludeTypeStage1", js: "ExcludeTypeStage1", typ: r("ExcludeTypeShop1") },
        { json: "ExcludeTypeShop1", js: "ExcludeTypeShop1", typ: r("ExcludeTypeShop1") },
        { json: "Bucket2", js: "Bucket2", typ: r("Bucket2") },
        { json: "Tag2", js: "Tag2", typ: "" },
        { json: "MatchOne2", js: "MatchOne2", typ: u(true, null) },
        { json: "RewardId2", js: "RewardId2", typ: "" },
        { json: "Entitlement2", js: "Entitlement2", typ: "" },
        { json: "GameEvent2", js: "GameEvent2", typ: "" },
        { json: "Item2", js: "Item2", typ: "" },
        { json: "RandomWeights2", js: "RandomWeights2", typ: 0 },
        { json: "BudgetContribution2", js: "BudgetContribution2", typ: 0 },
        { json: "Type2", js: "Type2", typ: r("ExcludeTypeShop1") },
        { json: "SelectOnceOnly2", js: "SelectOnceOnly2", typ: true },
        { json: "ExcludeTypeStage2", js: "ExcludeTypeStage2", typ: r("ItemType") },
        { json: "ExcludeTypeShop2", js: "ExcludeTypeShop2", typ: r("ExcludeTypeShop1") },
        { json: "Bucket3", js: "Bucket3", typ: r("Bucket3") },
        { json: "Tag3", js: "Tag3", typ: "" },
        { json: "MatchOne3", js: "MatchOne3", typ: u(true, null) },
        { json: "RewardId3", js: "RewardId3", typ: "" },
        { json: "Entitlement3", js: "Entitlement3", typ: r("Entitlement3") },
        { json: "GameEvent3", js: "GameEvent3", typ: "" },
        { json: "Item3", js: "Item3", typ: "" },
        { json: "RandomWeights3", js: "RandomWeights3", typ: u(0, null) },
        { json: "BudgetContribution3", js: "BudgetContribution3", typ: u(0, null) },
        { json: "Type3", js: "Type3", typ: r("ExcludeTypeShop1") },
        { json: "SelectOnceOnly3", js: "SelectOnceOnly3", typ: u(true, null) },
        { json: "ExcludeTypeStage3", js: "ExcludeTypeStage3", typ: r("ExcludeTypeShop1") },
        { json: "ExcludeTypeShop3", js: "ExcludeTypeShop3", typ: r("ExcludeTypeShop1") },
    ], false),
    "RandomEncounterDefinitions": o([
        { json: "AreaID", js: "AreaID", typ: "" },
        { json: "VitalsLevelRange", js: "VitalsLevelRange", typ: r("VitalsLevelRange") },
    ], false),
    "RefiningRecipes": o([
        { json: "StructureID", js: "StructureID", typ: "" },
        { json: "RefineType", js: "RefineType", typ: "" },
        { json: "TooltipText", js: "TooltipText", typ: "" },
        { json: "FuelCategory", js: "FuelCategory", typ: "" },
    ], false),
    "ResourceItemDefinitions": o([
        { json: "ResourceID", js: "ResourceID", typ: "" },
        { json: "SocketType", js: "SocketType", typ: r("SocketType") },
        { json: "GemPerk", js: "GemPerk", typ: "" },
        { json: "PerkBucket", js: "PerkBucket", typ: "" },
    ], false),
    "RewardMilestoneData": o([
        { json: "RewardID", js: "RewardID", typ: "" },
        { json: "MilestoneType", js: "MilestoneType", typ: r("MilestoneType") },
        { json: "MilestoneLevel", js: "MilestoneLevel", typ: 0 },
        { json: "Name", js: "Name", typ: "" },
        { json: "Icon", js: "Icon", typ: "" },
        { json: "Image", js: "Image", typ: "" },
        { json: "Tooltip", js: "Tooltip", typ: "" },
        { json: "Notes", js: "Notes", typ: r("RewardMilestoneDatumNotes") },
    ], false),
    "RewardModifierData": o([
        { json: "Modifiers", js: "Modifiers", typ: "" },
        { json: "Experience", js: "Experience", typ: 3.14 },
        { json: "Currency", js: "Currency", typ: u(3.14, null) },
        { json: "CurrencyRewardChance", js: "CurrencyRewardChance", typ: u(0, null) },
        { json: "TerritoryStanding", js: "TerritoryStanding", typ: u(3.14, null) },
        { json: "Azoth", js: "Azoth", typ: u(3.14, null) },
        { json: "LootDropModifier", js: "LootDropModifier", typ: 3.14 },
        { json: "FactionReputationModifier", js: "FactionReputationModifier", typ: u(3.14, null) },
        { json: "FactionTokenModifier", js: "FactionTokenModifier", typ: u(3.14, null) },
        { json: "AzothSaltModifier", js: "AzothSaltModifier", typ: u(0, null) },
        { json: "PvpXpModifier", js: "PvpXpModifier", typ: u(0, null) },
        { json: "SeasonsXpModifier", js: "SeasonsXpModifier", typ: 0 },
        { json: "Notes", js: "Notes", typ: "" },
        { json: "Found in", js: "Found in", typ: "" },
    ], false),
    "RewardTrackItemData": o([
        { json: "RewardId", js: "RewardId", typ: "" },
        { json: "Entitlement", js: "Entitlement", typ: r("Entitlement") },
        { json: "GameEvent", js: "GameEvent", typ: "" },
        { json: "Item", js: "Item", typ: "" },
        { json: "Name", js: "Name", typ: "" },
        { json: "Description", js: "Description", typ: "" },
        { json: "Quantity", js: "Quantity", typ: 0 },
        { json: "RollOnPresent", js: "RollOnPresent", typ: u(true, null) },
        { json: "CategoricalProgressionId", js: "CategoricalProgressionId", typ: r("RewardTrackItemDatumCategoricalProgressionID") },
        { json: "BuyCategoricalProgressionCost", js: "BuyCategoricalProgressionCost", typ: 0 },
        { json: "IconPath", js: "IconPath", typ: "" },
        { json: "HiResIconPath", js: "HiResIconPath", typ: "" },
        { json: "UseLevelGS", js: "UseLevelGS", typ: "" },
    ], false),
    "ScheduleData": o([
        { json: "ScheduleId", js: "ScheduleId", typ: "" },
        { json: "StartDate", js: "StartDate", typ: "" },
        { json: "EndDate", js: "EndDate", typ: "" },
        { json: "StartWeekday", js: "StartWeekday", typ: "" },
        { json: "EndWeekday", js: "EndWeekday", typ: "" },
        { json: "UTC", js: "UTC", typ: u(true, null) },
        { json: "Comments", js: "Comments", typ: "" },
    ], false),
    "SeasonPassRankData": o([
        { json: "Level", js: "Level", typ: 0 },
        { json: "MaximumInfluence", js: "MaximumInfluence", typ: 0 },
        { json: "InfluenceCost", js: "InfluenceCost", typ: 0 },
        { json: "FreeRewardId", js: "FreeRewardId", typ: "" },
        { json: "PremiumRewardId", js: "PremiumRewardId", typ: "" },
    ], false),
    "SeasonsRewardData": o([
        { json: "RewardId", js: "RewardId", typ: "" },
        { json: "RewardIndex", js: "RewardIndex", typ: 0 },
        { json: "RewardType", js: "RewardType", typ: r("RewardTypeEnum") },
        { json: "ItemId", js: "ItemId", typ: "" },
        { json: "EntitlementId", js: "EntitlementId", typ: "" },
        { json: "EntitlementQuantity", js: "EntitlementQuantity", typ: u(0, null) },
        { json: "DisplayItemId", js: "DisplayItemId", typ: "" },
        { json: "SeasonsXp", js: "SeasonsXp", typ: u(0, null) },
        { json: "SeasonsXpModifiable", js: "SeasonsXpModifiable", typ: "" },
        { json: "LimitingEntitlementId", js: "LimitingEntitlementId", typ: r("LimitingEntitlementID") },
    ], false),
    "SeasonsRewardsActivitiesConfig": o([
        { json: "ConfigId", js: "ConfigId", typ: "" },
        { json: "ConfigValue", js: "ConfigValue", typ: 0 },
    ], false),
    "SeasonsRewardsActivitiesTasksData": o([
        { json: "ActivitiesTaskId", js: "ActivitiesTaskId", typ: "" },
        { json: "Task", js: "Task", typ: "" },
        { json: "Type", js: "Type", typ: r("Column1TypeEnum") },
        { json: "Description", js: "Description", typ: "" },
        { json: "Active", js: "Active", typ: r("Active") },
    ], false),
    "SeasonsRewardsCardData": o([
        { json: "CardID", js: "CardID", typ: r("CardIDEnum") },
        { json: "StampsToComplete", js: "StampsToComplete", typ: 0 },
        { json: "LineBonusXp", js: "LineBonusXp", typ: 0 },
        { json: "PatternBonusXp", js: "PatternBonusXp", typ: 0 },
        { json: "CardBonusXp", js: "CardBonusXp", typ: 0 },
    ], false),
    "SeasonsRewardsCardTemplates": o([
        { json: "CardAndRowID", js: "CardAndRowID", typ: "" },
        { json: "Column1Type", js: "Column1Type", typ: r("Column1TypeEnum") },
        { json: "Column1XP", js: "Column1XP", typ: 0 },
        { json: "Column1Special", js: "Column1Special", typ: "" },
        { json: "Column2Type", js: "Column2Type", typ: r("Column1TypeEnum") },
        { json: "Column2XP", js: "Column2XP", typ: 0 },
        { json: "Column2Special", js: "Column2Special", typ: "" },
        { json: "Column3Type", js: "Column3Type", typ: r("Column1TypeEnum") },
        { json: "Column3XP", js: "Column3XP", typ: 0 },
        { json: "Column3Special", js: "Column3Special", typ: "" },
        { json: "Column4Type", js: "Column4Type", typ: r("Column1TypeEnum") },
        { json: "Column4XP", js: "Column4XP", typ: 0 },
        { json: "Column4Special", js: "Column4Special", typ: "" },
    ], false),
    "SeasonsRewardsChapterData": o([
        { json: "ChapterId", js: "ChapterId", typ: r("Chapter") },
        { json: "ChapterType", js: "ChapterType", typ: "" },
        { json: "ChapterIndex", js: "ChapterIndex", typ: 0 },
        { json: "ChapterTaskCount", js: "ChapterTaskCount", typ: 0 },
        { json: "ChapterRewardId", js: "ChapterRewardId", typ: "" },
    ], false),
    "SeasonsRewardsJourneyData": o([
        { json: "JourneyTaskId", js: "JourneyTaskId", typ: "" },
        { json: "Chapter", js: "Chapter", typ: r("Chapter") },
        { json: "Task", js: "Task", typ: "" },
        { json: "RewardID", js: "RewardID", typ: "" },
        { json: "SortOrder", js: "SortOrder", typ: 0 },
    ], false),
    "SeasonsRewardsSeasonData": o([
        { json: "SeasonId", js: "SeasonId", typ: "" },
        { json: "SeasonIndex", js: "SeasonIndex", typ: 0 },
        { json: "Name", js: "Name", typ: "" },
        { json: "Description", js: "Description", typ: "" },
        { json: "TotalXPToEarn", js: "TotalXPToEarn", typ: 0 },
        { json: "PremiumEntitlementId", js: "PremiumEntitlementId", typ: "" },
        { json: "PurchasedLevelsEntitlementId", js: "PurchasedLevelsEntitlementId", typ: "" },
    ], false),
    "SeasonsRewardsStats": o([
        { json: "TrackedStatID", js: "TrackedStatID", typ: "" },
        { json: "StatType", js: "StatType", typ: "" },
        { json: "TargetID", js: "TargetID", typ: u(undefined, "") },
        { json: "Categories", js: "Categories", typ: u(undefined, "") },
        { json: "MustWin", js: "MustWin", typ: u(undefined, u(true, null)) },
        { json: "GameModeResult", js: "GameModeResult", typ: u(undefined, "") },
        { json: "CategoricalProgressionIds", js: "CategoricalProgressionIds", typ: u(undefined, "") },
        { json: "TrackingType", js: "TrackingType", typ: u(undefined, "") },
        { json: "IsDebit", js: "IsDebit", typ: u(undefined, u(true, null)) },
        { json: "Reasons", js: "Reasons", typ: u(undefined, "") },
        { json: "IsPVP", js: "IsPVP", typ: u(undefined, u(true, null)) },
        { json: "IsHealing", js: "IsHealing", typ: u(undefined, true) },
        { json: "IsDamage", js: "IsDamage", typ: u(undefined, true) },
        { json: "GameMode", js: "GameMode", typ: u(undefined, r("GameMode")) },
        { json: "IsInvasion", js: "IsInvasion", typ: u(undefined, u(true, null, "")) },
        { json: "IsWar", js: "IsWar", typ: u(undefined, "") },
        { json: "IsOutpostRush", js: "IsOutpostRush", typ: u(undefined, true) },
        { json: "Target", js: "Target", typ: u(undefined, "") },
        { json: "ItemTier", js: "ItemTier", typ: u(undefined, u(0, null)) },
        { json: "ItemClass", js: "ItemClass", typ: u(undefined, "") },
        { json: "TradingCategories", js: "TradingCategories", typ: u(undefined, r("TradingCategories")) },
        { json: "TradingFamilies", js: "TradingFamilies", typ: u(undefined, r("TradingFamil")) },
        { json: "TradingGroups", js: "TradingGroups", typ: u(undefined, r("TradingGroups")) },
        { json: "IngredientItemID", js: "IngredientItemID", typ: u(undefined, "") },
        { json: "ResultItemID", js: "ResultItemID", typ: u(undefined, "") },
        { json: "ItemGS", js: "ItemGS", typ: u(undefined, u(0, null)) },
        { json: "ItemRarity", js: "ItemRarity", typ: u(undefined, u(0, null)) },
        { json: "ExcludeItemClass", js: "ExcludeItemClass", typ: u(undefined, "") },
        { json: "CraftingType", js: "CraftingType", typ: u(undefined, r("CraftingType")) },
        { json: "PerUse", js: "PerUse", typ: u(undefined, u(true, null, "")) },
        { json: "Tradeskills", js: "Tradeskills", typ: u(undefined, "") },
        { json: "CraftingCategories", js: "CraftingCategories", typ: u(undefined, "") },
        { json: "CraftingGroups", js: "CraftingGroups", typ: u(undefined, "") },
        { json: "Level", js: "Level", typ: u(undefined, u(0, null, "")) },
        { json: "MutationLevel", js: "MutationLevel", typ: u(undefined, u(0, null)) },
        { json: "RequireGroup", js: "RequireGroup", typ: u(undefined, u(true, null, "")) },
        { json: "Score", js: "Score", typ: u(undefined, u(0, null)) },
        { json: "MutatorRank", js: "MutatorRank", typ: u(undefined, r("MutatorRank")) },
        { json: "IsFlawless", js: "IsFlawless", typ: u(undefined, u(true, null)) },
        { json: "MinWeight", js: "MinWeight", typ: u(undefined, "") },
        { json: "Precision", js: "Precision", typ: u(undefined, u(0, null)) },
        { json: "GameEventTypes", js: "GameEventTypes", typ: u(undefined, r("GameEventType")) },
        { json: "CreatureTypes", js: "CreatureTypes", typ: u(undefined, "") },
        { json: "GameEventIDs", js: "GameEventIDs", typ: u(undefined, "") },
        { json: "ItemType", js: "ItemType", typ: u(undefined, r("ItemType")) },
        { json: "ChapterType", js: "ChapterType", typ: u(undefined, "") },
        { json: "ChapterIndex", js: "ChapterIndex", typ: u(undefined, u(0, null)) },
        { json: "IsPermanent", js: "IsPermanent", typ: u(undefined, true) },
        { json: "VitalsCategories", js: "VitalsCategories", typ: u(undefined, "") },
        { json: "WeaponMasteryIds", js: "WeaponMasteryIds", typ: u(undefined, "") },
        { json: "OpenWorldOnly", js: "OpenWorldOnly", typ: u(undefined, u(true, null)) },
        { json: "POITags", js: "POITags", typ: u(undefined, "") },
        { json: "LootTags", js: "LootTags", typ: u(undefined, r("Conditions")) },
        { json: "IsKillingBlow", js: "IsKillingBlow", typ: u(undefined, u(true, null)) },
        { json: "QuestType", js: "QuestType", typ: u(undefined, "") },
        { json: "SongDifficulty", js: "SongDifficulty", typ: u(undefined, "") },
        { json: "SongRank", js: "SongRank", typ: u(undefined, "") },
    ], false),
    "SeasonsRewardsTasks": o([
        { json: "SeasonsTaskID", js: "SeasonsTaskID", typ: "" },
        { json: "SeasonsTrackedStatID", js: "SeasonsTrackedStatID", typ: "" },
        { json: "TaskMaxValue", js: "TaskMaxValue", typ: 0 },
        { json: "Name", js: "Name", typ: "" },
        { json: "Description", js: "Description", typ: "" },
    ], false),
    "SimpleTreeCategoryData": o([
        { json: "MetaAchievementCategoryId", js: "MetaAchievementCategoryId", typ: "" },
        { json: "Parent Category", js: "Parent Category", typ: r("FactionInfluenceSrc") },
        { json: "Index", js: "Index", typ: 0 },
        { json: "Title", js: "Title", typ: "" },
        { json: "Icon Color Background", js: "Icon Color Background", typ: u(undefined, "") },
        { json: "HideFromUI", js: "HideFromUI", typ: u(undefined, u(true, null)) },
    ], false),
    "SkillData": o([
        { json: "SkillID", js: "SkillID", typ: "" },
        { json: "Name", js: "Name", typ: "" },
        { json: "CategoryID", js: "CategoryID", typ: r("CategoryID") },
        { json: "CategoryDisplay", js: "CategoryDisplay", typ: r("CategoryDisplay") },
        { json: "MaxLevel", js: "MaxLevel", typ: 0 },
        { json: "Icon", js: "Icon", typ: "" },
        { json: "PassiveStatusEffect", js: "PassiveStatusEffect", typ: "" },
        { json: "Perks", js: "Perks", typ: "" },
        { json: "Description", js: "Description", typ: "" },
    ], false),
    "SkillExperienceData": o([
        { json: "SkillLevel", js: "SkillLevel", typ: 0 },
        { json: "RequiredExp", js: "RequiredExp", typ: 0 },
    ], false),
    "Socketables": o([
        { json: "SocketableID", js: "SocketableID", typ: "" },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "Health", js: "Health", typ: 0 },
    ], false),
    "SongBookData": o([
        { json: "SongId", js: "SongId", typ: "" },
        { json: "MusicTitle", js: "MusicTitle", typ: "" },
        { json: "Performance", js: "Performance", typ: r("Performance") },
        { json: "FilterType", js: "FilterType", typ: r("FilterType") },
        { json: "NotePattern", js: "NotePattern", typ: r("NotePattern") },
        { json: "SoundBank", js: "SoundBank", typ: "" },
        { json: "Slot01", js: "Slot01", typ: "" },
        { json: "Slot02", js: "Slot02", typ: "" },
        { json: "Slot03", js: "Slot03", typ: "" },
        { json: "Slot04", js: "Slot04", typ: "" },
        { json: "Slot05", js: "Slot05", typ: "" },
        { json: "Crowd", js: "Crowd", typ: "" },
        { json: "Tempo", js: "Tempo", typ: 0 },
        { json: "ScrollSpeed", js: "ScrollSpeed", typ: 3.14 },
        { json: "Duration", js: "Duration", typ: 3.14 },
        { json: "HitZone", js: "HitZone", typ: 3.14 },
        { json: "PerfectZone", js: "PerfectZone", typ: 3.14 },
        { json: "DanceTimeline", js: "DanceTimeline", typ: r("DanceTimeline") },
        { json: "CompletionGameEvent", js: "CompletionGameEvent", typ: r("CompletionGameEvent") },
        { json: "TippingDurationMs", js: "TippingDurationMs", typ: u(0, null) },
        { json: "HighestRankAchievementId", js: "HighestRankAchievementId", typ: "" },
    ], false),
    "SongBookSheets": o([
        { json: "SheetId", js: "SheetId", typ: "" },
        { json: "Instrument", js: "Instrument", typ: r("PaperdollID") },
        { json: "SheetName", js: "SheetName", typ: r("SheetName") },
        { json: "Pages", js: "Pages", typ: "" },
        { json: "AudioEvent", js: "AudioEvent", typ: "" },
        { json: "ErrorEvent", js: "ErrorEvent", typ: r("ErrorEvent") },
        { json: "Timeline", js: "Timeline", typ: "" },
    ], false),
    "SpellData": o([
        { json: "SpellID", js: "SpellID", typ: "" },
        { json: "StatusEffects", js: "StatusEffects", typ: "" },
        { json: "StatusEffectDurations", js: "StatusEffectDurations", typ: u(0, null, "") },
        { json: "Revive", js: "Revive", typ: u(true, null, "") },
        { json: "Siphon", js: "Siphon", typ: u(true, null, "") },
        { json: "AttachToOwner", js: "AttachToOwner", typ: u(true, null, "") },
        { json: "StickWhenAttached", js: "StickWhenAttached", typ: u(true, null, "") },
        { json: "StoreOffsetWhenStuckToGDE", js: "StoreOffsetWhenStuckToGDE", typ: u(true, null, "") },
        { json: "UseDirectTargetAsAttachOwner", js: "UseDirectTargetAsAttachOwner", typ: u(true, null, "") },
        { json: "SpawnSecondaryOnElapsed", js: "SpawnSecondaryOnElapsed", typ: u(true, null, "") },
        { json: "SpawnSecondaryOnCollision", js: "SpawnSecondaryOnCollision", typ: u(true, null, "") },
        { json: "EndOnCasterDeath", js: "EndOnCasterDeath", typ: u(true, null, "") },
        { json: "IgnoreTargetIfAtDeathsDoor", js: "IgnoreTargetIfAtDeathsDoor", typ: u(true, null, "") },
        { json: "IgnoreTargetIfDead", js: "IgnoreTargetIfDead", typ: u(true, null, "") },
        { json: "UseCameraTargetLock", js: "UseCameraTargetLock", typ: u(true, null, "") },
        { json: "TrackNumInVolume", js: "TrackNumInVolume", typ: u(true, null, "") },
        { json: "ClearOnExit", js: "ClearOnExit", typ: u(true, null, "") },
        { json: "ClearOnEnd", js: "ClearOnEnd", typ: u(true, null, "") },
        { json: "ManaCost", js: "ManaCost", typ: "" },
        { json: "UseStatusEffectDuration", js: "UseStatusEffectDuration", typ: u(true, null) },
        { json: "Duration", js: "Duration", typ: u(0, null) },
        { json: "DurationScaling", js: "DurationScaling", typ: "" },
        { json: "Height", js: "Height", typ: u(3.14, null, "") },
        { json: "Length", js: "Length", typ: u(3.14, null, "") },
        { json: "Radius", js: "Radius", typ: u(3.14, null) },
        { json: "InnerRadius", js: "InnerRadius", typ: u(3.14, null, "") },
        { json: "RadiusScaling", js: "RadiusScaling", typ: u(0, null, "") },
        { json: "MaxRadiusScaling", js: "MaxRadiusScaling", typ: "" },
        { json: "CastDistance", js: "CastDistance", typ: u(3.14, null) },
        { json: "CastHeight", js: "CastHeight", typ: u(3.14, null, "") },
        { json: "CastRadius", js: "CastRadius", typ: u(3.14, null, "") },
        { json: "ConeAngle", js: "ConeAngle", typ: u(0, null, "") },
        { json: "ConeWidth", js: "ConeWidth", typ: u(3.14, null, "") },
        { json: "ChannelTime", js: "ChannelTime", typ: u(3.14, null) },
        { json: "ChainDelayDuration", js: "ChainDelayDuration", typ: u(3.14, null, "") },
        { json: "MaxChainNum", js: "MaxChainNum", typ: u(0, null, "") },
        { json: "UseChainCasterPaperdoll", js: "UseChainCasterPaperdoll", typ: u(true, null, "") },
        { json: "SpawnBeamCasterJoint", js: "SpawnBeamCasterJoint", typ: u(undefined, r("SpawnBeamCasterJoint")) },
        { json: "NumToSpawn", js: "NumToSpawn", typ: u(0, null, "") },
        { json: "NumToSpawnBeforeFail", js: "NumToSpawnBeforeFail", typ: u(0, null, "") },
        { json: "SpawnRate", js: "SpawnRate", typ: u(0, null, "") },
        { json: "SpawnAngle", js: "SpawnAngle", typ: u(0, null, "") },
        { json: "EvenlyDistributeMeteorSpawns", js: "EvenlyDistributeMeteorSpawns", typ: u(undefined, u(true, null)) },
        { json: "SecondarySpellProjectileLaunchAngles", js: "SecondarySpellProjectileLaunchAngles", typ: "" },
        { json: "SecondaryProjectileLaunchMinZSpeeds", js: "SecondaryProjectileLaunchMinZSpeeds", typ: u(undefined, "") },
        { json: "SecondaryProjectileLaunchMaxZSpeeds", js: "SecondaryProjectileLaunchMaxZSpeeds", typ: u(undefined, "") },
        { json: "SecondaryProjectileLaunchZOffset", js: "SecondaryProjectileLaunchZOffset", typ: u(undefined, u(3.14, null)) },
        { json: "IgnoreRotationForSecondaryProjectileLaunchZSpd", js: "IgnoreRotationForSecondaryProjectileLaunchZSpd", typ: u(undefined, u(true, null)) },
        { json: "ScaleWithCharacterBoundingBox", js: "ScaleWithCharacterBoundingBox", typ: u(true, null, "") },
        { json: "ScaleWithDynamicScale", js: "ScaleWithDynamicScale", typ: u(true, null, "") },
        { json: "TargetTypes", js: "TargetTypes", typ: r("TargetTypes") },
        { json: "SpellTypes", js: "SpellTypes", typ: r("SpellTypes") },
        { json: "CastingTypes", js: "CastingTypes", typ: r("CastingTypes") },
        { json: "HitAiTarget", js: "HitAiTarget", typ: u(true, null, "") },
        { json: "OverrideTargetForAiThreat", js: "OverrideTargetForAiThreat", typ: u(true, null, "") },
        { json: "ShapeTypes", js: "ShapeTypes", typ: r("ShapeTypes") },
        { json: "DamageType", js: "DamageType", typ: r("DamageTypes") },
        { json: "CheckObstructions", js: "CheckObstructions", typ: u(true, null, "") },
        { json: "IgnoreOverheadCollision", js: "IgnoreOverheadCollision", typ: u(true, null) },
        { json: "IgnoreStructures", js: "IgnoreStructures", typ: u(true, null, "") },
        { json: "IgnoreSelf", js: "IgnoreSelf", typ: u(true, null, "") },
        { json: "IsUnaffiliated", js: "IsUnaffiliated", typ: u(undefined, u(true, null)) },
        { json: "WeaponSlotOverride", js: "WeaponSlotOverride", typ: r("WeaponSlotOverride") },
        { json: "RangedAttackProfile", js: "RangedAttackProfile", typ: "" },
        { json: "RangedAttackName", js: "RangedAttackName", typ: "" },
        { json: "FireJointName", js: "FireJointName", typ: r("FireJointName") },
        { json: "ProjPosOffsetX", js: "ProjPosOffsetX", typ: u(3.14, null, "") },
        { json: "ProjPosOffsetY", js: "ProjPosOffsetY", typ: u(3.14, null, "") },
        { json: "ProjPosOffsetZ", js: "ProjPosOffsetZ", typ: u(3.14, null, "") },
        { json: "ProjRotOffsetX", js: "ProjRotOffsetX", typ: u(0, null, "") },
        { json: "ProjRotOffsetY", js: "ProjRotOffsetY", typ: u(0, null, "") },
        { json: "ProjRotOffsetZ", js: "ProjRotOffsetZ", typ: u(0, null, "") },
        { json: "CharRelPosOffsetX", js: "CharRelPosOffsetX", typ: u(3.14, null, "") },
        { json: "CharRelPosOffsetY", js: "CharRelPosOffsetY", typ: u(3.14, null, "") },
        { json: "CharRelPosOffsetZ", js: "CharRelPosOffsetZ", typ: u(3.14, null, "") },
        { json: "CharRelRotOffsetX", js: "CharRelRotOffsetX", typ: u(0, null, "") },
        { json: "CharRelRotOffsetY", js: "CharRelRotOffsetY", typ: u(0, null, "") },
        { json: "CharRelRotOffsetZ", js: "CharRelRotOffsetZ", typ: u(3.14, null, "") },
        { json: "ProjRaycastOrientation", js: "ProjRaycastOrientation", typ: r("ProjRaycastOrientation") },
        { json: "BaseDamage", js: "BaseDamage", typ: u(0, "") },
        { json: "DamageTable", js: "DamageTable", typ: "" },
        { json: "DamageTableRow", js: "DamageTableRow", typ: "" },
        { json: "AbilityId", js: "AbilityId", typ: r("AbilityID") },
        { json: "TargetAbilityCondition", js: "TargetAbilityCondition", typ: r("TargetAbilityCondition") },
        { json: "BeamEffect", js: "BeamEffect", typ: r("BeamEffect") },
        { json: "IndicatorVFX", js: "IndicatorVFX", typ: "" },
        { json: "SpellPrefabPath", js: "SpellPrefabPath", typ: "" },
        { json: "SecondaryPrefabPath", js: "SecondaryPrefabPath", typ: "" },
        { json: "SecondarySpellID", js: "SecondarySpellID", typ: "" },
        { json: "TertiaryPrefabPath", js: "TertiaryPrefabPath", typ: "" },
        { json: "TertiarySpellID", js: "TertiarySpellID", typ: r("TertiarySpellID") },
        { json: "AmmoSlot", js: "AmmoSlot", typ: u(undefined, r("AmmoSlot")) },
        { json: "AttachProjectileOnCollision", js: "AttachProjectileOnCollision", typ: u(undefined, u(true, null, "")) },
        { json: "SpawnSecondaryOnPassthrough", js: "SpawnSecondaryOnPassthrough", typ: u(undefined, u(true, null, "")) },
        { json: "MaintainDistanceFromGround", js: "MaintainDistanceFromGround", typ: u(undefined, u(true, null)) },
    ], false),
    "StatusEffectCategoryData": o([
        { json: "StatusEffectCategoryID", js: "StatusEffectCategoryID", typ: "" },
        { json: "DurationDiminishingMod", js: "DurationDiminishingMod", typ: u(3.14, null) },
        { json: "DurationModMin", js: "DurationModMin", typ: u(3.14, null) },
        { json: "DurationModMax", js: "DurationModMax", typ: u(0, null) },
        { json: "PotencyDiminishingMod", js: "PotencyDiminishingMod", typ: u(0, null) },
        { json: "PotencyModMin", js: "PotencyModMin", typ: u(0, null) },
        { json: "PotencyModMax", js: "PotencyModMax", typ: u(0, null) },
        { json: "ValueLimits", js: "ValueLimits", typ: "" },
    ], false),
    "StatusEffectData": o([
        { json: "StatusID", js: "StatusID", typ: "" },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "Description", js: "Description", typ: "" },
        { json: "Notes", js: "Notes", typ: u(undefined, "") },
        { json: "WindowHeader", js: "WindowHeader", typ: u(undefined, r("WindowHeader")) },
        { json: "RankSorting", js: "RankSorting", typ: u(undefined, u(0, null)) },
        { json: "EffectCategories", js: "EffectCategories", typ: "" },
        { json: "PlaceholderIcon", js: "PlaceholderIcon", typ: "" },
        { json: "ShowInUITray", js: "ShowInUITray", typ: u(true, null, "") },
        { json: "ShowTextInDamageNumbers", js: "ShowTextInDamageNumbers", typ: u(true, null) },
        { json: "FxScriptOn", js: "FxScriptOn", typ: "" },
        { json: "FxScriptOff", js: "FxScriptOff", typ: r("FxScriptOff") },
        { json: "ShouldRefreshFxScript", js: "ShouldRefreshFxScript", typ: "" },
        { json: "WeaponEffectType", js: "WeaponEffectType", typ: r("DamageTypes") },
        { json: "Notification", js: "Notification", typ: r("Notification") },
        { json: "DisableTelemetry", js: "DisableTelemetry", typ: u(true, r("UseAllDamageModifiers"), null) },
        { json: "IsClientPredicted", js: "IsClientPredicted", typ: u(true, 0, null, "") },
        { json: "PotencyPerLevel", js: "PotencyPerLevel", typ: u(3.14, null, "") },
        { json: "HideHudDurationNumbers", js: "HideHudDurationNumbers", typ: u(undefined, u(true, null)) },
        { json: "BaseDuration", js: "BaseDuration", typ: u(3.14, null) },
        { json: "TickRate", js: "TickRate", typ: u(3.14, null) },
        { json: "DelayInitialTick", js: "DelayInitialTick", typ: u(true, 3.14, null, "") },
        { json: "TickCondition", js: "TickCondition", typ: r("Condition") },
        { json: "OnTickStatusEffect", js: "OnTickStatusEffect", typ: r("OnTickStatusEffect") },
        { json: "KeepOnTickEffectOnEnd", js: "KeepOnTickEffectOnEnd", typ: u(true, null, "") },
        { json: "StopOnHitCount", js: "StopOnHitCount", typ: u(0, null, "") },
        { json: "HitCondition", js: "HitCondition", typ: r("Condition") },
        { json: "RequireReaction", js: "RequireReaction", typ: u(true, null, "") },
        { json: "OnStackStatusEffect", js: "OnStackStatusEffect", typ: r("OnStackStatusEffect") },
        { json: "AddOnStackSize", js: "AddOnStackSize", typ: u(0, null, "") },
        { json: "AddOnStackSizeComparison", js: "AddOnStackSizeComparison", typ: r("AbilityCooldownComparisonType") },
        { json: "HealThreatMultiplier", js: "HealThreatMultiplier", typ: u(3.14, null, "") },
        { json: "ScaleAmountOverTime", js: "ScaleAmountOverTime", typ: u(3.14, null, "") },
        { json: "ScaleAmountOverTimeMin", js: "ScaleAmountOverTimeMin", typ: "" },
        { json: "ScaleAmountOverTimeMax", js: "ScaleAmountOverTimeMax", typ: u(0, null, "") },
        { json: "DamageSkipsDeathsDoor", js: "DamageSkipsDeathsDoor", typ: u(true, null, "") },
        { json: "Health", js: "Health", typ: u(0, null, "") },
        { json: "HealthMin", js: "HealthMin", typ: u(0, null, "") },
        { json: "HealthModifierPercent", js: "HealthModifierPercent", typ: u(3.14, null, "") },
        { json: "HealthModifierDamageBased", js: "HealthModifierDamageBased", typ: u(3.14, null, "") },
        { json: "UseHealScalingValue", js: "UseHealScalingValue", typ: u(true, null, "") },
        { json: "HealScalingValueMultiplier", js: "HealScalingValueMultiplier", typ: u(3.14, null, "") },
        { json: "StaminaDamageModifier", js: "StaminaDamageModifier", typ: u(3.14, null, "") },
        { json: "ManaModifierDamageBased", js: "ManaModifierDamageBased", typ: u(3.14, null, "") },
        { json: "DamageType", js: "DamageType", typ: r("DamageTypes") },
        { json: "CritChanceModifier", js: "CritChanceModifier", typ: u(3.14, null, "") },
        { json: "CritDamageModifier", js: "CritDamageModifier", typ: "" },
        { json: "OnEndStatusEffect", js: "OnEndStatusEffect", typ: r("OnStatusEffect") },
        { json: "DontApplyOnEndEffectOnRemove", js: "DontApplyOnEndEffectOnRemove", typ: u(undefined, u(true, null)) },
        { json: "CastSpell", js: "CastSpell", typ: "" },
        { json: "TargetOwnsSpell", js: "TargetOwnsSpell", typ: u(true, null, "") },
        { json: "UseSourceWeaponForSpell", js: "UseSourceWeaponForSpell", typ: u(true, null, "") },
        { json: "FromAlchemy", js: "FromAlchemy", typ: u(0, null, "") },
        { json: "FromSpell", js: "FromSpell", typ: u(0, null, "") },
        { json: "NoHealthRegen", js: "NoHealthRegen", typ: u(0, null, "") },
        { json: "HealMod", js: "HealMod", typ: u(3.14, null) },
        { json: "MaxHealthMod", js: "MaxHealthMod", typ: u(3.14, null, "") },
        { json: "HealthRate", js: "HealthRate", typ: u(0, null, "") },
        { json: "CoreTempMod", js: "CoreTempMod", typ: u(0, null, "") },
        { json: "TempMod", js: "TempMod", typ: u(0, null, "") },
        { json: "Stamina", js: "Stamina", typ: u(0, null, "") },
        { json: "StaminaRate", js: "StaminaRate", typ: u(3.14, null) },
        { json: "Mana", js: "Mana", typ: u(3.14, null, "") },
        { json: "ManaRate", js: "ManaRate", typ: u(3.14, null, "") },
        { json: "Food", js: "Food", typ: u(3.14, null, "") },
        { json: "FoodBurn", js: "FoodBurn", typ: u(3.14, null, "") },
        { json: "Drink", js: "Drink", typ: u(3.14, null, "") },
        { json: "DrinkBurn", js: "DrinkBurn", typ: u(3.14, null, "") },
        { json: "Encumbrance", js: "Encumbrance", typ: u(0, null, "") },
        { json: "ItemClassWeightMods", js: "ItemClassWeightMods", typ: "" },
        { json: "XPIncreases", js: "XPIncreases", typ: u(r("XPIncreasesEnum"), 0, null) },
        { json: "AzothMod", js: "AzothMod", typ: u(3.14, null, "") },
        { json: "FactionReputationMod", js: "FactionReputationMod", typ: u(3.14, null, "") },
        { json: "FactionTokensMod", js: "FactionTokensMod", typ: u(3.14, null, "") },
        { json: "EXPLogging", js: "EXPLogging", typ: u(3.14, null, "") },
        { json: "EXPMining", js: "EXPMining", typ: u(3.14, null, "") },
        { json: "EXPHarvesting", js: "EXPHarvesting", typ: u(3.14, null, "") },
        { json: "EXPSkinning", js: "EXPSkinning", typ: u(3.14, null, "") },
        { json: "EXPSmelting", js: "EXPSmelting", typ: u(3.14, null, "") },
        { json: "EXPWoodworking", js: "EXPWoodworking", typ: u(3.14, r("EXPWoodworkingEnum"), null) },
        { json: "EXPLeatherworking", js: "EXPLeatherworking", typ: u(3.14, null, "") },
        { json: "EXPWeaving", js: "EXPWeaving", typ: u(3.14, null, "") },
        { json: "EXPStonecutting", js: "EXPStonecutting", typ: u(3.14, null, "") },
        { json: "GrantSanctuary", js: "GrantSanctuary", typ: u(0, null, "") },
        { json: "NoSprint", js: "NoSprint", typ: u(0, null) },
        { json: "NoRun", js: "NoRun", typ: u(0, null) },
        { json: "NoDodge", js: "NoDodge", typ: u(0, null) },
        { json: "NoNav", js: "NoNav", typ: u(0, null) },
        { json: "Silenced", js: "Silenced", typ: u(0, null) },
        { json: "Stunned", js: "Stunned", typ: u(0, null) },
        { json: "RemoveOnDeath", js: "RemoveOnDeath", typ: u(0, null, "") },
        { json: "RemoveOnDeathsDoor", js: "RemoveOnDeathsDoor", typ: u(0, null, "") },
        { json: "RemoveOnRespawn", js: "RemoveOnRespawn", typ: u(0, null, "") },
        { json: "RemoveOnGameModeExit", js: "RemoveOnGameModeExit", typ: u(0, null, "") },
        { json: "IgnoreDiminishingReturns", js: "IgnoreDiminishingReturns", typ: u(true, null, "") },
        { json: "OnlyChangeOwnedStatusEffects", js: "OnlyChangeOwnedStatusEffects", typ: "" },
        { json: "Afflictions", js: "Afflictions", typ: r("Afflictions") },
        { json: "OnHitAffixes", js: "OnHitAffixes", typ: r("OnHitAffixes") },
        { json: "EquipAbility", js: "EquipAbility", typ: "" },
        { json: "UseSourceWeaponForAbilityEffect", js: "UseSourceWeaponForAbilityEffect", typ: u(true, null, "") },
        { json: "IsNegative", js: "IsNegative", typ: u(true, null, "") },
        { json: "RespecTradeskills", js: "RespecTradeskills", typ: u(0, null, "") },
        { json: "RespecAttributes", js: "RespecAttributes", typ: u(0, null, "") },
        { json: "EffectDurationMods", js: "EffectDurationMods", typ: "" },
        { json: "EffectPotencyMods", js: "EffectPotencyMods", typ: r("EffectPotencyMods") },
        { json: "RemoveStatusEffects", js: "RemoveStatusEffects", typ: "" },
        { json: "RemoveStatusEffectCategories", js: "RemoveStatusEffectCategories", typ: r("StatusEffectDatumRemoveStatusEffectCategories") },
        { json: "GlobalRollMod", js: "GlobalRollMod", typ: u(3.14, null, "") },
        { json: "FishingLineStrength", js: "FishingLineStrength", typ: u(3.14, null, "") },
        { json: "FishSizeRollModifier", js: "FishSizeRollModifier", typ: u(3.14, null, "") },
        { json: "MODConstitution", js: "MODConstitution", typ: u(0, null, "") },
        { json: "MODFocus", js: "MODFocus", typ: u(0, null, "") },
        { json: "MODStrength", js: "MODStrength", typ: u(0, null, "") },
        { json: "MODDexterity", js: "MODDexterity", typ: u(0, null, "") },
        { json: "MODIntelligence", js: "MODIntelligence", typ: u(0, null, "") },
        { json: "MGSArcana", js: "MGSArcana", typ: u(0, null, "") },
        { json: "MGSWeaponsmithing", js: "MGSWeaponsmithing", typ: u(0, null, "") },
        { json: "MGSJewelcrafting", js: "MGSJewelcrafting", typ: u(0, null, "") },
        { json: "MGSEngineering", js: "MGSEngineering", typ: u(0, null, "") },
        { json: "MGSArmoring", js: "MGSArmoring", typ: u(0, null, "") },
        { json: "MaxGSArcana", js: "MaxGSArcana", typ: u(0, null, "") },
        { json: "MaxGSWeaponsmithing", js: "MaxGSWeaponsmithing", typ: u(0, null, "") },
        { json: "MaxGSJewelcrafting", js: "MaxGSJewelcrafting", typ: u(0, null, "") },
        { json: "MaxGSEngineering", js: "MaxGSEngineering", typ: u(0, null, "") },
        { json: "MaxGSArmoring", js: "MaxGSArmoring", typ: u(0, null, "") },
        { json: "ROLCooking", js: "ROLCooking", typ: u(0, null, "") },
        { json: "ROLWeaving", js: "ROLWeaving", typ: u(0, null, "") },
        { json: "ROLStonecutting", js: "ROLStonecutting", typ: u(0, null, "") },
        { json: "ROLSmelting", js: "ROLSmelting", typ: u(0, null, "") },
        { json: "ROLLeatherworking", js: "ROLLeatherworking", typ: u(0, null, "") },
        { json: "ROLWoodworking", js: "ROLWoodworking", typ: u(0, null, "") },
        { json: "ROLLogging", js: "ROLLogging", typ: u(0, null, "") },
        { json: "ROLMining", js: "ROLMining", typ: u(0, null, "") },
        { json: "ROLSkinning", js: "ROLSkinning", typ: u(0, null, "") },
        { json: "ROLHarvesting", js: "ROLHarvesting", typ: u(0, null, "") },
        { json: "ROLFishing", js: "ROLFishing", typ: u(0, null, "") },
        { json: "MULTLogging", js: "MULTLogging", typ: u(3.14, null, "") },
        { json: "MULTMining", js: "MULTMining", typ: u(3.14, null, "") },
        { json: "MULTSkinning", js: "MULTSkinning", typ: u(3.14, null, "") },
        { json: "MULTHarvesting", js: "MULTHarvesting", typ: u(3.14, null, "") },
        { json: "MULTFishing", js: "MULTFishing", typ: u(3.14, null, "") },
        { json: "EFFLogging", js: "EFFLogging", typ: u(3.14, null, "") },
        { json: "EFFMining", js: "EFFMining", typ: u(3.14, null, "") },
        { json: "EFFSkinning", js: "EFFSkinning", typ: u(3.14, null, "") },
        { json: "EFFHarvesting", js: "EFFHarvesting", typ: u(3.14, null, "") },
        { json: "INSLogging", js: "INSLogging", typ: u(3.14, null, "") },
        { json: "INSMining", js: "INSMining", typ: u(3.14, null, "") },
        { json: "INSSkinning", js: "INSSkinning", typ: "" },
        { json: "INSHarvesting", js: "INSHarvesting", typ: "" },
        { json: "PhysicalArmor", js: "PhysicalArmor", typ: u(3.14, null, "") },
        { json: "ElementalArmor", js: "ElementalArmor", typ: u(3.14, null, "") },
        { json: "ABSStandard", js: "ABSStandard", typ: u(3.14, null, "") },
        { json: "ABSSiege", js: "ABSSiege", typ: u(3.14, null, "") },
        { json: "ABSStrike", js: "ABSStrike", typ: u(3.14, null, "") },
        { json: "ABSSlash", js: "ABSSlash", typ: u(3.14, null, "") },
        { json: "ABSThrust", js: "ABSThrust", typ: u(3.14, null, "") },
        { json: "ABSArcane", js: "ABSArcane", typ: u(3.14, null, "") },
        { json: "ABSFire", js: "ABSFire", typ: u(3.14, null, "") },
        { json: "ABSIce", js: "ABSIce", typ: u(3.14, null, "") },
        { json: "ABSNature", js: "ABSNature", typ: u(3.14, null, "") },
        { json: "ABSLightning", js: "ABSLightning", typ: u(3.14, null, "") },
        { json: "ABSCorruption", js: "ABSCorruption", typ: u(3.14, null, "") },
        { json: "ABSVitalsCategory", js: "ABSVitalsCategory", typ: u(3.14, r("ABSVitalsCategoryABSVitalsCategory"), null) },
        { json: "RESPoison", js: "RESPoison", typ: u(0, null, "") },
        { json: "RESDisease", js: "RESDisease", typ: u(0, null, "") },
        { json: "RESBleed", js: "RESBleed", typ: u(0, null, "") },
        { json: "RESFrostbite", js: "RESFrostbite", typ: u(0, null, "") },
        { json: "RESCurse", js: "RESCurse", typ: u(0, null, "") },
        { json: "RESBlight", js: "RESBlight", typ: u(0, null, "") },
        { json: "BLAStandard", js: "BLAStandard", typ: u(3.14, null, "") },
        { json: "BLASiege", js: "BLASiege", typ: u(3.14, null, "") },
        { json: "BLAStrike", js: "BLAStrike", typ: u(3.14, null, "") },
        { json: "BLASlash", js: "BLASlash", typ: u(3.14, null, "") },
        { json: "BLAThrust", js: "BLAThrust", typ: u(3.14, null, "") },
        { json: "BLAArcane", js: "BLAArcane", typ: u(3.14, null, "") },
        { json: "BLAFire", js: "BLAFire", typ: u(3.14, null, "") },
        { json: "BLAIce", js: "BLAIce", typ: u(3.14, null, "") },
        { json: "BLALightning", js: "BLALightning", typ: u(3.14, null, "") },
        { json: "BLACorruption", js: "BLACorruption", typ: u(3.14, null, "") },
        { json: "ABAPoison", js: "ABAPoison", typ: u(3.14, null, "") },
        { json: "ABADisease", js: "ABADisease", typ: u(3.14, null, "") },
        { json: "ABABleed", js: "ABABleed", typ: u(3.14, null, "") },
        { json: "ABAFrostbite", js: "ABAFrostbite", typ: u(3.14, null, "") },
        { json: "ABACurse", js: "ABACurse", typ: u(3.14, null, "") },
        { json: "ABABlight", js: "ABABlight", typ: u(3.14, null, "") },
        { json: "WKNStandard", js: "WKNStandard", typ: u(3.14, null, "") },
        { json: "WKNSiege", js: "WKNSiege", typ: u(3.14, null, "") },
        { json: "WKNStrike", js: "WKNStrike", typ: u(3.14, null, "") },
        { json: "WKNSlash", js: "WKNSlash", typ: u(3.14, null, "") },
        { json: "WKNThrust", js: "WKNThrust", typ: u(3.14, null, "") },
        { json: "WKNArcane", js: "WKNArcane", typ: u(3.14, null, "") },
        { json: "WKNFire", js: "WKNFire", typ: u(3.14, null, "") },
        { json: "WKNIce", js: "WKNIce", typ: u(3.14, null, "") },
        { json: "WKNNature", js: "WKNNature", typ: u(3.14, null, "") },
        { json: "WKNLightning", js: "WKNLightning", typ: u(3.14, null, "") },
        { json: "WKNCorruption", js: "WKNCorruption", typ: u(3.14, null, "") },
        { json: "DMGStandard", js: "DMGStandard", typ: u(3.14, null, "") },
        { json: "DMGSiege", js: "DMGSiege", typ: u(3.14, null, "") },
        { json: "DMGStrike", js: "DMGStrike", typ: u(3.14, null, "") },
        { json: "DMGSlash", js: "DMGSlash", typ: u(3.14, null, "") },
        { json: "DMGThrust", js: "DMGThrust", typ: u(3.14, null, "") },
        { json: "DMGArcane", js: "DMGArcane", typ: u(3.14, null, "") },
        { json: "DMGFire", js: "DMGFire", typ: u(3.14, null, "") },
        { json: "DMGIce", js: "DMGIce", typ: u(3.14, null, "") },
        { json: "DMGNature", js: "DMGNature", typ: u(3.14, null, "") },
        { json: "DMGLightning", js: "DMGLightning", typ: u(3.14, null, "") },
        { json: "DMGCorruption", js: "DMGCorruption", typ: u(3.14, null, "") },
        { json: "DMGVitalsCategory", js: "DMGVitalsCategory", typ: u(3.14, r("DMGVitalsCategoryDMGVitalsCategory"), null) },
        { json: "AFAPoison", js: "AFAPoison", typ: u(3.14, null, "") },
        { json: "AFADisease", js: "AFADisease", typ: u(3.14, null, "") },
        { json: "AFABleed", js: "AFABleed", typ: u(3.14, null, "") },
        { json: "AFAFrostbite", js: "AFAFrostbite", typ: u(3.14, null, "") },
        { json: "AFACurse", js: "AFACurse", typ: u(3.14, null, "") },
        { json: "AFABlight", js: "AFABlight", typ: u(3.14, null, "") },
        { json: "StackDuration", js: "StackDuration", typ: u(true, 3.14, null, "") },
        { json: "DurationMax", js: "DurationMax", typ: u(3.14, null, "") },
        { json: "InheritDuration", js: "InheritDuration", typ: u(true, 0, null, "") },
        { json: "InheritTotalDuration", js: "InheritTotalDuration", typ: u(true, null, "") },
        { json: "RefreshDuration", js: "RefreshDuration", typ: u(true, null, "") },
        { json: "StackMax", js: "StackMax", typ: u(0, null) },
        { json: "InitialStackSize", js: "InitialStackSize", typ: "" },
        { json: "RemoveUnappliedStacks", js: "RemoveUnappliedStacks", typ: u(true, null, "") },
        { json: "PotencyMax", js: "PotencyMax", typ: u(0, null, "") },
        { json: "DontReplaceStack", js: "DontReplaceStack", typ: u(true, null, "") },
        { json: "MoveSpeedMod", js: "MoveSpeedMod", typ: u(3.14, null, "") },
        { json: "SprintSpeedMod", js: "SprintSpeedMod", typ: u(3.14, null, "") },
        { json: "FastTravelEncumbranceMod", js: "FastTravelEncumbranceMod", typ: "" },
        { json: "GameEventId", js: "GameEventId", typ: r("StatusEffectDatumGameEventID") },
        { json: "HealRewardGameEventId", js: "HealRewardGameEventId", typ: r("HealRewardGameEventID") },
        { json: "HealRewardThreshold", js: "HealRewardThreshold", typ: u(0, null, "") },
        { json: "WeaponMasteryCategoryId", js: "WeaponMasteryCategoryId", typ: u(r("KillEnemyWeaponIDEnum"), 0, null) },
        { json: "UIPriority", js: "UIPriority", typ: u(0, null) },
        { json: "UiNameplatePriority", js: "UiNameplatePriority", typ: u(0, null) },
        { json: "ShowInNameplates", js: "ShowInNameplates", typ: u(true, null, "") },
        { json: "ShowTextInNameplates", js: "ShowTextInNameplates", typ: u(true, null, "") },
        { json: "OverrideOtherNameplateText", js: "OverrideOtherNameplateText", typ: u(true, null, "") },
        { json: "HidesOtherStatusEffectIcons", js: "HidesOtherStatusEffectIcons", typ: u(true, null, "") },
        { json: "DynamicModelScaleFactor", js: "DynamicModelScaleFactor", typ: u(3.14, null, "") },
        { json: "DynamicModelScaleRampTimeSecs", js: "DynamicModelScaleRampTimeSecs", typ: u(3.14, null, "") },
        { json: "SpawnSlice", js: "SpawnSlice", typ: "" },
        { json: "DisableSupportContributionRewards", js: "DisableSupportContributionRewards", typ: u(true, null, "") },
        { json: "BlockMultipleEffectsFromSameSource", js: "BlockMultipleEffectsFromSameSource", typ: u(true, null, "") },
        { json: "AllowSelfOnlyAsSourceForAbilities", js: "AllowSelfOnlyAsSourceForAbilities", typ: u(true, null, "") },
        { json: "IgnoreInvulnerable", js: "IgnoreInvulnerable", typ: u(true, null, "") },
        { json: "NotCombatAction", js: "NotCombatAction", typ: u(true, null, "") },
        { json: "UseLightweightReplication", js: "UseLightweightReplication", typ: u(undefined, u(true, null, "")) },
        { json: "SourceRuneChargeOnApply", js: "SourceRuneChargeOnApply", typ: u(undefined, u(3.14, null, "")) },
        { json: "SourceRuneChargeOnTick", js: "SourceRuneChargeOnTick", typ: u(undefined, u(3.14, null, "")) },
        { json: "SourceRuneChargeOnHealthChangeOnly", js: "SourceRuneChargeOnHealthChangeOnly", typ: u(undefined, u(true, null, "")) },
        { json: "ShowInTokenTray", js: "ShowInTokenTray", typ: u(undefined, u(true, null)) },
        { json: "IgnoreFxScriptWhenPotencyIsZero", js: "IgnoreFxScriptWhenPotencyIsZero", typ: u(undefined, u(true, null)) },
        { json: "ReapplyAfterPersistenceReload", js: "ReapplyAfterPersistenceReload", typ: u(undefined, u(true, null, "")) },
        { json: "PersistEffectInCrossWorldInstances", js: "PersistEffectInCrossWorldInstances", typ: u(undefined, u(true, null)) },
        { json: "PauseInGameModesList", js: "PauseInGameModesList", typ: u(undefined, r("ExcludeFromGameModes")) },
        { json: "PauseOnDisable", js: "PauseOnDisable", typ: u(undefined, u(true, null)) },
        { json: "IsTrueDamage", js: "IsTrueDamage", typ: u(undefined, u(true, null)) },
        { json: "ShowUiDamageNumbersOnHeal", js: "ShowUiDamageNumbersOnHeal", typ: u(undefined, u(true, null)) },
        { json: "XPIncreasesTooltip", js: "XPIncreasesTooltip", typ: u(undefined, u(3.14, null)) },
        { json: "TerritoryStandingMod", js: "TerritoryStandingMod", typ: u(undefined, u(3.14, null)) },
        { json: "EXPCategoricalProgression", js: "EXPCategoricalProgression", typ: u(undefined, "") },
        { json: "ABSAcid", js: "ABSAcid", typ: u(undefined, u(3.14, null)) },
        { json: "DMGVitalsCategory_Tooltip", js: "DMGVitalsCategory_Tooltip", typ: u(undefined, u(3.14, null)) },
        { json: "DisableAllNonAttributePerks", js: "DisableAllNonAttributePerks", typ: u(undefined, u(true, null)) },
        { json: "DisableAllNonAttributePerksExceptionLabels", js: "DisableAllNonAttributePerksExceptionLabels", typ: u(undefined, r("DisableAllNonAttributePerksExceptionLabels")) },
        { json: "PreventPassiveAbilitiesOnEquip", js: "PreventPassiveAbilitiesOnEquip", typ: u(undefined, u(true, null)) },
        { json: "GrantedSkinId", js: "GrantedSkinId", typ: u(undefined, "") },
        { json: "AllowAddIfDead", js: "AllowAddIfDead", typ: u(undefined, u(true, null)) },
        { json: "AntirequisiteEffectCategories", js: "AntirequisiteEffectCategories", typ: u(undefined, r("AntirequisiteEffectCategories")) },
        { json: "ApplicationCooldown", js: "ApplicationCooldown", typ: u(undefined, u(3.14, null)) },
        { json: "HealthModifierBasePercent", js: "HealthModifierBasePercent", typ: u(undefined, u(3.14, null, "")) },
        { json: "EXPFishing", js: "EXPFishing", typ: u(undefined, u(3.14, null)) },
        { json: "RemoveEffectModsOnInactive", js: "RemoveEffectModsOnInactive", typ: u(undefined, u(true, null)) },
        { json: "LootTags", js: "LootTags", typ: u(undefined, r("Conditions")) },
        { json: "ItemLootVolumeMods", js: "ItemLootVolumeMods", typ: u(undefined, r("ItemLootVolumeMods")) },
        { json: "NonConsumableHealMod", js: "NonConsumableHealMod", typ: u(undefined, u(0, null)) },
        { json: "PotencyPerGearScore", js: "PotencyPerGearScore", typ: u(undefined, "") },
        { json: "DurationScalingPerGearScore", js: "DurationScalingPerGearScore", typ: u(undefined, "") },
        { json: "DisableCastSpellDurability", js: "DisableCastSpellDurability", typ: u(undefined, u(true, null)) },
        { json: "SlotToFillWeaponDamageInfo", js: "SlotToFillWeaponDamageInfo", typ: u(undefined, r("SlotToFillWeaponDamageInfo")) },
        { json: "ForceReplicateToRemotes", js: "ForceReplicateToRemotes", typ: u(undefined, u(true, null)) },
        { json: "OnDeathStatusEffect", js: "OnDeathStatusEffect", typ: u(undefined, r("OnStatusEffect")) },
        { json: "DontApplyOnEndEffectOnTimeOutDeath", js: "DontApplyOnEndEffectOnTimeOutDeath", typ: u(undefined, u(true, null)) },
    ], false),
    "StoreProductData": o([
        { json: "UniqueTagID", js: "UniqueTagID", typ: "" },
        { json: "IsEnabled", js: "IsEnabled", typ: 0 },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "Description", js: "Description", typ: "" },
        { json: "PortraitImage", js: "PortraitImage", typ: "" },
        { json: "LandscapeImage", js: "LandscapeImage", typ: "" },
        { json: "SquareImage", js: "SquareImage", typ: "" },
        { json: "ThumbnailImage", js: "ThumbnailImage", typ: "" },
        { json: "TypeDescription", js: "TypeDescription", typ: "" },
    ], false),
    "StructureFootprintData": o([
        { json: "FootprintID", js: "FootprintID", typ: "" },
        { json: "SidesTakenUp", js: "SidesTakenUp", typ: "" },
        { json: "Rotation", js: "Rotation", typ: 0 },
        { json: "FootprintType", js: "FootprintType", typ: "" },
    ], false),
    "StructurePieceData": o([
        { json: "StructurePieceId", js: "StructurePieceId", typ: "" },
        { json: "FootprintDataTableId", js: "FootprintDataTableId", typ: r("FootprintDataTableID") },
        { json: "FootprintId", js: "FootprintId", typ: "" },
        { json: "PreviewMeshPath", js: "PreviewMeshPath", typ: "" },
        { json: "PrefabPath", js: "PrefabPath", typ: "" },
    ], false),
    "TerritoryAdvancementLevel": o([
        { json: "Scaling Group", js: "Scaling Group", typ: "" },
        { json: "0", js: "0", typ: 0 },
        { json: "1", js: "1", typ: 0 },
        { json: "2", js: "2", typ: 0 },
        { json: "3", js: "3", typ: 0 },
        { json: "4", js: "4", typ: 0 },
        { json: "5", js: "5", typ: 0 },
        { json: "6", js: "6", typ: 0 },
        { json: "7", js: "7", typ: 0 },
        { json: "8", js: "8", typ: 0 },
        { json: "9", js: "9", typ: 0 },
        { json: "10", js: "10", typ: 0 },
        { json: "11", js: "11", typ: 0 },
        { json: "12", js: "12", typ: 0 },
        { json: "13", js: "13", typ: 0 },
        { json: "14", js: "14", typ: 0 },
        { json: "15", js: "15", typ: 0 },
        { json: "16", js: "16", typ: 0 },
        { json: "17", js: "17", typ: 0 },
        { json: "18", js: "18", typ: 0 },
        { json: "19", js: "19", typ: 0 },
        { json: "20", js: "20", typ: 0 },
        { json: "21", js: "21", typ: 0 },
        { json: "22", js: "22", typ: 0 },
        { json: "23", js: "23", typ: 0 },
        { json: "24", js: "24", typ: 0 },
        { json: "25", js: "25", typ: 0 },
        { json: "26", js: "26", typ: 0 },
        { json: "27", js: "27", typ: 0 },
        { json: "28", js: "28", typ: 0 },
        { json: "29", js: "29", typ: 0 },
        { json: "30", js: "30", typ: 0 },
        { json: "31", js: "31", typ: 0 },
        { json: "32", js: "32", typ: 0 },
        { json: "33", js: "33", typ: 0 },
        { json: "34", js: "34", typ: 0 },
        { json: "35", js: "35", typ: 0 },
        { json: "36", js: "36", typ: 0 },
        { json: "37", js: "37", typ: 0 },
        { json: "38", js: "38", typ: 0 },
        { json: "39", js: "39", typ: 0 },
    ], false),
    "TerritoryDefinition": o([
        { json: "TerritoryID", js: "TerritoryID", typ: 0 },
        { json: "NameLocalizationKey", js: "NameLocalizationKey", typ: "" },
        { json: "IsPOI", js: "IsPOI", typ: u(true, null) },
        { json: "IsDiscoverable", js: "IsDiscoverable", typ: u(undefined, u(true, "")) },
        { json: "IsChartable", js: "IsChartable", typ: u(undefined, u(true, "")) },
        { json: "DefaultAchievement", js: "DefaultAchievement", typ: u(undefined, u(0, null, "")) },
        { json: "LootTags", js: "LootTags", typ: u(undefined, "") },
        { json: "DiscoveredAchievement", js: "DiscoveredAchievement", typ: u(undefined, "") },
        { json: "ChartedAchievement", js: "ChartedAchievement", typ: u(undefined, "") },
        { json: "POITag", js: "POITag", typ: u(undefined, "") },
        { json: "AudioGroup", js: "AudioGroup", typ: u(undefined, r("AudioGroup")) },
        { json: "AudioState", js: "AudioState", typ: u(undefined, "") },
        { json: "AudioBank", js: "AudioBank", typ: u(undefined, r("AttachmentCategories")) },
        { json: "POILevel", js: "POILevel", typ: u(undefined, 0) },
        { json: "CanPlaceCamp", js: "CanPlaceCamp", typ: u(undefined, u(true, null, "")) },
        { json: "IsArea", js: "IsArea", typ: u(undefined, true) },
        { json: "PoiDiscoveryXpModifier", js: "PoiDiscoveryXpModifier", typ: u(undefined, u(0, null)) },
        { json: "AIVariantLevelOverride", js: "AIVariantLevelOverride", typ: u(undefined, 0) },
        { json: "AIVariantVitalsCategoryPostfixOverride", js: "AIVariantVitalsCategoryPostfixOverride", typ: u(undefined, "") },
        { json: "MapIcon", js: "MapIcon", typ: u(undefined, "") },
        { json: "CompassIcon", js: "CompassIcon", typ: u(undefined, r("CompassIcon")) },
        { json: "DiscoveryRadius", js: "DiscoveryRadius", typ: u(undefined, u(0, "")) },
        { json: "Debug", js: "Debug", typ: u(undefined, r("Debug")) },
        { json: "GroupSize", js: "GroupSize", typ: u(undefined, u(0, null, "")) },
        { json: "RecommendedLevel", js: "RecommendedLevel", typ: u(undefined, u(0, null, "")) },
        { json: "TooltipBackground", js: "TooltipBackground", typ: u(undefined, "") },
        { json: "RequiredItemId", js: "RequiredItemId", typ: u(undefined, r("TerritoryDefinitionRequiredItemID")) },
        { json: "PulseColor", js: "PulseColor", typ: u(undefined, "") },
        { json: "BaseStructureLimit", js: "BaseStructureLimit", typ: u(undefined, u(0, "")) },
        { json: "MaxStructureLimit", js: "MaxStructureLimit", typ: u(undefined, u(0, "")) },
        { json: "TerritoryScore", js: "TerritoryScore", typ: u(undefined, u(0, null, "")) },
        { json: "OutpostId", js: "OutpostId", typ: u(undefined, "") },
        { json: "DevName", js: "DevName", typ: u(undefined, "") },
        { json: "VitalsCategory", js: "VitalsCategory", typ: u(undefined, "") },
        { json: "LevelRange", js: "LevelRange", typ: u(undefined, u(0, null, "")) },
        { json: "Containers", js: "Containers", typ: u(undefined, u(0, null, "")) },
        { json: "GameMode", js: "GameMode", typ: u(undefined, r("GameModeID")) },
        { json: "UnchartedIcon", js: "UnchartedIcon", typ: u(undefined, r("UnchartedIcon")) },
        { json: "EventId", js: "EventId", typ: u(undefined, r("TerritoryDefinitionEventID")) },
        { json: "IsCollapsible", js: "IsCollapsible", typ: u(undefined, null) },
        { json: "POIObjectiveAchievementId", js: "POIObjectiveAchievementId", typ: u(undefined, "") },
        { json: "Grade", js: "Grade", typ: u(undefined, "") },
        { json: "MaximumLevel", js: "MaximumLevel", typ: u(undefined, u(0, null)) },
        { json: "MinCompanyDefenders", js: "MinCompanyDefenders", typ: u(undefined, u(0, null)) },
        { json: "MinCompanyAttackers", js: "MinCompanyAttackers", typ: u(undefined, u(0, null)) },
        { json: "ObjectiveID", js: "ObjectiveID", typ: u(undefined, r("ObjectiveID")) },
        { json: "IsTerritory", js: "IsTerritory", typ: u(undefined, u(true, null)) },
        { json: "FactionControlBuff", js: "FactionControlBuff", typ: u(undefined, "") },
        { json: "FactionControlTerritoryBuffs", js: "FactionControlTerritoryBuffs", typ: u(undefined, r("FactionControlTerritoryBuffs")) },
        { json: "PermanentOwnershipAchievementId", js: "PermanentOwnershipAchievementId", typ: u(undefined, r("PermanentOwnershipAchievementIDEnum")) },
        { json: "UpkeepModifier", js: "UpkeepModifier", typ: u(undefined, u(3.14, null)) },
        { json: "TerritoryStandingXpModifier", js: "TerritoryStandingXpModifier", typ: u(undefined, u(3.14, null)) },
        { json: "EntryAchievementId", js: "EntryAchievementId", typ: u(undefined, "") },
        { json: "EntryStatusEffectId", js: "EntryStatusEffectId", typ: u(undefined, "") },
    ], false),
    "TerritoryProgressionData": o([
        { json: "ProjectId", js: "ProjectId", typ: "" },
        { json: "Cost", js: "Cost", typ: 0 },
        { json: "Level", js: "Level", typ: 0 },
        { json: "Icon", js: "Icon", typ: "" },
        { json: "Title", js: "Title", typ: "" },
        { json: "ChatNotificationTitle", js: "ChatNotificationTitle", typ: "" },
        { json: "ButtonLabel", js: "ButtonLabel", typ: "" },
        { json: "Image", js: "Image", typ: "" },
        { json: "CurrentTier", js: "CurrentTier", typ: 0 },
        { json: "CraftingAzothDiscount", js: "CraftingAzothDiscount", typ: u(3.14, null) },
        { json: "Description", js: "Description", typ: "" },
        { json: "TerritoryProgressionNeeded", js: "TerritoryProgressionNeeded", typ: 0 },
        { json: "CompletionTimeMinutes", js: "CompletionTimeMinutes", typ: 0 },
        { json: "PrevLevelProjectId", js: "PrevLevelProjectId", typ: "" },
        { json: "NextLevelProjectId", js: "NextLevelProjectId", typ: "" },
        { json: "ProjectType", js: "ProjectType", typ: r("DisplayColumn") },
        { json: "DisplayColumn", js: "DisplayColumn", typ: r("DisplayColumn") },
        { json: "ProgressionCategory", js: "ProgressionCategory", typ: "" },
        { json: "ProgressionCategoryName", js: "ProgressionCategoryName", typ: "" },
        { json: "ProgressionLevel", js: "ProgressionLevel", typ: 0 },
        { json: "LifestyleBuffEffectId", js: "LifestyleBuffEffectId", typ: "" },
        { json: "LifestyleBuffEffectDuration", js: "LifestyleBuffEffectDuration", typ: u(0, null) },
    ], false),
    "ThrowableItemDefinitions": o([
        { json: "ThrowableId", js: "ThrowableId", typ: "" },
        { json: "ActivationTime", js: "ActivationTime", typ: 0 },
        { json: "SpawnSliceOnActivate", js: "SpawnSliceOnActivate", typ: true },
        { json: "ActivationSlicePath", js: "ActivationSlicePath", typ: "" },
        { json: "GatherableSlicePath", js: "GatherableSlicePath", typ: "" },
        { json: "SpellName", js: "SpellName", typ: "" },
        { json: "AttachmentName", js: "AttachmentName", typ: "" },
        { json: "WarningTime", js: "WarningTime", typ: 0 },
        { json: "AttachmentSlicePath", js: "AttachmentSlicePath", typ: "" },
    ], false),
    "TimelineRegistryEntryData": o([
        { json: "TimelineEntryName", js: "TimelineEntryName", typ: "" },
        { json: "TimelineAssetPath", js: "TimelineAssetPath", typ: "" },
        { json: "AssetDependencyPath", js: "AssetDependencyPath", typ: "" },
    ], false),
    "TradeSkillPostCapData": o([
        { json: "TradeSkillType", js: "TradeSkillType", typ: "" },
        { json: "TradeSkillRewardXP", js: "TradeSkillRewardXP", typ: 0 },
        { json: "SubRewardPerc1", js: "SubRewardPerc1", typ: 3.14 },
        { json: "SubRewardPerc2", js: "SubRewardPerc2", typ: 3.14 },
        { json: "SubRewardPerc3", js: "SubRewardPerc3", typ: "" },
        { json: "SubRewardPerc4", js: "SubRewardPerc4", typ: "" },
        { json: "SubRewardPerc5", js: "SubRewardPerc5", typ: "" },
        { json: "SubRewardPerc6", js: "SubRewardPerc6", typ: "" },
        { json: "SubRewardPerc7", js: "SubRewardPerc7", typ: "" },
        { json: "SubRewardPerc8", js: "SubRewardPerc8", typ: "" },
        { json: "SubRewardPerc9", js: "SubRewardPerc9", typ: "" },
        { json: "SubReward1", js: "SubReward1", typ: "" },
        { json: "SubReward2", js: "SubReward2", typ: "" },
        { json: "SubReward3", js: "SubReward3", typ: "" },
        { json: "SubReward4", js: "SubReward4", typ: "" },
        { json: "SubReward5", js: "SubReward5", typ: "" },
        { json: "SubReward6", js: "SubReward6", typ: "" },
        { json: "SubReward7", js: "SubReward7", typ: "" },
        { json: "SubReward8", js: "SubReward8", typ: "" },
        { json: "SubReward9", js: "SubReward9", typ: "" },
        { json: "Reward", js: "Reward", typ: "" },
        { json: "GameEvent1", js: "GameEvent1", typ: r("GameEvent") },
        { json: "GameEvent2", js: "GameEvent2", typ: r("GameEvent") },
        { json: "GameEvent", js: "GameEvent", typ: r("GameEvent") },
    ], false),
    "TradeskillRankData": o([
        { json: "Level", js: "Level", typ: 0 },
        { json: "DisplayName", js: "DisplayName", typ: r("TradeskillRankDatumDisplayName") },
        { json: "RequiredLevel", js: "RequiredLevel", typ: 0 },
        { json: "MaximumInfluence", js: "MaximumInfluence", typ: 0 },
        { json: "InfluenceCost", js: "InfluenceCost", typ: 0 },
        { json: "CurrencyCost", js: "CurrencyCost", typ: 0 },
        { json: "SanityCheck", js: "SanityCheck", typ: u(true, null) },
        { json: "GameEventId", js: "GameEventId", typ: u(undefined, "") },
        { json: "SpecializationPoint", js: "SpecializationPoint", typ: u(undefined, "") },
        { json: "SkillBonus", js: "SkillBonus", typ: u(undefined, "") },
        { json: "RecipeLevel", js: "RecipeLevel", typ: u(undefined, 0) },
        { json: "RollBonus", js: "RollBonus", typ: u(undefined, 0) },
        { json: "MinGearScoreBonus", js: "MinGearScoreBonus", typ: u(undefined, 0) },
        { json: "MaxGearScoreBonus", js: "MaxGearScoreBonus", typ: u(undefined, 0) },
        { json: "MinGearScoreBonusT2", js: "MinGearScoreBonusT2", typ: u(undefined, u(0, null)) },
        { json: "MaxGearScoreBonusT2", js: "MaxGearScoreBonusT2", typ: u(undefined, u(0, null)) },
        { json: "MinGearScoreBonusT3", js: "MinGearScoreBonusT3", typ: u(undefined, u(0, null)) },
        { json: "MaxGearScoreBonusT3", js: "MaxGearScoreBonusT3", typ: u(undefined, u(0, null)) },
        { json: "MinGearScoreBonusT4", js: "MinGearScoreBonusT4", typ: u(undefined, u(0, null)) },
        { json: "MaxGearScoreBonusT4", js: "MaxGearScoreBonusT4", typ: u(undefined, u(0, null)) },
        { json: "MinGearScoreBonusT5", js: "MinGearScoreBonusT5", typ: u(undefined, u(0, null)) },
        { json: "MaxGearScoreBonusT5", js: "MaxGearScoreBonusT5", typ: u(undefined, u(0, null)) },
        { json: "ResourceTierUnlocks", js: "ResourceTierUnlocks", typ: u(undefined, 0) },
        { json: "EntitlementId", js: "EntitlementId", typ: u(undefined, "") },
        { json: "XpReward", js: "XpReward", typ: u(undefined, 0) },
        { json: "IsMilestone", js: "IsMilestone", typ: u(undefined, u(true, null)) },
        { json: "FishingMaxCastDistanceBonus", js: "FishingMaxCastDistanceBonus", typ: u(undefined, 3.14) },
        { json: "GatheringMultiplier", js: "GatheringMultiplier", typ: u(undefined, 0) },
        { json: "GatheringEfficiency", js: "GatheringEfficiency", typ: u(undefined, 3.14) },
        { json: "IconTypeUnlock", js: "IconTypeUnlock", typ: u(undefined, r("IconTypeUnlock")) },
        { json: "Tooltip", js: "Tooltip", typ: u(undefined, r("Tooltip")) },
        { json: "MaxGatherableLevel", js: "MaxGatherableLevel", typ: u(undefined, 0) },
        { json: "GatherableLevelModifier", js: "GatherableLevelModifier", typ: u(undefined, u(3.14, null)) },
        { json: "%Increase", js: "%Increase", typ: u(undefined, u(3.14, null)) },
        { json: "Intensify", js: "Intensify", typ: u(undefined, u(3.14, null)) },
    ], false),
    "TwitchDropsStatDefinitions": o([
        { json: "TwitchDropId", js: "TwitchDropId", typ: "" },
        { json: "RuleKeyEvent", js: "RuleKeyEvent", typ: "" },
    ], false),
    "TwitchTagsStatDefinitions": o([
        { json: "TwitchTagId", js: "TwitchTagId", typ: "" },
        { json: "TagGroupId", js: "TagGroupId", typ: 0 },
        { json: "KeyValuePair", js: "KeyValuePair", typ: "" },
        { json: "DisplayName", js: "DisplayName", typ: "" },
    ], false),
    "VariationData": o([
        { json: "HouseItemID", js: "HouseItemID", typ: u(undefined, "") },
        { json: "ExcludeFromGame", js: "ExcludeFromGame", typ: u(undefined, 0) },
        { json: "PrefabPath", js: "PrefabPath", typ: u(undefined, "") },
        { json: "DEV-FurnitureSet", js: "DEV-FurnitureSet", typ: u(undefined, r("DEVFurnitureSet")) },
        { json: "UIHousingCategory", js: "UIHousingCategory", typ: u(undefined, r("UIHousingCategory")) },
        { json: "HousingTag1 Placed", js: "HousingTag1 Placed", typ: u(undefined, r("HousingTag1Placed")) },
        { json: "HousingTag2 Points", js: "HousingTag2 Points", typ: u(undefined, r("HousingTag2Points")) },
        { json: "HousingTag3 Limiter", js: "HousingTag3 Limiter", typ: u(undefined, r("HousingTag3Limiter")) },
        { json: "HousingTag5 Buffs", js: "HousingTag5 Buffs", typ: u(undefined, r("HousingTag5Buffs")) },
        { json: "HousingTags", js: "HousingTags", typ: u(undefined, "") },
        { json: "IsEntitlement", js: "IsEntitlement", typ: u(undefined, u(true, null, "")) },
        { json: "AttributionId", js: "AttributionId", typ: u(undefined, r("AttributionID")) },
        { json: "HowToOptain (Primarily)", js: "HowToOptain (Primarily)", typ: u(undefined, r("HowToOptainPrimarily")) },
        { json: "ItemRarity", js: "ItemRarity", typ: u(undefined, r("ItemRarity")) },
        { json: "ForceRarity", js: "ForceRarity", typ: u(undefined, 0) },
        { json: "RankingPointsDuplicateLimit", js: "RankingPointsDuplicateLimit", typ: u(undefined, 0) },
        { json: "RankingPointsNegativeLimit", js: "RankingPointsNegativeLimit", typ: u(undefined, 0) },
        { json: "PointModifier", js: "PointModifier", typ: u(undefined, 3.14) },
        { json: "RankingPoints", js: "RankingPoints", typ: u(undefined, u(3.14, r("RankingPointsEnum"))) },
        { json: "MaxPotentialPoints", js: "MaxPotentialPoints", typ: u(undefined, u(3.14, "")) },
        { json: "HousingStatusEffect", js: "HousingStatusEffect", typ: u(undefined, "") },
        { json: "StorageBonus", js: "StorageBonus", typ: u(undefined, u(0, null, "")) },
        { json: "InteractionAnimationID", js: "InteractionAnimationID", typ: u(undefined, r("InteractionAnimationID")) },
        { json: "Name", js: "Name", typ: u(undefined, "") },
        { json: "Description", js: "Description", typ: u(undefined, "") },
        { json: "IconPath", js: "IconPath", typ: u(undefined, "") },
        { json: "HiResIconPath", js: "HiResIconPath", typ: u(undefined, "") },
        { json: "Weight", js: "Weight", typ: u(undefined, 0) },
        { json: "TradingCategory", js: "TradingCategory", typ: u(undefined, r("TradingCategory")) },
        { json: "TradingFamily", js: "TradingFamily", typ: u(undefined, r("TradingFamily")) },
        { json: "TradingGroup", js: "TradingGroup", typ: u(undefined, r("VariationDatumTradingGroup")) },
        { json: "ItemType", js: "ItemType", typ: u(undefined, r("ItemTypeEnum")) },
        { json: "UiItemClass", js: "UiItemClass", typ: u(undefined, r("UIItemClass")) },
        { json: "Tier", js: "Tier", typ: u(undefined, 0) },
        { json: "IsSalvageable", js: "IsSalvageable", typ: u(undefined, true) },
        { json: "SalvageResources", js: "SalvageResources", typ: u(undefined, true) },
        { json: "IsRepairable", js: "IsRepairable", typ: u(undefined, true) },
        { json: "BindOnPickup", js: "BindOnPickup", typ: u(undefined, true) },
        { json: "CraftingRecipe", js: "CraftingRecipe", typ: u(undefined, "") },
        { json: "RepairRecipe", js: "RepairRecipe", typ: u(undefined, "") },
        { json: "SalvageRecipe", js: "SalvageRecipe", typ: u(undefined, "") },
        { json: "SalvageGameEventID", js: "SalvageGameEventID", typ: u(undefined, r("SalvageGameEventID")) },
        { json: "RepairDustModifier", js: "RepairDustModifier", typ: u(undefined, 0) },
        { json: "ConfirmBeforeUse", js: "ConfirmBeforeUse", typ: u(undefined, true) },
        { json: "ConsumeOnUse", js: "ConsumeOnUse", typ: u(undefined, true) },
        { json: "MaxStackSize", js: "MaxStackSize", typ: u(undefined, 0) },
        { json: "DeathDropPercentage", js: "DeathDropPercentage", typ: u(undefined, 0) },
        { json: "ItemTypeDisplayName", js: "ItemTypeDisplayName", typ: u(undefined, r("ItemTypeDisplayName")) },
        { json: "Nonremovable", js: "Nonremovable", typ: u(undefined, true) },
        { json: "AudioPickup", js: "AudioPickup", typ: u(undefined, r("AudioPickup")) },
        { json: "AudioPlace", js: "AudioPlace", typ: u(undefined, r("MasterItemDefinitionAudioPlace")) },
        { json: "AudioUse", js: "AudioUse", typ: u(undefined, r("AudioUse")) },
        { json: "AudioCreated", js: "AudioCreated", typ: u(undefined, r("AudioCreated")) },
        { json: "AudioDestroyed", js: "AudioDestroyed", typ: u(undefined, "") },
        { json: "Primary Color", js: "Primary Color", typ: u(undefined, r("ColorFamilies")) },
        { json: "Secondary Color", js: "Secondary Color", typ: u(undefined, "") },
        { json: "Tertiary Color", js: "Tertiary Color", typ: u(undefined, "") },
        { json: "ColorFamilies", js: "ColorFamilies", typ: u(undefined, r("ColorFamilies")) },
        { json: "PlacementGridDisplaySize", js: "PlacementGridDisplaySize", typ: u(undefined, r("PlacementGridDisplaySize")) },
        { json: "Notes", js: "Notes", typ: u(undefined, "") },
        { json: "VariantID", js: "VariantID", typ: u(undefined, "") },
        { json: "Task Name", js: "Task Name", typ: u(undefined, "") },
        { json: "Task Config Name", js: "Task Config Name", typ: u(undefined, "") },
        { json: "StartMesh", js: "StartMesh", typ: u(undefined, "") },
        { json: "Mass", js: "Mass", typ: u(undefined, 0) },
        { json: "StartMeshLOD", js: "StartMeshLOD", typ: u(undefined, u(0, "")) },
        { json: "Play_Falling_SFX", js: "Play_Falling_SFX", typ: u(undefined, r("PlayFallingSFX")) },
        { json: "Stop_Falling_SFX", js: "Stop_Falling_SFX", typ: u(undefined, r("StopFallingSFX")) },
        { json: "Play_Sliding_SFX", js: "Play_Sliding_SFX", typ: u(undefined, r("PlaySlidingSFX")) },
        { json: "X_Sliding_SFX", js: "X_Sliding_SFX", typ: u(undefined, 3.14) },
        { json: "Y_Sliding_SFX", js: "Y_Sliding_SFX", typ: u(undefined, 3.14) },
        { json: "Z_Sliding_SFX", js: "Z_Sliding_SFX", typ: u(undefined, 3.14) },
        { json: "CutMaterial", js: "CutMaterial", typ: u(undefined, "") },
        { json: "Visuals_Healthy", js: "Visuals_Healthy", typ: u(undefined, "") },
        { json: "GatherableEntryID", js: "GatherableEntryID", typ: u(undefined, "") },
        { json: "GatheringRadius", js: "GatheringRadius", typ: u(undefined, u(3.14, null)) },
        { json: "InteractionRadius", js: "InteractionRadius", typ: u(undefined, u(3.14, null)) },
        { json: "DetectableRadius", js: "DetectableRadius", typ: u(undefined, u(3.14, null)) },
        { json: "MarkerRadius", js: "MarkerRadius", typ: u(undefined, u(3.14, null)) },
        { json: "AudioPreload_loop", js: "AudioPreload_loop", typ: u(undefined, "") },
        { json: "AudioPreload_Burst_1", js: "AudioPreload_Burst_1", typ: u(undefined, "") },
        { json: "AudioPreload_Burst_2", js: "AudioPreload_Burst_2", typ: u(undefined, "") },
        { json: "AudioPreload_Burst_3", js: "AudioPreload_Burst_3", typ: u(undefined, "") },
        { json: "AudioPreload_depleted", js: "AudioPreload_depleted", typ: u(undefined, "") },
        { json: "SFX_depleted", js: "SFX_depleted", typ: u(undefined, "") },
        { json: "SFX_Idle", js: "SFX_Idle", typ: u(undefined, "") },
        { json: "VFX_Idle", js: "VFX_Idle", typ: u(undefined, "") },
        { json: "SFX_Burst_1", js: "SFX_Burst_1", typ: u(undefined, r("SfxBurst")) },
        { json: "SFX_Burst_2", js: "SFX_Burst_2", typ: u(undefined, r("SfxBurst")) },
        { json: "SFX_Burst_3", js: "SFX_Burst_3", typ: u(undefined, r("SfxBurst")) },
        { json: "VFX_Burst_1", js: "VFX_Burst_1", typ: u(undefined, "") },
        { json: "VFX_Burst_2", js: "VFX_Burst_2", typ: u(undefined, "") },
        { json: "VFX_Burst_3", js: "VFX_Burst_3", typ: u(undefined, "") },
        { json: "IdleVFX_Offset_Z", js: "IdleVFX_Offset_Z", typ: u(undefined, u(3.14, null, "")) },
        { json: "DepletedVFX", js: "DepletedVFX", typ: u(undefined, "") },
        { json: "DepletedMesh", js: "DepletedMesh", typ: u(undefined, "") },
        { json: "EndMeshLOD", js: "EndMeshLOD", typ: u(undefined, u(0, null, "")) },
        { json: "GatheringFX", js: "GatheringFX", typ: u(undefined, r("GatheringFX")) },
        { json: "ShowOnMap", js: "ShowOnMap", typ: u(undefined, u(0, null, "")) },
        { json: "ShowOnCompass", js: "ShowOnCompass", typ: u(undefined, u(0, null, "")) },
        { json: "MapIcon", js: "MapIcon", typ: u(undefined, "") },
        { json: "CompassIcon", js: "CompassIcon", typ: u(undefined, "") },
        { json: "TradeskillIconUnlockType", js: "TradeskillIconUnlockType", typ: u(undefined, r("IconTypeUnlock")) },
        { json: "MapTooltipTitleLocTag", js: "MapTooltipTitleLocTag", typ: u(undefined, "") },
        { json: "MapTooltipDescLocTag", js: "MapTooltipDescLocTag", typ: u(undefined, "") },
        { json: "EnableBurstParticle1", js: "EnableBurstParticle1", typ: u(undefined, u(true, null, "")) },
        { json: "EnableBurstParticle2", js: "EnableBurstParticle2", typ: u(undefined, u(true, null, "")) },
        { json: "EnableBurstParticle3", js: "EnableBurstParticle3", typ: u(undefined, u(true, null, "")) },
        { json: "InteractionMarker_Offset_X", js: "InteractionMarker_Offset_X", typ: u(undefined, u(3.14, null, "")) },
        { json: "InteractionMarker_Offset_Y", js: "InteractionMarker_Offset_Y", typ: u(undefined, u(3.14, null, "")) },
        { json: "InteractionMarker_Offset_Z", js: "InteractionMarker_Offset_Z", typ: u(undefined, u(3.14, null)) },
        { json: "StartMat", js: "StartMat", typ: u(undefined, "") },
        { json: "AudioPreload_Depletion", js: "AudioPreload_Depletion", typ: u(undefined, r("AudioPreloadDepletion")) },
        { json: "Depleted_SFX", js: "Depleted_SFX", typ: u(undefined, r("DepletedSFXEnum")) },
        { json: "Collision_Play_SFX", js: "Collision_Play_SFX", typ: u(undefined, r("CollisionPlaySFX")) },
        { json: "Collision_Stop_SFX", js: "Collision_Stop_SFX", typ: u(undefined, r("CollisionStopSFX")) },
        { json: "DepletedMat", js: "DepletedMat", typ: u(undefined, "") },
        { json: "AmbientType", js: "AmbientType", typ: u(undefined, r("AmbientType")) },
        { json: "AllowGatheringInGameModes", js: "AllowGatheringInGameModes", typ: u(undefined, r("ExcludeFromGameModes")) },
        { json: "ResetTime", js: "ResetTime", typ: u(undefined, 0) },
        { json: "ForgetInstancedStateTime", js: "ForgetInstancedStateTime", typ: u(undefined, "") },
        { json: "NumCyclicStates", js: "NumCyclicStates", typ: u(undefined, 0) },
        { json: "InteractTag", js: "InteractTag", typ: u(undefined, "") },
        { json: "Visual_BaseMesh", js: "Visual_BaseMesh", typ: u(undefined, "") },
        { json: "Visual_RotatedBaseMesh", js: "Visual_RotatedBaseMesh", typ: u(undefined, "") },
        { json: "Visual_WaitingForReset", js: "Visual_WaitingForReset", typ: u(undefined, "") },
        { json: "Visual_NotOnRequiredQuest", js: "Visual_NotOnRequiredQuest", typ: u(undefined, "") },
        { json: "Gatherable_0", js: "Gatherable_0", typ: u(undefined, r("Gatherable")) },
        { json: "Gatherable_0_Variant", js: "Gatherable_0_Variant", typ: u(undefined, "") },
        { json: "Delay_0", js: "Delay_0", typ: u(undefined, u(3.14, null)) },
        { json: "RotationPercent_0", js: "RotationPercent_0", typ: u(undefined, u(3.14, null)) },
        { json: "Gatherable_1", js: "Gatherable_1", typ: u(undefined, r("Gatherable")) },
        { json: "Gatherable_1_Variant", js: "Gatherable_1_Variant", typ: u(undefined, "") },
        { json: "Delay_1", js: "Delay_1", typ: u(undefined, u(3.14, null)) },
        { json: "RotationPercent_1", js: "RotationPercent_1", typ: u(undefined, u(3.14, null)) },
        { json: "Gatherable_2", js: "Gatherable_2", typ: u(undefined, r("Gatherable")) },
        { json: "Gatherable_2_Variant", js: "Gatherable_2_Variant", typ: u(undefined, "") },
        { json: "Delay_2", js: "Delay_2", typ: u(undefined, u(3.14, null)) },
        { json: "RotationPercent_2", js: "RotationPercent_2", typ: u(undefined, u(3.14, null)) },
        { json: "Gatherable_3", js: "Gatherable_3", typ: u(undefined, r("Gatherable")) },
        { json: "Gatherable_3_Variant", js: "Gatherable_3_Variant", typ: u(undefined, "") },
        { json: "Delay_3", js: "Delay_3", typ: u(undefined, u(3.14, null)) },
        { json: "RotationPercent_3", js: "RotationPercent_3", typ: u(undefined, u(3.14, null)) },
        { json: "Gatherable_4", js: "Gatherable_4", typ: u(undefined, r("Gatherable")) },
        { json: "Gatherable_4_Variant", js: "Gatherable_4_Variant", typ: u(undefined, "") },
        { json: "Delay_4", js: "Delay_4", typ: u(undefined, u(3.14, null)) },
        { json: "RotationPercent_4", js: "RotationPercent_4", typ: u(undefined, u(0, null)) },
        { json: "AE.0_RequiredAchievementConditional", js: "AE.0_RequiredAchievementConditional", typ: u(undefined, "") },
        { json: "AE.1_RE.0_TargetRotationPercent", js: "AE.1_RE.0_TargetRotationPercent", typ: u(undefined, u(3.14, null)) },
        { json: "DetectableObjectRadius", js: "DetectableObjectRadius", typ: u(undefined, 3.14) },
        { json: "IdleVFX", js: "IdleVFX", typ: u(undefined, "") },
        { json: "DepletedSFX", js: "DepletedSFX", typ: u(undefined, r("DepletedSFX")) },
        { json: "InteractOnlyOnQuest", js: "InteractOnlyOnQuest", typ: u(undefined, u(true, null, "")) },
        { json: "Visual_Healthy", js: "Visual_Healthy", typ: u(undefined, "") },
        { json: "Visual_Depleted", js: "Visual_Depleted", typ: u(undefined, "") },
        { json: "Visual_Basemesh", js: "Visual_Basemesh", typ: u(undefined, "") },
        { json: "AudioPreload_idle", js: "AudioPreload_idle", typ: u(undefined, r("AudioPreloadIdle")) },
        { json: "depletedVFX_Offset_Z", js: "depletedVFX_Offset_Z", typ: u(undefined, u(3.14, null, "")) },
        { json: "gatheringVFX_Offzet_Z", js: "gatheringVFX_Offzet_Z", typ: u(undefined, u(3.14, null, "")) },
        { json: "interactionMarker_Offset_Z", js: "interactionMarker_Offset_Z", typ: u(undefined, u(3.14, null, "")) },
        { json: "InteractionEvent", js: "InteractionEvent", typ: u(undefined, "") },
        { json: "AchievementID", js: "AchievementID", typ: u(undefined, "") },
        { json: "AchievementServerState", js: "AchievementServerState", typ: u(undefined, r("AchievementServerState")) },
        { json: "Visual_Loot", js: "Visual_Loot", typ: u(undefined, "") },
        { json: "Idle_VFX", js: "Idle_VFX", typ: u(undefined, r("IdleVFX")) },
        { json: "Visual_Frame", js: "Visual_Frame", typ: u(undefined, "") },
        { json: "InteractionX", js: "InteractionX", typ: u(undefined, 0) },
        { json: "InteractionY", js: "InteractionY", typ: u(undefined, 3.14) },
        { json: "InteractionZ", js: "InteractionZ", typ: u(undefined, 0) },
        { json: "DetectableX", js: "DetectableX", typ: u(undefined, 3.14) },
        { json: "DetectableY", js: "DetectableY", typ: u(undefined, 3.14) },
        { json: "DetectableZ", js: "DetectableZ", typ: u(undefined, 3.14) },
        { json: "MarkerX", js: "MarkerX", typ: u(undefined, 3.14) },
        { json: "MarkerY", js: "MarkerY", typ: u(undefined, 3.14) },
        { json: "MarkerZ", js: "MarkerZ", typ: u(undefined, 3.14) },
        { json: "Visual_Chest", js: "Visual_Chest", typ: u(undefined, "") },
        { json: "LootTableComponent", js: "LootTableComponent", typ: u(undefined, "") },
        { json: "DepletedPreload", js: "DepletedPreload", typ: u(undefined, r("Preload")) },
        { json: "DepletedFX", js: "DepletedFX", typ: u(undefined, r("DepletedFX")) },
        { json: "LoS_Override", js: "LoS_Override", typ: u(undefined, u(true, null)) },
        { json: "MarkerOffset_Z", js: "MarkerOffset_Z", typ: u(undefined, u(3.14, null)) },
        { json: "DepletedFXOffset_Y", js: "DepletedFXOffset_Y", typ: u(undefined, null) },
        { json: "DepletedFXOffset_Z", js: "DepletedFXOffset_Z", typ: u(undefined, null) },
        { json: "IdleFXOffset_Y", js: "IdleFXOffset_Y", typ: u(undefined, "") },
        { json: "IdleFXOffset_Z", js: "IdleFXOffset_Z", typ: u(undefined, "") },
        { json: "LootLockSlice", js: "LootLockSlice", typ: u(undefined, "") },
        { json: "Idle_SFX_Preload", js: "Idle_SFX_Preload", typ: u(undefined, r("Preload")) },
        { json: "Depleted_SFX_Particle_Preload", js: "Depleted_SFX_Particle_Preload", typ: u(undefined, r("Preload")) },
        { json: "Depleted_SFX_Offset_Y", js: "Depleted_SFX_Offset_Y", typ: u(undefined, null) },
        { json: "Depleted_SFX_Offset_Z", js: "Depleted_SFX_Offset_Z", typ: u(undefined, null) },
        { json: "Idle_SFX_Offset_Y", js: "Idle_SFX_Offset_Y", typ: u(undefined, null) },
        { json: "Idle_SFX_Offset_Z", js: "Idle_SFX_Offset_Z", typ: u(undefined, null) },
        { json: "Idle_SFX_Play", js: "Idle_SFX_Play", typ: u(undefined, r("IdleSFXPlay")) },
        { json: "Idle_SFX_Stop", js: "Idle_SFX_Stop", typ: u(undefined, r("IdleSFXStop")) },
        { json: "IdleSFX", js: "IdleSFX", typ: u(undefined, r("IdleSFX")) },
        { json: "AudioPreloadName", js: "AudioPreloadName", typ: u(undefined, r("AudioPreloadName")) },
        { json: "DepletedMaterial", js: "DepletedMaterial", typ: u(undefined, "") },
        { json: "VegAreaClearRadius", js: "VegAreaClearRadius", typ: u(undefined, 3.14) },
        { json: "AcceptSnow", js: "AcceptSnow", typ: u(undefined, true) },
        { json: "GatherableEntryId", js: "GatherableEntryId", typ: u(undefined, "") },
        { json: "NPC_Visuals", js: "NPC_Visuals", typ: u(undefined, "") },
        { json: "NPC_IdleAnimTimeline", js: "NPC_IdleAnimTimeline", typ: u(undefined, "") },
        { json: "NPC_RunawayTimeline", js: "NPC_RunawayTimeline", typ: u(undefined, "") },
        { json: "NPC_OnInteract_VFX", js: "NPC_OnInteract_VFX", typ: u(undefined, "") },
        { json: "NPC_OnInteract_SFX", js: "NPC_OnInteract_SFX", typ: u(undefined, "") },
        { json: "CollisionFX", js: "CollisionFX", typ: u(undefined, r("CollisionFX")) },
        { json: "StartSlice", js: "StartSlice", typ: u(undefined, "") },
        { json: "DepletedSlice", js: "DepletedSlice", typ: u(undefined, "") },
        { json: "VegAreaDataSet", js: "VegAreaDataSet", typ: u(undefined, r("VegAreaDataSet")) },
        { json: "VegAreaInnerRadius", js: "VegAreaInnerRadius", typ: u(undefined, 3.14) },
        { json: "VegAreaOuterRadius", js: "VegAreaOuterRadius", typ: u(undefined, 3.14) },
        { json: "AOIRadius", js: "AOIRadius", typ: u(undefined, 0) },
        { json: "InteractionHeight", js: "InteractionHeight", typ: u(undefined, 0) },
        { json: "BaseSlice", js: "BaseSlice", typ: u(undefined, "") },
        { json: "DepletedVFX_Quest", js: "DepletedVFX_Quest", typ: u(undefined, r("DepletedVFXQuest")) },
        { json: "DepletedVFX_Quest_Offset_Z", js: "DepletedVFX_Quest_Offset_Z", typ: u(undefined, u(3.14, null, "")) },
        { json: "IsStateControlledBySlayerScript", js: "IsStateControlledBySlayerScript", typ: u(undefined, u(true, null, "")) },
        { json: "RequireLoS", js: "RequireLoS", typ: u(undefined, u(null, "")) },
        { json: "RequiredAchievement", js: "RequiredAchievement", typ: u(undefined, "") },
        { json: "AudioPreload_gathering", js: "AudioPreload_gathering", typ: u(undefined, r("AudioPreload")) },
        { json: "SFX_gathering", js: "SFX_gathering", typ: u(undefined, r("SFXGathering")) },
        { json: "SFX_depleted_idle_play", js: "SFX_depleted_idle_play", typ: u(undefined, r("SFXDepletedIdlePlay")) },
        { json: "SFX_depleted_idle_stop", js: "SFX_depleted_idle_stop", typ: u(undefined, r("SFXDepletedIdleStop")) },
        { json: "AudioPreload_Depleted_idle", js: "AudioPreload_Depleted_idle", typ: u(undefined, r("AudioPreload")) },
        { json: "InteractPromptRadius", js: "InteractPromptRadius", typ: u(undefined, 3.14) },
        { json: "CollisionAssetOverride", js: "CollisionAssetOverride", typ: u(undefined, "") },
        { json: "ShouldHaveStaticCollision", js: "ShouldHaveStaticCollision", typ: u(undefined, u(true, null)) },
        { json: "Collision_Offset_Z", js: "Collision_Offset_Z", typ: u(undefined, u(3.14, null)) },
        { json: "VisualHealthy_Offset_Z", js: "VisualHealthy_Offset_Z", typ: u(undefined, null) },
        { json: "Collision_Scale_X", js: "Collision_Scale_X", typ: u(undefined, u(3.14, null)) },
        { json: "Collision_Scale_Y", js: "Collision_Scale_Y", typ: u(undefined, u(3.14, null)) },
        { json: "Collision_Scale_Z", js: "Collision_Scale_Z", typ: u(undefined, u(3.14, null)) },
        { json: "Force_Display_Health_Bar", js: "Force_Display_Health_Bar", typ: u(undefined, u(true, null)) },
        { json: "Marker_Creature_Type_Override", js: "Marker_Creature_Type_Override", typ: u(undefined, r("MarkerCreatureTypeOverride")) },
        { json: "Marker_Vertical_Offset", js: "Marker_Vertical_Offset", typ: u(undefined, u(0, null)) },
        { json: "DetectionVolumeSphereRadius", js: "DetectionVolumeSphereRadius", typ: u(undefined, u(3.14, null)) },
        { json: "DepletedVFX_Pos", js: "DepletedVFX_Pos", typ: u(undefined, 3.14) },
        { json: "DepletedSpawnVariant", js: "DepletedSpawnVariant", typ: u(undefined, "") },
        { json: "RequiredAchievementConditional", js: "RequiredAchievementConditional", typ: u(undefined, "") },
        { json: "InteractGatherableSlice", js: "InteractGatherableSlice", typ: u(undefined, "") },
        { json: "LootTableID", js: "LootTableID", typ: u(undefined, "") },
        { json: "BottomMesh", js: "BottomMesh", typ: u(undefined, "") },
        { json: "BottomMat", js: "BottomMat", typ: u(undefined, "") },
        { json: "TopMesh", js: "TopMesh", typ: u(undefined, "") },
        { json: "TopMat", js: "TopMat", typ: u(undefined, "") },
        { json: "TopMesh_TransformX", js: "TopMesh_TransformX", typ: u(undefined, "") },
        { json: "TopMesh_TransformY", js: "TopMesh_TransformY", typ: u(undefined, "") },
        { json: "TopMesh_TransformZ", js: "TopMesh_TransformZ", typ: u(undefined, u(3.14, null)) },
        { json: "NPCId", js: "NPCId", typ: u(undefined, "") },
        { json: "CharacterDefinition", js: "CharacterDefinition", typ: u(undefined, "") },
        { json: "ByeTimeline", js: "ByeTimeline", typ: u(undefined, "") },
        { json: "GreetTimeline", js: "GreetTimeline", typ: u(undefined, "") },
        { json: "IdleTimeline", js: "IdleTimeline", typ: u(undefined, "") },
        { json: "InteractTimeline", js: "InteractTimeline", typ: u(undefined, "") },
        { json: "SwapAchievementId", js: "SwapAchievementId", typ: u(undefined, "") },
        { json: "PlaceholderMesh", js: "PlaceholderMesh", typ: u(undefined, "") },
        { json: "AttachedMesh", js: "AttachedMesh", typ: u(undefined, "") },
        { json: "AttachmentPositionX", js: "AttachmentPositionX", typ: u(undefined, u(3.14, null, "")) },
        { json: "AttachmentPositionY", js: "AttachmentPositionY", typ: u(undefined, u(3.14, null, "")) },
        { json: "AttachmentPositionZ", js: "AttachmentPositionZ", typ: u(undefined, u(3.14, null, "")) },
        { json: "AttachmentRotationX", js: "AttachmentRotationX", typ: u(undefined, u(3.14, null, "")) },
        { json: "AttachmentRotationY", js: "AttachmentRotationY", typ: u(undefined, u(3.14, null, "")) },
        { json: "AttachmentRotationZ", js: "AttachmentRotationZ", typ: u(undefined, u(3.14, null, "")) },
        { json: "InteractOverride_X", js: "InteractOverride_X", typ: u(undefined, u(null, "")) },
        { json: "InteractOverride_Y", js: "InteractOverride_Y", typ: u(undefined, u(null, "")) },
        { json: "CharacterDefinitionEditor", js: "CharacterDefinitionEditor", typ: u(undefined, "") },
        { json: "WalkawayTimeline", js: "WalkawayTimeline", typ: u(undefined, "") },
        { json: "AE.9_RequiredAchievementConditional", js: "AE.9_RequiredAchievementConditional", typ: u(undefined, 0) },
        { json: "AE.0_EventDelayDuration", js: "AE.0_EventDelayDuration", typ: u(undefined, 0) },
        { json: "AE.9_EventDelayDuration", js: "AE.9_EventDelayDuration", typ: u(undefined, 3.14) },
        { json: "AE.1_EventDelayDuration", js: "AE.1_EventDelayDuration", typ: u(undefined, 3.14) },
        { json: "AE.1_OE.0_OpacityTransitionDuration", js: "AE.1_OE.0_OpacityTransitionDuration", typ: u(undefined, 3.14) },
        { json: "AE.2_EventDelayDuration", js: "AE.2_EventDelayDuration", typ: u(undefined, 3.14) },
        { json: "WalkInTimeline", js: "WalkInTimeline", typ: u(undefined, r("WalkInTimeline")) },
        { json: "AE.3_RequiredAchievementConditional", js: "AE.3_RequiredAchievementConditional", typ: u(undefined, "") },
        { json: "AE.10_RequiredAchievementConditional", js: "AE.10_RequiredAchievementConditional", typ: u(undefined, u(0, null)) },
        { json: "AE.3_EventDelayDuration", js: "AE.3_EventDelayDuration", typ: u(undefined, 0) },
        { json: "AE.10_EventDelayDuration", js: "AE.10_EventDelayDuration", typ: u(undefined, 3.14) },
        { json: "AE.4_EventDelayDuration", js: "AE.4_EventDelayDuration", typ: u(undefined, 3.14) },
        { json: "AE.4_OE.0_OpacityTransitionDuration", js: "AE.4_OE.0_OpacityTransitionDuration", typ: u(undefined, 3.14) },
        { json: "AE.5_EventDelayDuration", js: "AE.5_EventDelayDuration", typ: u(undefined, 3.14) },
        { json: "AE.6_EventDelayDuration", js: "AE.6_EventDelayDuration", typ: u(undefined, 3.14) },
        { json: "AreaID", js: "AreaID", typ: u(undefined, "") },
        { json: "VitalsLevelOverride_001", js: "VitalsLevelOverride_001", typ: u(undefined, 0) },
        { json: "VitalsCategoryOverride_001", js: "VitalsCategoryOverride_001", typ: u(undefined, "") },
        { json: "VitalsLevelOverride_002", js: "VitalsLevelOverride_002", typ: u(undefined, "") },
        { json: "VitalsCategoryOverride_002", js: "VitalsCategoryOverride_002", typ: u(undefined, "") },
        { json: "VitalsLevelOverride_003", js: "VitalsLevelOverride_003", typ: u(undefined, "") },
        { json: "VitalsCategoryOverride_003", js: "VitalsCategoryOverride_003", typ: u(undefined, "") },
    ], false),
    "VitalsCategoryData": o([
        { json: "VitalsCategoryID", js: "VitalsCategoryID", typ: "" },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "Icon", js: "Icon", typ: r("Icon") },
        { json: "LocationHint", js: "LocationHint", typ: r("LocationHint") },
        { json: "LocStringGenerationHelper", js: "LocStringGenerationHelper", typ: "" },
        { json: "GroupVitalsCategoryId", js: "GroupVitalsCategoryId", typ: "" },
        { json: "IsNamed", js: "IsNamed", typ: u(true, null) },
        { json: "IsDynamicPoiTarget", js: "IsDynamicPoiTarget", typ: u(true, null) },
        { json: "LootDropChanceOverride", js: "LootDropChanceOverride", typ: u(0, null) },
        { json: "MtlOverride", js: "MtlOverride", typ: "" },
        { json: "FemaleMtlOverride", js: "FemaleMtlOverride", typ: "" },
    ], false),
    "VitalsData": o([
        { json: "VitalsID", js: "VitalsID", typ: "" },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "VitalsCategories", js: "VitalsCategories", typ: "" },
        { json: "Level", js: "Level", typ: u(undefined, u(0, null)) },
        { json: "Family", js: "Family", typ: u(undefined, r("VitalsDatumFamily")) },
        { json: "CreatureType", js: "CreatureType", typ: u(undefined, r("AttackerVitalsCategory")) },
        { json: "DifficultyTierOverride", js: "DifficultyTierOverride", typ: u(undefined, u(0, null)) },
        { json: "NoExpNoCoin", js: "NoExpNoCoin", typ: u(undefined, "") },
        { json: "CanDropLoot", js: "CanDropLoot", typ: u(undefined, true) },
        { json: "GearScoreOverride", js: "GearScoreOverride", typ: u(undefined, "") },
        { json: "BaseDamageOverride", js: "BaseDamageOverride", typ: u(undefined, "") },
        { json: "DamageMod", js: "DamageMod", typ: u(undefined, u(3.14, null)) },
        { json: "HealthMin", js: "HealthMin", typ: 0 },
        { json: "HealthBaseMax", js: "HealthBaseMax", typ: u(0, "") },
        { json: "HealthInitial", js: "HealthInitial", typ: u(0, "") },
        { json: "HealthMod", js: "HealthMod", typ: u(undefined, u(3.14, null)) },
        { json: "HealthOverridePercentSpellOwnerMaxHealth", js: "HealthOverridePercentSpellOwnerMaxHealth", typ: u(undefined, u(3.14, null)) },
        { json: "PhysicalArmorRatingOverride", js: "PhysicalArmorRatingOverride", typ: u(undefined, "") },
        { json: "PhysicalMitigation", js: "PhysicalMitigation", typ: u(undefined, u(3.14, null)) },
        { json: "ElementalArmorRatingOverride", js: "ElementalArmorRatingOverride", typ: u(undefined, "") },
        { json: "ElementalMitigation", js: "ElementalMitigation", typ: u(undefined, u(3.14, null)) },
        { json: "MinionVitalsId", js: "MinionVitalsId", typ: u(undefined, r("MinionVitalsID")) },
        { json: "BuffBuckets", js: "BuffBuckets", typ: u(undefined, "") },
        { json: "BaseStaggerDamageOverride", js: "BaseStaggerDamageOverride", typ: u(undefined, "") },
        { json: "BlockStaminaDamageOverride", js: "BlockStaminaDamageOverride", typ: u(undefined, "") },
        { json: "HealthBaseTickRate", js: "HealthBaseTickRate", typ: 0 },
        { json: "HealthRegenCappedBy", js: "HealthRegenCappedBy", typ: u(0, null) },
        { json: "HealthRegenThresholds", js: "HealthRegenThresholds", typ: r("HealthRegenThresholds") },
        { json: "HealthTickDelay", js: "HealthTickDelay", typ: 0 },
        { json: "HealthFullyDepletedDelay", js: "HealthFullyDepletedDelay", typ: 0 },
        { json: "HealthLowerThreshold", js: "HealthLowerThreshold", typ: 0 },
        { json: "HealthUpperThreshold", js: "HealthUpperThreshold", typ: 0 },
        { json: "HealthUpdateIfDeathsDoor", js: "HealthUpdateIfDeathsDoor", typ: 0 },
        { json: "HealthUpdateIfDead", js: "HealthUpdateIfDead", typ: 0 },
        { json: "BlockDamageMitigation", js: "BlockDamageMitigation", typ: 0 },
        { json: "BlockStaminaCost", js: "BlockStaminaCost", typ: 3.14 },
        { json: "StaminaMin", js: "StaminaMin", typ: 0 },
        { json: "StaminaBaseMax", js: "StaminaBaseMax", typ: 0 },
        { json: "StaminaInitial", js: "StaminaInitial", typ: 0 },
        { json: "StaminaBaseTickRate", js: "StaminaBaseTickRate", typ: 0 },
        { json: "StaminaRegenCappedBy", js: "StaminaRegenCappedBy", typ: u(0, null) },
        { json: "StaminaRegenThresholds", js: "StaminaRegenThresholds", typ: r("StaminaRegenThresholds") },
        { json: "StaminaTickDelay", js: "StaminaTickDelay", typ: 0 },
        { json: "StaminaRegenDelay", js: "StaminaRegenDelay", typ: u(undefined, 0) },
        { json: "StaminaRegenDelayOnEmpty", js: "StaminaRegenDelayOnEmpty", typ: u(undefined, 0) },
        { json: "StaminaFullyDepletedDelay", js: "StaminaFullyDepletedDelay", typ: 0 },
        { json: "StaminaLowerThreshold", js: "StaminaLowerThreshold", typ: 0 },
        { json: "StaminaUpperThreshold", js: "StaminaUpperThreshold", typ: 0 },
        { json: "StaminaUpdateIfDeathsDoor", js: "StaminaUpdateIfDeathsDoor", typ: 0 },
        { json: "StaminaUpdateIfDead", js: "StaminaUpdateIfDead", typ: 0 },
        { json: "StaminaCostMitigation", js: "StaminaCostMitigation", typ: 3.14 },
        { json: "MinMana", js: "MinMana", typ: 0 },
        { json: "ManaBaseMax", js: "ManaBaseMax", typ: 0 },
        { json: "ManaInitial", js: "ManaInitial", typ: 0 },
        { json: "ManaBaseRegenRate", js: "ManaBaseRegenRate", typ: 0 },
        { json: "ManaRegenDelay", js: "ManaRegenDelay", typ: 0 },
        { json: "ManaRegenDelayOnEmpty", js: "ManaRegenDelayOnEmpty", typ: 0 },
        { json: "DeathsDoorTime", js: "DeathsDoorTime", typ: 0 },
        { json: "DeathsDoorDelay", js: "DeathsDoorDelay", typ: 3.14 },
        { json: "HelpUpHealthPct", js: "HelpUpHealthPct", typ: 3.14 },
        { json: "FoodMin", js: "FoodMin", typ: "" },
        { json: "FoodBaseMax", js: "FoodBaseMax", typ: 0 },
        { json: "FoodInitial", js: "FoodInitial", typ: 0 },
        { json: "FoodBaseTickRate", js: "FoodBaseTickRate", typ: 0 },
        { json: "FoodTickDelay", js: "FoodTickDelay", typ: 0 },
        { json: "FoodFullyDepletedDelay", js: "FoodFullyDepletedDelay", typ: 0 },
        { json: "FoodLowerThreshold", js: "FoodLowerThreshold", typ: 3.14 },
        { json: "FoodUpperThreshold", js: "FoodUpperThreshold", typ: 3.14 },
        { json: "DrinkMin", js: "DrinkMin", typ: 0 },
        { json: "DrinkInitial", js: "DrinkInitial", typ: 0 },
        { json: "DrinkBaseMax", js: "DrinkBaseMax", typ: 0 },
        { json: "DrinkBaseTickRate", js: "DrinkBaseTickRate", typ: 0 },
        { json: "DrinkTickDelay", js: "DrinkTickDelay", typ: 0 },
        { json: "DrinkFullyDepletedDelay", js: "DrinkFullyDepletedDelay", typ: 0 },
        { json: "DrinkLowerThreshold", js: "DrinkLowerThreshold", typ: 3.14 },
        { json: "DrinkUpperThreshold", js: "DrinkUpperThreshold", typ: 3.14 },
        { json: "DamageCooldown", js: "DamageCooldown", typ: 0 },
        { json: "MaxDefenseMitigationPercent", js: "MaxDefenseMitigationPercent", typ: 3.14 },
        { json: "AfflictionAbsorption", js: "AfflictionAbsorption", typ: "" },
        { json: "GameModeKillEventIds", js: "GameModeKillEventIds", typ: u(undefined, "") },
        { json: "GameModeAssistEventIds", js: "GameModeAssistEventIds", typ: u(undefined, "") },
        { json: "WarKillEventId", js: "WarKillEventId", typ: u(undefined, r("WarKillEventID")) },
        { json: "WarAssistEventId", js: "WarAssistEventId", typ: u(undefined, r("WarAssistEventID")) },
        { json: "KillEventIdOverride", js: "KillEventIdOverride", typ: u(undefined, r("KillEventIDOverride")) },
        { json: "LootDropChance", js: "LootDropChance", typ: u(0, null, "") },
        { json: "IgnoreLootDropModifier", js: "IgnoreLootDropModifier", typ: u(undefined, r("AdjustPowerLevel")) },
        { json: "LootTableId", js: "LootTableId", typ: r("VitalsDatumLootTableID") },
        { json: "LootTags", js: "LootTags", typ: u(undefined, "") },
        { json: "IgnoreEffectCategories", js: "IgnoreEffectCategories", typ: u(undefined, "") },
        { json: "DEFStandard", js: "DEFStandard", typ: u(0, null) },
        { json: "DEFSiege", js: "DEFSiege", typ: "" },
        { json: "DEFStrike", js: "DEFStrike", typ: u(0, null, "") },
        { json: "DEFSlash", js: "DEFSlash", typ: u(0, null, "") },
        { json: "DEFThrust", js: "DEFThrust", typ: u(0, null, "") },
        { json: "DEFArcane", js: "DEFArcane", typ: u(undefined, u(0, null)) },
        { json: "DEFFire", js: "DEFFire", typ: u(0, null, "") },
        { json: "DEFIce", js: "DEFIce", typ: u(undefined, "") },
        { json: "DEFNature", js: "DEFNature", typ: u(undefined, "") },
        { json: "DEFLightning", js: "DEFLightning", typ: u(0, null, "") },
        { json: "DEFCorruption", js: "DEFCorruption", typ: u(0, null, "") },
        { json: "ABSStandard", js: "ABSStandard", typ: u(3.14, null) },
        { json: "ABSSiege", js: "ABSSiege", typ: u(3.14, null) },
        { json: "ABSStrike", js: "ABSStrike", typ: u(3.14, null) },
        { json: "ABSSlash", js: "ABSSlash", typ: u(3.14, null) },
        { json: "ABSThrust", js: "ABSThrust", typ: u(3.14, null) },
        { json: "ABSArcane", js: "ABSArcane", typ: u(undefined, 0) },
        { json: "ABSIce", js: "ABSIce", typ: u(undefined, 0) },
        { json: "ABSNature", js: "ABSNature", typ: u(undefined, u(0, null)) },
        { json: "ABSFire", js: "ABSFire", typ: u(3.14, null) },
        { json: "ABSLightning", js: "ABSLightning", typ: u(3.14, null) },
        { json: "ABSCorruption", js: "ABSCorruption", typ: u(3.14, null) },
        { json: "RESPoison", js: "RESPoison", typ: u(3.14, null) },
        { json: "RESDisease", js: "RESDisease", typ: u(3.14, null) },
        { json: "RESBleed", js: "RESBleed", typ: u(3.14, null, "") },
        { json: "RESFrostbite", js: "RESFrostbite", typ: u(0, null, "") },
        { json: "RESCurse", js: "RESCurse", typ: u(3.14, null, "") },
        { json: "RESBlight", js: "RESBlight", typ: u(undefined, u(3.14, null)) },
        { json: "BLAStandard", js: "BLAStandard", typ: "" },
        { json: "BLASiege", js: "BLASiege", typ: "" },
        { json: "BLAStrike", js: "BLAStrike", typ: "" },
        { json: "BLASlash", js: "BLASlash", typ: "" },
        { json: "BLAThrust", js: "BLAThrust", typ: "" },
        { json: "BLAArcane", js: "BLAArcane", typ: u(undefined, "") },
        { json: "BLAFire", js: "BLAFire", typ: "" },
        { json: "BLAIce", js: "BLAIce", typ: u(undefined, "") },
        { json: "BLANature", js: "BLANature", typ: u(undefined, "") },
        { json: "BLALightning", js: "BLALightning", typ: "" },
        { json: "BLACorruption", js: "BLACorruption", typ: "" },
        { json: "ABAPoison", js: "ABAPoison", typ: "" },
        { json: "ABADisease", js: "ABADisease", typ: "" },
        { json: "ABABleed", js: "ABABleed", typ: "" },
        { json: "ABAFrostbite", js: "ABAFrostbite", typ: "" },
        { json: "ABACurse", js: "ABACurse", typ: "" },
        { json: "ABABlight", js: "ABABlight", typ: u(undefined, "") },
        { json: "WKNStandard", js: "WKNStandard", typ: u(3.14, null) },
        { json: "WKNSiege", js: "WKNSiege", typ: u(3.14, null, "") },
        { json: "WKNStrike", js: "WKNStrike", typ: u(3.14, null, "") },
        { json: "WKNSlash", js: "WKNSlash", typ: u(3.14, null, "") },
        { json: "WKNThrust", js: "WKNThrust", typ: u(3.14, null, "") },
        { json: "WKNArcane", js: "WKNArcane", typ: u(undefined, u(3.14, null)) },
        { json: "WKNIce", js: "WKNIce", typ: u(undefined, u(3.14, null)) },
        { json: "WKNNature", js: "WKNNature", typ: u(undefined, u(3.14, null)) },
        { json: "WKNFire", js: "WKNFire", typ: u(3.14, null, "") },
        { json: "WKNLightning", js: "WKNLightning", typ: u(3.14, null, "") },
        { json: "WKNCorruption", js: "WKNCorruption", typ: u(3.14, null, "") },
        { json: "DMGStandard", js: "DMGStandard", typ: u(0, null) },
        { json: "DMGSiege", js: "DMGSiege", typ: u(0, null) },
        { json: "DMGStrike", js: "DMGStrike", typ: u(0, null) },
        { json: "DMGSlash", js: "DMGSlash", typ: u(3.14, null) },
        { json: "DMGThrust", js: "DMGThrust", typ: u(3.14, null) },
        { json: "DMGArcane", js: "DMGArcane", typ: u(undefined, 3.14) },
        { json: "DMGFire", js: "DMGFire", typ: u(3.14, null) },
        { json: "DMGIce", js: "DMGIce", typ: u(undefined, 0) },
        { json: "DMGNature", js: "DMGNature", typ: u(undefined, 0) },
        { json: "DMGLightning", js: "DMGLightning", typ: u(0, null) },
        { json: "DMGCorruption", js: "DMGCorruption", typ: u(0, null) },
        { json: "AFAPoison", js: "AFAPoison", typ: u(0, null, "") },
        { json: "AFADisease", js: "AFADisease", typ: u(0, null, "") },
        { json: "AFABleed", js: "AFABleed", typ: u(0, null, "") },
        { json: "AFAFrostbite", js: "AFAFrostbite", typ: r("AFAFrostbite") },
        { json: "AFACurse", js: "AFACurse", typ: "" },
        { json: "AFABlight", js: "AFABlight", typ: u(undefined, "") },
        { json: "CharacterScale", js: "CharacterScale", typ: u(undefined, u(3.14, null)) },
        { json: "IsMinion", js: "IsMinion", typ: u(undefined, u(true, null)) },
        { json: "ChainSpellImmune", js: "ChainSpellImmune", typ: u(undefined, u(true, null)) },
        { json: "MutatorDifficultyMod", js: "MutatorDifficultyMod", typ: u(undefined, "") },
        { json: "MutatorPotencyMod", js: "MutatorPotencyMod", typ: u(undefined, u(0, null)) },
        { json: "HealthPercentForLootContributionOverride", js: "HealthPercentForLootContributionOverride", typ: u(undefined, u(3.14, null)) },
        { json: "WarPoints", js: "WarPoints", typ: u(undefined, "") },
        { json: "KillEventId", js: "KillEventId", typ: u(undefined, "") },
        { json: "DEFMagic", js: "DEFMagic", typ: u(undefined, "") },
        { json: "ABSMagic", js: "ABSMagic", typ: u(undefined, u(3.14, null)) },
        { json: "BLAMagic", js: "BLAMagic", typ: u(undefined, "") },
        { json: "WKNMagic", js: "WKNMagic", typ: u(undefined, "") },
        { json: "DMGMagic", js: "DMGMagic", typ: u(undefined, u(0, null)) },
    ], false),
    "VitalsLevelData": o([
        { json: "Level", js: "Level", typ: 0 },
        { json: "GearScore", js: "GearScore", typ: 0 },
        { json: "BaseDamage", js: "BaseDamage", typ: 3.14 },
        { json: "BaseMaxHealth", js: "BaseMaxHealth", typ: 3.14 },
        { json: "InitialHealth", js: "InitialHealth", typ: 3.14 },
        { json: "PhysicalArmorRating", js: "PhysicalArmorRating", typ: 3.14 },
        { json: "ElementalArmorRating", js: "ElementalArmorRating", typ: 3.14 },
        { json: "LootGSBonus", js: "LootGSBonus", typ: 0 },
        { json: "LootGSBonusChance", js: "LootGSBonusChance", typ: 3.14 },
        { json: "Solo Damage", js: "Solo Damage", typ: "" },
        { json: "Solo Health", js: "Solo Health", typ: "" },
    ], false),
    "VitalsModifierData": o([
        { json: "CategoryId", js: "CategoryId", typ: r("AttackerVitalsCategory") },
        { json: "CategoryDamageMod", js: "CategoryDamageMod", typ: 3.14 },
        { json: "CategoryHealthMod", js: "CategoryHealthMod", typ: 3.14 },
        { json: "CategoryDropChanceMod", js: "CategoryDropChanceMod", typ: 3.14 },
    ], false),
    "WarboardStatDefinitions": o([
        { json: "WarboardStatID", js: "WarboardStatID", typ: "" },
        { json: "InGameStat", js: "InGameStat", typ: true },
        { json: "EndGameStat", js: "EndGameStat", typ: true },
        { json: "AG_TotalDamageDealt", js: "AG_TotalDamageDealt", typ: 0 },
        { json: "AG_HealingDone", js: "AG_HealingDone", typ: 0 },
        { json: "AG_Score", js: "AG_Score", typ: 3.14 },
        { json: "AG_AITakedowns", js: "AG_AITakedowns", typ: u(undefined, 0) },
        { json: "AG_PlayerTakedowns", js: "AG_PlayerTakedowns", typ: u(undefined, 0) },
        { json: "AG_TotalResourcesDeposited", js: "AG_TotalResourcesDeposited", typ: u(undefined, 0) },
        { json: "AG_Kills", js: "AG_Kills", typ: u(undefined, 0) },
        { json: "AG_DamageTaken", js: "AG_DamageTaken", typ: u(undefined, 0) },
    ], false),
    "WeaponAccessoryDefinitions": o([
        { json: "#", js: "#", typ: 0 },
        { json: "WeaponID", js: "WeaponID", typ: "" },
        { json: "PrefabPath", js: "PrefabPath", typ: r("PrefabPath") },
        { json: "MeshOverride", js: "MeshOverride", typ: "" },
        { json: "SkinOverride1", js: "SkinOverride1", typ: "" },
        { json: "MaterialOverride1", js: "MaterialOverride1", typ: "" },
        { json: "SkinOverride2", js: "SkinOverride2", typ: r("WeaponAccessoryDefinitionSkinOverride2") },
        { json: "MaterialOverride2", js: "MaterialOverride2", typ: r("MaterialOverride2") },
        { json: "SkinOverride3", js: "SkinOverride3", typ: "" },
        { json: "MaterialOverride3", js: "MaterialOverride3", typ: "" },
        { json: "SkinOverride4", js: "SkinOverride4", typ: "" },
        { json: "MaterialOverride4", js: "MaterialOverride4", typ: "" },
        { json: "EquipType", js: "EquipType", typ: r("WeaponAccessoryDefinitionEquipType") },
        { json: "SheathMode", js: "SheathMode", typ: r("MaterialOverride2") },
    ], false),
    "WeaponAppearanceDefinitions": o([
        { json: "WeaponAppearanceID", js: "WeaponAppearanceID", typ: "" },
        { json: "Name", js: "Name", typ: r("WeaponAppearanceDefinitionName") },
        { json: "Description", js: "Description", typ: "" },
        { json: "ItemClass", js: "ItemClass", typ: r("WeaponAppearanceDefinitionItemClass") },
        { json: "Art ID Names", js: "Art ID Names", typ: "" },
        { json: "Weapon Material name Info", js: "Weapon Material name Info", typ: "" },
        { json: "MeshOverride", js: "MeshOverride", typ: "" },
        { json: "SkinOverride1", js: "SkinOverride1", typ: r("SkinOverride1") },
        { json: "MaterialOverride1", js: "MaterialOverride1", typ: "" },
        { json: "SkinOverride2", js: "SkinOverride2", typ: r("WeaponAppearanceDefinitionSkinOverride2") },
        { json: "MaterialOverride2", js: "MaterialOverride2", typ: "" },
        { json: "SkinOverride3", js: "SkinOverride3", typ: "" },
        { json: "MaterialOverride3", js: "MaterialOverride3", typ: "" },
        { json: "SkinOverride4", js: "SkinOverride4", typ: "" },
        { json: "MaterialOverride4", js: "MaterialOverride4", typ: "" },
        { json: "MaskRColor", js: "MaskRColor", typ: r("WeaponAppearanceDefinitionMaskRColor") },
        { json: "MaskROverride", js: "MaskROverride", typ: u(3.14, null) },
        { json: "MaskR", js: "MaskR", typ: u(3.14, null) },
        { json: "MaskGColor", js: "MaskGColor", typ: r("WeaponAppearanceDefinitionMaskGColor") },
        { json: "MaskGOverride", js: "MaskGOverride", typ: u(3.14, null) },
        { json: "MaskG", js: "MaskG", typ: u(3.14, null) },
        { json: "MaskBColor", js: "MaskBColor", typ: r("WeaponAppearanceDefinitionMaskBColor") },
        { json: "MaskBOverride", js: "MaskBOverride", typ: u(3.14, null) },
        { json: "MaskB", js: "MaskB", typ: u(3.14, null) },
        { json: "MaskASpecColor", js: "MaskASpecColor", typ: r("MaskASpecColor") },
        { json: "MaskASpec", js: "MaskASpec", typ: u(3.14, null) },
        { json: "MaskAGlossShift", js: "MaskAGlossShift", typ: u(3.14, null) },
        { json: "MaskAGloss", js: "MaskAGloss", typ: u(3.14, null) },
        { json: "EmissiveColor", js: "EmissiveColor", typ: r("EmissiveColor") },
        { json: "EmissiveIntensity", js: "EmissiveIntensity", typ: u(0, null) },
        { json: "SoundTableID", js: "SoundTableID", typ: u(undefined, r("ItemSoundIDEnum")) },
        { json: "IconCaptureGroup", js: "IconCaptureGroup", typ: r("WeaponAppearanceDefinitionIconCaptureGroup") },
        { json: "IconPath", js: "IconPath", typ: "" },
        { json: "HiResIconPath", js: "HiResIconPath", typ: "" },
        { json: "Appearance", js: "Appearance", typ: u(undefined, "") },
        { json: "FemaleAppearance", js: "FemaleAppearance", typ: u(undefined, "") },
        { json: "RDyeSlotDisabled", js: "RDyeSlotDisabled", typ: u(undefined, "") },
        { json: "GDyeSlotDisabled", js: "GDyeSlotDisabled", typ: u(undefined, "") },
        { json: "BDyeSlotDisabled", js: "BDyeSlotDisabled", typ: u(undefined, "") },
        { json: "ADyeSlotDisabled", js: "ADyeSlotDisabled", typ: u(undefined, "") },
    ], false),
    "WeaponEffectData": o([
        { json: "WeaponEffectId", js: "WeaponEffectId", typ: "" },
        { json: "Default", js: "Default", typ: "" },
        { json: "Fire", js: "Fire", typ: "" },
        { json: "Arcane", js: "Arcane", typ: "" },
        { json: "Void", js: "Void", typ: "" },
        { json: "Lightning", js: "Lightning", typ: "" },
        { json: "Ice", js: "Ice", typ: "" },
        { json: "Nature", js: "Nature", typ: "" },
    ], false),
    "WeaponItemDefinitions": o([
        { json: "WeaponID", js: "WeaponID", typ: "" },
        { json: "BaseWeaponID", js: "BaseWeaponID", typ: "" },
        { json: "DEV Prio", js: "DEV Prio", typ: u(0, null) },
        { json: "PrimaryUse", js: "PrimaryUse", typ: r("PrimaryUse") },
        { json: "IconPath", js: "IconPath", typ: r("IconPath") },
        { json: "MaxStackSize", js: "MaxStackSize", typ: u(0, null) },
        { json: "EquipType", js: "EquipType", typ: r("WeaponItemDefinitionEquipType") },
        { json: "DamageStatMultiplier", js: "DamageStatMultiplier", typ: r("DamageStatMultiplier") },
        { json: "WeaponMasteryCategoryId", js: "WeaponMasteryCategoryId", typ: r("KillEnemyWeaponIDEnum") },
        { json: "TierNumber", js: "TierNumber", typ: u(0, null) },
        { json: "BaseDamage", js: "BaseDamage", typ: u(0, null) },
        { json: "CritChance", js: "CritChance", typ: u(3.14, null) },
        { json: "CritDamageMultiplier", js: "CritDamageMultiplier", typ: u(3.14, null) },
        { json: "BaseStaggerDamage", js: "BaseStaggerDamage", typ: u(0, null) },
        { json: "CritStaggerDamageMultiplier", js: "CritStaggerDamageMultiplier", typ: u(3.14, null) },
        { json: "ReticleName", js: "ReticleName", typ: r("ReticleName") },
        { json: "ReticleTargetName", js: "ReticleTargetName", typ: r("ReticleTargetName") },
        { json: "ReticleRayCastDistance", js: "ReticleRayCastDistance", typ: u(0, null) },
        { json: "AmmoType", js: "AmmoType", typ: r("AmmoType") },
        { json: "MaxLoadedAmmo", js: "MaxLoadedAmmo", typ: u(0, null, "") },
        { json: "AutoReloadAmmoSeconds", js: "AutoReloadAmmoSeconds", typ: u(3.14, null, "") },
        { json: "AmmoMesh", js: "AmmoMesh", typ: "" },
        { json: "MannequinTag", js: "MannequinTag", typ: "" },
        { json: "OffHandMannequinTag", js: "OffHandMannequinTag", typ: r("OffHandMannequinTag") },
        { json: "MeshOverride", js: "MeshOverride", typ: "" },
        { json: "SkinOverride1", js: "SkinOverride1", typ: "" },
        { json: "MaterialOverride1", js: "MaterialOverride1", typ: "" },
        { json: "SkinOverride2", js: "SkinOverride2", typ: r("WeaponAppearanceDefinitionSkinOverride2") },
        { json: "MaterialOverride2", js: "MaterialOverride2", typ: "" },
        { json: "SkinOverride3", js: "SkinOverride3", typ: "" },
        { json: "MaterialOverride3", js: "MaterialOverride3", typ: "" },
        { json: "SkinOverride4", js: "SkinOverride4", typ: "" },
        { json: "MaterialOverride4", js: "MaterialOverride4", typ: "" },
        { json: "FireJoint", js: "FireJoint", typ: r("FireJoint") },
        { json: "DamageTableRow", js: "DamageTableRow", typ: r("DamageTableRow") },
        { json: "TooltipPrimaryAttackData", js: "TooltipPrimaryAttackData", typ: "" },
        { json: "TooltipAlternateAttackData", js: "TooltipAlternateAttackData", typ: "" },
        { json: "AnimDbPath", js: "AnimDbPath", typ: "" },
        { json: "GatheringTypes", js: "GatheringTypes", typ: r("GatheringTypes") },
        { json: "GatheringMultiplier", js: "GatheringMultiplier", typ: u(3.14, null) },
        { json: "GatheringEfficiency", js: "GatheringEfficiency", typ: u(3.14, null) },
        { json: "MinGatherEFF", js: "MinGatherEFF", typ: u(3.14, null, "") },
        { json: "MaxGatherEFF", js: "MaxGatherEFF", typ: u(3.14, null, "") },
        { json: "AudioPickup", js: "AudioPickup", typ: r("WeaponItemDefinitionAudioPickup") },
        { json: "AudioPlace", js: "AudioPlace", typ: r("WeaponItemDefinitionAudioPlace") },
        { json: "Primary Hand", js: "Primary Hand", typ: r("PrimaryHand") },
        { json: "EquipmentCategories", js: "EquipmentCategories", typ: "" },
        { json: "RequiredStrength", js: "RequiredStrength", typ: u(0, null) },
        { json: "RequiredDexterity", js: "RequiredDexterity", typ: u(0, null) },
        { json: "RequiredIntelligence", js: "RequiredIntelligence", typ: u(0, null) },
        { json: "RequiredFocus", js: "RequiredFocus", typ: u(0, null) },
        { json: "ScalingStrength", js: "ScalingStrength", typ: u(3.14, null) },
        { json: "ScalingDexterity", js: "ScalingDexterity", typ: u(3.14, null) },
        { json: "ScalingIntelligence", js: "ScalingIntelligence", typ: u(3.14, null) },
        { json: "ScalingFocus", js: "ScalingFocus", typ: u(3.14, null) },
        { json: "Resistances", js: "Resistances", typ: "" },
        { json: "Weaknesses", js: "Weaknesses", typ: r("Weaknesses") },
        { json: "StatBonuses", js: "StatBonuses", typ: "" },
        { json: "StatMultipliers", js: "StatMultipliers", typ: "" },
        { json: "EquipmentCategoryMultiplier", js: "EquipmentCategoryMultiplier", typ: "" },
        { json: "AttackGameEventID", js: "AttackGameEventID", typ: r("AttackGameEventID") },
        { json: "PhysicalArmorSetScaleFactor", js: "PhysicalArmorSetScaleFactor", typ: u(3.14, null, "") },
        { json: "ElementalArmorSetScaleFactor", js: "ElementalArmorSetScaleFactor", typ: u(3.14, null, "") },
        { json: "ArmorRatingScaleFactor", js: "ArmorRatingScaleFactor", typ: u(3.14, null, "") },
        { json: "WeightOverride", js: "WeightOverride", typ: u(3.14, null, "") },
        { json: "BlockStaminaDamage", js: "BlockStaminaDamage", typ: u(0, null) },
        { json: "BlockStability", js: "BlockStability", typ: u(0, null) },
        { json: "DeflectionRating", js: "DeflectionRating", typ: u(0, null) },
        { json: "BLAStandard", js: "BLAStandard", typ: u(0, "") },
        { json: "BLASiege", js: "BLASiege", typ: u(3.14, null) },
        { json: "BLAStrike", js: "BLAStrike", typ: u(3.14, null) },
        { json: "BLASlash", js: "BLASlash", typ: u(3.14, null) },
        { json: "BLAThrust", js: "BLAThrust", typ: u(3.14, null) },
        { json: "BLAArcane", js: "BLAArcane", typ: u(3.14, null) },
        { json: "BLAFire", js: "BLAFire", typ: u(3.14, null) },
        { json: "BLAIce", js: "BLAIce", typ: u(3.14, null) },
        { json: "BLANature", js: "BLANature", typ: u(3.14, null) },
        { json: "BLALightning", js: "BLALightning", typ: u(3.14, null) },
        { json: "BLACorruption", js: "BLACorruption", typ: u(3.14, null) },
        { json: "ABAPoison", js: "ABAPoison", typ: u(3.14, null) },
        { json: "ABADisease", js: "ABADisease", typ: u(3.14, null) },
        { json: "ABABleed", js: "ABABleed", typ: u(3.14, null) },
        { json: "ABAFrostbite", js: "ABAFrostbite", typ: u(3.14, null) },
        { json: "ABACurse", js: "ABACurse", typ: u(3.14, null) },
        { json: "RangedAttackProfile", js: "RangedAttackProfile", typ: "" },
        { json: "AttachedSpellData", js: "AttachedSpellData", typ: r("AttachedSpellData") },
        { json: "Appearance", js: "Appearance", typ: r("Appearance") },
        { json: "FemaleAppearance", js: "FemaleAppearance", typ: r("FemaleAppearance") },
        { json: "CanBlockRanged", js: "CanBlockRanged", typ: u(true, null, "") },
        { json: "ManaCostId", js: "ManaCostId", typ: r("ManaCostID") },
        { json: "WeaponEffectId", js: "WeaponEffectId", typ: "" },
        { json: "BaseAccuracy", js: "BaseAccuracy", typ: u(0, null) },
        { json: "EquipAbility", js: "EquipAbility", typ: u(undefined, "") },
        { json: "SoundTableID", js: "SoundTableID", typ: r("ItemSoundIDEnum") },
    ], false),
    "WhisperData": o([
        { json: "WhisperId", js: "WhisperId", typ: "" },
        { json: "TriggerType", js: "TriggerType", typ: r("TriggerType") },
        { json: "RequiredAchievementId", js: "RequiredAchievementId", typ: r("RequiredAchievementID") },
        { json: "TimelineId", js: "TimelineId", typ: "" },
        { json: "Duration", js: "Duration", typ: 3.14 },
        { json: "GameEvent", js: "GameEvent", typ: "" },
        { json: "VoiceOver", js: "VoiceOver", typ: "" },
        { json: "Subtitle", js: "Subtitle", typ: r("Subtitle") },
        { json: "AchievementId", js: "AchievementId", typ: "" },
        { json: "UseVFX", js: "UseVFX", typ: true },
        { json: "VfxId", js: "VfxId", typ: r("VfxID") },
    ], false),
    "WhisperVfxData": o([
        { json: "WhisperVfxId", js: "WhisperVfxId", typ: r("VfxID") },
        { json: "VfxLibrary", js: "VfxLibrary", typ: "" },
        { json: "IntroFlash", js: "IntroFlash", typ: "" },
        { json: "IntroFx", js: "IntroFx", typ: "" },
        { json: "MainFx", js: "MainFx", typ: "" },
        { json: "Main_VoiceFx", js: "Main_VoiceFx", typ: "" },
        { json: "Main_VoiceFx_Pulse", js: "Main_VoiceFx_Pulse", typ: "" },
        { json: "Main_VoiceFx_Tendrils", js: "Main_VoiceFx_Tendrils", typ: "" },
        { json: "RefractPlayer", js: "RefractPlayer", typ: "" },
        { json: "RefractWisp", js: "RefractWisp", typ: "" },
        { json: "ExitFx", js: "ExitFx", typ: "" },
    ], false),
    "AbilityCooldownComparisonType": [
        "",
        "Equal",
        "GreaterThan",
        "GreaterThanOrEqual",
        "LessThan",
        "LessThanOrEqual",
        "NotEqual",
    ],
    "AbilityIDToCheckForTrackedHits": [
        "Ability_Greatsword_Counter",
        "Ability_Sword_FinalStand",
        "Blunderbuss_Buckshot",
        "Blunderbuss_Charge",
        "",
        "Passive_Bow_Hunter_DmgOnFirst",
        "Passive_Greatsword_Def_8",
        "Passive_Greatsword_Off_8",
        "Passive_Hatchet_ThrowingAxe_CriticalThrows",
        "Ult_Passive_Hatchet_ExtendDebuffDuration",
        "Ultimate_Bow_Hunter",
        "Ultimate_Greatsword_Defense",
        "Ultimate_Greatsword_Offense",
        "Upgrade_Greatsword_Combo_2",
        "Upgrade_Greatsword_Counter_1",
        "Upgrade_Greatsword_Counter_2",
        "Upgrade_Greatsword_Dash_2",
        "Upgrade_Greatsword_Drain_1",
    ],
    "Options": [
        "AbilitySpecific",
        "ActiveWeapon",
        "AllExcept",
        "",
    ],
    "AbilityTrigger": [
        "AfterPerform",
        "",
        "OnPerform",
    ],
    "AfterAction": [
        "Ability_Rapier_Slash",
        "Dodge",
        "",
        "Hatchet_PowerThrow",
    ],
    "AttackType": [
        "Ability",
        "",
        "Heavy",
        "Heavy,Ability",
        "Heavy,Magic",
        "Heavy,Magic,Ability",
        "Light",
        "Light,Heavy",
        "Light,Heavy,Ability",
        "Light,Heavy,Magic",
        "Medium",
    ],
    "AttackerVitalsCategory": [
        "Boss-",
        "Dungeon+",
        "Dungeon_NoCurrency",
        "Elite",
        "Named_Solo",
        "OutpostRushSolo",
        "Solo",
        "Solo_StarterBeach",
        "Boss",
        "Critter",
        "Dungeon",
        "DungeonBoss",
        "DungeonMiniBoss",
        "Dungeon+_NoCurrency",
        "Elite+",
        "EliteBoss",
        "EliteMiniBoss",
        "",
        "Named_Solo+",
        "OutpostRushGroup+",
        "OutpostRushSolo+",
        "Player",
        "Boss+",
        "Dungeon-",
        "Dungeon-_NoCurrency",
        "Elite-",
        "Solo-",
        "Solo+_StarterBeach",
        "Skull",
        "Solo+",
        "Solo-_StarterBeach",
        "Spell",
    ],
    "DamageCategory": [
        "Elemental",
        "",
        "Physical",
    ],
    "DamageTableRowOverride": [
        "Attack_Darkness_Calls",
        "BowAttackKnockBack",
        "Bow_Penetrating_AttackA1",
        "Bow_PoisonShot_Upgrade",
        "",
        "Hatchet_Berserk_Taunt",
        "IceMagic_Spikes_Upgrade",
        "OH_Shield_Attack_Bash_Upgrade",
        "OH_Shield_FinalStand",
        "Reaction_Breakout",
        "Rune_CannonBlast_Projectile_Greater",
        "Rune_CannonBlast_Projectile_Survivor",
        "Rune_HereticFall_AoE_Dominator",
        "1H_Rapier_Riposte_Taunt",
        "2H_Spear_Cyclone_Pushback",
        "2H_Spear_Javelin_Knockback",
        "Warhammer_Damage_MightyGavel_Upg",
    ],
    "DamageTableStatusEffectOverride": [
        "",
        "Spear_Perforate_Rend_Upgrade",
        "Spear_Skewer_Bleed_Upgrade",
    ],
    "DamageTypes": [
        "Acid",
        "AfflictionDisease",
        "AfflictionFrostbite",
        "Arcane",
        "Brimstone",
        "Corruption",
        "Deflect",
        "",
        "Falling",
        "Fire",
        "Ice",
        "Lightning",
        "Magic",
        "Magic,Fire,Lightning,Corruption,Void,Life,Ice, Arcane, Nature",
        "Nature",
        "PhysFire",
        "Siege",
        "Slash",
        "Slash,Strike",
        "Slashing",
        "Standard",
        "Strike",
        "Thrust",
        "True",
        "Void",
    ],
    "EnableHoldConditionIfTrackedSpellExistsOfType": [
        "",
        "IcePylon",
    ],
    "EquipLoadCategory": [
        "",
        "Fast",
        "Normal",
    ],
    "ExcludeFromGameModes": [
        "Any",
        "",
        "Expedition",
        "Invasion",
        "Location",
        "OutpostRush",
        "Settlement",
        "War",
    ],
    "GatheringTradeskill": [
        "Arcana",
        "Armoring",
        "AzothStaff",
        "Cooking",
        "",
        "Engineering",
        "Fishing",
        "Furnishing",
        "Harvesting",
        "Jewelcrafting",
        "Leatherworking",
        "Logging",
        "Mining",
        "Musician",
        "None",
        "Skinning",
        "Smelting",
        "Stonecutting",
        "Weaponsmithing",
        "Weaving",
        "Woodworking",
    ],
    "HoldConditionButtonIcon": [
        "",
        "lyshineui/images/icons/abilities/iceMagic_Ability4.png",
    ],
    "IgnoreDisabledAttackTypes": [
        "Ability",
        "Arcane",
        "Bullet",
        "",
        "Fall",
        "Falling",
        "Heartgem",
        "Heavy",
        "Magic ",
        "Light",
        "Magic",
        "MagicSpell",
    ],
    "InAction": [
        "Ability_Lifestaff_OrbofProtection_Cast",
        "Ability_Rapier_Evasion",
        "Ability_Rapier_Flurry",
        "Ability_WarHammer_ArmorBreaker",
        "Ability_WarHammer_ClearOut",
        "Ability_WarHammer_MightyGavel",
        "Ability_WarHammer_PathOfDestiny",
        "Ability_WarHammer_Shockwave",
        "Block_UpperBody",
        "Block_Upperbody",
        "Bow_JumpBackShot",
        "Bow_RapidShot",
        "Dodge",
        "",
        "Firearm_AimShoot_SubState",
        "Greatsword_Counter",
        "Hatchet_Attack_Sprint_Land",
        "Hatchet_InfectedThrow",
        "Hatchet_RapidStrikes",
        ".",
        "Spear_Perforate",
        "Spear_Skewer",
        "VoidGauntlet_Harvest",
    ],
    "IsNotConsumableIDS": [
        "",
        "PotionGypsumYellow",
    ],
    "MyMarker": [
        "BlockEarly",
        "",
    ],
    "NumberOfHitsComparisonType": [
        "",
        "Equal",
        "GreaterThanOrEqual",
        "LessThanOrEqual",
        "LessthanOrEqual&#160;",
    ],
    "RangedAttackName": [
        "Basic",
        "BlunderbussAzothShrapnel,BlunderbussAzothShrapnel_Upgraded",
        "",
    ],
    "RangedAttackNameOverride": [
        "BonusDMGOverDistance",
        "",
    ],
    "RemoveStatusEffects": [
        "AbilitySpecific",
        "All",
        "",
        "Global_Weapon_DodgeSuccess_ArcaneDMG_Tracker",
        "Global_Weapon_DodgeSuccess_FireDMG_Tracker",
        "Global_Weapon_DodgeSuccess_IceDMG_Tracker",
        "Global_Weapon_DodgeSuccess_LightningDMG_Tracker",
        "Global_Weapon_DodgeSuccess_NatureDMG_Tracker",
        "Global_Weapon_DodgeSuccess_VoidDMG_Tracker",
    ],
    "RemoveTargetStatusEffectCats": [
        "Buff",
        "CC",
        "Debilitate",
        "Debuff",
        "Dot",
        "Empower",
        "",
        "FoodUtility",
        "Fortify,ArmorFortify",
        "FrostBuff",
        "GreatswordBuff",
        "HarvestHP",
        "LastStand",
        "Root,Slow",
    ],
    "List": [
        "AI_Thorpe_Force_Grab_Tracker",
        "Ability_Spear_Perforate",
        "",
        "FireStaff_Pyro_DOT",
        "Hatchet_Infected_Disease,Hatchet_Infected_Weaken",
        "Hatchet_RendingThrow_Rend",
        "Musket_PowderBurn_Burn",
        "Rapier_Bleed_DOT",
        "Status_Ability_Lifestaff_Beacon",
        "Sword_ShieldBash_Stun2",
        "VoidGauntlet_Scream",
    ],
    "ResetCooldownTimers": [
        "ActiveWeapon",
        "All",
        "",
    ],
    "SetMannequinTag": [
        "Crouch",
        "Detonate",
        "",
    ],
    "StatusEffectBeingApplied": [
        "AI_AdmiralBrute_BarrelExplode",
        "AI_BrotherUmberto_MinionDeath",
        "AI_Evil_Knight_Fire_Champion_DangerCheck",
        "AI_Evil_Knight_Fire_Champion_Overheat",
        "AI_Evil_Knight_Flamekeeper_Combustible",
        "AI_IceDragon_EmpoweringLink_Stack",
        "AI_SandElemental_Soldier_RockPile_Absorb",
        "Blunderbuss_ChargeMortarUsedSignal",
        "",
        "Greatsword_Passive_BlockCount",
        "Greatsword_Stance_Defense",
        "Greatsword_Stance_Offense",
        "Greatsword_Stance_Offense,Greatsword_Stance_Defense",
        "Mut_Curse1_Fir_Major_Damage_DoT",
        "Mut_Curse1_Ice_Major_Damage_DoT",
        "Mut_Curse1_Lig_Major_Damage_DoT",
        "Mut_Curse1_Minor_OrbCount",
        "Mut_Curse1_Nat_Major_Damage_DoT",
        "Mut_Curse1_VFX_Kill",
        "Mut_Curse1_Voi_Major_Damage_DoT",
        "Mut_Curse2_Fir_Major_Damage",
        "Mut_Curse2_Ice_Major_Damage",
        "Mut_Curse2_Nat_Major_Damage",
        "Mut_Curse2_Voi_Major_Damage",
        "PvP_Arena_PreRound",
        "Rune_StoneForm_Dominator",
        "VoidGauntlet_EssenceStack",
    ],
    "StatusEffectCategoriesList": [
        "Debilitate",
        "Debuff",
        "DoT",
        "",
        "Slow,Root",
    ],
    "StatusEffectDamageTableIDForRowOverride": [
        "DamageTable",
        "",
    ],
    "StatusEffectDamageTableRowOverride": [
        "Arcane_Wave_2",
        "Common_DamageOverTime_Override",
        "Common_HealOverTime_Override",
        "Dummy_Row",
        "",
        "FireStaff_Common_DoT",
        "Glacier_Blade_2",
        "NO_ENTRY ",
        "1H_Rapier_Slash_Bleed",
        "2H_Spear_Skewer_Bleed",
    ],
    "StatusEffectDurationCats": [
        "CC",
        "Debilitate",
        "Debuff",
        "Dot",
        "Empower",
        "",
        "FoodUtility",
        "Haste",
        "Stance",
        "StoneForm",
    ],
    "StatusEffectsList": [
        "AI_AdmiralBrute_Blackpowder",
        "AI_Evil_Knight_Fire_Champion_OverheatSpell_Phase01",
        "AI_Evil_Knight_Fire_Champion_OverheatSpell_Phase02",
        "AI_Evil_Knight_Flamekeeper_Combustible",
        "AI_Evil_Knight_Flamekeeper_Stop_Drop_And_Roll",
        "AI_IceDragon_EmpoweringLink",
        "All",
        "Blunderbuss_ChargeCooldown",
        "Blunderbuss_ChargeMortarUsedSignal",
        "",
        "Greatsword_Passive_BlockCount",
        "Mut_Curse1_Fir_Major_Cast",
        "Mut_Curse1_Fir_Minor_Cast",
        "Mut_Curse1_Ice_Major_Cast",
        "Mut_Curse1_Ice_Minor_Cast",
        "Mut_Curse1_Lig_Major_Cast",
        "Mut_Curse1_Lig_Minor_Cast",
        "Mut_Curse1_Nat_Major_Cast",
        "Mut_Curse1_Nat_Minor_Cast",
        "Mut_Curse1_Voi_Major_Cast",
        "Mut_Curse1_Voi_Minor_Cast",
        "Mut_Fir_AOE_VFX",
        "Rapier_BonusDMGAfterAbility",
        "Rapier_Evade_Forward_Damage",
        "Rapier_Fleche_Backstab",
        "Spear_CDROnHitAfterDodge",
        "Status_Passive_Firestaff_FireMage_DmgNoDmg",
        "VoidGauntlet_EssenceStack",
        "Yeti_GlacierBlade_Damage",
    ],
    "TargetCollisionFilters": [
        "",
        "Structure",
    ],
    "TargetMarker": [
        "",
        "IsKnockedDown",
    ],
    "TargetStatusEffectCategory": [
        "Bleed",
        "Buff,NonDispellableBuff",
        "Burn",
        "Burn,FireBurn",
        "CC,Slow,UnclampedSlow",
        "CC,UnclampedSlow,Slow",
        "CC",
        "Debuff",
        "",
        "Frost",
        "Harvest",
        "Haste",
        "IgnoreDebuffs",
        "LifestaffBuff",
        "PowderBurn",
        "Slow",
        "ThrowingAxe",
        "TrapRoot",
        "Trapper",
        "VoidGauntlet",
        "Warhammer",
    ],
    "TargetStatusEffectDurationCats": [
        "Bleed",
        "Buff",
        "Burn",
        "Debilitate,DoT",
        "Disease",
        "Dot",
        "Dot,Debilitate",
        "Empower",
        "",
        "Haste",
        "LifestaffBuff",
        "Poison",
        "RainofArrows",
        "Slow",
        "Spear",
        "ThrowingAxe",
        "Weaken",
    ],
    "UICategory": [
        "Buff",
        "Debuff",
        "",
        "Heal",
        "Magic Damage",
        "Melee Damage",
        "Passive",
        "Ranged Damage",
    ],
    "WeaponTag": [
        "Axe",
        "Blunderbuss",
        "Bow",
        "Club",
        "",
        "Fire",
        "GreatAxe",
        "Greatsword",
        "Heal",
        "Ice",
        "MagicGauntlet",
        "MagicStaff",
        "Rapier",
        "Rifle",
        "Shield_OH",
        "Spear",
        "Sword",
        "VoidGauntlet",
        "Warhammer",
    ],
    "AchievementCategoryEnum": [
        "CampSkin",
        "Dye",
        "",
        "FirstCraft",
        "Journal",
        "Map",
        "MusicalPerformances",
        "MusicalPerformancesEasy",
        "MusicalPerformancesHard",
        "MusicalPerformancesMedium",
        "Objective",
        "OneTimePersistenceValidation",
        "Recipe",
        "Store",
        "Title",
        "Whisper",
    ],
    "AchievementDatumGameEventID": [
        "Chart_Location",
        "",
        "Chart_location",
        "chart_location",
        "Read_LoreItem",
        "Read_LoreItem_AncientGlyph",
        "Read_LoreItem_Monument_Large",
        "Read_LoreItem_Monument_Small",
    ],
    "AffixDatumCategory": [
        "Magic",
        "Material",
        "Type",
    ],
    "AffixStatDatumABSVitalsCategory": [
        "Ancient=0.025",
        "Ancient=0.035",
        "Ancient=0.05",
        "AngryEarth=0.025",
        "AngryEarth=0.035",
        "AngryEarth=0.05",
        "Beast=0.025",
        "Beast=0.035",
        "Beast=0.05",
        "Corrupted=0.025",
        "Corrupted=0.035",
        "Corrupted=0.05",
        "",
        "human=0.025",
        "human=0.035",
        "human=0.05",
        "Lost=0.025",
        "Lost=0.035",
        "Lost=0.05",
    ],
    "AffixStatDatumDMGVitalsCategory": [
        "Ancient=0.05",
        "Ancient=0.08",
        "Ancient=0.11",
        "Ancient=0.15",
        "AngryEarth=0.05",
        "AngryEarth=0.08",
        "AngryEarth=0.11",
        "AngryEarth=0.15",
        "Beast=0.05",
        "Beast=0.08",
        "Beast=0.11",
        "Beast=0.15",
        "Corrupted=0.05",
        "Corrupted=0.08",
        "Corrupted=0.11",
        "Corrupted=0.15",
        "",
        "human=0.05",
        "human=0.08",
        "human=0.11",
        "human=0.15",
        "Lost=0.05",
        "Lost=0.08",
        "Lost=0.11",
        "Lost=0.15",
    ],
    "AmmoType": [
        "Arrow",
        "",
        "Shot",
        "Siege",
        "Thrown",
    ],
    "AmmoWhizByTrigger": [
        "Play_Arrow_WhizzBys",
        "Play_Bullet_WizzBys",
    ],
    "AncientGuardianGreatswordIceVariantStaminaCostCategory": [
        "Blocking",
        "Combat",
        "Dodging",
        "",
        "Gathering",
        "Sprinting",
    ],
    "Gender": [
        "",
        "Female",
        "Male",
    ],
    "HairChop": [
        "BRIM",
        "",
        "HELMBACK",
        "HELMFRONT",
        "HOOD",
        "NO_HAT",
        "NO_HELM",
        "NONE",
    ],
    "ArmorAppearanceDefinitionIconCaptureGroup": [
        "Arms",
        "Chest",
        "",
        "Feet",
        "Head",
        "Legs",
    ],
    "ArmorAppearanceDefinitionItemClass": [
        "",
        "EquippableChest",
        "EquippableChest+Armor+Heavy",
        "EquippableChest+Armor+Heavy+Named",
        "EquippableChest+Armor+Light",
        "EquippableChest+Armor+Light+Named",
        "EquippableChest+Armor+Medium",
        "EquippableChest+Armor+Medium+Named",
        "EquippableChest+Heavy",
        "EquippableFeet",
        "EquippableFeet+Armor+Heavy",
        "EquippableFeet+Armor+Heavy+Named",
        "EquippableFeet+Armor+Light",
        "EquippableFeet+Armor+Light+Named",
        "EquippableFeet+Armor+Medium",
        "EquippableFeet+Armor+Medium+Named",
        "EquippableFeet+Heavy",
        "EquippableHands",
        "EquippableHands+Armor+Heavy",
        "EquippableHands+Armor+Heavy+Named",
        "EquippableHands+Armor+Light",
        "EquippableHands+Armor+Light+Named",
        "EquippableHands+Armor+Medium",
        "EquippableHands+Armor+Medium+Named",
        "EquippableHands+Heavy",
        "EquippableHead",
        "EquippableHead+Armor+Heavy",
        "EquippableHead+Armor+Heavy+Named",
        "EquippableHead+Armor+Light",
        "EquippableHead+Armor+Light+Named",
        "EquippableHead+Armor+Medium",
        "EquippableHead+Armor+Medium+Named",
        "EquippableHead+Heavy",
        "EquippableLegs",
        "EquippableLegs+Armor+Heavy",
        "EquippableLegs+Armor+Heavy+Named",
        "EquippableLegs+Armor+Light",
        "EquippableLegs+Armor+Light+Named",
        "EquippableLegs+Armor+Medium",
        "EquippableLegs+Armor+Medium+Named",
        "EquippableLegs+Heavy",
    ],
    "LeftOn": [
        "",
        "Enable_MetalLight_VoiceFX",
        "FLY_ClothLight_Arm_L",
        "FLY_ClothLight_Leg_L",
        "FLY_LeatherLight_Arm_L",
        "FLY_LeatherLight_Leg_L",
        "FLY_MetalLight_Arm_L",
        "FLY_MetalLight_Leg_L",
        "FLY_MetalMed_Arm_L",
        "FLY_MetalMed_Leg_L",
        "FLY_MetalMedArm_L",
    ],
    "ArmorAppearanceDefinitionMaskBColor": [
        "#a14cd2",
        "#A4A3A3",
        "#aeaeae",
        "#b3b3b3",
        "#b67f58",
        "#b8b8b10",
        "#b8b8b11",
        "#b8b8b12",
        "#b8b8b8",
        "#b8b8b9",
        "#ba9780",
        "#c38d75",
        "#c8cac0",
        "#cc815b",
        "#d3bfda",
        "#d4d4ee",
        "#eacd89",
        "",
        "#5F0006",
        "#000000",
        "#00e6ff",
        "#08cfbf",
        "#0aedda",
        "#0b1721",
        "#0c0c0c",
        "#1a1a1a",
        "#371b6f",
        "#3C363A",
        "#4893ba",
        "#4c462c",
        "#4d4167",
        "#4F5263",
        "#4F5270",
        "#524a42",
        "#53235d",
        "#54ffff",
        "#5e562f",
        "#5f0006",
        "#6495f9",
        "#656565",
        "#656566",
        "#656567",
        "#656568",
        "#656569",
        "#656570",
        "#656571",
        "#656572",
        "#67534a",
        "#6c40c3",
        "#7443a0",
        "#796546",
        "#849b6c",
        "#868686",
        "#895B30",
        "#8b8d8c",
        "#8f4e11",
        "#948968",
        "#97b2ca",
        "#9d0000",
    ],
    "ArmorAppearanceDefinitionMaskGColor": [
        "#a35e00",
        "#A3A7AC",
        "#ae0000",
        "#afb645",
        "#b0924c",
        "#b49a9a",
        "#b8b8b10",
        "#b8b8b11",
        "#b8b8b12",
        "#b8b8b8",
        "#b8b8b9",
        "#bfb4a2",
        "#C16675",
        "#c327ce",
        "#daafdd",
        "",
        "#ffce3b",
        "#ffffff",
        "#B49A9A",
        "#000000",
        "#00acdb",
        "#00ff55",
        "#030303",
        "#0d330b",
        "#1788a4",
        "#2fcce4",
        "#332730",
        "#360000",
        "#3a085a",
        "#3d4f89",
        "#4d4167",
        "#55007f",
        "#5e3466",
        "#64876e",
        "#680a0a",
        "#687C83",
        "#688bac",
        "#697d7f",
        "#6e5217",
        "#78e0cb",
        "#7d9388",
        "#80eeb7",
        "#826858",
        "#850000",
        "#858d5e",
        "#86919c",
        "#873333",
        "#877965",
        "#87a197",
        "#8c828b",
        "#90a18e",
        "#9377b9",
        "#939ca4",
        "#95b61d",
        "#999999",
    ],
    "ArmorAppearanceDefinitionMaskRColor": [
        "#a38c76",
        "#a69b90",
        "#A6DCE8",
        "#B7B9A4",
        "#b8b8b10",
        "#b8b8b11",
        "#b8b8b12",
        "#b8b8b8",
        "#b8b8b9",
        "#BAA66B",
        "#c7f1f4",
        "#ca5a19",
        "#ca5a20",
        "#ca5a21",
        "#ca5a22",
        "#ca5a23",
        "#ca5a24",
        "#ca5a25",
        "#ca5a26",
        "#E0C260",
        "#eed49d",
        "",
        "#f6d7b6",
        "#ff0004",
        "#FFC800",
        "#ffff00",
        "#2A1A18",
        "#000000",
        "#00710d",
        "#007400",
        "#1278a3",
        "#1bc7c2",
        "#1e3945",
        "#252525",
        "#26acca",
        "#27aabf",
        "#2a1a18",
        "#2b2925",
        "#3B3B3B",
        "#3d393a",
        "#424637",
        "#4b5f8e",
        "#514d55",
        "#532311",
        "#540000",
        "#583b87",
        "#68540e",
        "#6c6f46",
        "#6e5217",
        "#6f5a43",
        "#71538b",
        "#736862",
        "#77568e",
        "#791618",
        "#808096",
        "#82737b",
        "#860000",
        "#878787",
        "#8b7a6a",
        "#916e91",
        "#996c29",
        "#998d48",
        "#9b7d72",
    ],
    "ArmorAppearanceDefinitionName": [
        "",
        "@HistoricMedDarkHorns_chest_TransmogName",
        "@HistoricMedDarkHorns_feet_TransmogName",
        "@HistoricMedDarkHorns_gloves_TransmogName",
        "@HistoricMedDarkHorns_head_TransmogName",
        "@HistoricMedDarkHorns_legs_TransmogName",
        "@HistoricMedDragonWings_chest_TransmogName",
        "@HistoricMedDragonWingsDirty_chest_TransmogName",
        "@HistoricMedDragonWingsDirty_feet_TransmogName",
        "@HistoricMedDragonWingsDirty_gloves_TransmogName",
        "@HistoricMedDragonWingsDirty_head_TransmogName",
        "@HistoricMedDragonWingsDirty_legs_TransmogName",
        "@HistoricMedDragonWings_feet_TransmogName",
        "@HistoricMedDragonWings_gloves_TransmogName",
        "@HistoricMedDragonWings_head_TransmogName",
        "@HistoricMedDragonWings_legs_TransmogName",
        "@HistoricMedHounskull_chest_TransmogName",
        "@HistoricMedHounskull_feet_TransmogName",
        "@HistoricMedHounskull_gloves_TransmogName",
        "@HistoricMedHounskull_head_TransmogName",
        "@HistoricMedHounskull_legs_TransmogName",
    ],
    "RightOff": [
        "Disable_MetalLight_VoiceFX",
        "",
        "FLY_ClothLight_Arm_R",
        "FLY_ClothLight_Leg_R",
        "FLY_LeatherLight_Arm_R",
        "FLY_LeatherLight_Leg_R",
        "FLY_MetalLight_Arm_R",
        "FLY_MetalLight_Leg_R",
        "FLY_MetalMed_Arm_R",
        "FLY_MetalMed_Leg_R",
        "FLY_MetalMedt_Arm_R",
    ],
    "EquipAbilities": [
        "Con_Bonus_100_1,Con_Bonus_100_2",
        "Con_Bonus_150_1,Con_Bonus_150_2",
        "Con_Bonus_200_1,Con_Bonus_200_2",
        "Con_Bonus_250_1,Con_Bonus_250_2",
        "Con_Bonus_300_1,Con_Bonus_300_2",
        "Con_Bonus_50_1,Con_Bonus_50_2",
        "Dex_Bonus_100_1,Dex_Bonus_100_2",
        "Dex_Bonus_150_1,Dex_Bonus_150_2",
        "Dex_Bonus_200_1,Dex_Bonus_200_2",
        "Dex_Bonus_250_1,Dex_Bonus_250_2",
        "Dex_Bonus_300_1,Dex_Bonus_300_2",
        "Dex_Bonus_50_1,Dex_Bonus_50_2",
        "",
        "Foc_Bonus_100_1,Foc_Bonus_100_2",
        "Foc_Bonus_150_1,Foc_Bonus_150_2",
        "Foc_Bonus_200_1,Foc_Bonus_200_2",
        "Foc_Bonus_250_1,Foc_Bonus_250_2",
        "Foc_Bonus_300_1,Foc_Bonus_300_2",
        "Foc_Bonus_50_1,Foc_Bonus_50_2",
        "Int_Bonus_100_1,Int_Bonus_100_2",
        "Int_Bonus_150_1,Int_Bonus_150_2",
        "Int_Bonus_200_1,Int_Bonus_200_2",
        "Int_Bonus_250_1,Int_Bonus_250_2",
        "Int_Bonus_300_1,Int_Bonus_300_2",
        "Int_Bonus_50_1,Int_Bonus_50_2",
        "Str_Bonus_100_1,Str_Bonus_100_2",
        "Str_Bonus_150_1,Str_Bonus_150_2",
        "Str_Bonus_200_1,Str_Bonus_200_2",
        "Str_Bonus_250_1,Str_Bonus_250_2",
        "Str_Bonus_300_1,Str_Bonus_300_2",
        "Str_Bonus_50_1,Str_Bonus_50_2",
    ],
    "BackstoryText": [
        "",
        "Lorem Ipsum",
    ],
    "ConversationUnlockOverride": [
        "",
        "0511_03_Stranger",
        "0602_05_magistrate",
        "0907_08_Commander",
        "0908_08_Alchemist",
        "0909_08_Adjudicator",
        "9901_01_MSQ_Yonas",
    ],
    "Faction": [
        "Any",
        "",
        "Faction1",
        "Faction2",
        "Faction3",
    ],
    "ReleaseVersion": [
        "",
        "Event_SpringtideBloom_Perm",
        "Feature_Heartgems",
        "Feature_Heartgems_BileBomb",
        "Feature_Heartgems_FireStorm",
        "Feature_MusicalPerformances",
        "Feature_Runeglass",
        "Quest_MSQ2_Brightwood",
        "Quest_MSQ2_WeaversFen",
        "Season_1_Perm",
        "Weapon_GreatSword",
    ],
    "RespawnPointTerritories": [
        "",
        "2,3,4,5,6,7,8,9,10,11,12,13,14,15.16",
        "2,3,4,5,6,7,8,9,10,11,12,13,14,15",
        "2,3,4,5,6,7,8,9,10,11,12,13,14,15,16",
        "2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17",
    ],
    "AttachmentCategories": [
        "AbandonedMine",
        "ancient_lighthouse",
        "farm",
        "shipwreck",
        "Brightwoods",
        "Campground",
        "Damned",
        "",
        "Farm",
        "GlowingSwamp",
        "haunted_village",
        "lookout",
        "Lumbermill",
        "Mosquitoes",
        "Shipwreck",
        "TropicalCave",
        "wolf_den",
    ],
    "CompletionNotificationID": [
        "Complete_Territory_Marker",
        "",
        "Place_Camp",
    ],
    "ContributionGameEventID": [
        "BuidingContribute1",
        "BuidingContribute2",
        "BuidingContribute3",
        "BuidingContribute4",
        "BuidingContribute5",
        "",
    ],
    "CreationGameEventID": [
        "BuildingFinish1",
        "BuildingFinish2",
        "BuildingFinish3",
        "BuildingFinish4",
        "BuildingFinish5",
        "",
        "MakeCamp",
    ],
    "FuelResource": [
        "AzureT1",
        "",
    ],
    "PlacementGroundCastFilter": [
        "",
        "PlayerGroundCheck",
    ],
    "PrivilegeID": [
        "",
        "Farm_PlantSeed",
    ],
    "StructureCostIngredient3": [
        "AnimusT3",
        "CompostT2",
        "",
    ],
    "StructureHeightTag": [
        "",
        "High",
        "Low",
        "Mid",
    ],
    "StructureSize": [
        "",
        "Invalid",
        "Large",
        "Large_long",
        "Large_short",
        "Medium",
        "None",
        "Small",
        "Small ",
        "WH_Hit_L1",
        "WH_Hit_L2",
        "WH_Hit_L3",
        "WH_Hit_L4",
    ],
    "BuffType": [
        "Ability",
        "BuffBucket",
        "",
        "Promotion",
        "StatusEffect",
    ],
    "TableType": [
        "AND",
        "",
        "OR",
    ],
    "EdAchievementID": [
        "CampSkin_Unlock_CampSkin_Winter01_A",
        "",
    ],
    "AchievementIDOnMaxRank": [
        "",
        "fish_hotspot_40030_charted",
    ],
    "DisplayDescription": [
        "",
        "@owg_faction_unlock_tooltip",
        "Season 1",
        "@ui_event_reputation_description",
        "@ui_unlock_camping_tooltip",
    ],
    "EconomyTrackerType": [
        "AzothGenerated",
        "",
    ],
    "EventID": [
        "Ammo",
        "ArcanaRefining",
        "Armor",
        "Bags",
        "BasicCooking",
        "Components",
        "Concoctions",
        "Consumables",
        "CorruptedRefining",
        "CraftingQuestRecipe",
        "CutGems",
        "CutStone",
        "DungeonNamedReplicas",
        "DungeonReplicas",
        "Dyes",
        "",
        "Faction",
        "FlameCoreCasting",
        "Foods",
        "Furniture",
        "FuseGems",
        "Glasswares",
        "GypsumCasting",
        "GypsumRefining",
        "Instruments",
        "Keys",
        "MagicStaves",
        "MaterialConversion",
        "NightveilHallow",
        "Pattern",
        "RefinedResources",
        "ResourceDowngrade",
        "RuneglassFamily",
        "Salvage",
        "SalvageCreate",
        "Scarab",
        "SpringtideBloom",
        "SummerMedleyfaire",
        "TerritoryContribution",
        "TimelessShardsCon",
        "TimelessShardsDex",
        "TimelessShardsFoc",
        "TimelessShardsInt",
        "TimelessShardsStr",
        "Tools",
        "Trinkets",
        "Weapons",
        "WinterConvergence",
    ],
    "AvailableProgressionPoint": [
        "",
        "TB_GainGatherRate",
        "TB_GainStanding",
        "TB_GainStorage",
        "TB_GainXP",
        "TB_TaxProperty",
        "TB_TaxStations",
        "TB_TaxTradingPost",
    ],
    "AvailableProgressionPoint2": [
        "",
        "TB_GainFactionRep",
        "TB_GainHousePoints",
        "TB_GainStorage",
        "TB_GainXP",
        "TB_TaxStations",
        "TB_TaxTradingPost",
    ],
    "AvailableProgressionPoint4": [
        "",
        "TB_PurchaseHouse",
    ],
    "CooldownID": [
        "AbsorbBoost",
        "AcidCurse",
        "",
        "Gypsum",
        "HuntersVision",
        "PotionCleanse",
        "PotionEndurance",
        "PotionHaste",
        "PotionHealth",
        "PotionMana",
        "PotionRegen",
    ],
    "ConsumableItemDefinitionMannequinTag": [
        "Bandage",
        "Boost",
        "Call",
        "Drink",
        "Eat",
        "",
        "Potion",
        "WeaponOil",
    ],
    "CardIDEnum": [
        "Default",
        "default",
        "interaction",
    ],
    "ConversationService1": [
        "",
        "Faction_Board",
        "Faction_Selection",
        "Inn",
        "Join_3v3_Arena",
        "Join_Outpost_Rush",
    ],
    "ConversationService2": [
        "",
        "Join_Outpost_Rush",
        "PvP_Guide",
    ],
    "ConversationType": [
        "Conversation",
        "Linear_Objective",
    ],
    "LinearObjectiveId2": [
        "",
        "0699_0101_Barkimedes",
        "0713_0101_explorerift",
        "0718_0102_humble",
        "0719_0101_reflectionsmountainheart",
        "1005_0102_lightning_test",
        "1010_0102_eternal_mixes",
    ],
    "LinearObjectiveId3": [
        "",
        "0699_0102_Barkimedes2",
        "0718_0101_guardian",
        "0719_0201_madakisstratagem",
    ],
    "LinearObjectiveId4": [
        "",
        "0718_0103_ultimatedefense",
    ],
    "RequiredCompletedObjective": [
        "",
        "7404_0101_devworldredkillwitheredquest",
        "7504_0101_devworldbluekillwolfquest",
    ],
    "RequiredFaction": [
        "Any",
        "Battle_Token",
        "Covenant",
        "",
        "EventProgress",
        "HalloweenEventProgress",
        "Marauder",
        "SpringEventProgress",
        "SummerEventProgress",
        "Syndicate",
    ],
    "RequiredFactionCooldown": [
        "",
        "InCooldownMultipleDays",
        "InCooldownSingleDay",
    ],
    "RequiredProgression": [
        "BlunderbussAbilityTable 19 0",
        "BowAbilityTable 19 0",
        "BowAbilityTable 9 0",
        "Covenant 0 3000",
        "Covenant 1 11000",
        "Covenant 2 26000",
        "Covenant 3 49000",
        "",
        "FireMagicAbilityTable 19 0",
        "FireMagicAbilityTable 9 0",
        "GreatAxeAbilityTable 9 0",
        "HatchetAbilityTable 19 0",
        "IceMagicAbilityTable 19 0",
        "LifeMagicAbilityTable 19 0",
        "LifeMagicAbilityTable 9 0",
        "Marauder 0 3000",
        "Marauder 1 11000",
        "Marauder 2 26000",
        "Marauder 3 49000",
        "MusketAbilityTable 19 0",
        "RapierAbilityTable 19 0",
        "SpearAbilityTable 19 0",
        "SwordAbilityTable 19 0",
        "SwordAbilityTable 9 0",
        "Syndicate 0 3000",
        "Syndicate 1 11000",
        "Syndicate 2 26000",
        "Syndicate 3 49000",
        "VoidGauntletAbilityTable 19 0",
        "WarHammerAbilityTable 19 0",
    ],
    "TopicId2": [
        "Dungeon_CutlassKeys00_Scalleywag_02",
        "",
        "0428_Jones_Tips",
        "Topic_95_s01_10_TalkTo_Skye_WrapJoke",
        "Topic_99B_MorgenGrave_beauty_correct",
        "Topic_99B_MorgenGrave_beauty_incorrect",
    ],
    "TopicId3": [
        "Dungeon_CutlassKeys00_Scalleywag_03",
        "",
        "0428_Jones_House",
        "Topic_95_s01_10_TalkTo_Skye_WrapFlirt",
        "Topic_99B_MorgenGrave_hunter_correct",
        "Topic_99B_MorgenGrave_hunter_incorrect",
    ],
    "GearScoreBonus": [
        "",
        "5,10,15,20,25",
    ],
    "GearScoreReduction": [
        "",
        "-5,-10,-15,-20,-25",
    ],
    "Ingredient7": [
        "AmberCutT4",
        "AmethystCutT2",
        "AmethystCutT4",
        "AquamarineCutT4",
        "BarbvineT1",
        "BarleyT1",
        "BlisterweaveT1",
        "Blisterweavet1",
        "BlueberryT1",
        "BrokenBladeT5",
        "ButterT1",
        "CarnelianCutT3",
        "CauliflowerT1",
        "CinnabarT1",
        "CookingOilT1",
        "CornT1",
        "DiamondCutT4",
        "EggT1",
        "EmeraldCutT3",
        "",
        "FlameCore",
        "GarlicT1",
        "GingerT1",
        "GoldenScarab",
        "Instrument_EbonyFingerboardT3",
        "Instrument_HarmoniusReedT3",
        "Instrument_IridescentInlayT3",
        "Instrument_PearlPlectrumT3",
        "Instrument_ResonantHideT3",
        "JadeTalismanT1",
        "JasperCutT4",
        "MalachiteCutT4",
        "MoonstoneCutT4",
        "NutmegT1",
        "OnionT1",
        "OnyxCutT4",
        "OpalCutT4",
        "OrangeT1",
        "OreganoT1",
        "ParsleyT1",
        "PastryCrustT1",
        "PeppercornT1",
        "PotatoT1",
        "RosemaryT1",
        "SageT1",
        "SaltT1",
        "SapphireCutT3",
        "SapphireCutT4",
        "ScaleclothT1",
        "ScarhideT1",
        "SeasoningBlendT1",
        "SmolderhideT1",
        "StringBeanT1",
        "TarragonT1",
        "ThymeT1",
        "TomatoT1",
        "TopazCutT4",
    ],
    "ProceduralTierId1": [
        "BandageT2",
        "CoatingAeternianT2",
        "CoatingAeternianT3",
        "CoatingAeternianT4",
        "CoatingAeternianT5",
        "CoatingAncientT2",
        "CoatingAncientT3",
        "CoatingAncientT4",
        "CoatingAncientT5",
        "CoatingAngryEarthT2",
        "CoatingAngryEarthT3",
        "CoatingAngryEarthT4",
        "CoatingAngryEarthT5",
        "CoatingBeastT2",
        "CoatingBeastT3",
        "CoatingBeastT4",
        "CoatingBeastT5",
        "CoatingCorruptedT2",
        "CoatingCorruptedT3",
        "CoatingCorruptedT4",
        "CoatingCorruptedT5",
        "CoatingLostT2",
        "CoatingLostT3",
        "CoatingLostT4",
        "CoatingLostT5",
        "",
        "FoodHealthRecoveryT1",
        "FoodManaT1",
        "[LTID]BlockT2",
        "[LTID]BlockT3",
        "[LTID]BlockT4",
        "[LTID]ClothT2",
        "[LTID]ClothT3",
        "[LTID]ClothT4",
        "[LTID]DEV_Furniture",
        "[LTID]IngotT2",
        "[LTID]IngotT3",
        "[LTID]IngotT4",
        "[LTID]LeatherT2",
        "[LTID]LeatherT3",
        "[LTID]LeatherT4",
        "[LTID]TimberT2",
        "[LTID]TimberT3",
        "[LTID]TimberT4",
        "PotionBoostArcaneAbsT3",
        "PotionBoostArcaneAbsT4",
        "PotionBoostArcaneAbsT5",
        "PotionBoostFireAbsT3",
        "PotionBoostFireAbsT4",
        "PotionBoostFireAbsT5",
        "PotionBoostLightningAbsT3",
        "PotionBoostLightningAbsT4",
        "PotionBoostLightningAbsT5",
        "PotionBoostVoidAbsT3",
        "PotionBoostVoidAbsT4",
        "PotionBoostVoidAbsT5",
        "PotionCureBurningT1",
        "PotionCureDiseaseT1",
        "PotionCurePoisonT1",
        "PotionCureRendT1",
        "PotionCureShockT1",
        "PotionCureSilenceT1",
        "PotionCureSlowT1",
        "PotionCureWeakenT1",
        "PotionEncumbranceT1",
        "PotionEncumbranceT2",
        "PotionEncumbranceT3",
        "PotionEnduranceT1",
        "PotionEnduranceT2",
        "PotionEnduranceT3",
        "PotionFocusT1",
        "PotionFocusT2",
        "PotionFocusT3",
        "PotionFocusT4",
        "PotionHealthT1",
        "PotionHealthT2",
        "PotionHealthT3",
        "PotionHealthT4",
        "PotionHealthT5",
        "PotionManaT1",
        "PotionManaT2",
        "PotionManaT3",
        "PotionManaT4",
        "PotionManaT5",
        "PotionRegenT1",
        "PotionRegenT2",
        "PotionRegenT3",
        "PotionRegenT4",
        "SalvageLarge_ClothT2",
        "SalvageLarge_ClothT3",
        "SalvageLarge_ClothT4",
        "SalvageLarge_ClothT5",
        "SalvageLarge_LeatherT2",
        "SalvageLarge_LeatherT3",
        "SalvageLarge_LeatherT4",
        "SalvageLarge_LeatherT5",
        "SalvageLarge_MetalPreciousT2",
        "SalvageLarge_MetalPreciousT3",
        "SalvageLarge_MetalPreciousT4",
        "SalvageLarge_MetalT2",
        "SalvageLarge_MetalT3",
        "SalvageLarge_MetalT4",
        "SalvageLarge_MetalT5",
        "SalvageLarge_TimberT1",
        "SalvageLarge_TimberT2",
        "SalvageLarge_TimberT3",
        "SalvageLarge_TimberT4",
        "SalvageLarge_TimberT5",
        "SalvageSmall_ClothT1",
        "SalvageSmall_ClothT2",
        "SalvageSmall_ClothT3",
        "SalvageSmall_ClothT4",
        "SalvageSmall_ClothT5",
        "SalvageSmall_FlintT1",
        "SalvageSmall_LeatherT2",
        "SalvageSmall_LeatherT3",
        "SalvageSmall_LeatherT4",
        "SalvageSmall_LeatherT5",
        "SalvageSmall_MetalPreciousT2",
        "SalvageSmall_MetalPreciousT3",
        "SalvageSmall_MetalPreciousT4",
        "SalvageSmall_MetalT2",
        "SalvageSmall_MetalT3",
        "SalvageSmall_MetalT4",
        "SalvageSmall_MetalT5",
        "SalvageSmall_TimberT1",
        "SalvageSmall_TimberT2",
        "SalvageSmall_TimberT3",
        "SalvageSmall_TimberT4",
        "SalvageSmall_TimberT5",
        "1hClubT2",
        "TinctureBlightT2",
        "TinctureBlightT3",
        "TinctureBlightT4",
        "TinctureBlightT5",
        "TinctureCorruptionT2",
        "TinctureCorruptionT3",
        "TinctureCorruptionT4",
        "TinctureCorruptionT5",
        "TinctureFreezingT2",
        "TinctureFreezingT3",
        "TinctureFreezingT4",
        "TinctureFreezingT5",
    ],
    "RecipeTags": [
        "Amulet",
        "Blunderbuss",
        "Bow",
        "ClothChest",
        "ClothFeet",
        "ClothHands",
        "ClothHead",
        "ClothLegs",
        "DroppedBags",
        "Earring",
        "",
        "FishingPole",
        "GauntletIce",
        "GauntletVoid",
        "GreatSword",
        "Greataxe",
        "Greatsword",
        "Hatchet",
        "Kshield",
        "LeatherChest",
        "LeatherFeet",
        "LeatherHands",
        "LeatherHead",
        "LeatherLegs",
        "LoggingAxe",
        "Longsword",
        "MiningPick",
        "Musket",
        "PlateChest",
        "PlateFeet",
        "PlateHands",
        "PlateHead",
        "PlateLegs",
        "Rapier",
        "Ring",
        "Rshield",
        "Sickle",
        "SkinningKnife",
        "Spear",
        "StaffFire",
        "StaffLife",
        "Warhammer",
    ],
    "SkipGrantItemsBody": [
        "@cr_campskin_desc",
        "",
        "@TerritoryStandingSuppliesT1_SGIBody",
        "@TerritoryStandingSuppliesT2_SGIBody",
        "@TerritoryStandingSuppliesT3_SGIBody",
        "@TerritoryStandingSuppliesT4_SGIBody",
    ],
    "SkipGrantItemsDesc": [
        "@cr_unlockrecipe_info",
        "",
        "@TerritoryStandingSuppliesT1_SGIDesc",
        "@TerritoryStandingSuppliesT2_SGIDesc",
        "@TerritoryStandingSuppliesT3_SGIDesc",
        "@TerritoryStandingSuppliesT4_SGIDesc",
    ],
    "SkipGrantItemsTitle": [
        "@cr_campskin_title",
        "",
        "@TerritoryStandingSuppliesT1_SGITitle",
        "@TerritoryStandingSuppliesT2_SGITitle",
        "@TerritoryStandingSuppliesT3_SGITitle",
        "@TerritoryStandingSuppliesT4_SGITitle",
    ],
    "StationType1": [
        "alchemy1",
        "alchemy2",
        "alchemy3",
        "alchemy4",
        "alchemy5",
        "blacksmith2",
        "blacksmith3",
        "blacksmith4",
        "blacksmith5",
        "camp1",
        "camp5",
        "carpentry1",
        "carpentry3",
        "carpentry4",
        "carpentry5",
        "cooking1",
        "cooking2",
        "cooking3",
        "cooking4",
        "cooking5",
        "",
        "engineering1",
        "engineering2",
        "engineering3",
        "engineering4",
        "engineering5",
        "FlameCore_Forge",
        "gypsumstation1",
        "masonry3",
        "masonry4",
        "masonry5",
        "outfitting2",
        "outfitting3",
        "outfitting4",
        "outfitting5",
        "smelting3",
        "smelting4",
        "smelting5",
        "tanning3",
        "tanning4",
        "tanning5",
        "weaving3",
        "weaving4",
        "weaving5",
    ],
    "StationType2": [
        "alchemy2",
        "camp1",
        "camp2",
        "camp3",
        "camp4",
        "camp5",
        "",
    ],
    "Type1Enum": [
        "Category_Only",
        "Currency",
        "",
        "Item",
    ],
    "Intent": [
        "Animal Head",
        "Card Suite",
        "",
        "Gesture",
        "Animal head",
        "Lunar New Year",
        "Merriment",
        "Pre-Order",
        "Prime Gaming",
        "Smugglers",
        "Twitch",
        "Weapons",
    ],
    "Affixes": [
        "AI_ArcaneDMG_10",
        "AI_ArcaneDMG_25",
        "AI_CorruptionDMG_25",
        "AI_CorruptionDMG_50",
        "AI_CorruptionDMG_75",
        "AI_FireDMG_100",
        "AI_FireDMG_25",
        "AI_FireDMG_50",
        "AI_FireDMG_75",
        "AI_LIghtningDMG_75",
        "",
    ],
    "Affliction": [
        "AfflictionBleed",
        "AfflictionDisease",
        "AfflictionFrostbite",
        "",
    ],
    "DeflectDamageIDEnum": [
        "Default",
        "Deflect_Default",
        "",
        "Unarmed",
    ],
    "DamageTypeDatumCategory": [
        "Elemental",
        "Physical",
        "True",
    ],
    "UseAllDamageModifiers": [
        "",
        "TRUE",
        "`",
    ],
    "Cycle": [
        "Monthly",
        "Weekly",
        "Yearly",
    ],
    "DungeonID": [
        "BrimstoneSands",
        "",
    ],
    "IsMajor": [
        "ANY",
        "",
        "NO",
        "YES",
    ],
    "AlarmType": [
        "OneTime",
        "PerHour",
    ],
    "AttributionID": [
        "",
        "Housing_DynastySet_2021",
        "Housing_LegionSet_2022",
        "Housing_PirateSet_2021",
        "Housing_SettlerSet_2021",
        "NightveilHallow_2022",
        "RabbitSeason_2023",
        "Season_1",
        "SpringtideBloom_2023",
        "SummerMedleyfaire_2022",
        "TurkeyTerror_2022",
        "WinterConvergence_2021",
        "WinterConvergence_2022",
    ],
    "DisplayGroup": [
        "Answer",
        "Decisions",
        "Default",
        "Direction",
        "Emotion",
        "Friendly",
        "Other",
        "Taunt",
    ],
    "GatherableTags": [
        "dance",
        "",
    ],
    "AchievementID": [
        "",
        "RewardClaim_BFNW2_Twitch",
        "RewardClaim_Bfriday_Prime",
        "RewardClaim_CS_MGContainer",
        "RewardClaim_Dec2022_Prime",
        "RewardClaim_DevStreamers_Event",
        "RewardClaim_DevStreamers_Event_2",
        "RewardClaim_DevStreamers_Event_3",
        "RewardClaim_Firelight_Prime",
        "RewardClaim_Highwayman_Prime",
        "RewardClaim_MakeGood_WinterDragon_Cache",
        "RewardClaim_May2023_Prime",
        "RewardClaim_Oct2022Prime_Container_2",
        "RewardClaim_OmensOfWinter_Prime",
        "RewardClaim_TwitchConEU_Cache",
        "RewardClaim_WinterDragon_Prime",
    ],
    "EntitlementDatumNotes": [
        "Bug Bounty Retail usage",
        "",
        "QA4",
        "Retail FRA",
        "Retail GRU",
        "Retail IAD",
        "Retail PDX",
        "Server-1",
        "UX1",
        "UX2",
    ],
    "ItemTypeEnum": [
        "CampSkin",
        "Emote",
        "Entitlement",
        "FictionalCurrency",
        "GuildCrest",
        "HousingItem",
        "InventoryItem",
        "ItemDye",
        "ItemSkin",
        "Loadout",
        "Misc",
        "PlayerTitle",
        "SeasonsRewards",
        "Service",
        "StatusEffect",
        "WorldId",
    ],
    "SourceType": [
        "",
        "Leaderboard",
        "Leaderboards",
        "Preorder",
        "Prime",
        "SaltTrack",
        "SeasonJourney",
        "SeasonRewardTrack",
        "Store",
        "Twitch",
    ],
    "BlueprintID": [
        "CampT1",
        "CampT2",
        "CampT3",
        "CampT4",
        "CampT5",
    ],
    "EffectID": [
        "CampRegenL0",
    ],
    "GSLimitT1": [
        "100-100",
        "100-125",
        "125-150",
        "150-175",
        "175-190",
        "180-190",
        "185-190",
    ],
    "FishingBaitDatumLootTableID": [
        "",
        "FishingSalmonSpecial",
    ],
    "RequiredWaterTags": [
        "Fresh",
        "Fresh,Salt",
        "Salt",
    ],
    "FishingHotspotsDatumLootTableID": [
        "FishingHotspotLoot",
    ],
    "LootTag": [
        "Broad",
        "Rare",
        "Secret",
    ],
    "TimeToBiteSecondsRange": [
        "1-1.5",
    ],
    "TimeToNibbleSecondsRange": [
        "3-6",
    ],
    "CreatureTypeEnum": [
        "Arena3v3_Win_3_Round",
        "ArenaMyrkgard",
        "ArenaSpriggan",
        "AwardDryadEvent",
        "AwardLostEvent",
        "CMission_Kill-",
        "CMission_raw-",
        "CMission_refined-",
        "Cmission_CraftingGear-",
        "Cmission_CraftingProvision-",
        "Cmission_CraftingProvision&#45;-",
        "Cmission_Quest",
        "DarknessMajor",
        "DarknessMinor",
        "DungeonBoss",
        "DungeonMiniBoss",
        "",
        "Mission++",
        "Mission+",
        "MissionPvP",
        "MSQ-",
        "Myrkgard",
        "OutpostRush",
        "PvPArenas",
        "Project-",
        "CMission_Kill+",
        "CMission_raw+",
        "CMission_refined+",
        "Cmission_CraftingGear+",
        "Cmission_CraftingProvision+",
        "MSQ+",
        "Mission",
        "MissionPvP+",
        "Project+",
        "Quest-",
        "Quest",
        "Solo",
        "CMission_Kill",
        "CMission_raw",
        "CMission_refined",
        "Cmission_CraftingGear",
        "Cmission_CraftingProvision",
        "DarknessMajor+",
        "DarknessMinor+",
        "MSQ",
        "Mission-",
        "MissionPvP-",
        "Project",
        "Quest+",
        "War",
    ],
    "EntitlementID": [
        "",
        "EntitlementSkin_Feet_TurkeyTerror",
        "EntitlementSkin_Mask_RabbitSeason",
        "EntitlementTitle_TurkeyTerror",
    ],
    "FactionInfluenceSrc": [
        "Destinations",
        "",
        "General",
        "Leaderboard",
        "Missions",
        "PvE",
        "PvP",
        "Progression",
        "Quests",
    ],
    "GameEventType": [
        "Arena",
        "Crafting",
        "Darkness",
        "",
        "EventEncounter",
        "Gathering",
        "Invasion",
        "OutpostRush",
        "PvPArenas",
        "PvPKill",
        "War",
    ],
    "LootLimitID": [
        "Arena3v3_Limit",
        "",
        "PvP_FortTakeover_Limit",
        "Tag_LegacyofCrassus_Ticker",
    ],
    "LootLimitReachedGameEventID": [
        "Arena3v3_Loss_DailyLimitReached",
        "Arena3v3_Win_1_Round_DailyLimitReached",
        "Arena3v3_Win_2_Round_DailyLimitReached",
        "Arena3v3_Win_3_Round_DailyLimitReached",
        "",
        "PvP_FortTakeover_LimitReached",
        "WorldEvent_Crassus_BonusBox_Override",
    ],
    "LootTags": [
        "",
        "EnemyLevel:60",
    ],
    "GameEventDatumRemoveStatusEffectCategories": [
        "",
        "MusicBuff",
    ],
    "RewardType": [
        "Armor",
        "Azoth",
        "Coins",
        "",
        "Exp",
        "Mats",
        "Named",
        "Standing",
        "Weapons",
    ],
    "RewardNote": [
        "Dungeon",
        "",
        "Tokens",
    ],
    "RewardNotes": [
        "Boots of the Stallion",
        "Contains materials for trophy",
        "Contains Settler Table & Lighting",
        "Dark Pheonix",
        "Death Rattle",
        "Edge of Rebellion ",
        "",
        "Fortuna Chestplate",
        "Infinity Crystal",
        "Jewel of Vengence",
        "Lavaforged Legguards",
        "Molten's Core",
        "Spirit of Oblivion ",
        "Vengeance Blast",
        "Victor's Helm",
    ],
    "RewardsNotes": [
        "Custom",
        "",
        "L65 Dungeon",
        "Legendary Weapon",
        "Repeatable - no item",
    ],
    "StatusEffectID": [
        "",
        "MusicBuff_GatheringLuck_T1_Bad",
        "MusicBuff_GatheringLuck_T2_Okay",
        "MusicBuff_GatheringLuck_T3_Great",
        "MusicBuff_GatheringLuck_T4_Amazing",
        "MusicBuff_GatheringSpeed_T1_Bad",
        "MusicBuff_GatheringSpeed_T2_Okay",
        "MusicBuff_GatheringSpeed_T3_Great",
        "MusicBuff_GatheringSpeed_T4_Amazing",
        "MusicBuff_GatheringYield_T1_Bad",
        "MusicBuff_GatheringYield_T2_Okay",
        "MusicBuff_GatheringYield_T3_Great",
        "MusicBuff_GatheringYield_T4_Amazing",
        "MusicBuff_GroupXPSharing_T1_Bad",
        "MusicBuff_GroupXPSharing_T2_Okay",
        "MusicBuff_GroupXPSharing_T3_Great",
        "MusicBuff_GroupXPSharing_T4_Amazing",
        "MusicBuff_PlayerEncumbrance_T1_Bad",
        "MusicBuff_PlayerEncumbrance_T2_Okay",
        "MusicBuff_PlayerEncumbrance_T3_Great",
        "MusicBuff_PlayerEncumbrance_T4_Amazing",
        "MusicBuff_TerritoryStanding_T1_Bad",
        "MusicBuff_TerritoryStanding_T2_Okay",
        "MusicBuff_TerritoryStanding_T3_Great",
        "MusicBuff_TerritoryStanding_T4_Amazing",
        "MusicPerformance_Amazing_Celebration",
    ],
    "AIDespawnRadius": [
        "",
        "OpenWorld",
    ],
    "CannotFastTravelTextID": [
        "",
        "\"@ui_cannot_travel_outpost_rush\"",
        "\"@ui_cannot_travel_pvp_arena\"",
        "\"@ui_cannot_travel_solo_arena\"",
    ],
    "DisabledItemClasses": [
        "",
        "NoPvPArenas",
    ],
    "FailGroupPenaltyTextID": [
        "",
        "@ui_outpost_rush_signup_failgrouppenalty",
        "@ui_pvparenas_failgrouppenalty",
    ],
    "GameModeID": [
        "Arena3v3",
        "Duel",
        "DungeonAmrine",
        "DungeonBrimstoneSands00",
        "DungeonCutlassKeys00",
        "DungeonEbonscale00",
        "DungeonEdengrove00",
        "DungeonGreatCleave01",
        "DungeonReekwater00",
        "DungeonRestlessShores01",
        "DungeonShatterMtn00",
        "DungeonShatteredObelisk",
        "",
        "GameModeTest",
        "OutpostRush",
        "QuestApophis",
        "QuestCaerDun",
        "TestMode1",
        "TestMode2",
    ],
    "ItemClassesToRemoveOnExit": [
        "ArenaConsumable",
        "DungeonItem",
        "",
        "OutpostRushOnly",
    ],
    "JoinButtonTextID": [
        "",
        "@ui_outpost_rush_signup_joinsolo",
    ],
    "LeaveDescTextID": [
        "",
        "\"@ui_outpost_rush_leave_desc\"",
        "\"@ui_pvp_arena_leave_desc\"",
        "\"@ui_solo_arena_leave_desc\"",
    ],
    "LeaveQueueDescriptionTextID": [
        "",
        "@ui_outpost_rush_leave_queue_desc",
        "@ui_pvparenas_leave_queue_desc",
    ],
    "LeaveQueueTitleTextID": [
        "",
        "@ui_outpost_rush_leave_queue_title",
        "@ui_pvparenas_leave_queue_title",
    ],
    "LeaveTimeDescTextID": [
        "",
        "\"@ui_outpost_rush_leave_desc_time\"",
        "\"@ui_pvp_arena_leave_desc_time\"",
        "\"@ui_solo_arena_leave_desc_time\"",
    ],
    "LeaveTitleTextID": [
        "",
        "\"@ui_outpost_rush_leave_title\"",
        "\"@ui_pvp_arena_leave_title\"",
        "\"@ui_solo_arena_leave_title\"",
    ],
    "ModeNameLOCStringIDEnum": [
        "",
        "@ui_outpost_rush_title",
        "@ui_pvp_3v3_arena_signup_title",
    ],
    "MutLootTagsOverride": [
        "Ebonscale00_Mut,Corrupted,GypsumBlue",
        "",
        "Restless01_Mut,Corrupted,GypsumBlue",
        "ShatteredObelisk_Mut,Ancient,GypsumBlue",
    ],
    "QueueLevelBuckets": [
        "",
        "20,30,40,50,60",
    ],
    "QuitButtonTextID": [
        "",
        "\"@ui_outpost_rush_leave\"",
        "\"@ui_pvp_arena_leave\"",
        "\"@ui_solo_arena_leave\"",
    ],
    "RespawnTypeToUseForUnstuck": [
        "Control",
        "Courier",
        "Craft",
        "",
        "Espionage",
        "Explore",
        "Gather",
        "Harvest",
        "Hunt",
        "Intercept",
        "Kill",
        "Log",
        "Loot",
        "Mine",
        "Poach",
        "Raid",
    ],
    "ScreenHeaderTextID": [
        "",
        "@Topic_Prompt_Join_Outpost_Rush",
        "@ui_pvparenas_title_join",
    ],
    "WarBoardStatDefinitions": [
        "",
        "ORWarboardStatDefinitions",
        "PvPArenaWarboardStatDefinitions",
    ],
    "EdStatusEffect": [
        "AI_Torso_Boss_ArcaneOrb",
        "Dungeon_AdmiralCannonBall",
        "Dungeon_ArcaneBarrierProtection",
        "Dungeon_PurifyingFlame",
        "Dungeon_RelicBubble",
        "Dungeon_SirenOffering",
        "",
        "Season_01_Event_DamageBoostEffect",
        "Shrine_MothersLove",
    ],
    "Gathering": [
        "AzothStaff",
        "AzothStaffCreate",
        "AzothStaffHigh",
        "AzothStaffLow",
        "Chopping",
        "ChoppingVertical",
        "Crafting",
        "Cutting",
        "Dressing",
        "Etching",
        "Fishing",
        "Handcrafting",
        "Kicking",
        "LootContainer",
        "MSQTheRitual",
        "Mining",
        "None",
        "Welling",
    ],
    "GatheringFragment": [
        "Crafting_Interaction",
        "Emote_Beckon",
        "Emote_Bow",
        "Emote_Hi",
        "Emote_Pondering",
        "Emote_Wave",
        "",
        "Interact_BlacksmithLoop",
        "Interact_Box_FTUE",
        "Interact_Carpentry",
        "Interact_Play_Flute",
        "Interact_PlayFlute_WindsofAutumn",
        "Interact_Play_Guitar",
        "Interact_Play_Mandolin",
        "Interact_Play_URBass",
    ],
    "RequiredWhisperID": [
        "",
        "01_Watcher_FTUE_01",
        "01_Whisper_Beach_01",
        "01_Whisper_Beach_02",
        "01_Whisper_Beach_03",
        "01_Whisper_Beach_04",
        "01_Whisper_Beach_05",
        "01_Whisper_Beach_06",
        "01_Whisper_Beach_07",
        "01_Whisper_FTUE_01",
        "01_Whisper_FTUE_02",
        "01_Whisper_FTUE_03",
        "01_Whisper_FTUE_04",
        "01_Whisper_FTUE_05",
        "12A_MB_Whisper_01",
        "12A_MB_Whisper_02",
        "12A_MB_Whisper_03",
        "12A_MB_Whisper_04",
        "98_Covenant_Whisper_01",
        "98_Marauders_Whisper_01",
        "98_Syndicate_Whisper_01",
        "whisper_test_01",
        "whisper_test_02",
        "whisper_test_03",
    ],
    "Restriction": [
        "ItemRequired",
        "NoToolNecessary",
        "ToolOptional",
        "ToolRequired",
        "WhisperRequired",
    ],
    "GearScoreUpgradeDefinitionRequiredItemID": [
        "UmbralShardT1",
    ],
    "InteractableTimelineEndInteraction": [
        "Interact_End",
    ],
    "InteractableTimelineStartInteraction": [
        "Interact_Start",
    ],
    "InteractionAnimationID": [
        "",
        "HousingItemCheerYeti",
        "HousingItemFeedBird",
        "HousingItemLieOnBed",
        "HousingItemLieOnBedMirror",
        "HousingItemLieOnRug",
        "HousingItemPetBird",
        "HousingItemPetBobcat",
        "HousingItemPetCat",
        "HousingItemPetDeer",
        "HousingItemPetDog",
        "HousingItemPetHare",
        "HousingItemPetPig",
        "HousingItemPetRabbit",
        "HousingItemPetTiger",
        "HousingItemPetWolf",
        "HousingItemSitOnChair",
        "HousingItemSitOnChair_Snapped",
        "HousingItemSpiderTricks",
        "HousingItemSpookyBook",
        "HousingItemStandingInteract",
        "HousingItemStirPot",
        "HousingItemTouchMimic",
        "HousingItemWatering",
        "QuestAnim_AzothStaff_Create",
        "QuestAnim_MSQ_TheRitual",
    ],
    "BuyCurrencyItemName": [
        "",
        "NightveilHallow_Token",
        "OutpostRushAzothEssence",
        "Springtide_PremiumToken",
        "Springtide_Token",
        "SummerMedley_PremiumToken",
        "SummerMedley_Token",
        "WCPToken",
        "WCToken",
    ],
    "ItemCurrencyConversionDatumCategoricalProgressionID": [
        "Battle_Token",
        "CovenantTokens",
        "",
        "EventProgress",
        "HalloweenEventProgress",
        "MarauderTokens",
        "SpringEventProgress",
        "SummerEventProgress",
        "SyndicateTokens",
    ],
    "NeedsOneClasses": [
        "EquippableChest",
        "EquippableFeet",
        "EquippableHands",
        "EquippableHead",
        "EquippableLegs",
        "EquippableMainHand",
        "EquippableOffHand",
        "EquippableTool",
        "EquippableTwoHand",
    ],
    "RequiredClasses": [
        "AzothStaff",
        "Blunderbuss",
        "Bow",
        "",
        "FireStaff",
        "FishingPole",
        "GreatSword",
        "Hatchet",
        "IceMagic",
        "InstrumentDrums",
        "InstrumentFlute",
        "InstrumentGuitar",
        "InstrumentMandolin",
        "InstrumentUprightBass",
        "LifeStaff",
        "LoggingAxe",
        "Musket",
        "Pickaxe",
        "Rapier",
        "Shield",
        "ShieldK",
        "ShieldR",
        "ShieldT",
        "Sickle",
        "SkinningKnife",
        "Spear",
        "Sword",
        "2HAxe",
        "2HHammer",
        "VoidGauntlet",
    ],
    "Defense": [
        "",
        "Play_1H_Melee_Block",
        "Play_1H_ShieldA_Metal_Defense",
        "Play_1H_ShieldA_Wood_Defense",
    ],
    "ItemSoundIDEnum": [
        "default",
        "",
        "Gauntlet_Ice",
        "Gauntlet_Void",
        "1h_axe",
        "Staff_fire",
        "MXMI_Drums",
        "MXMI_Flute",
        "MXMI_Guitar",
        "MXMI_Mandolin",
        "MXMI_UprightBass",
        "MagicStaff",
        "Staff_Fire",
        "Staff_Life",
        "1H_Axe",
        "1H_Club",
        "1H_Knife",
        "1H_Melee_Default",
        "1H_Pick",
        "1H_Pistol",
        "1H_Rapier",
        "1H_ShieldA_metal",
        "1H_ShieldA_wood",
        "1H_Sickle",
        "1H_Sword",
        "1H_Torch",
        "2H_Axe",
        "2H_Blunderbuss",
        "2H_Bow",
        "2H_Club",
        "2H_GreatAxe",
        "2H_GreatSword",
        "2H_Greatsword",
        "2H_Melee_Default",
        "2H_Pick",
        "2H_Rifle",
        "2H_Spear",
        "2H_WarHammer",
    ],
    "UnsheatheFLY": [
        "",
        "Play_1H_ShieldA_Metal_FLY_Unsheathed",
        "Play_1H_ShieldA_Wood_FLY_Unsheathed",
        "Play_2HRifle_FLY_Unsheathed",
        "Play_Blunderbuss_FLY_Unsheathed",
    ],
    "Xform": [
        "bind_xform",
        "Xform",
        "xform_C0_0_jnt",
        "xform",
    ],
    "KitType": [
        "Crafting",
        "Repair",
    ],
    "CategoryAdditionalHeader": [
        "",
        "@ui_leaderboard_with_gold",
    ],
    "CategoryDescription": [
        "",
        "@ui_leaderboard_tip_darkness_score",
        "@ui_leaderboard_tip_inv_war_wins",
        "@ui_leaderboard_tip_invasion_score",
        "@ui_leaderboard_tip_outpostrush_score",
        "@ui_leaderboard_tip_war_score",
    ],
    "DataSheetCategory": [
        "Darkness Breaches",
        "Expeditions",
        "Invasion",
        "Open World PVP",
        "Outpost Rush",
        "PVP Arenas",
        "Territory Control",
        "Tradeskills",
        "Trials",
        "War",
    ],
    "FirstLevelCategory": [
        "Faction War",
        "Mutated Expeditions",
        "Trade Skills",
        "Vs. Environment",
        "Vs. Players",
    ],
    "Namespace": [
        "pc",
    ],
    "Rotation": [
        "Month",
        "Season",
        "Week",
    ],
    "ValueString": [
        "@ui_leaderboard_column_captured",
        "@ui_leaderboard_column_caught",
        "@ui_leaderboard_column_completed",
        "@ui_leaderboard_column_contributed",
        "@ui_leaderboard_column_crafted",
        "@ui_leaderboard_column_damage",
        "@ui_leaderboard_column_days",
        "@ui_leaderboard_column_heals",
        "@ui_leaderboard_column_influence",
        "@ui_leaderboard_column_kills",
        "@ui_leaderboard_column_ratio",
        "@ui_leaderboard_column_score",
        "@ui_leaderboard_column_time",
        "@ui_leaderboard_column_wins",
    ],
    "Aggregation": [
        "Max",
        "Min",
        "Sum",
    ],
    "GameMode": [
        "Arena3v3",
        "Arena_LostSiren_Reekwater",
        "Arena_Spriggan_AngryEarth_T1",
        "Arena_SwampBeast_Reekwater",
        "Darkness",
        "DungeonGreatCleave01",
        "",
        "Expedition",
        "Invasion",
        "OpenWorldPvp",
        "OutpostRush",
        "War",
    ],
    "LeaderboardStatDatumNotes": [
        "Brightwood",
        "Brimstone Sands",
        "CutlassKeys",
        "Ebonscale",
        "",
        "Everfall",
        "First Light",
        "Monarchs Bluffs",
        "Mourningdale",
        "Reekwater",
        "Restless Shore",
        "WeaversFen",
        "Windsward",
    ],
    "Scope": [
        "Character",
        "Company",
        "Global",
        "Group",
    ],
    "AdjustPowerLevel": [
        "FALSE",
        "TRUE",
    ],
    "LimitNotificationLOCTag": [
        "",
        "@ui_reached_max_daily_pvp_arena_reward",
        "@ui_reached_max_fort_takeover_rewards",
    ],
    "Conditions": [
        "Amrine",
        "BossTrophyArtifact",
        "BrimstoneSands00",
        "Common",
        "CutlassKeys00",
        "Diospolis",
        "Ebonscale00",
        "Ebonscale00_Mut",
        "Edengrove00",
        "Elite",
        "",
        "EnemyLevel",
        "EnemyLevel,Elite",
        "Fire",
        "FishSize",
        "Fresh,FishRarity",
        "GlobalMod",
        "Goblin",
        "GreatCleave01",
        "GypsumBlack",
        "GypsumBlue",
        "GypsumYellow",
        "Hermopolis",
        "Ice",
        "[LIM]Tag_S1Event_PityTicker",
        "LegionHQ",
        "Level",
        "LootTableDiverted",
        "MinContLevel",
        "MinContLevel,GreatCleave01",
        "MinContLevel,Varangian",
        "MinContLevel,VarangianPOI",
        "MinPOIContLevel",
        "MutDiff",
        "Named",
        "Nature",
        "PyramidObservatory",
        "PyramidTemple",
        "Reekwater00",
        "Restless01_Mut",
        "RestlessShores01",
        "Salt,FishRarity",
        "SalvageItemGearScore",
        "SalvageItemRarity",
        "SalvageItemTier",
        "ScorpionLair",
        "ScorpionNest",
        "SerpentsPass",
        "ShatterMtn00",
        "ShatteredObelisk",
        "ShatteredObelisk_Mut",
        "Sutekh",
        "ToolMoteAir",
        "ToolMoteDeath",
        "ToolMoteEarth",
        "ToolMoteFire",
        "ToolMoteLife",
        "ToolMoteSpirit",
        "ToolMoteWater",
        "TurkeyKnife",
        "Varangian,Named",
        "VarangianPOI",
        "Victualis",
        "Void",
        "Wadi",
        "Westwall",
    ],
    "GearScoreRange10": [
        "",
        "300-335",
    ],
    "GearScoreRange11": [
        "",
        "300-345",
    ],
    "GearScoreRange12": [
        "",
        "300-355",
    ],
    "GearScoreRange13": [
        "",
        "300-365",
    ],
    "GearScoreRange14": [
        "",
        "300-375",
    ],
    "GearScoreRange15": [
        "",
        "300-385",
    ],
    "GearScoreRange1": [
        "",
        "300-395",
    ],
    "GearScoreRange18": [
        "",
        "400-415",
    ],
    "GearScoreRange19": [
        "",
        "400-425",
    ],
    "GearScoreRange20": [
        "",
        "400-435",
    ],
    "GearScoreRange21": [
        "",
        "400-445",
    ],
    "GearScoreRange22": [
        "",
        "400-455",
    ],
    "GearScoreRange23": [
        "",
        "400-465",
    ],
    "GearScoreRange24": [
        "",
        "400-475",
    ],
    "GearScoreRange25": [
        "",
        "400-485",
    ],
    "GearScoreRange2": [
        "",
        "400-495",
    ],
    "GearScoreRange28": [
        "",
        "500-515",
    ],
    "PerkBucketOverrides2": [
        "",
        "GlobalAttributeBucketT5,GlobalBucket,GlobalGemSlotChanceT5",
    ],
    "RollBonusSetting": [
        "AddToRoll",
        "ClampMax",
        "",
        "IgnoreBonus",
    ],
    "AssociatedQuest": [
        "Amateur Adventurer",
        "An Antiquarian's Dream",
        "",
        "End of MSQ",
        "FactionIntro_Covenant_02",
        "06A_IR_01_FindCreed",
        "06A_MSQ_08_DefeatCommander",
        "06A_MSQ_10_LootPirateCrates",
        "06A_Z_01_GetBisonNotes",
        "99A_MSQ_01B_LearnSoulwardens",
        "99A_MSQ_01_LearnSoulwardens",
        "99B_MSQ_01_searchwalsham",
        "99B_MSQ_02_meetgalahad",
        "99B_MSQ_03_lostvillages",
        "99B_MSQ_06_lostcathedral",
        "99B_MSQ_07_cursedcemetery",
        "99C_MSQ_01_Periville",
        "99C_MSQ_03_AncientBridge",
        "The Charmed Child",
    ],
    "LocationName": [
        "",
        "@FTUE_Location_lore1a",
        "@Lore_Title_Outpost_AuroraAeternae",
        "@Lore_Title_Outpost_FirstLight",
        "@Lore_Title_Outpost_LordEveretts",
        "@Lore_Title_Outpost_MonarchStation",
        "@Lore_Title_Outpost_TrueDuncansWatch",
        "@Lore_Title_Outpost_WeaversPeak",
        "@Lore_Title_Outpost_WeaversPost",
        "@Lore_Title_Outpost_WeaversStation",
    ],
    "LocationXY": [
        "",
        "10900.025,4266.920",
        "11183.032,5123.895",
        "12363.708,5760.285",
        "7756.703,2911.032",
        "7837.036,5530.253",
        "8039.102,2196.508",
        "9124.650,3782.668",
        "9192.671,2803.025",
    ],
    "RecordingStatus": [
        "",
        "Not Recorded",
    ],
    "LoreDatumType": [
        "Chapter",
        "Default",
        "Topic",
    ],
    "Writer": [
        "Benjamin Barker",
        "Carrie Berg",
        "Daniel Jacobs",
        "David Dunne",
        "David McKenzie",
        "Divya",
        "",
        "Grace Li",
        "Hirai Harunobu",
        "James Huang",
        "Jan Jaansen",
        "Jennifer Klasing",
        "Lerato Molefe",
        "Pierre Auguste",
        "Rob Chestney",
        "Pierre-Auguste",
    ],
    "AudioPickup": [
        "",
        "Play_UI_Drop_Blueprint",
        "Play_UI_Pickup_Armour",
        "Play_UI_Pickup_Arrow",
        "Play_UI_Pickup_Axe",
        "Play_UI_Pickup_Blueprint",
        "Play_UI_Pickup_Bow",
        "Play_UI_Pickup_Bullet",
        "Play_UI_Pickup_Cloth",
        "Play_UI_Pickup_Coin",
        "Play_UI_Pickup_Firearm",
        "Play_UI_Pickup_Foliage",
        "Play_UI_Pickup_Generic",
        "Play_UI_Pickup_Grass",
        "Play_UI_Pickup_Knife",
        "Play_UI_Pickup_Leather",
        "Play_UI_Pickup_Liquid",
        "Play_UI_Pickup_Meat",
        "Play_UI_Pickup_Metal",
        "Play_UI_Pickup_Metal_Weapon",
        "Play_UI_Pickup_Paper",
        "Play_UI_Pickup_Slimy",
        "Play_UI_Pickup_Stone",
        "Play_UI_Pickup_Stone_Tool",
        "Play_UI_Pickup_Sword",
        "Play_UI_Pickup_Wood",
    ],
    "AudioCreated": [
        "",
        "Play_UI_Created_Armour",
        "Play_UI_Created_Arrow",
        "Play_UI_Created_Axe",
        "Play_UI_Created_Blueprint",
        "Play_UI_Created_Bow",
        "Play_UI_Created_Bullet",
        "Play_UI_Created_Cloth",
        "Play_UI_Created_Coin",
        "Play_UI_Created_Firearm",
        "Play_UI_Created_Foliage",
        "Play_UI_Created_Generic",
        "Play_UI_Created_Grass",
        "Play_UI_Created_Knife",
        "Play_UI_Created_Leather",
        "Play_UI_Created_Liquid",
        "Play_UI_Created_Meat",
        "Play_UI_Created_Metal",
        "Play_UI_Created_Metal_Weapon",
        "Play_UI_Created_Paper",
        "Play_UI_Created_Slimy",
        "Play_UI_Created_Stone",
        "Play_UI_Created_Stone_Tool",
        "Play_UI_Created_Sword",
        "Play_UI_Created_Wood",
    ],
    "AudioDestroyed": [
        "",
        "Play_UI_item_broken",
    ],
    "MasterItemDefinitionAudioPlace": [
        "",
        "Play_UI_Ancient_Axe",
        "Play_UI_AngryEarth_Axe",
        "Play_UI_Corrupted_Axe",
        "Play_UI_Drop_Armour",
        "Play_UI_Drop_Arrow",
        "Play_UI_Drop_Axe",
        "Play_UI_Drop_Blueprint",
        "Play_UI_Drop_Bow",
        "Play_UI_Drop_Bullet",
        "Play_UI_Drop_Cloth",
        "Play_UI_Drop_Coin",
        "Play_UI_Drop_Firearm",
        "Play_UI_Drop_Foliage",
        "Play_UI_Drop_Generic",
        "Play_UI_Drop_Grass",
        "Play_UI_Drop_Knife",
        "Play_UI_Drop_Leather",
        "Play_UI_Drop_Liquid",
        "Play_UI_Drop_Meat",
        "Play_UI_Drop_Metal",
        "Play_UI_Drop_Metal_Weapon",
        "Play_UI_Drop_Paper",
        "Play_UI_Drop_Slimy",
        "Play_UI_Drop_Stone",
        "Play_UI_Drop_Stone_Tool",
        "Play_UI_Drop_Sword",
        "Play_UI_Drop_Wood",
        "Play_UI_Drowned_Axe",
        "Play_UI_Dynasty_Axe",
        "Play_UI_Graverobber_Axe",
        "Play_UI_Legion_Axe",
        "Play_UI_Lost_Axe",
        "Play_UI_MXMI_AG_Equip_Inventory",
        "Play_UI_MXMI_AZF_Equip_Inventory",
        "Play_UI_MXMI_DRM_Equip_Inventory",
        "Play_UI_MXMI_MAN_Equip_Inventory",
        "Play_UI_MXMI_URB_Equip_Inventory",
        "Play_UI_Use_Blueprint",
    ],
    "AudioUse": [
        "",
        "play_turkey_vox_alertcall",
        "Play_UI_Created_Blueprint",
        "Play_UI_Use_Armour",
        "Play_UI_Use_Arrow",
        "Play_UI_Use_Axe",
        "Play_UI_Use_Blueprint",
        "Play_UI_Use_Bow",
        "Play_UI_Use_Bullet",
        "Play_UI_Use_Cloth",
        "Play_UI_Use_Coin",
        "Play_UI_Use_Firearm",
        "Play_UI_Use_Foliage",
        "Play_UI_Use_Generic",
        "Play_UI_Use_Grass",
        "Play_UI_Use_Knife",
        "Play_UI_Use_Leather",
        "Play_UI_Use_Liquid",
        "Play_UI_Use_Meat",
        "Play_UI_Use_Metal",
        "Play_UI_Use_Metal_Weapon",
        "Play_UI_Use_Paper",
        "Play_UI_Use_Slimy",
        "Play_UI_Use_Stone",
        "Play_UI_Use_Stone_Tool",
        "Play_UI_Use_Sword",
        "Play_UI_Use_Wood",
    ],
    "HeartgemRuneTooltipTitle": [
        "",
        "@ui_itemtooltiptitle_heartgem_rune_bile_bomb",
        "@ui_itemtooltiptitle_heartgem_rune_cannon_blast",
        "@ui_itemtooltiptitle_heartgem_rune_detonate",
        "@ui_itemtooltiptitle_heartgem_rune_fire_storm",
        "@ui_itemtooltiptitle_heartgem_rune_grasping_vines",
        "@ui_itemtooltiptitle_heartgem_rune_heretics_fall",
        "@ui_itemtooltiptitle_heartgem_rune_stone_form",
    ],
    "HeartgemTooltipBackgroundImage": [
        "",
        "lyshineui/images/tooltipimages/runeFireStormtooltip.dds",
        "lyshineui/images/tooltipimages/runebilebombtooltip.dds",
        "lyshineui/images/tooltipimages/runecannonblasttooltip.dds",
        "lyshineui/images/tooltipimages/runedetonatetooltip.dds",
        "lyshineui/images/tooltipimages/runegraspingvinestooltip.dds",
        "lyshineui/images/tooltipimages/runehereticsfalltooltip.dds",
        "lyshineui/images/tooltipimages/runestoneformtooltip.dds",
    ],
    "IgnoreParentColumnsDVT": [
        "",
        "ForceRarity,GearScoreOverride,CanRollPerkOnUpgrade",
        "GearScoreOverride,SalvageResources,GrantsHWMBump",
        "Perk5,ForceRarity,GearScoreOverride,CanRollPerkOnUpgrade",
    ],
    "ItemType": [
        "Ammo",
        "Armor",
        "Blueprint",
        "Consumable",
        "Currency",
        "Dye",
        "",
        "Lore",
        "Resource",
        "ThrowableItem",
        "Weapon",
    ],
    "ItemTypeDisplayName": [
        "@DungeonCutlassKeys00_CannonBall_MasterName",
        "",
        "@ui_itemtypedescription_Heavy_head_slot",
        "@ui_itemtypedescription_Normal_chest_slot",
        "@ui_itemtypedescription_Normal_feet_slot",
        "@ui_itemtypedescription_Normal_glove_slot",
        "@ui_itemtypedescription_Normal_head_slot",
        "@ui_itemtypedescription_Normal_legs_slot",
        "@reward_type_Apparelskin_chest_slot",
        "@reward_type_Apparelskin_feet_slot",
        "@reward_type_Apparelskin_hands_slot",
        "@reward_type_Apparelskin_head_slot",
        "@reward_type_Apparelskin_legs_slot",
        "@reward_type_Apparelskin_Set",
        "@reward_type_campskin",
        "@reward_type_emote",
        "@reward_type_guildcrest_pack",
        "@reward_type_house_pet",
        "@reward_type_housing_item",
        "@reward_type_loadout",
        "@reward_type_marks_of_fortune",
        "@reward_type_player_title",
        "@reward_type_statuseffect",
        "@reward_type_Toolskin_azothstaff",
        "@reward_type_Toolskin_fishingpole",
        "@reward_type_Toolskin_harvestingsickle",
        "@reward_type_Toolskin_loggingaxe",
        "@reward_type_Toolskin_miningpick",
        "@reward_type_Toolskin_skinningknife",
        "@reward_type_Weaponskin_Bow",
        "@reward_type_Weaponskin_FireStaff",
        "@reward_type_Weaponskin_GreatAxe",
        "@reward_type_Weaponskin_Hatchet",
        "@reward_type_Weaponskin_IceGauntlet",
        "@reward_type_Weaponskin_kiteshield",
        "@reward_type_Weaponskin_Musket",
        "@reward_type_Weaponskin_Spear",
        "@reward_type_Weaponskin_Sword",
        "@ui_itemtypedescription_ammo",
        "@ui_itemtypedescription_amuletjewelry",
        "@ui_itemtypedescription_axe",
        "@ui_itemtypedescription_bag",
        "@ui_itemtypedescription_bait",
        "@ui_itemtypedescription_blunderbuss",
        "@ui_itemtypedescription_bow",
        "@ui_itemtypedescription_consumable",
        "@ui_itemtypedescription_dye",
        "@ui_itemtypedescription_earringjewelry",
        "@ui_itemtypedescription_firestaff",
        "@ui_itemtypedescription_furniture",
        "@ui_itemtypedescription_greatsword",
        "@ui_itemtypedescription_hatchet",
        "@ui_itemtypedescription_heartgem_rune",
        "@ui_itemtypedescription_heavy_chest_slot",
        "@ui_itemtypedescription_heavy_feet_slot",
        "@ui_itemtypedescription_heavy_glove_slot",
        "@ui_itemtypedescription_heavy_head_slot",
        "@ui_itemtypedescription_heavy_legs_slot",
        "@ui_itemtypedescription_housingitem",
        "@ui_itemtypedescription_icegauntlet",
        "@ui_itemtypedescription_instrument",
        "@ui_itemtypedescription_Key_item",
        "@ui_itemtypedescription_kiteshield",
        "@ui_itemtypedescription_lifestaff",
        "@ui_itemtypedescription_light_chest_slot",
        "@ui_itemtypedescription_light_feet_slot",
        "@ui_itemtypedescription_light_glove_slot",
        "@ui_itemtypedescription_light_head_slot",
        "@ui_itemtypedescription_light_legs_slot",
        "@ui_itemtypedescription_medium_chest_slot",
        "@ui_itemtypedescription_medium_feet_slot",
        "@ui_itemtypedescription_musket",
        "@ui_itemtypedescription_normal_chest_slot",
        "@ui_itemtypedescription_normal_feet_slot",
        "@ui_itemtypedescription_normal_glove_slot",
        "@ui_itemtypedescription_normal_head_slot",
        "@ui_itemtypedescription_normal_legs_slot",
        "@ui_itemtypedescription_outpostrush",
        "@ui_itemtypedescription_quest_item",
        "@ui_itemtypedescription_rapier",
        "@ui_itemtypedescription_recipe",
        "@ui_itemtypedescription_resource",
        "@ui_itemtypedescription_ringjewelry",
        "@ui_itemtypedescription_roundshield",
        "@ui_itemtypedescription_spear",
        "@ui_itemtypedescription_sword",
        "@ui_itemtypedescription_tool",
        "@ui_itemtypedescription_towershield",
        "@ui_itemtypedescription_voidgauntlet",
        "@ui_itemtypedescription_warhammer",
        "@ui_itemtypedescription_weapon",
    ],
    "MasterItemDefinitionMannequinTag": [
        "DebugOil",
        "",
        "HolyOil",
        "2H_Rifle",
    ],
    "ObtainableReleaseVersion": [
        "",
        "Feature_RabbitSeason",
    ],
    "Perk1": [
        "",
        "FishDurability3",
        "FishLineStrengthFresh3",
        "FishLineStrengthSalt3",
        "FishLuckDay1",
        "FishLuckDay2",
        "FishLuckDay3",
        "FishLuckNight3",
        "PerkID_Armor_DefAeternian",
        "PerkID_Armor_HarvestingLuck",
        "PerkID_Armor_MiningLuck",
        "PerkID_Bags_WeightAdd",
        "PerkID_Earring_Weaponsmith",
        "PerkID_HeartgemRune_BileBomb_Major",
        "PerkID_HeartgemRune_CannonBlast_Major",
        "PerkID_HeartgemRune_Detonate_Major",
        "PerkID_HeartgemRune_FireStorm_Major",
        "PerkID_HeartgemRune_GraspingVines_Major",
        "PerkID_HeartgemRune_HereticsFall_Major",
        "PerkID_HeartgemRune_StoneForm_Major",
        "PerkID_Stat_ArmorArtificer",
        "PerkID_Stat_ArmorAssassin",
        "PerkID_Stat_ArmorBarbarian",
        "PerkID_Stat_ArmorBattlemage",
        "PerkID_Stat_ArmorBrigand",
        "PerkID_Stat_ArmorCavalier",
        "PerkID_Stat_ArmorCleric",
        "PerkID_Stat_ArmorDruid",
        "PerkID_Stat_ArmorDuelist",
        "PerkID_Stat_ArmorFighter",
        "PerkID_Stat_ArmorKnight",
        "PerkID_Stat_ArmorMage",
        "PerkID_Stat_ArmorMonk",
        "PerkID_Stat_ArmorNomad",
        "PerkID_Stat_ArmorOccultist",
        "PerkID_Stat_ArmorPriest",
        "PerkID_Stat_ArmorRanger",
        "PerkID_Stat_ArmorSage",
        "PerkID_Stat_ArmorScholar",
        "PerkID_Stat_ArmorSentry",
        "PerkID_Stat_ArmorSoldier",
        "PerkID_Stat_ArmorSpellsword",
        "PerkID_Stat_ArmorTrickster",
        "PerkID_Stat_ArmorWarden",
        "PerkID_Stat_ArmorZealot",
        "PerkID_Stat_OneHandAssassin",
        "PerkID_Stat_OneHandBarbarian",
        "PerkID_Stat_OneHandBattlemage",
        "PerkID_Stat_OneHandBrigand",
        "PerkID_Stat_OneHandCavalier",
        "PerkID_Stat_OneHandCleric",
        "PerkID_Stat_OneHandDruid",
        "PerkID_Stat_OneHandFighter",
        "PerkID_Stat_OneHandKnight",
        "PerkID_Stat_OneHandMonk",
        "PerkID_Stat_OneHandNomad",
        "PerkID_Stat_OneHandRanger",
        "PerkID_Stat_OneHandSage",
        "PerkID_Stat_OneHandScholar",
        "PerkID_Stat_OneHandSentry",
        "PerkID_Stat_OneHandSoldier",
        "PerkID_Stat_OneHandSpellsword",
        "PerkID_Stat_OneHandWarden",
        "PerkID_Stat_OneHandZealot",
        "PerkID_Stat_TwoHandArtificer",
        "PerkID_Stat_TwoHandAssassin",
        "PerkID_Stat_TwoHandBarbarian",
        "PerkID_Stat_TwoHandBattleMage",
        "PerkID_Stat_TwoHandBattlemage",
        "PerkID_Stat_TwoHandBrigand",
        "PerkID_Stat_TwoHandCavalier",
        "PerkID_Stat_TwoHandCleric",
        "PerkID_Stat_TwoHandDruid",
        "PerkID_Stat_TwoHandDuelist",
        "PerkID_Stat_TwoHandFighter",
        "PerkID_Stat_TwoHandKnight",
        "PerkID_Stat_TwoHandMage",
        "PerkID_Stat_TwoHandMonk",
        "PerkID_Stat_TwoHandNomad",
        "PerkID_Stat_TwoHandOccultist",
        "PerkID_Stat_TwoHandPriest",
        "PerkID_Stat_TwoHandRanger",
        "PerkID_Stat_TwoHandSage",
        "PerkID_Stat_TwoHandScholar",
        "PerkID_Stat_TwoHandSentry",
        "PerkID_Stat_TwoHandSoldier",
        "PerkID_Stat_TwoHandSpellsword",
        "PerkID_Stat_TwoHandTrickster",
        "PerkID_Stat_TwoHandWarden",
        "PerkID_Stat_TwoHandZealot",
        "PerkID_Tools_Durability",
        "PerkID_Weapon_DmgAeternian",
        "perkid_stat_armorassassin",
        "perkid_stat_armordruid",
        "perkid_stat_armoroccultist",
        "perkid_stat_armorpriest",
        "perkid_stat_armorsentry",
        "perkid_stat_armorsoldier",
        "perkid_stat_armorwarden",
        "perkid_stat_onehandbarbarian",
        "perkid_stat_onehandknight",
        "perkid_stat_twohandbarbarian",
        "perkid_stat_twohandfighter",
        "perkid_stat_twohandknight",
        "perkid_stat_twohandmage",
        "perkid_stat_twohandoccultist",
        "perkid_stat_twohandranger",
        "perkid_stat_twohandscholar",
        "perkid_stat_twohandsoldier",
    ],
    "PerkBucket1": [
        "AttributeBlunderbussT2",
        "AttributeBlunderbussT3",
        "AttributeBlunderbussT4",
        "AttributeBlunderbussT5",
        "AttributeBowT2",
        "AttributeBowT3",
        "AttributeBowT4",
        "AttributeBowT5",
        "AttributeFireStaffT2",
        "AttributeFireStaffT3",
        "AttributeFireStaffT4",
        "AttributeFireStaffT5",
        "AttributeGreatAxeT2",
        "AttributeGreatAxeT3",
        "AttributeGreatAxeT4",
        "AttributeGreatAxeT5",
        "AttributeGreatSwordT2",
        "AttributeGreatSwordT3",
        "AttributeGreatSwordT4",
        "AttributeGreatSwordT5",
        "AttributeGreatswordT4",
        "AttributeGreatswordT5",
        "AttributeHatchetT2",
        "AttributeHatchetT3",
        "AttributeHatchetT4",
        "AttributeHatchetT5",
        "AttributeLifeStaffT2",
        "AttributeLifeStaffT3",
        "AttributeLifeStaffT4",
        "AttributeLifeStaffT5",
        "AttributeMusketT2",
        "AttributeMusketT3",
        "AttributeMusketT4",
        "AttributeMusketT5",
        "AttributeRapierT2",
        "AttributeRapierT3",
        "AttributeRapierT4",
        "AttributeRapierT5",
        "AttributeShieldT2",
        "AttributeShieldT3",
        "AttributeShieldT4",
        "AttributeShieldT5",
        "AttributeSpearT2",
        "AttributeSpearT3",
        "AttributeSpearT4",
        "AttributeSpearT5",
        "AttributeSwordT2",
        "AttributeSwordT3",
        "AttributeSwordT4",
        "AttributeSwordT5",
        "AttributeVoidGauntletT2",
        "AttributeVoidGauntletT3",
        "AttributeVoidGauntletT4",
        "AttributeVoidGauntletT5",
        "AttributeWarhammerT2",
        "AttributeWarhammerT3",
        "AttributeWarhammerT4",
        "AttributeWarhammerT5",
        "CastAttributeBlunderbussT5",
        "CastAttributeBowT5",
        "CastAttributeBucketChanceT5",
        "CastAttributeBucketT5",
        "CastAttributeFireStaffT5",
        "CastAttributeGreatAxeT5",
        "CastAttributeGreatSwordT5",
        "CastAttributeHatchetT5",
        "CastAttributeLifeStaffT5",
        "CastAttributeMusketT5",
        "CastAttributeRapierT5",
        "CastAttributeShieldT5",
        "CastAttributeSpearT5",
        "CastAttributeSwordT5",
        "CastAttributeVoidGauntletT5",
        "CastAttributeWarhammerT5",
        "CraftingAttributeBucketT2",
        "CraftingAttributeBucketT3",
        "CraftingAttributeBucketT4",
        "CraftingAttributeBucketT5",
        "",
        "FishingArmorT2Bucket",
        "FishingArmorT3Bucket",
        "FishingArmorT4Bucket",
        "FishingArmorT5Bucket",
        "FishingItemT1BucketChance",
        "FishingItemT2BucketChance",
        "FishingItemT3BucketChance",
        "FlameCoreAttributeBlunderbussT5",
        "FlameCoreAttributeBowT5",
        "FlameCoreAttributeFireStaffT5",
        "FlameCoreAttributeGreatAxeT5",
        "FlameCoreAttributeGreatSwordT5",
        "FlameCoreAttributeHatchetT5",
        "FlameCoreAttributeLifeStaffT5",
        "FlameCoreAttributeMusketT5",
        "FlameCoreAttributeRapierT5",
        "FlameCoreAttributeShieldT5",
        "FlameCoreAttributeSpearT5",
        "FlameCoreAttributeSwordT5",
        "FlameCoreAttributeVoidGauntletT5",
        "FlameCoreAttributeWarhammerT5",
        "GlobalAttributeBucket",
        "GlobalAttributeBucketChanceT2",
        "GlobalAttributeBucketChanceT3",
        "GlobalAttributeBucketChanceT4",
        "GlobalAttributeBucketChanceT5",
        "GlobalAttributeBucketT2",
        "GlobalAttributeBucketT3",
        "GlobalAttributeBucketT4",
        "GlobalAttributeBucketT5",
        "PerkBucket_CraftedPerkBucketRollT2",
        "PerkBucket_CraftedPerkBucketRollT3",
        "PerkBucket_CraftedPerkBucketRollT4Bucket3",
        "PerkBucket_CraftedPerkBucketRollT5Bucket3",
        "PerkBucket_FlameCore_SingleStat_Armor",
        "PerkBucket_HarvestingItemT1BucketChance",
        "PerkBucket_HarvestingItemT2BucketChance",
        "PerkBucket_HarvestingItemT3BucketChance",
        "PerkBucket_InstrumentsT2Chance",
        "PerkBucket_InstrumentsT3Chance",
        "PerkBucket_InstrumentsT4Chance",
        "PerkBucket_InstrumentsT5Chance",
        "PerkBucket_LoggingItemT1BucketChance",
        "PerkBucket_LoggingItemT2BucketChance",
        "PerkBucket_LoggingItemT3BucketChance",
        "PerkBucket_MiningItemT1BucketChance",
        "PerkBucket_MiningItemT2BucketChance",
        "PerkBucket_MiningItemT3BucketChance",
        "PerkBucket_SkinningItemT1BucketChance",
        "PerkBucket_SkinningItemT2BucketChance",
        "PerkBucket_SkinningItemT3BucketChance",
        "SingleStat_AttributesT5",
        "SingleStat_AttributesT5_Heavy_Always",
        "SingleStat_AttributesT5_Light_Always",
        "SingleStat_AttributesT5_Medium_Always",
        "SingleStatPVPRT_Attributes_Acc",
        "SingleStatPVPRT_AttributesT2_Heavy",
        "SingleStatPVPRT_AttributesT2_Light",
        "SingleStatPVPRT_AttributesT2_Medium",
        "SingleStatPVPRT_AttributesT3_Heavy",
        "SingleStatPVPRT_AttributesT3_Light",
        "SingleStatPVPRT_AttributesT3_Medium",
        "SingleStatPVPRT_AttributesT4_Heavy",
        "SingleStatPVPRT_AttributesT4_Light",
        "SingleStatPVPRT_AttributesT4_Medium",
        "SingleStatPVPRT_AttributesT5_Heavy",
        "SingleStatPVPRT_AttributesT5_Light",
        "SingleStatPVPRT_AttributesT5_Medium",
    ],
    "PerkBucket2": [
        "CastGemSlotChanceT5Bucket2",
        "CastGemSlotChanceT5Bucket3",
        "CraftingGemSlotChanceT2",
        "CraftingGemSlotChanceT3",
        "CraftingGemSlotChanceT4",
        "CraftingGemSlotChanceT5",
        "",
        "FishingItemT1BucketChance",
        "FishingItemT2BucketChance",
        "FishingItemT3BucketChance",
        "GlobalAttributeBucketT2",
        "GlobalAttributeBucketT3",
        "GlobalAttributeBucketT4",
        "GlobalAttributeBucketT5",
        "GlobalGemSlotChanceT2",
        "GlobalGemSlotChanceT3",
        "GlobalGemSlotChanceT5",
        "GlobalGemSlotT5",
        "PerkBucket_AmrineBucket",
        "PerkBucket_AncientBucket",
        "PerkBucket_AncientBucketChanceT2",
        "PerkBucket_AncientBucketChanceT3",
        "PerkBucket_AncientBucketChanceT4Bucket3",
        "PerkBucket_AncientBucketChanceT5Bucket3",
        "PerkBucket_AngryEarthBucket",
        "PerkBucket_AngryEarthBucketChanceT2",
        "PerkBucket_AngryEarthBucketChanceT3",
        "PerkBucket_AngryEarthBucketChanceT4Bucket3",
        "PerkBucket_AngryEarthBucketChanceT5Bucket3",
        "PerkBucket_BarnaclesBucket",
        "PerkBucket_BreachBucket",
        "PerkBucket_BreachFamily_T3Chance",
        "PerkBucket_BreachFamily_T4Chance",
        "PerkBucket_BreachFamily_T5Chance",
        "PerkBucket_CastPerkBucketRollT5Bucket2",
        "PerkBucket_CastPerkBucketRollT5Bucket3",
        "PerkBucket_CorruptedBucket",
        "PerkBucket_CorruptedBucketChanceT2",
        "PerkBucket_CorruptedBucketChanceT3",
        "PerkBucket_CorruptedBucketChanceT4Bucket3",
        "PerkBucket_CorruptedBucketChanceT5Bucket3",
        "PerkBucket_CraftedPerkBucketRollT2",
        "PerkBucket_CraftedPerkBucketRollT3",
        "PerkBucket_CraftedPerkBucketRollT4Bucket3",
        "PerkBucket_CraftedPerkBucketRollT4Bucket4",
        "PerkBucket_CraftedPerkBucketRollT5Bucket3",
        "PerkBucket_CraftedPerkBucketRollT5Bucket4",
        "PerkBucket_CraftedPerkBucketRollT5Fixed",
        "PerkBucket_DynastyShipyardBucket",
        "PerkBucket_EliteAncientBucket",
        "PerkBucket_EliteAngryEarthBucket",
        "PerkBucket_EliteCorruptedBucket",
        "PerkBucket_EliteDrownedBucket",
        "PerkBucket_EliteLostBucket",
        "PerkBucket_GenesisBucket",
        "PerkBucket_GlobalBucket",
        "PerkBucket_GlobalBucketChanceT5",
        "PerkBucket_GlobalPerkBucketRollT2",
        "PerkBucket_GlobalPerkBucketRollT3",
        "PerkBucket_GlobalPerkBucketRollT4Bucket3",
        "PerkBucket_GlobalPerkBucketRollT5Bucket3",
        "PerkBucket_HarvestingItemT1BucketChance",
        "PerkBucket_HarvestingItemT2BucketChance",
        "PerkBucket_HarvestingItemT3BucketChance",
        "PerkBucket_InstrumentsT2Chance",
        "PerkBucket_InstrumentsT3Chance",
        "PerkBucket_InstrumentsT4Chance",
        "PerkBucket_InstrumentsT5Chance",
        "PerkBucket_InvasionGemsBucket",
        "PerkBucket_LazarusBucket",
        "PerkBucket_LoggingItemT1BucketChance",
        "PerkBucket_LoggingItemT2BucketChance",
        "PerkBucket_LoggingItemT3BucketChance",
        "PerkBucket_LostBucket",
        "PerkBucket_LostBucketChanceT2",
        "PerkBucket_LostBucketChanceT3",
        "PerkBucket_LostBucketChanceT4Bucket3",
        "PerkBucket_LostBucketChanceT5Bucket3",
        "PerkBucket_MasterGlobalPerkBucketRoll",
        "PerkBucket_MiningItemT1BucketChance",
        "PerkBucket_MiningItemT2BucketChance",
        "PerkBucket_MiningItemT3BucketChance",
        "PerkBucket_MyrkgardBucket",
        "PerkBucket_ObeliskBucket",
        "PerkBucket_PvPBucket1",
        "PerkBucket_PvPGemsBucket",
        "PerkBucket_PvPRT_GemsBucketPrestige_T5",
        "PerkBucket_PVPRTPerks_T2Bucket2Chance",
        "PerkBucket_PVPRTPerks_T3Bucket2Chance",
        "PerkBucket_PVPRTPerks_T4Bucket2Chance",
        "PerkBucket_PVPRTPerks_T4PrestigeBucket4Chance",
        "PerkBucket_PVPRTPerks_T5Bucket2Chance",
        "PerkBucket_PVPRTPerks_T5PrestigeBucket4Chance",
        "PerkBucket_SkinningItemT1BucketChance",
        "PerkBucket_SkinningItemT2BucketChance",
        "PerkBucket_SkinningItemT3BucketChance",
        "PerkBucket_SpringEvent",
        "PerkBucket_SummerEvent",
        "PerkBucket_TheDepthsBucket",
        "PerkBucket_TrackBucketGuaranteeDefense_Armor",
        "PerkBucket_TrackBucketGuarantee_Weapons",
        "PerkBucket_WarGemsBucket",
        "PerkBucket_WinterEvent",
    ],
    "PerkBucket3": [
        "BreachGemSlotChanceT3",
        "BreachGemSlotChanceT4",
        "BreachGemSlotChanceT5",
        "CastGemSlotChanceT5Bucket3",
        "CraftingGemSlotChanceT2",
        "CraftingGemSlotChanceT3",
        "CraftingGemSlotChanceT4",
        "CraftingGemSlotChanceT5",
        "EliteBreachGemSlotChanceT3",
        "EliteBreachGemSlotChanceT4",
        "EliteBreachGemSlotChanceT5",
        "",
        "FishingItemT1BucketChance",
        "FishingItemT2BucketChance",
        "FishingItemT3BucketChance",
        "GlobalGemSlotChanceT2",
        "GlobalGemSlotChanceT3",
        "GlobalGemSlotChanceT4",
        "GlobalGemSlotChanceT5",
        "GlobalGemSlotT5",
        "PerkBucket_AncientBucketChanceT2",
        "PerkBucket_AncientBucketChanceT3",
        "PerkBucket_AncientBucketChanceT4Bucket3",
        "PerkBucket_AncientBucketChanceT5Bucket3",
        "PerkBucket_AngryEarthBucket",
        "PerkBucket_AngryEarthBucketChanceT2",
        "PerkBucket_AngryEarthBucketChanceT3",
        "PerkBucket_AngryEarthBucketChanceT4Bucket3",
        "PerkBucket_AngryEarthBucketChanceT5Bucket3",
        "PerkBucket_BarnaclesBucketChanceT5Bucket4",
        "PerkBucket_BreachBucket",
        "PerkBucket_BreachPerksBucket4_T4Chance",
        "PerkBucket_BreachPerksBucket4_T5Chance",
        "PerkBucket_CastPerkBucketRollT5Bucket3",
        "PerkBucket_CorruptedBucketChanceT2",
        "PerkBucket_CorruptedBucketChanceT3",
        "PerkBucket_CorruptedBucketChanceT4Bucket3",
        "PerkBucket_CorruptedBucketChanceT5Bucket3",
        "PerkBucket_CraftedPerkBucketRollT3",
        "PerkBucket_CraftedPerkBucketRollT4Bucket3",
        "PerkBucket_CraftedPerkBucketRollT4Bucket4",
        "PerkBucket_CraftedPerkBucketRollT5Bucket3",
        "PerkBucket_CraftedPerkBucketRollT5Bucket4",
        "PerkBucket_CraftedPerkBucketRollT5Bucket5",
        "PerkBucket_CraftedPerkBucketRollT5Fixed",
        "PerkBucket_CraftingCarnelian",
        "PerkBucket_CraftingDiamond",
        "PerkBucket_CraftingMalachite",
        "PerkBucket_CraftingOpal",
        "PerkBucket_CraftingPerkBucketChanceT2",
        "PerkBucket_CraftingPerkBucketChanceT3",
        "PerkBucket_CraftingPerkBucketChanceT4",
        "PerkBucket_CraftingPerkBucketChanceT5",
        "PerkBucket_CraftingSapphire",
        "PerkBucket_DynastyShipyardBucketChanceT4Bucket4",
        "PerkBucket_EliteAngryEarthBucket",
        "PerkBucket_EliteBreachPerksBucket4_T4Chance",
        "PerkBucket_EliteBreachPerksBucket4_T5Chance",
        "PerkBucket_EliteLostBucket",
        "PerkBucket_FlameCore_Armor",
        "PerkBucket_FlameCore_Weapon",
        "PerkBucket_GenesisBucketChanceT5Bucket4",
        "PerkBucket_GlobalBucket",
        "PerkBucket_GlobalBucketChanceT5",
        "PerkBucket_GlobalPerkBucketRollT3",
        "PerkBucket_HarvestingItemT2BucketChance",
        "PerkBucket_HarvestingItemT3BucketChance",
        "PerkBucket_InstrumentsT3Chance2",
        "PerkBucket_InstrumentsT4Chance2",
        "PerkBucket_InstrumentsT5Chance2",
        "PerkBucket_InvasionBucket",
        "PerkBucket_InvasionGemsBucket",
        "PerkBucket_LazarusBucketChanceT5Bucket4",
        "PerkBucket_LoggingItemT2BucketChance",
        "PerkBucket_LoggingItemT3BucketChance",
        "PerkBucket_LostBucketChanceT2",
        "PerkBucket_LostBucketChanceT3",
        "PerkBucket_LostBucketChanceT4Bucket3",
        "PerkBucket_LostBucketChanceT5Bucket3",
        "PerkBucket_MiningItemT2BucketChance",
        "PerkBucket_MiningItemT3BucketChance",
        "PerkBucket_MyrkgardBucketChanceT5Bucket4",
        "PerkBucket_OpPlaytest_ArmorBucket",
        "PerkBucket_OpPlaytest_WeaponBucket",
        "PerkBucket_OutpostRushBucket",
        "PerkBucket_PvPBucket1",
        "PerkBucket_PvPGemsBucket",
        "PerkBucket_PvPRT_GemsBucketPrestige_T5",
        "PerkBucket_PvPRT_GemsBucket_T2",
        "PerkBucket_PvPRT_GemsBucket_T3",
        "PerkBucket_PvPRT_GemsBucket_T4",
        "PerkBucket_PvPRT_GemsBucket_T5",
        "PerkBucket_PVPRTPerks_T4Bucket4Chance",
        "PerkBucket_PVPRTPerks_T4PrestigeBucket4Chance",
        "PerkBucket_PVPRTPerks_T5Bucket4Chance",
        "PerkBucket_PVPRTPerks_T5Bucket5Chance",
        "PerkBucket_PVPRTPerks_T5PrestigeBucket4Chance",
        "PerkBucket_SkinningItemT2BucketChance",
        "PerkBucket_SkinningItemT3BucketChance",
        "PerkBucket_TheDepthsBucketChanceT4Bucket4",
        "PerkBucket_WarBucket",
        "PerkBucket_WinterEvent",
        "SummerGemSlot",
    ],
    "PerkBucket4": [
        "",
        "FishingArmorT3BucketChance",
        "FishingArmorT4BucketChance",
        "FishingArmorT5BucketChance",
        "FishingItemT2BucketChance",
        "FishingItemT3BucketChance",
        "PerkBucket_AncientBucketChanceT4Bucket4",
        "PerkBucket_AncientBucketChanceT5Bucket4",
        "PerkBucket_AngryEarthBucketChanceT4Bucket4",
        "PerkBucket_AngryEarthBucketChanceT5Bucket4",
        "PerkBucket_BarnaclesBucketChanceT5Bucket4",
        "PerkBucket_BarnaclesBucketChanceT5Bucket5",
        "PerkBucket_BreachBucketChanceT4Bucket4",
        "PerkBucket_BreachBucketChanceT5Bucket4",
        "PerkBucket_BreachPerksBucket4_T4Chance",
        "PerkBucket_BreachPerksBucket4_T5Chance",
        "PerkBucket_BreachPerksBucket5_T5Chance",
        "PerkBucket_CastPerkBucketRollT5Bucket4",
        "PerkBucket_CorruptedBucketChanceT4Bucket4",
        "PerkBucket_CorruptedBucketChanceT5Bucket4",
        "PerkBucket_CraftedPerkBucketRollT4Bucket4",
        "PerkBucket_CraftedPerkBucketRollT5Bucket4",
        "PerkBucket_CraftedPerkBucketRollT5Bucket5",
        "PerkBucket_CraftedPerkBucketRollT5Fixed",
        "PerkBucket_CraftingPerkBucketChanceT3",
        "PerkBucket_CraftingPerkBucketChanceT4",
        "PerkBucket_CraftingPerkBucketChanceT5",
        "PerkBucket_DynastyShipyardBucketChance",
        "PerkBucket_DynastyShipyardBucketChanceT4Bucket4",
        "PerkBucket_EliteAncientBucketChanceT5Bucket4",
        "PerkBucket_EliteAngryEarthBucketChanceT5Bucket4",
        "PerkBucket_EliteBreachPerksBucket4_T4Chance",
        "PerkBucket_EliteBreachPerksBucket4_T5Chance",
        "PerkBucket_EliteBreachPerksBucket5_T5Chance",
        "PerkBucket_EliteCorruptedBucketChanceT5Bucket4",
        "PerkBucket_EliteDrownedBucketChanceT5Bucket4",
        "PerkBucket_EliteLostBucketChanceT4Bucket4",
        "PerkBucket_EliteLostBucketChanceT5Bucket4",
        "PerkBucket_FlameCore_Armor",
        "PerkBucket_FlameCore_Weapon",
        "PerkBucket_GenesisBucketChanceT5",
        "PerkBucket_GenesisBucketChanceT5Bucket4",
        "PerkBucket_GenesisBucketChanceT5Bucket5",
        "PerkBucket_GlobalBucket",
        "PerkBucket_GlobalBucketChanceT5",
        "PerkBucket_GlobalPerkBucketRollT4Bucket4",
        "PerkBucket_GlobalPerkBucketRollT5Bucket4",
        "PerkBucket_HalloweenEvent",
        "PerkBucket_HarvestingItemT3BucketChance",
        "PerkBucket_InjectedMutatorPerkBucketRollT5Bucket4",
        "PerkBucket_InstrumentsT4Chance3",
        "PerkBucket_InstrumentsT5Chance3",
        "PerkBucket_InvasionBucket",
        "PerkBucket_InvasionBucketChanceT4",
        "PerkBucket_InvasionBucketChanceT5",
        "PerkBucket_LazarusBucketChanceT5",
        "PerkBucket_LazarusBucketChanceT5Bucket4",
        "PerkBucket_LazarusBucketChanceT5Bucket5",
        "PerkBucket_LoggingItemT3BucketChance",
        "PerkBucket_LostBucketChanceT4Bucket4",
        "PerkBucket_LostBucketChanceT5Bucket4",
        "PerkBucket_MasterGlobalPerkBucketRoll",
        "PerkBucket_MiningItemT3BucketChance",
        "PerkBucket_MutatorArmorPerkBucketRollT5Bucket5",
        "PerkBucket_MutatorDepthsRollT5Bucket5",
        "PerkBucket_MutatorDynastyShipyardRollT5Bucket5",
        "PerkBucket_MutatorEarringRollT5Bucket5",
        "PerkBucket_MutatorRingRollT5Bucket5",
        "PerkBucket_MutatorShatteredObeliskRollT5Bucket5",
        "PerkBucket_MyrkgardBucketChanceT5Bucket4",
        "PerkBucket_MyrkgardBucketChanceT5Bucket5",
        "PerkBucket_ObeliskBucketChance",
        "PerkBucket_OpPlaytest_ArmorBucket",
        "PerkBucket_OpPlaytest_WeaponBucket",
        "PerkBucket_OutpostRushBucketChanceT5Bucket4",
        "PerkBucket_PvPBucket1Chance",
        "PerkBucket_PvPBucket2Chance",
        "PerkBucket_PVPRTPerks_T4Bucket4Chance",
        "PerkBucket_PVPRTPerks_T5Bucket4Chance",
        "PerkBucket_PVPRTPerks_T5Bucket5Chance",
        "PerkBucket_PVPRTPerks_T5PrestigeBucket4Chance",
        "PerkBucket_SkinningItemT3BucketChance",
        "PerkBucket_SpringEvent",
        "PerkBucket_SummerEvent",
        "PerkBucket_TheDepthsBucketChance",
        "PerkBucket_TheDepthsBucketChanceT4Bucket4",
        "PerkBucket_TrackBucket45ChanceOther_Armor",
        "PerkBucket_TrackBucket4_Chance",
        "PerkBucket_TrackBucketGuaranteeOther_Armor",
        "PerkBucket_TrackBucketGuarantee_Trinkets",
        "PerkBucket_TrackBucketGuarantee_Weapons",
        "PerkBucket_WarBucket",
        "PerkBucket_WarBucketChanceT4",
        "PerkBucket_WarBucketChanceT5",
        "PerkBucket_WinterEvent",
    ],
    "PerkBucket5": [
        "",
        "FishingArmorT4BucketChance",
        "FishingArmorT5BucketChance",
        "GlobalGemSlotChanceT5",
        "PerkBucket_AncientBucketChanceT5Bucket5",
        "PerkBucket_AngryEarthBucketChanceT5Bucket5",
        "PerkBucket_Bag5thPerk",
        "PerkBucket_BarnaclesBucketChanceT5Bucket5",
        "PerkBucket_BreachBucketChanceT5Bucket5",
        "PerkBucket_BreachBucketChanceT5Bucket5_Weights",
        "PerkBucket_BreachPerksBucket5_T5Chance",
        "PerkBucket_CastPerkBucketRollT5Bucket5",
        "PerkBucket_CorruptedBucketChanceT5Bucket5",
        "PerkBucket_CraftedPerkBucketRollT5Bucket5",
        "PerkBucket_CraftedPerkBucketRollT5Fixed",
        "PerkBucket_CraftingPerkBucketChanceT4",
        "PerkBucket_CraftingPerkBucketChanceT5",
        "PerkBucket_EliteAncientBucketChanceT5Bucket5",
        "PerkBucket_EliteAngryEarthBucketChanceT5Bucket5",
        "PerkBucket_EliteBreachPerksBucket5_T5Chance",
        "PerkBucket_EliteCorruptedBucketChanceT5Bucket5",
        "PerkBucket_EliteDrownedBucketChanceT5Bucket5",
        "PerkBucket_EliteLostBucketChanceT5Bucket5",
        "PerkBucket_GenesisBucketChanceT5",
        "PerkBucket_GenesisBucketChanceT5Bucket5",
        "PerkBucket_GlobalBucket",
        "PerkBucket_GlobalBucketChanceT5",
        "PerkBucket_GlobalPerkBucketRollT5Bucket5",
        "PerkBucket_HalloweenEvent",
        "PerkBucket_InjectedArmorPerkBucketRollT5Bucket5",
        "PerkBucket_InjectedMutatorPerkBucketRollT5Bucket5",
        "PerkBucket_InstrumentsT5Chance3",
        "PerkBucket_InvasionBucketChance",
        "PerkBucket_InvasionBucketChanceT5",
        "PerkBucket_LazarusBucketChanceT5",
        "PerkBucket_LazarusBucketChanceT5Bucket5",
        "PerkBucket_LostBucketChanceT5Bucket5",
        "PerkBucket_MutatorAmuletRollT5Bucket5",
        "PerkBucket_MutatorArmorPerkBucketRollT5Bucket5",
        "PerkBucket_MutatorDepthsRollT5Bucket5",
        "PerkBucket_MutatorDynastyShipyardRollT5Bucket5",
        "PerkBucket_MutatorEarringRollT5Bucket5",
        "PerkBucket_MutatorRingRollT5Bucket5",
        "PerkBucket_MutatorShatteredObeliskRollT5Bucket5",
        "PerkBucket_MyrkgardBucketChanceT5Bucket5",
        "PerkBucket_OpPlaytest_ArmorBucket",
        "PerkBucket_OpPlaytest_WeaponBucket",
        "PerkBucket_PvPBucket1Chance",
        "PerkBucket_PVPRTPerks_T5Bucket5Chance",
        "PerkBucket_SpringEvent",
        "PerkBucket_SummerEvent",
        "PerkBucket_TheDepthsBucketChanceT4Bucket4",
        "PerkBucket_Tool5thPerk",
        "PerkBucket_TrackBucket45ChanceOther_Armor",
        "PerkBucket_TrackBucket5_Chance",
        "PerkBucket_TrackBucketGuaranteeOther_Armor",
        "PerkBucket_TrackBucketGuarantee_Trinkets",
        "PerkBucket_TrackBucketGuarantee_Weapons",
        "PerkBucket_WarBucketChanceT5",
        "PerkBucket_WinterEvent",
    ],
    "TradingCategory": [
        "Ammo",
        "Apparel",
        "",
        "Furnishings",
        "Resources",
        "Tools",
        "Utilities",
        "Weapons",
    ],
    "TradingFamil": [
        "AlchemyResources",
        "AmmoIron",
        "AmmoOrichalcum",
        "AmmoStarmetal",
        "AmmoSteel",
        "Amulets",
        "ArcanaResources",
        "ArmorHeavy",
        "ArmorLight",
        "ArmorMedium",
        "Azoth",
        "Bags",
        "Bait",
        "Coating",
        "Components",
        "CookingIngredients",
        "CookingRecipes",
        "CraftingConsumables",
        "DyeIngredients",
        "Dyes",
        "Earrings",
        "",
        "Enhancements",
        "EventConsumables",
        "FoodAttribute",
        "FoodRecovery",
        "FoodTradeskill",
        "GatheringTools",
        "Instruments",
        "Magical",
        "MusicSheets",
        "Potion",
        "RawResources",
        "RefinedResources",
        "Rings",
        "RuneglassFamily",
        "SchematicsFurnishing",
        "Shields",
        "SpecialResources",
        "1Handed",
        "2Handed",
        "Tincture",
    ],
    "MasterItemDefinitionTradingGroup": [
        "AlchemyMagical",
        "AlchemyMedicinal",
        "AlchemyOffensive",
        "AlchemyProtective",
        "ArcanaAir",
        "ArcanaDeath",
        "ArcanaEarth",
        "ArcanaFire",
        "ArcanaLife",
        "ArcanaSpirit",
        "ArcanaWater",
        "Arrows",
        "AttributeItem",
        "AzothVial",
        "BagA",
        "BaitFresh",
        "BaitSalt",
        "Beeswax",
        "Berry",
        "Block",
        "Blunderbuss",
        "Bows",
        "Charcoal",
        "Cloth",
        "CoatingAeternian",
        "CoatingAncient",
        "CoatingAngryEarth",
        "CoatingBeast",
        "CoatingCorrupted",
        "CoatingLost",
        "Conditional",
        "ConsumableLuck",
        "CookingComponents",
        "CraftedAmulet",
        "CraftedEarring",
        "CraftedRing",
        "CraftingComponents",
        "CraftingConsumables",
        "CraftingPatterns",
        "CutGem",
        "Defensive",
        "DroppedAmulet",
        "DroppedEarring",
        "DroppedRing",
        "Drums",
        "DyeBlue",
        "DyeBrown",
        "DyeCyan",
        "DyeGreen",
        "DyeGrey",
        "DyeMagenta",
        "DyeOrange",
        "DyePurple",
        "DyeRed",
        "DyeTurquoise",
        "DyeYellow",
        "Egg",
        "",
        "Feather",
        "Fiber",
        "FishLarge",
        "FishMedium",
        "FishSmall",
        "FishingPoles",
        "FishingSalvage",
        "Flint",
        "Flutes",
        "FoodArcanist",
        "FoodArmorer",
        "FoodAttribute",
        "FoodCON",
        "FoodDEX",
        "FoodEngineer",
        "FoodFOC",
        "FoodHarvester",
        "FoodHealthRecovery",
        "FoodHunter",
        "FoodINT",
        "FoodJewelcrafter",
        "FoodLumberjack",
        "FoodMana",
        "FoodMiner",
        "FoodSTR",
        "FoodWeaponsmith",
        "Fruit",
        "GauntletIce",
        "GauntletVoid",
        "Grain",
        "GreatAxes",
        "GreatSword",
        "Guitars",
        "Gunpowder",
        "Hatchets",
        "Honey",
        "Ingot",
        "IngotPrecious",
        "InstrumentComponents",
        "Leather",
        "Mandolins",
        "Meat",
        "Muskets",
        "Nut",
        "Offensive",
        "Oil",
        "Ore",
        "OrePrecious",
        "Pigments",
        "PotionElemDefense",
        "PotionEncumbrance",
        "PotionFocus",
        "PotionHealth",
        "PotionMana",
        "PotionPurifyB",
        "PotionWellness",
        "Rapiers",
        "RawGem",
        "Rawhide",
        "RecipeFurnishing",
        "Recipes",
        "RefiningComponents",
        "RepairKit",
        "RuneglassAmber",
        "RuneglassAmethyst",
        "RuneglassAquamarine",
        "RuneglassCarnelian",
        "RuneglassDiamond",
        "RuneglassEmerald",
        "RuneglassEmpty",
        "RuneglassJasper",
        "RuneglassMalachite",
        "RuneglassMoonstone",
        "RuneglassOnyx",
        "RuneglassOpal",
        "RuneglassRuby",
        "RuneglassSapphire",
        "RuneglassTopaz",
        "Salvage",
        "Seasonings",
        "ShieldsKite",
        "ShieldsRound",
        "ShieldsTower",
        "Shots",
        "SlotChest",
        "SlotFeet",
        "SlotHands",
        "SlotHead",
        "SlotLegs",
        "Spears",
        "StavesFire",
        "StavesLife",
        "Stone",
        "Swords",
        "1hSickle",
        "1hSkinningKnife",
        "2hAxe",
        "2hPick",
        "Timber",
        "TrinketComponents",
        "UprightBass",
        "Utility",
        "Vegetable",
        "WarHammers",
        "Water",
        "Wood",
    ],
    "UIItemClass": [
        "",
        "UI_Alchemy",
        "UI_Ammo",
        "UI_Armor",
        "UI_AttributeFood",
        "UI_Bait",
        "UI_BasicFood",
        "UI_Consumable",
        "UI_Cooking",
        "UI_CraftingModifiers",
        "UI_Dye",
        "UI_Furniture",
        "UI_Instruments",
        "UI_Jewelcrafting",
        "UI_Leatherworking",
        "UI_Lore",
        "UI_Material",
        "UI_OutpostRush",
        "UI_Quest",
        "UI_Refining",
        "UI_RepairKit",
        "UI_Rewards",
        "UI_Runes",
        "UI_Smelting",
        "UI_Stonecutting",
        "UI_Tools",
        "UI_TradeskillFood",
        "UI_TuningOrbs",
        "UI_Weapon",
        "UI_Weaving",
        "UI_Woodworking",
    ],
    "WarboardGatherStat": [
        "Armour",
        "Arrow",
        "Axe",
        "AzothEssenceGathered",
        "Blueprint",
        "Bow",
        "Bullet",
        "Cloth",
        "Coin",
        "Dirt",
        "",
        "Firearm",
        "Foliage",
        "Generic",
        "Grass",
        "InfusedHideGathered",
        "InfusedOreGathered",
        "InfusedWoodGathered",
        "Knife",
        "Leather",
        "Liquid",
        "Meat",
        "Metal",
        "Paper",
        "Slimy",
        "Stone",
        "Stone Tool",
        "Sword",
        "Wood",
    ],
    "WeaponAccessory": [
        "",
        "1hElementalGauntlet_IceT3",
        "1hElementalGauntlet_IceT4",
        "1hElementalGauntlet_IceT5",
        "1hVoidGauntlet_VoidT5",
        "1hicegauntletGraverobberT5",
        "1hicegauntletShatteredObelisk",
        "1hvoidgauntletShatteredObelisk",
        "2hBowDropT5",
        "2hBowT3",
        "2hBowT4",
        "2hBowT5",
        "2hIceGauntletBreachT5",
        "2hIceGauntletCondemedSacrariumT5",
        "2hIceGauntletFirelightT5",
        "2hIceGauntletHeroicT5",
        "2hIceGauntletHighwaymanT5",
        "2hIceGauntletMossborneT5",
        "2hIceGauntletVarangianKnightsV3T5",
        "2hIceGauntletWinterDragonT5",
        "2hVoidGauntletBreachT5",
        "2hVoidGauntletCondemedSacrariumT5",
        "2hVoidGauntletCorruptedT3",
        "2hVoidGauntletCorruptedT4",
        "2hVoidGauntletCorruptedT5",
        "2hVoidGauntletCrystallinePVPBT5",
        "2hVoidGauntletDefiledT5",
        "2hVoidGauntletFirelightT5",
        "2hVoidGauntletHeroicT5",
        "2hVoidGauntletMossborneT5",
        "2hVoidGauntletVarangianKnightsV3T5",
        "2hVoidGauntletVoidbentT5",
        "2hicegauntletImmolatedT5",
        "VoidGauntletGraverobberT5",
    ],
    "AttributeType": [
        "Constitution",
        "Dexterity",
        "",
        "Focus",
        "Intelligence",
        "Strength",
    ],
    "GameModeResult": [
        "",
        "FlawlessVictory",
        "Victory",
    ],
    "HiddenText": [
        "",
        "@ui_metachievement_hidden_brimstone",
        "@ui_metachievement_hidden_brimstone_ancientglyphs",
        "@ui_metachievement_hidden_emotes_usedalot",
        "@ui_metachievement_hidden_everfall",
        "@ui_metachievement_hidden_generic",
        "@ui_metachievement_hidden_instance_dungeonboss",
        "@ui_metachievement_hidden_monarchs",
        "@ui_metachievement_hidden_player_deaths1",
        "@ui_metachievement_hidden_progression_characterlevel1",
        "@ui_metachievement_hidden_progression_characterlevel2",
        "@ui_metachievement_hidden_progression_characterlevel3",
        "@ui_metachievement_hidden_progression_characterlevel4",
        "@ui_metachievement_hidden_progression_characterlevel5",
        "@ui_metachievement_hidden_progression_characterlevel6",
        "@ui_metachievement_hidden_pve_preykills_boars",
        "@ui_metachievement_hidden_pve_preykills_cows",
        "@ui_metachievement_hidden_pve_preykills_rabbits",
        "@ui_metachievement_hidden_pve_preykills_turkeys",
        "@ui_metachievement_hidden_weaversfen",
        "@ui_metachievement_hidden_windsward",
    ],
    "MetaAchievementDatumItemClass": [
        "blunderbuss",
        "bow",
        "",
        "firestaff",
        "greatsword",
        "hatchet",
        "icemagic",
        "lifestaff",
        "musket",
        "ore",
        "rapier",
        "rawhide",
        "spear",
        "sword",
        "2haxe",
        "2hhammer",
        "voidgauntlet",
        "wood",
    ],
    "LorePagesTopicIDS": [
        "",
        "Topic_00_Aeternum",
        "Topic_02_Brightwood",
        "Topic_03_GreatCleave",
        "Topic_04_Everfall",
        "Topic_05_Reekwater",
        "Topic_06_Windsward",
        "Topic_07_ShatteredMountain",
        "Topic_08_EbonscaleReach",
        "Topic_09_FirstLight",
        "Topic_10_CutlassKeys",
        "Topic_11_Mourningdale",
        "Topic_12_MonarchsBluffs",
        "Topic_13_WeaversFen",
        "Topic_14_Edengrove",
        "Topic_15_RestlessShore",
        "Topic_99_MSQ",
        "Topic_Tales_of_Brimstone_Sands",
        "Topic_ThreeFactions",
    ],
    "NotificationVerbosity": [
        "OneHundred",
        "SeventyFiveOneHundred",
    ],
    "QuestTag": [
        "Brightwoodv2Arc1",
        "Brightwoodv2Arc2",
        "Brightwoodv2Arc3",
        "Brightwoodv2Arc4",
        "BrimstoneSandsArc1",
        "BrimstoneSandsArc2",
        "BrimstoneSandsArc3",
        "BrimstoneSandsArc4",
        "BrimstoneSandsArc5",
        "CutlassKeysArc1",
        "CutlassKeysArc2",
        "CutlassKeysArc3",
        "CutlassKeysArc4",
        "EbonscaleReachArc1",
        "EbonscaleReachArc2",
        "EbonscaleReachArc3",
        "EdengroveArc1",
        "EdengroveArc2",
        "EdengroveArc3",
        "",
        "FishingQuestsArc",
        "GreatCleaveArc1",
        "GreatCleaveArc2",
        "GreatCleaveArc3",
        "MourningdaleArc1",
        "MourningdaleArc2",
        "MourningdaleArc3",
        "ReekwaterArc1",
        "ReekwaterArc2",
        "ReekwaterArc3",
        "RestlessShoreArc1",
        "RestlessShoreArc2",
        "RestlessShoreArc3",
        "ShateredMtnArc1",
        "ShateredMtnArc2",
        "ShateredMtnArc3",
    ],
    "Tier": [
        "",
        "@ui_meta_achievements_roman_numeral_i",
        "@ui_meta_achievements_roman_numeral_ii",
        "@ui_meta_achievements_roman_numeral_iii",
        "@ui_meta_achievements_roman_numeral_iv",
        "@ui_meta_achievements_roman_numeral_v",
        "@ui_meta_achievements_roman_numeral_vi",
        "@ui_meta_achievements_roman_numeral_vii",
    ],
    "VitalsCategories": [
        "Ancient",
        "AncientGuardian_Heavy_Boss_Named_DG_Everfall_00",
        "AngryEarth",
        "AnubianGuardian_Horus_Boss",
        "Boar",
        "Corrupted",
        "Cow",
        "Damned_LongSwordsman_Commander_Named_DG_Restless_00",
        "Dryad_Siren",
        "Dynasty_Empress",
        "",
        "Evil_Knight_Fire_Champion_DG_GreatCleave_01",
        "Isabella_DG_ShatterMtn_Phase2_00",
        "Lost",
        "Naga_AngryEarth",
        "Named,Ancient",
        "Named,AngryEarth",
        "Named,Corrupted",
        "Named,Lost",
        "Named,Predator",
        "Predator",
        "Rabbit",
        "Torso_Boss",
        "Turkey",
        "Withered_Brute_Named_08",
    ],
    "DetailImagePath": [
        "",
        "LyShineUI\\Images\\MissionImages\\missionImage_alligator.png",
        "LyShineUI\\Images\\MissionImages\\missionImage_bear.png",
        "LyShineUI\\Images\\MissionImages\\missionImage_bison.png",
        "LyShineUI\\Images\\MissionImages\\missionImage_boar.png",
        "LyShineUI\\Images\\MissionImages\\missionImage_elk.png",
        "LyShineUI\\Images\\MissionImages\\missionImage_goat.png",
        "LyShineUI\\Images\\MissionImages\\missionImage_lynx.png",
        "LyShineUI\\Images\\MissionImages\\missionImage_rabbit.png",
        "LyShineUI\\Images\\MissionImages\\missionImage_ruins2.png",
        "LyShineUI\\Images\\MissionImages\\missionImage_sheep.png",
        "LyShineUI\\Images\\MissionImages\\missionImage_turkey.png",
        "LyShineUI\\Images\\MissionImages\\missionImage_wolf.png",
    ],
    "FailureGameEventIDOverride": [
        "CMission_Failure",
        "FactionMission_Failure",
        "PVPMission_Failure",
    ],
    "PatrolPoi1": [
        "abandoned_village_40253",
        "DevWorld_Cave",
        "DevWorld_Farm",
        "",
        "factionarea_30328",
        "factionarea_30329",
        "factionarea_30330",
        "factionarea_40034",
        "factionarea_40035",
        "factionarea_40036",
        "factionarea_40169",
        "factionarea_40278",
        "factionarea_40284",
        "factionarea_40285",
        "factionarea_40286",
        "factionarea_40341",
        "factionarea_40424",
        "factionarea_50147",
        "factionarea_50148",
        "factionarea_50247",
        "factionarea_50248",
        "factionarea_50249",
        "factionarea_50393",
        "factionarea_50394",
        "factionarea_50395",
        "factionarea_60236",
        "factionarea_60237",
        "factionarea_60411",
        "factionarea_60412",
        "factionarea_60413",
        "poi_30035_factionarea",
        "poi_30036_factionarea",
        "poi_30037_factionarea",
        "poi_30146_factionarea",
        "poi_30147_factionarea",
        "poi_30148_factionarea",
        "poi_30244_factionarea",
        "poi_30245_factionarea",
        "poi_30313_factionarea",
    ],
    "RequiredAchievementConditional": [
        "",
        "16_BSMSQ_00",
        "16_BSMSQ_05",
        "16_BSMSQ_09",
        "16_BSMSQ_10",
    ],
    "TaskGiveAndTakeItemOverride": [
        "",
        "PVP_TimberBundle_1",
        "WorkOrder_Faction_Armaments01_T2",
        "WorkOrder_Faction_Armaments01_T3",
        "WorkOrder_Faction_Armaments01_T4",
        "WorkOrder_Faction_Armaments01_T5",
        "WorkOrder_Faction_Armaments02_T2",
        "WorkOrder_Faction_Armaments02_T3",
        "WorkOrder_Faction_Armaments02_T4",
        "WorkOrder_Faction_Armaments02_T5",
        "WorkOrder_Faction_Armaments03_T2",
        "WorkOrder_Faction_Armaments03_T3",
        "WorkOrder_Faction_Armaments03_T4",
        "WorkOrder_Faction_Armaments03_T5",
        "WorkOrder_Faction_Armaments04_T2",
        "WorkOrder_Faction_Armaments04_T3",
        "WorkOrder_Faction_Armaments04_T4",
        "WorkOrder_Faction_Armaments04_T5",
        "WorkOrder_Faction_Armaments05_T2",
        "WorkOrder_Faction_Armaments05_T3",
        "WorkOrder_Faction_Armaments05_T4",
        "WorkOrder_Faction_Armaments05_T5",
        "WorkOrder_Faction_Armaments06_T2",
        "WorkOrder_Faction_Armaments06_T3",
        "WorkOrder_Faction_Armaments06_T4",
        "WorkOrder_Faction_Armaments06_T5",
        "WorkOrder_Faction_Armaments07_T2",
        "WorkOrder_Faction_Armaments07_T3",
        "WorkOrder_Faction_Armaments07_T4",
        "WorkOrder_Faction_Armaments07_T5",
        "WorkOrder_Faction_Armaments08_T2",
        "WorkOrder_Faction_Armaments08_T3",
        "WorkOrder_Faction_Armaments08_T4",
        "WorkOrder_Faction_Armaments08_T5",
        "WorkOrder_Faction_Armaments09_T2",
        "WorkOrder_Faction_Armaments09_T3",
        "WorkOrder_Faction_Armaments09_T4",
        "WorkOrder_Faction_Armaments09_T5",
        "WorkOrder_Faction_Armaments10_T2",
        "WorkOrder_Faction_Armaments10_T3",
        "WorkOrder_Faction_Armaments10_T4",
        "WorkOrder_Faction_Armaments10_T5",
        "WorkOrder_Faction_ArmorSet01_T2",
        "WorkOrder_Faction_ArmorSet01_T3",
        "WorkOrder_Faction_ArmorSet01_T4",
        "WorkOrder_Faction_ArmorSet01_T5",
        "WorkOrder_Faction_ArmorSet02_T2",
        "WorkOrder_Faction_ArmorSet02_T3",
        "WorkOrder_Faction_ArmorSet02_T4",
        "WorkOrder_Faction_ArmorSet02_T5",
        "WorkOrder_Faction_ArmorSet03_T2",
        "WorkOrder_Faction_ArmorSet03_T3",
        "WorkOrder_Faction_ArmorSet03_T4",
        "WorkOrder_Faction_ArmorSet03_T5",
        "WorkOrder_Faction_ArmorSet04_T2",
        "WorkOrder_Faction_ArmorSet04_T3",
        "WorkOrder_Faction_ArmorSet04_T4",
        "WorkOrder_Faction_ArmorSet04_T5",
        "WorkOrder_Faction_ArmorSet05_T2",
        "WorkOrder_Faction_ArmorSet05_T3",
        "WorkOrder_Faction_ArmorSet05_T4",
        "WorkOrder_Faction_ArmorSet05_T5",
        "WorkOrder_Faction_ArmorSet06_T2",
        "WorkOrder_Faction_ArmorSet06_T3",
        "WorkOrder_Faction_ArmorSet06_T4",
        "WorkOrder_Faction_ArmorSet06_T5",
        "WorkOrder_Faction_ArmorSet07_T2",
        "WorkOrder_Faction_ArmorSet07_T3",
        "WorkOrder_Faction_ArmorSet07_T4",
        "WorkOrder_Faction_ArmorSet07_T5",
        "WorkOrder_Faction_Provisions01_T1",
        "WorkOrder_Faction_Provisions01_T2",
        "WorkOrder_Faction_Provisions01_T3",
        "WorkOrder_Faction_Provisions01_T4",
        "WorkOrder_Faction_Provisions01_T5",
        "WorkOrder_Faction_Provisions02_T1",
        "WorkOrder_Faction_Provisions02_T2",
        "WorkOrder_Faction_Provisions02_T3",
        "WorkOrder_Faction_Provisions02_T4",
        "WorkOrder_Faction_Provisions02_T5",
        "WorkOrder_Faction_Provisions03_T1",
        "WorkOrder_Faction_Provisions03_T2",
        "WorkOrder_Faction_Provisions03_T3",
        "WorkOrder_Faction_Provisions03_T4",
        "WorkOrder_Faction_Provisions03_T5",
        "WorkOrder_Faction_Provisions04_T2",
        "WorkOrder_Faction_Provisions04_T3",
        "WorkOrder_Faction_Provisions04_T4",
        "WorkOrder_Faction_Provisions04_T5",
        "WorkOrder_Faction_Provisions05_T2",
        "WorkOrder_Faction_Provisions05_T3",
        "WorkOrder_Faction_Provisions05_T4",
        "WorkOrder_Faction_Provisions05_T5",
        "WorkOrder_Faction_Provisions06_T2",
        "WorkOrder_Faction_Provisions06_T3",
        "WorkOrder_Faction_Provisions06_T4",
        "WorkOrder_Faction_Provisions06_T5",
        "WorkOrder_Faction_Provisions07_T2",
        "WorkOrder_Faction_Provisions07_T3",
        "WorkOrder_Faction_Provisions07_T4",
        "WorkOrder_Faction_Provisions07_T5",
        "WorkOrder_Faction_Provisions08_T2",
        "WorkOrder_Faction_Provisions08_T3",
        "WorkOrder_Faction_Provisions08_T4",
        "WorkOrder_Faction_Provisions08_T5",
        "WorkOrder_Faction_Provisions09_T2",
        "WorkOrder_Faction_Provisions09_T3",
        "WorkOrder_Faction_Provisions09_T4",
        "WorkOrder_Faction_Provisions09_T5",
        "WorkOrder_Faction_Provisions10_T2",
        "WorkOrder_Faction_Provisions10_T3",
        "WorkOrder_Faction_Provisions10_T4",
        "WorkOrder_Faction_Provisions10_T5",
    ],
    "TerritoryProjectID": [
        "AlchemistProjectId",
        "ArcaneBlessingProjectId",
        "ArcaneWisdomProjectId",
        "BallistaUpgradeProjectId",
        "BlacksmithProjectId",
        "BlacksmithTemperamentProjectId",
        "CarpentryProjectId",
        "ChefsPassionProjectId",
        "CommunityProjectId",
        "CookingProjectId",
        "EngineeringProjectId",
        "EngineersPatienceProjectId",
        "ExplosiveUpgradeProjectId",
        "FarmersHarvestProjectId",
        "FireBarrelUpgradeProjectId",
        "FortGatesProjectId",
        "FortHardPointsProjectId",
        "HaleAndHeartyProjectId",
        "HornUpgradeProjectId",
        "HuntersBountyProjectId",
        "LumberJackSpiritProjectId",
        "MasonryProjectId",
        "MinersResolveProjectId",
        "OutfittersInspirationProjectId",
        "OutfittingProjectId",
        "RepeaterUpgradeProjectId",
        "SmeltingProjectId",
        "StalwartProjectId",
        "TanningProjectId",
        "WeavingProjectId",
    ],
    "MoonshotFamily": [
        "Ancient",
        "Corrupted",
        "Damned",
        "Earth",
        "Unaffiliated",
        "Withered",
    ],
    "MoonshotType": [
        "Infantry",
        "Siege",
    ],
    "PaperdollID": [
        "instrument-drums-slot",
        "instrument-flute-slot",
        "instrument-guitar-slot",
        "instrument-mandolin-slot",
        "instrument-uprightbass-slot",
    ],
    "FilterType": [
        "DefaultPerformance",
        "Summer",
    ],
    "DamageIncreaseMod": [
        "Mut_DamageScale",
    ],
    "HealthIncreaseMod": [
        "Mut_HealthScale",
    ],
    "InjectedCLoot": [
        "MutatorLoot_Difficulty",
    ],
    "Keybind": [
        "",
        "toggleCriminalIntent",
    ],
    "KeybindActionmap": [
        "",
        "ui",
    ],
    "NotificationType": [
        "",
        "Minor",
        "Popup",
        "Social",
    ],
    "NumberFields": [
        "amount",
        "",
    ],
    "ConversationStateId10": [
        "",
        "GuardCaptain_TaskTopic_PlayForTown",
        "0208_06pre_Alchemist",
        "0209_06pre_Adjudicator",
        "0440a_00_AtticusDelphi_TaskTopic_MSQRumors",
        "06_06_MarcelDupont",
        "06_08_LeovixSilva",
        "06_08_NessaHarrower",
        "06_08_SaatvikAgrawal",
        "06_09_GraceOMalley",
        "12_05_SerPayneBennett",
        "12_08_RegentJinJae",
        "12_09_MB_Grace",
        "1507_06pre_Commander",
        "1602_08_Crassus",
        "1602_09_Crassus",
        "1625_09_Ghazi_p6",
        "9901_10_MSQ_Yonas",
        "9901_20_MSQ_Yonas",
        "9902_13_MSQ_Adiana",
        "Yonas_01_09",
    ],
    "ConversationStateId11": [
        "",
        "GuardCaptain_01A_TaskTopic_MSQRumors",
        "0208_06_Alchemist",
        "0209_06_Adjudicator",
        "06_09_LeovixSilva",
        "06_09_NessaHarrower",
        "06_09_SaatvikAgrawal",
        "12_06_SerPayneBennett",
        "12_09A_RegentJinJae",
        "12_10_MB_Grace",
        "1507_06_Commander",
        "1602_09_Crassus",
        "1602_10_Crassus",
        "9901_11_MSQ_Yonas",
        "9901_21_MSQ_Yonas",
        "Yonas_TaskTopic_AmrineSkip",
    ],
    "ConversationStateId12": [
        "",
        "GuardCaptain_02_TaskTopic_Adiana",
        "06_10_LeovixSilva",
        "06_10_NessaHarrower",
        "06_10_SaatvikAgrawal",
        "12_07_SerPayneBennett",
        "12_09_RegentJinJae",
        "12_11_MB_Grace",
        "1602_10_Crassus",
        "1602_11_Crassus",
        "9901_12_MSQ_Yonas",
        "9901_22_MSQ_Yonas",
    ],
    "ConversationStateId13": [
        "",
        "06_11_LeovixSilva",
        "06_11_NessaHarrower",
        "06_11_SaatvikAgrawal",
        "12_09_SerPayneBennett",
        "12_10_RegentJinJae",
        "12_12_MB_Grace",
        "1602_11_Crassus",
        "1602_12_Crassus",
    ],
    "ConversationStateId14": [
        "",
        "06_12_LeovixSilva",
        "06_12_NessaHarrower",
        "12_10a_RegentJinJae",
        "12_10_SerPayneBennett",
        "1602_13_Crassus",
    ],
    "ConversationStateId15": [
        "",
        "06_13_NessaHarrower",
        "12_11_RegentJinJae",
        "1602_14_Crassus",
    ],
    "ConversationStateId16": [
        "",
        "06_14_NessaHarrower",
    ],
    "ConversationStateId17": [
        "",
        "06_15_NessaHarrower",
    ],
    "ConversationStateId18": [
        "",
        "06_16_NessaHarrower",
    ],
    "ConversationStateId19": [
        "",
        "06_17_NessaHarrower",
    ],
    "ConversationStateId20": [
        "",
        "06_18_NessaHarrower",
    ],
    "InteractOptionDisplayNameOverride": [
        "",
        "@0251a_Headstone_InteractOverride",
        "@0444a_LostAlchemy_InteractOverride",
        "@0445a_RequisitionNote_InteractOverride",
        "@0446a_AncientScroll_InteractOverride",
        "@0447a_Locket_InteractOverride",
        "@0449a_HeronNote_InteractOverride",
        "@0451a_MineCart_InteractOverride",
        "@0727_BookOfIsabella_Interact",
        "@1124_Override",
        "@1129_Override",
        "@12_ClericLetter_InteractOverride",
        "@12_KnightsDecree_InteractOverride",
        "@1678_EmptyChest_int",
        "@9927_VK_ScoutsNote_Examine",
        "@9928_MSQ_YonasMemorial_Examine",
        "@99B_gravestone_interactoverride",
    ],
    "DestinationCompletionAvailablePrompt": [
        "@complete_available_prompt_DEFAULT",
        "",
    ],
    "Difficulty": [
        "Easy",
        "",
    ],
    "FailureGameEventID": [
        "",
        "FactionMission_Failure",
        "Mission_Failure_Bounty_T1",
        "Mission_Failure_Explorer_T1",
        "Mission_Failure_Merchant_T1",
        "Mission_Failure_Procurer_T1",
        "PVPMission_Failure",
        "0511_0101_aguardiansplight_failure",
    ],
    "ORMReleaseEventTags": [
        "CANCELLED",
        "",
    ],
    "ObjectiveReward": [
        "",
        "01_SoleSurvivor2",
        "0504_0102_defianceanddoubt",
        "06A_TS_03_LearnTownBoard",
        "0721_0101_BW_00",
        "0831_0103_LastArgument_Polished",
        "0831_0105_LastArgument_Perfection",
        "0831_0107_LastArgument_Darkness",
        "12A_Side_17_MarketBoard",
        "1625_0701_challengingpharaoh",
        "98_C_0102_RankUp",
        "98_C_0203_RankUp",
        "98_C_0304_RankUp",
        "98_M_0102_RankUp",
        "98_M_0203_RankUp",
        "98_M_0304_RankUp",
        "98_S_0102_RankUp",
        "98_S_0203_RankUp",
        "98_S_0304_RankUp",
        "9906_0050_thescenicrouteb",
    ],
    "ProgressionReward": [
        "Covenant 1",
        "Covenant 2",
        "Covenant 3",
        "Covenant 4",
        "CovenantTokens 1 1500",
        "CovenantTokens 2 3000",
        "CovenantTokens 3 6000",
        "CovenantTokens 4 12000",
        "",
        "Marauder 1",
        "Marauder 2",
        "Marauder 3",
        "Marauder 4",
        "MarauderTokens 1 1500",
        "MarauderTokens 2 3000",
        "MarauderTokens 3 6000",
        "MarauderTokens 4 12000",
        "Syndicate 1",
        "Syndicate 2",
        "Syndicate 3",
        "Syndicate 4",
        "SyndicateTokens 1 1500",
        "SyndicateTokens 2 3000",
        "SyndicateTokens 3 6000",
        "SyndicateTokens 4 12000",
    ],
    "ObjectiveType": [
        "CommunityGoal",
        "Darkness",
        "EpicEquipment",
        "FactionStory_Covenant",
        "FactionStory_Marauders",
        "FactionStory_Syndicate",
        "Journey",
        "MainStoryQuest",
        "Mission",
        "SeasonQuest",
        "SkillProgression",
    ],
    "CraftingRecipeID": [
        "",
        "Procedural_HealthRecoveryT1",
        "Procedural_LongswordT2",
        "SwordAbilityTable",
        "0511_0204_UmbrasReach_Glove",
        "0511_0204_UmbrasReach_Leather",
        "0511_0204_UmbrasReach_Lens",
        "0831_0102_HardIronwoodPlank",
        "0831_0104_CustomBlunderbussLock",
        "0831_0109_GunpowderAdditive",
        "1225_0501_AncientProtectionStone",
        "1625_0502_ImhotepRemedy",
        "1679_0101_DesertCerate",
        "95_s01_04_HealingSalve",
        "95_s01_07_SearingTemper",
    ],
    "KillEnemyWeaponIDEnum": [
        "BlunderbussAbilityTable",
        "BowAbilityTable",
        "",
        "FireMagicAbilityTable",
        "GreatAxeAbilityTable",
        "GreatSwordAbilityTable",
        "HatchetAbilityTable",
        "IceMagicAbilityTable",
        "LifeMagicAbilityTable",
        "MusketAbilityTable",
        "RapierAbilityTable",
        "SpearAbilityTable",
        "SwordAbilityTable",
        "TEMP_Crafting_Specialization_Alchemy",
        "TEMP_Crafting_Specialization_Blacksmithing",
        "TEMP_Crafting_Specialization_Outfitting",
        "VoidGauntletAbilityTable",
        "WarHammerAbilityTable",
    ],
    "SSStatePreset": [
        "",
        "FM_16_PVP_ControlSpot_Covenant_first",
        "FM_16_PVP_ControlSpot_Covenant_task",
        "FM_16_PVP_ControlSpot_Marauder_first",
        "FM_16_PVP_ControlSpot_Marauder_task",
        "FM_16_PVP_ControlSpot_Syndicate_first",
        "FM_16_PVP_ControlSpot_Syndicate_task",
        "FM_16_PVP_SpySpot_Covenant_2_step_container",
        "FM_16_PVP_SpySpot_Covenant_first",
        "FM_16_PVP_SpySpot_Covenant_first_ordie",
        "FM_16_PVP_SpySpot_Covenant_task",
        "FM_16_PVP_SpySpot_Covenant_turnin",
        "FM_16_PVP_SpySpot_Marauder_2_step_container",
        "FM_16_PVP_SpySpot_Marauder_first",
        "FM_16_PVP_SpySpot_Marauder_first_ordie",
        "FM_16_PVP_SpySpot_Marauder_task",
        "FM_16_PVP_SpySpot_Marauder_turnin",
        "FM_16_PVP_SpySpot_Syndicate_2_step_container",
        "FM_16_PVP_SpySpot_Syndicate_first",
        "FM_16_PVP_SpySpot_Syndicate_first_ordie",
        "FM_16_PVP_SpySpot_Syndicate_task",
        "FM_16_PVP_SpySpot_Syndicate_turnin",
    ],
    "TargetDescriptionTaskID": [
        "",
        "FM_04_EXP_01a_leg_A_task",
        "FM_04_EXP_02a_leg_A_task",
        "FM_04_EXP_02_leg_A_task",
        "FM_04_EXP_03a_leg_A_task",
        "FM_05_EXP_01_leg_A_task",
        "FM_05_EXP_01_leg_B_task",
        "FM_05_EXP_02_leg_A_task",
        "FM_05_EXP_03_leg_A_task",
        "FM_05_EXP_03_leg_B_task",
        "FM_06_EXP_01_leg_A_task",
        "FM_07_EXP_01_leg_A_task",
        "FM_07_EXP_02_leg_A_task",
        "FM_07_EXP_03_leg_A_task",
        "FM_08_EXP_01_leg_A_task",
        "FM_08_EXP_03_leg_A_task",
        "FM_10_EXP_01_leg_A_task",
        "FM_10_EXP_02_leg_A_task",
        "FM_10_EXP_03_leg_A_task",
        "FM_14_EXP_01_leg_A_task",
        "FM_14_EXP_02_leg_A_task",
        "FM_14_EXP_03_leg_A_task",
        "FM_15_EXP_01_leg_A_task",
        "FM_15_EXP_02_leg_B_task",
        "FM_15_EXP_03_leg_B_task",
        "FM_16_EXP_14_leg_A_task",
        "FM_C_16_EXP_14_leg_A_task",
        "FM_S_16_EXP_14_leg_A_task",
        "0411_0413_d_01_task_GoToPOI",
        "0411_0414_d_01_task_GoToPOI",
        "0502_0106_d_01_gotoPOI",
        "0699_0101_d_01_TaskGoToPOI",
        "0699_0102_d_01_TaskGoToPOI",
        "0699_0103_d_01_TaskGoToPOI",
        "06A_P_03_RecoverEyepiece_enterDungeon",
        "0714_0105_d_01_goto_POI",
        "0718_0103_d_01_gotoPOI",
        "0726_0101_d_01_TaskGoToPOITag",
        "0726_0102_d_01_TaskGoToPOITag",
        "0726_0103_d_01_TaskGoToPOITag",
        "0726_0104_d_01_TaskGoToPOITag",
        "0726_0105_d_01_TaskGoToPOITag",
        "0726_0106_d_01_TaskGoToPOITag",
        "0726_0107_d_01_TaskGoToPOITag",
        "0811_0803_d_01_TaskGoToPOITag_dungeon",
        "0831_0102_d_02_01_02_01_HaveAndReturnItems_4_ImbuedResin",
        "0899_0801_d_01_TaskGoToPOITag_Liberator",
        "1403A_0301_d_01_Task",
        "1502_1511_d_01_Task_Goto",
        "1599_1513_d_01_Task_Goto",
        "1625_0101_d_03_02_container_breadcrumbs",
        "1625_0601_d_02_container_reflectors",
        "1625_0601_d_04_container_enterVault",
        "9901_0057_d_02_GameMode",
        "99B_MSQ_07_d_02_04_01_01_GameEvent_EncounterStart",
    ],
    "TriggerAreaType": [
        "",
        "Enter",
        "HUD",
        "Leave",
    ],
    "ObjectiveTaskType": [
        "ConsecutiveTaskContainer",
        "e",
        "",
        "PartialTaskContainer",
        "PatrolTask",
        "SimpleTaskContainer",
        "TaskAchievement",
        "TaskChooseFaction",
        "TaskControlPoint",
        "TaskConversationState",
        "TaskConversationTopic",
        "TaskCraftRecipe",
        "TaskCraftWeaponFamily",
        "TaskDarknessKill",
        "TaskDarknessWaves",
        "TaskDie",
        "TaskEquipItem",
        "TaskFishingCast",
        "TaskFishingCatchAnyFish",
        "TaskFishingCatchFish",
        "TaskFishingCatchLength",
        "TaskFishingCatchWeight",
        "TaskFishingEquip",
        "TaskFishingHook",
        "TaskFishingHotspotAny",
        "TaskFishingReel",
        "TaskGameEvent",
        "TaskGameMode",
        "TaskGatherAndReturnItems",
        "TaskGatherCyclicState",
        "TaskGatherItems",
        "TaskGiveAndTakeItem",
        "TaskGiveItem",
        "TaskGoToPOITag",
        "TaskGoToPOITagOnTerritory",
        "TaskGoToTerritory",
        "TaskHaveAndReturnItems",
        "TaskHaveItems",
        "TaskHaveItemsWithWeaponFamily",
        "TaskHaveLevel",
        "TaskHouseScore",
        "TaskInteract",
        "TaskKillContribution",
        "TaskLockAchievement",
        "TaskObjective",
        "TaskOpenUiScreen",
        "TaskPerformSong",
        "TaskRemoveItem",
        "TaskRequireGatherItems",
        "TaskSalvageItem",
        "TaskTemporaryUnlockAchievement",
        "TaskTimer",
        "TaskTriggerArea",
        "TaskTriggerGameEvent",
        "TaskUnLockAchievement",
        "TaskUnlockAchievement",
        "TaskUseItems",
    ],
    "PriorityOverride": [
        "High",
        "Normal",
        "Required",
    ],
    "AppliedPrefix": [
        "@AbyssalPrefix",
        "@AbyssalWardPrefix",
        "@ArborealPrefix",
        "@ArcaneWardPrefix",
        "@BrashPrefix",
        "@CruelPrefix",
        "@ElectrifiedPrefix",
        "@ElementalWardPrefix",
        "@EmpoweredPrefix",
        "",
        "@ExhilaratePrefix",
        "@FireWardPrefix",
        "@FrozenPrefix",
        "@GambitPrefix",
        "@IceWardPrefix",
        "@IgnitedPrefix",
        "@LightningWardPrefix",
        "@NatureWardPrefix",
        "@OpportunistPrefix",
        "@PhysicalWardPrefix",
        "@RallyPrefix",
        "@RetaliatePrefix",
        "@SlashWardPrefix",
        "@SpectralWardPrefix",
        "@StrikeWardPrefix",
        "@ThrustWardPrefix",
        "@WildernessWardPrefix",
    ],
    "AppliedSuffix": [
        "@ArtificerSuffix",
        "@AssassinSuffix",
        "@BarbarianSuffix",
        "@BattlemageSuffix",
        "@BrigandSuffix",
        "@CavalierSuffix",
        "@ClericSuffix",
        "@DruidSuffix",
        "@DuelistSuffix",
        "",
        "@FighterSuffix",
        "@KnightSuffix",
        "@MageSuffix",
        "@MonkSuffix",
        "@NomadSuffix",
        "@OccultistSuffix",
        "@PriestSuffix",
        "@RangerSuffix",
        "@SageSuffix",
        "@ScholarSuffix",
        "@SentrySuffix",
        "@SoldierSuffix",
        "@SpellswordSuffix",
        "@TricksterSuffix",
        "@WardenSuffix",
        "@ZealotSuffix",
    ],
    "ConditionEvent": [
        "OnActive",
        "OnEquip",
        "OnUnsheathed",
    ],
    "DayPhases": [
        "Day",
        "",
        "Night",
    ],
    "DeprecatedPerkID": [
        "",
        "PerkID_Bags_AmmoReturn",
    ],
    "FishingWaterType": [
        "",
        "Fresh",
        "Salt",
    ],
    "GroupName": [
        "Amber_NatureDMG",
        "Amber_NatureWard",
        "Amethyst_AbyssalWard",
        "Amethyst_VoidDMG",
        "Aquamarine_IceDMG",
        "Aquamarine_IceWard",
        "Diamond_RallyGem",
        "Diamond_WildernessWard",
        "Emerald_OpportunistGem",
        "Emerald_ThrustWard",
        "",
        "Jasper_RetaliateGem",
        "Jasper_StrikeWard",
        "Malachite_CruelGem",
        "Malachite_SpectralWard",
        "Moonstone_ExhilarateGem",
        "Moonstone_SlashWard",
        "Onyx_BrashGem",
        "Onyx_PhysicalWard",
        "Opal_ElementalWard",
        "Opal_GambitGem",
        "Ruby_FireDMG",
        "Ruby_FireWard",
        "Sapphire_ArcaneDMG",
        "Sapphire_ArcaneWard",
        "Topaz_LightningDMG",
        "Topaz_LightningWard",
    ],
    "ItemClassGSBonus": [
        "Blunderbuss:500",
        "Bow:500",
        "",
        "FireStaff:220",
        "FireStaff:500",
        "GreatSword:500",
        "Hatchet:500",
        "IceMagic:500",
        "LifeStaff:500",
        "Magic:500,Ranged:500",
        "Musket:400",
        "Musket:500",
        "Rapier:500",
        "Shield:500",
        "Spear:200",
        "Spear:500",
        "Spear:570",
        "Sword:500",
        "2hAxe:500",
        "2HHammer:340",
        "2HHammer:433",
        "2HHammer:500",
        "VoidGauntlet:300",
        "VoidGauntlet:450",
        "VoidGauntlet:500",
    ],
    "ItemPerkConflictsLOCText": [
        "",
        "@incompatible_elemental_perk",
    ],
    "PerkType": [
        "Gem",
        "Generated",
        "Inherent",
    ],
    "ItemClassOverrides": [
        "",
        "Shield:200",
    ],
    "PermanentOwnershipAchievementIDEnum": [
        "",
        "TerritoryPermanentOwner02",
        "TerritoryPermanentOwner04",
        "TerritoryPermanentOwner05",
        "TerritoryPermanentOwner06",
        "TerritoryPermanentOwner08",
        "TerritoryPermanentOwner09",
        "TerritoryPermanentOwner10",
        "TerritoryPermanentOwner11",
        "TerritoryPermanentOwner12",
        "TerritoryPermanentOwner13",
        "TerritoryPermanentOwner15",
        "TerritoryPermanentOwner16",
    ],
    "TitleType": [
        "Account",
        "Character",
    ],
    "PoolCategory": [
        "",
        "Territory",
    ],
    "TerritoryBonusCategory": [
        "",
        "GainFactionRep",
        "GainGatherRate",
        "GainHousePoints",
        "GainStanding",
        "GainStorage",
        "GainXP",
        "HousePurchase",
        "PropertyTax",
        "StationTax",
        "TradingTax",
    ],
    "UpgradeCardCategory": [
        "",
        "@ui_territory_standing_upgrade_category_crafting_fee",
        "@ui_territory_standing_upgrade_category_gather",
        "@ui_territory_standing_upgrade_category_house_ownership",
        "@ui_territory_standing_upgrade_category_housepoint",
        "@ui_territory_standing_upgrade_category_property_tax",
        "@ui_territory_standing_upgrade_category_reputation",
        "@ui_territory_standing_upgrade_category_standing_gain",
        "@ui_territory_standing_upgrade_category_storage",
        "@ui_territory_standing_upgrade_category_trading_tax",
        "@ui_territory_standing_upgrade_category_xp_gain",
    ],
    "UpgradeCardSprite": [
        "",
        "LyShineUI/Images/Territory/StandingRewards/ExperienceBoost.dds",
        "LyShineUI/Images/Territory/StandingRewards/FactionReputation.dds",
        "LyShineUI/Images/Territory/StandingRewards/GainStanding.dds",
        "LyShineUI/Images/Territory/StandingRewards/GatherBoost.dds",
        "LyShineUI/Images/Territory/StandingRewards/HouseOwnership.dds",
        "LyShineUI/Images/Territory/StandingRewards/HousePoint.dds",
        "LyShineUI/Images/Territory/StandingRewards/PropertyTax.dds",
        "LyShineUI/Images/Territory/StandingRewards/StationFee.dds",
        "LyShineUI/Images/Territory/StandingRewards/Storage.dds",
        "LyShineUI/Images/Territory/StandingRewards/TradingTax.dds",
    ],
    "UpgradeCardStat": [
        "",
        "@ui_territory_standing_upgrade_stat_crafting_fee",
        "@ui_territory_standing_upgrade_stat_faction_rep",
        "@ui_territory_standing_upgrade_stat_gathering_speed",
        "@ui_territory_standing_upgrade_stat_house_point",
        "@ui_territory_standing_upgrade_stat_property_tax",
        "@ui_territory_standing_upgrade_stat_storage",
        "@ui_territory_standing_upgrade_stat_territory_standing",
        "@ui_territory_standing_upgrade_stat_trading_tax",
        "@ui_territory_standing_upgrade_stat_xp_gain",
    ],
    "ProgressionPoolDatumCategory": [
        "Player",
        "Territory",
    ],
    "PVPRankDatumDisplayName": [
        "",
        "@ui_pvp_rank_name_0",
        "@ui_pvp_rank_name_1",
        "@ui_pvp_rank_name_2",
        "@ui_pvp_rank_name_3",
        "@ui_pvp_rank_name_4",
        "@ui_pvp_rank_name_5",
        "@ui_pvp_rank_name_6",
    ],
    "PVPRankDatumGameEventID": [
        "",
        "PvP_LevelUpItemReward",
    ],
    "RewardDescription": [
        "",
        "@ui_pvp_track_bannerrewards_1",
        "@ui_pvp_track_bannerrewards_2",
        "@ui_pvp_track_bannerrewards_3",
        "@ui_pvp_track_bannerrewards_4",
        "@ui_pvp_track_bannerrewards_5",
        "@ui_pvp_track_bannerrewards_6",
    ],
    "Bucket1": [
        "",
        "NotchOne",
    ],
    "Bucket2": [
        "",
        "NotchTwo",
    ],
    "Bucket3": [
        "",
        "NotchThree",
    ],
    "Entitlement3": [
        "Emote_Curtsy",
        "",
        "Ent_Emote_Autograph",
        "Ent_Emote_GiveFlower",
        "Ent_Emote_Pushups",
        "Ent_Emote_QueenWave",
    ],
    "ExcludeTypeShop1": [
        "Coin",
        "Emote",
        "",
        "Named",
        "PotionsLarge",
        "PotionsMed",
        "PotionsSmall",
        "Salt",
        "Shards",
        "Special",
        "Token",
        "Weapon",
        "XP",
    ],
    "VitalsLevelRange": [
        "",
        "60-61",
    ],
    "SocketType": [
        "Chitin",
        "",
        "Gem",
        "Runeglass",
    ],
    "MilestoneType": [
        "",
        "major",
        "minor",
        "territory",
    ],
    "RewardMilestoneDatumNotes": [
        "",
        "Located in PBA",
    ],
    "RewardTrackItemDatumCategoricalProgressionID": [
        "AzothSalt_Currency",
    ],
    "Entitlement": [
        "Emote_BreakItUp",
        "Emote_Frustrated",
        "Emote_ImmatureTaunt",
        "Emote_MimeInBox",
        "Emote_Umpire",
        "",
    ],
    "LimitingEntitlementID": [
        "",
        "Entitlement_Season1_UnclaimedFreePass05",
        "Entitlement_Season1_UnclaimedFreePass30",
        "Entitlement_Season1_UnclaimedFreePass40",
        "Entitlement_Season1_UnclaimedFreePass60",
        "Entitlement_Season1_UnclaimedFreePass80",
        "Entitlement_Season1_UnclaimedFreePass99",
        "Entitlement_Season1_UnclaimedGearSetStorage",
        "Entitlement_Season1_UnclaimedPremiumPass05",
        "Entitlement_Season1_UnclaimedPremiumPass20",
        "Entitlement_Season1_UnclaimedPremiumPass35",
        "Entitlement_Season1_UnclaimedPremiumPass55",
        "Entitlement_Season1_UnclaimedPremiumPass80",
    ],
    "RewardTypeEnum": [
        "BattlePass_Free",
        "BattlePass_Premium",
        "Chapter",
        "Journey",
    ],
    "Active": [
        "DISABLED",
        "",
        "RABBITSREVENGE_EVENT",
        "SPRINGTIDEBLOOM_EVENT",
    ],
    "Column1TypeEnum": [
        "Crafting",
        "Expedition",
        "Gathering",
        "Pve",
        "Pvp",
        "Season",
    ],
    "Chapter": [
        "Season1Challenge",
        "Season1Chapter1",
        "Season1Chapter2",
        "Season1Chapter3",
        "Season1Chapter4",
        "Season1Chapter5",
    ],
    "CraftingType": [
        "",
        "Refining",
    ],
    "MutatorRank": [
        "",
        "SILVER",
    ],
    "TradingCategories": [
        "",
        "Weapons,Apparel",
    ],
    "TradingGroups": [
        "CraftingConsumables",
        "",
        "PotionElemDefense,PotionWellness,PotionPurifyB",
    ],
    "CategoryDisplay": [
        "Combat Skills",
        "Crafting Skills",
        "Gathering Skills",
        "General Skills",
    ],
    "CategoryID": [
        "Combat",
        "Crafting",
        "Gathering",
        "General",
    ],
    "CompletionGameEvent": [
        "SongCompletedEasy",
        "SongCompletedHard",
        "SongCompletedMedium",
    ],
    "DanceTimeline": [
        "Performance_Dance",
    ],
    "NotePattern": [
        "Expert",
        "Novice",
        "Skilled",
    ],
    "Performance": [
        "Easy",
        "Hard",
        "Medium",
    ],
    "ErrorEvent": [
        "AG_MISTAKE",
        "AZF_MISTAKE",
        "DRM_MISTAKE",
        "MAN_MISTAKE",
        "URB_MISTAKE",
    ],
    "SheetName": [
        "",
        "@ui_music_flute_part_1",
        "@ui_music_flute_part_2",
        "@ui_music_guitar_part_1",
        "@ui_music_guitar_part_2",
        "@ui_music_guitar_part_3",
        "@ui_music_mandolin_part_1",
        "@ui_music_mandolin_part_2",
    ],
    "AbilityID": [
        "Ability_Hatchet_InfectedThrow",
        "",
        "GlobalPerk_Ability_Sword_WhirlingBlade",
        "IceStormPunishingStorm",
        "Passive_Bow_Skirmish_HasteWhenFoesNear",
        "Passive_Greataxe_Mauler_ArmorWhenFoesNear",
        "Passive_Greataxe_Mauler_DmgWhenFoesNear",
        "Passive_Hatchet_Berserk_DMGPerNearbyEnemy",
        "Passive_Musket_Trapper_BackSpdNearEnemy",
        "Passive_VoidGauntlet_EmpowerCloseRange",
        "Passive_WarHammer_CrowdCrusher_ArmorPerNearbyEnemy",
        "SpinAttackDamagePerk1",
        "SpinAttackDamagePerk2",
        "SpinAttackDamagePerk3",
        "Ultimate_Greataxe_Reaper",
        "Ultimate_VoidGauntlet_DotHealAura",
        "Upgrade_Greataxe_GravityWell_DmgPerFoe",
        "Upgrade_Greataxe_Whirlwind_DmgWhenFoesNear",
    ],
    "AmmoSlot": [
        "arrow-ammo",
        "cartridge-ammo",
        "",
    ],
    "BeamEffect": [
        "cFX_npc_AngryEarthNaga.Poison_Pool_Beam",
        "cFX_npc_Dryad.Swamp_Buff_Beam",
        "cFX_npc_LegionSignifer.HOL_Tether",
        "cFX_npc_UmbertoSpectre.soulSplit_tether",
        "cfx_npc_AncientAnubianHorus.InstrumentOfJudgement_beam",
        "",
        "wFX_Arcane_Range.Chain",
        "wFX_Blunderbuss_Containment.Claw_Proj_Chain",
        "wFX_Fire_Range.Chain",
        "wFX_Ice_Range.Chain",
        "wFX_Lightning_Range.Chain",
        "wFX_Nature_Range.Chain",
        "wFX_VoidGaunt_Decay.Drain_HitScan",
        "wFX_Void_Range.Chain",
    ],
    "CastingTypes": [
        "AoE",
        "Aoe",
        "BeamAttack",
        "Burnout",
        "AOE",
        "Chain",
        "ClosestTargetInAoe",
        "Direct",
        "",
        "IceSpikes",
        "Line",
        "Meteor",
        "NoTargetSpawnFromRaycast",
        "PathOfDestiny",
        "Projectile",
        "SpawnFromWeaponAimRaycast",
    ],
    "FireJointName": [
        "aim_direction",
        "",
        "fireJoint",
        "HANDS_SLOT",
        "left_hand_attach",
        "left_hand_attachment",
        "musketA_muzzle",
        "right_hand_attach",
        "vfx_muzzle",
        "Xform",
    ],
    "ProjRaycastOrientation": [
        "",
        "ZNegative",
        "Znegative",
    ],
    "ShapeTypes": [
        "Box",
        "Capsule",
        "Cylinder",
        "",
        "NoShape",
        "Sphere",
        "SquareToroid",
        "Wedge",
    ],
    "SpawnBeamCasterJoint": [
        "",
        "Wings_BND",
    ],
    "SpellTypes": [
        "Ability",
        "Celestial",
        "ClawShot",
        "Elemental",
        "",
    ],
    "TargetAbilityCondition": [
        "AI_Empress_WaveImmunity",
        "Ability_Lifestaff_DivineEmbrace",
        "",
    ],
    "TargetTypes": [
        "All",
        "",
        "Enemy",
        "Friend",
        "Friendly",
        "Group",
        "GroupNoRange",
        "Self",
    ],
    "TertiarySpellID": [
        "",
        "IceMagic_Spell_Shower_Quick",
        "Rune_FireStorm_AoE_Dominator_Friendly",
        "Rune_FireStorm_AoE_Friendly",
        "Rune_FireStorm_AoE_Greater_Friendly",
        "Rune_FireStorm_AoE_Survivor_Friendly",
        "VoidGauntlet_NullChamber_Empower",
        "VoidGauntlet_NullChamber_Empower_BonusStamina",
        "VoidGauntlet_SiphonAura_Heal",
    ],
    "WeaponSlotOverride": [
        "",
        "heart-gem-slot",
    ],
    "ABSVitalsCategoryABSVitalsCategory": [
        "Ancient=.05",
        "Ancient=.1",
        "Ancient=.10",
        "Ancient=.15",
        "Ancient=.2",
        "AngryEarth=.05",
        "AngryEarth=.1",
        "AngryEarth=.10",
        "AngryEarth=.15",
        "AngryEarth=.2",
        "Beast=.05",
        "Beast=.1",
        "Beast=.10",
        "Beast=.15",
        "Beast=.2",
        "Corrupted=.05",
        "Corrupted=.1",
        "Corrupted=.10",
        "Corrupted=.15",
        "Corrupted=.2",
        "",
        "Human=.05",
        "Human=.10",
        "Human=.15",
        "Lost=.05",
        "Lost=.10",
        "Lost=.15",
        "MegaTurkey=0.66+Beast=.15",
        "OutpostRush=.15",
        "Player=.05",
        "Wraith=.05",
        "Wraith=.1",
        "Wraith=.15",
        "Wraith=.2",
    ],
    "Afflictions": [
        "AfflictionBlight=1",
        "AfflictionBlight=10",
        "AfflictionBlight=2",
        "AfflictionBlight=20",
        "AfflictionBlight=3",
        "AfflictionBlight=5",
        "AfflictionBlight=-99",
        "AfflictionCurse=1",
        "AfflictionCurse=10",
        "AfflictionCurse=15",
        "AfflictionCurse=18",
        "AfflictionCurse=2",
        "AfflictionCurse=20",
        "AfflictionCurse2=1",
        "AfflictionCurse2=-30",
        "AfflictionCurse=3",
        "AfflictionCurse3=1",
        "AfflictionCurse3=-60",
        "AfflictionCurse4=1",
        "AfflictionCurse4=-60",
        "AfflictionCurse=5",
        "AfflictionDrowning=1",
        "AfflictionPoison=1",
        "AfflictionPoison=10",
        "AfflictionPoison=2",
        "AfflictionPoison=20",
        "AfflictionPoison=3",
        "AfflictionPoison=30",
        "AfflictionPoison=5",
        "AfflictionCurse2=-1",
        "",
    ],
    "AntirequisiteEffectCategories": [
        "",
        "GatherBoost",
        "TokenGatherBoost",
    ],
    "DMGVitalsCategoryDMGVitalsCategory": [
        "Ancient=0.03",
        "Ancient=0.04",
        "Ancient=0.05",
        "AngryEarth=0.03",
        "AngryEarth=0.04",
        "AngryEarth=0.05",
        "Beast=0.03",
        "Beast=0.04",
        "Beast=0.05",
        "Corrupted=0.03",
        "Corrupted=0.04",
        "Corrupted=0.05",
        "",
        "Hostile=0.02+Prey=0.02",
        "Lost=0.03",
        "Lost=0.04",
        "Lost=0.05",
        "OutpostRush=.15",
        "Player=.05",
        "Season_01_Event=10.0",
        "0.05",
        "Varangian=0.03",
        "Varangian=0.04",
        "Varangian=0.05",
    ],
    "DisableAllNonAttributePerksExceptionLabels": [
        "",
        "EncumReduce+EncumAdd",
    ],
    "EXPWoodworkingEnum": [
        "",
        "StatFX_Silence_ON",
    ],
    "EffectPotencyMods": [
        "Bleed=0.1",
        "Burn=0.1",
        "Burn=-1.0",
        "CC=0.1",
        "DeathFog=-1.0",
        "Debuff=0.1",
        "Debuff=-1.0",
        "Disease=0.1",
        "Dot=0.1",
        "Bleed=-0.1",
        "Burn=-0.1",
        "CC=-0.1",
        "Debuff=-0.1",
        "Disease=-0.1",
        "Dot=-0.1",
        "Exhaust=-0.1",
        "Frostbite=-0.1",
        "Poison=-0.1",
        "Rend=-0.1",
        "Root=-0.1",
        "Shock=-0.1",
        "Silence=-0.1",
        "Slow=-0.1",
        "Stun=-0.1",
        "Weaken=-0.1",
        "",
        "EssenceRuptureT1=-1",
        "EssenceRuptureT1=-1+EssenceRuptureT2=-1",
        "Exhaust=0.1",
        "Frostbite=0.1",
        "HarvestHP=-0.35",
        "Immortal=-1.0+Uninterruptible=-1.0",
        "PassiveFoodRegen=1.5",
        "Poison=0.1",
        "Rend=0.1",
        "Root=0.1",
        "Shock=0.1",
        "Silence=0.1",
        "Slow=0.1",
        "Slow=-1.0+Root=-1.0+Debuff=-1.0",
        "Slow=-1.0+Root=-1.0+Stun=-1.0",
        "Slow=-1.0+Root=-1.0+UnclampedSlow=-1.0",
        "Stun=0.1",
        "Stun=-1.0",
        "TeamWipeCat=-1.0",
        "Weaken=0.1",
    ],
    "FxScriptOff": [
        "AOE_Blight_OFF",
        "AOE_Corruption_Off",
        "BloodOrb_Stack1_OFF",
        "BloodOrb_Stack2_OFF",
        "BloodOrb_Stack3_OFF",
        "Bow_SmokeBomb_Stop",
        "DrainingTether_Slow_OFF",
        "Dungeon_Corruption_Bubble_Protection OFF",
        "",
        "EssenceRupture_Heal",
        "OverchargeOrb_Stack1_OFF",
        "OverchargeOrb_Stack2_OFF",
        "OverchargeOrb_Stack3_OFF",
        "POTION_Cure",
        "Rune_Detonate_Charge_Off",
        "Rune_StoneForm_Off",
        "Shield_Off",
        "Siphon_Damage_OFF",
        "Siphon_Heal_OFF",
        "StatFX_ArmorRend_OFF",
        "StatFX_BlackPowder_OFF",
        "StatFX_Bloodbath_OFF",
        "StatFX_Burn02_OFF",
        "StatFX_Burn_OFF",
        "StatFX_Disease_OFF",
        "StatFX_Drown_OFF",
        "StatFX_EnrageLimited_OFF",
        "StatFX_EnrageUnlimited_OFF",
        "StatFX_Frostbite_OFF",
        "StatFX_Overload_OFF",
        "StatFX_Poison_OFF",
        "StatFX_Root_OFF",
        "StatFX_Shatter_OFF",
        "StatFX_ShatterSwift_BuffHaste_OFF",
        "StatFX_Slow_OFF",
        "StatFX_Void_OFF",
        "StatFX_Void_ON",
        "StatFX_Weaken_OFF",
        "StatFX_Wound_OFF",
        "Thorpe_Force_Pop",
        "Torso_Boss_Arcane_Orb_Off",
    ],
    "StatusEffectDatumGameEventID": [
        "",
        "War_Battle_Token_Gen",
    ],
    "HealRewardGameEventID": [
        "",
        "War_Heal",
    ],
    "Condition": [
        "",
        "OnAllSourcesRemoved",
        "OnHit",
        "OnHitTaken",
    ],
    "ItemLootVolumeMods": [
        "",
        "SB_Wispybloom=1.0",
        "WCGleamite=1.0",
    ],
    "Notification": [
        "Boss_Team_Wipe",
        "",
        "Exit_World_Bounds",
    ],
    "OnStatusEffect": [
        "AI_AnubianGuardian_HorusBoss_InstrumentOfJudgement_OnTick",
        "AI_AnubianGuardian_Horus_MultiSun_StatusEffect_Cast",
        "AI_AnubianGuardian_Horus_MultiSun_StatusEffect_Fire_Cast",
        "AI_Evil_Knight_Fire_Champion_OverheatSpell",
        "AI_Evil_Knight_Flamekeeper_Living_Bomb_Kill",
        "AI_Evil_Knight_Flamekeeper_Roving_Meteor_Shower_Cast",
        "AI_Lost_Monarch_Beseech_Removed",
        "AI_Mage_Miniboss_Orbs_StatusEffect_Cast",
        "AI_Naga_AncientGuardian_Bomb_StatusEffect_Cast",
        "AI_Naga_AngryEarth_Channel_Poison",
        "AI_Naga_AngryEarth_Spawn_PoisonPool",
        "AI_Remnant_CoreStabilize",
        "AI_Staggered_StaggerDamageResist",
        "AI_Thorpe_Phase_2",
        "ATB_Dex_Bonus_CritOnDodge_SpamPrevention",
        "Dungeon_ArcaneBarrierProtection",
        "Dungeon_CorruptedTether",
        "Dungeon_RelicBubbleRelease",
        "",
        "Hatchet_Berserk_HP",
        "Hatchet_Pass_DoTPurgeTimer",
        "Hatchet_Ult_ImmortalTimer",
        "IceMagic_Freeze_Cooldown",
        "IceMagic_Frostbite_Dur3",
        "IceMagic_Frostbite_Dur3_Rend",
        "IceMagic_Frostbite_Dur3_Rend_DeadlyFrost",
        "IceMagic_IceShower_Freeze_Cooldown",
        "IceMagic_IceStorm_UT_Duration",
        "IceMagic_QuickShower_Dur2",
        "Mut_Curse1_VFX_Kill",
        "Mut_Curse2_VFX_Kill",
        "Mut_Fir_AOE_VFX",
        "Rune_Detonate_CastAoE",
        "Rune_StoneForm_Dominator_CastAoE",
        "Status_Ability_Sword_FinalStand_Heal_Heal",
        "Status_Passive_Firestaff_FireMage_DmgNoDmg",
        "Status_Passive_GreatAxe_Gravity_Root_Hold",
        "Status_Passive_Greataxe_Mauler_StamVsLowHp_Timer",
        "Status_Perk_Tool_HasteOnGatherApp",
        "Status_Ultimate_Sword_Defender_Timer",
        "Status_WhenFoesNearCleanup",
        "VoidGauntlet_EssenceRupture_AoE_OnEnd_CastSpell",
        "VoidGauntlet_HealOnDodgeMaxMana_Timer",
    ],
    "OnHitAffixes": [
        "AI_ArcaneDMG_50",
        "AI_CorruptionDMG_10_Additive",
        "AI_CorruptionDMG_50",
        "AI_FireDMG_20_Additive",
        "AI_FireDMG_50",
        "AI_IceDMG_50",
        "AI_LightningDMG_50",
        "AI_NatureDMG_50",
        "",
    ],
    "OnStackStatusEffect": [
        "AI_Evil_Knight_Fire_Champion_HeatingUpSpell",
        "AI_Evil_Knight_Fire_Champion_OverheatSpell_Warning",
        "",
        "Mut_Curse1_Fir_Major_Cast",
        "Mut_Curse1_Fir_Minor_Cast",
        "Mut_Curse1_Ice_Major_Cast",
        "Mut_Curse1_Ice_Minor_Cast",
        "Mut_Curse1_Nat_Major_Cast",
        "Mut_Curse1_Nat_Minor_Cast",
        "Mut_Curse1_Voi_Major_Cast",
        "Mut_Curse1_Voi_Minor_Cast",
        "Mut_Enrage_Empower",
        "Mut_Ice_DeathFreeze_Root",
        "Mut_Voi_Stacks_1_Cast",
        "Mut_Voi_Stacks_2_Cast",
        "Status_Passive_Bow_Skirmish_HasteOnSwap_Timer",
    ],
    "OnTickStatusEffect": [
        "AI_AnubianGuardian_BruteBoss_DivineAnguish_DamageBuff",
        "AI_AnubianGuardian_BruteBoss_DivineAnguish_DamageBuff_Reapply",
        "AI_AnubianGuardian_HorusBoss_DivineAnguish_DamageBuff",
        "AI_AnubianGuardian_HorusBoss_DivineAnguish_DamageBuff_Reapply",
        "AI_AnubianGuardian_HorusBoss_DivineDoom_CastSpell",
        "AI_AnubianGuardian_HorusBoss_InstrumentOfJudgement_Damage",
        "AI_Disease",
        "AI_DryadSiren_Spin_Phase2_A_Tick",
        "AI_DryadSiren_Spin_Phase2_Ability",
        "AI_DryadSiren_Spin_Phase2_B_Tick",
        "AI_DryadSiren_Spin_Phase2_C_Tick",
        "AI_DryadSiren_Spin_Phase2_D_Tick",
        "AI_DryadSiren_Spin_Phase3_A_Tick",
        "AI_DryadSiren_Spin_Phase3_Ability",
        "AI_DryadSiren_Spin_Phase3_B_Tick",
        "AI_DryadSiren_Spin_Phase3_C_Tick",
        "AI_DryadSiren_Spin_Phase3_D_Tick",
        "AI_DryadSiren_Spin_Phase3_E_Tick",
        "AI_DryadSiren_Spin_Phase3_F_Tick",
        "AI_Evil_Knight_Fire_Champion_Spin_Ability",
        "AI_Evil_Knight_Fire_Champion_Spin_B_Tick",
        "AI_Evil_Knight_Fire_Champion_Spin_F_Tick",
        "AI_Evil_Knight_Fire_Champion_Spin_L_Tick",
        "AI_Evil_Knight_Fire_Champion_Spin_R_Tick",
        "AI_Heartforge_Guardian_Explosive_Walk_CastSpell",
        "AI_Rend",
        "AI_SandElemental_QuestBoss_Targeted_Tremor_Tick",
        "AI_SulfurBurn",
        "AI_Thorpe_Burn",
        "Armadillo_ResistanceOnHitTaken",
        "Dungeon_LaserBeamDeath_RemoveImmortal",
        "",
        "IceMagic_Frostbite_DeadlyFrost_Dur3",
        "IceMagic_IceShower_Freeze",
        "IceMagic_PylonRefresh",
        "IceMagic_UltimateChill",
        "Mut_Enrage_Timer",
        "Mut_Voi_Leech_Block",
        "Mut_Voi_Stacks_1_Effect",
        "Mut_Voi_Stacks_2_Effect",
        "PVP_Arena_ScalingHealingDebuff",
        "Rune_FireStorm_DoT",
        "Status_Passive_Firestaff_Pyro_Ultimate_Removal",
        "Status_Rune_FireStorm_Survivor_DoT",
    ],
    "StatusEffectDatumRemoveStatusEffectCategories": [
        "Buff",
        "Burn",
        "CC+SprintDelayCombat",
        "CC",
        "ClearOnReset",
        "Debuff",
        "DoT",
        "",
        "GSOffenseOnly",
        "Immortal+TraversalHaste+Haste",
        "Immortal+Uninterruptible",
        "MutatorCurse",
        "Stun+Slow+Root+Silence+Rend+Weaken+Disease",
        "Stun+Slow+Root+Silence+Rend+Weaken+Disease+Fortify",
        "TeamWipeCat",
    ],
    "SlotToFillWeaponDamageInfo": [
        "HEART_GEM_SLOT",
    ],
    "WindowHeader": [
        "@AllEnemies_Header",
        "",
        "@SomeEnemies_Header",
    ],
    "XPIncreasesEnum": [
        "",
        "General=0.5+Gathering=0.5",
        "General=1.0",
        "Group=0.04",
        "Group=0.07",
        "Group=0.10",
        "Group=0.15",
    ],
    "FootprintDataTableID": [
        "WallFootprint",
    ],
    "AudioGroup": [
        "",
        "MX_Territory",
        "Music_POI",
        "Music_Territory",
        "POI_State",
        "PvE_Arena",
    ],
    "CompassIcon": [
        "",
        "LyShineUI\\Images\\Icons\\Objectives\\icon_Objective_Quest.png",
        "LyShineUI\\Images\\Map\\Icon\\POIs\\angryearth_ruins_elite.png",
        "LyShineUI/Images/Map/Icon/POIs/angryearth_spriggan_elite.png",
        "LyShineUI/Images/Map/Icon/POIs/Baalphazu.png",
        "LyShineUI/Images/Map/Icon/POIs/cyclops.png",
        "LyShineUI/Images/map/Icon/POIs/damned_compass_danger.png",
        "LyShineUI/Images/map/Icon/POIs/damned_compass.png",
        "LyShineUI/Images/map/Icon/POIs/damned_major_compass.png",
        "LyShineUI/Images/Map/Icon/POIs/furySpriggan.png",
        "LyShineUI/Images/Map/Icon/POIs/hero_shipwreck_elite.png",
        "LyShineUI/Images/Map/Icon/POIs/maudlinbug.png",
        "LyShineUI/Images/Map/Icon/POIs/outpost_compass.png",
        "LyShineUI\\Images\\Map\\Icon\\POIs\\spirit_shrine_charted.dds",
        "LyShineUI/Images/Map/Icon/POIs/Turkey.png",
        "LyShineUI/Images/Map/Icon/POIs/winter_warrior.png",
    ],
    "Debug": [
        "B+",
        "",
    ],
    "TerritoryDefinitionEventID": [
        "CrowsNest",
        "",
    ],
    "FactionControlTerritoryBuffs": [
        "",
        "InfluencePoints_Modifier,ExperiencePoints_Modifier",
        "None",
    ],
    "ObjectiveID": [
        "",
        "06_getoffbeach",
        "12_getoffbeach",
    ],
    "TerritoryDefinitionRequiredItemID": [
        "Darkness_AzothStaff_T1",
        "",
        "2hInstrumentGuitarT2",
    ],
    "UnchartedIcon": [
        "",
        "LyShineUI\\Images\\Map\\Icon\\POIs\\ancient_shrine.png",
        "LyShineUI/Images/Map/Icon/POIs/azure_tree.png",
        "LyShineUI\\Images\\Map\\Icon\\POIs\\brimstone\\brimstone_colossus.png",
        "LyShineUI\\Images\\Map\\Icon\\POIs\\brimstone\\brimstone_pyramid.png",
        "LyShineUI/Images/Map/Icon/POIs/spirit_shrine.png",
    ],
    "DisplayColumn": [
        "AlwaysAvailable",
        "Fortress",
        "Lifestyle",
        "Settlement",
    ],
    "GameEvent": [
        "GypsumGreenEvent",
    ],
    "TradeskillRankDatumDisplayName": [
        "",
        "@ui_alchemy1",
        "@ui_alchemy3",
        "@ui_alchemyStones",
        "@ui_aloe",
        "@ui_brimstone",
        "@ui_farmplants",
        "@ui_gold",
        "@ui_hemp",
        "@ui_hempT4",
        "@ui_hempT5",
        "@ui_iron",
        "@ui_ironwood",
        "@ui_largepredator",
        "@ui_largeprey",
        "@ui_lodestone",
        "@ui_mediumprey",
        "@ui_oil",
        "@ui_orichalcum",
        "@ui_platinum",
        "@ui_sandstone",
        "@ui_silver",
        "@ui_smallpredator",
        "@ui_smallprey",
        "@ui_starmetal",
        "@ui_wyrdwood",
    ],
    "IconTypeUnlock": [
        "Alchemy1",
        "Alchemy2",
        "Alchemy3",
        "Aloe",
        "Brimstone",
        "",
        "FarmPlants",
        "Gold",
        "harvestingplantT4",
        "harvestingplantT5",
        "Hemp",
        "Iron",
        "Ironwood",
        "LargePredator",
        "LargePrey",
        "Lodestone",
        "MediumPrey",
        "Oil",
        "Orichalcum",
        "Platinum",
        "Sandstone",
        "Silver",
        "SmallPredator",
        "SmallPrey",
        "Starmetal",
        "Wyrdwood",
    ],
    "Tooltip": [
        "Chop Ironwood",
        "Chop Wyrdwood",
        "Detect Alchemy Creatures",
        "Detect Alchemy Plants",
        "Detect Alchemy Stones",
        "Detect Brimstone",
        "Detect Cooking Ingredients",
        "Detect Gold",
        "Detect Hemp",
        "Detect Iron",
        "Detect Ironwood",
        "Detect Lodestone",
        "Detect Orichalcum",
        "Detect Platinum",
        "Detect Sandstone",
        "Detect Seeping Stones",
        "Detect Silver",
        "Detect Starmetal",
        "Detect T4 plants",
        "Detect T5 plants",
        "Detect Wyrdwood",
        "",
        "Gather Alchemy Plants",
        "Mine Alchemy Stones",
        "Mine Boulders, Iron",
        "Mine Gold",
        "Mine Lodestone",
        "Mine Orichalcum",
        "Mine Platinum",
        "Mine Seeping Stone",
        "Mine Silver",
        "Mine Starmetal",
        "Proficient Harvester",
        "Proficient Logger",
        "Proficient Miner",
    ],
    "AchievementServerState": [
        "Depleted",
        "",
    ],
    "AmbientType": [
        "BaldCypressTree",
        "BananaTree",
        "BeechTree",
        "Bush",
        "Cattail",
        "DeadTree",
        "",
        "KapokTree",
        "OakTree",
        "PineTree",
        "PoplarTree",
    ],
    "AudioPreloadName": [
        "",
        "gath_oilseep",
    ],
    "AudioPreload": [
        "",
        "missions_brightwood",
        "missions_everfall",
        "Struct_BrimstoneSands_AzothProjector",
    ],
    "AudioPreloadDepletion": [
        "",
        "gath_bush_leaves_big",
        "gath_bush_leaves_med",
        "gath_bush_leaves_small",
        "N/A",
    ],
    "AudioPreloadIdle": [
        "BrimstoneSands_Seedpod_Devices",
        "Corruption_Beam_A",
        "",
        "gath_bush_leaves_small",
        "Missions_BreakCurse",
        "missions_brightwood",
    ],
    "CollisionFX": [
        "",
        "Gatherable.Edible_Flora.Loop_Burstberry_Summer_A",
    ],
    "CollisionPlaySFX": [
        "",
        "Play_Foliage_Green_Jungle_Med",
        "Play_Foliage_Green_Med",
        "Play_Foliage_Green_Tropical_Med",
    ],
    "CollisionStopSFX": [
        "",
        "Stop_Foliage_Green_Jungle_Med",
        "Stop_Foliage_Green_Med",
        "Stop_Foliage_Green_Tropical_Med",
    ],
    "ColorFamilies": [
        "DecorColor_Yellows",
        "",
    ],
    "DEVFurnitureSet": [
        "",
        "MTX-Pack-01-Pirate",
        "MTX-Pack-02-Spooky",
        "MTX-Pack-03-Royal",
        "MTX-Pack-04-Winter-2021",
        "MTX-Pack-05-NewYears-2021",
        "MTX-Pack-06-Love",
        "MTX-Pack-07-Spring",
        "MTX-Pack-08-FateFortune",
        "MTX-Pack-09-RPG",
        "MTX-Pack-10-Metal",
        "MTX-Pack-11-Phoenix",
        "MTX-Pack-12-Egyptian",
        "MTX-Pack-13-Nightveil",
        "MTX-Pack-14-DarkFae",
        "MTX-Pack-15-Winter-2022",
        "MTX-Pack-16-NewYears-2023",
        "MTX-Pack-17-Omens-2023",
        "MTX-Pack-18-Firelight-2023",
        "NA-Basic",
        "NA-Buffs",
        "NA-Other",
        "Pack-01-HolidayWinter-2021",
        "Pack-01-HolidayWinter-2022",
        "Pack-02-HolidaySummer-2022",
        "Pack-03-HolidayFall-2022",
        "Pack-04-HolidaySpring-2023",
        "Set-01-Settler",
        "Set-02-Pirate",
        "Set-03-Dynasty",
        "Set-04-Legion",
        "0-TEST_ONLY-0",
    ],
    "DepletedFX": [
        "cFX_Loot.Chest_Big_Celebration01",
        "cFX_Loot.Chest_Big_Celebration02",
        "cFX_Loot.Chest_Big_Celebration03",
        "cFX_Loot.Chest_Big_Celebration04",
        "cFX_Loot.Chest_Medium_Celebration01",
        "cFX_Loot.Chest_Small_Celebration01",
        "cFX_Loot.Settlement_Medium_Celebration01",
        "cFX_Loot.Settlement_Medium_Celebration02",
        "cFX_Loot.Settlement_Small_Celebration01",
    ],
    "Preload": [
        "loot_container",
    ],
    "DepletedSFX": [
        "",
        "Play_Gather_Boulder_Lrg",
        "Play_Gather_Boulder_Med",
        "Play_Gather_Boulder_Sml",
        "Play_Gather_Bush_Sml",
        "Play_Gather_Chest_Large",
        "Play_Gather_Chest_Small",
        "Play_Gather_Log_Med",
        "Play_Gather_Nuts",
        "Play_Gather_Stones",
    ],
    "DepletedVFXQuest": [
        "Buildables.Camp.Ruin_Campfire_01",
        "Buildables.Placement.Dust_A",
        "cFX_LifeStaff.MassRez_Spawn",
        "cFX_Loot.Chest_Big_Celebration01",
        "cFX_Loot.Loot_Quest_Medium_Depleted",
        "cFX_Loot.Loot_Quest_Small",
        "cFX_Loot.Loot_Quest_Small_Depleted",
        "cFX_npc_DryadArcher.Weapon_Ignite",
        "cfx_npc_ancient_heavy.Heavy_Jump_Wave",
        "ENV_Dungeon_Ancient_Gate.Seal_Break_02",
        "",
        "env_darkness_grove.Minor.Main_DES_Expl",
        "env_everfall.Forge_Complete",
        "env_msq_collectable.CorruptedOrb.Orb_Explosion",
        "env_msq_collectable.Witch.witchs_fire_bursting",
        "gatherable_alchemy_boid.Ambience.Boid_Death_Burst03",
        "gatherable_Alchemy_Plant.Ambience.Plant_Air_Burst02",
        "Gatherable_Alchemy_Plant.Ambience.Plant_Fire_Deplete01",
        "Gatherable.Edible_Flora.Demolish.Grain_A",
        "Gatherable.Log.Demolish.RottenLog_C",
        "Gatherable.Mineral.Demolish.Boulder_sm_C",
        "Reveries_Fireworks.Fireworks_Shootingstar_Spectrum",
        "vfx_ezra_lead.Forgebreaker",
    ],
    "DepletedSFXEnum": [
        "Play_Gather_Bush_Lrg",
        "Play_Gather_Bush_Med",
        "Play_Gather_Bush_Sml",
    ],
    "Gatherable": [
        "",
        "slices\\Gatherables\\Master_Quest_Damageable_Instanced.slice",
        "slices\\Gatherables\\Master_Quest_Instanced.slice",
        "slices\\Gatherables\\Master_Quest_Proximity_Instanced.slice",
        "slices\\Gatherables\\Master_Quest.slice",
        "slices\\WorldEvents\\Varangian\\CustomMQI_9926_VKCannon_A_00.slice",
        "slices\\WorldEvents\\Varangian\\CustomMQI_9926_VKCannon_B_00.slice",
    ],
    "GatheringFX": [
        "dungeon_shatteredobelisk.Beam_Charge",
        "",
        "env_darkness.Core.Core_minor_monolith_gather01",
    ],
    "HousingTag1Placed": [
        "",
        "OnCeiling",
        "OnFloor",
        "OnFurniture",
        "OnWall",
    ],
    "HousingTag2Points": [
        "",
        "+IsAnimal",
        "+IsBed",
        "+IsBooksPaper",
        "+IsCabinetShort",
        "+IsCabinetTall",
        "+IsChairDining",
        "+IsChairOther",
        "+IsCurtain",
        "+IsDishes",
        "+IsLargeDecor",
        "+IsLighting",
        "+IsMediumDecor",
        "+IsPainting",
        "+IsPlaceSetting",
        "+IsRug",
        "+IsShelfWall",
        "+IsShelves",
        "+IsSmallDecor",
        "+IsStorage",
        "+IsStoveOven",
        "+IsTableDining",
        "+IsTableOther",
        "+IsTrophyBuff",
        "+IsUnique",
        "+IsVeg",
        "#NAME?",
    ],
    "HousingTag3Limiter": [
        "",
        "+LimiterAnimatedRigged",
        "+LimiterAnimatedTimelineInteract",
        "+LimiterAnimatedTimelineLooping",
        "+LimiterLighting",
        "+LimiterStorage",
        "+LimiterTrophyBuff",
        "#NAME?",
    ],
    "HousingTag5Buffs": [
        "+CombatAncientBonus",
        "+CombatAngryEarthBonus",
        "+CombatBeastBonus",
        "+CombatCorruptedBonus",
        "+CombatLostBonus",
        "+CombatVarangianBonus",
        "+CraftingAlchemyBonus",
        "+CraftingBlacksmithingBonus",
        "+CraftingCookingBonus",
        "+CraftingEngineeringBonus",
        "+CraftingOutfittingBonus",
        "",
        "+GatheringFishingBonus",
        "+GatheringHarvestingBonus",
        "+GatheringLoggingBonus",
        "+GatheringMiningBonus",
        "+GatheringSkinningBonus",
        "#NAME?",
        "+NoStacking",
        "+OtherFoodTimeBonus",
        "+OtherLootLuckBonus",
        "+SeasonXPBonus",
    ],
    "HowToOptainPrimarily": [
        "Crafting - Common Materials",
        "Crafting - Epic Materials",
        "Crafting - Rare Materials",
        "Crafting - Uncommon Materials",
        "",
        "Exploration Painting Rewards",
        "Fishing Tournament Rewards",
        "Fishing Treasure Chest",
        "From Salvage - Epic",
        "Holiday Shop",
        "LiveOps Make-Good",
        "Loot Drop - Common",
        "Loot Drop - Elite",
        "Loot Drop - Legendary",
        "Loot Drop - Rare",
        "Loot Drop - Uncommon",
        "MTX Shop/Gift",
        "Quest Reward",
        "Season Event Drop",
        "Season Journey Reward",
    ],
    "IdleSFX": [
        "",
        "Play_AMB_3D_OilSeep",
    ],
    "IdleSFXPlay": [
        "Play_Loot_Small_Idle",
    ],
    "IdleSFXStop": [
        "Stop_Loot_Small_Idle",
    ],
    "IdleVFX": [
        "Loot.Chest_big_closed01",
        "Loot.Chest_big_open01",
        "Loot.Chest_big_peek01",
        "Loot.Chest_xbig01",
        "Loot.Crate_small01",
        "Loot.Crate_tall01",
        "Loot.Crate_xsmall01",
        "Loot.GlyphChest_big_open1",
    ],
    "ItemRarity": [
        "Common",
        "",
        "Epic",
        "Legendary",
        "Rare",
        "Uncommon",
    ],
    "MarkerCreatureTypeOverride": [
        "DamageableGatherable",
        "",
    ],
    "PlacementGridDisplaySize": [
        "",
        "GridSize_Large",
    ],
    "PlayFallingSFX": [
        "Play_Gather_CactusFall_Med",
        "Play_Gather_TreeFall_Big",
        "Play_Gather_TreeFall_Med",
        "Play_Gather_TreeFall_Small",
    ],
    "PlaySlidingSFX": [
        "",
        "Play_Slide_Tree_Hvy",
        "Play_Slide_Tree_Med",
        "Play_Slide_Tree_Small",
    ],
    "RankingPointsEnum": [
        "#N/A",
        "0.02",
        "0.03",
        "0.04",
        "0.05",
        "0.06",
        "0.08",
        "0.09",
        "0.1",
        "0.11",
        "0.12",
        "0.13",
        "0.14000000000000001",
        "0.15",
        "0.16",
        "0.18",
        "0.2",
        "7.0000000000000007E-2",
    ],
    "SfxBurst": [
        "",
        "Play_Alchemy_Air_Sparks_Boid_01",
        "Play_Alchemy_Air_Sparks_Boid_02",
        "Play_Alchemy_Air_Sparks_Boid_03",
        "Play_Alchemy_Air_Sparks_Stone",
        "Play_Alchemy_Death_Plant",
        "Play_Alchemy_Earth_Boid",
        "Play_Alchemy_Earth_Stone",
        "Play_Alchemy_Fire_Boid",
        "Play_Alchemy_Fire_Plant",
        "Play_Alchemy_Fire_Stone",
        "Play_Alchemy_Life_Moth",
        "Play_Alchemy_Soul_Boid",
    ],
    "SFXDepletedIdlePlay": [
        "",
        "Play_SFX_Missions_Brightwood_BurnCaskets",
    ],
    "SFXDepletedIdleStop": [
        "",
        "Stop_SFX_Missions_Brightwood_BurnCaskets",
    ],
    "SFXGathering": [
        "",
        "Play_SFX_AzothProjector_Movement",
    ],
    "SalvageGameEventID": [
        "",
        "SalvageCoinGrantT2",
        "SalvageCoinGrantT3",
        "SalvageCoinGrantT4",
    ],
    "StopFallingSFX": [
        "Stop_Gather_CactusFall_Med",
        "Stop_Gather_TreeFall_Big",
        "Stop_Gather_TreeFall_Med",
        "Stop_Gather_TreeFall_Small",
    ],
    "TradingFamily": [
        "",
        "HousingTrdF_Decorations",
        "HousingTrdF_Furniture",
        "HousingTrdF_Misc",
        "HousingTrdF_Trophies",
    ],
    "VariationDatumTradingGroup": [
        "",
        "HousingTrdG_Animals",
        "HousingTrdG_Beds",
        "HousingTrdG_BooksPaper",
        "HousingTrdG_BuffCombat",
        "HousingTrdG_BuffCrafting",
        "HousingTrdG_BuffGathering",
        "HousingTrdG_BuffOther",
        "HousingTrdG_Cabinets",
        "HousingTrdG_Chairs",
        "HousingTrdG_Curtains",
        "HousingTrdG_DecorOther",
        "HousingTrdG_Dishes",
        "HousingTrdG_Lighting",
        "HousingTrdG_MiscOther",
        "HousingTrdG_Paintings",
        "HousingTrdG_Rugs",
        "HousingTrdG_Shelves",
        "HousingTrdG_Storage",
        "HousingTrdG_Stoves",
        "HousingTrdG_Tables",
        "HousingTrdG_Veg",
    ],
    "UIHousingCategory": [
        "Beds",
        "Chairs",
        "Decorations",
        "",
        "Lighting",
        "Misc",
        "Pets",
        "Shelves",
        "Tables",
        "Trophies",
        "Vegetation",
    ],
    "VegAreaDataSet": [
        "",
        "GroundCover/ObjectSets/Nature/bush_01.vegsetdb",
    ],
    "WalkInTimeline": [
        "Libs\\Timeline\\Npc\\npc_01_graceww_00_walkin.timeline",
        "Libs\\Timeline\\Npc\\npc_01_reeseww_walkaway_left.timeline",
        "Timelines\\EmptyTimeline.timeline",
    ],
    "Icon": [
        "",
        "LyShineUI\\Images\\missions\\kill\\Ancient.png",
        "LyShineUI\\Images\\Missions\\Kill\\Bear.PNG",
        "LyShineUI\\Images\\Missions\\Kill\\Bison.PNG",
        "LyShineUI\\Images\\Missions\\Kill\\Boar.PNG",
        "LyShineUI\\Images\\Missions\\Kill\\Boss.PNG",
        "LyShineUI\\Images\\Missions\\Kill\\Corrupted.PNG",
        "LyShineUI\\Images\\Missions\\Kill\\Elk.PNG",
        "LyShineUI\\Images\\missions\\kill\\Spriggan.png",
        "LyShineUI\\Images\\Missions\\Kill\\Turkey.PNG",
        "LyShineUI\\Images\\Missions\\Kill\\Withered.PNG",
        "LyShineUI\\Images\\Missions\\Kill\\Wolf.PNG",
    ],
    "LocationHint": [
        "Ebony_Hawk",
        "",
    ],
    "AFAFrostbite": [
        "c",
        "",
    ],
    "VitalsDatumFamily": [
        "AncientGuardian",
        "AngryEarth",
        "Corrupted",
        "",
        "Human",
        "Lost",
        "Wildlife",
    ],
    "HealthRegenThresholds": [
        "",
        "Food;60:100;25:65;10:25;0:0",
        "Health;100:0;75:50;50:200;25:350;10:500;0.1:500;0:0",
        "Health;100:0;75:50;50:200;25:350;10:500;0.1:500;0:1",
        "Health;100:0;75:50;50:200;25:350;10:500;0.1:500;0:2",
    ],
    "KillEventIDOverride": [
        "AncientGuardian_Heavy_Boss_Named_DG_GreatCleave_01",
        "Damned_LongSwordsman_Commander_Named_DG_Restless_00",
        "",
        "Isabella_Phase2_DG_ShatterMtn_00",
        "KillFTUE_Sailor_T1_2",
        "KillStructure",
        "Kill_TerrorTurkey",
        "Naga",
    ],
    "VitalsDatumLootTableID": [
        "CreatureLootMaster",
        "Darkness_Damned_Acolyte",
        "DarknessRiftBoss",
        "Elk",
        "",
        "GoblinLoot",
        "GoblinLoot60",
        "NullRoll",
        "OutpostRush_Creatures",
        "OutpostRush_Large_Creatures",
        "OutpostRush_Undead_Brute",
        "PlayerMaster",
    ],
    "MinionVitalsID": [
        "AncientGuardian_Mage_Minion_22",
        "AncientGuardian_Mage_Minion_36",
        "AncientGuardian_Mage_Minion_37",
        "AncientGuardian_Mage_Minion_38",
        "AncientGuardian_Mage_Minion_39",
        "AncientGuardian_Mage_Minion_40",
        "AncientGuardian_Mage_Minion_41",
        "AncientGuardian_Mage_Minion_42",
        "AncientGuardian_Mage_Minion_43",
        "AncientGuardian_Mage_Minion_44",
        "AncientGuardian_Mage_Minion_45",
        "AncientGuardian_Mage_Minion_49",
        "AncientGuardian_Mage_Minion_58",
        "AncientGuardian_Mage_Minion_59",
        "AncientGuardian_Mage_Minion_60",
        "AncientGuardian_Mage_Minion_61",
        "AncientGuardian_Mage_Minion_62",
        "AncientGuardian_Mage_Minion_67_ELITE",
        "AncientGuardian_Mage_Minion_DG_Everfall_00",
        "Bear_Cub_Elemental",
        "Corrupted_Mine",
        "Corrupted_Mine_25",
        "Corrupted_Mine_35",
        "Corrupted_Mine_45",
        "Corrupted_Mine_49",
        "Corrupted_Mine_50",
        "Corrupted_Mine_55",
        "Corrupted_Mine_60",
        "Corrupted_Mine_61",
        "Corrupted_Mine_63",
        "Corrupted_Mine_65",
        "Damned_Priest_Hound_46",
        "Damned_Priest_Hound_62",
        "Damned_Priest_Hound_65",
        "",
        "Lesser_Dryad_35",
        "Lesser_Dryad_64",
        "Lesser_Dryad_65",
        "Naga_AngryEarth_Minion",
        "OR_Wolf",
        "Priest_Lesser_DamnedHound_RestlessShores",
        "Risen_Brute_Minion",
        "Swamp_Fiend_Arena",
        "Torso_Boss_Minion",
        "Unstable_Swamp_Fiend_Minion",
        "Wolf_Minion_08QP05",
        "Wolf_Minion_10",
        "Wolf_Minion_11",
        "Wolf_Minion_15",
        "Wolf_Minion_16",
        "Wolf_Minion_21",
        "Wolf_Minion_26",
        "Wolf_Minion_34",
        "Wolf_Minion_40",
        "Wolf_Minion_7",
    ],
    "StaminaRegenThresholds": [
        "Drink;60:100;25:100;10:100;0:100",
        "",
    ],
    "WarAssistEventID": [
        "",
        "War_Assist_Major",
        "War_Assist_Minor",
        "War_Assist_Special",
    ],
    "WarKillEventID": [
        "",
        "War_Kill_Major",
        "War_Kill_Minor",
        "War_Kill_Special",
    ],
    "WeaponAccessoryDefinitionEquipType": [
        "Gauntlet",
        "Quiver",
    ],
    "MaterialOverride2": [
        "ALWAYS_VISIBLE",
        "",
    ],
    "PrefabPath": [
        "Items/Weapons/weapon_accessory",
    ],
    "WeaponAccessoryDefinitionSkinOverride2": [
        "",
        "Quiver",
    ],
    "EmissiveColor": [
        "#A465CE",
        "#B7E124",
        "#B8B8B8",
        "#BC0C0E",
        "#E0A40C",
        "#E0AD2B",
        "#E2D6A1",
        "#E3C76E",
        "",
        "#FF18FC",
        "#FF5500",
        "#FF7200",
        "#FFFFFF",
        "#007D00",
        "#0080FE",
        "#00A095",
        "#02B7E8",
        "#2C9D41",
        "#63C5DA",
        "#7AA8FD",
        "#80D3FF",
        "#9E8818",
    ],
    "WeaponAppearanceDefinitionIconCaptureGroup": [
        "a",
        "AzothStaff",
        "Bass",
        "Blunderbuss",
        "Bow",
        "Drum",
        "",
        "FishingPole",
        "Flute",
        "Gauntlet",
        "GreatAxe",
        "GreatSword",
        "Guitar",
        "KiteShield",
        "Longsword",
        "Mandolin",
        "Musket",
        "Pistol",
        "Rapier",
        "RoundShield",
        "Sickle",
        "SkinningKnife",
        "Spear",
        "StaffFire",
        "StaffLife",
        "1hLoggingAxe",
        "1hPickAxe",
        "2hLoggingAxe",
        "2hPickAxe",
        "ThrowingAxe",
        "TowerShield",
        "WarHammer",
    ],
    "WeaponAppearanceDefinitionItemClass": [
        "",
        "EquippableMainHand+FireStaff+Magic",
        "EquippableMainHand+Hatchet+Melee",
        "EquippableMainHand+IceMagic+Magic",
        "EquippableMainHand+LifeStaff+Magic",
        "EquippableMainHand+Musket+Ranged",
        "EquippableMainHand+Rapier+Melee",
        "EquippableMainHand+Sword+Melee",
        "EquippableMainHand+VoidGauntlet+Magic",
        "EquippableOffHand+Shield",
        "EquippableOffHand+Shield+Kite",
        "EquippableTool+Axe+LoggingAxe",
        "EquippableTool+Axe+PickAxe",
        "EquippableTool+Axe+Pickaxe",
        "EquippableTool+Axe+Sickle",
        "EquippableTool+Axe+SkinningKnife",
        "EquippableTool+FishingPole",
        "EquippableTool+InstrumentDrums",
        "EquippableTool+InstrumentFlute",
        "EquippableTool+InstrumentGuitar",
        "EquippableTool+InstrumentMandolin",
        "EquippableTool+InstrumentUprightBass",
        "EquippableTwoHand+2HAxe+Melee",
        "EquippableTwoHand+2HHammer+Melee",
        "EquippableTwoHand+Blunderbuss+Ranged",
        "EquippableTwoHand+Bow+Ranged",
        "EquippableTwoHand+FireStaff+Magic",
        "EquippableTwoHand+LifeStaff+Magic",
        "EquippableTwoHand+Musket+Ranged",
        "EquippableTwoHand+Spear+Melee",
        "Weapon+EquippableMainHand+FireStaff+Magic",
        "Weapon+EquippableMainHand+FireStaff+Magic+Named",
        "Weapon+EquippableMainHand+Hatchet+Melee",
        "Weapon+EquippableMainHand+Hatchet+Melee+Named",
        "Weapon+EquippableMainHand+IceMagic+Magic",
        "Weapon+EquippableMainHand+IceMagic+Magic+Named",
        "Weapon+EquippableMainHand+LifeStaff+Magic",
        "Weapon+EquippableMainHand+LifeStaff+Magic+Named",
        "Weapon+EquippableMainHand+Rapier+Melee",
        "Weapon+EquippableMainHand+Rapier+Melee+Named",
        "Weapon+EquippableMainHand+Sword",
        "Weapon+EquippableMainHand+Sword+Melee",
        "Weapon+EquippableMainHand+Sword+Melee+Named",
        "Weapon+EquippableMainHand+VoidGauntlet+Magic",
        "Weapon+EquippableMainHand+VoidGauntlet+Magic+Named",
        "Weapon+EquippableOffHand+Shield+KiteShield",
        "Weapon+EquippableOffHand+Shield+KiteShield+Named",
        "Weapon+EquippableOffHand+Shield+RoundShield",
        "Weapon+EquippableOffHand+Shield+RoundShield+Named",
        "Weapon+EquippableOffHand+Shield+TowerShield",
        "Weapon+EquippableOffHand+Shield+TowerShield+Named",
        "Weapon+EquippableTool+Axe+AzothStaff",
        "Weapon+EquippableTool+Axe+LoggingAxe",
        "Weapon+EquippableTwoHand",
        "Weapon+EquippableTwoHand+2HAxe+Melee",
        "Weapon+EquippableTwoHand+2HAxe+Melee+Named",
        "Weapon+EquippableTwoHand+2HHammer+Melee",
        "Weapon+EquippableTwoHand+2HHammer+Melee+Named",
        "Weapon+EquippableTwoHand+Blunderbuss+Ranged",
        "Weapon+EquippableTwoHand+Blunderbuss+Ranged+Named",
        "Weapon+EquippableTwoHand+Bow+Ranged",
        "Weapon+EquippableTwoHand+Bow+Ranged+Named",
        "Weapon+EquippableTwoHand+GreatSword+Melee",
        "Weapon+EquippableTwoHand+GreatSword+Melee+Named",
        "Weapon+EquippableTwoHand+Musket+Ranged",
        "Weapon+EquippableTwoHand+Musket+Ranged+Named",
        "Weapon+EquippableTwoHand+Spear+Melee",
        "Weapon+EquippableTwoHand+Spear+Melee+Named",
    ],
    "MaskASpecColor": [
        "#A09FBB",
        "#A0A0A0",
        "#A4669A",
        "#AA865A",
        "#B3EFFB",
        "#B60486",
        "#B6A980",
        "#B8B8B8",
        "#C054BE",
        "#C2D4C3",
        "#DAA375",
        "#E9CC86",
        "",
        "#FFEEA2",
        "#000000",
        "#0E0E14",
        "#141414",
        "#1ADAD8",
        "#250904",
        "#286301",
        "#2B1D33",
        "#30321A",
        "#343536",
        "#354A69",
        "#37044C",
        "#383842",
        "#3C363A",
        "#3D310A",
        "#3D3518",
        "#3D3D3D",
        "#3D4F89",
        "#411208",
        "#422C3F",
        "#443D53",
        "#46371B",
        "#46381C",
        "#525F70",
        "#54B72F",
        "#55412A",
        "#575757",
        "#58566C",
        "#585858",
        "#595959",
        "#5C4A65",
        "#5C5C69",
        "#605856",
        "#625D104",
        "#625D105",
        "#625D92",
        "#625D93",
        "#625D94",
        "#625D95",
        "#625D96",
        "#63561F",
        "#635E5A",
        "#644B05",
        "#656565",
        "#666677",
        "#676570",
        "#683F27",
        "#69190E",
        "#695B00",
        "#69697B",
        "#6A6A6A",
        "#6C5A2F",
        "#6D5C31",
        "#717171",
        "#754827",
        "#7752A2",
        "#782FA4",
        "#790002",
        "#807A60",
        "#856C39",
        "#856C40",
        "#856C41",
        "#856C42",
        "#856C43",
        "#856C44",
        "#856C45",
        "#856C46",
        "#856C47",
        "#856C48",
        "#856C49",
        "#856C50",
        "#86BDFF",
        "#8B8B8B",
        "#8E4600",
        "#8F824D",
        "#906C09",
        "#930408",
        "#939800",
        "#9B3B1D",
        "#9D9DA0",
    ],
    "WeaponAppearanceDefinitionMaskBColor": [
        "#A14CD2",
        "#A14CD3",
        "#A14CD4",
        "#A14CD5",
        "#A14CD6",
        "#A3A09A",
        "#A4A3A3",
        "#A7A28B",
        "#AEAEAE",
        "#AFB645",
        "#B3B3B3",
        "#B67F58",
        "#B8B8B8",
        "#BA9780",
        "#BAA66B",
        "#BC5F0D",
        "#C38D75",
        "#C4C4C4",
        "#C8CAC0",
        "#C9D1E5",
        "#CC815B",
        "#D3BFDA",
        "#D4D4EE",
        "#EACD89",
        "#eaea84",
        "",
        "#F6F5E9",
        "#FFC800",
        "#000000",
        "#00E6FF",
        "#08CFBF",
        "#0AEDDA",
        "#0C0C0C",
        "#0C9A5A",
        "#191500",
        "#1A1600",
        "#1A7EB4",
        "#2A0606",
        "#334154",
        "#371B6F",
        "#3C363A",
        "#3D4E88",
        "#3D4F89",
        "#432C99",
        "#4893BA",
        "#4B4039",
        "#4C462C",
        "#4D4167",
        "#4F5263",
        "#4F5270",
        "#53235D",
        "#54FFFF",
        "#575757",
        "#585EA0",
        "#5E562F",
        "#5E73AA",
        "#5F0006",
        "#6495F9",
        "#656565",
        "#661010",
        "#67534A",
        "#6C40C3",
        "#6D685A",
        "#6E6E6E",
        "#700000",
        "#732EB8",
        "#740000",
        "#7443A0",
        "#796546",
        "#7C8B75",
        "#7D613C",
        "#849B6C",
        "#860000",
        "#868686",
        "#895B30",
        "#8B8D8C",
        "#8D9F61",
        "#8F4E11",
        "#8F95A3",
        "#948968",
        "#948E7B",
        "#97B2CA",
        "#985555",
        "#9B1A9B",
        "#9D0000",
    ],
    "WeaponAppearanceDefinitionMaskGColor": [
        "#A0A7B6",
        "#A19E87",
        "#A35E00",
        "#A3A7AC",
        "#A494A4",
        "#A6ADBD",
        "#A99D5E",
        "#AE0000",
        "#AFB645",
        "#B0924C",
        "#B49A9A",
        "#B8B8B8",
        "#BFB4A2",
        "#C16675",
        "#C327CE",
        "#D30003",
        "#D4D2BE",
        "#DAAFDD",
        "#eaea84",
        "",
        "#FFC800",
        "#FFCE3B",
        "#FFFFFF",
        "#000000",
        "#00ACDB",
        "#00FF55",
        "#030303",
        "#0A6813",
        "#1788A4",
        "#1788A5",
        "#1788A6",
        "#1788A7",
        "#1788A8",
        "#2E363D",
        "#2FCCE4",
        "#332730",
        "#394667",
        "#3A085A",
        "#3D4E88",
        "#3D4F89",
        "#44372E",
        "#4D4167",
        "#55007F",
        "#590B0B",
        "#5E3466",
        "#605A55",
        "#611A02",
        "#64876E",
        "#680A0A",
        "#687C83",
        "#688BAC",
        "#697D7F",
        "#700a0a",
        "#72774F",
        "#78E0CB",
        "#7A7AB6",
        "#7D9388",
        "#7F766D",
        "#80EEB10",
        "#80EEB11",
        "#80EEB12",
        "#80EEB13",
        "#80EEB14",
        "#80EEB15",
        "#80EEB16",
        "#80EEB17",
        "#80EEB18",
        "#80EEB7",
        "#80EEB8",
        "#80EEB9",
        "#826858",
        "#850000",
        "#858D5E",
        "#86919C",
        "#871212",
        "#873333",
        "#877C63",
        "#87A197",
        "#890A1B",
        "#8982A0",
        "#8C828B",
        "#90A18E",
        "#9377B9",
        "#939CA4",
        "#95B61D",
        "#999999",
        "#9D0000",
    ],
    "WeaponAppearanceDefinitionMaskRColor": [
        "#A08C33",
        "#A38C76",
        "#A6DCE8",
        "#B7B9A4",
        "#B8B8B8",
        "#BAA66B",
        "#baba00",
        "#C7F1F4",
        "#CA5A19",
        "#D76A6A",
        "#E0C260",
        "#eaea84",
        "#EED49D",
        "",
        "#F6D7B6",
        "#FF0004",
        "#FFC800",
        "#000000",
        "#00710D",
        "#007400",
        "#007A00",
        "#030303",
        "#046618",
        "#1278A3",
        "#1BC7C10",
        "#1BC7C11",
        "#1BC7C12",
        "#1BC7C13",
        "#1BC7C2",
        "#1BC7C3",
        "#1BC7C4",
        "#1BC7C5",
        "#1BC7C6",
        "#1BC7C7",
        "#1BC7C8",
        "#1BC7C9",
        "#234659",
        "#252525",
        "#26037F",
        "#26ACCA",
        "#27AABF",
        "#2A1A18",
        "#343536",
        "#3B3B3B",
        "#3D393A",
        "#3D4E88",
        "#3D4F89",
        "#3E7254",
        "#424637",
        "#4B5F8E",
        "#514D55",
        "#532311",
        "#540000",
        "#583B87",
        "#5A2B15",
        "#645500",
        "#647298",
        "#68540D",
        "#68540E",
        "#685D56",
        "#69550F",
        "#6C6F46",
        "#6F5A43",
        "#71538B",
        "#736862",
        "#7484B0",
        "#77568E",
        "#791618",
        "#7A6316",
        "#7A7AB6",
        "#7B8CBB",
        "#7D613C",
        "#7D7D7D",
        "#808096",
        "#826B59",
        "#82737B",
        "#83571A",
        "#860000",
        "#878787",
        "#88793A",
        "#8B7A6A",
        "#8E5E11",
        "#8F2400",
        "#90A8B8",
        "#916E91",
        "#920202",
        "#935A54",
        "#943194",
        "#9797B0",
        "#996C29",
        "#998D48",
        "#9B7D72",
        "#9B9A8E",
    ],
    "WeaponAppearanceDefinitionName": [
        "",
        "@1hSwordMedievalT5_TransmogName",
        "@2hBlunderbussMedievalT5_TransmogName",
        "@2hFireStaffMedievalT5_TransmogName",
        "@2hGreatAxeMedievalT5_TransmogName",
        "@2hGreatswordMedievalT5_TransmogName",
        "@2hSpearMedievalT5_TransmogName",
    ],
    "SkinOverride1": [
        "",
        "Objects/Weapons/Ranged/Bows/BowA/wep_ran2h_BowA_T1.skin",
        "Objects/Weapons/Ranged/Bows/BowA/wep_ran2h_BowA_T2.skin",
        "Objects/Weapons/Ranged/Bows/BowA/wep_ran2h_BowA_T3.skin",
    ],
    "WeaponAppearanceDefinitionSkinOverride2": [
        "",
        "Objects/Weapons/Ranged/Bows/BowA/wep_ran2h_BowA_T1_string.skin",
    ],
    "Appearance": [
        "Elemental_Gauntlet_T2_Ice",
        "Elemental_Gauntlet_T3_Ice",
        "Elemental_Gauntlet_T4_Ice",
        "Elemental_Gauntlet_T5_Ice",
        "",
    ],
    "AttachedSpellData": [
        "Celestial_Heal_AoE",
        "Elemental_Fire_AoE",
        "",
    ],
    "AttackGameEventID": [
        "DamageEnemyUnarmed",
        "",
        "WeaponHit1",
        "WeaponHit2",
        "WeaponHit3",
        "WeaponHit4",
        "WeaponHit5",
    ],
    "WeaponItemDefinitionAudioPickup": [
        "",
        "Play_Beep1_2D",
    ],
    "WeaponItemDefinitionAudioPlace": [
        "",
        "Play_Beep3_2D",
    ],
    "DamageStatMultiplier": [
        "BowDamage",
        "",
        "KnifeDamage",
        "OneHandAxeDamage",
        "OneHandClubDamage",
        "OneHandPickDamage",
        "OneHandSwordDamage",
        "PistolDamage",
        "RifleDamage",
        "TwoHandAxeDamage",
        "TwoHandClubDamage",
        "TwoHandPickDamage",
        "TwoHandSpearDamage",
        "TwoHandSwordDamage",
    ],
    "DamageTableRow": [
        "BowAttack1",
        "",
    ],
    "WeaponItemDefinitionEquipType": [
        "AlwaysUnsheathed_LHand",
        "AlwaysUnsheathed_RHand",
        "Bow",
        "BowmanSword",
        "Brute",
        "Drum",
        "",
        "EquippableMouth",
        "GeneralInstrument",
        "GrappleSheath",
        "Greatsword",
        "Hammer_Axe",
        "RPistol_LeftHolster",
        "RSword_LeftHolster",
        "Rifle",
        "Shield",
        "Spear",
        "Tendril",
    ],
    "FemaleAppearance": [
        "",
        "F_Elemental_Gauntlet_T2_Ice",
        "F_Elemental_Gauntlet_T3_Ice",
        "F_Elemental_Gauntlet_T4_Ice",
        "F_Elemental_Gauntlet_T5_Ice",
    ],
    "FireJoint": [
        "aim_direction",
        "arrowAttach_tip",
        "arrowAttach_tip_jnt",
        "arrowAttach_tip_jnt_jnt",
        "bind_spline_g",
        "bow_root_jnt",
        "",
        "FXattach_A",
        "handattach",
        "musketA_muzzle",
        "neck",
        "siphon_attachment_point",
        "Spear",
    ],
    "GatheringTypes": [
        "AzothFlutePlaying+MusicalPerformances",
        "AzothStaff",
        "Chopping",
        "Cutting",
        "Dressing",
        "DrumPlaying+MusicalPerformances",
        "",
        "Fishing",
        "GuitarPlaying+MusicalPerformances",
        "MandolinPlaying+MusicalPerformances",
        "Mining",
        "None",
        "UprightBassPlaying+MusicalPerformances",
    ],
    "IconPath": [
        "",
        "LoggingAxe",
        "PickAxe",
        "placeholder",
        "Sickle",
        "Skinning",
        "weapon_ironrapier",
    ],
    "ManaCostID": [
        "",
        "SpecialAttack",
    ],
    "OffHandMannequinTag": [
        "",
        "Hatchet_OH",
        "Melee_OH",
        "Pistol_OH",
        "Ranged_OH",
        "Shield_OH",
        "Shield_OH, TowerShield",
        "Sickle_OH",
        "1H_Melee, Sickle_OH",
        "Torch_OH",
    ],
    "PrimaryHand": [
        "",
        "Main",
    ],
    "PrimaryUse": [
        "Combat Melee",
        "Combat Ranged",
        "",
        "Tool",
    ],
    "ReticleName": [
        "blunderbuss",
        "bow",
        "",
        "melee",
        "pistol",
        "rifle",
        "spear",
    ],
    "ReticleTargetName": [
        "blunderbussHaveTarget",
        "bowHaveTarget",
        "",
        "meleeHaveTarget",
        "pistolHaveTarget",
        "rifleHaveTarget",
        "spearHaveTarget",
    ],
    "Weaknesses": [
        "",
        "Fire=8",
        "Magic=8",
    ],
    "RequiredAchievementID": [
        "",
        "06A_WW_whisper_01_unlock",
        "06A_WW_whisper_02_unlock",
        "06A_WW_whisper_03_unlock",
    ],
    "Subtitle": [
        "",
        "@Miners_Chandu_line1",
        "@Miners_Shazaan_line1",
        "@Miners_Tomira_line1",
    ],
    "TriggerType": [
        "GAME_EVENT",
    ],
    "VfxID": [
        "",
        "whisper_vfx_01",
        "whisper_vfx_test",
    ],
};
