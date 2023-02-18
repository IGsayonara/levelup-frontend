export interface State {
  id: number | null;
  title: string | null;
  description?: string | null;
  isError: boolean;
}

export const state: State = {
  id: null,
  title: null,
  description: null,
  isError: false,
};
