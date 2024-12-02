import React from 'react';
import { View } from 'react-native';
import { Position } from '~/components/MazeGame/types';

interface Props {
  playerPosition: Position;
  goalPosition: Position;
  size: number;
}

export function MazeGrid({ playerPosition, goalPosition, size }: Props) {
  const grid = Array(size).fill(Array(size).fill(null));

  return (
    <View className="aspect-square w-full max-w-sm">
      {grid.map((row, y) => (
        <View key={y} className="flex-row">
          {row.map((_: any, x: number) => (
            <View
              key={`${x}-${y}`}
              className={`aspect-square flex-1 items-center justify-center border border-indigo-200 ${
                x === playerPosition.x && y === playerPosition.y
                  ? 'bg-indigo-500'
                  : x === goalPosition.x && y === goalPosition.y
                    ? 'bg-green-500'
                    : 'bg-white'
              }`}
            />
          ))}
        </View>
      ))}
    </View>
  );
}
