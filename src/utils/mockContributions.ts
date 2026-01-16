export const generateMockData = () => {
    const today = new Date();
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(today.getFullYear() - 1);

    const data = [];
    let currentDate = new Date(oneYearAgo);

    while (currentDate <= today) {
        const dateStr = currentDate.toISOString().split("T")[0];

        // Simulate "busy" developer pattern (mostly weekdays, some weekends)
        const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;
        const baseChance = isWeekend ? 0.2 : 0.8; // High chance on weekdays

        // Random intensity between 0-4
        let count = 0;
        if (Math.random() < baseChance) {
            count = Math.floor(Math.random() * 10) + 1; // 1-10 commits
        }

        // Add some "heavy" contribution days
        if (Math.random() < 0.05) {
            count = Math.floor(Math.random() * 15) + 10; // 10-25 commits
        }

        // Level calculated based on count (approximate GitHub logic)
        let level = 0;
        if (count > 0) level = 1;
        if (count > 3) level = 2;
        if (count > 6) level = 3;
        if (count > 10) level = 4;

        data.push({
            date: dateStr,
            count: count,
            level: level
        });

        currentDate.setDate(currentDate.getDate() + 1);
    }

    return data;
};
