// To parse this data:
//
//   import { Convert, RangedAttackDatabase } from "./file";
//
//   const rangedAttackDatabase = Convert.toRangedAttackDatabase(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export type RangedAttackDatabase = {
    __type:                 string;
    m_rangedattackprofiles: MRangedattackprofile[];
}

export type MRangedattackprofile = {
    __type: MRangedattackprofileType;
    value1: string;
    value2: MRangedattackprofileValue2;
}

export type MRangedattackprofileType = "AZStd::pair";

export type MRangedattackprofileValue2 = {
    __type:             Value2Type;
    m_rangedattackdata: MRangedattackdatum[];
}

export type Value2Type = "RangedAttackData";

export type MRangedattackdatum = {
    __type: MRangedattackprofileType;
    value1: string;
    value2: MRangedattackdatumValue2;
}

export type MRangedattackdatumValue2 = {
    __type:                                  Value2Type;
    m_ishitscan:                             boolean;
    m_maxrange:                              number;
    m_projectileradius:                      number;
    m_projectilehitscanrange:                number;
    m_projectilepenetrationdepth:            number;
    m_projectileacceldelaydist:              number;
    m_projectiledamagefalloffdist:           number;
    m_distforprojectiledamagefalloffmax:     number;
    m_projectilefireangleoffsetpitchdeg:     number;
    m_projectilefireangleoffsetyawdeg:       number;
    m_projectilevisibilitydelayseconds:      number;
    m_projectilelifetimescale:               number;
    m_timeformaxscale:                       number;
    m_hitrate:                               number;
    m_projectiledamagemaxfalloff:            number;
    m_destroyprojectileonunsuccesfulhit:     boolean;
    m_destroyprojectileonblock:              boolean;
    m_firefromcharacteroffset:               boolean;
    m_applyrelativehorzaccel:                boolean;
    m_sethomingoverridetargetonstuckto:      boolean;
    m_characteroffset:                       number[];
    m_collidewithfilterstr:                  MCollidewithfilterstr;
    m_tracereffectsbyeffect:                 MTracereffectsbyeffect[];
    m_enabledistanceaccuracycurve:           boolean;
    m_distanceaccuracycurve:                 MDistanceaccuracycurve;
    m_arctrajectorysettings:                 MArctrajectorysettings;
    m_soundradius:                           number;
    m_soundreactionfilterstr:                MSoundreactionfilterstr;
    m_firefromweaponslotalias:               number;
    m_aimjoint:                              MAimjoint;
    m_predictedprojectileaccel:              number[];
    m_predictedprojectilemeshasset:          MPredictedprojectilemeshasset;
    m_predictedprojectilemeshoffset:         number[];
    m_predictedprojectilemeshrotationangles: number[];
    m_predictedprojectilemeshscale:          number[];
    m_predictedprojectiletraileffect:        MPredictedprojectiletraileffect;
    m_bouncefrictionperpendicular:           number;
    m_bouncefrictionparallel:                number;
    m_bouncecountmax:                        number;
    m_bounceignorefilter:                    MBounceignorefilter;
    m_spreadshotconfig:                      MSpreadshotconfig;
    m_heeddurationelapsedafterstuck:         boolean;
    m_measurelifetimeholistically:           boolean;
}

export type MAimjoint = "aim_direction" | "right_hand_ikblend" | "aim" | "" | "master_root";

export type MArctrajectorysettings = {
    __type:               MArctrajectorysettingsType;
    m_usearctrajectories: boolean;
    m_lobheightmin:       number;
    m_lobheightmax:       number;
    m_gravityoverridemin: number;
    m_gravityoverridemax: number;
    m_distancelerpmin:    number;
    m_distancelerpmax:    number;
}

export type MArctrajectorysettingsType = "RangedAttackArcShotData";

export type MBounceignorefilter = "" | "ThrowableBounceIgnoreDamageable";

export type MCollidewithfilterstr = "Empty" | "PhysicsParticles_StaticsAndDynamics" | "PhysicsParticles_Statics" | "DamageableStructure" | "AIProjectilePassthrough" | "Terrain" | "DryadAlly" | "TerrainCast";

export type MDistanceaccuracycurve = {
    __type:            MDistanceaccuracycurveType;
    identifier:        string;
    type:              number;
    slope:             number;
    konstant:          number;
    xintercept:        number;
    yintercept:        number;
    inputmin:          number;
    inputmax:          number;
    outputmin:         number;
    outputmax:         number;
    outputscalar:      number;
    m_generatepreview: boolean;
}

export type MDistanceaccuracycurveType = "CurveConfiguration";

export type MPredictedprojectilemeshasset = {
    __type: MPredictedprojectilemeshassetType;
    guid:   string;
    subId:  string;
    type:   string;
    hint?:  string;
}

export type MPredictedprojectilemeshassetType = "Asset";

export type MPredictedprojectiletraileffect = "" | "Coldvein_Trail" | "Siege_Ballista.Shoot.Projectile" | "siege_bombturret.Trail_01" | "Siege_FireTrebuchet.Projectile.Trail_01" | "Siege_RepeaterTurret.Trail";

export type MSoundreactionfilterstr = "AICast";

export type MSpreadshotconfig = {
    __type:        MSpreadshotconfigType;
    m_type:        number;
    m_shotgundata: MShotgundata;
    m_customdata:  MCustomdata;
}

export type MSpreadshotconfigType = "SpreadshotConfig";

export type MCustomdata = {
    __type:  MCustomdataType;
    m_shots: MShot[];
}

export type MCustomdataType = "SpreadshotConfigCustom";

export type MShot = {
    __type:        MShotType;
    m_pitch:       number;
    m_yaw:         number;
    m_overridevfx: MOverridevfx;
}

export type MShotType = "SpreadshotConfigCustomShotData";

export type MOverridevfx = "wFX_Blunderbuss_Containment.Shrapnel_Proj_1" | "";

export type MShotgundata = {
    __type:              MShotgundataType;
    m_discdistance:      number;
    m_discradius:        number;
    m_numrings:          number;
    m_numsectorsperring: number;
    m_numshotspersector: number;
}

export type MShotgundataType = "SpreadshotConfigShotgun";

export type MTracereffectsbyeffect = {
    __type: MRangedattackprofileType;
    value1: Value1;
    value2: string;
}

export type Value1 = "Arcane" | "Default" | "Fire" | "Ice" | "Lightning" | "Magic" | "Nature" | "Void" | "WeaponEffectId" | "_Default";

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toRangedAttackDatabase(json: string): RangedAttackDatabase {
        return cast(JSON.parse(json), r("RangedAttackDatabase"));
    }

    public static rangedAttackDatabaseToJson(value: RangedAttackDatabase): string {
        return JSON.stringify(uncast(value, r("RangedAttackDatabase")), null, 2);
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
    "RangedAttackDatabase": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "m_rangedattackprofiles", js: "m_rangedattackprofiles", typ: a(r("MRangedattackprofile")) },
    ], false),
    "MRangedattackprofile": o([
        { json: "__type", js: "__type", typ: r("MRangedattackprofileType") },
        { json: "value1", js: "value1", typ: "" },
        { json: "value2", js: "value2", typ: r("MRangedattackprofileValue2") },
    ], false),
    "MRangedattackprofileValue2": o([
        { json: "__type", js: "__type", typ: r("Value2Type") },
        { json: "m_rangedattackdata", js: "m_rangedattackdata", typ: a(r("MRangedattackdatum")) },
    ], false),
    "MRangedattackdatum": o([
        { json: "__type", js: "__type", typ: r("MRangedattackprofileType") },
        { json: "value1", js: "value1", typ: "" },
        { json: "value2", js: "value2", typ: r("MRangedattackdatumValue2") },
    ], false),
    "MRangedattackdatumValue2": o([
        { json: "__type", js: "__type", typ: r("Value2Type") },
        { json: "m_ishitscan", js: "m_ishitscan", typ: true },
        { json: "m_maxrange", js: "m_maxrange", typ: 3.14 },
        { json: "m_projectileradius", js: "m_projectileradius", typ: 3.14 },
        { json: "m_projectilehitscanrange", js: "m_projectilehitscanrange", typ: 3.14 },
        { json: "m_projectilepenetrationdepth", js: "m_projectilepenetrationdepth", typ: 3.14 },
        { json: "m_projectileacceldelaydist", js: "m_projectileacceldelaydist", typ: 3.14 },
        { json: "m_projectiledamagefalloffdist", js: "m_projectiledamagefalloffdist", typ: 0 },
        { json: "m_distforprojectiledamagefalloffmax", js: "m_distforprojectiledamagefalloffmax", typ: 0 },
        { json: "m_projectilefireangleoffsetpitchdeg", js: "m_projectilefireangleoffsetpitchdeg", typ: 3.14 },
        { json: "m_projectilefireangleoffsetyawdeg", js: "m_projectilefireangleoffsetyawdeg", typ: 0 },
        { json: "m_projectilevisibilitydelayseconds", js: "m_projectilevisibilitydelayseconds", typ: 0 },
        { json: "m_projectilelifetimescale", js: "m_projectilelifetimescale", typ: 3.14 },
        { json: "m_timeformaxscale", js: "m_timeformaxscale", typ: 3.14 },
        { json: "m_hitrate", js: "m_hitrate", typ: 0 },
        { json: "m_projectiledamagemaxfalloff", js: "m_projectiledamagemaxfalloff", typ: 3.14 },
        { json: "m_destroyprojectileonunsuccesfulhit", js: "m_destroyprojectileonunsuccesfulhit", typ: true },
        { json: "m_destroyprojectileonblock", js: "m_destroyprojectileonblock", typ: true },
        { json: "m_firefromcharacteroffset", js: "m_firefromcharacteroffset", typ: true },
        { json: "m_applyrelativehorzaccel", js: "m_applyrelativehorzaccel", typ: true },
        { json: "m_sethomingoverridetargetonstuckto", js: "m_sethomingoverridetargetonstuckto", typ: true },
        { json: "m_characteroffset", js: "m_characteroffset", typ: a(3.14) },
        { json: "m_collidewithfilterstr", js: "m_collidewithfilterstr", typ: r("MCollidewithfilterstr") },
        { json: "m_tracereffectsbyeffect", js: "m_tracereffectsbyeffect", typ: a(r("MTracereffectsbyeffect")) },
        { json: "m_enabledistanceaccuracycurve", js: "m_enabledistanceaccuracycurve", typ: true },
        { json: "m_distanceaccuracycurve", js: "m_distanceaccuracycurve", typ: r("MDistanceaccuracycurve") },
        { json: "m_arctrajectorysettings", js: "m_arctrajectorysettings", typ: r("MArctrajectorysettings") },
        { json: "m_soundradius", js: "m_soundradius", typ: 0 },
        { json: "m_soundreactionfilterstr", js: "m_soundreactionfilterstr", typ: r("MSoundreactionfilterstr") },
        { json: "m_firefromweaponslotalias", js: "m_firefromweaponslotalias", typ: 0 },
        { json: "m_aimjoint", js: "m_aimjoint", typ: r("MAimjoint") },
        { json: "m_predictedprojectileaccel", js: "m_predictedprojectileaccel", typ: a(3.14) },
        { json: "m_predictedprojectilemeshasset", js: "m_predictedprojectilemeshasset", typ: r("MPredictedprojectilemeshasset") },
        { json: "m_predictedprojectilemeshoffset", js: "m_predictedprojectilemeshoffset", typ: a(3.14) },
        { json: "m_predictedprojectilemeshrotationangles", js: "m_predictedprojectilemeshrotationangles", typ: a(0) },
        { json: "m_predictedprojectilemeshscale", js: "m_predictedprojectilemeshscale", typ: a(3.14) },
        { json: "m_predictedprojectiletraileffect", js: "m_predictedprojectiletraileffect", typ: r("MPredictedprojectiletraileffect") },
        { json: "m_bouncefrictionperpendicular", js: "m_bouncefrictionperpendicular", typ: 3.14 },
        { json: "m_bouncefrictionparallel", js: "m_bouncefrictionparallel", typ: 3.14 },
        { json: "m_bouncecountmax", js: "m_bouncecountmax", typ: 0 },
        { json: "m_bounceignorefilter", js: "m_bounceignorefilter", typ: r("MBounceignorefilter") },
        { json: "m_spreadshotconfig", js: "m_spreadshotconfig", typ: r("MSpreadshotconfig") },
        { json: "m_heeddurationelapsedafterstuck", js: "m_heeddurationelapsedafterstuck", typ: true },
        { json: "m_measurelifetimeholistically", js: "m_measurelifetimeholistically", typ: true },
    ], false),
    "MArctrajectorysettings": o([
        { json: "__type", js: "__type", typ: r("MArctrajectorysettingsType") },
        { json: "m_usearctrajectories", js: "m_usearctrajectories", typ: true },
        { json: "m_lobheightmin", js: "m_lobheightmin", typ: 3.14 },
        { json: "m_lobheightmax", js: "m_lobheightmax", typ: 3.14 },
        { json: "m_gravityoverridemin", js: "m_gravityoverridemin", typ: 3.14 },
        { json: "m_gravityoverridemax", js: "m_gravityoverridemax", typ: 3.14 },
        { json: "m_distancelerpmin", js: "m_distancelerpmin", typ: 3.14 },
        { json: "m_distancelerpmax", js: "m_distancelerpmax", typ: 3.14 },
    ], false),
    "MDistanceaccuracycurve": o([
        { json: "__type", js: "__type", typ: r("MDistanceaccuracycurveType") },
        { json: "identifier", js: "identifier", typ: "" },
        { json: "type", js: "type", typ: 0 },
        { json: "slope", js: "slope", typ: 3.14 },
        { json: "konstant", js: "konstant", typ: 0 },
        { json: "xintercept", js: "xintercept", typ: 3.14 },
        { json: "yintercept", js: "yintercept", typ: 3.14 },
        { json: "inputmin", js: "inputmin", typ: 3.14 },
        { json: "inputmax", js: "inputmax", typ: 0 },
        { json: "outputmin", js: "outputmin", typ: 0 },
        { json: "outputmax", js: "outputmax", typ: 0 },
        { json: "outputscalar", js: "outputscalar", typ: 0 },
        { json: "m_generatepreview", js: "m_generatepreview", typ: true },
    ], false),
    "MPredictedprojectilemeshasset": o([
        { json: "__type", js: "__type", typ: r("MPredictedprojectilemeshassetType") },
        { json: "guid", js: "guid", typ: "" },
        { json: "subId", js: "subId", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "hint", js: "hint", typ: u(undefined, "") },
    ], false),
    "MSpreadshotconfig": o([
        { json: "__type", js: "__type", typ: r("MSpreadshotconfigType") },
        { json: "m_type", js: "m_type", typ: 0 },
        { json: "m_shotgundata", js: "m_shotgundata", typ: r("MShotgundata") },
        { json: "m_customdata", js: "m_customdata", typ: r("MCustomdata") },
    ], false),
    "MCustomdata": o([
        { json: "__type", js: "__type", typ: r("MCustomdataType") },
        { json: "m_shots", js: "m_shots", typ: a(r("MShot")) },
    ], false),
    "MShot": o([
        { json: "__type", js: "__type", typ: r("MShotType") },
        { json: "m_pitch", js: "m_pitch", typ: 0 },
        { json: "m_yaw", js: "m_yaw", typ: 0 },
        { json: "m_overridevfx", js: "m_overridevfx", typ: r("MOverridevfx") },
    ], false),
    "MShotgundata": o([
        { json: "__type", js: "__type", typ: r("MShotgundataType") },
        { json: "m_discdistance", js: "m_discdistance", typ: 0 },
        { json: "m_discradius", js: "m_discradius", typ: 3.14 },
        { json: "m_numrings", js: "m_numrings", typ: 0 },
        { json: "m_numsectorsperring", js: "m_numsectorsperring", typ: 0 },
        { json: "m_numshotspersector", js: "m_numshotspersector", typ: 0 },
    ], false),
    "MTracereffectsbyeffect": o([
        { json: "__type", js: "__type", typ: r("MRangedattackprofileType") },
        { json: "value1", js: "value1", typ: r("Value1") },
        { json: "value2", js: "value2", typ: "" },
    ], false),
    "MRangedattackprofileType": [
        "AZStd::pair",
    ],
    "Value2Type": [
        "RangedAttackData",
    ],
    "MAimjoint": [
        "aim",
        "aim_direction",
        "",
        "master_root",
        "right_hand_ikblend",
    ],
    "MArctrajectorysettingsType": [
        "RangedAttackArcShotData",
    ],
    "MBounceignorefilter": [
        "",
        "ThrowableBounceIgnoreDamageable",
    ],
    "MCollidewithfilterstr": [
        "AIProjectilePassthrough",
        "DamageableStructure",
        "DryadAlly",
        "Empty",
        "PhysicsParticles_Statics",
        "PhysicsParticles_StaticsAndDynamics",
        "Terrain",
        "TerrainCast",
    ],
    "MDistanceaccuracycurveType": [
        "CurveConfiguration",
    ],
    "MPredictedprojectilemeshassetType": [
        "Asset",
    ],
    "MPredictedprojectiletraileffect": [
        "Coldvein_Trail",
        "",
        "Siege_Ballista.Shoot.Projectile",
        "siege_bombturret.Trail_01",
        "Siege_FireTrebuchet.Projectile.Trail_01",
        "Siege_RepeaterTurret.Trail",
    ],
    "MSoundreactionfilterstr": [
        "AICast",
    ],
    "MSpreadshotconfigType": [
        "SpreadshotConfig",
    ],
    "MCustomdataType": [
        "SpreadshotConfigCustom",
    ],
    "MShotType": [
        "SpreadshotConfigCustomShotData",
    ],
    "MOverridevfx": [
        "",
        "wFX_Blunderbuss_Containment.Shrapnel_Proj_1",
    ],
    "MShotgundataType": [
        "SpreadshotConfigShotgun",
    ],
    "Value1": [
        "Arcane",
        "Default",
        "Fire",
        "Ice",
        "Lightning",
        "Magic",
        "Nature",
        "_Default",
        "Void",
        "WeaponEffectId",
    ],
};
