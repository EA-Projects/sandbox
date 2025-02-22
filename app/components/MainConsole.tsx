"use client";

// Components
import Typing from './Typing';
import CounterNumber from "./CounterNumber";
import BarDone from "./BarDone";
import BarProcessing from "./BarProcessing";

const MainConsole = () => {
  return (
    <div className="col-span-6 flex flex-col gap-y-[11px] w-[70%] gap-x-[16px] h-full">
      <div className="flex flex-row w-full gap-x-[16px] items-center">
        <div className="flex flex-row items-center gap-x-[8px]">
          <div className="source-processing-title-icon">[···]</div>
          <div className="source-processing-title !capitalize !text-[14px]">
            Overall Progress
          </div>
        </div>
        <div className="bg-[#9D9D9D] w-full h-[1px]"></div>
      </div>

      <BarDone limit={35}  />

      <div className="flex flex-row w-full gap-x-[16px] items-center mt-[0px]">
        <div className="flex flex-row items-center gap-x-[8px]">
          <div className="source-processing-title !capitalize !text-[14px]">
            Analysis Phases
          </div>
        </div>
        <div className="bg-[#9D9D9D] w-full h-[1px]"></div>
      </div>

      <div className="flex flex-row justify-between w-full items-center gap-x-[8px]">
        <div className="source-processing-title my-4">
          1. Data Source Preparation
        </div>
        <div className="source-status sources-done-status uppercase">
            <div className="status-icon">
                [
                <span className="icon-done">
                    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.82325 10.0271C2.82325 9.92311 2.80325 9.87111 2.76325 9.87111L2.48725 10.0031C2.48725 9.94711 2.45525 9.90711 2.39125 9.88311L2.29525 9.87111C2.23125 9.87111 2.15125 9.89911 2.05525 9.95511C2.03925 9.91511 2.01925 9.87511 1.99525 9.83511C1.97125 9.79511 1.95125 9.75911 1.93525 9.72711C1.83125 9.52711 1.72725 9.30711 1.62325 9.06711C1.52725 8.81911 1.43525 8.58311 1.34725 8.35911C1.26725 8.13511 1.20325 7.95911 1.15525 7.83111C1.12325 7.72711 1.08725 7.57111 1.04725 7.36311C1.00725 7.15511 0.967246 6.89111 0.927246 6.57111C1.01525 6.62711 1.08325 6.65511 1.13125 6.65511C1.18725 6.65511 1.23925 6.57111 1.28725 6.40311C1.31125 6.43511 1.35525 6.45111 1.41925 6.45111C1.46725 6.45111 1.50325 6.43511 1.52725 6.40311L1.71925 6.11511L1.93525 6.18711H1.94725C1.96325 6.18711 1.97925 6.17911 1.99525 6.16311C2.01125 6.14711 2.03525 6.13111 2.06725 6.11511C2.13125 6.07511 2.17925 6.05511 2.21125 6.05511L2.24725 6.06711C2.44725 6.16311 2.57525 6.33911 2.63125 6.59511C2.77525 7.20311 2.91925 7.50711 3.06325 7.50711C3.20725 7.50711 3.37525 7.35511 3.56725 7.05111C3.66325 6.89911 3.75925 6.72311 3.85525 6.52311C3.95925 6.32311 4.06325 6.09911 4.16725 5.85111C4.18325 5.94711 4.19925 5.99511 4.21525 5.99511C4.25525 5.99511 4.32325 5.89511 4.41925 5.69511C4.52325 5.49511 4.68725 5.21911 4.91125 4.86711C5.03924 4.65111 5.19924 4.40711 5.39124 4.13511C5.59124 3.86311 5.80324 3.58311 6.02724 3.29511C6.25124 3.00711 6.46724 2.73511 6.67524 2.47911C6.89124 2.22311 7.08324 2.00311 7.25124 1.81911C7.41924 1.63511 7.54324 1.51511 7.62324 1.45911C7.92724 1.25111 8.16724 1.05111 8.34324 0.859109C8.33524 0.915109 8.32324 0.967109 8.30724 1.01511C8.29924 1.05511 8.29524 1.08311 8.29524 1.09911C8.29524 1.13111 8.31124 1.14711 8.34324 1.14711L8.67924 0.979109V1.02711C8.67924 1.09111 8.69524 1.12311 8.72724 1.12311C8.75124 1.12311 8.79924 1.08711 8.87124 1.01511C8.94324 0.943109 8.98324 0.891109 8.99124 0.859109L8.96724 1.02711L9.37524 0.787109L9.27924 1.00311C9.40724 0.915109 9.49924 0.871109 9.55524 0.871109C9.58724 0.871109 9.61124 0.891109 9.62724 0.931109C9.64324 0.963109 9.65124 0.995109 9.65124 1.02711C9.65124 1.07511 9.63124 1.13111 9.59124 1.19511C9.55124 1.25911 9.49924 1.33511 9.43524 1.42311C9.38724 1.48711 9.30724 1.58311 9.19524 1.71111C9.09124 1.83111 8.93124 2.01111 8.71524 2.25111C8.49924 2.48311 8.21124 2.80711 7.85124 3.22311C7.75524 3.32711 7.60724 3.51111 7.40724 3.77511C7.20724 4.03111 6.97924 4.33111 6.72324 4.67511C6.47524 5.01111 6.22724 5.35111 5.97924 5.69511C5.73124 6.03911 5.51124 6.35111 5.31924 6.63111C5.12724 6.90311 4.99125 7.10711 4.91125 7.24311L4.16725 8.50311C4.00725 8.77511 3.87525 8.99911 3.77125 9.17511C3.66725 9.34311 3.58725 9.45911 3.53125 9.52311C3.41125 9.66711 3.27925 9.79511 3.13525 9.90711L3.02725 9.84711L2.93125 9.90711L2.82325 10.0271Z" fill="#02FF56"/>
                    </svg>    
                </span>
                ]
            </div>
            <Typing
                text="Done"
            />
        </div>
      </div>

      <div className="details-box">
        <div className="sources-bullets p-[8px]">
          [Primary Entities Found] : <CounterNumber value={89} delay={0} />
        </div>
        <div className="sources-bullets p-[8px]">
          [Organizations] : <CounterNumber value={34} delay={0} />
        </div>
        <div className="sources-bullets p-[8px]">
          [People] : <CounterNumber value={42} delay={0} />
        </div>
        <div className="sources-bullets p-[8px]">
          [Other Entity Types] : <CounterNumber value={13} delay={0} />
        </div>
      </div>

      <div className="flex flex-row justify-between w-full items-center gap-x-[8px]">
        <div className="source-processing-title my-4">
          2. Primary Entity Discovery
        </div>
        <div className="source-status sources-processing-status uppercase">
            <div className="status-icon">
                [
                <span className="dots">.</span>
                <span className="dots">.</span>
                <span className="dots">.</span>
                ]
            </div>
          <Typing
                text="Processing"
            />
        </div>
      </div>

      <BarProcessing limit={12} />

      <div className="details-box">
        <div className="sources-bullets p-[8px]">
          [Primary Entities Found] : <CounterNumber value={309} delay={0} />
        </div>
        <div className="sources-bullets p-[8px]">
          [Organizations] : <CounterNumber value={44} delay={0} />
        </div>
        <div className="sources-bullets p-[8px]">
          [People] : <CounterNumber value={15} delay={0} />
        </div>
        <div className="sources-bullets p-[8px]">
          [Other Entity Types] : <CounterNumber value={83} delay={0} />
        </div>
      </div>

      <div className="flex flex-row justify-between w-full items-center gap-x-[8px]">
        <div className="source-processing-title my-4">
          3. RELATED ENTITY MAPPING
        </div>
        <div className="source-status sources-waiting-status uppercase">
            <div className="status-icon">
                [
                    <span>0</span>
                ]
            </div>
          <Typing
                text="Waiting"
            />
        </div>
      </div>

      <div className="details-box">
        <div className="sources-bullets p-[8px]">[Waiting for Data...]</div>
      </div>
    </div>
  );
};

export default MainConsole;
