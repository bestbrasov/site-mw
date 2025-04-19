const DriveLink: React.FC = () => {
    return (<section id="drive-link" className="bg-gray-950 text-white px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-pink-400 mb-12 uppercase tracking-wide">Event Photos & Files</h2>
            <a
                href="https://drive.google.com/drive/folders/16Vi7duDFYZzGu-1PSCBNwnqg72vplbTr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-full text-white font-semibold transition"
            >
                Access Google Drive Folder
            </a>
        </div>
    </section>)
}

export default DriveLink;
