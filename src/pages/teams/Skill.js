import React from 'react';

const Skill = ({skill}) => {
    console.log(skill[0]);
    return (
        <div className='col-12 col-sm-6 col-lg-3'>
            <div className="skill-box">
                <span class="counter-text"><span>{skill[0].percent}</span></span>
                <h4 className="title">{skill[1].title}</h4>
                <p className="skill-info">{skill[2].skillContent}</p>
            </div>
        </div>
    );
};

export default Skill;