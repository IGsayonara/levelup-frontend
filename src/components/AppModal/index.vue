<template>
  <div class="app-modal_wrapper">
    <div class="app-modal">
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
</template>

<script setup></script>

<style scoped></style>
