const markerx = [
    'X', 'X', 'X', null,
    null, null, null, null,
    null, null, null, null,
    null, null, null, null,
  ];
  
  const markero = [
    'O', 'O', 'O', null,
    null, null, null, null,
    null, null, null, null,
    null, null, null, null,
  ];
  
  const calculateWinner = (squares) => {
    const lines = [
      [0,1,2],
    ];
    for(let i = 0; i < lines.length; i++){
      const [a,b,c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
  }
  
  describe('X is a winner (4x4)', () => {
    test('if X is marked in line', () => {
      const winner = calculateWinner(markerx)
      expect(winner).toBe('X');
    })
  })
  
  describe('O is a winner (4x4)', () => {
    test('if O is marked in line', () => {
      const winner = calculateWinner(markero)
      expect(winner).toBe('O');
    })
  })