import React from 'react';

export class ContentB3 extends React.Component {
  render() {
    return (
      <div id='content_b3'>
        <section className='hero is-small is-primary is-bold'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
              <h1 className='title'>
                {this.props.texts['menu_b3']}
              </h1>
            </div>
          </div>
        </section>
        <div className='container'>
          <div className='box'>
            <p className='has-text-centered'>
              {this.props.texts['b3_preparing']}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
