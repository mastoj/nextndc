export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

export type TodoItems = TodoItem[];

export type Result<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: string;
    };
