import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
  state = { language: 'english', button: 'red' };

  onLanguageChange = (language, button) => {
    this.setState({ language, button });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i className="flag us" onClick={() => this.onLanguageChange('english', 'red')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch', 'primary')} />
        </div>
        <ColorContext.Provider value={this.state.button}>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
