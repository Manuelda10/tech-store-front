import Link from "next/link";
import Image from "next/image";
import './index.css';

const Header = () => {
  return (
    <header className="sticky top-0 flex font-semibold text-sm w-full border-b-2 border-gray-500 bg-white dark:bg-gray-950">
      <div className="w-8/12 md:w-8/12 h-12">
        <ul className="flex justify-around items-center h-12">
          <li><Link href="/">
            <Image src="/images/logo_tech.png" alt="logo" width={25} height={25} />
          </Link></li>
          <li><Link href="/">Laptops</Link></li>
          <li><Link href="/">PC Escritorio</Link></li>
          <li><Link href="/">Impresoras</Link></li>
          <li><Link href="/">PC Partes</Link></li>
          <li><Link href="/">Otros</Link></li>
          <li><Link href="">Ofertas</Link></li>
        </ul>
      </div>
      <div className="w-4/12 md:w-4/12 flex justify-end">
        <div className="w-full md:w-8/12 flex justify-around items-center h-12">
          <div className="btn-search flex justify-center items-center">
            <button>
              <Image className="icon-search" src="/images/icon_search.png" alt="search" width={20} height={20}/>
            </button>
          </div>
          <div className="btn-cart">
            <button>
              <Image className="icon-search" src="/images/icon_cart.png" alt="search" width={20} height={20}/>
            </button>
          </div>
          <div>
            <button>Ingresar</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;