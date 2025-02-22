// Styles
import './styles/custom.scss';
import './globals.css';

// Utils
import Link from 'next/link';

// Components
import HeaderConsole from './components/HeaderConsole';
import MainConsole from './components/MainConsole';
import Logs from './components/Logs';

//Fonts
import { DM_Sans, Fira_Mono } from 'next/font/google';

const dm_sans = DM_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],   
});

const fira_mono = Fira_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],     
});

export default function Sandbox() {
  return (
    
    <div className="flex items-center justify-center m-h-screen w-screen pt-[50px] pb-[100px] relative">
      <div className="source-parent-wrapper">
        <HeaderConsole />
        <div className="source-child-wrapper">
          <div className="flex items-stretch flex-row h-full w-full">
            <MainConsole />
            <Logs />
          </div>
        </div>
      </div>
      <Link href="https://console.reasoner.sh/" target='_blank' className="text-sm absolute bottom-[40px] opacity-[20%] hover:opacity-[50%] transition-all duration-300">console.reasoner.sh</Link>
    </div>
  );
}
