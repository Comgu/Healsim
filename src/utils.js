
class Utils {

    static calculateHPS(baseheal, spellpower, healmulti, healcoefficient, casttime) {
        return parseFloat((baseheal + spellpower * healcoefficient) * healmulti / casttime).toFixed(1);
    }

    static calculateHPM(baseheal, spellpower, healmulti, healcoefficient, manacost) {
        return parseFloat((baseheal + spellpower * healcoefficient) * healmulti / manacost).toFixed(2);
    }
}

export default Utils;
