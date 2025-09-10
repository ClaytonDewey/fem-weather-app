export const Card = ({ type, children }) => {
  return (
    <div className={type === 'main' ? 'card card__main' : 'card'}>
      {children}
    </div>
  );
};
