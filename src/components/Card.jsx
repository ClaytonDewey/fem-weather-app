const Card = (props) => {
  const { type } = props;
  return (
    <div className={type === 'header' ? 'card card__header' : 'card'}>Card</div>
  );
};

export default Card;
