const LatestNotes = () => {
    const notes = [
        {
            title: "Understanding JWT in Spring Boot",
            date: "Oct 6, 2026"
        },
        {
            title: "Redis Streams for Notification System",
            date: "Sep 28, 2026"
        },
        {
            title: "Deploying Spring Boot with Docker",
            date: "Sep 20, 2026"
        }
    ];

    return (
        <section className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold mb-2">Latest Notes</h2>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                        Some things I've learned and written about.
                    </p>
                </div>
                <a href="#" className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:text-text-main-light dark:hover:text-text-main-dark flex items-center gap-1 transition-colors">
                    View all &rarr;
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {notes.map((note, index) => (
                    <a key={index} href="#" className="glass-card p-6 rounded-2xl flex flex-col justify-between h-40 hover:-translate-y-1 transition-transform duration-300">
                        <h3 className="font-bold leading-snug">{note.title}</h3>
                        <span className="text-xs text-text-muted-light dark:text-text-muted-dark mt-4">
                            {note.date}
                        </span>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default LatestNotes;
