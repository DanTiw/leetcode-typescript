function isValidSudoku(board: string[][]): boolean {
    const seen = new Set<string>();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = board[i][j];
            if (num === '.') {
                continue;
            }
            const row = `row ${i} has number ${num}`;
            const col = `col ${j} has number ${num}`;
            const box = `box ${Math.floor(i / 3)}-${Math.floor(j / 3)} has number ${num}`;
            if (seen.has(row) || seen.has(col) || seen.has(box)) {
                return false;
            }
            seen.add(row);
            seen.add(col);
            seen.add(box);
        }
    }
    return true;
};