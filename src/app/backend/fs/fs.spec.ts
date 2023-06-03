import { readFile, getFileList } from './fs'
// import  mock  from 'mock-fs';
const mock = require('mock-fs');
describe('data module', () => {
  beforeEach(() => {
    // mock.restore();
    mock({ 
      'somefile.txt': 'foobar',
      'tmp': {
        'file.txt': 'xx',
        'file.json': '{ "xxx": 2}',
        'invalidKey.json': `{ xxx: 2, "yyy": "foobar", bla: "blubber", holsten: { "bla": "kosten"}}`,
      },
      });
  });
  afterEach(() => {
    mock.restore();
    jest.clearAllMocks();
    // readline.cursorTo(process.stdout, 0);
  });
  test('readFile()', () => {
    expect(readFile('tmp/file.txt')).toEqual('xx');
    expect(readFile('tmp/file.json')).toEqual('{ "xxx": 2}');
  });
  test('readFile()', () => {
    expect(getFileList('tmp/')).toEqual(['file.json', 'file.txt', 'invalidKey.json']);
    expect(getFileList('/')).toEqual(['home', 'tmp']);
  });
});