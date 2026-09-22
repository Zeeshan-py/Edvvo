export function revisionSession(minutes: number) {
  if (!Number.isFinite(minutes) || minutes < 15 || minutes > 180) return null;
  const total = Math.round(minutes);
  const recall = Math.round(total * 0.2);
  const practice = Math.round(total * 0.6);
  return { total, recall, practice, review: total - recall - practice };
}
