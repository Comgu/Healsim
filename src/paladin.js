const INEFFECTIVE = 15;

class Paladin {

    // Human Paladin Base Stats
    static baseMana = 1512;
    static baseIntellect = 70 - INEFFECTIVE;
    static baseSpirit = 78 - INEFFECTIVE;
    static intPerCrit = 29.5;
    static mp5PerSpirit = 0;
    static baseSpiritMP5 = 0;

    static spells = [
        "Flash of Light (Rank 1)",
        "Flash of Light (Rank 2)",
        "Flash of Light (Rank 3)",
        "Flash of Light (Rank 4)",
        "Flash of Light (Rank 5)",
        "Flash of Light (Rank 6)",
    ];

    static baseHeal = {
        "Flash of Light (Rank 1)": (67 + 77) / 2,
        "Flash of Light (Rank 2)": (102 + 117) / 2,
        "Flash of Light (Rank 3)": (153 + 171) / 2,
        "Flash of Light (Rank 4)": (206 + 231) / 2,
        "Flash of Light (Rank 5)": (278 + 310) / 2,
        "Flash of Light (Rank 6)": (348 + 389) / 2,
    };

    static manaCost = {
        "Flash of Light (Rank 1)": 35,
        "Flash of Light (Rank 2)": 50,
        "Flash of Light (Rank 3)": 70,
        "Flash of Light (Rank 4)": 90,
        "Flash of Light (Rank 5)": 115,
        "Flash of Light (Rank 6)": 140,
    };

    static castTime = {
        "Flash of Light (Rank 1)": 1.5,
        "Flash of Light (Rank 2)": 1.5,
        "Flash of Light (Rank 3)": 1.5,
        "Flash of Light (Rank 4)": 1.5,
        "Flash of Light (Rank 5)": 1.5,
        "Flash of Light (Rank 6)": 1.5,
    };

    static coefficient = {
        "Flash of Light (Rank 1)": 1.5 / 3.5,
        "Flash of Light (Rank 2)": 1.5 / 3.5,
        "Flash of Light (Rank 3)": 1.5 / 3.5,
        "Flash of Light (Rank 4)": 1.5 / 3.5,
        "Flash of Light (Rank 5)": 1.5 / 3.5,
        "Flash of Light (Rank 6)": 1.5 / 3.5,
    };
}

export default Paladin;
