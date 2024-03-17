export function formatPercentage(value: number): string {
  const roundedValue = Math.round(value * 100) / 100;
  const formattedValue = roundedValue.toFixed(2);
  return `${formattedValue}%`;
}

export function formatTime(time: any) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${padZero(minutes)}:${padZero(seconds)}`;
}

export function padZero(num: any) {
  return num < 10 ? `0${num}` : num;
}
