import React from 'react';

const UrlBase =
  'https://raw.githubusercontent.com/imai-laboratory/members_data/master/';
// Json URLs from members repository.
const MembersJson = UrlBase + 'members.json';
const MembersPastJson = UrlBase + 'past_members.json';
// Image URL
const MemberImageURL = UrlBase + 'imgs/';

function fetchJson(url) {
  return new Promise((resolve) => {
    fetch(url, {cache: 'no-store'}).then((resp) => {
      return resp.json();
    }).then((json) => {
      resolve(json);
    }).catch((ex) => {
      console.error(ex);
    });
  });
}

function getLangText(elem, lang) {
  var text = elem[lang];
  if (text === undefined) {
    var arr = Object.values(elem);
    if (arr.length === 0) {
      text = '';
    } else {
      text = arr[0];
    }
  }
  return text;
}

// -----------------------------------------------------------------------------
// ---------------------------------- Members ----------------------------------
// -----------------------------------------------------------------------------
function createMemberList(members, lang) {
  // Create current member list
  var membersList = [];
  members.forEach((memberInfo, roleIdx) => {
    var role = memberInfo['role'];
    var members = memberInfo['members'];

    // Create member list of each role
    var roleMemberList = [];
    for (var i = 0; i < members.length; i++) {
      roleMemberList.push(
        <MemberElem
          name={getLangText(members[i]['name'], lang)}
          grade={getLangText(members[i]['grade'], lang)}
          email={members[i]['email']}
          optionElement={members[i]['option']}
          imgUrl={MemberImageURL + members[i]['img']}
          key={roleIdx + '_' + i}
        />
      );
    }

    // Register to the total list
    membersList.push(
      <div key={roleIdx}>
        <h2 className='member-role-text'>{getLangText(role, lang)}</h2>
        <div className='columns is-mobile is-multiline'>
          {roleMemberList}
        </div>
      </div>
    );
  });

  return membersList;
}

// -----------------------------------------------------------------------------
// -------------------------------- Past Members -------------------------------
// -----------------------------------------------------------------------------
function createPastMemberElem(member, lang, texts) {
  var resText = '';

  // Fetch the name
  var name = getLangText(member.name, lang);
  resText += name;

  // Fetch the grade
  var gradeMark = member.grade;
  if (gradeMark === 'd') {
    resText += ' (' + texts['members_past_grade_doctor'] + ')';
  } else if (gradeMark === 'm') {
    resText += ' (' + texts['members_past_grade_master'] + ')';
  } else if (gradeMark === 'b') {
    resText += ' (' + texts['members_past_grade_bachelor'] + ')';
  } else if (gradeMark) {
    resText += ' (' + gradeMark + ')';
  }
  return (<div>{resText}</div>);
}

function createPastMemberList(pastMembers, lang, texts) {
  // Create past member list
  var membersList = [];
  pastMembers.forEach((memberInfo, yearIdx) => {
    var year = memberInfo['year'];
    var members = memberInfo['members'];

    // Create member list of a year
    var yearMemberList = [];
    members.forEach((member, memberIdx) => {
      yearMemberList.push(
        <div key={yearIdx + '_' + memberIdx}>
          {createPastMemberElem(member, lang, texts)}
        </div>
      );
    });

    // Register to the total list
    membersList.push(
      <div key={yearIdx}>
        <h2 className='pastmember-year-text'>{year}</h2>
        {yearMemberList}
      </div>
    );
  });

  return membersList;
}

// -----------------------------------------------------------------------------
// --------------------------------- Component ---------------------------------
// -----------------------------------------------------------------------------
export class ContentMembers extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      members: [], // [yearIdx][memberIdx]
      pastMembers: [] // [yearIdx][memberIdx]
    };

    // Members
    fetchJson(MembersJson)
      .then((members) => {
        this.setState({members: members});
      });
    // Past members
    fetchJson(MembersPastJson)
      .then((pastMembers) => {
        this.setState({pastMembers: pastMembers});
      });
  }
  render() {
    return (
      <div id='content_members'>
        <section id='hero-members' className='hero-img hero is-medium is-dark is-bold'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
              <h1 className='title'>
                {this.props.texts['members_head']}
              </h1>
            </div>
          </div>
        </section>
        <div className='container'>
          {createMemberList(this.state.members, this.props.lang)}
          <h2 className='member-role-text'>{this.props.texts['members_past_head']}</h2>
          {createPastMemberList(this.state.pastMembers, this.props.lang, this.props.texts)}
        </div>
      </div>
    );
  }
}

class MemberElem extends React.Component {
  constructor(prop) {
    super(prop);

    this.optionElement = (this.props.optionElement === undefined ? <div />
      : <div dangerouslySetInnerHTML={{__html: this.props.optionElement}} />);
  }

  render() {
    return (
      <div className='column is-6-mobile is-3-tablet is-3-desktop is-3-widescreen is-3-fullhd'>
        <div className='member-card'>
          <figure className='image'>
            <img className='is-rounded member-avatar' src={this.props.imgUrl} />
          </figure>
          <p className='name'>{this.props.name}</p>
          <p className='info'>{this.props.grade}</p>
          <p className='info'>{this.props.email}</p>
          {this.optionElement}
        </div>
      </div>
    );
  }
}
