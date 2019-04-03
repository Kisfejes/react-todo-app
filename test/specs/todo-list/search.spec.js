const todoListSection = require('../../page-objects/todo-list.section');
const chai = require('chai');

describe('Search in todo list', () => {
  before(() => {
    browser.url('/');
  });

  it.skip('Searching in list shows results', () => {
    // TODO: write test
  });

  it.skip('Searching in list when searched text is not existing shows message', () => {
    // TODO: write test
  });
});
