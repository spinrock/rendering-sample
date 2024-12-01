export interface Todo {
  id: string
  title: string
  description: string
  completed: boolean
  parentTaskId: string | null
  childrenTaskIds: string[]
}
