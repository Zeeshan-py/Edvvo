import { describe, expect, it } from 'vitest';
import { revisionSession } from './revisionSession';
describe('Revision session allocation', () => {
  it('keeps the allocation equal to the requested whole-minute budget', () => {
    for (let minutes = 15; minutes <= 180; minutes++) {
      const plan = revisionSession(minutes)!;
      expect(plan.recall + plan.practice + plan.review).toBe(minutes);
      expect(Math.min(plan.recall, plan.practice, plan.review)).toBeGreaterThan(0);
    }
  });
  it('rejects invalid budgets instead of displaying negative or infinite timings', () => {
    for (const minutes of [0, -20, 14, 181, NaN, Infinity]) expect(revisionSession(minutes)).toBeNull();
  });
});
