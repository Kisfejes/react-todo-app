const todoListSection = require('../../page-objects/todo-list.section');
const chai = require('chai');

describe('Add or remove elements', () => {
  before(() => {
    browser.url('/');
  });

  it('Added todo item should appear in todo list', () => {
    const originalTodoItemLength = todoListSection.todoItems.length;

    todoListSection.todoInput.setValue('new todo item');
    // Press enter
    todoListSection.todoInput.keys('\uE007');
    // todoListSection.todoInput.setValue('\n');
    //
    const newTodoItemLength = todoListSection.todoItems.length;
    chai
      .expect(newTodoItemLength, 'New item appears in the todo list')
      .to.be.equal(originalTodoItemLength + 1);
    browser.pause(5000);
  });

  it('Add hotkey should work', () => {
    // Set default state
    browser.keys('\uE00C');
    // Use N hotkey
    browser.keys('N');

    const textInputVisible = todoListSection.todoInput.isDisplayed();
    chai
      .expect(textInputVisible, 'Add todo item text input is visible')
      .to.be.equal(true);
    browser.pause(5000);
  });
});
