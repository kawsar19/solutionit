import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Team from './Team';

const Teams = () => {
    const teams= useLoaderData(); 
    return (
        <div>
            {
                teams.map(team=><Team
                key={team.id} 
                team={team}
                ></Team>)
            }
        </div>
    );
};

export default Teams;