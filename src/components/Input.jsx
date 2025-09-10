export const Input = ({ icon, ...props }) => {
  return (
    <div className='input'>
      <img src={icon} alt='' role='presentation' className='input__icon' />

      <input {...props} />
    </div>
  );
};
