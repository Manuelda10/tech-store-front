import './index.css';

const TopHeader = () => {
  return (
    <div className="top-header text-gray-300">
      <p>Lun-Vie: <span className='font-semibold text-white dark:text-black'> 9:00 AM - 9:00 PM </span></p>
      <p><span className='hidden md:inline'>Puedes visitarnos en </span>Mz. C, Lote 1. Piedra Liza - Callao</p>
      <p className='font-semibold text-white dark:text-black'>Llámanos: +51 987654321</p>
    </div>
  );
}

export default TopHeader;