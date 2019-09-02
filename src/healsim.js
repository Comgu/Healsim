import React from 'react';
import Field from './field';
import Stat from './stat';
import Spells from './spells';
import './healsim.css';

var baseheal = Spells.paladinBaseHeal["Flash of Light (Rank 6)"];
var healmulti = 1.12;
var casttime = Spells.paladinCastTime["Flash of Light (Rank 6)"];
var healcoefficient = (Spells.paladinCastTime["Flash of Light (Rank 6)"] / 3.5);
var manacost = Spells.paladinManaCost["Flash of Light (Rank 6)"];

class Healsim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spellpower: 0,
      spirit: 0,
      intellect: 0,
      mp5: 0,
      spellcrit: 0,
      hps: calculateHPS(baseheal, 0, healmulti, healcoefficient, casttime),
      hpm: calculateHPM(baseheal, 0, healmulti, healcoefficient, manacost),
      healUntiloom: "TBD",
      selectedButton: 'holypaladin',
      selectedSpell: 'Flash of Light (Rank 6)',
      spells: Spells.paladinSpells,
    }

    this.updateSpells = this.updateButton.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState = (value, stat) => {
    switch (stat) {
      case 'spellpower':
        this.setState({
          spellpower: value,
          hps: calculateHPS(baseheal, +value, healmulti, healcoefficient, casttime),
          hpm: calculateHPM(baseheal, +value, healmulti, healcoefficient, manacost),
          healUntiloom: "TBD"
        });
        break;
      case 'spirit':
        this.setState({
          spirit: value,
          hps: calculateHPS(baseheal, this.state.spellpower, healmulti, healcoefficient, casttime),
          hpm: calculateHPM(baseheal, this.state.spellpower, healmulti, healcoefficient, manacost),
          healUntiloom: "TBD"
        });

        break;
      case 'intellect':
        this.setState({
          intellect: value,
          hps: calculateHPS(baseheal, this.state.spellpower, healmulti, healcoefficient, casttime),
          hpm: calculateHPM(baseheal, this.state.spellpower, healmulti, healcoefficient, manacost),
          healUntiloom: "TBD"
        });
        break;
      case 'mp5':
        this.setState({
          mp5: value,
          hps: calculateHPS(baseheal, this.state.spellpower, healmulti, healcoefficient, casttime),
          hpm: calculateHPM(baseheal, this.state.spellpower, healmulti, healcoefficient, manacost),
          healUntiloom: "TBD"
        });
        break;
      case 'spellcrit':
        this.setState({
          spellcrit: value,
          hps: calculateHPS(baseheal, this.state.spellpower, healmulti, healcoefficient, casttime),
          hpm: calculateHPM(baseheal, this.state.spellpower, healmulti, healcoefficient, manacost),
          healUntiloom: "TBD"
        });
        break;
    }
  }

  updateButton(healer, spell) {
    switch (healer) {
      case 'holypaladin':
        if (spell == null) {
          spell = this.state.selectedSpell;
        }
        baseheal = Spells.paladinBaseHeal[spell];
        healmulti = 1.12;
        casttime = Spells.paladinCastTime[spell];
        healcoefficient = (Spells.paladinCastTime[spell] / 3.5);
        manacost = Spells.paladinManaCost[spell];
        this.setState({
          selectedButton: 'holypaladin',
          selectedSpell: spell,
          spells: Spells.paladinSpells
        });
        break;
      case 'holypriest':
        if (spell == null) {
          spell = this.state.selectedSpell;
        }
        baseheal = Spells.priestBaseHeal[spell];
        healmulti = 1.1;
        casttime = Spells.priestCastTime[spell] - 0.5;
        healcoefficient = (Spells.priestCastTime[spell] / 3.5);
        manacost = Spells.priestManaCost[spell] * 0.85;
        this.setState({
          selectedButton: 'holypriest',
          selectedSpell: spell,
          spells: Spells.priestSpells
        });
        break;
      case 'disciplinepriest':
        if (spell == null) {
          spell = this.state.selectedSpell;
        }
        baseheal = Spells.priestBaseHeal[spell];
        healmulti = 1;
        casttime = Spells.priestCastTime[spell] - 0.5;
        healcoefficient = (Spells.priestCastTime[spell] / 3.5);
        manacost = Spells.priestManaCost[spell] * 0.85;
        this.setState({
          selectedButton: 'disciplinepriest',
          selectedSpell: spell,
          spells: Spells.priestSpells
        });
        break;
      case 'restoshaman':
        if (spell == null) {
          spell = this.state.selectedSpell;
        }
        baseheal = Spells.shamanBaseHeal[spell];
        healmulti = 1.1 * (1 + 0.5 + 0.25);
        casttime = Spells.shamanCastTime[spell];
        healcoefficient = (Spells.shamanCastTime[spell] / 3.5);
        manacost = Spells.shamanManaCost[spell] * 0.95;
        this.setState({
          selectedButton: 'restoshaman',
          selectedSpell: spell,
          spells: Spells.shamanSpells
        });
        break;
      case 'restodruid':
        if (spell == null) {
          spell = this.state.selectedSpell;
        }
        baseheal = Spells.druidBaseHeal[spell];
        healmulti = 1.1;
        casttime = Spells.druidCastTime[spell] - 0.5;
        healcoefficient = (spell === "Healing Touch (Rank 3)") ? (Spells.druidCastTime[spell] / 3.5) * (1 - ((20 - 14) * 0.0375)) : (Spells.druidCastTime[spell] / 3.5);
        manacost = Spells.druidManaCost[spell] * 0.81;
        this.setState({
          selectedButton: 'restodruid',
          selectedSpell: spell,
          spells: Spells.druidSpells
        });
        break;
    }
    this.setState({
      hps: calculateHPS(baseheal, this.state.spellpower, healmulti, healcoefficient, casttime),
      hpm: calculateHPM(baseheal, this.state.spellpower, healmulti, healcoefficient, manacost),
      healUntiloom: "TBD"
    });
  }

  render() {
    return (
      <div className="Healsim" >
        <div className="Healsim-sidebar">
          <button className={'holypaladin' == this.state.selectedButton ? "focusButton" : "sidebarButton"}
            onClick={() => { this.updateButton('holypaladin', "Flash of Light (Rank 6)") }}>Holy Paladin</button>
          <button className={'holypriest' == this.state.selectedButton ? "focusButton" : "sidebarButton"}
            onClick={() => { this.updateButton('holypriest', "Heal (Rank 3)") }}>Holy Priest</button>
          <button className={'disciplinepriest' == this.state.selectedButton ? "focusButton" : "sidebarButton"}
            onClick={() => { this.updateButton('disciplinepriest', "Heal (Rank 3)") }}>Discipline Priest</button>
          <button className={'restoshaman' == this.state.selectedButton ? "focusButton" : "sidebarButton"}
            onClick={() => { this.updateButton('restoshaman', "Chain Heal (Rank 1)") }}>Resto Shaman</button>
          <button className={'restodruid' == this.state.selectedButton ? "focusButton" : "sidebarButton"}
            onClick={() => { this.updateButton('restodruid', "Healing Touch (Rank 4)") }}>Resto Druid</button>
        </div>
        <div className="Healsim-spellbar">
          <button className={this.state.spells[0] == this.state.selectedSpell ? "spellfocusButton" : "spellbarButton"}
            onClick={() => { this.updateButton(this.state.selectedButton, this.state.spells[0]) }}>{this.state.spells[0]}</button>
          <button className={this.state.spells[1] == this.state.selectedSpell ? "spellfocusButton" : "spellbarButton"}
            onClick={() => { this.updateButton(this.state.selectedButton, this.state.spells[1]) }}> {this.state.spells[1]}</button>
          <button className={this.state.spells[2] == this.state.selectedSpell ? "spellfocusButton" : "spellbarButton"}
            onClick={() => { this.updateButton(this.state.selectedButton, this.state.spells[2]) }}>{this.state.spells[2]}</button>
          <button className={this.state.spells[3] == this.state.selectedSpell ? "spellfocusButton" : "spellbarButton"}
            onClick={() => { this.updateButton(this.state.selectedButton, this.state.spells[3]) }}>{this.state.spells[3]}</button>
          <button className={this.state.spells[4] == this.state.selectedSpell ? "spellfocusButton" : "spellbarButton"}
            onClick={() => { this.updateButton(this.state.selectedButton, this.state.spells[4]) }}>{this.state.spells[4]}</button>
          <button className={this.state.spells[5] == this.state.selectedSpell ? "spellfocusButton" : "spellbarButton"}
            onClick={() => { this.updateButton(this.state.selectedButton, this.state.spells[5]) }}>{this.state.spells[5]}</button>
          <button className={this.state.spells[6] == this.state.selectedSpell ? "spellfocusButton" : "spellbarButton"}
            onClick={() => { this.updateButton(this.state.selectedButton, this.state.spells[6]) }}>{this.state.spells[6]}</button>
          <button className={this.state.spells[7] == this.state.selectedSpell ? "spellfocusButton" : "spellbarButton"}
            onClick={() => { this.updateButton(this.state.selectedButton, this.state.spells[7]) }}>{this.state.spells[7]}</button>
          <button className={this.state.spells[8] == this.state.selectedSpell ? "spellfocusButton" : "spellbarButton"}
            onClick={() => { this.updateButton(this.state.selectedButton, this.state.spells[8]) }}>{this.state.spells[8]}</button>
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
          <Stat value={this.state.healUntiloom} stat={"Heal until OOM"} />
        </div>

      </div>
    );
  }
}

function calculateHPS(baseheal, spellpower, healmulti, coefficient, casttime) {
  return parseFloat((baseheal + spellpower * healcoefficient) * healmulti / casttime).toFixed(1);
}

function calculateHPM(baseheal, spellpower, healmulti, coefficient, manacost) {
  return parseFloat((baseheal + spellpower * healcoefficient) * healmulti / manacost).toFixed(2);
}

export default Healsim;