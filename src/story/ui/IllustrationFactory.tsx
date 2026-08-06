import React from 'react';
import { motion } from 'motion/react';
import { SceneConfig } from '../types';
import { WPIcon } from '../utils/pointHelper';
import { 
  Globe, Layout, MonitorPlay, Server, Database, Smartphone, 
  Code, Zap, Rocket, Cpu, Network, PenTool, LayoutTemplate, Share2, Search, QrCode
} from 'lucide-react';

export const IllustrationFactory: React.FC<{ sceneId: string }> = ({ sceneId }) => {

  const num = parseInt(sceneId.split('_')[1] || '0');

  // Scene 1: Landing Hero
  if (num === 1) return (
    <motion.div 
      className="w-full h-full max-h-[500px] bg-gradient-to-br from-blue-500/[0.02] to-purple-500/[0.01] backdrop-blur-2xl rounded-2xl border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.5)] p-6 flex flex-col items-center justify-center relative overflow-hidden"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
       <div className="absolute top-0 w-full h-1/2 bg-blue-500/10 rounded-t-2xl"></div>
       <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibSOq5GIr9KBMVJU2-7b8EyeOf8FSYqIEMSLvkuN6GPsWpk6lzvBrDnLjfbGa13Y2uKnuyGKfePOn6p138AgUQVaSPf5D25rCV9uxOa4oUReEwwWjFNmdore7sq9qmN4ozTBejMkQCZHYi8PtptE1VTshNsj7Lbg0tbkup4F14pRjuhbOw2IHz5vTQobM/s1600/wpcc-logo-horizontal-white.png" className="h-16 mb-8 z-10" alt="WPCC" />
       <div className="w-48 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg z-10 text-white font-bold">Join Now</div>
       <WPIcon className="absolute bottom-[-50px] right-[-50px] w-64 h-64 opacity-10 text-white" />
    </motion.div>
  );

  // Scene 2: Profile
  if (num === 2) return (
    <motion.div 
      className="w-full h-full max-h-[500px] bg-gradient-to-br from-blue-500/[0.02] to-purple-500/[0.01] backdrop-blur-2xl rounded-2xl border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.5)] p-6 flex flex-col relative overflow-hidden"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex gap-6 items-center border-b border-slate-700/50 pb-6 mb-6">
         <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAA5FpDA_DYIf4Jh9EW26kX1ZvCt2rO9hRvvlPpfVyeCSTuxMEtQhwoTdPq2YqcOvMtIInXI3Yrib4oa-yRbAmk4-6xO10GXF_-r3jilk2baJsGE6PhZRpl7VGEe9hvahGuiE8B3Vl1ERUOPIU6l75gh0i4zpLhVFoM4fWbUB_2Xkn7HVMv0iQjH_dq8w/s1600/fs-profile.png" className="w-24 h-24 rounded-full border-2 border-blue-500 object-cover shadow-lg" alt="Profile" />
         <div>
            <div className="w-32 h-4 bg-slate-300 rounded mb-2"></div>
            <div className="w-24 h-3 bg-blue-400 rounded"></div>
         </div>
      </div>
      <div className="flex-1 flex flex-col gap-4 relative">
         <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-slate-700"></div>
         {[1,2,3].map(i => (
           <div key={i} className="flex gap-4 items-start relative z-10 pl-8">
              <div className="w-6 h-6 rounded-full bg-blue-500 absolute left-0 flex items-center justify-center shadow-lg border-2 border-slate-900">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="w-full h-12 bg-slate-800/50 rounded-lg p-2 flex flex-col justify-center">
                 <div className="w-3/4 h-2 bg-slate-600 rounded mb-2"></div>
                 <div className="w-1/2 h-2 bg-slate-700 rounded"></div>
              </div>
           </div>
         ))}
      </div>
    </motion.div>
  );

  // Scene 58: Demo Singkat
  if (num === 58) return (
    <motion.div 
      className="w-full h-full max-h-[500px] bg-gradient-to-br from-blue-500/[0.02] to-purple-500/[0.01] backdrop-blur-2xl rounded-2xl border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.5)] p-8 flex flex-col items-center justify-center relative overflow-hidden"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-20 h-20 rounded-full bg-blue-600/20 border border-blue-400/40 flex items-center justify-center mb-6 shadow-lg animate-pulse">
        <MonitorPlay className="w-10 h-10 text-blue-400" />
      </div>
      <div className="text-white font-bold text-xl mb-2">Live Demo Mode</div>
      <div className="text-slate-400 text-sm text-center max-w-xs">Melihat WordPress bekerja secara langsung</div>
    </motion.div>
  );

  // Scene 63 & 64: QR Code & Thank You
  if (num === 63 || num === 64) return (
    <motion.div 
      className="w-full h-full max-h-[500px] flex items-center justify-center relative"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, type: 'spring' }}
    >
       <div className="w-64 h-64 bg-white rounded-2xl flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.2)] p-4 relative">
          <QrCode className="w-full h-full text-slate-900" />
       </div>
    </motion.div>
  );

  // Simple abstract wireframe dashboard
  const DashboardMockup = () => (
    <motion.div 
      className="w-full h-full max-h-[500px] bg-gradient-to-br from-blue-500/[0.02] to-purple-500/[0.01] backdrop-blur-2xl rounded-2xl border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.5)] p-4 flex flex-col overflow-hidden"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center gap-2 mb-4 border-b border-slate-700/50 pb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div className="mx-auto w-3/4 h-6 bg-slate-800 rounded-md"></div>
      </div>
      <div className="flex-1 flex gap-4">
        <div className="w-1/4 h-full bg-slate-800/50 rounded-lg flex flex-col gap-2 p-2">
          {[1,2,3,4,5].map(i => <div key={i} className="w-full h-8 bg-slate-700/30 rounded"></div>)}
        </div>
        <div className="w-3/4 flex flex-col gap-4">
          <div className="w-full h-1/3 bg-blue-900/20 border border-blue-500/20 rounded-lg flex items-center justify-center">
            <LayoutTemplate className="w-12 h-12 text-blue-500/50" />
          </div>
          <div className="w-full h-2/3 grid grid-cols-2 gap-4">
             <div className="bg-slate-800/50 rounded-lg"></div>
             <div className="bg-slate-800/50 rounded-lg"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  // Simple code editor
  const CodeMockup = () => (
    <motion.div 
      className="w-full h-full max-h-[500px] bg-[#1e1e1e] rounded-2xl border border-slate-700 shadow-2xl p-6 font-mono text-sm overflow-hidden flex flex-col"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="text-blue-400">function <span className="text-yellow-300">buildWebsite</span>() {'{'}</div>
      <div className="text-slate-300 ml-4">const framework = <span className="text-orange-300">'WordPress'</span>;</div>
      <div className="text-slate-300 ml-4">const success = <span className="text-blue-400">true</span>;</div>
      <div className="text-slate-300 ml-4 mt-4 text-slate-500">// Initialize magic</div>
      <div className="text-purple-400 ml-4">await <span className="text-yellow-300">deploy</span>(framework);</div>
      <div className="text-slate-300">{'}'}</div>
      <Code className="absolute bottom-8 right-8 w-24 h-24 text-white/5" />
    </motion.div>
  );

  // Network / Nodes
  const NetworkMockup = () => (
    <div className="w-full h-full flex items-center justify-center relative">
       <Network className="w-48 h-48 text-blue-500/30 absolute" />
       <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="w-64 h-64 border border-blue-500/20 rounded-full border-dashed absolute"></motion.div>
       <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} className="w-48 h-48 border border-purple-500/30 rounded-full border-dashed absolute"></motion.div>
       <Globe className="w-16 h-16 text-blue-400 z-10" />
    </div>
  );

  // WordPress specific
  const WPMockup = () => (
    <motion.div 
      className="w-full h-full max-h-[500px] flex items-center justify-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, type: 'spring' }}
    >
      <div className="w-64 h-64 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_100px_rgba(37,99,235,0.5)] border-8 border-white/10">
         <WPIcon className="w-32 h-32 text-white" />
      </div>
    </motion.div>
  );
  
  if (num >= 5 && num <= 9) return null;
  if (num >= 10 && num <= 19) return null;
  if (num >= 20 && num <= 40) return null;
  if (num >= 41 && num <= 48) return null;

  // Default fallback for others
  return null;
};
