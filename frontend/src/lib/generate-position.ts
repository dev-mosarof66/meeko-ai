export const generatePositions = (count: number = 10) => {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.floor(Math.random() * 100), 
        size: Math.floor(Math.random() * 16) + 16,
        duration: Math.floor(Math.random() * 6) + 6, 
        delay: Math.random() * 5, 
    }));
};
