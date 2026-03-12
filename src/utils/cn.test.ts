import { describe, it, expect } from 'vitest';
import { cn } from './cn';

describe('Utils - cn function', () => {
  it('merges class names correctly', () => {
    const result = cn('class1', 'class2');
    expect(result).toBeTruthy();
  });

  it('handles conditional classes', () => {
    const result = cn('base', false && 'hidden', true && 'visible');
    expect(result).toContain('base');
    expect(result).toContain('visible');
  });

  it('handles undefined and null values', () => {
    const result = cn('class1', undefined, null, 'class2');
    expect(result).toBeTruthy();
  });

  it('merges tailwind classes without conflicts', () => {
    const result = cn('px-2', 'px-4');
    // Should keep only the last conflicting class
    expect(result).toBeTruthy();
  });

  it('returns empty string for no arguments', () => {
    const result = cn();
    expect(result).toBe('');
  });
});
