const ineffective = 15;

class Data {
    static paladinSpells = [
        "Flash of Light (Rank 1)",
        "Flash of Light (Rank 2)",
        "Flash of Light (Rank 3)",
        "Flash of Light (Rank 4)",
        "Flash of Light (Rank 5)",
        "Flash of Light (Rank 6)",
    ];
    static paladinBaseHeal = {
        "Flash of Light (Rank 1)": (67 + 77) / 2,
        "Flash of Light (Rank 2)": (102 + 117) / 2,
        "Flash of Light (Rank 3)": (153 + 171) / 2,
        "Flash of Light (Rank 4)": (206 + 231) / 2,
        "Flash of Light (Rank 5)": (278 + 310) / 2,
        "Flash of Light (Rank 6)": (348 + 389) / 2,
    };
    static paladinManaCost = {
        "Flash of Light (Rank 1)": 35,
        "Flash of Light (Rank 2)": 50,
        "Flash of Light (Rank 3)": 70,
        "Flash of Light (Rank 4)": 90,
        "Flash of Light (Rank 5)": 115,
        "Flash of Light (Rank 6)": 140,
    };
    static paladinCastTime = {
        "Flash of Light (Rank 1)": 1.5,
        "Flash of Light (Rank 2)": 1.5,
        "Flash of Light (Rank 3)": 1.5,
        "Flash of Light (Rank 4)": 1.5,
        "Flash of Light (Rank 5)": 1.5,
        "Flash of Light (Rank 6)": 1.5,
    };
    static paladinCoefficient = {
        "Flash of Light (Rank 1)": 1.5 / 3.5,
        "Flash of Light (Rank 2)": 1.5 / 3.5,
        "Flash of Light (Rank 3)": 1.5 / 3.5,
        "Flash of Light (Rank 4)": 1.5 / 3.5,
        "Flash of Light (Rank 5)": 1.5 / 3.5,
        "Flash of Light (Rank 6)": 1.5 / 3.5,
    };
    static druidSpells = [
        "Healing Touch (Rank 3)",
        "Healing Touch (Rank 4)",
        "Healing Touch (Rank 5)",
        "Healing Touch (Rank 6)",
        "Healing Touch (Rank 7)",
        "Healing Touch (Rank 8)",
        "Healing Touch (Rank 9)",
        "Healing Touch (Rank 10)",
        "Healing Touch (Rank 11)",
    ];
    static druidBaseHeal = {
        "Healing Touch (Rank 3)": (204 + 253) / 2,
        "Healing Touch (Rank 4)": (376 + 459) / 2,
        "Healing Touch (Rank 5)": (589 + 712) / 2,
        "Healing Touch (Rank 6)": (762 + 914) / 2,
        "Healing Touch (Rank 7)": (958 + 1143) / 2,
        "Healing Touch (Rank 8)": (1225 + 1453) / 2,
        "Healing Touch (Rank 9)": (1545 + 1826) / 2,
        "Healing Touch (Rank 10)": (1916 + 2257) / 2,
        "Healing Touch (Rank 11)": (2267 + 2677) / 2,
    };
    static druidManaCost = {
        "Healing Touch (Rank 3)": 110,
        "Healing Touch (Rank 4)": 185,
        "Healing Touch (Rank 5)": 270,
        "Healing Touch (Rank 6)": 335,
        "Healing Touch (Rank 7)": 405,
        "Healing Touch (Rank 8)": 495,
        "Healing Touch (Rank 9)": 600,
        "Healing Touch (Rank 10)": 720,
        "Healing Touch (Rank 11)": 800,
    };
    static druidCastTime = {
        "Healing Touch (Rank 3)": 2,
        "Healing Touch (Rank 4)": 2.5,
        "Healing Touch (Rank 5)": 3,
        "Healing Touch (Rank 6)": 3,
        "Healing Touch (Rank 7)": 3,
        "Healing Touch (Rank 8)": 3,
        "Healing Touch (Rank 9)": 3,
        "Healing Touch (Rank 10)": 3,
        "Healing Touch (Rank 11)": 3,
    };
    static druidCoefficient = {
        "Healing Touch (Rank 3)": 2.5 / 3.5 * (1 - ((20 - 14) * 0.0375)),
        "Healing Touch (Rank 4)": 3.0 / 3.5,
        "Healing Touch (Rank 5)": 3.5 / 3.5,
        "Healing Touch (Rank 6)": 3.5 / 3.5,
        "Healing Touch (Rank 7)": 3.5 / 3.5,
        "Healing Touch (Rank 8)": 3.5 / 3.5,
        "Healing Touch (Rank 9)": 3.5 / 3.5,
        "Healing Touch (Rank 10)": 3.5 / 3.5,
        "Healing Touch (Rank 11)": 3.5 / 3.5,
    };
    static priestSpells = [
        "Heal (Rank 2)",
        "Heal (Rank 3)",
        "Heal (Rank 4)",
        "Greater Heal (Rank 1)",
        "Greater Heal (Rank 2)",
        "Greater Heal (Rank 3)",
        "Greater Heal (Rank 4)",
        "Greater Heal (Rank 5)",
    ];
    static priestBaseHeal = {
        "Heal (Rank 2)": (445 + 507) / 2,
        "Heal (Rank 3)": (586 + 662) / 2,
        "Heal (Rank 4)": (734 + 827) / 2,
        "Greater Heal (Rank 1)": (924 + 1039) / 2,
        "Greater Heal (Rank 2)": (1178 + 1318) / 2,
        "Greater Heal (Rank 3)": (1470 + 1642) / 2,
        "Greater Heal (Rank 4)": (1813 + 2021) / 2,
        "Greater Heal (Rank 5)": (1966 + 2194) / 2,
    };
    static priestManaCost = {
        "Heal (Rank 2)": 205,
        "Heal (Rank 3)": 255,
        "Heal (Rank 4)": 305,
        "Greater Heal (Rank 1)": 370,
        "Greater Heal (Rank 2)": 455,
        "Greater Heal (Rank 3)": 545,
        "Greater Heal (Rank 4)": 655,
        "Greater Heal (Rank 5)": 710,
    };
    static priestCastTime = {
        "Heal (Rank 2)": 2.5,
        "Heal (Rank 3)": 2.5,
        "Heal (Rank 4)": 2.5,
        "Greater Heal (Rank 1)": 2.5,
        "Greater Heal (Rank 2)": 2.5,
        "Greater Heal (Rank 3)": 2.5,
        "Greater Heal (Rank 4)": 2.5,
        "Greater Heal (Rank 5)": 2.5,
    };
    static priestCoefficient = {
        "Heal (Rank 2)": 3 / 3.5,
        "Heal (Rank 3)": 3 / 3.5,
        "Heal (Rank 4)": 3 / 3.5,
        "Greater Heal (Rank 1)": 3 / 3.5,
        "Greater Heal (Rank 2)": 3 / 3.5,
        "Greater Heal (Rank 3)": 3 / 3.5,
        "Greater Heal (Rank 4)": 3 / 3.5,
        "Greater Heal (Rank 5)": 3 / 3.5,
    };

    static shamanSpells = [
        "Chain Heal (Rank 1)",
        "Chain Heal (Rank 2)",
        "Chain Heal (Rank 3)",
    ];
    static shamanBaseHeal = {
        "Chain Heal (Rank 1)": (332 + 381) / 2,
        "Chain Heal (Rank 2)": (419 + 479) / 2,
        "Chain Heal (Rank 3)": (567 + 646) / 2,
    };
    static shamanManaCost = {
        "Chain Heal (Rank 1)": 260,
        "Chain Heal (Rank 2)": 315,
        "Chain Heal (Rank 3)": 405,
    };
    static shamanCastTime = {
        "Chain Heal (Rank 1)": 2.5,
        "Chain Heal (Rank 2)": 2.5,
        "Chain Heal (Rank 3)": 2.5,
    };
    static shamanCoefficient = {
        "Chain Heal (Rank 1)": 2.5 / 3.5,
        "Chain Heal (Rank 2)": 2.5 / 3.5,
        "Chain Heal (Rank 3)": 2.5 / 3.5,
    };

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

    static getBaseHeal(className, spell) {
        switch (className) {
            case "holypaladin":
                return this.paladinBaseHeal[spell];
            case "holypriest":
                return this.priestBaseHeal[spell];
            case "restoshaman":
                return this.shamanBaseHeal[spell];
            case "restodruid":
                return this.druidBaseHeal[spell];
            default:
                // Invalid class
                return 1;
        }
    }

    static getCastTime(className, spell) {
        switch (className) {
            case "holypaladin":
                return this.paladinCastTime[spell];
            case "holypriest":
                return this.priestCastTime[spell];
            case "restoshaman":
                return this.shamanCastTime[spell];
            case "restodruid":
                return this.druidCastTime[spell];
            default:
                // Invalid class
                return 1;
        }
    }

    static getManaCost(className, spell) {
        switch (className) {
            case "holypaladin":
                return this.paladinManaCost[spell];
            case "holypriest":
                return this.priestManaCost[spell];
            case "restoshaman":
                return this.shamanManaCost[spell];
            case "restodruid":
                return this.druidManaCost[spell];
            default:
                // Invalid class
                return 1;
        }
    }

    static getCoefficient(className, spell) {
        switch (className) {
            case "holypaladin":
                return this.paladinCoefficient[spell];
            case "holypriest":
                return this.priestCoefficient[spell];
            case "restoshaman":
                return this.shamanCoefficient[spell];
            case "restodruid":
                return this.druidCoefficient[spell];
            default:
                // Not valid class
                return 1;
        }
    }
    static getSpells(className) {
        switch (className) {
            case "holypaladin":
                return this.paladinSpells;
            case "holypriest":
                return this.priestSpells;
            case "restoshaman":
                return this.shamanSpells;
            case "restodruid":
                return this.druidSpells;
            default:
            // Not valid class
        }
    }
}

export default Data;