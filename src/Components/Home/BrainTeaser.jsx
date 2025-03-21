import React from 'react';
import './BrainTeaser.css';
import braint from '../../assets/Group32.png';

function BrainTeaser() {
  return (
    <div className="container">
      <img src={braint} alt='brain teaser' className='BrainTeaserImage' />
      <div className="content">
        <p className='brain'>BRAIN <span>TEASERS</span></p>
        <div className="TeaserQuestion">What is the name of the most popular version control system used by developers?</div>
        <div className="options">
        <ul>
        <li>GITHUB</li>
        <li>GIT</li>
        <li>BITBUCKET</li>
        <li>SVN</li>
      </ul>

        </div>
        </div>
    </div>
  )
}
export default BrainTeaser