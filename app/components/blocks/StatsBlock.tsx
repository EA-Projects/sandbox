import React from 'react';

const Badge = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <span
        ref={forwardedRef}
        className="block mb-5 w-fit text-text_badge rounded-sm ring-1 ring-blue300/15 text-blue300 px-2.5 pr-2 py-1.5 font-semibold uppercase leading-none tracking-[0.15em] bg-gradient-to-b from-blue300/25 to-blue300/15"
        {...props}
      >
        <span>{children}</span>
      </span>
    );
  },
);

Badge.displayName = "Badge";

interface StatProps {
  statName: string;
  statValue: string;
  tooltipClass?: string; 
  tooltip?: React.ReactNode;
}

const Stat: React.FC<StatProps> = ({ statName, statValue }) => {
  return (
    <div className="relative flex-auto min-w-[33%] group cursor-pointer border-l border-blue300/15 first:border-none md:text-center py-2">
      <div className="">
        <dd className="inline-block text-white font-bold tracking-normal font-outfit text-text_h2">
          {statValue}
        </dd>
        <dt className="text-bluemain font-bold">{statName}</dt>
      </div>

      {/* {tooltip} */}
      <div className="cursor-auto pointer-events-none min-w-[430px] text-left absolute bottom-full left-[50%] -translate-x-[50%] opacity-0 scale-[.95] blur-sm transition-all duration-[.4s] ease-in-out group-hover:opacity-100 group-hover:blur-none group-hover:scale-[1] group-hover:pointer-events-auto">
        <div className="w-full h-full ring-1 ring-blue300/5 bg-gradient-to-b from-[#171B2D] to-black shadow-[0_10px_45px_0_#007AFF73] rounded-xl overflow-hidden pb-1"> 
            <div className="bg-black px-4 py-3 flex items-center justify-between text-sm font-light">
              <span className='text-bluegrey300/60'>Reasoner Analysis Impact</span>
              <span className='text-bluegrey300/30'>Last update: <span className='text-bluegrey300/60'>3 minutes ago</span></span>
            </div>
            <div className='px-4'>
              <div className="py-4 pb-3 flex items-center justify-between text-sm border-b border-blue300/15 font-light">
                <span className='text-xs tracking-wide uppercase font-bold text-bluemain'>Data Source</span>
                <span className='text-white'>Google Sheets</span>
              </div>
              <div className="py-4 pb-2 text-sm font-light">
                <p className='text-xs tracking-wide uppercase font-bold text-bluemain mb-2'>Impact</p>
                <p className='text-bluegrey300/40 mb-2'>Updated to <span className='text-white'>“Architected for speed, reliability, and cost”</span></p>
                <p className='text-bluegrey300/40'>Updated to <span className='text-white'>“162%”</span></p>
              </div>
            </div>
        </div>
        <div className='absolute -bottom-1.5 left-[50%] -translate-x-[50%] w-4 h-4 bg-black rounded-sm rotate-45'></div>
      </div>
    </div>
  );
};


interface StatsProps {
  badge?: string;
  title: string;
  description?: string;
  stats: StatProps[];
}

const StatsBlock: React.FC<StatsProps> = ({ badge, title, description, stats }) => {
  return (
    <div className="mx-auto w-full max-w-7xl px-3 py-[150px] pt-[30px]">
        <div className="relative ring-1 ring-blue300/15 bg-gradient-to-b from-[#171B2D] to-black rounded-xl p-10 pb-0 shadow-[0_5px_30px_black]">
            <div className="noise"></div>
            <div className='relative'>
              <Badge>{badge}</Badge>
              <h2
                className="inline-block max-w-6xl mb-2 py-2 font-outfit text-text_h1 leading-[100%] font-medium tracking-[0.01em] text-bluemain"
              >
                {title}
              </h2>
              <p className="max-w-[940px] text-md font-regular leading-7 text-bluegrey300/60">
                  {description}
              </p>
              <dl className="mt-12 flex flex-wrap py-6 dark:border-gray-800 md:grid-cols-3 md:border-t md:border-gray-200">
                  {stats.map((stat, index) => (
                  <Stat key={index} statName={stat.statName} statValue={stat.statValue} tooltipClass={stat.tooltipClass} tooltip={stat.tooltip} />
                  ))}
              </dl>
            </div>
        </div>
    </div>
  );
};

export default StatsBlock;