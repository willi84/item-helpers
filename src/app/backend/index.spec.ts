import { main } from './main/main';
const mock = require('mock-fs');

describe('main()', () => {
  beforeEach(() => {
    // TODO: create files from Object
    mock({ 
      'data': {
        'test': {}
      },
      });
  });
  afterEach(() => {
    mock.restore();
    jest.clearAllMocks();
  });
  it('run main()', () => {
    const result = main();
    expect(result).toEqual('success');
  });

});