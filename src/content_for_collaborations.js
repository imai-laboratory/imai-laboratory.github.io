import React from 'react';

export class ContentForCollaborations extends React.Component {
  render() {
    const texts = this.props.texts;

    return (
      <div>
        <div id='content_for_collaborations'>
          {/* Hero Section */}
          <section className='hero is-small is-primary is-bold'>
            <div className='hero-body'>
              <div className='container has-text-centered'>
                <h1 className='title'>
                  {texts['menu_for_collaborations']}
                </h1>
              </div>
            </div>
          </section>

          {/* About Section */}
          <div className='container my-5'>
            <div className='box'>
              <h3 className='title p-2 is-4 is-size-5-mobile'>{texts['for_collaborations_about']}</h3>
            </div>
          </div>

          {/* Examples Section */}
          <div className='container my-5'>
            <div className='box'>
              <h2 className='title is-4'>{texts['for_collaborations_example']}</h2>
              <ul className='content custom-list mx-4'>
                <li>{texts['for_collaborations_example1']}</li>
                <li>{texts['for_collaborations_example2']}</li>
                <li>{texts['for_collaborations_example3']}</li>
                <li>{texts['for_collaborations_example4']}</li>
                <li>{texts['for_collaborations_example5']}</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className='container my-5'>
            <div className='box'>
              <h2 className='title is-4 is-size-5-mobile'>{texts['for_collaborations_contact']}</h2>
              <div className='content is-flex is-flex-direction-column'>
                <p>{texts['for_collaborations_access']}</p>
                <p>
                  <strong>Email:</strong> <a href={`mailto:${texts['for_collaborations_email']}`}>{texts['for_collaborations_email']}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
