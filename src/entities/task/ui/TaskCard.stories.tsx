import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { rootStore } from '@/app/store';
import { Todo } from '@/entities/task/model';
import { TaskCard } from '@/entities/task/ui';

const meta: Meta<typeof TaskCard> = {
  title: 'Task/TaskCard',
  component: TaskCard,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [(story) => <Provider store={rootStore}>{story()}</Provider>],
}

export default meta
type Story = StoryObj<typeof TaskCard>

const dummyTodo: Todo = {
  id: 'Dummy Id',
  title: 'Dummy Title',
  description: 'Dummy Description',
  completed: false,
  parentTaskId: null,
  childrenTaskIds: [],
}

export const Default: Story = {
  args: {
    todo: dummyTodo,
  },
}

export const Completed: Story = {
  args: {
    todo: { ...dummyTodo, completed: true },
  },
}
