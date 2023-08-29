import styles from './Card.module.css';

const Card = ({ badgeText, title, body, image }) => {
  const cardStyle = {
    backgroundImage: `url(${image})`
  };

  return (
    <div className={styles.card} style={cardStyle}>
      <div className={styles.cardBadge}>
        {badgeText}
      </div>
      <div className={styles.cardTitle}>
        {title}
      </div>
      <div className={styles.cardBody}>
        {body}
      </div>
    </div>
  );
};

export default Card;
