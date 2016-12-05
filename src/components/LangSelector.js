import React, { Component } from 'react';
import France from '../img/France.png'
import Germany from '../img/Germany.png'
import Italy from '../img/Italy.png'
import Japan from '../img/Japanese.png'
import Spain from '../img/Spain.png'

class LangSelector extends Component {
  render() {
    return (
      <div>
            <thumbnail src={France} alt="242x200">
              <button value="French" onClick={this.props.languageSetter} >French</button>&nbsp;
            </thumbnail>

            <thumbnail src={Germany} alt="242x200">
              <button value="German" onClick={this.props.languageSetter} >German</button>&nbsp;
            </thumbnail>

            <thumbnail src={Italy} alt="242x200">
              <button value="Italian" onClick={this.props.languageSetter} >Italian</button>&nbsp;
            </thumbnail>

            <thumbnail src={Japan} alt="242x200">
              <button value="Japanese" onClick={this.props.languageSetter} >Japanese</button>&nbsp;
            </thumbnail>

            <thumbnail src={Spain} alt="242x200">
              <button value="Spanish" onClick={this.props.languageSetter} >Spanish</button>&nbsp;
            </thumbnail>
      </div>
    );
  }
}

export default LangSelector;