import Link from "next/link";
import logo1 from "../../public/assets/img/logo-1.png";
import Image from "next/image";


const Logo = ()=>{

    return  <div>

        <Link href="/"><Image width={50} height={50} src={logo1.src} alt="logo" className="w-8 h-8"/></Link>
        Yiri Tech
    </div>
}

export default Logo;