import Link from "next/link";
import Noctiluz from '@/components/svgs/noctiluz.svg'

function NavbarLogo({ isH2 }: { isH2?: boolean }) {
  return ( 
    <Link className="flex items-center gap-2" href="/">
      {isH2 ? 
        <h2 className="font-bold text-3xl">piupiwer</h2>
        :
        <h1 className="font-bold text-3xl">piupiwer</h1>
      }
    </Link>
   );
}

export default NavbarLogo;