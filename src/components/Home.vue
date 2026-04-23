<template>
  <div class="home-container">
    <div class="header">
      <h1>Hello, Alex!</h1>
      <p class="subtitle">Welcome back</p>
    </div>

    <!-- Daily Snapshot Section -->
    <section class="snapshot-section">
      <h2>Your Daily Snapshot</h2>
      <div class="snapshot-grid">
        <div class="snapshot-card">
          <div class="snapshot-icon">💼</div>
          <div class="snapshot-content">
            <p class="snapshot-label">Jobs for You</p>
            <p class="snapshot-value">8 new matches</p>
          </div>
        </div>
        <div class="snapshot-card">
          <div class="snapshot-icon">✓</div>
          <div class="snapshot-content">
            <p class="snapshot-label">Verified Status</p>
            <p class="snapshot-value">Profile 35%</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Activity Section -->
    <section class="activity-section">
      <h2>Your Recent Activity</h2>
      <div class="view-all">
        <a href="#" class="view-all-link">View All</a>
      </div>

      <div class="activity-list">
        <div class="activity-item">
          <div class="activity-icon">💬</div>
          <div class="activity-content">
            <p class="activity-title">New Member Message</p>
            <p class="activity-description">Hi, there! replied to your message about...</p>
            <p class="activity-time">1m ago</p>
          </div>
        </div>

        <div class="activity-item">
          <div class="activity-icon">🎁</div>
          <div class="activity-content">
            <p class="activity-title">Donation Receipt Ready</p>
            <p class="activity-description">Thank you for your contribution to...</p>
            <p class="activity-time">2h ago</p>
          </div>
        </div>

        <div class="activity-item">
          <div class="activity-icon">📢</div>
          <div class="activity-content">
            <p class="activity-title">Job Application Update</p>
            <p class="activity-description">Your application for "Project Manager" is...</p>
            <p class="activity-time">1d ago</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Navigation Pills -->
    <section class="quick-nav-section">
      <h2>Quick Access</h2>
      <div class="pills-container">
        <button 
          v-for="pill in quickNavPills"
          :key="pill.id"
          class="pill-button"
          @click="navigateTo(pill.id)"
        >
          <span class="pill-icon">{{ pill.icon }}</span>
          <span>{{ pill.label }}</span>
        </button>
      </div>
    </section>

    <!-- Spacer for bottom nav -->
    <div class="bottom-spacer"></div>
  </div>
</template>

<script setup>
defineProps({
  onNavigate: Function
});

const quickNavPills = [
  { id: 'network', label: 'Browse Alumni', icon: '👥' },
  { id: 'career', label: 'Job Board', icon: '💼' },
  { id: 'donate', label: 'Support Initiatives', icon: '❤️' },
  { id: 'documents', label: 'View Documents', icon: '📄' }
];

const navigateTo = (pageId) => {
  // This will be handled by parent component
  console.log('Navigate to:', pageId);
};
</script>

<style scoped>
.home-container {
  padding: 24px;
  max-width: 1024px;
  margin: 0 auto;
}

.header {
  margin-bottom: 32px;
  padding-top: 12px;
}

.header h1 {
  font-size: 48px;
  margin: 0 0 8px 0;
  color: var(--text-h);
}

.subtitle {
  color: var(--text);
  font-size: 16px;
  margin: 0;
}

/* Snapshot Section */
.snapshot-section {
  margin-bottom: 40px;
}

.snapshot-section h2 {
  margin-bottom: 16px;
  font-size: 20px;
}

.snapshot-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.snapshot-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--bg);
  transition: all 0.2s ease;
}

.snapshot-card:hover {
  border-color: var(--accent);
  background: var(--accent-bg);
}

.snapshot-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.snapshot-content {
  flex: 1;
}

.snapshot-label {
  font-size: 14px;
  color: var(--text);
  margin: 0 0 4px 0;
}

.snapshot-value {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-h);
  margin: 0;
}

/* Activity Section */
.activity-section {
  margin-bottom: 40px;
}

.activity-section h2 {
  margin-bottom: 12px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.view-all {
  margin-bottom: 16px;
}

.view-all-link {
  font-size: 14px;
  color: var(--accent);
  text-decoration: none;
  transition: all 0.2s ease;
}

.view-all-link:hover {
  text-decoration: underline;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.activity-item {
  display: flex;
  gap: 16px;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--bg);
  cursor: pointer;
  transition: all 0.2s ease;
}

.activity-item:hover {
  border-color: var(--accent);
  background: var(--accent-bg);
}

.activity-icon {
  font-size: 28px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background: var(--accent-bg);
}

.activity-content {
  flex: 1;
}

.activity-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-h);
  margin: 0 0 4px 0;
}

.activity-description {
  font-size: 14px;
  color: var(--text);
  margin: 0 0 8px 0;
  line-height: 1.4;
}

.activity-time {
  font-size: 12px;
  color: var(--text);
  margin: 0;
  opacity: 0.7;
}

/* Quick Navigation Section */
.quick-nav-section {
  margin-bottom: 40px;
}

.quick-nav-section h2 {
  margin-bottom: 16px;
  font-size: 20px;
}

.pills-container {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.pill-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border: 1px solid var(--border);
  border-radius: 24px;
  background: var(--bg);
  color: var(--text-h);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.pill-button:hover {
  border-color: var(--accent);
  background: var(--accent-bg);
  color: var(--accent);
}

.pill-icon {
  font-size: 18px;
}

/* Spacer for bottom nav */
.bottom-spacer {
  height: 100px;
}

@media (max-width: 640px) {
  .home-container {
    padding: 16px;
  }

  .header h1 {
    font-size: 36px;
  }

  .snapshot-grid {
    grid-template-columns: 1fr;
  }

  .pills-container {
    flex-direction: column;
  }

  .pill-button {
    width: 100%;
    justify-content: center;
  }
}
</style>
