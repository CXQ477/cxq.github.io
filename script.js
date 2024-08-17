document.addEventListener('DOMContentLoaded', () => {
    const maze = document.getElementById('maze');
    const mazeData = [
        [0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
        [0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
        [0, 1, 0, 1, 0, 0, 0, 1, 1, 1],
        [0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 1, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 1, 0]
    ];

    const start = { row: 0, col: 0 };
    const end = { row: 9, col: 9 };

    function createMaze() {
        for (let row = 0; row < mazeData.length; row++) {
            for (let col = 0; col < mazeData[row].length; col++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                if (mazeData[row][col] === 1) {
                    cell.classList.add('wall');
                } else if (row === start.row && col === start.col) {
                    cell.classList.add('start');
                } else if (row === end.row && col === end.col) {
                    cell.classList.add('end');
                }
                maze.appendChild(cell);
            }
        }
    }

    createMaze();

    let currentPosition = { ...start };

    document.addEventListener('keydown', (event) => {
        const { row, col } = currentPosition;
        let newRow = row, newCol = col;

        switch (event.key) {
            case 'ArrowUp':
                newRow -= 1;
                break;
            case 'ArrowDown':
                newRow += 1;
                break;
            case 'ArrowLeft':
                newCol -= 1;
                break;
            case 'ArrowRight':
                newCol += 1;
                break;
        }

        if (newRow >= 0 && newRow < mazeData.length && newCol >= 0 && newCol < mazeData[0].length) {
            if (mazeData[newRow][newCol] === 0) {
                const currentCell = maze.children[row * mazeData[0].length + col];
                const newCell = maze.children[newRow * mazeData[0].length + newCol];

                currentCell.classList.remove('path');
                newCell.classList.add('path');

                currentPosition = { row: newRow, col: newCol };

                if (newRow === end.row && newCol === end.col) {
                    alert('恭喜你，成功走出迷宫！');
                }
            }
        }
    });
});
