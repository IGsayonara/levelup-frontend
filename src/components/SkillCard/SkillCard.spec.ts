import { shallowMount, VueWrapper } from '@vue/test-utils';

const getWrapper = () => {
  return shallowMount(require('./index.vue'));
};

describe('Skill Card component tests', () => {
  let wrapper: VueWrapper;
  beforeAll(() => {
    wrapper = getWrapper();
  });

  it('Skill Card required props should be set up', () => {
    console.log(wrapper);
    expect(wrapper?.exists()).toBe(true);
  });
});
