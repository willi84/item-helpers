import { sample } from "./index";

describe('sample module', () => {
  test('sample()', () => {
    expect(sample()).toEqual(3);
  });
});