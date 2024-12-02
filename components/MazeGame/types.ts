export interface Position {
  x: number;
  y: number;
}

export interface Command {
  type: 'up' | 'down' | 'left' | 'right';
  icon: string;
}
