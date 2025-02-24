"use client";

// Libraries
import { motion } from "framer-motion";

const Logs = () => {
    return (  
        <div className="source-logs-wrapper w-[30%]">
            <div className="flex flex-row w-full gap-x-[16px] items-center">
                <div className="flex flex-row items-center gap-x-[8px]">
                    <div className="source-processing-title">Status Log</div>
                </div>
                <div className="bg-grey_300 w-full h-[1px]"></div>
            </div>
            <div className="sources-log-heading is-live-updates my-[16px]">[LIVE UPDATES]</div>
            <div className="flex flex-col gap-y-[6px] mt-5 overflow-hidden" style={{height: "calc(100% - 50px)"}}>
                <motion.div
                    className="log-detail"
                    initial={{ opacity: 0, marginTop: -60 }}
                    animate={{ opacity: 1, marginTop: 0 }}
                    transition={{ 
                        duration: 0.4,
                        delay: 2,
                        ease: "easeInOut",
                    }}
                >
                    <div className="flex flex-col gap-y-[6px]">
                        <motion.div 
                            className="sources-log-heading"
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1}}
                            transition={{ 
                                duration: 0.2,
                                delay: 2.4,
                                ease: "easeInOut",
                            }}
                        >
                            [2025-02-18 08:02:23]
                        </motion.div>
                        <motion.div 
                            className="sources-sub-bullets"
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1}}
                            transition={{ 
                                duration: 0.2,
                                delay: 2.5,
                                ease: "easeInOut",
                            }}
                        >
                            Process finished!
                        </motion.div>
                    </div>
                    <div className="border-b-[color:var(--Grey-500,#505154)] border-b border-dashed my-[10px]"></div>
                </motion.div>
                <div className="log-detail">
                    <div className="flex flex-col gap-y-[6px]">
                        <div className="sources-log-heading">[2025-02-18 15:46:13]</div>
                        <div className="sources-sub-bullets">Found 3 new relations for “John Smith”</div>
                    </div>
                    <div className="border-b-[color:var(--Grey-500,#505154)] border-b border-dashed my-[10px]"></div>
                </div>
                <div className="log-detail">
                    <div className="flex flex-col gap-y-[6px]">
                        <div className="sources-log-heading">[2025-02-18 15:22:08]</div>
                        <div className="sources-sub-bullets">Final validation complete</div>
                    </div>
                    <div className="border-b-[color:var(--Grey-500,#505154)] border-b border-dashed my-[10px]"></div>
                </div>
                <div className="log-detail">
                    <div className="flex flex-col gap-y-[6px]">
                        <div className="sources-log-heading">[2025-02-18 09:41:45]</div>
                        <div className="sources-sub-bullets">Found 3 new relations for “John Smith”</div>
                    </div>
                    <div className="border-b-[color:var(--Grey-500,#505154)] border-b border-dashed my-[10px]"></div>
                </div>
                <div className="log-detail">
                    <div className="flex flex-col gap-y-[6px]">
                        <div className="sources-log-heading">[2025-02-18 09:17:29]</div>
                        <div className="sources-sub-bullets">Knowledge graph integration successful</div>
                    </div>
                    <div className="border-b-[color:var(--Grey-500,#505154)] border-b border-dashed my-[10px]"></div>
                </div>
                <div className="log-detail">
                    <div className="flex flex-col gap-y-[6px]">
                        <div className="sources-log-heading">[2025-02-18 09:17:04]</div>
                        <div className="sources-sub-bullets">Completed final relationship analysis</div>
                    </div>
                    <div className="border-b-[color:var(--Grey-500,#505154)] border-b border-dashed my-[10px]"></div>
                </div>
            </div>
        </div>
  );
};

export default Logs;