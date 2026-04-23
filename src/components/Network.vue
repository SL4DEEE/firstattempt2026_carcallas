<template>
  <div class="network-hub">
    <div class="header">
      <h1>Alumni Network</h1>
      <p class="subtitle">Connect with alumni by name, year, or industry</p>
    </div>

    <!-- Search and Filter -->
    <section class="search-section">
      <div class="search-box">
        <input 
          type="text" 
          placeholder="Search alumni by name, year, or industry"
          class="search-input"
        >
        <button class="filter-btn">⚙️</button>
      </div>

      <!-- Industry Filter Pills -->
      <div class="filter-pills">
        <button class="pill" :class="{ active: true }">Near Me</button>
        <button class="pill">Industry Experts</button>
        <button class="pill">Recent Grads</button>
        <button class="pill">My Year</button>
      </div>
    </section>

    <!-- Featured Alumni Section -->
    <section class="featured-section">
      <div class="section-header">
        <h2>Featured Alumni</h2>
        <a href="#" class="view-all">View all</a>
      </div>

      <div class="alumni-grid">
        <!-- Alumni 1 -->
        <div class="alumni-card">
          <div class="alumni-card-image">
            <div class="avatar">👩‍💼</div>
            <div class="verified-badge">✓ VERIFIED</div>
          </div>
          <div class="alumni-card-content">
            <h3>Sarah Chen</h3>
            <p class="alumni-title">Senior Product Designer at TechFlow</p>
            <p class="alumni-company">BS Computer Science '18</p>
            <button class="connect-btn">Connect</button>
            <button class="message-btn">Message</button>
          </div>
        </div>

        <!-- Alumni 2 -->
        <div class="alumni-card">
          <div class="alumni-card-image">
            <div class="avatar">👨‍💼</div>
            <div class="verified-badge">✓ VERIFIED</div>
          </div>
          <div class="alumni-card-content">
            <h3>Marcus Johnson</h3>
            <p class="alumni-title">Head of Marketing at Global Corp</p>
            <p class="alumni-company">BS Engineering '12</p>
            <button class="connect-btn">Connect</button>
            <button class="message-btn">Message</button>
          </div>
        </div>

        <!-- Alumni 3 -->
        <div class="alumni-card">
          <div class="alumni-card-image">
            <div class="avatar">👩‍💻</div>
            <div class="verified-badge">✓ VERIFIED</div>
          </div>
          <div class="alumni-card-content">
            <h3>Elena Rodriguez</h3>
            <p class="alumni-title">Senior Software Engineer at CloudSys</p>
            <p class="alumni-company">BS Computer Science '19</p>
            <button class="connect-btn">Connect</button>
            <button class="message-btn">Message</button>
          </div>
        </div>

        <!-- Alumni 4 -->
        <div class="alumni-card">
          <div class="alumni-card-image">
            <div class="avatar">👨‍🏫</div>
            <div class="verified-badge">✓ VERIFIED</div>
          </div>
          <div class="alumni-card-content">
            <h3>David Park</h3>
            <p class="alumni-title">Research Scientist at Stanford AI Lab</p>
            <p class="alumni-company">MS Data Science '16</p>
            <button class="connect-btn">Connect</button>
            <button class="message-btn">Message</button>
          </div>
        </div>

        <!-- Alumni 5 -->
        <div class="alumni-card">
          <div class="alumni-card-image">
            <div class="avatar">👩‍🎨</div>
            <div class="verified-badge">✓ VERIFIED</div>
          </div>
          <div class="alumni-card-content">
            <h3>Jessica Williams</h3>
            <p class="alumni-title">Creative Director at Adobe Studios</p>
            <p class="alumni-company">BA Design '17</p>
            <button class="connect-btn">Connect</button>
            <button class="message-btn">Message</button>
          </div>
        </div>

        <!-- Alumni 6 -->
        <div class="alumni-card">
          <div class="alumni-card-image">
            <div class="avatar">👨‍💻</div>
            <div class="verified-badge">✓ VERIFIED</div>
          </div>
          <div class="alumni-card-content">
            <h3>James Lee</h3>
            <p class="alumni-title">Founder & CEO at StartupXYZ</p>
            <p class="alumni-company">BS Business '14</p>
            <button class="connect-btn">Connect</button>
            <button class="message-btn">Message</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Browse by Category Section -->
    <section class="categories-section">
      <h2>Browse by Category</h2>
      <div class="categories-grid">
        <div class="category-card">
          <div class="category-icon">💼</div>
          <p class="category-name">Alumni Business</p>
          <p class="category-count">3,241 members</p>
        </div>
        <div class="category-card">
          <div class="category-icon">🎓</div>
          <p class="category-name">Recent Graduates</p>
          <p class="category-count">1,543 members</p>
        </div>
        <div class="category-card">
          <div class="category-icon">🚀</div>
          <p class="category-name">Entrepreneurs</p>
          <p class="category-count">892 members</p>
        </div>
        <div class="category-card">
          <div class="category-icon">📊</div>
          <p class="category-name">Tech & Engineering</p>
          <p class="category-count">4,156 members</p>
        </div>
        <div class="category-card">
          <div class="category-icon">🎨</div>
          <p class="category-name">Creative & Design</p>
          <p class="category-count">1,723 members</p>
        </div>
        <div class="category-card">
          <div class="category-icon">📱</div>
          <p class="category-name">Startups & Innovation</p>
          <p class="category-count">2,034 members</p>
        </div>
      </div>
    </section>

    <!-- Spacer for bottom nav -->
    <div class="bottom-spacer"></div>
  </div>
</template>

<script setup>
// Network page logic
</script>

<style scoped>
.network-hub {
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

/* Search Section */
.search-section {
  margin-bottom: 40px;
}

.search-box {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 16px;
}

.search-input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--bg);
  color: var(--text-h);
  font-size: 16px;
  font-family: var(--sans);
  transition: all 0.2s ease;
}

.search-input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-bg);
}

.search-input::placeholder {
  color: var(--text);
}

.filter-btn {
  padding: 12px 16px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--bg);
  cursor: pointer;
  font-size: 18px;
  transition: all 0.2s ease;
}

.filter-btn:hover {
  border-color: var(--accent);
  background: var(--accent-bg);
}

/* Filter Pills */
.filter-pills {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.pill {
  padding: 8px 16px;
  border: 1px solid var(--border);
  border-radius: 20px;
  background: var(--bg);
  color: var(--text);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.pill:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.pill.active {
  background: var(--accent);
  border-color: var(--accent);
  color: white;
  font-weight: 600;
}

/* Featured Alumni Section */
.featured-section {
  margin-bottom: 40px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.section-header h2 {
  margin: 0;
  font-size: 20px;
}

.view-all {
  font-size: 14px;
  color: var(--accent);
  text-decoration: none;
  transition: all 0.2s ease;
}

.view-all:hover {
  text-decoration: underline;
}

.alumni-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.alumni-card {
  padding: 0;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--bg);
  overflow: hidden;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
}

.alumni-card:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow);
}

.alumni-card-image {
  position: relative;
  padding: 32px 16px;
  background: linear-gradient(135deg, var(--accent-bg), var(--code-bg));
  text-align: center;
}

.avatar {
  font-size: 64px;
  margin-bottom: 12px;
}

.verified-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: var(--accent);
  color: white;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 700;
  white-space: nowrap;
}

.alumni-card-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.alumni-card-content h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-h);
  margin: 0;
}

.alumni-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--accent);
  margin: 0;
}

.alumni-company {
  font-size: 13px;
  color: var(--text);
  margin: 0 0 12px 0;
}

.connect-btn,
.message-btn {
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.connect-btn {
  background: var(--accent);
  color: white;
}

.connect-btn:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.message-btn {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-h);
}

.message-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* Categories Section */
.categories-section {
  margin-bottom: 40px;
}

.categories-section h2 {
  margin-bottom: 20px;
  font-size: 20px;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
}

.category-card {
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--bg);
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.category-card:hover {
  border-color: var(--accent);
  background: var(--accent-bg);
  transform: translateY(-4px);
}

.category-icon {
  font-size: 40px;
  margin-bottom: 12px;
}

.category-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-h);
  margin: 0 0 8px 0;
}

.category-count {
  font-size: 13px;
  color: var(--text);
  margin: 0;
}

/* Spacer for bottom nav */
.bottom-spacer {
  height: 100px;
}

/* Responsive */
@media (max-width: 640px) {
  .network-hub {
    padding: 16px;
  }

  .header h1 {
    font-size: 36px;
  }

  .alumni-grid {
    grid-template-columns: 1fr;
  }

  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .search-box {
    flex-direction: column;
  }

  .search-input {
    width: 100%;
  }

  .filter-pills {
    gap: 6px;
  }

  .pill {
    padding: 6px 12px;
    font-size: 13px;
  }
}
</style>
