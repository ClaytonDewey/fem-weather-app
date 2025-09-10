export const Card = (props) => {
  const { type } = props;
  return (
    <div className={type === 'main' ? 'card card__main' : 'card'}>Card</div>
  );
};
