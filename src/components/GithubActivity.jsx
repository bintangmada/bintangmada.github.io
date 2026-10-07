import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { useThemeObserver } from '../hooks/useTheme';

const GithubActivity = ({ username = "bintangmada", ui }) => {
    const isDark = useThemeObserver();

    return (
        <div className="flex flex-col mt-16 pt-12 border-t border-border-light dark:border-border-dark">
            <h3 className="text-2xl font-bold mb-8 text-center md:text-left">
                {ui?.githubActivity || "GitHub Contributions"}
            </h3>
            <div className="bg-card-light dark:bg-card-dark rounded-3xl p-6 md:p-8 border border-border-light dark:border-border-dark w-full overflow-x-auto flex md:justify-center items-center shadow-sm hover:shadow-md transition-shadow">
                <div className="min-w-max">
                    <GitHubCalendar 
                        username={username} 
                        colorScheme={isDark ? "dark" : "light"}
                        fontSize={14}
                        blockSize={12}
                        blockMargin={4}
                    />
                </div>
            </div>
        </div>
    );
};

export default GithubActivity;
