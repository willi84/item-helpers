import {main} from './main';
const mock = require('mock-fs');

describe('main module', () => {
  beforeEach(() => {
    // TODO: create files from Object
    mock({ 
      'data': {
        'test': {
            'foo.json': '{}'
        }
      },
      });
  });
  afterEach(() => {
    mock.restore();
    jest.clearAllMocks();
  });
  test('main()', () => {
    expect(main()).toBe('success');
  });
});