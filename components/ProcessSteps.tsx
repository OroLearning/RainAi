import React from 'react';

const StepColumn = ({ number, title, description, colorClass, numberColor, icon: Icon }: any) => {
  return (
    <div className={`flex-1 min-h-[600px] p-12 flex flex-col border-r border-slate-100 dark:border-darkBorder last:border-0 transition-all duration-700 ease-out group hover:bg-white dark:hover:bg-darkCard hover:z-10 hover:shadow-[0_40px_100px_-20px_rgba(59,130,246,0.15)] hover:scale-[1.02] cursor-default ${colorClass}`}>
      {/* Top Section: Number with Fixed Height for Alignment */}
      <div className="h-32 flex items-end mb-8">
        <div className={`text-[120px] font-black opacity-10 dark:opacity-20 select-none tracking-tighter transition-all duration-700 group-hover:opacity-40 dark:group-hover:opacity-40 group-hover:translate-x-4 group-hover:scale-110 ${numberColor}`}>
          {number}
        </div>
      </div>
      
      {/* Icon Section with Fixed Height for Alignment */}
      <div className="h-24 flex items-center mb-16 transition-transform duration-500 group-hover:translate-y-[-8px]">
        <div className="flex items-center gap-3">
          <div className={`p-4 rounded-[24px] ${numberColor.replace('text', 'bg').replace('500', '50')} dark:bg-slate-800 border-2 ${numberColor.replace('text', 'border').replace('500', '100')} dark:border-darkBorder shadow-sm group-hover:shadow-md transition-all duration-500`}>
            <Icon className={`w-10 h-10 ${numberColor}`} />
          </div>
          <div className="flex flex-col gap-1.5">
             <div className={`h-1.5 w-12 rounded-full ${numberColor.replace('text', 'bg')} opacity-20`}></div>
             <div className={`h-1.5 w-8 rounded-full ${numberColor.replace('text', 'bg')} opacity-10`}></div>
          </div>
        </div>
      </div>

      {/* Content Section: Title & Description */}
      <div className="transition-all duration-500 group-hover:translate-y-[-4px]">
        <div className="min-h-[5rem] flex items-start mb-6">
          <h3 className="text-2xl font-black uppercase tracking-tight leading-tight text-slate-900 dark:text-white group-hover:text-blue-600 transition-all duration-500">
            {title}
          </h3>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium transition-colors duration-500 group-hover:text-slate-700 dark:group-hover:text-slate-300">
          {description}
        </p>
      </div>
    </div>
  );
};

const ProcessSteps: React.FC = () => {
  return (
    <section className="bg-white dark:bg-darkBg py-32 overflow-hidden reveal transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 mb-20 text-center md:text-left">
        <div className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-6">
           <span className="text-blue-600 dark:text-blue-400 font-black text-[10px] tracking-widest uppercase">The Roadmap</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">14 Days To Freedom</h2>
        <p className="text-slate-500 dark:text-slate-500 mt-4 max-w-xl text-lg font-medium italic opacity-70">From initial intrigue to final close—we've mapped out the exact psychological journey of your future customers.</p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row bg-slate-50/50 dark:bg-darkCard rounded-[48px] border border-slate-100 dark:border-darkBorder overflow-hidden shadow-2xl shadow-blue-500/5 transition-all duration-1000 items-stretch">
        <StepColumn 
          number="1"
          title="The Hook Foundation"
          description="Day 1-3 focuses on calling out the 'Hidden Pain'. We use polarizing statements to filter your true audience from the noise."
          colorClass="bg-blue-50/10 dark:bg-blue-900/30"
          numberColor="text-cyan-500"
          icon={(props: any) => (
            <svg {...props} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          )}
        />
        <StepColumn 
          number="2"
          title="Authority Stacking"
          description="Day 4-7 is where we build the 'Belief Bridge'. By sharing specific results and methodology, you become the only logical choice."
          colorClass="bg-blue-50/30 dark:bg-blue-900/30"
          numberColor="text-orange-500"
          icon={(props: any) => (
            <svg {...props} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          )}
        />
        <StepColumn 
          number="3"
          title="Social Evidence"
          description="Day 8-11 transitions bulky results into concise, hard-hitting executive summaries that prove your product works for anyone."
          colorClass="bg-blue-100/20 dark:bg-blue-900/30"
          numberColor="text-rose-500"
          icon={(props: any) => (
            <svg {...props} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          )}
        />
        <StepColumn 
          number="4"
          title="The Freedom Close"
          description="Day 12-14 is for the 'Intellectual Close'. We handle every objection before they even ask, leading to effortless high-ticket sales."
          colorClass="bg-blue-200/10 dark:bg-blue-900/30"
          numberColor="text-lime-500"
          icon={(props: any) => (
            <svg {...props} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          )}
        />
      </div>
    </section>
  );
};

export default ProcessSteps;