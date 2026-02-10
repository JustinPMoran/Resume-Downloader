import React from 'react';
import { FileDown, School } from 'lucide-react';

function App() {
    const handleDownload = () => {
        // Creating a link to the PDF in the root (which we'll move to public)
        const link = document.createElement('a');
        link.href = '/2.09 Resume - Justin Moran.pdf';
        link.download = 'Justin Moran - Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            {/* Universal Atmospheric Overlays */}
            <div className="paper-texture" />
            <div className="vignette" />

            <main className="min-h-screen flex items-center justify-center p-6 sm:p-12 relative overflow-hidden">
                {/* Background Decorative Element (Optional) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-2xl w-full ornate-frame bg-background-alt/50 p-8 sm:p-16 rounded border border-border shadow-2xl relative z-10 backdrop-blur-sm">
                    {/* Wax Seal Badge */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 sm:w-28 sm:h-28 z-20 pointer-events-none">
                        <div className="w-full h-full bg-accent-secondary rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.3),0_4px_8px_rgba(0,0,0,0.4)] flex items-center justify-center relative transform rotate-12">
                            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2)_0%,transparent_70%)]" />
                            <div className="w-[85%] h-[85%] rounded-full border-2 border-white/10 flex items-center justify-center flex-col">
                                <span className="font-display text-[8px] sm:text-[10px] text-foreground/80 tracking-[0.2em] mb-1">SENIOR</span>
                                <div className="h-px w-8 bg-foreground/20" />
                                <span className="font-display text-[8px] sm:text-[10px] text-foreground/80 tracking-[0.2em] mt-1">CS '26</span>
                            </div>
                        </div>
                    </div>

                    {/* Header Section */}
                    <div className="text-center space-y-4 mb-10">
                        <div className="font-display text-accent text-[10px] tracking-[0.3em] uppercase">
                            Volume I — Portfolio
                        </div>
                        <h1 className="text-5xl sm:text-7xl">Justin Moran</h1>
                        <div className="ornate-divider" />
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8">
                        <div className="flex flex-col sm:flex-row gap-8 items-start">
                            <div className="relative group shrink-0 mx-auto sm:mx-0">
                                <div className="w-32 h-32 arch-top overflow-hidden border-2 border-accent/30 bg-muted">
                                    <img
                                        src="/avatar.png"
                                        alt="Justin Moran"
                                        className="w-full h-full object-cover sepia-image"
                                    />
                                </div>
                                <div className="absolute -inset-1 border border-accent/10 arch-top pointer-events-none" />
                            </div>

                            <div className="space-y-4">
                                <p className="drop-cap text-lg text-muted-foreground leading-relaxed">
                                    Senior in Computer Science at Iowa State University. Specialized in building robust,
                                    scalable applications and exploring the frontiers of modern software engineering.
                                    Currently focusing on advanced agentic systems and elegant user experiences.
                                </p>
                                <div className="flex items-center gap-2 text-accent font-display text-[10px] tracking-widest uppercase">
                                    <School size={14} strokeWidth={1.5} />
                                    <span>Iowa State University</span>
                                </div>
                            </div>
                        </div>

                        {/* Download Action */}
                        <div className="flex flex-col items-center pt-8">
                            <div className="font-display text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-4">
                                Proclamation of Credentials
                            </div>
                            <button
                                onClick={handleDownload}
                                className="btn-brass group"
                            >
                                <FileDown size={14} className="mr-3 group-hover:scale-110 transition-transform" />
                                Download Resume
                            </button>
                            <div className="mt-8 text-[10px] font-display text-muted-foreground/30 uppercase tracking-[0.3em]">
                                MDCCCXCVIII
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative corner flourishes for the viewport (Optional signature touch) */}
                <div className="hidden lg:block">
                    <div className="fixed top-8 left-8 w-24 h-24 border-t-2 border-l-2 border-accent/20 pointer-events-none" />
                    <div className="fixed bottom-8 right-8 w-24 h-24 border-b-2 border-r-2 border-accent/20 pointer-events-none" />
                </div>
            </main>
        </>
    );
}

export default App;
