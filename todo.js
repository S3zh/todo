ko.components.register('todo', {
    viewModel: function (params) {
        this.name = params.name;
        this.check = ko.observable(false);
    },
   template:
        '<p class="todo" data-bind="text: name, css: { line : check }"></p>' +
        '<input type="checkbox" data-bind="checked: check">'
});

function Todo(name) {
    this.name = name;
}

function MyViewModel() {
    var self = this;
    this.inputTodo = ko.observable();
    this.todos = ko.observableArray([
        new Todo('Помыть посуду'),
        new Todo('Помыть пол')
    ]);

    this.removeTodo = function() {
        self.todos.remove(this);
    };

    this.createTodo = function() {
        this.todos.push(new Todo(this.inputTodo()));
        this.inputTodo('');
    };
}

ko.applyBindings(new MyViewModel());