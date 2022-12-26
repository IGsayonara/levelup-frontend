<script lang="ts">
import { h, onBeforeUnmount, onMounted, ref, useSlots } from 'vue';
export default {
  props: {
    lifeTime: {
      default: 0,
      type: Number,
    },
  },
  setup(props) {
    const slot = useSlots().default;

    const timer = ref(0);
    const interval = ref<number>(0);

    onMounted(() => {
      interval.value = setInterval(() => {
        if (timer.value >= props.lifeTime) {
          clearInterval(interval.value);
          return;
        }
        timer.value++;
      }, 1000);
    });

    onBeforeUnmount(() => {
      clearInterval(interval.value);
    });
    return () =>
      h(
        'div',
        slot
          ? slot({
              timer: timer.value,
            })
          : null
      );
  },
};
</script>

<style scoped></style>
