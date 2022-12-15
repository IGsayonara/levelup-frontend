<template>
  <div class="app-modal__wrapper">
    <div class="modal-close-overlay" @click="close"></div>
    <div class="app-modal__wrapper-content">
      <div class="modal-content">
        <header>
          <slot name="header"></slot>
        </header>
        <div class="app-modal_content">
          <slot name="content"></slot>
        </div>
        <footer>
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
const isOpen = ref(false);
const emit = defineEmits(['close']);

const close = () => {
  document.body.style.overflowY = 'auto';
  emit('close');
};

onMounted(() => {
  document.body.style.overflowY = 'hidden';
  isOpen.value = true;
});

onBeforeUnmount(() => {
  document.body.style.overflowY = 'auto';
});
</script>

<style scoped lang="scss">
.app-modal__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9997;
  background: rgba(0, 0, 0, 0.7);
}

.modal-close-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9998;
}

.app-modal__wrapper-content {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 80%;
  height: fit-content;
  margin: auto;
  z-index: 9999;
  @include media-breakpoint-down(md) {
    width: 100%;
    height: 100%;
  }
}

.modal-content {
  background: white;
  border: 1px solid #e5e5e5;
  border-radius: 1rem;
  padding: 4rem 2rem;
  @include media-breakpoint-down(md) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
}
</style>
