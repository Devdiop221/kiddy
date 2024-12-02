import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useGameState } from '~/hooks/useGameState';
import { MazeGrid } from '~/components/MazeGame/MazeGrid';
import { CommandPalette } from '~/components/MazeGame/CommandPalette';
import { CommandQueue } from '~/components/MazeGame/CommandQueue';
import { Position, Command } from '~/components/MazeGame/types';

const GRID_SIZE = 5;
const COMMANDS: Command[] = [
  { type: 'up', icon: '⬆️' },
  { type: 'right', icon: '➡️' },
  { type: 'down', icon: '⬇️' },
  { type: 'left', icon: '⬅️' },
];

export default function MazeGame() {
  const { score, updateScore } = useGameState('maze');
  const [playerPosition, setPlayerPosition] = useState<Position>({ x: 0, y: 4 });
  const [goalPosition] = useState<Position>({ x: 4, y: 0 });
  const [commands, setCommands] = useState<Command[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const addCommand = (command: Command) => {
    if (!isRunning) {
      setCommands([...commands, command]);
    }
  };

  const runCommands = async () => {
    setIsRunning(true);
    let currentPosition = { ...playerPosition };

    for (const command of commands) {
      await new Promise((resolve) => setTimeout(resolve, 500));

      switch (command.type) {
        case 'up':
          if (currentPosition.y > 0) {
            currentPosition.y--;
          }
          break;
        case 'down':
          if (currentPosition.y < GRID_SIZE - 1) {
            currentPosition.y++;
          }
          break;
        case 'left':
          if (currentPosition.x > 0) {
            currentPosition.x--;
          }
          break;
        case 'right':
          if (currentPosition.x < GRID_SIZE - 1) {
            currentPosition.x++;
          }
          break;
      }

      setPlayerPosition({ ...currentPosition });
    }

    if (currentPosition.x === goalPosition.x && currentPosition.y === goalPosition.y) {
      await updateScore(score + 1);
    }

    setIsRunning(false);
  };

  const resetGame = () => {
    if (!isRunning) {
      setPlayerPosition({ x: 0, y: 4 });
      setCommands([]);
    }
  };

  return (

    <View className="flex-1 bg-indigo-50 p-4">
      {/*<View className="flex-1 items-center justify-center bg-indigo-50">*/}
      {/*  <Text className="text-2xl font-bold text-indigo-600">Bienvenue au Labyrinthe du Code!</Text>*/}
      {/*</View>*/}
      <Text className="mb-4 text-center text-2xl text-indigo-600">Score: {score}</Text>

      <MazeGrid playerPosition={playerPosition} goalPosition={goalPosition} size={GRID_SIZE} />

      <CommandQueue commands={commands} />

      <CommandPalette commands={COMMANDS} onAddCommand={addCommand} />

      <View className="mt-4 flex-row justify-center gap-4">
        <Pressable
          className="flex-1 rounded-xl bg-green-500 p-4"
          onPress={runCommands}
          disabled={isRunning || commands.length === 0}>
          <Text className="text-center text-lg text-white">Lancer</Text>
        </Pressable>

        <Pressable
          className="flex-1 rounded-xl bg-red-500 p-4"
          onPress={resetGame}
          disabled={isRunning}>
          <Text className="text-center text-lg text-white">Réinitialiser</Text>
        </Pressable>
      </View>
    </View>
  );
}
