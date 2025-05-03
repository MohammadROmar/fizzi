const ANGLE = 75 * (Math.PI / 180);

export function getXPosition(distance: number) {
  return distance * Math.cos(ANGLE);
}

export function getYPosition(distance: number) {
  return distance * Math.sin(ANGLE);
}

export function getXYPositions(distance: number) {
  return { x: getXPosition(distance), y: getYPosition(-distance) };
}
