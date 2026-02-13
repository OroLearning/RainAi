import React, { useState, useRef, useEffect } from 'react';

const PricingCard = ({ 
  title, 
  price, 
  period, 
  description, 
  features, 
  buttonText, 
  isFeatured = false, 
  isEnterprise = false,
  onHover,
  onClick,
  index,
  isHidden = false,
  translateClass = ""
}: any) => {
  return (
    <div 
      onMouseEnter={() => !isHidden && onHover(index)}
      className={`relative flex flex-col h-[680px] w-[380px] shrink-0 rounded-[48px] border-2 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group ${
        isFeatured 
          ? 'bg-[#1e293b] dark:bg-slate-800 text-white border-blue-600 shadow-2xl shadow-blue-500/20 z-10' 
          : 'bg-white dark:bg-darkCard text-slate-900 dark:text-slate-100 border-slate-50 dark:border-darkBorder shadow-xl'
      } ${isHidden ? 'opacity-0 pointer-events-none scale-95 -translate-x-8 !w-0 !p-0 !m-0 overflow-hidden border-0' : 'opacity-100 p-10'} ${translateClass}`}
    >
      <div className={`w-full flex flex-col h-full ${isHidden ? 'invisible' : 'visible'}`}>
        {/* Header Section with Fixed Height for Alignment */}
        <div className="h-[180px] mb-4">
          <p className={`text-[11px] font-black uppercase tracking-[0.3em] mb-4 ${isFeatured ? 'text-blue-400' : 'text-blue-600 dark:text-blue-400'}`}>
            {title}
          </p>
          <div className="flex items-baseline gap-1">
            <span className="text-6xl font-black tracking-tighter">{price}</span>
            {!isEnterprise && <span className={`text-lg font-bold opacity-40 ml-1`}>/{period}</span>}
          </div>
          <p className={`mt-5 text-sm font-semibold leading-relaxed opacity-70`}>
            {description}
          </p>
        </div>

        {/* Feature List Section */}
        <div className="flex-1 space-y-4 mb-8 pt-6 border-t border-slate-100 dark:border-slate-800">
          <p className={`text-[10px] font-black uppercase tracking-widest opacity-30 mb-2`}>Included Protocol</p>
          {features.map((feature: string, i: number) => (
            <div key={i} className="flex items-start gap-4">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isFeatured ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400'}`}>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="text-xs font-bold tracking-tight leading-tight">{feature}</span>
            </div>
          ))}
        </div>

        {/* Button Section */}
        <div className="mt-auto">
          <button 
            onClick={onClick}
            className={`w-full py-5 rounded-[24px] text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-300 active:scale-95 ${
            isFeatured 
              ? 'bg-blue-600 text-white hover:bg-white hover:text-slate-900 shadow-xl shadow-blue-500/30' 
              : 'bg-[#0f172a] dark:bg-slate-900 text-white hover:bg-blue-600 shadow-lg'
          }`}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState(1);
  
  // Logic states
  const [isNudgeActive, setIsNudgeActive] = useState(false);
  const [isAnnualCovering, setIsAnnualCovering] = useState(false);
  const [isMonthlyHidden, setIsMonthlyHidden] = useState(false);
  const [showGoodChoice, setShowGoodChoice] = useState(false);
  const [isBypassActive, setIsBypassActive] = useState(false);

  const commonFeatures = [
    "14-Day Full Protocol Synthesis",
    "Neural Hook Optimization",
    "Cinematic Direction & Visuals",
    "High-Ticket Conversion CTAs",
    "Unlimited Archive Access"
  ];

  const handleMonthlyClick = () => {
    // 1. If bypass is active, proceed normally
    if (isBypassActive) {
      alert("Proceeding to Monthly checkout...");
      return;
    }

    // 2. Hide monthly and translate annual to cover it
    setIsAnnualCovering(true);
    
    // 3. Show "Are you sure" modal after slide animation
    setTimeout(() => {
      setIsNudgeActive(true);
    }, 800);
  };

  const handleDecision = (decision: 'yes' | 'no') => {
    if (decision === 'yes') {
      // Yes path:
      // 1) Annual pricing moves back
      setIsAnnualCovering(false);
      setIsNudgeActive(false);
      // 2) user is able to click monthly pricing for 60 seconds
      setIsBypassActive(true);
      
      // 3) after 60 seconds the original flow starts again
      setTimeout(() => {
        setIsBypassActive(false);
      }, 60000);
    } else {
      // No path:
      // 1) A new bubble pops up saying good choice
      setShowGoodChoice(true);
      setIsNudgeActive(false);
      setIsAnnualCovering(false);
      // 2) monthly pricing hidden for 60s
      setIsMonthlyHidden(true);
      
      setTimeout(() => setShowGoodChoice(false), 3000);
      
      setTimeout(() => {
        setIsMonthlyHidden(false);
      }, 60000);
    }
  };

  return (
    <section className="py-40 px-4 relative overflow-hidden reveal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-6 uppercase">Scale Your Rain.</h2>
          <p className="text-slate-500 dark:text-slate-500 max-w-2xl mx-auto text-lg font-medium italic opacity-70">
            Choose the frequency of your success. All tiers include full access to the RAIN Ai synthesis engine.
          </p>
        </div>

        <div className="relative flex justify-center w-full">
          {/* Confirmation Modal */}
          {isNudgeActive && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/10 backdrop-blur-md animate-fade-in">
              <div 
                className="bg-white dark:bg-darkCard p-12 rounded-[56px] shadow-heavy border border-slate-100 dark:border-darkBorder flex flex-col items-center gap-10 animate-fade-in-up"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="text-slate-900 dark:text-white font-black text-2xl uppercase tracking-[0.3em] text-center">Are you sure?</p>
                <div className="flex gap-8">
                  <button 
                    onClick={() => handleDecision('yes')}
                    className="px-12 py-5 bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-[28px] font-black text-sm uppercase tracking-[0.2em] transition-all"
                  >
                    Yes
                  </button>
                  <button 
                    onClick={() => handleDecision('no')}
                    className="px-14 py-5 bg-blue-600 text-white rounded-[28px] font-black text-sm uppercase tracking-[0.2em] shadow-2xl shadow-blue-500/40 active:scale-95 transition-all"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Good Choice Bubble */}
          {showGoodChoice && (
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[110] animate-bounce">
              <div className="bg-emerald-500 text-white px-12 py-6 rounded-full font-black text-sm uppercase tracking-[0.4em] shadow-heavy border-4 border-white/30">
                Good Choice
              </div>
            </div>
          )}

          {/* Pricing Grid with fixed width logic */}
          <div 
            className={`flex flex-col md:flex-row gap-8 items-center justify-center relative transition-all duration-700 w-full`}
          >
            {/* Monthly Card */}
            <PricingCard 
              index={0}
              isHidden={isMonthlyHidden || isAnnualCovering}
              onHover={setHoveredIndex}
              onClick={handleMonthlyClick}
              title="Standard Flow"
              price="RM65"
              period="month"
              description="Perfect for creators testing the waters. Professional monthly recurring access."
              features={commonFeatures}
              buttonText="Initiate Monthly"
            />
            
            {/* Annual Card (Middle) */}
            <PricingCard 
              index={1}
              onHover={setHoveredIndex}
              onClick={() => console.log("Annual protocol initiated")}
              title="Accelerated Storm"
              price="RM499"
              period="year"
              description="Our most popular path. Massive savings for committed brand builders."
              features={commonFeatures}
              buttonText="Secure Annual"
              isFeatured={true}
              translateClass={isAnnualCovering ? "-translate-x-[412px]" : ""} // (380px width + 32px gap)
            />
            
            {/* Enterprise Card */}
            <PricingCard 
              index={2}
              onHover={setHoveredIndex}
              onClick={() => console.log("Enterprise requested")}
              title="Infinite Cloud"
              price="Enterprise"
              period="lifetime"
              description="Exclusive lifetime access for established agencies and enterprises."
              features={commonFeatures}
              buttonText="Contact Us"
              isEnterprise={true}
            />
          </div>
        </div>
        
        <div className="mt-24 text-center">
          <p className="text-[11px] font-black text-slate-300 dark:text-slate-700 uppercase tracking-[0.6em]">Secure Neural Checkout • AES-256 Encryption Active</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;