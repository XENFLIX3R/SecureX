import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Zap, Lock, MessageSquare, Settings, ArrowRight, Crown, Eye, Server, Activity, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { siteConfig } from '@/config';

const iconMap = {
  Shield: Shield,
  Users: Users,
  Zap: Zap,
  Lock: Lock,
  MessageSquare: MessageSquare,
  Settings: Settings,
  ArrowRight: ArrowRight,
  Crown: Crown,
  Eye: Eye,
  Server: Server,
  Activity: Activity,
  Terminal: Terminal,
};

const AnimatedText = ({ text, el: Wrapper = 'span', className, stagger = 0.03 }) => {
  return (
    <Wrapper className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * stagger, duration: 0.3 }}
          style={{ display: 'inline-block' }} 
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </Wrapper>
  );
};


const App = () => {
  const { logoUrl, slogan, botName, description, callToAction, navLinks, stats, features, commands, footerLinks, copyright } = siteConfig;

  const PrimaryButtonIcon = callToAction.primary.icon ? iconMap[callToAction.primary.icon] : Shield;
  const SecondaryButtonIcon = callToAction.secondary.icon ? iconMap[callToAction.secondary.icon] : MessageSquare;

  return (
    <div className="min-h-screen dark-gradient-bg overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-0 w-full z-50 tech-glass-effect"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img 
                src={logoUrl}
                alt={`${botName} Logo`} 
                className="h-12 w-12"
              />
              <span className="text-3xl font-bold text-white">{botName}</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors duration-300 text-lg font-medium">
                  {link.label}
                </a>
              ))}
              <Button className="button-primary-glow text-white font-semibold">
                <PrimaryButtonIcon className="mr-2 h-5 w-5" />
                Add to Server
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 min-h-screen flex items-center justify-center hero-tech-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
            className="mb-8 hero-floating-animation"
          >
            <img 
              src={logoUrl}
              alt={`${botName} Logo`} 
              className="h-32 w-32 mx-auto rounded-full shadow-2xl"
            />
          </motion.div>
          
          <AnimatedText 
            text={slogan} 
            el="h1" 
            className="text-5xl lg:text-7xl font-black text-white mb-6"
            stagger={0.05}
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button size="lg" className="button-primary-glow text-white font-semibold text-lg">
              <PrimaryButtonIcon className="mr-2 h-6 w-6" />
              {callToAction.primary.text}
            </Button>
            <Button size="lg" variant="outline" className="button-outline-white font-semibold text-lg">
              View Commands
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </motion.div>
        </div>
         <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-0"></div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center stats-card rounded-xl p-8"
              >
                <div className="text-5xl font-bold accent-gradient-text mb-3">{stat.number}</div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 hero-tech-pattern">
       <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Powerful Features for
              <span className="accent-gradient-text block">Ultimate Control</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {botName} provides everything you need to maintain a safe, organized, and thriving Discord community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const FeatureIcon = iconMap[feature.icon] || Shield;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="tech-glass-effect rounded-xl p-8 hover:shadow-2xl hover:shadow-white/5 transition-all duration-300"
                >
                  <FeatureIcon className="h-14 w-14 text-white mb-6 icon-glow" />
                  <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 text-md">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commands Section */}
      <section id="commands" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Complete Command
              <span className="accent-gradient-text block">Arsenal</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore {botName}'s comprehensive command library designed for every moderation need.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            {commands.map((category, categoryIndex) => {
              const CategoryIcon = iconMap[category.icon] || Terminal;
              return (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="command-card rounded-xl p-8"
                >
                  <div className="flex items-center mb-8">
                    <CategoryIcon className="h-10 w-10 text-white mr-4 icon-glow" />
                    <h3 className="text-3xl font-bold text-white">{category.category}</h3>
                  </div>
                  <div className="space-y-6">
                    {category.commands.map((command, commandIndex) => (
                      <div key={commandIndex} className="border-l-4 border-white/20 pl-6 py-1 transition-all duration-300 hover:border-white/50">
                        <div className="flex items-center mb-1">
                          <code className="text-white font-mono text-md bg-white/10 px-3 py-1 rounded-md shadow-sm">
                            {command.name}
                          </code>
                        </div>
                        <p className="text-gray-300 text-md mb-1">{command.description}</p>
                        <p className="text-gray-500 text-sm font-mono">{command.usage}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-tech-pattern">
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="tech-glass-effect rounded-2xl p-12 shadow-2xl shadow-white/5"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Secure
              <span className="accent-gradient-text block">Your Server?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join thousands of Discord servers already protected by {botName}. 
              Get started in seconds with our easy setup process.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="button-primary-glow text-white font-semibold text-lg">
                <PrimaryButtonIcon className="mr-2 h-6 w-6" />
                {callToAction.primary.text}
              </Button>
              <Button size="lg" variant="outline" className="button-outline-white font-semibold text-lg">
                <SecondaryButtonIcon className="mr-2 h-6 w-6" />
                {callToAction.secondary.text}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={logoUrl}
                  alt={`${botName} Logo`} 
                  className="h-10 w-10"
                />
                <span className="text-2xl font-bold text-white">{botName}</span>
              </div>
              <p className="text-gray-400 text-md">{slogan}</p>
            </div>
            {Object.entries(footerLinks).map(([key, links]) => (
              <div key={key}>
                <span className="text-white font-semibold text-lg capitalize">{key}</span>
                <div className="mt-5 space-y-3">
                  {links.map(link => (
                    <a key={link.label} href={link.href} className="block text-gray-400 hover:text-white transition-colors duration-300 text-md">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 mt-10 pt-10 text-center">
            <p className="text-gray-400 text-md">{copyright}</p>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
};

export default App;