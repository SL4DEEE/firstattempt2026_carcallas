<template>
  <nav class="bottom-nav">
    <button 
      v-for="item in navItems" 
      :key="item.id"
      class="nav-button"
      :class="{ active: currentPage === item.id }"
      @click="$emit('navigate', item.id)"
    >
      <span class="nav-icon">{{ item.icon }}</span>
      <span class="nav-label">{{ item.label }}</span>
    </button>
  </nav>
</template>

<script setup>
defineProps({
  currentPage: {
    type: String,
    required: true
  }
});

defineEmits(['navigate']);

const navItems = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'network', label: 'Network', icon: '👥' },
  { id: 'donate', label: 'Donate', icon: '❤️' },
  { id: 'career', label: 'Career', icon: '💼' },
  { id: 'documents', label: 'Documents', icon: '📄' }
];
</script>

<style scoped>
.bottom-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0;
  border-top: 1px solid var(--border);
  background: var(--bg);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  gap: 8px;
  max-width: 100%;
  z-index: 100;
}

.nav-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: var(--text);
  font-size: 12px;
  transition: all 0.2s ease;
  flex: 1;
}

.nav-button:hover {
  color: var(--accent);
  background: var(--accent-bg);
  border-radius: 8px;
}

.nav-button.active {
  color: var(--accent);
  background: var(--accent-bg);
  border-radius: 8px;
  font-weight: 500;
}

.nav-icon {
  font-size: 24px;
  display: block;
}

.nav-label {
  display: block;
}

@media (max-width: 640px) {
  .nav-label {
    display: none;
  }

  .nav-button {
    padding: 8px;
  }
}
</style>
