export interface State {
  id: number | null;
  title: string | null;
  isError: boolean;
}

export const state: State = {
  id: null,
  title: null,
  isError: false,
};
