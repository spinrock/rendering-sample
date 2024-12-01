'use client';

import React from 'react';
import { TasksList } from '@/widget/tasksList';
import { AddTaskBtn } from '@/features/createTask/ui';

const IndexPage: React.FC = () => (
  <div className="md:mx-36 mx-4">
    <TasksList />
    <AddTaskBtn />
  </div>
);

export default IndexPage;
