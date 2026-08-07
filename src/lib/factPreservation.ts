import type { FactCase } from '../data/types';
import type { SentencePiece } from '../data/types';

// 사양 10.1 사실 보존 판정 — 필수 사실 조각이 하나라도 빠지면 점검 단계에서 안내

// 학생이 선택한 사실 ID 중, 필수(required) 사실만 반환
export function preservedRequiredFacts(
  selectedFactIds: string[],
  factCase: FactCase
): string[] {
  return factCase.factUnits
    .filter((unit) => unit.required && selectedFactIds.includes(unit.id))
    .map((unit) => unit.id);
}

// 조립된 조각에 연결된 사실 ID들을 수집 (한 조각이 여러 사실을 포함할 수 있음)
export function collectLinkedFactIds(pieces: SentencePiece[]): string[] {
  return pieces.flatMap((p) => p.linkedFactIds ?? []);
}

// 빠진 필수 사실 ID 목록 반환
export function findMissingRequiredFacts(
  usedPieces: SentencePiece[],
  factCase: FactCase
): string[] {
  const used = collectLinkedFactIds(usedPieces);
  return factCase.factUnits
    .filter((unit) => unit.required && !used.includes(unit.id))
    .map((unit) => unit.id);
}

// 사실 추가 조각(원래 사실에 없는 새 정보)이 포함되었는가 — 사양 10.1, 17.1
export function hasAddedFact(pieces: SentencePiece[]): boolean {
  return pieces.some((p) => p.isNewFact);
}

// 과장 표현이 포함되었는가 — 사양 10.1, 22절
export function hasExaggeration(pieces: SentencePiece[]): boolean {
  return pieces.some((p) => p.isExaggeration);
}

// 사실 보존 점검 종합 결과
export type PreservationResult = {
  missingRequired: string[]; // 빠진 필수 사실 ID
  addedFact: boolean; // 새 사실 추가
  exaggeration: boolean; // 과장
  allPreserved: boolean; // 필수 사실 전부 보존 & 추가/과장 없음
};

export function checkPreservation(
  usedPieces: SentencePiece[],
  factCase: FactCase
): PreservationResult {
  const missingRequired = findMissingRequiredFacts(usedPieces, factCase);
  const addedFact = hasAddedFact(usedPieces);
  const exaggeration = hasExaggeration(usedPieces);
  return {
    missingRequired,
    addedFact,
    exaggeration,
    allPreserved: missingRequired.length === 0 && !addedFact && !exaggeration,
  };
}
