function equalPairs(grid: number[][]): number {
    const n: number = grid.length;
    const rowMap: Map<string, number> = new Map();
    let count: number = 0;

    // Step 1: Count occurrences of each row
    for (const row of grid) {
        const rowString: string = row.join(',');
        rowMap.set(rowString, (rowMap.get(rowString) || 0) + 1);
    }

    // Step 2: Check columns and compare with rows
    for (let col = 0; col < n; col++) {
        const column: number[] = [];

        // Extract the column
        for (let row = 0; row < n; row++) {
            column.push(grid[row][col]);
        }

        // Convert column to string and check if it exists in rowMap
        const columnString: string = column.join(',');
        if (rowMap.has(columnString)) {
            count += rowMap.get(columnString)!;
        }
    }

    return count;
}