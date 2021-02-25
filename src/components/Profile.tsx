import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/57004471?s=460&u=bbd5bbd01e5053f0ad1194317c9f4e718b044010&v=4" alt="Profile" />
      <div>
        <strong>Giovani Fernandes</strong>
        <p>
          <img src="icons/level.svg" alt="Icon Level"/>
          Level {level}
        </p>
      </div>
    </div>
    
  );
} 