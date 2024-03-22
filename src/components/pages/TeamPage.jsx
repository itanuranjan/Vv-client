import React from 'react';
import '../Styles/TeamPage.css';

const TeamPage = () => {
  // Sample team data
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Frontend Developer',
      position: 'Lead',
      github: 'https://github.com/johndoe',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      portfolio: 'https://www.johndoeportfolio.com',
      imageUrl: 'https://ucarecdn.com/fd4f2676-1408-47bb-a7ff-ceabaff1551f/Profile.jpg', // Placeholder image URL
      details: 'John Doe is an experienced frontend developer...'
    },
    {
      id: 2,
      name: 'John Doe',
      role: 'Frontend Developer',
      position: 'Lead',
      github: 'https://github.com/johndoe',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      portfolio: 'https://www.johndoeportfolio.com',
      imageUrl: 'https://ucarecdn.com/fd4f2676-1408-47bb-a7ff-ceabaff1551f/Profile.jpg', // Placeholder image URL
      details: 'John Doe is an experienced frontend developer...'
    },
    {
      id: 3,
      name: 'John Doe',
      role: 'Frontend Developer',
      position: 'Lead',
      github: 'https://github.com/johndoe',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      portfolio: 'https://www.johndoeportfolio.com',
      imageUrl: 'https://ucarecdn.com/fd4f2676-1408-47bb-a7ff-ceabaff1551f/Profile.jpg', // Placeholder image URL
      details: 'John Doe is an experienced frontend developer...'
    },
    {
      id: 3,
      name: 'John Doe',
      role: 'Frontend Developer',
      position: 'Lead',
      github: 'https://github.com/johndoe',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      portfolio: 'https://www.johndoeportfolio.com',
      imageUrl: 'https://ucarecdn.com/fd4f2676-1408-47bb-a7ff-ceabaff1551f/Profile.jpg', // Placeholder image URL
      details: 'John Doe is an experienced frontend developer...'
    },
    {
      id: 3,
      name: 'John Doe',
      role: 'Frontend Developer',
      position: 'Lead',
      github: 'https://github.com/johndoe',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      portfolio: 'https://www.johndoeportfolio.com',
      imageUrl: 'https://ucarecdn.com/fd4f2676-1408-47bb-a7ff-ceabaff1551f/Profile.jpg', // Placeholder image URL
      details: 'John Doe is an experienced frontend developer...'
    },
    // Add more team members as needed
  ];

  return (
    <div className="team-page">
      <h1>Our Team</h1>
      <div className="team-members">
        {teamMembers.map(member => (
          <div key={member.id} className="team-member">
            <img src={member.imageUrl} alt={member.name} />
            <div className="member-details">
              <h2>{member.name}</h2>
              <p>{member.role}</p>
              <p>{member.position}</p>
              <div className="social-links">
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href={member.portfolio} target="_blank" rel="noopener noreferrer">
                  Portfolio
                </a>
              </div>
              <p>{member.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
