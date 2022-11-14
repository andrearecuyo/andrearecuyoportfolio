import React from 'react'
import '../styles/skills.css';
import SkillsAvatar from '../assets/img/avatar/ar-skills-avatar.png';
import ProgressBar from "./ProgressBar";


const skillsProgress = [
    {
        item: 'ReactJS',
        bgcolor: "#FEC3C3",
        completed: 75
    },
    {
        item: 'Vue.JS',
        bgcolor: "#FEC3C3",
        completed: 40
    },
    {
        item: 'JavaScript',
        bgcolor: "#FEC3C3",
        completed: 70
    },
    {
        item: 'CSS',
        bgcolor: "#FEC3C3",
        completed: 80
    },
    {
        item: 'HTML',
        bgcolor: "#FEC3C3",
        completed: 80
    },
    {
        item: 'UI Design',
        bgcolor: "#FEC3C3",
        completed: 70
    },
    {
        item: 'Adobe Illustrator',
        bgcolor: "#FEC3C3",
        completed: 60
    },
    {
        item: 'Figma',
        bgcolor: "#FEC3C3",
        completed: 80
    }
    
];

function Skills() {
    return (
        <div className="container">
            <div className="skills-content">
                <img src={SkillsAvatar} alt="Andrea Recuyo Skills Avatar"></img>
                <div className="skills-header">
                    <h1>Skills</h1>
                    <div className="skills-progress">
                        {skillsProgress.map((item, idx) => (
                            <ProgressBar key={idx} item={item.item} bgcolor={item.bgcolor} completed={item.completed} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills;
