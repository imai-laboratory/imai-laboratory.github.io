import React from 'react';

export class LanguageSwitcher extends React.Component {
    render() {
      var langs = [
        { code:'en', name: 'English' },
        { code: 'ja', name: '日本語' }
      ];
      var options = langs.map((l) => (
        <option key={l.code} value={l.code}>
          {l.name}
        </option>
      ));
  
      return (
        <div className="control has-icons-left">
          <div className="select">
            <select onChange={e => this.props.changeLang(e.target.value)}>
              {options}
            </select>
          </div>
          <span className="icon is-left">
            <i className="fas fa-globe"></i>
          </span>
        </div>
      );
    }
  }