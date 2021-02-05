type Todos = {
  id: string;
  title: string;
  body: string;
};

export const getAllTodos = (req, res): Todos[] => {
  const todos: Todos[] = [
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
