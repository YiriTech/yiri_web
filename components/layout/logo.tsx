import Link from "next/link";
import logo1 from "../../public/assets/img/logo-1.png";
import Image from "next/image";

const Logo = () => {
    return (
        <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 justify-center transition-transform duration-300 hover:scale-105">
                <Image 
                    width={100} 
                    height={100} 
                    src={logo1.src} 
                    alt="Yiri Tech Logo" 
                    className="w-10 h-10 object-contain"
                    priority
                />
                <span className="text-2xl font-bold text-blue-600">Yiri Tech</span>
            </Link>
        </div>
    );
};

export default Logo;