import { describe, it, expect } from 'vitest';

describe('example test', () => {
  it('should work', () => {
    expect(true).toBe(true);
  });
});

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});
