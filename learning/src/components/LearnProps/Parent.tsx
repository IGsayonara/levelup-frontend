import Child from './Child.vue';
import { h, reactive, defineComponent, createVNode } from 'vue';

//TODO: add learning for Props
export default defineComponent({
  setup() {
    const count = reactive({ count: 0 });

    return () => [
      h(Child, { title: 'meow', modelValue: count.count, 'onUpdate:modelValue': (value: any) => (count.count = value) }),
      h('button', { onClick: () => count.count++ }, 'Increment'),
      h('div', count.count),
      h('input', { onInput: (e: any) => (count.count = e.target.value), value: count.count }),
      createVNode(<div>123</div>),
    ];
  },
});
