<script>
import { ref, h } from 'vue';
import WithSlots from './index.vue';
export default {
  setup() {
    const lifeTime = ref(3);

    return () =>
      h(
        WithSlots,
        {
          lifeTime: lifeTime.value,
        },
        { default: ({ timer }) => h('div', lifeTime.value - timer) }
      );
  },
};
</script>

<style scoped></style>
