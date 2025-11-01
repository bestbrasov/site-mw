const DriveLink: React.FC = () => {
    return (
        <section id="drive-link" className="bg-gradient-to-b from-[#1a4d5e] via-[#2d6b7a] to-[#1a4d5e] text-white px-6 py-20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-[#f4e6d0] mb-12 uppercase tracking-wide" style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.7)' }}>
                    Event Photos & Files
                </h2>
                 <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-[#d97c4a] hover:bg-[#f4e6d0] hover:text-[#1a4d5e] rounded-full text-white font-semibold transition shadow-lg border-2 border-[#f4e6d0]/30"
                    style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.3)' }}
            >
                Access Google Drive Folder
            </a>
        </div>
    </section>)
}

export default DriveLink;
