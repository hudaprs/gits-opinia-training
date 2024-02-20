// Types
import {Todo} from '@/features/home/screens/Todo/types';

export type ItemProps = Omit<Todo, 'id'>;
