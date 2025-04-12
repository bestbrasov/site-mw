const Footer: React.FC = () => {
    return (
        <section id="drive-link" className="bg-gray-900 text-white px-6 py-20">
            <div className="max-w-6xl mx-auto text-center">
                <div className="justify-center gap-6 mb-4">
                    <p className="text-lg text-white/70 mb-4">
                        Very important links (the IT guys):
                    </p>
                    <div className="flex justify-center gap-6 mb-4">
                        <a href="https://www.instagram.com/andreibolba/" target="_blank" rel="noopener noreferrer"
                           className="hover:text-pink-400">
                            Bobi
                        </a>
                        <a href="https://www.instagram.com/vladdpaunescu/" target="_blank" rel="noopener noreferrer"
                           className="hover:text-pink-400">
                            Mishu
                        </a>
                        <a href="https://www.instagram.com/munteanr20/" target="_blank" rel="noopener noreferrer"
                           className="hover:text-pink-400">
                            Muntean
                        </a>
                        <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer"
                           className="hover:text-pink-400">
                            ChatGPT
                        </a>
                    </div>
                </div>
                <div className="justify-center gap-6 mb-4">
                    <p className="text-lg text-white/70 mb-4">
                        BEST Brasov social links
                    </p>
                    <div className="flex justify-center gap-6 mb-4">
                        <a href="https://www.facebook.com/BESTBrasov" target="_blank" rel="noopener noreferrer"
                           className="hover:text-pink-400">
                            Facebook
                        </a>
                        <a href="https://www.instagram.com/bestbrasov/" target="_blank" rel="noopener noreferrer"
                           className="hover:text-pink-400">
                            Instagram
                        </a>
                        <a href="https://www.youtube.com/@bestbrasov" target="_blank" rel="noopener noreferrer"
                           className="hover:text-pink-400">
                            Youtube
                        </a>
                        <a href="https://www.tiktok.com/@bestbrasov?lang=en" target="_blank" rel="noopener noreferrer"
                           className="hover:text-pink-400">
                            TikTok
                        </a>
                    </div>
                </div>
                <p className="text-2xl text-white/70">
                    © 2025 Motivational Weekend. All Rights Reserved by Bobi and ChatGPT.
                </p>
            </div>
        </section>
    )
}

export default Footer