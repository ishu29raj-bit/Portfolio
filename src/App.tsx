import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Camera, Play, TrendingUp, Mail, ArrowUpRight, Sun, Moon, Check } from "lucide-react";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    // Default to dark mode if no theme is saved
    if (savedTheme === 'dark' || !savedTheme) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50 selection:bg-neutral-950 selection:text-white dark:selection:bg-white dark:selection:text-neutral-950 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f8f9fa]/80 dark:bg-neutral-950/80 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
          <a href="mailto:yeeshuraj.design@gmail.com" className="flex items-center gap-3 text-neutral-950 dark:text-neutral-50 font-medium hover:opacity-70 transition-opacity">
            <div className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center bg-white dark:bg-neutral-900 shadow-sm transition-colors duration-300">
              <Mail className="w-4 h-4" />
            </div>
            <span className="text-sm font-semibold tracking-tight hidden sm:block">yeeshuraj.design@gmail.com</span>
          </a>
          <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-neutral-950 dark:text-neutral-50 transition-colors duration-300">
            <a href="#work" className="hover:opacity-70 transition-opacity">Works</a>
            <a href="#pricings" className="hover:opacity-70 transition-opacity">Pricings</a>
            <a href="#services" className="hover:opacity-70 transition-opacity">Services</a>
            <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
          </div>
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center bg-white dark:bg-neutral-900 text-neutral-950 dark:text-white hover:opacity-70 transition-all duration-300 shadow-sm ml-auto md:ml-0"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-24 md:pt-48 md:pb-32 px-6">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-10 shadow-sm transition-colors duration-300">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Available for new projects
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#e0f2fe] dark:bg-[#082f49] overflow-hidden mb-6 mx-auto border-4 border-white dark:border-neutral-800 shadow-sm transition-colors duration-300">
                <img 
                  src="https://i.ibb.co/zTsCpWbQ/myimage.png" 
                  alt="Yeeshuraj Ankush" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="relative inline-block w-full">
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-8 flex items-center justify-center gap-2 text-neutral-700 dark:text-neutral-300 transition-colors duration-300">
                  Hi, I'm Yeeshuraj <span className="text-2xl">👋</span>
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h1 className="text-6xl md:text-8xl lg:text-[100px] font-bold tracking-tighter leading-[1.05] mb-8 transition-colors duration-300">
                <span className="text-neutral-950 dark:text-white">Building brands with</span><br />
                <span className="text-neutral-400 dark:text-neutral-500">
                  <span className="relative inline-block">
                    <svg className="absolute left-[-3%] bottom-[0.08em] w-[106%] h-[0.28em] text-[#bce3e0] dark:text-[#2dd4bf] z-0 transition-colors duration-300" viewBox="0 0 200 30" preserveAspectRatio="none">
                      <path d="M5,22 Q100,8 195,22" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" />
                    </svg>
                    <span className="relative z-10">AI-driven</span>
                  </span> content.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg md:text-2xl text-neutral-500 dark:text-neutral-400 font-normal max-w-4xl leading-relaxed mb-12 mx-auto transition-colors duration-300">
                I help modern brands scale their visual identity through studio-quality AI product imagery, high-performing UGC videos, and strategic social media marketing.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#0a0a0a] dark:bg-white text-white dark:text-neutral-950 px-10 py-5 rounded-full text-lg md:text-xl font-bold tracking-wide hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95"
              >
                Connect With Me
              </a>
            </FadeIn>
          </div>
        </section>

        {/* Social Proof / Trust */}
        <section className="py-12 border-y border-neutral-100 dark:border-neutral-800/50 bg-neutral-50/50 dark:bg-neutral-900/20 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-8 transition-colors duration-300">
              Trusted by forward-thinking brands
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 dark:opacity-30 grayscale transition-opacity duration-300">
              {/* Placeholder logos using text for minimal look */}
              <span className="text-2xl font-bold tracking-tighter">Acme Corp</span>
              <span className="text-2xl font-serif italic">Lumina</span>
              <span className="text-2xl font-black uppercase tracking-widest">Nexus</span>
              <span className="text-2xl font-medium tracking-tight">Aura.</span>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16 transition-colors duration-300">
                Services designed for <br />
                <span className="text-neutral-400 dark:text-neutral-500">maximum conversion.</span>
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Camera className="w-6 h-6" />,
                  title: "AI Product Imagery",
                  desc: "Studio-quality product visuals generated using advanced AI, saving you time and production costs."
                },
                {
                  icon: <Play className="w-6 h-6" />,
                  title: "AI UGC Videos",
                  desc: "High-performing, user-generated style video ads engineered to stop the scroll and drive sales."
                },
                {
                  icon: <TrendingUp className="w-6 h-6" />,
                  title: "Social Media Marketing",
                  desc: "Growth-focused content strategies and campaigns tailored for modern brands."
                }
              ].map((service, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="group p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800 hover:bg-neutral-950 dark:hover:bg-neutral-800 hover:text-white dark:hover:text-white transition-all duration-300 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-950 dark:text-white group-hover:border-neutral-800 dark:group-hover:border-neutral-600 mb-8 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-400 dark:group-hover:text-neutral-300 leading-relaxed transition-colors duration-300">
                      {service.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="work" className="py-32 px-6 bg-neutral-950 dark:bg-black text-white transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
                  Selected Work
                </h2>
                <p className="text-neutral-400 max-w-sm">
                  A glimpse into AI-generated campaigns and visuals that drive results.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FadeIn delay={0.1}>
                <div className="group relative aspect-square md:aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900">
                  <img 
                    src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=2000&auto=format&fit=crop" 
                    alt="AI Product Imagery" 
                    className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-sm font-medium text-neutral-300 mb-2">AI Product Imagery</p>
                    <h3 className="text-2xl font-semibold">Skincare Campaign</h3>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <div className="group relative aspect-square md:aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900">
                  <video 
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=2000&auto=format&fit=crop"
                    className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  >
                    <source src="https://media.tenor.com/1PlcX9IbjcQAAAPo/muh-pe-cream-lagana-yogita-bachani.mp4" type="video/mp4" />
                    <source src="https://videos.pexels.com/video-files/4665156/4665156-hd_1920_1080_30fps.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-sm font-medium text-neutral-300 mb-2">UGC Video Creation</p>
                    <h3 className="text-2xl font-semibold">Beauty Brand Launch</h3>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="group relative aspect-square md:aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900">
                  <img 
                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
                    alt="Social Media Marketing" 
                    className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-sm font-medium text-neutral-300 mb-2">Social Media</p>
                    <h3 className="text-2xl font-semibold">Furniture Brand Growth</h3>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="group relative aspect-square md:aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900 flex items-center justify-center p-12 text-center border border-neutral-800 hover:border-neutral-600 transition-colors">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">View Full Archive</h3>
                    <p className="text-neutral-400 mb-8">Explore more AI-generated content and marketing case studies.</p>
                    <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium hover:text-neutral-300 transition-colors">
                      Request Portfolio <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8 transition-colors duration-300">
                The intersection of <br />
                <span className="text-neutral-400 dark:text-neutral-500">creativity and technology.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed mb-12 transition-colors duration-300">
                I'm Yeeshuraj Ankush, an AI Media Marketing specialist. I leverage cutting-edge artificial intelligence to produce studio-quality visuals and high-converting video content at a fraction of the traditional cost and time. My goal is simple: to help brands scale their presence with content that actually performs.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-neutral-100 dark:border-neutral-800/50 pt-12 transition-colors duration-300">
                <div>
                  <div className="text-4xl font-bold tracking-tighter mb-2">10x</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">Faster Production</div>
                </div>
                <div>
                  <div className="text-4xl font-bold tracking-tighter mb-2">80%</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">Cost Reduction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold tracking-tighter mb-2">2x</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">Engagement Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold tracking-tighter mb-2">∞</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">Creative Possibilities</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricings" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 transition-colors duration-300">
                  Simple, transparent <br />
                  <span className="text-neutral-400 dark:text-neutral-500">pricing.</span>
                </h2>
                <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto transition-colors duration-300">
                  Choose the plan that best fits your brand's content needs.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Starter",
                  price: "$110",
                  period: "/month",
                  desc: "Perfect for emerging brands looking to establish a visual presence.",
                  features: ["30 AI Product Images", "5 UGC Video Ads", "Basic Social Strategy", "Email Support"]
                },
                {
                  name: "Growth",
                  price: "$270",
                  period: "/month",
                  desc: "Ideal for scaling businesses needing consistent, high-quality content.",
                  features: ["70 AI Product Images", "10 UGC Video Ads", "Comprehensive Strategy", "Priority Support", "A/B Testing Assets"],
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "",
                  desc: "Tailored solutions for large brands with high-volume content needs.",
                  features: ["Personalized AI Imagery", "Custom Video Production", "Dedicated Account Manager", "24/7 Support", "Custom Integrations"]
                }
              ].map((plan, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className={`relative p-8 rounded-3xl border ${plan.popular ? 'border-neutral-950 dark:border-white bg-neutral-950 dark:bg-white text-white dark:text-neutral-950' : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900'} transition-colors duration-300 h-full flex flex-col`}>
                    {plan.popular && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase border border-neutral-950 dark:border-white">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold tracking-tighter">{plan.price}</span>
                      <span className={`text-sm ${plan.popular ? 'text-neutral-300 dark:text-neutral-600' : 'text-neutral-500 dark:text-neutral-400'}`}>{plan.period}</span>
                    </div>
                    <p className={`mb-8 text-sm ${plan.popular ? 'text-neutral-300 dark:text-neutral-600' : 'text-neutral-500 dark:text-neutral-400'}`}>
                      {plan.desc}
                    </p>
                    <ul className="space-y-4 mb-8 flex-grow">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm">
                          <Check className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-white dark:text-neutral-950' : 'text-neutral-950 dark:text-white'}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className={`block w-full py-4 rounded-full text-center font-semibold transition-all ${plan.popular ? 'bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white hover:opacity-90' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-950 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700'}`}
                    >
                      Get Started
                    </a>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-32 px-6 bg-neutral-50 dark:bg-neutral-900/30 transition-colors duration-300">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 transition-colors duration-300">
                Let's build high-converting <br /> content with AI.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-neutral-500 dark:text-neutral-400 mb-12 max-w-2xl mx-auto transition-colors duration-300">
                Ready to elevate your brand's visual identity? Let's discuss how AI-driven media marketing can scale your business.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <a
                href="mailto:yeeshuraj.design@gmail.com"
                className="inline-flex items-center gap-2 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 px-10 py-5 rounded-full text-lg md:text-xl font-bold tracking-wide hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95"
              >
                <Mail className="w-5 h-5" />
                Start a Project
              </a>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-neutral-100 dark:border-neutral-800/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-bold text-xl tracking-tighter">YA.</div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 transition-colors duration-300">
            © {new Date().getFullYear()} Yeeshuraj Ankush. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium text-neutral-500 dark:text-neutral-400">
            <a href="#" className="hover:text-neutral-950 dark:hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-neutral-950 dark:hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-neutral-950 dark:hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
