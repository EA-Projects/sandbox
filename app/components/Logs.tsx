const Logs = () => {
    return (  
        <div className="source-logs-wrapper w-[30%]">
            <div className="flex flex-row w-full gap-x-[16px] items-center">
                <div className="flex flex-row items-center gap-x-[8px]">
                    <div className="source-processing-title">Status Log</div>
                </div>
                <div className="bg-[#9D9D9D] w-full h-[1px]"></div>
            </div>
            <div className="sources-log-heading my-[16px]">[LIVE UPDATES]</div>
            <div className="flex flex-col gap-y-[6px] mt-5" style={{height: "calc(100% - 50px)"}}>
                <div className="flex flex-col gap-y-[6px]">
                    <div className="sources-log-heading">[2025-02-18 15:46:13]</div>
                <div className="sources-sub-bullets">Found 3 new relations for “John Smith”</div>
                </div>
                <div className="border-b-[color:var(--Grey-500,#505154)] border-b border-dashed my-[10px]"></div>
                <div className="flex flex-col gap-y-[6px]">
                    <div className="sources-log-heading">[2025-02-18 15:22:08]</div>
                    <div className="sources-sub-bullets">Final validation complete</div>
                </div>
                <div className="border-b-[color:var(--Grey-500,#505154)] border-b border-dashed my-[10px]"></div>
                <div className="flex flex-col gap-y-[6px]">
                    <div className="sources-log-heading">[2025-02-18 09:41:45]</div>
                    <div className="sources-sub-bullets">Found 3 new relations for “John Smith”</div>
                </div>
                <div className="border-b-[color:var(--Grey-500,#505154)] border-b border-dashed my-[10px]"></div>
                <div className="flex flex-col gap-y-[6px]">
                    <div className="sources-log-heading">[2025-02-18 09:17:29]</div>
                    <div className="sources-sub-bullets">Knowledge graph integration successful</div>
                </div>
                <div className="border-b-[color:var(--Grey-500,#505154)] border-b border-dashed my-[10px]"></div>
                <div className="flex flex-col gap-y-[6px]">
                    <div className="sources-log-heading">[2025-02-18 09:17:04]</div>
                    <div className="sources-sub-bullets">Completed final relationship analysis</div>
                </div>
                <div className="border-b-[color:var(--Grey-500,#505154)] border-b border-dashed my-[10px]"></div>
            </div>
        </div>
  );
};

export default Logs;