
import { SocialIcons } from "../components/ui/social-icons";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="w-full flex flex-col items-center bg-background min-h-[calc(100vh-80px)] pt-12 relative overflow-hidden">
      <style>{`
        @keyframes aurora1 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(15vw, 15vh) scale(1.2); }
          66% { transform: translate(-10vw, 20vh) scale(0.8); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes aurora2 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-15vw, 10vh) scale(0.9); }
          66% { transform: translate(10vw, -15vh) scale(1.1); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes aurora3 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(10vw, -20vh) scale(1.15); }
          66% { transform: translate(-15vw, 5vh) scale(0.95); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .animate-aurora-1 { animation: aurora1 22s ease-in-out infinite alternate; }
        .animate-aurora-2 { animation: aurora2 25s ease-in-out infinite alternate-reverse; }
        .animate-aurora-3 { animation: aurora3 19s ease-in-out infinite alternate; }
        .bento-card {
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .bento-card:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.3);
          z-index: 10;
        }
      `}</style>
      
      {/* Aurora Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] rounded-full bg-primary/20 mix-blend-screen filter blur-[120px] opacity-70 animate-aurora-1"></div>
        <div className="absolute top-[30%] right-[-10%] w-[45vw] h-[55vh] rounded-full bg-[#0011ff]/20 mix-blend-screen filter blur-[130px] opacity-60 animate-aurora-2"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[50vh] rounded-full bg-[#00f3ff]/15 mix-blend-screen filter blur-[150px] opacity-70 animate-aurora-3"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1200px] px-8 md:px-16 mx-auto w-full flex flex-col gap-12 py-16 items-center relative z-10"
      >
        <div className="text-center mb-6 w-full flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary text-xl">contact_mail</span>
            <span className="font-data-tabular text-primary uppercase tracking-widest font-bold text-sm">Connect with Ninetynine</span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-black italic text-foreground tracking-tight leading-tight mb-4">
            Get In Touch.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            건설 산업의 디지털 전환 주역, (주)나인티나인과 새로운 혁신을 논의하세요. 
            아래 연락처와 소셜 미디어를 통해 자세한 문의가 가능합니다.
          </p>
        </div>

        <div className="bg-card/40 backdrop-blur-xl text-card-foreground rounded-[5px] p-10 md:p-14 shadow-2xl border border-border w-full max-w-4xl relative overflow-hidden group bento-card">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-[100px] transition-all duration-700 group-hover:bg-primary/30 group-hover:scale-125"></div>
          
          <div className="flex flex-col md:flex-row gap-16 justify-between items-start w-full">
            
            {/* Left Side: Contact Information */}
            <div className="flex flex-col gap-10 flex-1">
              
              {/* Leader Info */}
              <div className="flex flex-col gap-1 border-b border-border/50 pb-6">
                <span className="text-primary font-mono text-xs tracking-widest uppercase font-bold mb-1">Representative</span>
                <h3 className="text-2xl font-black text-foreground">조대구 대표, Ph.D.</h3>
                <p className="text-muted-foreground font-medium text-sm">(주)나인티나인 | Ninetynine Inc.</p>
              </div>

              {/* Grid of Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-foreground">
                    <span className="material-symbols-outlined text-[20px] text-primary/80">call</span>
                    <h4 className="font-bold text-sm uppercase tracking-wide">Phone</h4>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-muted-foreground font-data-tabular text-sm">📱 010-4160-1876</p>
                    <p className="text-muted-foreground font-data-tabular text-sm">📞 02-949-9910</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-foreground">
                    <span className="material-symbols-outlined text-[20px] text-primary/80">mail</span>
                    <h4 className="font-bold text-sm uppercase tracking-wide">Email</h4>
                  </div>
                  <p className="text-muted-foreground font-mono text-sm">bignine99@naver.com</p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-foreground">
                    <span className="material-symbols-outlined text-[20px] text-primary/80">print</span>
                    <h4 className="font-bold text-sm uppercase tracking-wide">Fax</h4>
                  </div>
                  <p className="text-muted-foreground font-data-tabular text-sm">02-040-9950</p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-foreground">
                    <span className="material-symbols-outlined text-[20px] text-primary/80">home</span>
                    <h4 className="font-bold text-sm uppercase tracking-wide">Website</h4>
                  </div>
                  <a href="https://www.ninetynine99.co.kr" target="_blank" rel="noreferrer" className="text-primary hover:underline font-mono text-sm transition-all">
                    www.ninetynine99.co.kr
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <div className="flex items-center gap-2 text-foreground mb-1">
                  <span className="material-symbols-outlined text-[20px] text-primary/80">location_on</span>
                  <h4 className="font-bold text-sm uppercase tracking-wide">Office</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                  (01905) 서울특별시 노원구 월계로 370<br/>희성프라자 312호
                </p>
              </div>

            </div>

            {/* Right Side: Social Media Interactions */}
            <div className="flex flex-col items-center justify-center bg-background/50 border border-white/5 rounded-2xl p-10 md:w-80 shadow-inner flex-shrink-0 relative overflow-hidden hover:bg-background/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,210,255,0.2)]">
               <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
               <div className="text-center space-y-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 border border-primary/20">
                   <span className="material-symbols-outlined text-primary text-2xl">hub</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-foreground">Connect Direct</h3>
                <p className="text-xs text-muted-foreground font-medium">Follow & Connect across networks</p>
              </div>
              <SocialIcons />
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
