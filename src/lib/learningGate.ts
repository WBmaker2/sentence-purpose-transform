export function canProceedAfterCheck(
  factsPreserved: boolean,
  purposeFits: boolean,
  audienceFits = true
): boolean {
  return factsPreserved && purposeFits && audienceFits;
}
