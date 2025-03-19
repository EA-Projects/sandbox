'use client';

import { useState } from 'react';
import { Card } from '@tremor/react';
import { AnimatePresence, motion } from 'framer-motion';
import { ProgressiveBlur } from '../effects/ProgressiveBlur';

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

interface KPIData {
  name: string;
  stat: string;
  previousStat: string;
  change: string;
  changeType: 'positive' | 'negative';
  details: string;
}

interface KPICardProps {
  title: string;
  description: string;
  data: KPIData[];
}

export default function KPICard({ title, description, data }: KPICardProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto w-full max-w-6xl px-3 py-[150px] text-center">
      <h2 className="inline-block mb-2 py-2 text-6xl font-bold tracking-tighter">
        {title}
      </h2>
      <p className="max-w-2xl m-auto text-md font-regular leading-6 text-gray-600">
        {description}
      </p>
      <dl className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <div key={item.name} className="relative group">
            {/* Card */}
            <Card className={`relative z-10 transition-all duration-[.3s] !ring-transparent shadow-none border dark:border-blue-800/30 dark:bg-blue_900 rounded-lg ${activeIndex === index ? 'opacity-10 blur-sm' : ''}`}>
              <div className="flex items-center justify-between space-x-4">
                <dt className="text-tremor-default font-medium text-tremor-content dark:text-dark-tremor-content">
                  {item.name}
                </dt>
                <dd
                  className={classNames(
                    item.changeType === 'positive'
                      ? 'bg-emerald-100 text-emerald-800 ring-emerald-600/10 dark:bg-emerald-400/10 dark:text-emerald-500 dark:ring-emerald-400/20'
                      : 'bg-red-100 text-red-800 ring-red-600/10 dark:bg-red-400/10 dark:text-red-500 dark:ring-red-400/20',
                    'inline-flex items-center rounded-sm px-2 py-0.5 text-tremor-label font-medium ring-1 ring-inset',
                  )}
                >
                  {item.change}
                </dd>
              </div>
              <dd className="flex items-baseline space-x-3">
                <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  {item.stat}
                </p>
                <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                  from {item.previousStat}
                </p>
              </dd>
            </Card>

            {/* Discover more information */}
            <div
              className={`cursor-pointer absolute w-full transition-all duration-[.3s] flex items-center justify-center gap-2 pt-4 pb-1.5 border dark:border-blue-800/30 dark:bg-blue-900/5 rounded-b-lg border-t-[0] bottom-0 group-hover:-bottom-[30px] hover:dark:bg-blue-900/10 ${activeIndex === index ? 'opacity-0 bottom-0 pointer-events-none' : ''}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11V17H13V11H11ZM11 7V9H13V7H11Z"></path>
              </svg>
              <span className="text-xs font-regular">Discover more about {item.name}</span>
            </div>

            {/* Show Tooltip */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ filter: "blur(5px)", opacity: 0 }}
                  animate={{ filter: "blur(0)", opacity: 1 }}
                  exit={{ filter: "blur(5px)", opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'linear' }}
                  className="absolute left-0 top-0 overflow-hidden h-full w-full flex items-center justify-center border dark:border-blue-800/30 bg-blue_900 rounded-lg z-20"
                >
                  <div className="fixed top-0 right-0 left-0 z-30 text-white w-full flex items-center justify-between pt-2.5 pb-3 px-4">
                    <ProgressiveBlur
                      direction="to-top"
                      blurStart={0}
                      blurEnd={5}
                      layers={5}
                      className="absolute w-full h-full top-0 left-0 z-10"
                    />
                    <span className='relative z-20 text-xs'>{item.name}</span>
                    <button onClick={() => setActiveIndex(null)} className='relative z-20'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="absolute inset-0 overflow-y-scroll no-scrollbar text-gray-600 text-left px-4 pt-8 h-full">
                    <p className="text-xs pb-3">{item.details}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </dl>
    </div>
  );
}
