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
        <div class="control has-icons-left">
          <div class="select">
            <select onChange={e => this.props.changeLang(e.target.value)}>
              {options}
            </select>
          </div>
          <span class="icon is-left">
            <i class="fas fa-globe"></i>
          </span>
        </div>
      );
    }
  }