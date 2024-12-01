import type { Todo } from '@/entities/task/model';

export const sampleTaskList: Todo[] = [
  {
    id: '0',
    title: 'TechStack',
    description: 'describe below TechStack',
    completed: false,
    parentTaskId: null,
    childrenTaskIds: ['1', '2', '3'],
  },
  {
    id: '1',
    title: 'Next.js',
    description: 'React Framework',
    completed: false,
    parentTaskId: '0',
    childrenTaskIds: [],
  },
  {
    id: '2',
    title: 'Redux Toolkit',
    description: 'Statement Management',
    completed: false,
    parentTaskId: '0',
    childrenTaskIds: [],
  },
  {
    id: '3',
    title: 'Material-UI',
    description: 'UI Framework',
    completed: false,
    parentTaskId: '0',
    childrenTaskIds: [],
  },
];
