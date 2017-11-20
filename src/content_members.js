import React from 'react';
import { Flex, Box, Image, Heading, Subhead } from 'rebass';

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
class MemberImage extends React.Component {
  constructor(prop) {
    super(prop);
    this.imgSize = 70;
    this.state = {
      scale: 1.0
    };
  }
  onLoadImage(e) {
    var w = e.target.width;
    var h = e.target.height;
    if (h < w) {
      // Zoom
      this.setState({scale: this.imgSize / h});
    }
  }
  render() {
    var transformText = 'translate(-50%, -50%) scale(' + this.state.scale + ')';
    return (
      <div style={{overflow: 'hidden',
                   width: this.imgSize,
                   height: this.imgSize}}>
        <Image src={this.props.src}
               onLoad={this.onLoadImage.bind(this)}
               style={{position: 'relative',
                       width: '100%',  // Fit to width
                       height: 'auto',
                       top: '50%',
                       left: '50%',
                       transform: transformText}} />
      </div>
    );
  }
}

function createMemberElem(member, lang) {
  var name = getLangText(member['name'], lang);
  var grade = getLangText(member['grade'], lang);
  var email = member['email'];
  var option = member['option'];
  var imgUrl = MemberImageURL + member['img'];

  var optionElement = (option === undefined ? <div />
    : <div dangerouslySetInnerHTML={{__html: option}} />);

  return (
    <Box p={1} style={{background: '#eeeeee'}}>
      <Flex align='center' wrap>
        <MemberImage src={imgUrl} />
        <Box pl={4}>{name}</Box>
        <Flex ml='auto' align='center' pt={[2, 0, 0, 0]}
          style={{textAlign: 'center'}} wrap>
          <Box pr={4} ml='auto'>{optionElement}</Box>
          <Box pr={3} ml='auto'>
            <Box>{grade}</Box>
            <Box>{email}</Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

function createMemberList(members, lang) {
  // Create current member list
  var membersList = [];
  members.forEach((memberInfo, roleIdx) => {
    var role = memberInfo['role'];
    var members = memberInfo['members'];

    // Create member list of each role
    var roleMemberList = [];
    members.forEach((member, memberIdx) => {
      // Register
      roleMemberList.push(
        <Box width={1} p={2} key={roleIdx + '_' + memberIdx}>
          {createMemberElem(member, lang)}
        </Box>
      );
    });

    // Register to the total list
    membersList.push(
      <Box width={1} p={3} key={roleIdx}>
        <Subhead>{getLangText(role, lang)}</Subhead>
        {roleMemberList}
      </Box>
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
        <Box width={1} p={0} key={yearIdx + '_' + memberIdx}>
          {createPastMemberElem(member, lang, texts)}
        </Box>
      );
    });

    // Register to the total list
    membersList.push(
      <Box width={1} p={3} key={yearIdx}>
        <Subhead>{year}</Subhead>
        {yearMemberList}
      </Box>
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
      <Box width={1}>
        <Heading pt={3}>{this.props.texts['members_head']}</Heading>
        <Flex align='center' p={2} wrap>
          <Box width={1} p={1}>
            {createMemberList(this.state.members, this.props.lang)}
          </Box>
        </Flex>
        <Heading pt={3}>{this.props.texts['members_past_head']}</Heading>
        <Flex align='center' p={2} wrap>
          <Box width={1} p={1}>
            {createPastMemberList(this.state.pastMembers, this.props.lang,
              this.props.texts)}
          </Box>
        </Flex>
      </Box>
    );
  }
}
