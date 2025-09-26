export const Input = ({ icon, ...props }) => {
  return (
    <>
      {icon && (
        <img src={icon} alt='' role='presentation' className='input__icon' />
      )}

      <input {...props} />
    </>
  );
};
