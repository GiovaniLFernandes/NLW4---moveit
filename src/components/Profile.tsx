import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://i.redd.it/0bn4rijffv251.jpg" alt="Profile" />
      <div>
        <strong>Shrek Indiano</strong>
        <p>
          <img src="icons/level.svg" alt="Icon Level"/>
          Level 1
        </p>
      </div>
    </div>
    
  );
} 