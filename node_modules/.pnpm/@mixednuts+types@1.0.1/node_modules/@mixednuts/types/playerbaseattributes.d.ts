// To parse this data:
//
//   import { Convert, PlayerbaseattributesD } from "./file";
//
//   const playerbaseattributesD = Convert.toPlayerbaseattributesD(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface PlayerbaseattributesD {
    __type:                                    string;
    "player attribute data":                   PlayerAttributeData;
    "structure placement data":                StructurePlacementData;
    "structure attribute data":                StructureAttributeData;
    "gather game data":                        GatherGameData;
    "fishing data":                            FishingData;
    "faction data":                            FactionData;
    "event credit data":                       EventCreditData;
    "war data":                                WarData;
    "claim leaderboards data":                 ClaimLeaderboardsData;
    "contract data":                           ContractData;
    "war color data":                          WarColorData;
    "guild siege window region data":          GuildSiegeWindowRegionDatum[];
    "guild treasury data":                     GuildTreasuryData;
    "territory bonus data":                    TerritoryBonusDatum[];
    "remote storage item transfer fee data":   RemoteStorageItemTransferFeeData;
    "faction influence config data":           FactionInfluenceConfigData;
    "guaranteed equipped item transfer data":  GuaranteedItemTransferData;
    "guaranteed inventory item transfer data": GuaranteedItemTransferData;
    "valid group data":                        ValidGroupData;
    "taskinteract data":                       TaskinteractData;
    "daily bonus data":                        DailyBonusData;
    "progression validation achievement data": ProgressionValidationAchievementData;
    "milestone correction data":               MilestoneCorrectionData;
}

export interface ClaimLeaderboardsData {
    __type:                                       string;
    "leaderboard snapshot period length minutes": number;
    "leaderboard periods in a season":            number;
    "leaderboard snapshot regions":               LeaderboardSnapshotRegion[];
}

export interface LeaderboardSnapshotRegion {
    __type: string;
    value1: string;
    value2: LeaderboardSnapshotRegionValue2;
}

export interface LeaderboardSnapshotRegionValue2 {
    __type:                       string;
    "snapshot start time hour":   number;
    "snapshot start time minute": number;
}

export interface ContractData {
    __type:                              string;
    "base number of buy/sell contracts": number;
    "base number of other contracts":    number;
    "buy contract duration fee map":     ContractDurationFeeMap[];
    "sell contract duration fee map":    ContractDurationFeeMap[];
    "default contract duration days":    number;
    "buy contract transaction tax":      number;
    "sell contract transaction tax":     number;
}

export interface ContractDurationFeeMap {
    __type: string;
    value1: number;
    value2: BuyContractDurationFeeMapValue2;
}

export interface BuyContractDurationFeeMapValue2 {
    __type:           string;
    "flat fee":       number;
    "percentage fee": number;
}

export interface DailyBonusData {
    __type:         string;
    bonusresethour: number;
}

export interface EventCreditData {
    __type:                               string;
    "credit time limit seconds":          number;
    "credit health threshold percentage": number;
    "credit range limit meters":          number;
    "contribution type multipliers":      any[];
    "event credit modifiers":             CreditModifier[];
    "group credit modifiers":             CreditModifier[];
}

export interface CreditModifier {
    __type:                        EventCreditModifierType;
    "xp modifier":                 number;
    "loot modifier":               number;
    "currency modifier":           number;
    "territory standing modifier": number;
}

export enum EventCreditModifierType {
    CreditModifierData = "CreditModifierData",
}

export interface FactionData {
    __type:                            string;
    "sanctuary enter notification id": string;
    "sanctuary exit notification id":  string;
    "toggle pvp notification id":      string;
    "faction change cooldown seconds": number;
    "faction change cost level":       number;
    "faction change cost min":         number;
    "faction change cost max":         number;
    "faction change cost increment":   number;
    "pvp kill value per second":       number;
    "pvp kill value thresholds":       PvpKillValueThreshold[];
    "pvp kill gameeventid":            FortCaptureGameeventid;
    "fort capture gameeventid":        FortCaptureGameeventid;
    "pvp kill faction token modifier": number;
}

export interface FortCaptureGameeventid {
    __type:     FortCaptureGameeventidType;
    m_valuestr: string;
    m_valuecrc: AzothCurrencyID;
}

export enum FortCaptureGameeventidType {
    EditCRC = "EditCrc",
}

export interface AzothCurrencyID {
    __type: AzothCurrencyIDType;
    value:  number;
}

export enum AzothCurrencyIDType {
    Crc32 = "Crc32",
}

export interface PvpKillValueThreshold {
    __type:                 string;
    "kill reward modifier": FortCaptureGameeventid;
    "value threshold":      number;
}

export interface FactionInfluenceConfigData {
    __type:                             string;
    maxinfluence:                       number;
    decrementrate:                      number;
    incrementrate:                      number;
    maxincrementtimemodifier:           number;
    maxdecrementtimemodifier:           number;
    minimumtimesincelastwar:            number;
    minterritorydifftoapplyudmechanics: number;
    mintimetoapplyudmechanics:          number;
    underdogmissioninfluencegain:       number;
    underdogmissioninfluencegaincap:    number;
    uderdogfactionrepgain:              number;
    underdogfactionrepgaincap:          number;
    underdogpvpinfluencegain:           number;
    underdogpvpinfluencegaincap:        number;
    minimuminfluencethresholdforwar:    number;
}

export interface FishingData {
    __type:                                      string;
    "fish catch game event":                     string;
    "fish hook game event":                      string;
    "fish catch durability loss":                number;
    "fish loss durability loss":                 number;
    "line break durability loss":                number;
    "bait loss chance cast hit land":            number;
    "bait loss chance hook miss":                number;
    "bait loss chance reeling miss distance":    number;
    "bait loss chance reeling miss tension":     number;
    "bait loss chance fish caught":              number;
    "min reel path distance":                    number;
    "bite window open duration seconds":         number;
    "fish behavior time block duration seconds": number;
    "fish fighting line tension multiplier":     number;
    "fish fighting reel in multiplier":          number;
    "fish fighting swim away multiplier":        number;
    "fish tired line tension multiplier":        number;
    "fish tired reel in multiplier":             number;
    "fish tired swim away multiplier":           number;
}

export interface GatherGameData {
    __type:                            string;
    "perfect hit time amount to take": number;
    "average hit time amount to take": number;
}

export interface GuaranteedItemTransferData {
    __type:       string;
    itemname:     string;
    itemquantity: number;
}

export interface GuildSiegeWindowRegionDatum {
    __type: string;
    value1: string;
    value2: GuildSiegeWindowRegionDatumValue2;
}

export interface GuildSiegeWindowRegionDatumValue2 {
    __type:       string;
    "start hour": number;
    "end hour":   number;
    utcoffset:    number;
    dstruleid:    AzothCurrencyID;
    dstrule:      string;
    observesdst:  boolean;
}

export interface GuildTreasuryData {
    __type:                           string;
    "default daily withdrawal limit": number;
}

export interface MilestoneCorrectionData {
    __type:                  string;
    currentmilestoneversion: number;
    milestonecorrections:    Milestonecorrection[];
}

export interface Milestonecorrection {
    __type:               string;
    milestoneachievement: FortCaptureGameeventid;
    milestoneplayerlevel: number;
    invalidterritories:   number[];
    relocationterritory:  number;
}

export interface PlayerAttributeData {
    __type:                                                                     string;
    "base amount to apply":                                                     number;
    "base apply rate":                                                          number;
    "structure rotation amount ( deg )":                                        number;
    "base gather durability cost":                                              number;
    "repair max durability cost":                                               number;
    "one handed gathering distance":                                            number;
    "two handed gathering distance":                                            number;
    "stamina cost entry":                                                       string;
    "post-ftue achievement id unlocks":                                         string[];
    "camping achievement id":                                                   CampingAchievementID[];
    "salvage gold tier modifiers":                                              number[];
    "salvage min percent":                                                      number;
    "salvage max percent":                                                      number;
    "chance of salvage success":                                                number;
    "minimum salvage quantity":                                                 number;
    "salvage dust modifier":                                                    number;
    "repair resource modifier":                                                 number;
    "user camera min sensitivity":                                              number;
    "user camera max sensitivity":                                              number;
    "base deployable limit":                                                    number;
    "player age display string":                                                string;
    "encumbrance immobilization modifier":                                      number;
    "encumbrance max limit modifier":                                           number;
    "max camp respawn distance meters":                                         number;
    "pvp camp respawn cooldown seconds":                                        number;
    "pvp respawn extend per death seconds":                                     number;
    "max pvp respawn extend deaths":                                            number;
    "pvp death extend timeout seconds":                                         number;
    "player display level unlock free gear sets":                               number;
    "max instanced loot chest count":                                           number;
    "max instanced slayerscript state count":                                   number;
    "instanced loot chest reset time mins":                                     number;
    "instanced slayerscript state reset time mins":                             number;
    "instanced ai loot clear time mins":                                        number;
    "max ai loot receiver count":                                               number;
    "min level roll perks":                                                     number;
    "min level roll gem slot":                                                  number;
    "drop probability falloff":                                                 number;
    "drop probability min":                                                     number;
    "poi level loot tag":                                                       FortCaptureGameeventid;
    "min content level loot tag":                                               FortCaptureGameeventid;
    "level loot tag":                                                           FortCaptureGameeventid;
    "enemy level loot tag":                                                     FortCaptureGameeventid;
    "min poi content level loot tag":                                           FortCaptureGameeventid;
    "min enemy content level loot tag":                                         FortCaptureGameeventid;
    "global mod loot tag":                                                      FortCaptureGameeventid;
    "fishing fresh water loot tag":                                             FortCaptureGameeventid;
    "fishing salt water loot tag":                                              FortCaptureGameeventid;
    "fish size loot tag":                                                       FortCaptureGameeventid;
    "fish rarity loot tag":                                                     FortCaptureGameeventid;
    "summer fish rarity loot tag":                                              FortCaptureGameeventid;
    "equipped item loot tag":                                                   FortCaptureGameeventid;
    "loot table diverted loot tag":                                             FortCaptureGameeventid;
    "salvage item rarity loot tag":                                             FortCaptureGameeventid;
    "salvage item tier loot tag":                                               FortCaptureGameeventid;
    "salvage item gear score loot tag":                                         FortCaptureGameeventid;
    "azoth currency":                                                           string;
    "azoth currency id":                                                        AzothCurrencyID;
    "kill game event id":                                                       FortCaptureGameeventid;
    "broken item efficiency data":                                              AbilityPointRowRequirement[];
    "categorical progression rankup game event id":                             FortCaptureGameeventid;
    "dynamic poi objective itemids":                                            FortCaptureGameeventid[];
    "dynamic poi objective reward modifier ids":                                FortCaptureGameeventid[];
    "dynamic poi objective gameeventid":                                        FortCaptureGameeventid;
    "objective gameeventid":                                                    FortCaptureGameeventid;
    "durability repair cost data":                                              AbilityPointRowRequirement[];
    "durability to coin rate":                                                  number;
    "inventory durability loss ratio":                                          number;
    "pvp paperdoll durability loss multiplier":                                 number;
    "pvp inventory durability loss multiplier":                                 number;
    "chat max message size":                                                    number;
    "min armor mitigation":                                                     number;
    "max armor mitigation":                                                     number;
    "physical armor scale factor":                                              number;
    "elemental armor scale factor":                                             number;
    "armor set rating exponent":                                                number;
    "armor mitigation exponent":                                                number;
    "armor rating decimal accuracy":                                            number;
    "base damage compound increase":                                            number;
    "compound increase diminishing multiplier":                                 number;
    "base damage gear score interval":                                          number;
    "min possible weapon gear score":                                           number;
    "diminishing gear score threshold":                                         number;
    "round gearscore up?":                                                      boolean;
    "gear score rounding interval":                                             number;
    "item rarity data":                                                         ItemRarityDatum[];
    "perk generation data":                                                     PerkGenerationData;
    "perk chance modifier":                                                     number;
    "attribute chance modifier":                                                number;
    "gem slot chance modifier":                                                 number;
    "perk chance itemid":                                                       string;
    "rested exp percentage per hour":                                           number;
    "rested exp max percentage":                                                number;
    "rested exp modifier":                                                      number;
    "rested exp threshold hours":                                               number;
    "minimum ai level for territory standing":                                  number;
    "base xp value for finding lore":                                           number;
    "number of entries that need to be discovered to advance to the next step": number;
    "the amount of xp gained per step":                                         number;
    "max points per attribute":                                                 number;
    "level damage multiplier":                                                  number;
    "paperdoll slot unlocks by level":                                          AbilityPointRowRequirement[];
    "gear set storage excluded paperdoll slots":                                number[];
    "ability point row requirements":                                           AbilityPointRowRequirement[];
    "status effect category limits":                                            StatusEffectCategoryLimit;
    "status effect category limit crcs":                                        StatusEffectCategoryLimit;
    propertytaxratemin:                                                         number;
    propertytaxratemax:                                                         number;
    tradingtaxratemin:                                                          number;
    tradingtaxratemax:                                                          number;
    craftingfeeratemin:                                                         number;
    craftingfeeratemax:                                                         number;
    refiningfeeratemin:                                                         number;
    refiningfeeratemax:                                                         number;
    settaxorfeecooldowninmin:                                                   number;
    controllingcompanytaxmodifier:                                              number;
    controllingcompanyhousecostmodifier:                                        number;
    controllingfactionluckmodifier:                                             number;
    controllingfactiongathermodifier:                                           number;
    alwaysavailabletownprojectid:                                               FortCaptureGameeventid;
    allprojectpoolid:                                                           FortCaptureGameeventid;
    "blocking threat mulitplier":                                               number;
    "final starting beach achievement":                                         FortCaptureGameeventid;
    "first house flat discount":                                                number;
}

export interface AbilityPointRowRequirement {
    __type: string;
    value1: number;
    value2: number;
}

export interface CampingAchievementID {
    __type:         string;
    "blueprint id": FortCaptureGameeventid;
    "effect id":    FortCaptureGameeventid;
}

export interface ItemRarityDatum {
    __type:                       string;
    "rarity level loc string":    string;
    "max perk count":             number;
    "level requirement modifier": number;
}

export interface PerkGenerationData {
    __type:                            string;
    "perk data per tier":              PerkDataPerTier[];
    "crafting result loot bucket id":  AzothCurrencyID;
    "crafting result loot bucket":     string;
    "roll perk on upgrade gs":         number;
    "roll perk on upgrade tier":       number;
    "roll perk on upgrade perk count": number;
}

export interface PerkDataPerTier {
    __type:                           string;
    "max perk channel":               number;
    "gem slot probability":           number;
    "attribute perk probability":     number;
    "general gear score perk count":  number[];
    "crafting gear score perk count": number[];
    "attribute perk bucket":          string;
    "attribute perk bucket id":       AzothCurrencyID;
}

export interface StatusEffectCategoryLimit {
    __type: string;
}

export interface ProgressionValidationAchievementData {
    __type:                           string;
    azothstaffachievements:           string[];
    azothstaffitemids:                FortCaptureGameeventid[];
    heartgemslotachievements:         FortCaptureGameeventid[];
    syndicaterankuptrialachievements: string[];
    marauderrankuptrialachievements:  string[];
    covenantrankuptrialachievements:  string[];
    syndicaterankupobjectiveids:      FortCaptureGameeventid[];
    marauderrankupobjectiveids:       FortCaptureGameeventid[];
    covenantrankupobjectiveids:       FortCaptureGameeventid[];
    syndicatesliceswapachievementid:  FortCaptureGameeventid;
    maraudersliceswapachievementid:   FortCaptureGameeventid;
    covenantsliceswapachievementid:   FortCaptureGameeventid;
    campingrankupachievements:        string[];
}

export interface RemoteStorageItemTransferFeeData {
    __type:                        string;
    "item tier base fees":         number[];
    "item type fee multipliers":   ItemTypeFeeMultiplier[];
    "distance interval meters":    number;
    "fee multiplier per interval": number;
}

export interface ItemTypeFeeMultiplier {
    __type:                      string;
    "item tier base fees":       number;
    "item type fee multipliers": number;
}

export interface StructureAttributeData {
    __type:                  string;
    "demolish min percent":  number;
    "demolish max percent":  number;
    "demolish min quantity": number;
}

export interface StructurePlacementData {
    __type:                                                string;
    "grid box size":                                       number;
    "grid box height":                                     number;
    "is placing sticky factor":                            number;
    "is placed sticky factor":                             number;
    "min build distance from player":                      number;
    "max build distance from player":                      number;
    "min build pitch percent":                             number;
    "max build pitch percent":                             number;
    "max build vertical distance from player":             number;
    "placement obstruction update frequency time in secs": number;
    "placing settings":                                    Settings;
    "snapped to settings":                                 Settings;
    "snap point mesh file name":                           IntMeshFileName;
    "grid footprint mesh file name":                       IntMeshFileName;
    "valid placement material file name":                  MaterialFileName;
    "invalid placement material file name":                MaterialFileName;
    "completion blocked material file name":               MaterialFileName;
    "snap valid placement material file name":             MaterialFileName;
    "snap invalid placement material file name":           MaterialFileName;
    "snap completion blocked material file name":          MaterialFileName;
    "placement obstruction filter":                        string;
    "completion obstruction filter":                       string;
    "los obstruction filter":                              string;
    "los box height":                                      number;
    "los box width":                                       number;
}

export interface MaterialFileName {
    __type:     string;
    baseclass1: Baseclass1;
}

export interface Baseclass1 {
    __type:    string;
    assetpath: string;
}

export interface IntMeshFileName {
    __type: string;
    guid:   string;
    subId:  string;
    type:   string;
    hint:   string;
}

export interface Settings {
    __type:                        string;
    m_aboveminpointvalidthreshold: number;
    m_belowminpointvalidthreshold: number;
}

export interface TaskinteractData {
    __type:                         string;
    interacttagentries:             Interacttagentry[];
    destinationoverrideinteracttag: string;
}

export interface Interacttagentry {
    __type:          InteracttagentryType;
    "interact tag":  string;
    "landmark type": number;
    "landmark data": string[];
}

export enum InteracttagentryType {
    TaskInteractEntryData = "TaskInteractEntryData",
}

export interface TerritoryBonusDatum {
    __type:                 TerritoryBonusDatumType;
    "territory bonus id":   number;
    "progression point id": string;
    "initial bonus":        number;
    "reduction modifier":   number;
    "min value":            number;
}

export enum TerritoryBonusDatumType {
    TerritoryEntryData = "TerritoryEntryData",
}

export interface ValidGroupData {
    __type:     string;
    names:      any[];
    objectives: any[];
    iconpaths:  string[];
    colors:     Color[];
}

export interface Color {
    __type:  ColorType;
    __value: number[];
}

export enum ColorType {
    Color = "Color",
}

export interface WarColorData {
    __type:           string;
    "war colors map": WarColorsMap[];
}

export interface WarColorsMap {
    __type: string;
    value1: number;
    value2: Color;
}

export interface WarData {
    __type:                                string;
    "war cost":                            number[];
    "war extension cost modifier":         number;
    "war extension max cost percentage":   number;
    "prewar duration minutes":             number;
    "conquest window duration minutes":    number;
    "war duration minutes":                number;
    "conquest duration minutes":           number;
    "resolution duration minutes":         number;
    "resolution phase buffer minutes":     number;
    "claim lock duration minutes":         number;
    "siege window cooldown minutes":       number;
    "attacker war count modifier":         number;
    "defender war count modifier":         number;
    "counter attack discount":             number;
    "siege window rounding hours":         number;
    "base upkeep war declaration penalty": number;
    "destroyed claim ends war":            boolean;
    "larger guild multiplier":             number;
    "member war modifier map":             any[];
    "require defender territory":          boolean;
    "attacker buildable team limits":      number[];
    "reset effect categories":             string[];
    "reset effect categories crc":         AzothCurrencyID[];
    "post siege status effects":           string[];
    "post siege status effects crc":       AzothCurrencyID[];
    "deployable limits editable":          DeployableLimitsEditable[];
    "deployable limits":                   DeployableLimit[];
}

export interface DeployableLimit {
    __type: string;
    value1: AzothCurrencyID;
    value2: DeployableLimitValue2;
}

export interface DeployableLimitValue2 {
    __type:           string;
    m_id:             AzothCurrencyID;
    m_displayname:    string;
    m_buildablenames: string[];
    m_buildableids:   AzothCurrencyID[];
    m_attackerlimits: number[];
    m_defenderlimit:  number;
}

export interface DeployableLimitsEditable {
    __type: string;
    value1: string;
    value2: DeployableLimitValue2;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toPlayerbaseattributesD(json: string): PlayerbaseattributesD {
        return cast(JSON.parse(json), r("PlayerbaseattributesD"));
    }

    public static playerbaseattributesDToJson(value: PlayerbaseattributesD): string {
        return JSON.stringify(uncast(value, r("PlayerbaseattributesD")), null, 2);
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
    "PlayerbaseattributesD": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "player attribute data", js: "player attribute data", typ: r("PlayerAttributeData") },
        { json: "structure placement data", js: "structure placement data", typ: r("StructurePlacementData") },
        { json: "structure attribute data", js: "structure attribute data", typ: r("StructureAttributeData") },
        { json: "gather game data", js: "gather game data", typ: r("GatherGameData") },
        { json: "fishing data", js: "fishing data", typ: r("FishingData") },
        { json: "faction data", js: "faction data", typ: r("FactionData") },
        { json: "event credit data", js: "event credit data", typ: r("EventCreditData") },
        { json: "war data", js: "war data", typ: r("WarData") },
        { json: "claim leaderboards data", js: "claim leaderboards data", typ: r("ClaimLeaderboardsData") },
        { json: "contract data", js: "contract data", typ: r("ContractData") },
        { json: "war color data", js: "war color data", typ: r("WarColorData") },
        { json: "guild siege window region data", js: "guild siege window region data", typ: a(r("GuildSiegeWindowRegionDatum")) },
        { json: "guild treasury data", js: "guild treasury data", typ: r("GuildTreasuryData") },
        { json: "territory bonus data", js: "territory bonus data", typ: a(r("TerritoryBonusDatum")) },
        { json: "remote storage item transfer fee data", js: "remote storage item transfer fee data", typ: r("RemoteStorageItemTransferFeeData") },
        { json: "faction influence config data", js: "faction influence config data", typ: r("FactionInfluenceConfigData") },
        { json: "guaranteed equipped item transfer data", js: "guaranteed equipped item transfer data", typ: r("GuaranteedItemTransferData") },
        { json: "guaranteed inventory item transfer data", js: "guaranteed inventory item transfer data", typ: r("GuaranteedItemTransferData") },
        { json: "valid group data", js: "valid group data", typ: r("ValidGroupData") },
        { json: "taskinteract data", js: "taskinteract data", typ: r("TaskinteractData") },
        { json: "daily bonus data", js: "daily bonus data", typ: r("DailyBonusData") },
        { json: "progression validation achievement data", js: "progression validation achievement data", typ: r("ProgressionValidationAchievementData") },
        { json: "milestone correction data", js: "milestone correction data", typ: r("MilestoneCorrectionData") },
    ], false),
    "ClaimLeaderboardsData": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "leaderboard snapshot period length minutes", js: "leaderboard snapshot period length minutes", typ: 0 },
        { json: "leaderboard periods in a season", js: "leaderboard periods in a season", typ: 0 },
        { json: "leaderboard snapshot regions", js: "leaderboard snapshot regions", typ: a(r("LeaderboardSnapshotRegion")) },
    ], false),
    "LeaderboardSnapshotRegion": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "value1", js: "value1", typ: "" },
        { json: "value2", js: "value2", typ: r("LeaderboardSnapshotRegionValue2") },
    ], false),
    "LeaderboardSnapshotRegionValue2": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "snapshot start time hour", js: "snapshot start time hour", typ: 0 },
        { json: "snapshot start time minute", js: "snapshot start time minute", typ: 0 },
    ], false),
    "ContractData": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "base number of buy/sell contracts", js: "base number of buy/sell contracts", typ: 0 },
        { json: "base number of other contracts", js: "base number of other contracts", typ: 0 },
        { json: "buy contract duration fee map", js: "buy contract duration fee map", typ: a(r("ContractDurationFeeMap")) },
        { json: "sell contract duration fee map", js: "sell contract duration fee map", typ: a(r("ContractDurationFeeMap")) },
        { json: "default contract duration days", js: "default contract duration days", typ: 0 },
        { json: "buy contract transaction tax", js: "buy contract transaction tax", typ: 3.14 },
        { json: "sell contract transaction tax", js: "sell contract transaction tax", typ: 3.14 },
    ], false),
    "ContractDurationFeeMap": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "value1", js: "value1", typ: 0 },
        { json: "value2", js: "value2", typ: r("BuyContractDurationFeeMapValue2") },
    ], false),
    "BuyContractDurationFeeMapValue2": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "flat fee", js: "flat fee", typ: 0 },
        { json: "percentage fee", js: "percentage fee", typ: 3.14 },
    ], false),
    "DailyBonusData": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "bonusresethour", js: "bonusresethour", typ: 0 },
    ], false),
    "EventCreditData": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "credit time limit seconds", js: "credit time limit seconds", typ: 0 },
        { json: "credit health threshold percentage", js: "credit health threshold percentage", typ: 3.14 },
        { json: "credit range limit meters", js: "credit range limit meters", typ: 0 },
        { json: "contribution type multipliers", js: "contribution type multipliers", typ: a("any") },
        { json: "event credit modifiers", js: "event credit modifiers", typ: a(r("CreditModifier")) },
        { json: "group credit modifiers", js: "group credit modifiers", typ: a(r("CreditModifier")) },
    ], false),
    "CreditModifier": o([
        { json: "__type", js: "__type", typ: r("EventCreditModifierType") },
        { json: "xp modifier", js: "xp modifier", typ: 3.14 },
        { json: "loot modifier", js: "loot modifier", typ: 0 },
        { json: "currency modifier", js: "currency modifier", typ: 3.14 },
        { json: "territory standing modifier", js: "territory standing modifier", typ: 3.14 },
    ], false),
    "FactionData": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "sanctuary enter notification id", js: "sanctuary enter notification id", typ: "" },
        { json: "sanctuary exit notification id", js: "sanctuary exit notification id", typ: "" },
        { json: "toggle pvp notification id", js: "toggle pvp notification id", typ: "" },
        { json: "faction change cooldown seconds", js: "faction change cooldown seconds", typ: 0 },
        { json: "faction change cost level", js: "faction change cost level", typ: 0 },
        { json: "faction change cost min", js: "faction change cost min", typ: 0 },
        { json: "faction change cost max", js: "faction change cost max", typ: 0 },
        { json: "faction change cost increment", js: "faction change cost increment", typ: 0 },
        { json: "pvp kill value per second", js: "pvp kill value per second", typ: 3.14 },
        { json: "pvp kill value thresholds", js: "pvp kill value thresholds", typ: a(r("PvpKillValueThreshold")) },
        { json: "pvp kill gameeventid", js: "pvp kill gameeventid", typ: r("FortCaptureGameeventid") },
        { json: "fort capture gameeventid", js: "fort capture gameeventid", typ: r("FortCaptureGameeventid") },
        { json: "pvp kill faction token modifier", js: "pvp kill faction token modifier", typ: 3.14 },
    ], false),
    "FortCaptureGameeventid": o([
        { json: "__type", js: "__type", typ: r("FortCaptureGameeventidType") },
        { json: "m_valuestr", js: "m_valuestr", typ: "" },
        { json: "m_valuecrc", js: "m_valuecrc", typ: r("AzothCurrencyID") },
    ], false),
    "AzothCurrencyID": o([
        { json: "__type", js: "__type", typ: r("AzothCurrencyIDType") },
        { json: "value", js: "value", typ: 0 },
    ], false),
    "PvpKillValueThreshold": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "kill reward modifier", js: "kill reward modifier", typ: r("FortCaptureGameeventid") },
        { json: "value threshold", js: "value threshold", typ: 0 },
    ], false),
    "FactionInfluenceConfigData": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "maxinfluence", js: "maxinfluence", typ: 0 },
        { json: "decrementrate", js: "decrementrate", typ: 0 },
        { json: "incrementrate", js: "incrementrate", typ: 3.14 },
        { json: "maxincrementtimemodifier", js: "maxincrementtimemodifier", typ: 3.14 },
        { json: "maxdecrementtimemodifier", js: "maxdecrementtimemodifier", typ: 3.14 },
        { json: "minimumtimesincelastwar", js: "minimumtimesincelastwar", typ: 0 },
        { json: "minterritorydifftoapplyudmechanics", js: "minterritorydifftoapplyudmechanics", typ: 0 },
        { json: "mintimetoapplyudmechanics", js: "mintimetoapplyudmechanics", typ: 0 },
        { json: "underdogmissioninfluencegain", js: "underdogmissioninfluencegain", typ: 3.14 },
        { json: "underdogmissioninfluencegaincap", js: "underdogmissioninfluencegaincap", typ: 3.14 },
        { json: "uderdogfactionrepgain", js: "uderdogfactionrepgain", typ: 0 },
        { json: "underdogfactionrepgaincap", js: "underdogfactionrepgaincap", typ: 0 },
        { json: "underdogpvpinfluencegain", js: "underdogpvpinfluencegain", typ: 3.14 },
        { json: "underdogpvpinfluencegaincap", js: "underdogpvpinfluencegaincap", typ: 3.14 },
        { json: "minimuminfluencethresholdforwar", js: "minimuminfluencethresholdforwar", typ: 3.14 },
    ], false),
    "FishingData": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "fish catch game event", js: "fish catch game event", typ: "" },
        { json: "fish hook game event", js: "fish hook game event", typ: "" },
        { json: "fish catch durability loss", js: "fish catch durability loss", typ: 0 },
        { json: "fish loss durability loss", js: "fish loss durability loss", typ: 0 },
        { json: "line break durability loss", js: "line break durability loss", typ: 0 },
        { json: "bait loss chance cast hit land", js: "bait loss chance cast hit land", typ: 0 },
        { json: "bait loss chance hook miss", js: "bait loss chance hook miss", typ: 3.14 },
        { json: "bait loss chance reeling miss distance", js: "bait loss chance reeling miss distance", typ: 0 },
        { json: "bait loss chance reeling miss tension", js: "bait loss chance reeling miss tension", typ: 0 },
        { json: "bait loss chance fish caught", js: "bait loss chance fish caught", typ: 3.14 },
        { json: "min reel path distance", js: "min reel path distance", typ: 0 },
        { json: "bite window open duration seconds", js: "bite window open duration seconds", typ: 0 },
        { json: "fish behavior time block duration seconds", js: "fish behavior time block duration seconds", typ: 0 },
        { json: "fish fighting line tension multiplier", js: "fish fighting line tension multiplier", typ: 3.14 },
        { json: "fish fighting reel in multiplier", js: "fish fighting reel in multiplier", typ: 3.14 },
        { json: "fish fighting swim away multiplier", js: "fish fighting swim away multiplier", typ: 3.14 },
        { json: "fish tired line tension multiplier", js: "fish tired line tension multiplier", typ: 0 },
        { json: "fish tired reel in multiplier", js: "fish tired reel in multiplier", typ: 0 },
        { json: "fish tired swim away multiplier", js: "fish tired swim away multiplier", typ: 0 },
    ], false),
    "GatherGameData": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "perfect hit time amount to take", js: "perfect hit time amount to take", typ: 3.14 },
        { json: "average hit time amount to take", js: "average hit time amount to take", typ: 3.14 },
    ], false),
    "GuaranteedItemTransferData": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "itemname", js: "itemname", typ: "" },
        { json: "itemquantity", js: "itemquantity", typ: 0 },
    ], false),
    "GuildSiegeWindowRegionDatum": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "value1", js: "value1", typ: "" },
        { json: "value2", js: "value2", typ: r("GuildSiegeWindowRegionDatumValue2") },
    ], false),
    "GuildSiegeWindowRegionDatumValue2": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "start hour", js: "start hour", typ: 0 },
        { json: "end hour", js: "end hour", typ: 0 },
        { json: "utcoffset", js: "utcoffset", typ: 0 },
        { json: "dstruleid", js: "dstruleid", typ: r("AzothCurrencyID") },
        { json: "dstrule", js: "dstrule", typ: "" },
        { json: "observesdst", js: "observesdst", typ: true },
    ], false),
    "GuildTreasuryData": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "default daily withdrawal limit", js: "default daily withdrawal limit", typ: 0 },
    ], false),
    "MilestoneCorrectionData": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "currentmilestoneversion", js: "currentmilestoneversion", typ: 0 },
        { json: "milestonecorrections", js: "milestonecorrections", typ: a(r("Milestonecorrection")) },
    ], false),
    "Milestonecorrection": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "milestoneachievement", js: "milestoneachievement", typ: r("FortCaptureGameeventid") },
        { json: "milestoneplayerlevel", js: "milestoneplayerlevel", typ: 0 },
        { json: "invalidterritories", js: "invalidterritories", typ: a(0) },
        { json: "relocationterritory", js: "relocationterritory", typ: 0 },
    ], false),
    "PlayerAttributeData": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "base amount to apply", js: "base amount to apply", typ: 0 },
        { json: "base apply rate", js: "base apply rate", typ: 3.14 },
        { json: "structure rotation amount ( deg )", js: "structure rotation amount ( deg )", typ: 0 },
        { json: "base gather durability cost", js: "base gather durability cost", typ: 0 },
        { json: "repair max durability cost", js: "repair max durability cost", typ: 0 },
        { json: "one handed gathering distance", js: "one handed gathering distance", typ: 3.14 },
        { json: "two handed gathering distance", js: "two handed gathering distance", typ: 3.14 },
        { json: "stamina cost entry", js: "stamina cost entry", typ: "" },
        { json: "post-ftue achievement id unlocks", js: "post-ftue achievement id unlocks", typ: a("") },
        { json: "camping achievement id", js: "camping achievement id", typ: a(r("CampingAchievementID")) },
        { json: "salvage gold tier modifiers", js: "salvage gold tier modifiers", typ: a(0) },
        { json: "salvage min percent", js: "salvage min percent", typ: 3.14 },
        { json: "salvage max percent", js: "salvage max percent", typ: 3.14 },
        { json: "chance of salvage success", js: "chance of salvage success", typ: 0 },
        { json: "minimum salvage quantity", js: "minimum salvage quantity", typ: 0 },
        { json: "salvage dust modifier", js: "salvage dust modifier", typ: 3.14 },
        { json: "repair resource modifier", js: "repair resource modifier", typ: 3.14 },
        { json: "user camera min sensitivity", js: "user camera min sensitivity", typ: 0 },
        { json: "user camera max sensitivity", js: "user camera max sensitivity", typ: 0 },
        { json: "base deployable limit", js: "base deployable limit", typ: 0 },
        { json: "player age display string", js: "player age display string", typ: "" },
        { json: "encumbrance immobilization modifier", js: "encumbrance immobilization modifier", typ: 3.14 },
        { json: "encumbrance max limit modifier", js: "encumbrance max limit modifier", typ: 0 },
        { json: "max camp respawn distance meters", js: "max camp respawn distance meters", typ: 0 },
        { json: "pvp camp respawn cooldown seconds", js: "pvp camp respawn cooldown seconds", typ: 0 },
        { json: "pvp respawn extend per death seconds", js: "pvp respawn extend per death seconds", typ: 0 },
        { json: "max pvp respawn extend deaths", js: "max pvp respawn extend deaths", typ: 0 },
        { json: "pvp death extend timeout seconds", js: "pvp death extend timeout seconds", typ: 0 },
        { json: "player display level unlock free gear sets", js: "player display level unlock free gear sets", typ: 0 },
        { json: "max instanced loot chest count", js: "max instanced loot chest count", typ: 0 },
        { json: "max instanced slayerscript state count", js: "max instanced slayerscript state count", typ: 0 },
        { json: "instanced loot chest reset time mins", js: "instanced loot chest reset time mins", typ: 0 },
        { json: "instanced slayerscript state reset time mins", js: "instanced slayerscript state reset time mins", typ: 0 },
        { json: "instanced ai loot clear time mins", js: "instanced ai loot clear time mins", typ: 0 },
        { json: "max ai loot receiver count", js: "max ai loot receiver count", typ: 0 },
        { json: "min level roll perks", js: "min level roll perks", typ: 0 },
        { json: "min level roll gem slot", js: "min level roll gem slot", typ: 0 },
        { json: "drop probability falloff", js: "drop probability falloff", typ: 0 },
        { json: "drop probability min", js: "drop probability min", typ: 3.14 },
        { json: "poi level loot tag", js: "poi level loot tag", typ: r("FortCaptureGameeventid") },
        { json: "min content level loot tag", js: "min content level loot tag", typ: r("FortCaptureGameeventid") },
        { json: "level loot tag", js: "level loot tag", typ: r("FortCaptureGameeventid") },
        { json: "enemy level loot tag", js: "enemy level loot tag", typ: r("FortCaptureGameeventid") },
        { json: "min poi content level loot tag", js: "min poi content level loot tag", typ: r("FortCaptureGameeventid") },
        { json: "min enemy content level loot tag", js: "min enemy content level loot tag", typ: r("FortCaptureGameeventid") },
        { json: "global mod loot tag", js: "global mod loot tag", typ: r("FortCaptureGameeventid") },
        { json: "fishing fresh water loot tag", js: "fishing fresh water loot tag", typ: r("FortCaptureGameeventid") },
        { json: "fishing salt water loot tag", js: "fishing salt water loot tag", typ: r("FortCaptureGameeventid") },
        { json: "fish size loot tag", js: "fish size loot tag", typ: r("FortCaptureGameeventid") },
        { json: "fish rarity loot tag", js: "fish rarity loot tag", typ: r("FortCaptureGameeventid") },
        { json: "summer fish rarity loot tag", js: "summer fish rarity loot tag", typ: r("FortCaptureGameeventid") },
        { json: "equipped item loot tag", js: "equipped item loot tag", typ: r("FortCaptureGameeventid") },
        { json: "loot table diverted loot tag", js: "loot table diverted loot tag", typ: r("FortCaptureGameeventid") },
        { json: "salvage item rarity loot tag", js: "salvage item rarity loot tag", typ: r("FortCaptureGameeventid") },
        { json: "salvage item tier loot tag", js: "salvage item tier loot tag", typ: r("FortCaptureGameeventid") },
        { json: "salvage item gear score loot tag", js: "salvage item gear score loot tag", typ: r("FortCaptureGameeventid") },
        { json: "azoth currency", js: "azoth currency", typ: "" },
        { json: "azoth currency id", js: "azoth currency id", typ: r("AzothCurrencyID") },
        { json: "kill game event id", js: "kill game event id", typ: r("FortCaptureGameeventid") },
        { json: "broken item efficiency data", js: "broken item efficiency data", typ: a(r("AbilityPointRowRequirement")) },
        { json: "categorical progression rankup game event id", js: "categorical progression rankup game event id", typ: r("FortCaptureGameeventid") },
        { json: "dynamic poi objective itemids", js: "dynamic poi objective itemids", typ: a(r("FortCaptureGameeventid")) },
        { json: "dynamic poi objective reward modifier ids", js: "dynamic poi objective reward modifier ids", typ: a(r("FortCaptureGameeventid")) },
        { json: "dynamic poi objective gameeventid", js: "dynamic poi objective gameeventid", typ: r("FortCaptureGameeventid") },
        { json: "objective gameeventid", js: "objective gameeventid", typ: r("FortCaptureGameeventid") },
        { json: "durability repair cost data", js: "durability repair cost data", typ: a(r("AbilityPointRowRequirement")) },
        { json: "durability to coin rate", js: "durability to coin rate", typ: 3.14 },
        { json: "inventory durability loss ratio", js: "inventory durability loss ratio", typ: 0 },
        { json: "pvp paperdoll durability loss multiplier", js: "pvp paperdoll durability loss multiplier", typ: 3.14 },
        { json: "pvp inventory durability loss multiplier", js: "pvp inventory durability loss multiplier", typ: 3.14 },
        { json: "chat max message size", js: "chat max message size", typ: 0 },
        { json: "min armor mitigation", js: "min armor mitigation", typ: 0 },
        { json: "max armor mitigation", js: "max armor mitigation", typ: 0 },
        { json: "physical armor scale factor", js: "physical armor scale factor", typ: 0 },
        { json: "elemental armor scale factor", js: "elemental armor scale factor", typ: 0 },
        { json: "armor set rating exponent", js: "armor set rating exponent", typ: 3.14 },
        { json: "armor mitigation exponent", js: "armor mitigation exponent", typ: 3.14 },
        { json: "armor rating decimal accuracy", js: "armor rating decimal accuracy", typ: 0 },
        { json: "base damage compound increase", js: "base damage compound increase", typ: 3.14 },
        { json: "compound increase diminishing multiplier", js: "compound increase diminishing multiplier", typ: 3.14 },
        { json: "base damage gear score interval", js: "base damage gear score interval", typ: 0 },
        { json: "min possible weapon gear score", js: "min possible weapon gear score", typ: 0 },
        { json: "diminishing gear score threshold", js: "diminishing gear score threshold", typ: 0 },
        { json: "round gearscore up?", js: "round gearscore up?", typ: true },
        { json: "gear score rounding interval", js: "gear score rounding interval", typ: 0 },
        { json: "item rarity data", js: "item rarity data", typ: a(r("ItemRarityDatum")) },
        { json: "perk generation data", js: "perk generation data", typ: r("PerkGenerationData") },
        { json: "perk chance modifier", js: "perk chance modifier", typ: 0 },
        { json: "attribute chance modifier", js: "attribute chance modifier", typ: 0 },
        { json: "gem slot chance modifier", js: "gem slot chance modifier", typ: 0 },
        { json: "perk chance itemid", js: "perk chance itemid", typ: "" },
        { json: "rested exp percentage per hour", js: "rested exp percentage per hour", typ: 3.14 },
        { json: "rested exp max percentage", js: "rested exp max percentage", typ: 3.14 },
        { json: "rested exp modifier", js: "rested exp modifier", typ: 0 },
        { json: "rested exp threshold hours", js: "rested exp threshold hours", typ: 0 },
        { json: "minimum ai level for territory standing", js: "minimum ai level for territory standing", typ: 0 },
        { json: "base xp value for finding lore", js: "base xp value for finding lore", typ: 0 },
        { json: "number of entries that need to be discovered to advance to the next step", js: "number of entries that need to be discovered to advance to the next step", typ: 0 },
        { json: "the amount of xp gained per step", js: "the amount of xp gained per step", typ: 0 },
        { json: "max points per attribute", js: "max points per attribute", typ: 0 },
        { json: "level damage multiplier", js: "level damage multiplier", typ: 3.14 },
        { json: "paperdoll slot unlocks by level", js: "paperdoll slot unlocks by level", typ: a(r("AbilityPointRowRequirement")) },
        { json: "gear set storage excluded paperdoll slots", js: "gear set storage excluded paperdoll slots", typ: a(0) },
        { json: "ability point row requirements", js: "ability point row requirements", typ: a(r("AbilityPointRowRequirement")) },
        { json: "status effect category limits", js: "status effect category limits", typ: r("StatusEffectCategoryLimit") },
        { json: "status effect category limit crcs", js: "status effect category limit crcs", typ: r("StatusEffectCategoryLimit") },
        { json: "propertytaxratemin", js: "propertytaxratemin", typ: 3.14 },
        { json: "propertytaxratemax", js: "propertytaxratemax", typ: 3.14 },
        { json: "tradingtaxratemin", js: "tradingtaxratemin", typ: 0 },
        { json: "tradingtaxratemax", js: "tradingtaxratemax", typ: 0 },
        { json: "craftingfeeratemin", js: "craftingfeeratemin", typ: 3.14 },
        { json: "craftingfeeratemax", js: "craftingfeeratemax", typ: 3.14 },
        { json: "refiningfeeratemin", js: "refiningfeeratemin", typ: 3.14 },
        { json: "refiningfeeratemax", js: "refiningfeeratemax", typ: 3.14 },
        { json: "settaxorfeecooldowninmin", js: "settaxorfeecooldowninmin", typ: 0 },
        { json: "controllingcompanytaxmodifier", js: "controllingcompanytaxmodifier", typ: 3.14 },
        { json: "controllingcompanyhousecostmodifier", js: "controllingcompanyhousecostmodifier", typ: 3.14 },
        { json: "controllingfactionluckmodifier", js: "controllingfactionluckmodifier", typ: 0 },
        { json: "controllingfactiongathermodifier", js: "controllingfactiongathermodifier", typ: 3.14 },
        { json: "alwaysavailabletownprojectid", js: "alwaysavailabletownprojectid", typ: r("FortCaptureGameeventid") },
        { json: "allprojectpoolid", js: "allprojectpoolid", typ: r("FortCaptureGameeventid") },
        { json: "blocking threat mulitplier", js: "blocking threat mulitplier", typ: 0 },
        { json: "final starting beach achievement", js: "final starting beach achievement", typ: r("FortCaptureGameeventid") },
        { json: "first house flat discount", js: "first house flat discount", typ: 0 },
    ], false),
    "AbilityPointRowRequirement": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "value1", js: "value1", typ: 0 },
        { json: "value2", js: "value2", typ: 3.14 },
    ], false),
    "CampingAchievementID": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "blueprint id", js: "blueprint id", typ: r("FortCaptureGameeventid") },
        { json: "effect id", js: "effect id", typ: r("FortCaptureGameeventid") },
    ], false),
    "ItemRarityDatum": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "rarity level loc string", js: "rarity level loc string", typ: "" },
        { json: "max perk count", js: "max perk count", typ: 0 },
        { json: "level requirement modifier", js: "level requirement modifier", typ: 0 },
    ], false),
    "PerkGenerationData": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "perk data per tier", js: "perk data per tier", typ: a(r("PerkDataPerTier")) },
        { json: "crafting result loot bucket id", js: "crafting result loot bucket id", typ: r("AzothCurrencyID") },
        { json: "crafting result loot bucket", js: "crafting result loot bucket", typ: "" },
        { json: "roll perk on upgrade gs", js: "roll perk on upgrade gs", typ: 0 },
        { json: "roll perk on upgrade tier", js: "roll perk on upgrade tier", typ: 0 },
        { json: "roll perk on upgrade perk count", js: "roll perk on upgrade perk count", typ: 0 },
    ], false),
    "PerkDataPerTier": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "max perk channel", js: "max perk channel", typ: 0 },
        { json: "gem slot probability", js: "gem slot probability", typ: 0 },
        { json: "attribute perk probability", js: "attribute perk probability", typ: 0 },
        { json: "general gear score perk count", js: "general gear score perk count", typ: a(0) },
        { json: "crafting gear score perk count", js: "crafting gear score perk count", typ: a(0) },
        { json: "attribute perk bucket", js: "attribute perk bucket", typ: "" },
        { json: "attribute perk bucket id", js: "attribute perk bucket id", typ: r("AzothCurrencyID") },
    ], false),
    "StatusEffectCategoryLimit": o([
        { json: "__type", js: "__type", typ: "" },
    ], false),
    "ProgressionValidationAchievementData": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "azothstaffachievements", js: "azothstaffachievements", typ: a("") },
        { json: "azothstaffitemids", js: "azothstaffitemids", typ: a(r("FortCaptureGameeventid")) },
        { json: "heartgemslotachievements", js: "heartgemslotachievements", typ: a(r("FortCaptureGameeventid")) },
        { json: "syndicaterankuptrialachievements", js: "syndicaterankuptrialachievements", typ: a("") },
        { json: "marauderrankuptrialachievements", js: "marauderrankuptrialachievements", typ: a("") },
        { json: "covenantrankuptrialachievements", js: "covenantrankuptrialachievements", typ: a("") },
        { json: "syndicaterankupobjectiveids", js: "syndicaterankupobjectiveids", typ: a(r("FortCaptureGameeventid")) },
        { json: "marauderrankupobjectiveids", js: "marauderrankupobjectiveids", typ: a(r("FortCaptureGameeventid")) },
        { json: "covenantrankupobjectiveids", js: "covenantrankupobjectiveids", typ: a(r("FortCaptureGameeventid")) },
        { json: "syndicatesliceswapachievementid", js: "syndicatesliceswapachievementid", typ: r("FortCaptureGameeventid") },
        { json: "maraudersliceswapachievementid", js: "maraudersliceswapachievementid", typ: r("FortCaptureGameeventid") },
        { json: "covenantsliceswapachievementid", js: "covenantsliceswapachievementid", typ: r("FortCaptureGameeventid") },
        { json: "campingrankupachievements", js: "campingrankupachievements", typ: a("") },
    ], false),
    "RemoteStorageItemTransferFeeData": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "item tier base fees", js: "item tier base fees", typ: a(0) },
        { json: "item type fee multipliers", js: "item type fee multipliers", typ: a(r("ItemTypeFeeMultiplier")) },
        { json: "distance interval meters", js: "distance interval meters", typ: 0 },
        { json: "fee multiplier per interval", js: "fee multiplier per interval", typ: 3.14 },
    ], false),
    "ItemTypeFeeMultiplier": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "item tier base fees", js: "item tier base fees", typ: 0 },
        { json: "item type fee multipliers", js: "item type fee multipliers", typ: 3.14 },
    ], false),
    "StructureAttributeData": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "demolish min percent", js: "demolish min percent", typ: 3.14 },
        { json: "demolish max percent", js: "demolish max percent", typ: 3.14 },
        { json: "demolish min quantity", js: "demolish min quantity", typ: 0 },
    ], false),
    "StructurePlacementData": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "grid box size", js: "grid box size", typ: 0 },
        { json: "grid box height", js: "grid box height", typ: 0 },
        { json: "is placing sticky factor", js: "is placing sticky factor", typ: 3.14 },
        { json: "is placed sticky factor", js: "is placed sticky factor", typ: 3.14 },
        { json: "min build distance from player", js: "min build distance from player", typ: 3.14 },
        { json: "max build distance from player", js: "max build distance from player", typ: 3.14 },
        { json: "min build pitch percent", js: "min build pitch percent", typ: 0 },
        { json: "max build pitch percent", js: "max build pitch percent", typ: 3.14 },
        { json: "max build vertical distance from player", js: "max build vertical distance from player", typ: 0 },
        { json: "placement obstruction update frequency time in secs", js: "placement obstruction update frequency time in secs", typ: 3.14 },
        { json: "placing settings", js: "placing settings", typ: r("Settings") },
        { json: "snapped to settings", js: "snapped to settings", typ: r("Settings") },
        { json: "snap point mesh file name", js: "snap point mesh file name", typ: r("IntMeshFileName") },
        { json: "grid footprint mesh file name", js: "grid footprint mesh file name", typ: r("IntMeshFileName") },
        { json: "valid placement material file name", js: "valid placement material file name", typ: r("MaterialFileName") },
        { json: "invalid placement material file name", js: "invalid placement material file name", typ: r("MaterialFileName") },
        { json: "completion blocked material file name", js: "completion blocked material file name", typ: r("MaterialFileName") },
        { json: "snap valid placement material file name", js: "snap valid placement material file name", typ: r("MaterialFileName") },
        { json: "snap invalid placement material file name", js: "snap invalid placement material file name", typ: r("MaterialFileName") },
        { json: "snap completion blocked material file name", js: "snap completion blocked material file name", typ: r("MaterialFileName") },
        { json: "placement obstruction filter", js: "placement obstruction filter", typ: "" },
        { json: "completion obstruction filter", js: "completion obstruction filter", typ: "" },
        { json: "los obstruction filter", js: "los obstruction filter", typ: "" },
        { json: "los box height", js: "los box height", typ: 3.14 },
        { json: "los box width", js: "los box width", typ: 3.14 },
    ], false),
    "MaterialFileName": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "baseclass1", js: "baseclass1", typ: r("Baseclass1") },
    ], false),
    "Baseclass1": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "assetpath", js: "assetpath", typ: "" },
    ], false),
    "IntMeshFileName": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "guid", js: "guid", typ: "" },
        { json: "subId", js: "subId", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "hint", js: "hint", typ: "" },
    ], false),
    "Settings": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "m_aboveminpointvalidthreshold", js: "m_aboveminpointvalidthreshold", typ: 3.14 },
        { json: "m_belowminpointvalidthreshold", js: "m_belowminpointvalidthreshold", typ: 3.14 },
    ], false),
    "TaskinteractData": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "interacttagentries", js: "interacttagentries", typ: a(r("Interacttagentry")) },
        { json: "destinationoverrideinteracttag", js: "destinationoverrideinteracttag", typ: "" },
    ], false),
    "Interacttagentry": o([
        { json: "__type", js: "__type", typ: r("InteracttagentryType") },
        { json: "interact tag", js: "interact tag", typ: "" },
        { json: "landmark type", js: "landmark type", typ: 0 },
        { json: "landmark data", js: "landmark data", typ: a("") },
    ], false),
    "TerritoryBonusDatum": o([
        { json: "__type", js: "__type", typ: r("TerritoryBonusDatumType") },
        { json: "territory bonus id", js: "territory bonus id", typ: 0 },
        { json: "progression point id", js: "progression point id", typ: "" },
        { json: "initial bonus", js: "initial bonus", typ: 3.14 },
        { json: "reduction modifier", js: "reduction modifier", typ: 3.14 },
        { json: "min value", js: "min value", typ: 3.14 },
    ], false),
    "ValidGroupData": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "names", js: "names", typ: a("any") },
        { json: "objectives", js: "objectives", typ: a("any") },
        { json: "iconpaths", js: "iconpaths", typ: a("") },
        { json: "colors", js: "colors", typ: a(r("Color")) },
    ], false),
    "Color": o([
        { json: "__type", js: "__type", typ: r("ColorType") },
        { json: "__value", js: "__value", typ: a(3.14) },
    ], false),
    "WarColorData": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "war colors map", js: "war colors map", typ: a(r("WarColorsMap")) },
    ], false),
    "WarColorsMap": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "value1", js: "value1", typ: 0 },
        { json: "value2", js: "value2", typ: r("Color") },
    ], false),
    "WarData": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "war cost", js: "war cost", typ: a(0) },
        { json: "war extension cost modifier", js: "war extension cost modifier", typ: 3.14 },
        { json: "war extension max cost percentage", js: "war extension max cost percentage", typ: 0 },
        { json: "prewar duration minutes", js: "prewar duration minutes", typ: 0 },
        { json: "conquest window duration minutes", js: "conquest window duration minutes", typ: 0 },
        { json: "war duration minutes", js: "war duration minutes", typ: 0 },
        { json: "conquest duration minutes", js: "conquest duration minutes", typ: 0 },
        { json: "resolution duration minutes", js: "resolution duration minutes", typ: 0 },
        { json: "resolution phase buffer minutes", js: "resolution phase buffer minutes", typ: 0 },
        { json: "claim lock duration minutes", js: "claim lock duration minutes", typ: 0 },
        { json: "siege window cooldown minutes", js: "siege window cooldown minutes", typ: 0 },
        { json: "attacker war count modifier", js: "attacker war count modifier", typ: 0 },
        { json: "defender war count modifier", js: "defender war count modifier", typ: 0 },
        { json: "counter attack discount", js: "counter attack discount", typ: 3.14 },
        { json: "siege window rounding hours", js: "siege window rounding hours", typ: 3.14 },
        { json: "base upkeep war declaration penalty", js: "base upkeep war declaration penalty", typ: 3.14 },
        { json: "destroyed claim ends war", js: "destroyed claim ends war", typ: true },
        { json: "larger guild multiplier", js: "larger guild multiplier", typ: 0 },
        { json: "member war modifier map", js: "member war modifier map", typ: a("any") },
        { json: "require defender territory", js: "require defender territory", typ: true },
        { json: "attacker buildable team limits", js: "attacker buildable team limits", typ: a(0) },
        { json: "reset effect categories", js: "reset effect categories", typ: a("") },
        { json: "reset effect categories crc", js: "reset effect categories crc", typ: a(r("AzothCurrencyID")) },
        { json: "post siege status effects", js: "post siege status effects", typ: a("") },
        { json: "post siege status effects crc", js: "post siege status effects crc", typ: a(r("AzothCurrencyID")) },
        { json: "deployable limits editable", js: "deployable limits editable", typ: a(r("DeployableLimitsEditable")) },
        { json: "deployable limits", js: "deployable limits", typ: a(r("DeployableLimit")) },
    ], false),
    "DeployableLimit": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "value1", js: "value1", typ: r("AzothCurrencyID") },
        { json: "value2", js: "value2", typ: r("DeployableLimitValue2") },
    ], false),
    "DeployableLimitValue2": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "m_id", js: "m_id", typ: r("AzothCurrencyID") },
        { json: "m_displayname", js: "m_displayname", typ: "" },
        { json: "m_buildablenames", js: "m_buildablenames", typ: a("") },
        { json: "m_buildableids", js: "m_buildableids", typ: a(r("AzothCurrencyID")) },
        { json: "m_attackerlimits", js: "m_attackerlimits", typ: a(0) },
        { json: "m_defenderlimit", js: "m_defenderlimit", typ: 0 },
    ], false),
    "DeployableLimitsEditable": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "value1", js: "value1", typ: "" },
        { json: "value2", js: "value2", typ: r("DeployableLimitValue2") },
    ], false),
    "EventCreditModifierType": [
        "CreditModifierData",
    ],
    "FortCaptureGameeventidType": [
        "EditCrc",
    ],
    "AzothCurrencyIDType": [
        "Crc32",
    ],
    "InteracttagentryType": [
        "TaskInteractEntryData",
    ],
    "TerritoryBonusDatumType": [
        "TerritoryEntryData",
    ],
    "ColorType": [
        "Color",
    ],
};
