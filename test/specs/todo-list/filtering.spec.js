const todoListSection = require('../../page-objects/todo-list.section');
const chai = require('chai');

describe('Filtering todo items based on their state', () => {
  before(() => {
    browser.url('/');
  });

  it('Default state is to show all', () => {
    const isAllBtnSelected = todoListSection.showAllBtn
      .getAttribute('class')
      .includes('selected');

    chai
      .expect(isAllBtnSelected, 'Is show all button selected')
      .to.be.equal(isAllBtnSelected);
  });

  it('Active button shows only active todo items', () => {
    const originalTodoItemLength = todoListSection.todoItems.length;
    // Check an item
    todoListSection.todoItems[1].click();
    todoListSection.showActiveBtn.click();
    // browser.debug();

    const newTodoItemLength = todoListSection.todoItems.length;
    chai
      .expect(newTodoItemLength, 'New todo item list length')
      .to.be.equal(originalTodoItemLength - 1);
    browser.pause(5000);
  });
});
