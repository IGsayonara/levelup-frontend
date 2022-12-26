<script lang="tsx">
import { h, ref } from 'vue';

export default {
  setup() {
    const count = ref(1);

    return () => [
      h(`h${count.value}`, null, count.value),
      <div>
        <button onclick={() => count.value++}>click Me</button>
      </div>,
    ];
  },
};
</script>

<style scoped></style>
