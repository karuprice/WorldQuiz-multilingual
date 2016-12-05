import React, { Component } from 'react';
import LanguageSelector from './components/LangSelector'
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      countryData: [],
      language: '',
      languageCode: ''
    }
  }

  getCountryData() {
    axios.get('https://restcountries.eu/rest/v1/all')
      .then(function (response) {
        this.setState({ countryData: response})
        console.log(this.state.countryData);
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
  }

  componentWillMount(){
    this.getCountryData()
  }

  languageSetter(e) {

    const language = e.target.value;

    let languageCode;

    if (language === "German") languageCode = "de";
    if (language === "French") languageCode = "fr";
    if (language === "Spanish") languageCode = "es";
    if (language === "Japanese") languageCode = "ja";
    if (language === "Italian") languageCode = "it";

    this.setState({
      language: language,
      languageCode: languageCode
    })

  }

  render() {
    return (
      <div className="App">
        Multilingual World Quiz
       <LanguageSelector languageSetter={this.languageSetter.bind(this)}/>
      </div>
    );
  }
}

export default App;
