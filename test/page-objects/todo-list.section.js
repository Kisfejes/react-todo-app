class TodoListSection {
  get todoInput() {
    return $('//*[@id="root"]/div/div/div/div/div/header/input');
  }

  get todoItems() {
    return $$('//*[@id="root"]/div/div/div/div/div/ul/li/div/label');
  }

  get addTodoBtn() {
    return $('//*[@id="root"]/div/div/div/div/div/footer/div[1]/div/a[1]');
  }

  get searchTodoBtn() {
    return $('//*[@id="root"]/div/div/div/div/div/footer/div[1]/div/a[2]');
  }

  get leftoverTodoText() {
    return $('//*[@id="root"]/div/div/div/div/div/footer/div[2]');
  }

  get showAllBtn() {
    return $('//*[@id="root"]/div/div/div/div/div/footer/div[3]/ul/li[1]/a');
  }

  get showActiveBtn() {
    return $('//*[@id="root"]/div/div/div/div/div/footer/div[3]/ul/li[2]/a');
  }

  get showCompletedBtn() {
    return $('//*[@id="root"]/div/div/div/div/div/footer/div[3]/ul/li[3]/a');
  }
}

module.exports = new TodoListSection();
