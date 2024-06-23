import React, { useState } from 'react';
import {View, Text, TouchableOpcaty, StyleSheet } from 'react-native';

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setlsXNext] = useState(true);
  const handlePress = (index) => {
    const newBoard = board.slice();
    if(calculateWinner(board) || board[index]) {
      return;
    }
    newBoard[index] = isXNext ? 'X' : 'O';
    setlsXNext(!isXNext);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
