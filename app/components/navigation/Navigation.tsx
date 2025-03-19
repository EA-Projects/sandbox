// Utils
import Link from 'next/link';

interface NavigationProps {
  links: {
    linkName: string;
    linkURL: string;
  }[];
  widthClass?: string;
}

const Navigation: React.FC<NavigationProps> = ({ links, widthClass = "max-w-[920px]" }) => {
  return (
    <div className={`w-full ${widthClass} flex items-center gap-2 mb-4`}>
      <Link
        href="/"
        className="text-sm tracking-[-0.01em] opacity-30 hover:opacity-60 transition-all duration-400"
      >
        Reasoner Sandbox
      </Link>
      
      <span className="text-sm opacity-30">/</span>

      {links.map((link, index) => (
        <div key={index} className="flex items-center">
          <Link
            href={link.linkURL}
            className="text-sm tracking-[-0.01em] text-white border-solid border-b border-transparent hover:border-white transition-all duration-400"
          >
            {link.linkName}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navigation;