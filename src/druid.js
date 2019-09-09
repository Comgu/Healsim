const INEFFECTIVE = 15;

class Druid {

    // Night Elf Druid Base Stats
    static baseMana = 1244;
    static baseIntellect = 100 - INEFFECTIVE;
    static baseSpirit = 110 - INEFFECTIVE;
    static intPerCrit = 60;
    static mp5PerSpirit = 0.2 * 2.5;
    static baseSpiritMP5 = 37.5;

    static spells = [
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

    static baseHeal = {
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

    static manaCost = {
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

    static castTime = {
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

    static coefficient = {
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
}

export default Druid;