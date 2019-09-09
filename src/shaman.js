const INEFFECTIVE = 15;

class Shaman {

    // Orc Shaman Base Stats
    static baseMana = 1520;
    static baseIntellect = 87 - INEFFECTIVE;
    static baseSpirit = 103 - INEFFECTIVE;
    static intPerCrit = 59.5;
    static mp5PerSpirit = 0;
    static baseSpiritMP5 = 0;

    static spells = [
        "Chain Heal (Rank 1)",
        "Chain Heal (Rank 2)",
        "Chain Heal (Rank 3)",
    ];
    static baseHeal = {
        "Chain Heal (Rank 1)": (332 + 381) / 2,
        "Chain Heal (Rank 2)": (419 + 479) / 2,
        "Chain Heal (Rank 3)": (567 + 646) / 2,
    };
    static manaCost = {
        "Chain Heal (Rank 1)": 260,
        "Chain Heal (Rank 2)": 315,
        "Chain Heal (Rank 3)": 405,
    };
    static castTime = {
        "Chain Heal (Rank 1)": 2.5,
        "Chain Heal (Rank 2)": 2.5,
        "Chain Heal (Rank 3)": 2.5,
    };
    static coefficient = {
        "Chain Heal (Rank 1)": 2.5 / 3.5,
        "Chain Heal (Rank 2)": 2.5 / 3.5,
        "Chain Heal (Rank 3)": 2.5 / 3.5,
    };
}

export default Shaman;
