import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useGameState(gameId: string) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    loadScore();
  }, []);

  const loadScore = async () => {
    try {
      const savedScore = await AsyncStorage.getItem(`@game_score_${gameId}`);
      if (savedScore) setScore(parseInt(savedScore, 10));
    } catch (error) {
      console.error('Erreur lors du chargement du score:', error);
    }
  };

  const updateScore = async (newScore: number) => {
    try {
      await AsyncStorage.setItem(`@game_score_${gameId}`, newScore.toString());
      setScore(newScore);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde du score:', error);
    }
  };

  return { score, updateScore };
}
