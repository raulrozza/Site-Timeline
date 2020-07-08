import React from 'react';
import PropTypes from 'prop-types';

import teamInfo from '../data/teamInfo';
import timelineInfo from '../data/timelineInfo';
import membersInfo from '../data/membersInfo';
import * as backgroundImages from '../data/backgroundImages';

const setTimelineInfo = (timeline, info) => {
    const newTimeline = timeline.map(item => {
        return {
            ...item,
            directors: item.directors.map(director => {
                if (info[director.index])
                    return {
                        ...director,
                        ...info[director.index],
                    };

                return director;
            }),
            members: item.members.map(member => {
                if (info[member.index])
                    return {
                        ...member,
                        ...info[member.index],
                    };

                return member;
            }),
        };
    });

    return newTimeline;
};

const DataContext = React.createContext();

const Data = ({ children }) => {
    return (
        <DataContext.Provider
            value={{
                team: teamInfo,
                timeline: setTimelineInfo(timelineInfo, membersInfo),
                images: backgroundImages,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

Data.propTypes = {
    children: PropTypes.node,
};

export default Data;

export const useData = () => {
    const context = React.useContext(DataContext);

    return context;
};

export const useTeam = () => {
    const { team } = useData();

    return team;
};

export const useImage = () => {
    const { images } = useData();

    return images;
};
