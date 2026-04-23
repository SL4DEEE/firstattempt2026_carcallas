<template>
  <div class="donation-hub">
    <div class="header">
      <h1>Donation Hub</h1>
      <p class="subtitle">Support ADDU Nation and make an impact today</p>
    </div>

    <!-- Impact Stats -->
    <section class="impact-section">
      <div class="impact-card">
        <p class="impact-label">Total Raised This Year</p>
        <p class="impact-value">$1,250,000</p>
        <p class="impact-description">Thanks to our generous alumni</p>
      </div>
    </section>

    <!-- Make an Impact Section -->
    <section class="make-impact-section">
      <h2>Make an Impact Today</h2>
      <div class="impact-categories">
        <div class="impact-category">
          <div class="category-icon">💼</div>
          <p class="category-name">Alumni Business</p>
        </div>
        <div class="impact-category">
          <div class="category-icon">👨‍🎓</div>
          <p class="category-name">Student Projects</p>
        </div>
        <div class="impact-category">
          <div class="category-icon">🤝</div>
          <p class="category-name">Community Initiatives</p>
        </div>
        <div class="impact-category">
          <div class="category-icon">🚨</div>
          <p class="category-name">Emergency Fund</p>
        </div>
      </div>
    </section>

    <!-- Verified Urgent Appeals -->
    <section class="appeals-section">
      <div class="section-header">
        <h2>Verified Urgent Appeals</h2>
        <a href="#" class="see-all">See All</a>
      </div>

      <div class="appeals-list">
        <!-- Appeal 1 -->
        <div class="appeal-card">
          <div class="appeal-image">
            <div class="verified-badge">✓ VERIFIED</div>
          </div>
          <div class="appeal-content">
            <h3>Class of '24 Scholarship Fund</h3>
            <p class="appeal-description">Support deserving students pursuing their dreams</p>
            <div class="donation-amount">$6,500 raised</div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 65%"></div>
            </div>
            <p class="goal-text">Goal: $10,000</p>
            <button class="donate-btn">Donate Now</button>
          </div>
        </div>

        <!-- Appeal 2 -->
        <div class="appeal-card">
          <div class="appeal-image">
            <div class="verified-badge">✓ VERIFIED</div>
          </div>
          <div class="appeal-content">
            <h3>Robotics Club Finals Trip</h3>
            <p class="appeal-description">Help our robotics team reach nationals in Singapore</p>
            <div class="donation-amount">$7,200 raised</div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 72%"></div>
            </div>
            <p class="goal-text">Goal: $10,000</p>
            <button class="donate-btn">Donate Now</button>
          </div>
        </div>

        <!-- Appeal 3 -->
        <div class="appeal-card">
          <div class="appeal-image">
            <div class="verified-badge">✓ VERIFIED</div>
          </div>
          <div class="appeal-content">
            <h3>Medical Aid for Alumni Job Seekers</h3>
            <p class="appeal-description">Healthcare support for graduates in transition</p>
            <div class="donation-amount">$4,800 raised</div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 48%"></div>
            </div>
            <p class="goal-text">Goal: $10,000</p>
            <button class="donate-btn">Donate Now</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Start Campaign Section -->
    <section class="campaign-section">
      <div class="campaign-card">
        <div class="campaign-icon">✨</div>
        <h3>Have a Campaign Idea?</h3>
        <p>Start your own fundraising initiative and unite the alumni community</p>
        <button class="start-campaign-btn">Start a Campaign</button>
      </div>
    </section>

    <!-- Spacer for bottom nav -->
    <div class="bottom-spacer"></div>
  </div>
</template>

<script setup>
// Component logic can be expanded here for donations, filtering, etc.
</script>

<style scoped>
.donation-hub {
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

/* Impact Section */
.impact-section {
  margin-bottom: 40px;
}

.impact-card {
  padding: 24px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--accent-bg), var(--accent-border));
  border: 1px solid var(--accent-border);
  text-align: center;
}

.impact-label {
  color: var(--text);
  font-size: 14px;
  margin: 0 0 12px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.impact-value {
  color: var(--accent);
  font-size: 48px;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.impact-description {
  color: var(--text);
  font-size: 14px;
  margin: 0;
}

/* Make Impact Section */
.make-impact-section {
  margin-bottom: 40px;
}

.make-impact-section h2 {
  margin-bottom: 20px;
  font-size: 20px;
}

.impact-categories {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.impact-category {
  padding: 20px;
  border: 1px solid var(--border);
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.impact-category:hover {
  border-color: var(--accent);
  background: var(--accent-bg);
}

.category-icon {
  font-size: 36px;
  margin-bottom: 12px;
}

.category-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-h);
  margin: 0;
}

/* Appeals Section */
.appeals-section {
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

.see-all {
  font-size: 14px;
  color: var(--accent);
  text-decoration: none;
  transition: all 0.2s ease;
}

.see-all:hover {
  text-decoration: underline;
}

.appeals-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.appeal-card {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 20px;
  padding: 20px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--bg);
  transition: all 0.2s ease;
}

.appeal-card:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow);
}

.appeal-image {
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 8px;
  background: linear-gradient(135deg, var(--accent-bg), var(--code-bg));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
}

.verified-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: var(--accent);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
  white-space: nowrap;
}

.appeal-content {
  display: flex;
  flex-direction: column;
}

.appeal-content h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-h);
  margin: 0 0 8px 0;
}

.appeal-description {
  color: var(--text);
  font-size: 14px;
  margin: 0 0 12px 0;
}

.donation-amount {
  font-size: 16px;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 8px;
}

.progress-bar {
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: var(--border);
  overflow: hidden;
  margin-bottom: 8px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), #ff6b9d);
  border-radius: 4px;
}

.goal-text {
  font-size: 12px;
  color: var(--text);
  margin: 0 0 12px 0;
}

.donate-btn {
  align-self: flex-start;
  padding: 10px 24px;
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.donate-btn:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

/* Campaign Section */
.campaign-section {
  margin-bottom: 40px;
}

.campaign-card {
  padding: 32px;
  border: 2px dashed var(--border);
  border-radius: 12px;
  text-align: center;
  background: var(--accent-bg);
}

.campaign-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.campaign-card h3 {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-h);
  margin: 0 0 12px 0;
}

.campaign-card p {
  color: var(--text);
  font-size: 16px;
  margin: 0 0 20px 0;
}

.start-campaign-btn {
  padding: 12px 32px;
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.start-campaign-btn:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

/* Spacer for bottom nav */
.bottom-spacer {
  height: 100px;
}

/* Responsive */
@media (max-width: 640px) {
  .donation-hub {
    padding: 16px;
  }

  .header h1 {
    font-size: 36px;
  }

  .impact-value {
    font-size: 36px;
  }

  .impact-categories {
    grid-template-columns: 1fr;
  }

  .appeal-card {
    grid-template-columns: 1fr;
  }

  .appeal-image {
    width: 100%;
    height: 150px;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style>
