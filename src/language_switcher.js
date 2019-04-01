import React from 'react';

export class LanguageSwitcher extends React.Component {
  render() {
    var langs = [
      { code: 'en', name: 'English' },
      { code: 'ja', name: '日本語' }
    ];
    var options = langs.map((l) => (
      <option key={l.code} value={l.code}>
        {l.name}
      </option>
    ));

    return (
      <div className='control has-icons-left'>
        <div className='select mr-2 mb-dt-0 mb-2'>
          <select onChange={e => this.props.changeLang(e.target.value)}>
            {options}
          </select>
        </div>
        <span className='icon is-left'>
          <i className='fas fa-globe' />
        </span>
      </div>
    );
  }
}
