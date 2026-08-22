export function canCompleteMission5(
  bestPick: number | null,
  bestReason: string
): boolean {
  return bestPick !== null && bestReason.trim().length > 0;
}
