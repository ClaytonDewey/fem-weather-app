import { Button, Unit } from '.';

export const UnitList = () => {
  return (
    <dialog id='units' className='modal modal__units'>
      <Button className='btn-unit'>Switch to Metric</Button>
      <Unit />
      <Unit />
      <Unit />
    </dialog>
  );
};
