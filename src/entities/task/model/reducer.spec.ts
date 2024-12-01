import { Todo } from '@/entities/task/model/interface';
import reducer, { addTodo, toggleTodo, deleteTodo, updateTodo } from '@/entities/task/model/reducer';
jest.mock('uuid', () => ({ v4: () => todo01.id }));

// Sample DataSet
const todo00: Todo = {
  id: '0',
  title: 'test',
  description: 'this is test description',
  completed: false,
  parentTaskId: null,
  childrenTaskIds: [],
}

const todo01: Todo = {
  id: '1',
  title: 'test1',
  description: 'this is test description1',
  completed: false,
  parentTaskId: null,
  childrenTaskIds: [],
}

const todo02: Todo = {
  id: '2',
  title: 'test2',
  description: 'this is test description2',
  completed: false,
  parentTaskId: null,
  childrenTaskIds: [],
}

describe('addTodo Test', () => {
  it('Add Todo in null Todos[]', () => {
    const actual: Todo[] = []
    const expected: Todo[] = [todo01]

    expect(
      reducer(actual, {
        type: addTodo.type,
        payload: {
          title: todo01.title,
          description: todo01.description,
        },
      }),
    ).toEqual(expected)
  })

  it('Add Todo in one Todos[]', () => {
    const actual: Todo[] = [todo00]
    const expected: Todo[] = [todo00, todo01]

    expect(
      reducer(actual, {
        type: addTodo.type,
        payload: {
          title: todo01.title,
          description: todo01.description,
        },
      }),
    ).toEqual(expected)
  })
})

describe('toggleTodo Test', () => {
  it('Selected Todo is inCompleted', () => {
    const actual: Todo[] = [todo00, todo01]
    const expected: Todo[] = [todo00, { ...todo01, completed: true }]

    expect(
      reducer(actual, {
        type: toggleTodo.type,
        payload: {
          id: todo01.id,
        },
      }),
    ).toEqual(expected)
  })

  it('Selected Todo is Completed', () => {
    const actual: Todo[] = [{ ...todo00, completed: true }, todo01]
    const expected: Todo[] = [todo00, todo01]

    expect(
      reducer(actual, {
        type: toggleTodo.type,
        payload: {
          id: todo00.id,
        },
      }),
    ).toEqual(expected)
  })

  it('Selected Todo is Not Found', () => {
    const actual: Todo[] = [todo00, todo01]
    const expected: Todo[] = [todo00, todo01]

    expect(
      reducer(actual, {
        type: toggleTodo.type,
        payload: {
          id: todo02.id,
        },
      }),
    ).toEqual(expected)
  })
})

describe('deleteTodo Test', () => {
  const threeTodos: Todo[] = [todo00, todo01, todo02]

  it('Delete First Todo in Theree Todos', () => {
    const actual: Todo[] = [...threeTodos]
    const expected: Todo[] = [todo01, todo02]

    expect(
      reducer(actual, {
        type: deleteTodo.type,
        payload: {
          id: todo00.id,
        },
      }),
    ).toEqual(expected)
  })

  it('Delete Second Todo in Three Todos', () => {
    const actual: Todo[] = [...threeTodos]
    const expected: Todo[] = [todo00, todo02]

    expect(
      reducer(actual, {
        type: deleteTodo.type,
        payload: {
          id: todo01.id,
        },
      }),
    ).toEqual(expected)
  })

  it('Delete Last Todo in Three Todos', () => {
    const actual: Todo[] = [...threeTodos]
    const expected: Todo[] = [todo00, todo01]

    expect(
      reducer(actual, {
        type: deleteTodo.type,
        payload: {
          id: todo02.id,
        },
      }),
    ).toEqual(expected)
  })

  it('Delete Final Todo in Todos', () => {
    const actual: Todo[] = [todo00]
    const expected: Todo[] = []

    expect(
      reducer(actual, {
        type: deleteTodo.type,
        payload: {
          id: todo00.id,
        },
      }),
    ).toEqual(expected)
  })

  it('Delete Todo is Not Founde', () => {
    const actual: Todo[] = [todo00, todo01]
    const expected: Todo[] = [todo00, todo01]

    expect(
      reducer(actual, {
        type: deleteTodo.type,
        payload: {
          id: todo02.id,
        },
      }),
    ).toEqual(expected)
  })
})

describe('updateTodo Test', () => {
  it('Update title', () => {
    const actual = [todo00, todo01]
    const expected = [todo00, { ...todo01, title: 'update test1' }]
    expect(
      reducer(actual, {
        type: updateTodo.type,
        payload: {
          id: todo01.id,
          title: 'update test1',
        },
      }),
    ).toEqual(expected)
  })

  it('Update description', () => {
    const actual = [todo00, todo01]
    const expected = [{ ...todo00, description: 'this is update description' }, todo01]
    expect(
      reducer(actual, {
        type: updateTodo.type,
        payload: {
          id: todo00.id,
          description: 'this is update description',
        },
      }),
    ).toEqual(expected)
  })

  it('Update completed', () => {
    // completed value update via toggleTodo
    // this action is not used
  })

  it('Update parentTaskId', () => {
    const actual = [todo00, todo01]
    const expected = [{ ...todo00, parentTaskId: todo01.id }, todo01]
    expect(
      reducer(actual, {
        type: updateTodo.type,
        payload: {
          id: todo00.id,
          parentTaskId: todo01.id,
        },
      }),
    ).toEqual(expected)
  })

  it('Update childrenTaskId', () => {
    const actual = [todo00, todo01, todo02]
    const expected = [todo00, todo01, { ...todo02, childrenTaskIds: [todo00.id, todo01.id] }]
    expect(
      reducer(actual, {
        type: updateTodo.type,
        payload: {
          id: todo02.id,
          childrenTaskIds: [todo00.id, todo01.id],
        },
      }),
    ).toEqual(expected)
  })

  it('Update childrenTaskId (update [] value)', () => {
    const actual = [todo00, todo01, { ...todo02, childrenTaskIds: [todo00.id, todo01.id] }]
    const expected = [todo00, todo01, todo02]
    expect(
      reducer(actual, {
        type: updateTodo.type,
        payload: {
          id: todo02.id,
          childrenTaskIds: [],
        },
      }),
    ).toEqual(expected)
  })

  it('Update AllValue', () => {
    const actual = [todo00, todo01, todo02]
    const expected = [
      todo00,
      todo01,
      {
        ...todo02,
        title: 'update test2',
        description: 'this is update description2',
        parentTaskId: todo00.id,
        childrenTaskIds: [todo01.id],
      },
    ]
    expect(
      reducer(actual, {
        type: updateTodo.type,
        payload: {
          id: todo02.id,
          title: 'update test2',
          description: 'this is update description2',
          parentTaskId: todo00.id,
          childrenTaskIds: [todo01.id],
        },
      }),
    ).toEqual(expected)
  })

  it('Update null value', () => {
    const actual = [
      todo00,
      todo01,
      { ...todo02, parentTaskId: todo00.id, childrenTaskIds: [todo01.id] },
    ]
    const expected = [todo00, todo01, { ...todo02, childrenTaskIds: [todo01.id] }]
    expect(
      reducer(actual, {
        type: updateTodo.type,
        payload: {
          id: todo02.id,
          title: null,
          description: null,
          parentTaskId: null,
          childrenTaskIds: null,
        },
      }),
    ).toEqual(expected)
  })

  it('No Update undefined value', () => {
    const actual = [todo00, todo01]
    const expected = [todo00, todo01]
    expect(
      reducer(actual, {
        type: updateTodo.type,
        payload: {
          id: todo01.id,
          title: undefined,
          description: undefined,
          parentTaskId: undefined,
          childrenTaskIds: undefined,
        },
      }),
    ).toEqual(expected)
  })
})
