"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTodos = void 0;
exports.getAllTodos = (req, res) => {
    const todos = [
        {
            id: '1',
            title: 'greeting',
            body: 'Hello world from sharvin shah',
        },
        {
            id: '2',
            title: 'greeting2',
            body: 'Hello2 world2 from sharvin shah',
        },
    ];
    return res.json(todos);
};
//# sourceMappingURL=todos.js.map