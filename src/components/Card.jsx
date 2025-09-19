export const Card = ({ type, content }) => {
  return (
    <div
      className={`card ${
        type === 'daily'
          ? 'card__daily'
          : type === 'hourly'
          ? 'card__hourly'
          : ''
      }`}>
      {content}
    </div>
  );
};
