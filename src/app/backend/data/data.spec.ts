import { ITEMS } from '../types/index.d';
import { CATEGORY } from './../config';
import {getProjects} from './data';
const SAMPLE_DATA: ITEMS = {
  'item': {
    'name': 'Can I Use',
    'desc': 'Quickly look up browser support for modern web technologies',
    'url': 'https://caniuse.com',
    'tags': [ 'CSS', 'HTML', 'JavaScript' ],
    'maintainers': [ 'Fyrd' ],
    'addedAt': '2020-01-29'
  }
}
// import  mock  from 'mock-fs';
const mock = require('mock-fs');
describe('data module', () => {
  beforeEach(() => {
    // TODO: create files from Object
    mock({ 
      'data': {
        'test': {
          'item.json': `${JSON.stringify(SAMPLE_DATA['item'])}`
        }
      },
      });
  });
  afterEach(() => {
    mock.restore();
    jest.clearAllMocks();
    // readline.cursorTo(process.stdout, 0);
  });
  test('get Data from file', () => {
    const data = getProjects(CATEGORY);
    const result = {
      'item': {
        ...SAMPLE_DATA['item'],
        slug: 'item'
      }
    }
    expect(data).toEqual(result);
  });
});