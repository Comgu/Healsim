import React from 'react';
import Field from './field';
import Stat from './stat';
import Data from './data';
import Utils from './utils';
import Paladin from './paladin';
import './healsim.css';

var baseHeal = Paladin.baseHeal["Flash of Light (Rank 6)"];
var healMulti = Data.healMultiMap["holypaladin"];
var castTime = Paladin.castTime["Flash of Light (Rank 6)"];
var healCoefficient = Paladin.coefficient["Flash of Light (Rank 6)"];
var manaCost = Paladin.manaCost["Flash of Light (Rank 6)"];
var baseMana = Paladin.baseMana;
var baseIntellect = Paladin.baseIntellect;
var baseSpirit = Paladin.baseSpirit;
var mp5PerSpirit = Paladin.mp5PerSpirit;
var baseMP5FromSpirit = Paladin.baseSpiritMP5;
var intPerCrit = Paladin.intPerCrit;

class Healsim extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			spellpower: 0,
			spirit: 0,
			intellect: 0,
			mp5: 0,
			spellcrit: 0,
			hps: Utils.calculateHPS(baseHeal, 0, healMulti, healCoefficient, castTime, 0, 0, Paladin.baseIntellect, Paladin.intPerCrit),
			hpm: Utils.calculateHPM(baseHeal, 0, healMulti, healCoefficient, manaCost, 0, 0, Paladin.baseIntellect, Paladin.intPerCrit),
			healUntilOOM: Utils.calculateOOM(baseHeal, 0, healMulti, healCoefficient, 0, 0, baseSpirit, mp5PerSpirit, baseMP5FromSpirit, manaCost, castTime, baseMana, 0, baseIntellect, 0, Paladin.intPerCrit),
			selectedHealer: "holypaladin",
			selectedSpell: "Flash of Light (Rank 6)",
			spells: Paladin.spells,
			lastSpell: {
				"holypaladin": "Flash of Light (Rank 6)",
				"holypriest": "Greater Heal (Rank 5)",
				"restoshaman": "Chain Heal (Rank 3)",
				"restodruid": "Healing Touch (Rank 11)"
			}
		}
		this.updateButton = this.updateButton.bind(this);
		this.updateState = this.updateState.bind(this);
	}

	render() {
		return (
			<div className="Healsim" >
				<div className="Healsim-sidebar">
					<button className={'holypaladin' == this.state.selectedHealer ? "focusButton" : "sidebarButton"}
						onClick={() => { this.updateButton('holypaladin', this.state.lastSpell["holypaladin"]) }}>Holy Paladin</button>
					<button className={'holypriest' == this.state.selectedHealer ? "focusButton" : "sidebarButton"}
						onClick={() => { this.updateButton('holypriest', this.state.lastSpell["holypriest"]) }}>Holy Priest</button>
					<button className={'restoshaman' == this.state.selectedHealer ? "focusButton" : "sidebarButton"}
						onClick={() => { this.updateButton('restoshaman', this.state.lastSpell["restoshaman"]) }}>Resto Shaman</button>
					<button className={'restodruid' == this.state.selectedHealer ? "focusButton" : "sidebarButton"}
						onClick={() => { this.updateButton('restodruid', this.state.lastSpell["restodruid"]) }}>Resto Druid</button>
				</div>

				<div className="Healsim-spellbar">
					<button className={this.state.spells[0] == this.state.selectedSpell ? "spellfocusButton" : "spellbarButton"}
						onClick={() => { this.updateButton(this.state.selectedHealer, this.state.spells[0]) }}>{this.state.spells[0]}</button>
					<button className={this.state.spells[1] == this.state.selectedSpell ? "spellfocusButton" : "spellbarButton"}
						onClick={() => { this.updateButton(this.state.selectedHealer, this.state.spells[1]) }}> {this.state.spells[1]}</button>
					<button className={this.state.spells[2] == this.state.selectedSpell ? "spellfocusButton" : "spellbarButton"}
						onClick={() => { this.updateButton(this.state.selectedHealer, this.state.spells[2]) }}>{this.state.spells[2]}</button>
					<button className={this.state.spells[3] == this.state.selectedSpell ? "spellfocusButton" : "spellbarButton"}
						onClick={() => { this.updateButton(this.state.selectedHealer, this.state.spells[3]) }}>{this.state.spells[3]}</button>
					<button className={this.state.spells[4] == this.state.selectedSpell ? "spellfocusButton" : "spellbarButton"}
						onClick={() => { this.updateButton(this.state.selectedHealer, this.state.spells[4]) }}>{this.state.spells[4]}</button>
					<button className={this.state.spells[5] == this.state.selectedSpell ? "spellfocusButton" : "spellbarButton"}
						onClick={() => { this.updateButton(this.state.selectedHealer, this.state.spells[5]) }}>{this.state.spells[5]}</button>
					<button className={this.state.spells[6] == this.state.selectedSpell ? "spellfocusButton" : "spellbarButton"}
						onClick={() => { this.updateButton(this.state.selectedHealer, this.state.spells[6]) }}>{this.state.spells[6]}</button>
					<button className={this.state.spells[7] == this.state.selectedSpell ? "spellfocusButton" : "spellbarButton"}
						onClick={() => { this.updateButton(this.state.selectedHealer, this.state.spells[7]) }}>{this.state.spells[7]}</button>
					<button className={this.state.spells[8] == this.state.selectedSpell ? "spellfocusButton" : "spellbarButton"}
						onClick={() => { this.updateButton(this.state.selectedHealer, this.state.spells[8]) }}>{this.state.spells[8]}</button>
				</div>

				<div className="Healsim-leftbody">
					<h1>Character statistics</h1>
					<Field value={this.state.spellpower} update={this.updateState} stat={'spellpower'} />
					<Field value={this.state.spirit} update={this.updateState} stat={'spirit'} />
					<Field value={this.state.intellect} update={this.updateState} stat={'intellect'} />
					<Field value={this.state.mp5} update={this.updateState} stat={'mp5'} />
					<Field value={this.state.spellcrit} update={this.updateState} stat={'spellcrit'} />
				</div>

				<div className="Healsim-rightbody">
					<h1>Healing statistics</h1>
					<Stat value={this.state.hps} stat={"HPS"} />
					<Stat value={this.state.hpm} stat={"HPM"} />
					<Stat value={this.state.healUntilOOM} stat={"Heal until OOM"} />
				</div>
			</div>
		);
	}

	updateState(value, stat) {
		switch (stat) {
			case 'spellpower':
				this.setState({
					spellpower: value,
					hps: Utils.calculateHPS(baseHeal, +value, healMulti, healCoefficient, castTime, +this.state.spellcrit, +this.state.intellect, baseIntellect, intPerCrit),
					hpm: Utils.calculateHPM(baseHeal, +value, healMulti, healCoefficient, manaCost, +this.state.spellcrit, +this.state.intellect, baseIntellect, intPerCrit),
					healUntilOOM: Utils.calculateOOM(baseHeal, +value, healMulti, healCoefficient, +this.state.mp5, +this.state.spirit, baseSpirit, mp5PerSpirit, baseMP5FromSpirit, manaCost, castTime, baseMana, +this.state.intellect, baseIntellect, +this.state.spellcrit, intPerCrit)
				});
				break;
			case 'spirit':
				this.setState({
					spirit: value,
					hps: Utils.calculateHPS(baseHeal, +this.state.spellpower, healMulti, healCoefficient, castTime, +this.state.spellcrit, +this.state.intellect, baseIntellect, intPerCrit),
					hpm: Utils.calculateHPM(baseHeal, +this.state.spellpower, healMulti, healCoefficient, manaCost, +this.state.spellcrit, +this.state.intellect, baseIntellect, intPerCrit),
					healUntilOOM: Utils.calculateOOM(baseHeal, +this.state.spellpower, healMulti, healCoefficient, +this.state.mp5, +value, baseSpirit, mp5PerSpirit, baseMP5FromSpirit, manaCost, castTime, baseMana, +this.state.intellect, baseIntellect, +this.state.spellcrit, intPerCrit)
				});
				break;
			case 'intellect':
				this.setState({
					intellect: value,
					hps: Utils.calculateHPS(baseHeal, +this.state.spellpower, healMulti, healCoefficient, castTime, +this.state.spellcrit, +value, baseIntellect, intPerCrit),
					hpm: Utils.calculateHPM(baseHeal, +this.state.spellpower, healMulti, healCoefficient, manaCost, +this.state.spellcrit, +value, baseIntellect, intPerCrit),
					healUntilOOM: Utils.calculateOOM(baseHeal, +this.state.spellpower, healMulti, healCoefficient, +this.state.mp5, +this.state.spirit, baseSpirit, mp5PerSpirit, baseMP5FromSpirit, manaCost, castTime, baseMana, +value, baseIntellect, +this.state.spellcrit, intPerCrit)
				});
				break;
			case 'mp5':
				this.setState({
					mp5: value,
					hps: Utils.calculateHPS(baseHeal, +this.state.spellpower, healMulti, healCoefficient, castTime, +this.state.spellcrit, +this.state.intellect, baseIntellect, intPerCrit),
					hpm: Utils.calculateHPM(baseHeal, +this.state.spellpower, healMulti, healCoefficient, manaCost, +this.state.spellcrit, +this.state.intellect, baseIntellect, intPerCrit),
					healUntilOOM: Utils.calculateOOM(baseHeal, +this.state.spellpower, healMulti, healCoefficient, +value, +this.state.spirit, baseSpirit, mp5PerSpirit, baseMP5FromSpirit, manaCost, castTime, baseMana, +this.state.intellect, baseIntellect, +this.state.spellcrit, intPerCrit)
				});
				break;
			case 'spellcrit':
				this.setState({
					spellcrit: value,
					hps: Utils.calculateHPS(baseHeal, +this.state.spellpower, healMulti, healCoefficient, castTime, +value, +this.state.intellect, baseIntellect, intPerCrit),
					hpm: Utils.calculateHPM(baseHeal, +this.state.spellpower, healMulti, healCoefficient, manaCost, +value, +this.state.intellect, baseIntellect, intPerCrit),
					healUntilOOM: Utils.calculateOOM(baseHeal, +this.state.spellpower, healMulti, healCoefficient, +this.state.mp5, +this.state.spirit, baseSpirit, mp5PerSpirit, baseMP5FromSpirit, manaCost, castTime, baseMana, +this.state.intellect, baseIntellect, +value, intPerCrit)
				});
				break;
			default:
			// Invalid stat
		}
	}

	updateButton(healer, spell) {
		spell = this.validateHealerSpell(healer, spell);
		var lastSpellTemp = this.state.lastSpell;
		updateGlobalVars(healer, spell);

		switch (healer) {
			case 'holypaladin':
				lastSpellTemp["holypaladin"] = spell;
				break;
			case 'holypriest':
				lastSpellTemp["holypriest"] = spell;
				break;
			case 'restoshaman':
				lastSpellTemp["restoshaman"] = spell;
				break;
			case 'restodruid':
				lastSpellTemp["restodruid"] = spell;
				break;
			default:
			// Invalid class
		}

		this.setState({
			selectedHealer: healer,
			selectedSpell: spell,
			spells: Data.getSpells(healer),
			lastSpell: lastSpellTemp,
			hps: Utils.calculateHPS(baseHeal, this.state.spellpower, healMulti, healCoefficient, castTime, +this.state.spellcrit, +this.state.intellect, baseIntellect, intPerCrit),
			hpm: Utils.calculateHPM(baseHeal, this.state.spellpower, healMulti, healCoefficient, manaCost, +this.state.spellcrit, +this.state.intellect, baseIntellect, intPerCrit),
			healUntilOOM: Utils.calculateOOM(baseHeal, this.state.spellpower, healMulti, healCoefficient, this.state.mp5, this.state.spirit, baseSpirit, mp5PerSpirit, baseMP5FromSpirit, manaCost, castTime, baseMana, this.state.intellect, baseIntellect, +this.state.spellcrit, intPerCrit)
		});
	}

	validateHealerSpell(healer, spell) {
		if (spell == null && healer === this.state.selectedHealer) {
			return this.state.selectedSpell;
		}

		if (spell == null) {
			let spellsArray = Data.getSpells(healer);
			return spellsArray[spellsArray.length - 1];
		}

		return spell;
	}
}

function updateGlobalVars(healer, spell) {
	baseHeal = Data.getBaseHeal(healer, spell);
	castTime = Data.getCastTime(healer, spell);
	manaCost = Data.getManaCost(healer, spell) * Data.manaMultiMap[healer];
	healCoefficient = Data.getCoefficient(healer, spell);
	baseMana = Data.getBaseMana(healer);
	baseIntellect = Data.getBaseIntellect(healer);
	baseSpirit = Data.getBaseSpirit(healer);
	mp5PerSpirit = Data.getMP5PerSpirit(healer);
	baseMP5FromSpirit = Data.getBaseSpiritMP5(healer);
	intPerCrit = Data.getIntPerCrit(healer);
	healMulti = Data.healMultiMap[healer];
}

export default Healsim;