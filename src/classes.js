
const ineffective = 15;

class Classes {

    static healMultiMap = {
        "holypaladin": 1.12,
        "holypriest": 1.1,
        "restoshaman": 1.1 * (1 + 0.5 + 0.25),
        "restodruid": 1.1,
    }

    static manaMultiMap = {
        "holypaladin": 1,
        "holypriest": 0.85,
        "restoshaman": 0.95,
        "restodruid": 0.81,
    }

    // Night Elf Druid Base Stats
    static druidBaseMana = 1244;
    static druidBaseIntellect = 100 - ineffective;
    static druidBaseSpirit = 110 - ineffective;
    static druidIntPerCrit = 60;
    static druidMP5PerSpirit = 0.2 * 2.5;
    static druidBaseSpiritMP5 = 37.5;

    // Human Paladin Base Stats
    static paladinBaseMana = 1512;
    static paladinBaseIntellect = 70 - ineffective;
    static paladinBaseSpirit = 78 - ineffective;
    static paladinIntPerCrit = 29.5;
    static paladinMP5PerSpirit = 0;
    static paladinBaseSpiritMP5 = 0;

    // Dwarf Priest Base Stats
    static priestBaseMana = 1436;
    static priestBaseIntellect = 119 - ineffective;
    static priestBaseSpirit = 124 - ineffective;
    static priestIntPerCrit = 59.2;
    static priestMP5PerSpirit = 0.25 * 2.5;
    static priestBaseSpiritMP5 = 32.5;

    // Orc Shaman Base Stats
    static shamanBaseMana = 1520;
    static shamanBaseIntellect = 87 - ineffective;
    static shamanBaseSpirit = 103 - ineffective;
    static shamanIntPerCrit = 59.5;
    static shamanMP5PerSpirit = 0;
    static shamanBaseSpiritMP5 = 0;

    static getBaseMana(className) {
        switch (className) {
            case "holypaladin":
                return this.paladinBaseMana;
            case "holypriest":
                return this.priestBaseMana;
            case "restoshaman":
                return this.shamanBaseMana;
            case "restodruid":
                return this.druidBaseMana;
            default:
            // Not valid class
        }
    }

    static getBaseIntellect(className) {
        switch (className) {
            case "holypaladin":
                return this.paladinBaseIntellect;
            case "holypriest":
                return this.priestBaseIntellect;
            case "restoshaman":
                return this.shamanBaseIntellect;
            case "restodruid":
                return this.druidBaseIntellect;
            default:
            // Not valid class
        }
    }

    static getBaseSpirit(className) {
        switch (className) {
            case "holypaladin":
                return this.paladinBaseSpirit;
            case "holypriest":
                return this.priestBaseSpirit;
            case "restoshaman":
                return this.shamanBaseSpirit;
            case "restodruid":
                return this.druidBaseSpirit;
            default:
            // Not valid class
        }
    }

    static getIntPerCrit(className) {
        switch (className) {
            case "holypaladin":
                return this.paladinIntPerCrit;
            case "holypriest":
                return this.priestIntPerCrit;
            case "restoshaman":
                return this.shamanIntPerCrit;
            case "restodruid":
                return this.druidIntPerCrit;
            default:
            // Not valid class
        }
    }

    static getMP5PerSpirit(className) {
        switch (className) {
            case "holypaladin":
                return this.paladinMP5PerSpirit;
            case "holypriest":
                return this.priestMP5PerSpirit;
            case "restoshaman":
                return this.shamanMP5PerSpirit;
            case "restodruid":
                return this.druidMP5PerSpirit;
            default:
            // Not valid class
        }
    }

    static getBaseSpiritMP5(className) {
        switch (className) {
            case "holypaladin":
                return this.paladinBaseSpiritMP5;
            case "holypriest":
                return this.priestBaseSpiritMP5;
            case "restoshaman":
                return this.shamanBaseSpiritMP5;
            case "restodruid":
                return this.druidBaseSpiritMP5;
            default:
            // Not valid class
        }
    }
}

export default Classes;