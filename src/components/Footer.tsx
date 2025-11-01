const Footer: React.FC = () => {
    return (
        <section id="footer" className="bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f0f1e] text-white px-6 py-20">
            <div className="max-w-6xl mx-auto text-center">
                <div className="mb-12">
                    <p className="text-lg text-[#4ecdc4]/80 mb-6 font-semibold" style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.5)' }}>
                        Very important links (the IT guys):
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 mb-4">
                        <a 
                            href="https://www.instagram.com/andreibolba/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-[#4ecdc4] transition-colors text-white/90 font-medium"
                            style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.3)' }}
                        >
                            Bobi
                        </a>
                        <span className="text-[#4ecdc4]/50">•</span>
                        <a 
                            href="https://www.instagram.com/vladdpaunescu/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-[#4ecdc4] transition-colors text-white/90 font-medium"
                            style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.3)' }}
                        >
                            Mishu
                        </a>
                        <span className="text-[#4ecdc4]/50">•</span>
                        <a 
                            href="https://www.instagram.com/munteanr20/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-[#4ecdc4] transition-colors text-white/90 font-medium"
                            style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.3)' }}
                        >
                            Muntean
                        </a>
                        <span className="text-[#4ecdc4]/50">•</span>
                        <a 
                            href="https://www.instagram.com/ioana_felly/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-[#4ecdc4] transition-colors text-white/90 font-medium"
                            style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.3)' }}
                        >
                            Roackeru
                        </a>
                        <span className="text-[#4ecdc4]/50">•</span>
                        <a 
                            href="https://chatgpt.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-[#4ecdc4] transition-colors text-white/90 font-medium"
                            style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.3)' }}
                        >
                            ChatGBT
                        </a>
                    </div>
                </div>

                <div className="mb-12 pb-8 border-b-2 border-[#4ecdc4]/20">
                    <p className="text-lg text-[#4ecdc4]/80 mb-6 font-semibold" style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.5)' }}>
                        BEST Brasov social links
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 mb-4">
                        <a 
                            href="https://www.facebook.com/BESTBrasov" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-[#4ecdc4] transition-colors text-white/90 font-medium"
                            style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.3)' }}
                        >
                            Facebook
                        </a>
                        <span className="text-[#4ecdc4]/50">•</span>
                        <a 
                            href="https://www.instagram.com/bestbrasov/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-[#4ecdc4] transition-colors text-white/90 font-medium"
                            style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.3)' }}
                        >
                            Instagram
                        </a>
                        <span className="text-[#4ecdc4]/50">•</span>
                        <a 
                            href="https://www.youtube.com/@bestbrasov" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-[#4ecdc4] transition-colors text-white/90 font-medium"
                            style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.3)' }}
                        >
                            Youtube
                        </a>
                        <span className="text-[#4ecdc4]/50">•</span>
                        <a 
                            href="https://www.tiktok.com/@bestbrasov?lang=en" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-[#4ecdc4] transition-colors text-white/90 font-medium"
                            style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.3)' }}
                        >
                            TikTok
                        </a>
                    </div>
                </div>

                <p className="text-sm text-white/60" style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.5)' }}>
                    © 2025 Motivational Weekend. All Rights Reserved by <span className="text-[#4ecdc4]">Bobi</span> and <span className="text-[#4ecdc4]">ChatGPT</span>.
                </p>
            </div>
        </section>
    );
}

export default Footer;