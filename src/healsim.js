import React from 'react';
import Field from './field';
import Stat from './stat';
import './healsim.css';

var baseheal = 368.5;
var healmulti = 1.12;
var casttime = 1.5;
var healcoefficient = (1.5/3.5); 
var manacost = 140;

class Healsim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spellpower: 0,
      spirit: 0,
      intellect: 0,
      mp5: 0,
      spellcrit: 0,
      hps: parseFloat(baseheal / casttime).toFixed(1),
      hpm: parseFloat(baseheal / manacost).toFixed(2),
      healUntiloom: "TBD",
      selectedButton: 'holypaladin',
    }

    this.updateSpells = this.updateButton.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState = (value, stat) => {
    switch(stat){
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

  updateButton(healer) {
    switch(healer) {
      case 'holypaladin':
        // Max rank Flash of Light
        baseheal = 368.5;
        healmulti = 1.12;
        casttime = 1.5;
        healcoefficient = (1.5/3.5);
        manacost = 140;
        this.setState({selectedButton: 'holypaladin'});
        break;
      case 'holypriest':
        // Heal (Rank 4)
        baseheal = 780.5;
        healmulti = 1.1;
        casttime = 2.5;
        healcoefficient = (3.0/3.5);
        manacost = 305 * 0.85;
        this.setState({selectedButton: 'holypriest'});
        break;
      case 'disciplinepriest':
        // Heal (Rank 4) Same as holy priest for now
        baseheal = 780.5;
        healmulti = 1;
        casttime = 2.5;
        healcoefficient = (3.0/3.5);
        manacost = 305 * 0.85;
        this.setState({selectedButton: 'disciplinepriest'});
        break;
      case 'restoshaman':
        // Chain Heal (Rank 1)
        baseheal = 356.5;
        healmulti = 1.1;
        casttime = 2.5;
        healcoefficient = (2.5/3.5/3);
        manacost = 260 * 0.95;
        this.setState({selectedButton: 'restoshaman'});
        break;
      case 'restodruid':
        // Healing Touch (Rank 3)
        baseheal = 228.5;
        healmulti = 1.1;
        casttime = 2.0;
        healcoefficient = (2.5/3.5);
        manacost = 110 * 0.81;
        this.setState({selectedButton: 'restodruid'});
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
        <div className="Healsim-sidebar">
          <button className={'holypaladin' == this.state.selectedButton ? "focusButton" : "sidebarButton"} 
          onClick={ () => {this.updateButton('holypaladin')}}>Holy Paladin</button>
          <button className={'holypriest' == this.state.selectedButton ? "focusButton" : "sidebarButton"} 
          onClick={ () => {this.updateButton('holypriest')}}>Holy Priest</button>
          <button className={'disciplinepriest' == this.state.selectedButton ? "focusButton" : "sidebarButton"} 
          onClick={ () => {this.updateButton('disciplinepriest')}}>Discipline Priest</button>
          <button className={'restoshaman' == this.state.selectedButton ? "focusButton" : "sidebarButton"} 
          onClick={ () => {this.updateButton('restoshaman')}}>Resto Shaman</button>
          <button className={'restodruid' == this.state.selectedButton ? "focusButton" : "sidebarButton"} 
          onClick={ () => {this.updateButton('restodruid')}}>Resto Druid</button>
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