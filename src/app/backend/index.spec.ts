import {main} from "./index";

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(main()).toBe('hello worldXY');
  });
});