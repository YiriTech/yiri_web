import Link from "next/link";
import Image from "next/image";
import logo1 from "../../public/assets/img/logo-1.png";

// Types pour les props
interface LogoProps {
  variant?: "default" | "white" | "primary" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
  isWhite?:boolean
}

// Types pour les tailles
interface SizeConfig {
  width: number;
  height: number;
  text: string;
  iconClass: string;
}

const Logo: React.FC<LogoProps> = ({ 
  variant = "default", 
  size = "md", 
  showText = true,
  isWhite=false,
  className = "" 
}) => {
  // Configuration des tailles avec classes Tailwind appropriées
  const sizes: Record<string, SizeConfig> = {
    sm: { 
      width: 32, 
      height: 32, 
      text: "text-lg", 
      iconClass: "w-8 h-8" 
    },
    md: { 
      width: 40, 
      height: 40, 
      text: "text-2xl", 
      iconClass: "w-10 h-10" 
    },
    lg: { 
      width: 56, 
      height: 56, 
      text: "text-3xl", 
      iconClass: "w-14 h-14" 
    },
    xl: { 
      width: 72, 
      height: 72, 
      text: "text-4xl", 
      iconClass: "w-18 h-18" 
    }
  };

  // Variantes de couleur
  const variants: Record<string, string> = {
    default: "text-black",
    white: "text-white",
    primary: "text-blue-600",
    dark: "text-gray-900"
  };

  const currentSize = sizes[size];
  const currentVariant = variants[variant];

  return (
    <div className={`flex items-center ${className}`}>
      <Link 
        href="/" 
        className="flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-2 no-underline hover:no-underline"
        aria-label="Retour à l'accueil - Yiri Tech"
      >
        {/* Container flex pour alignement parfait */}
        <div className="flex items-center justify-center gap-3">
          {/* Container de l'icône avec effet */}
          <div className="relative flex items-center justify-center">
            <Image
              width={currentSize.width}
              height={currentSize.height}
              src={logo1.src}
              alt="Yiri Tech Logo"
              className={`${currentSize.iconClass} object-contain transition-transform duration-300 flex-shrink-0`}
              priority
            />
            {/* Effet de brillance au survol */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20 transition-opacity duration-300 transform -skew-x-12 pointer-events-none"></div>
          </div>
          
          {/* Texte aligné avec l'icône */}
          {showText && (
            <span 
              className={`${currentSize.text} font-bold uppercase ${currentVariant} transition-colors duration-300 tracking-wide flex items-center leading-none !no-underline hover:no-underline ${isWhite ? "!text-white": null} `}
            >
              Yiri Africa
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};

// Variantes spécialisées avec types TypeScript
export const LogoHeader: React.FC<Omit<LogoProps, 'size' | 'variant'>> = (props) => (
  <Logo size="md" variant="default" {...props} />
);

export const LogoFooter: React.FC<Omit<LogoProps, 'size' | 'variant'>> = (props) => (
  <Logo size="sm" variant="white" {...props} />
);

export const LogoMini: React.FC<Omit<LogoProps, 'showText'>> = (props) => (
  <Logo showText={false} {...props} />
);

export const LogoLarge: React.FC<Omit<LogoProps, 'size' | 'variant'>> = (props) => (
  <Logo size="xl" variant="primary" {...props} />
);

export default Logo;