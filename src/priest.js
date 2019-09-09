const INEFFECTIVE = 15;

class Priest {

    // Dwarf Priest Base Stats
    static baseMana = 1436;
    static baseIntellect = 119 - INEFFECTIVE;
    static baseSpirit = 124 - INEFFECTIVE;
    static intPerCrit = 59.2;
    static mp5PerSpirit = 0.25 * 2.5;
    static baseSpiritMP5 = 32.5;

    static spells = [
        "Heal (Rank 2)",
        "Heal (Rank 3)",
        "Heal (Rank 4)",
        "Greater Heal (Rank 1)",
        "Greater Heal (Rank 2)",
        "Greater Heal (Rank 3)",
        "Greater Heal (Rank 4)",
        "Greater Heal (Rank 5)",
    ];

    static baseHeal = {
        "Heal (Rank 2)": (445 + 507) / 2,
        "Heal (Rank 3)": (586 + 662) / 2,
        "Heal (Rank 4)": (734 + 827) / 2,
        "Greater Heal (Rank 1)": (924 + 1039) / 2,
        "Greater Heal (Rank 2)": (1178 + 1318) / 2,
        "Greater Heal (Rank 3)": (1470 + 1642) / 2,
        "Greater Heal (Rank 4)": (1813 + 2021) / 2,
        "Greater Heal (Rank 5)": (1966 + 2194) / 2,
    };

    static manaCost = {
        "Heal (Rank 2)": 205,
        "Heal (Rank 3)": 255,
        "Heal (Rank 4)": 305,
        "Greater Heal (Rank 1)": 370,
        "Greater Heal (Rank 2)": 455,
        "Greater Heal (Rank 3)": 545,
        "Greater Heal (Rank 4)": 655,
        "Greater Heal (Rank 5)": 710,
    };

    static castTime = {
        "Heal (Rank 2)": 2.5,
        "Heal (Rank 3)": 2.5,
        "Heal (Rank 4)": 2.5,
        "Greater Heal (Rank 1)": 2.5,
        "Greater Heal (Rank 2)": 2.5,
        "Greater Heal (Rank 3)": 2.5,
        "Greater Heal (Rank 4)": 2.5,
        "Greater Heal (Rank 5)": 2.5,
    };

    static coefficient = {
        "Heal (Rank 2)": 3 / 3.5,
        "Heal (Rank 3)": 3 / 3.5,
        "Heal (Rank 4)": 3 / 3.5,
        "Greater Heal (Rank 1)": 3 / 3.5,
        "Greater Heal (Rank 2)": 3 / 3.5,
        "Greater Heal (Rank 3)": 3 / 3.5,
        "Greater Heal (Rank 4)": 3 / 3.5,
        "Greater Heal (Rank 5)": 3 / 3.5,
    };
}

export default Priest;