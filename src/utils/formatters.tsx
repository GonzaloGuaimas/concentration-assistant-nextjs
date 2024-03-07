export function formatPercentage(value: number): string {
  const roundedValue = Math.round(value * 100) / 100;
  const formattedValue = roundedValue.toFixed(2);
  return `${formattedValue}%`;
}
