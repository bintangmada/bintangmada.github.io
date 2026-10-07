export const calculateDuration = (durationString, lang) => {
    if (!durationString) return "";
    const parts = durationString.split(" - ");
    if (parts.length !== 2) return "";
    
    const parseDate = (dateStr) => {
        if (dateStr.toLowerCase().includes("present") || dateStr.toLowerCase().includes("sekarang")) {
            return new Date();
        }
        
        const [month, year] = dateStr.split(" ");
        const months = {
            "jan": 0, "feb": 1, "mar": 2, "apr": 3, "may": 4, "mei": 4, "jun": 5, "juni": 5,
            "jul": 6, "juli": 6, "aug": 7, "agt": 7, "agustus": 7, "sep": 8, "oct": 9, "okt": 9, "nov": 10, "dec": 11, "des": 11
        };
        
        const monthIndex = months[month.toLowerCase()];
        if (monthIndex === undefined) return null;
        
        return new Date(parseInt(year), monthIndex);
    };
    
    const start = parseDate(parts[0]);
    const end = parseDate(parts[1]);
    
    if (!start || !end) return "";
    
    let totalMonths = (end.getFullYear() - start.getFullYear()) * 12;
    totalMonths -= start.getMonth();
    totalMonths += end.getMonth();
    totalMonths += 1; 
    
    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;
    
    let result = [];
    if (years > 0) {
        result.push(`${years} ${lang === 'id' ? 'thn' : 'yrs'}`);
    }
    if (remainingMonths > 0) {
        result.push(`${remainingMonths} ${lang === 'id' ? 'bln' : 'mos'}`);
    }
    
    return result.length > 0 ? result.join(" ") : "";
};
