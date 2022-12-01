import { shallowMount, VueWrapper } from '@vue/test-utils';

const getWrapper = () => {
  return shallowMount(import('./index.vue'));
};

describe('Skill Card component tests', () => {
  let wrapper: VueWrapper;
  beforeAll(() => {
    wrapper = getWrapper();
  });

  it('Skill Card should exist', () => {
    expect(wrapper?.exists()).toBe(true);
  });
});
