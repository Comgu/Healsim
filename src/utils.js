
class Utils {

    static calculateHPS(baseHeal, spellPower, healMulti, healCoefficient, castTime, spellCrit, intellect, baseIntellect, intPerCrit) {
        var critChance = this.calculateCrit((+intellect + +baseIntellect), +spellCrit, +intPerCrit);
        return parseFloat(this.calculateHealPerCast(+baseHeal, +spellPower, +healMulti, +healCoefficient, +critChance) / +castTime).toFixed(1);
    }

    static calculateHPM(baseHeal, spellPower, healMulti, healCoefficient, manaCost, spellCrit, intellect, baseIntellect, intPerCrit) {
        var critChance = this.calculateCrit((intellect + baseIntellect), spellCrit, intPerCrit);
        return parseFloat(this.calculateHealPerCast(baseHeal, spellPower, healMulti, healCoefficient, critChance) / manaCost).toFixed(2);
    }

    static calculateOOM(baseHeal, spellPower, healMulti, healCoefficient, manaPerSecond, spirit, baseSpirit, mp5PerSpirit, baseMP5FromSpirit, manaCost, castTime, baseMana, intellect, baseIntellect, spellCrit, intPerCrit) {
        var hps = this.calculateHPS(+baseHeal, +spellPower, +healMulti, +healCoefficient, +castTime, +spellCrit, +intellect, +baseIntellect, +intPerCrit);
        var manaPer5Second = this.calculateEffectiveMP5(+manaPerSecond, +spirit, +baseSpirit, +mp5PerSpirit, +baseMP5FromSpirit);
        var manaExpendedPerSecond = this.calculateManaPerSecond(+manaCost, +castTime);
        var totalMana = this.calculateTotalMana(+baseMana, +intellect, +baseIntellect);
        var manaExpendedAfterMP5 = +manaExpendedPerSecond - (+manaPer5Second / 5);
        if (manaExpendedAfterMP5 <= 0) {
            return 'Infinite';
        }
        return parseFloat(+hps * (+totalMana / +manaExpendedAfterMP5)).toFixed(0);
    }

    static calculateTotalMana(baseMana, intellect, baseIntellect) {
        var intellect = baseIntellect + intellect;
        return (baseMana + (+intellect * 15));
    }

    static calculateEffectiveMP5(mp5, spirit, baseSpirit, mp5PerSpirit, baseMP5FromSpirit) {
        var spirit = (+spirit + +baseSpirit);
        var combatRegenPercent = 0.15;
        var combatRegen = (+baseMP5FromSpirit + (+spirit * +mp5PerSpirit)) * +combatRegenPercent;
        return (+mp5 + +combatRegen);
    }

    static calculateCrit(intellect, additionalCrit, intPerCrit) {
        return parseFloat(+additionalCrit + (+intellect / +intPerCrit)).toFixed(2);
    }

    static calculateManaPerSecond(manaCost, castTime) {
        return (+manaCost / +castTime);
    }

    static calculateHealPerCast(baseHeal, spellPower, healMulti, healCoefficient, critChance) {
        var nonCritHeal = ((+baseHeal + +spellPower * +healCoefficient) * +healMulti);
        var critHeal = +nonCritHeal * 1.5;
        return ((+nonCritHeal * (1 - (+critChance) / 100)) + (+critHeal * (+critChance / 100)));
    }
}

export default Utils;
