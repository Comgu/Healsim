
class Utils {

    static calculateHPS(baseHeal, spellPower, healMulti, healCoefficient, castTime) {
        return parseFloat((baseHeal + spellPower * healCoefficient) * healMulti / castTime).toFixed(1);
    }

    static calculateHPM(baseHeal, spellPower, healMulti, healCoefficient, manaCost) {
        return parseFloat((baseHeal + spellPower * healCoefficient) * healMulti / manaCost).toFixed(2);
    }

    static calculateOOM(baseHeal, spellPower, healMulti, healCoefficient, manaPerSecond, spirit, baseSpirit, mp5PerSpirit, baseMP5FromSpirit, manaCost, castTime, baseMana, intellect, baseIntellect) {
        var hps = this.calculateHPS(baseHeal, spellPower, healMulti, healCoefficient, castTime);
        var manaPer5Second = this.calculateEffectiveMP5(manaPerSecond, spirit, baseSpirit, mp5PerSpirit, baseMP5FromSpirit);
        var manaExpendedPerSecond = this.calculateManaPerSecond(manaCost, castTime);
        var totalMana = this.calculateTotalMana(baseMana, intellect, baseIntellect);
        var manaExpendedAfterMP5 = manaExpendedPerSecond - (manaPer5Second / 5);
        if (manaExpendedAfterMP5 <= 0) {
            return 'Infinite';
        }
        return parseFloat(hps * (totalMana / manaExpendedAfterMP5)).toFixed(0);
    }

    static calculateHealPerCast(baseHeal, spellPower, healMulti, healCoefficient) {
        return (baseHeal + (spellPower * healCoefficient)) * healMulti;
    }

    static calculateTotalMana(baseMana, intellect, baseIntellect) {
        var intellect = baseIntellect + intellect;
        return (baseMana + (intellect * 15));
    }

    static calculateEffectiveMP5(mp5, spirit, baseSpirit, mp5PerSpirit, baseMP5FromSpirit) {
        var spirit = (spirit + baseSpirit);
        var combatRegenPercent = 0.15;
        return mp5 + ((baseMP5FromSpirit + (spirit * mp5PerSpirit)) * combatRegenPercent);
    }

    static calculateCrit(intellect, additionalCrit, intPerCrit) {
        return parseFloat(additionalCrit + (intellect / intPerCrit)).toFixed(2);
    }

    static calculateManaPerSecond(manaCost, castTime) {
        return (manaCost / castTime);
    }
}

export default Utils;
