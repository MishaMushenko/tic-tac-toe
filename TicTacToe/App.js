import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Mobal, Button } from 'rect-native';

export default function App() {
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);
  const [currentPlaer, setCurrentPlaer] =useState('X');
  const [winner, setWinner] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
}
const handlePress = (row, col) => {
  if (board[row][col] !==''|| winner) return;
  const newBoard = board.map((r,i) =>
   r.map((cell,j) => {
    if (i === row && j === col) return currentPlayr;
   })
  );
  setboard(newBard);
  const win = checkWinner(newBoard);
  if(win) {
    setWinner(currentPlayer);
    setModalVisible(true);
  } else {
    setCurrentPlayer(currentPlaeyr === 'X' ? 'O':'X');
  }
};