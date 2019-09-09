import Shaman from './shaman'
import Druid from './druid';
import Paladin from './paladin';
import Priest from './priest';

class Data {

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



    static getBaseMana(className) {
        switch (className) {
            case "holypaladin":
                return Paladin.baseMana;
            case "holypriest":
                return Priest.baseMana;
            case "restoshaman":
                return Shaman.baseMana;
            case "restodruid":
                return Druid.baseMana;
            default:
            // Not valid class
        }
    }

    static getBaseIntellect(className) {
        switch (className) {
            case "holypaladin":
                return Paladin.baseIntellect;
            case "holypriest":
                return Priest.baseIntellect;
            case "restoshaman":
                return Shaman.baseIntellect;
            case "restodruid":
                return Druid.baseIntellect;
            default:
            // Not valid class
        }
    }

    static getBaseSpirit(className) {
        switch (className) {
            case "holypaladin":
                return Paladin.baseSpirit;
            case "holypriest":
                return Priest.baseSpirit;
            case "restoshaman":
                return Shaman.baseSpirit;
            case "restodruid":
                return Druid.baseSpirit;
            default:
            // Not valid class
        }
    }

    static getIntPerCrit(className) {
        switch (className) {
            case "holypaladin":
                return Paladin.intPerCrit;
            case "holypriest":
                return Priest.intPerCrit;
            case "restoshaman":
                return Shaman.intPerCrit;
            case "restodruid":
                return Druid.intPerCrit;
            default:
            // Not valid class
        }
    }

    static getMP5PerSpirit(className) {
        switch (className) {
            case "holypaladin":
                return Paladin.mp5PerSpirit;
            case "holypriest":
                return Priest.mp5PerSpirit;
            case "restoshaman":
                return Shaman.mp5PerSpirit;
            case "restodruid":
                return Druid.mp5PerSpirit;
            default:
            // Not valid class
        }
    }

    static getBaseSpiritMP5(className) {
        switch (className) {
            case "holypaladin":
                return Paladin.baseSpiritMP5;
            case "holypriest":
                return Priest.baseSpiritMP5;
            case "restoshaman":
                return Shaman.baseSpiritMP5;
            case "restodruid":
                return Druid.baseSpiritMP5;
            default:
            // Not valid class
        }
    }

    static getBaseHeal(className, spell) {
        switch (className) {
            case "holypaladin":
                return Paladin.baseHeal[spell];
            case "holypriest":
                return Priest.baseHeal[spell];
            case "restoshaman":
                return Shaman.baseHeal[spell];
            case "restodruid":
                return Druid.baseHeal[spell];
            default:
                // Invalid class
                return 1;
        }
    }

    static getCastTime(className, spell) {
        switch (className) {
            case "holypaladin":
                return Paladin.castTime[spell];
            case "holypriest":
                return Priest.castTime[spell];
            case "restoshaman":
                return Shaman.castTime[spell];
            case "restodruid":
                return Druid.castTime[spell];
            default:
                // Invalid class
                return 1;
        }
    }

    static getManaCost(className, spell) {
        switch (className) {
            case "holypaladin":
                return Paladin.manaCost[spell];
            case "holypriest":
                return Priest.manaCost[spell];
            case "restoshaman":
                return Shaman.manaCost[spell];
            case "restodruid":
                return Druid.manaCost[spell];
            default:
                // Invalid class
                return 1;
        }
    }

    static getCoefficient(className, spell) {
        switch (className) {
            case "holypaladin":
                return Paladin.coefficient[spell];
            case "holypriest":
                return Priest.coefficient[spell];
            case "restoshaman":
                return Shaman.coefficient[spell];
            case "restodruid":
                return Druid.coefficient[spell];
            default:
                // Not valid class
                return 1;
        }
    }
    static getSpells(className) {
        switch (className) {
            case "holypaladin":
                return Paladin.spells;
            case "holypriest":
                return Priest.spells;
            case "restoshaman":
                return Shaman.spells;
            case "restodruid":
                return Druid.spells;
            default:
            // Not valid class
        }
    }
}

export default Data;
