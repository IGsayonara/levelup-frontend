export interface State {
  id: number | null;
  title: string | null;
  isError: boolean;
}

export const state = {
  id: null,
  title: null,
  isError: false,
};
