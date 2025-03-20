import React from 'react';

const Badge = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <span
        ref={forwardedRef}
        className="z-10 block m-auto mb-5 w-fit rounded-sm border dark:border-blue-800/30 dark:bg-blue-900/20 text-blue-200 px-3 py-1.5 font-semibold uppercase leading-none tracking-wider sm:text-xs"
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
  tooltip: React.ReactNode;
}

const Stat: React.FC<StatProps> = ({ statName, statValue, tooltipClass, tooltip }) => {
  return (
    <div className="relative flex-auto min-w-[33%] group cursor-pointer dark:border-blue-900 md:text-center py-8">
      <div className="transition-opacity duration-[.4s] group-hover:opacity-10 group-hover:blur-sm">
        <dd className="inline-block bg-gradient-to-t from-blue-900 to-blue-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent dark:from-blue-700 dark:to-blue-400 lg:text-6xl">
          {statValue}
        </dd>
        <dt className="mt-1 text-gray-600 dark:text-gray-400">{statName}</dt>
      </div>

      <div className="tooltip absolute inset-0 flex items-center justify-center opacity-0 blur-xs transition-opacity duration-[.4s] group-hover:opacity-100 group-hover:blur-none">
        <div className={`w-full h-full flex items-center justify-center text-white text-sm py-2 rounded-sm ${tooltipClass === "transparent" ? "" : "px-4 border dark:border-blue-800/30 dark:bg-blue-900/20"}`}>
          {tooltip}
        </div>
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

const Stats: React.FC<StatsProps> = ({ badge, title, description, stats }) => {
  return (
    <div className="mx-auto w-full max-w-6xl px-3 py-[150px] pt-[80px] text-center">
      <Badge>{badge}</Badge>
      <h2   
        className="inline-block mb-2 py-2 text-6xl font-bold tracking-tighter"
      >
        {title}
      </h2>
      <p className="max-w-4xl m-auto text-md font-regular leading-6 text-gray-600">
        {description}
      </p>
      <dl className="mt-12 flex flex-wrap py-6 dark:border-gray-800 md:grid-cols-3 md:border-y md:border-gray-200">
        {stats.map((stat, index) => (
          <Stat key={index} statName={stat.statName} statValue={stat.statValue} tooltipClass={stat.tooltipClass} tooltip={stat.tooltip} />
        ))}
      </dl>
    </div>
  );
};

export default Stats;