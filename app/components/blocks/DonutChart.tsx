'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Card, DonutChart } from '@tremor/react';
// import { ProgressiveBlur } from '../effects/ProgressiveBlur';

function classNames(...classes: (string | false | null | undefined)[]): string {
    return classes.filter(Boolean).join(' ');
}

interface DataItem {
    name: string;
    amount: number;
    share: string;
    href: string;
    borderColor: string;
}

const currencyFormatter = (number: number): string => {
    return '$' + Intl.NumberFormat('us').format(number).toString();
};

const data: DataItem[] = [
    {
        name: 'Real estate',
        amount: 2095920,
        share: '84.3%',
        href: '#',
        borderColor: 'bg-blue-900',
    },
    {
        name: 'Stocks & ETFs',
        amount: 250120,
        share: '10.1%',
        href: '#',
        borderColor: 'bg-blue-600',
    },
    {
        name: 'Cash & cash equivalent',
        amount: 140110,
        share: '5.6%',
        href: '#',
        borderColor: 'bg-blue-300',
    },
];

export default function Donut() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className='mx-auto w-full max-w-6xl px-3 py-[150px] text-center'>
        <h2 className="inline-block mb-2 py-2 text-6xl font-bold tracking-tighter">
            Architected for speed
        </h2>
        <p className="max-w-lg m-auto text-md font-regular leading-6 text-gray-600">
            Database innovative architecture avoids the central bottlenecks of traditional systems, enhancing system reliability.
        </p>

        <div className="">
            <Card className="group overflow-hidden mt-10 sm:mx-auto sm:max-w-xl !ring-transparent shadow-none border dark:border-blue-800/30 dark:bg-blue_900 rounded-lg">
                <div className={`grid grid-cols-2 gap-8 ${activeIndex === 0 ? 'opacity-10 blur-sm' : ''}`}>
                    <DonutChart
                        data={data}
                        category="amount"
                        index="name"
                        valueFormatter={currencyFormatter}
                        showTooltip={true}
                        className="h-40"
                        colors={['blue-900', 'blue-600', 'blue-300']}
                    />
                    <div className="mt-6 flex items-center sm:mt-0">
                        <ul role="list" className="space-y-3">
                        {data.map((item) => (
                            <li key={item.name} className="flex space-x-3">
                            <span
                                className={classNames(
                                item.borderColor,
                                'w-1 shrink-0 rounded',
                                )}
                            />
                            <div>
                                <p className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                                {   currencyFormatter(item.amount)}{' '}
                                    <span className="font-normal">({item.share})</span>
                                </p>
                                <p className="mt-0.5 whitespace-nowrap text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                                    {item.name}
                                </p>
                            </div>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>

                {/* More information */}
                <div
                    className={`cursor-pointer inline-table absolute transition-all duration-[.3s] opacity-0 -top-4 -right-4 group-hover:top-3 group-hover:opacity-100 group-hover:right-3 ${activeIndex === 0 ? '!opacity-0 !-top-4 !-right-4' : ''}`}
                    onClick={() => setActiveIndex(activeIndex === 0 ? null : 0)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11V17H13V11H11ZM11 7V9H13V7H11Z"></path>
                    </svg>
                </div>
                
                {/* Show Tooltip */}
                <AnimatePresence>
                {activeIndex === 0 && (
                    <motion.div
                        initial={{ filter: "blur(5px)", opacity: 0 }}
                        animate={{ filter: "blur(0)", opacity: 1 }}
                        exit={{ filter: "blur(5px)", opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'linear' }}
                        className="absolute left-0 top-0 overflow-hidden h-full w-full flex items-center justify-center bg-black rounded-lg z-20"
                    >
                    <button onClick={() => setActiveIndex(null)} className='absolute top-3 right-3 z-30'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path>
                        </svg>
                    </button>

                    <div className="text-white absolute inset-0 text-left h-full">
                        {/* <ProgressiveBlur
                            direction="to-top"
                            blurStart={0}
                            blurEnd={5}
                            layers={5}
                            className="absolute w-full h-10 top-0 left-0 z-20"
                        /> */}
                        <div className="absolute inset-0 overflow-y-scroll no-scrollbar px-4 pt-3 z-10">
                            <h2 className='text-lg mb-2'>Lorem, ipsum dolor</h2>
                            <p className="text-xs text-gray-600 mb-2">
                                It amet consectetur adipisicing elit. Assumenda quibusdam deleniti asperiores dolorum molestiae, corporis cupiditate qui eos facilis magnam sequi molestias placeat!
                            </p>
                            <p className="text-xs text-gray-600 mb-2">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quibusdam aperiam aut ratione nisi!
                            </p>
                            <h2 className='text-sm mb-2 mt-4'>Lorem, ipsum dolor</h2>
                            <p className="text-xs text-gray-600">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quibusdam aperiam aut ratione nisi ducimus reiciendis dignissimos, deleniti asperiores dolorum molestiae!
                            </p>
                            <p className="text-xs text-gray-600">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur iusto voluptate molestias sint nesciunt mollitia adipisci exercitationem nemo quas, dolorem eum quam aliquam vitae assumenda provident, architecto maiores sequi dolore eligendi? Libero ipsam laudantium itaque optio doloribus, ratione fuga exercitationem excepturi ullam cumque debitis officia! Repudiandae debitis quidem ipsa ipsam.
                            </p>
                            <p className="text-xs text-gray-600 mb-2">
                                It amet consectetur adipisicing elit. Assumenda quibusdam deleniti asperiores dolorum molestiae, corporis cupiditate qui eos facilis magnam sequi molestias placeat!
                            </p>
                            <p className="text-xs text-gray-600 pb-4">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quibusdam aperiam aut ratione nisi!
                            </p>
                        </div>
                    </div>
                    </motion.div>
                )}
                </AnimatePresence>
            </Card>
        </div>
    </div>
  );
}