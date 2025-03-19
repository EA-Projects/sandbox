// Utils
import Link from 'next/link';

export default function Index() {
  return (
    <div className="flex justify-center w-screen min-h-screen pt-[50px] pb-[50px]">
      <div className="w-full min-h-full max-w-[1300px] flex flex-col items-start gap-1 relative">
        <h1 className='text-xl tracking-[-0.02em] mb-5'>Reasoner Sandbox</h1>
        <Link href="/console" className="text-sm tracking-[-0.01em] opacity-[30%] hover:opacity-[60%] transition-all duration-400">Console</Link>
        <Link href="/blocks" className="text-sm tracking-[-0.01em] opacity-[30%] hover:opacity-[60%] transition-all duration-400">Report Blocks</Link>
        <Link href="/blocks#stats" className="pl-4 text-sm tracking-[-0.01em] opacity-[30%] hover:opacity-[60%] transition-all duration-400">— Stats</Link>
        <Link href="/blocks#kpi-cards" className="pl-4 text-sm tracking-[-0.01em] opacity-[30%] hover:opacity-[60%] transition-all duration-400">— KPI Cards</Link>
        <Link href="/blocks#donut-chart" className="text-sm tracking-[-0.01em] opacity-[30%] hover:opacity-[60%] transition-all duration-400">Donut Chart</Link>
        <Link href="#" className="text-sm tracking-[-0.01em] opacity-[10%] pointer-events-none hover:opacity-[10%] transition-all duration-400">Other components</Link>
        <div className="flex gap-2 items-center absolute bottom-0">
          <Link href="https://console.reasoner.sh/" target='_blank' className="text-sm tracking-[-0.01em] opacity-[20%] hover:opacity-[50%] transition-all duration-400">console.reasoner.sh</Link>
          <div className="text-sm opacity-[20%]">—</div>
          <Link href="https://reasoner.com/" target='_blank' className="text-sm tracking-[-0.01em] opacity-[20%] hover:opacity-[50%] transition-all duration-400">reasoner.com</Link>
        </div>
      </div>
    </div>
  );
}
