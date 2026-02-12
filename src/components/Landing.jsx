import { Button } from "@/components/ui/button";
import { Activity, ShieldCheck, HeartPulse, Clock } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/50 to-white dark:via-blue-950/10">
      <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg shadow-lg shadow-primary/25">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">MediCare</span>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                onClick={() => window.location.href = '/api/login'}
                className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 rounded-full px-6"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground tracking-tight max-w-4xl mx-auto">
            Modern Healthcare <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Management System
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Streamline your medical practice with our comprehensive platform. 
            Manage patients, appointments, and billing with elegance and ease.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = '/api/login'}
            >
              Get Started Now
            </Button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {[
            {
              icon: ShieldCheck,
              title: "Secure Records",
              description: "Enterprise-grade security for sensitive patient data and medical history."
            },
            {
              icon: Clock,
              title: "Real-time Scheduling",
              description: "Efficient appointment management with instant updates for doctors and patients."
            },
            {
              icon: HeartPulse,
              title: "Patient Care",
              description: "Dedicated portals for doctors and patients to stay connected and informed."
            }
          ].map((feature, i) => (
            <div 
              key={i}
              className="bg-card p-8 rounded-3xl border border-border/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-blue-50 dark:bg-blue-900/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Hero Image / Abstract Visual */}
        <div className="mt-24 rounded-[3rem] overflow-hidden shadow-2xl border border-border/50 relative aspect-[21/9] bg-slate-900">
          {/* Using Unsplash with descriptive comment */}
          {/* modern medical technology hospital interior blur */}
          <img 
            src="https://pixabay.com/get/gc1aae1db037f22dad00b6e535d7a3862f018297f7bc4d8f72be02d0a91ac2cb70458be5d8087ce8d80dff0930db048e55d960060e4162ac26d93d32e5792ca53_1280.jpg" 
            alt="Modern Hospital Interior" 
            className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="backdrop-blur-md bg-white/10 p-8 rounded-3xl border border-white/20 text-center">
                <h2 className="text-3xl font-bold text-white font-display">Trusted by Top Professionals</h2>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
          }
