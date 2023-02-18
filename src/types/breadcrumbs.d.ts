import { ComputedRef } from 'vue';

export type Breadcrumb = {
  text: string | (() => ComputedRef<string>);
  to?: string | (() => ComputedRef<string>);
};
