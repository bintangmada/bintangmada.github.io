import { useState, useEffect } from 'react';

export const useLanguage = () => {
    const [lang, setLang] = useState(() => {
        return localStorage.getItem('lang') || 'id';
    });

    useEffect(() => {
        localStorage.setItem('lang', lang);
    }, [lang]);

    return { lang, setLang };
};
