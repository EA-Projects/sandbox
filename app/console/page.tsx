// Components
import Navigation from '../components/navigation/Navigation';
import HeaderConsole from '../components/console/HeaderConsole';
import MainConsole from '../components/console/MainConsole'; 
import Logs from '../components/console/Logs';

export default function Console() {
  return (
    <div className="flex flex-col items-center justify-center w-screen pt-[50px] pb-[100px] relative">
      <Navigation
        links={[
          { linkName: "Console", linkURL: "/console" },
        ]}
        widthClass="max-w-[920px]"
      />
      <div className="source-parent-wrapper">
        <HeaderConsole />
        <div className="source-child-wrapper">
          <div className="flex items-stretch flex-row h-full w-full">
            <MainConsole />
            <Logs />
          </div>
        </div>
      </div>
    </div>
  );
}
