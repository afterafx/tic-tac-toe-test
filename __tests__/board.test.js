const { prettifyRow, prettifyBoard, generateStartingBoard, updateBoard } = require('../lib/board');

describe('prettifyRow', () => {
  it('should take in a string array and return a string', () => {
    const stringArray = ['X', 'O', 'X'];
    const result = prettifyRow(stringArray);

    expect(result).toBe(' X | O | X ');
  });

  it('should take in an empty string array and return an empty string', () => {
    const stringArray = [''];
    const result = prettifyRow(stringArray);

    expect(result).toBe('  ');
  });

  it('should throw an error on empty strings ', () => {
    expect(() => {
      prettifyRow('').toThrow(TypeError);
    });
  });
});

describe('prettifyBoard', () => {
  it('should take an a 2D string array and return an a single string', () => {
    const stringArray = [['X', 'O', 'X'], ['O', 'X', 'O']];
    const result = prettifyBoard(stringArray);
    console.log(result);

    expect(result).toBe(` X | O | X \n---|---|---\n O | X | O `);
  });

  it('should take in a 2D string array, else throw an error ', () => {
    expect(() => {
      prettifyBoard('').toThrow(TypeError);
    });
  });
});

describe('generateStartingBoard', () => {
  it('should produce a 3 x 3 board when passed undefined', () => {
    const result = generateStartingBoard(undefined);
    console.log(result);
    expect(result).toStrictEqual([[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]);
  });

  it('should produce a 3 x 3 board with no parameters', () => {
    const result = generateStartingBoard();
    expect(result).toStrictEqual([[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]);
  });

  it('should produce the defined board when passed any number', () => {
    const result = generateStartingBoard(2);
    console.log(result);
    expect(result).toStrictEqual([[' ', ' '], [' ', ' ']]);
  });
});

describe('updateBoard', () => {
  it('should update the board with the given parameters', () => {
    const board = [['X', 'O', 'X'], ['X', 'O', 'O']];
    const position = [1, 2];
    const player = 'Player1';
    const result = updateBoard(board, position, player);
    expect(result[1][2]).toBe(player);
  });
});
