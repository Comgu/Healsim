import React from 'react';
import logo from './logo.svg';
import './Webgame.css';

var healamount = 368.5;
var healmulti = 1.12;
var casttime = 1.5;
var healcoefficient = (1.5/3.5);
var manacost = 140;

class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      update: props.update,
      stat: props.stat,
    }
  }

  handleChange(i) {
    this.setState({
      value: i.target.value,
    });

    this.state.update(i.target.value, this.state.stat);
  }

  render() {
    return (
      <ul>
        <label>{this.state.stat.toUpperCase()}</label>
        <input type="text"
          placeholder="0"
          value={this.state.value}
          onChange={i => this.handleChange(i)}
        /> 
      </ul>
    );
  }
}

class Stat extends React.Component {
  render() {
    return(
      <div>
        <ul id="statheader">
          {this.props.stat}
        </ul>
        <ul>
          {this.props.value}
        </ul>
      </div>
    )
  }
}

class Webgame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spellpower: 0,
      spirit: 0,
      intellect: 0,
      mp5: 0,
      spellcrit: 0,
      hps: parseFloat(healamount / casttime).toFixed(1),
      hpm: parseFloat(healamount / manacost).toFixed(2),
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
          hps: parseFloat(((healamount + +value*healcoefficient) / casttime)*healmulti).toFixed(1),
          hpm: parseFloat(((healamount + +value*healcoefficient) / manacost)*healmulti).toFixed(2),
          healUntiloom: "TBD"
        });
        break;
      case 'spirit':
        this.setState({
          spirit: value,
          hps: parseFloat((healamount + +this.state.spellpower*healcoefficient)*healmulti / casttime).toFixed(1),
          hpm: parseFloat((healamount + +this.state.spellpower*healcoefficient)*healmulti / manacost).toFixed(2),
          healUntiloom: "TBD"
        });
        
        break;
      case 'intellect':
        this.setState({
          intellect: value,
          hps: parseFloat((healamount + +this.state.spellpower*healcoefficient)*healmulti / casttime).toFixed(1),
          hpm: parseFloat((healamount + +this.state.spellpower*healcoefficient)*healmulti / manacost).toFixed(2),
          healUntiloom: "TBD"
        });
        break;
      case 'mp5':
        this.setState({
          mp5: value,
          hps: parseFloat((healamount + +this.state.spellpower*healcoefficient)*healmulti / casttime).toFixed(1),
          hpm: parseFloat((healamount + +this.state.spellpower*healcoefficient)*healmulti / manacost).toFixed(2),
          healUntiloom: "TBD"
        });
        break;
      case 'spellcrit':
        this.setState({
          spellcrit: value,
          hps: parseFloat((healamount + +this.state.spellpower*healcoefficient)*healmulti / casttime).toFixed(1),
          hpm: parseFloat((healamount + +this.state.spellpower*healcoefficient)*healmulti / manacost).toFixed(2),
          healUntiloom: "TBD"
        });
        break;
    }
  }

  updateButton(healer) {
    switch(healer) {
      case 'holypaladin':
        // Max rank Flash of Light
        healamount = 368.5;
        healmulti = 1.12;
        casttime = 1.5;
        healcoefficient = (1.5/3.5);
        manacost = 140;
        this.setState({selectedButton: 'holypaladin'});
        break;
      case 'holypriest':
        // Heal (Rank 4)
        healamount = 780.5;
        healmulti = 1.1;
        casttime = 2.5;
        healcoefficient = (3.0/3.5);
        manacost = 305 * 0.85;
        this.setState({selectedButton: 'holypriest'});
        break;
      case 'disciplinepriest':
        // Heal (Rank 4) Same as holy priest for now
        healamount = 780.5;
        healmulti = 1;
        casttime = 2.5;
        healcoefficient = (3.0/3.5);
        manacost = 305 * 0.85;
        this.setState({selectedButton: 'disciplinepriest'});
        break;
      case 'restoshaman':
        // Chain Heal (Rank 1)
        healamount = 356.5;
        healmulti = 1.1;
        casttime = 2.5;
        healcoefficient = (2.5/3.5/3);
        manacost = 260 * 0.95;
        this.setState({selectedButton: 'restoshaman'});
        break;
      case 'restodruid':
        // Healing Touch (Rank 3)
        healamount = 228.5;
        healmulti = 1.1;
        casttime = 2.0;
        healcoefficient = (2.5/3.5);
        manacost = 110 * 0.81;
        this.setState({selectedButton: 'restodruid'});
        break;
    }
    this.setState({
      hps: parseFloat((healamount + +this.state.spellpower*healcoefficient)*healmulti / casttime).toFixed(1),
      hpm: parseFloat((healamount + +this.state.spellpower*healcoefficient)*healmulti / manacost).toFixed(2),
      healUntiloom: "TBD"
    });
  }

  render() {
    return (
      <div className="Webgame" >
        <div className="Webgame-leftbody">
          <h1>Character statistics</h1>
          <Field value={this.state.spellpower} update={this.updateState} stat={'spellpower'} />
          <Field value={this.state.spirit} update={this.updateState} stat={'spirit'} />
          <Field value={this.state.intellect} update={this.updateState} stat={'intellect'} />
          <Field value={this.state.mp5} update={this.updateState} stat={'mp5'} />
          <Field value={this.state.spellcrit} update={this.updateState} stat={'spellcrit'} />
        </div>
        <div className="Webgame-rightbody">
          <h1>Healing statistics</h1>
          <Stat value={this.state.hps} stat={"HPS"} /> 
          <Stat value={this.state.hpm} stat={"HPM"} />
          <Stat value={this.state.healUntiloom} stat={"Heal until OOM"} />
        </div>
        <div className="Webgame-sidebar">
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

export default Webgame;