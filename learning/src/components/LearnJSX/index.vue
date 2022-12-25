<script lang="tsx">
import { h, reactive } from 'vue';

export default {
  setup() {
    const count = reactive({ count: 0 });

    return () => [
      h('button', { onClick: () => count.count++ }, 'Increment'),
      h('div', count.count),
      h('input', { onInput: (e) => (count.count = e.target.value), value: count.count }),
      <div>{count.count}</div>,
    ];
  },
};
</script>

<style scoped></style>
