import React from 'react';
import { Flex, Box, Heading, Subhead } from 'rebass';
import { fetchJson } from './utility.js';

// Json URLs from publication repository.
const JsonBase =
  'https://raw.githubusercontent.com/imai-laboratory/activities_data/master/';
const AwardJsonExp = JsonBase + 'award/award_{yy}.json';
const MediaJsonExp = JsonBase + 'media/media_{yy}.json';
const TalkJsonExp = JsonBase + 'talk/talk_{yy}.json';
// Years
const AwardYearsJson = JsonBase + 'award/award_years.json';
const MediaYearsJson = JsonBase + 'media/media_years.json';
const TalkYearsJson = JsonBase + 'talk/talk_years.json';

function setActivityStatus(component, yearJsonUrl, jsonUrlExp) {
  // Fetch a json of years
  fetchJson(yearJsonUrl)
    .then((years) => {
      // Set empty array
      component.setState({activities: new Array(years.length)});

      // Fetch paper jsons of the current year
      years.forEach((year, yearIdx) => {
        var url = jsonUrlExp.replace('{yy}', year);
        fetchJson(url)
          .then((activity) => {
            // Set to React's state
            component.state.activities[yearIdx] = {'year': year, 'activity': activity};
            component.forceUpdate();
          });
      });
    });
}

function createActivityText(activity) {
  const description = <div dangerouslySetInnerHTML={{__html: activity.description}} />;
  return (
    <div>
      <h3>{activity.title}</h3>
      {description}
    </div>
  );
}

function createActivityList(activities) {
  // Create paper list
  var activityList = [];
  activities.forEach((activityInfo, yearIdx) => {
    var year = activityInfo['year'];
    var yearActivities = activityInfo['activity'];

    // Create paper list of a year
    var yearActivityList = [];
    yearActivities.forEach((activity, activityIdx) => {
      yearActivityList.push(
        <Box width={1} p={2} key={yearIdx + '_' + activityIdx}>
          {createActivityText(activity)}
        </Box>
      );
    });

    // Register to the total list
    activityList.push(
      <Box width={1} p={3} key={yearIdx}>
        <Subhead>{year}</Subhead>
        {yearActivityList}
      </Box>
    );
  });
  return activityList;
}

function createActivityElement(head, activities) {
  return (
    <div>
      <section className="hero is-small is-primary is-bold">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                {head}
              </h1>
            </div>
          </div>
        </section>
        <div className="container">
          {createActivityList(activities)}
        </div>
    </div>
  );
  return (
    <Box width={1}>
      <Heading pt={3}>{head}</Heading>
      <Flex align='center' p={2} wrap>
        <Box width={1} p={1}>
          {createActivityList(activities)}
        </Box>
      </Flex>
    </Box>
  );
}

// --------------------------------- Component ---------------------------------
export class ContentActivitiesAward extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = { activities: [] }; /* activity[yearIdx][paperIdx] */
    // Fetch and set activities
    setActivityStatus(this, AwardYearsJson, AwardJsonExp);
  }
  render() {
    return createActivityElement(
      this.props.texts['activity_award_head'],
      this.state.activities);
  }
}

export class ContentActivitiesMedia extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = { activities: [] }; /* activity[yearIdx][paperIdx] */
    // Fetch and set activities
    setActivityStatus(this, MediaYearsJson, MediaJsonExp);
  }
  render() {
    return createActivityElement(
      this.props.texts['activity_media_head'],
      this.state.activities);
  }
}

export class ContentActivitiesTalk extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = { activities: [] }; /* activity[yearIdx][paperIdx] */
    // Fetch and set activities
    setActivityStatus(this, TalkYearsJson, TalkJsonExp);
  }
  render() {
    return createActivityElement(
      this.props.texts['activity_talk_head'],
      this.state.activities);
  }
}
