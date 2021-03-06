import React  from 'react';
import { connect } from 'react-redux';

import { prepareActivity } from "../../../actions/project-action";
import ActivityRow from "./ActivityRow";

const ActivitiesScreen = ({ activities }) => {
    return (
        <>
            {/*ActivitiesScreen Row*/}
            {activities && activities.map(activity => (
                <ActivityRow activity={activity} key={new Date(activity[0].time).getDate()}/>
            ))}
        </>
    )
}

const mapStateToProps = state => ({
    activities: state.project.activities
})

export default connect(mapStateToProps, { prepareActivity })(ActivitiesScreen);

//As while not logged in activities of project state will be null nothing will show for that
