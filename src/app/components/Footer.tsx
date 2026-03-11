import React from "react";

export function Footer() {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Monica Allison. All rights reserved.
        </div>
        <div className="text-slate-500 text-sm">
          Vibe coded by Monica · Designed with Figma Make · Built with Next.js & Claude
        </div>
        
        {/*
        <div className="flex items-center gap-6 text-slate-400 text-sm">
           <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>*/}
      </div>
    </footer>
  );
}
