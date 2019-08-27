import React from 'react';
import logo from './logo.svg';
import './Webgame.css';

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
        <input type="text"
          placeholder="0"
          value={this.state.value}
          onChange={i => this.handleChange(i)}
        /> 

    );
  }
}

class Stat extends React.Component {
  render() {
    return(
      <ul>
        {this.props.value}
      </ul>
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
      hps: 0,
      hpm: 0,
      healUntiloom: 0,
      casttime: 3,
    }
  }

  updateState = (value, stat) => {
    switch(stat){
      case 'spellpower':
        this.setState({
          spellpower: value,
          hps: +value + +this.state.spirit,
          hpm: +value + +this.state.intellect,
          healUntiloom: +value + +this.state.mp5
        });
        break;
      case 'spirit':
        this.setState({
          spirit: value,
          hps: +this.state.spellpower + +value,
          hpm: +this.state.spellpower + +this.state.intellect,
          healUntiloom: +this.state.spellpower + +this.state.mp5
        });
        
        break;
      case 'intellect':
        this.setState({
          intellect: value,
          hps: +this.state.spellpower + +this.state.spirit,
          hpm: +this.state.spellpower + +value,
          healUntiloom: +this.state.spellpower + +this.state.mp5
        });
        break;
      case 'mp5':
        this.setState({
          mp5: value,
          hps: +this.state.spellpower + +this.state.spirit,
          hpm: +this.state.spellpower + +this.state.intellect,
          healUntiloom: +this.state.spellpower + +value
        });
        break;
      case 'spellcrit':
        this.setState({
          spellcrit: value,
          hps: +this.state.spellpower + +this.state.spirit,
          hpm: +this.state.spellpower + +this.state.intellect,
          healUntiloom: +this.state.spellpower + +this.state.mp5
        });
        break;
    }
  }

  render() {
    return (
      <div className="Webgame" >
        <div className="Webgame-leftbody">
          <Field value={this.state.spellpower} update={this.updateState} stat={'spellpower'} />
          <Field value={this.state.spirit} update={this.updateState} stat={'spirit'} />
          <Field value={this.state.intellect} update={this.updateState} stat={'intellect'} />
          <Field value={this.state.mp5} update={this.updateState} stat={'mp5'} />
          <Field value={this.state.spellcrit} update={this.updateState} stat={'spellcrit'} />
        </div>
        <div className="Webgame-rightbody">
          <Stat value={this.state.hps}/> 
          <Stat value={this.state.hpm}/>
          <Stat value={this.state.healUntiloom}/>
        </div>
        <div className="Webgame-sidebar">
          <button className="myButton">Holy Paladin</button>
          <button className="myButton">Holy Priest</button>
          <button className="myButton">Discipline Priest</button>
          <button className="myButton">Resto Shaman</button>
          <button className="myButton">Resto Druid</button>
        </div>
      </div>
    );
  }
}

export default Webgame;