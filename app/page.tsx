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
    <div className="flex flex-col items-center justify-center w-screen pt-[50px] pb-[100px] relative">
      <div className="w-full max-w-[920px] flex items-center gap-2 mb-4">
        <Link href="https://reasoner.com/" target='_blank' className="text-sm tracking-[-0.01em] opacity-[20%] hover:opacity-[50%] transition-all duration-300">Reasoner</Link>
        <div className="text-sm opacity-[20%]">/</div>
        <Link href="/" className="text-sm tracking-[-0.01em] text-white border-solid border-b border-transparent hover:border-white transition-all duration-300">Console</Link>
      </div>
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
