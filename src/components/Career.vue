<template>
  <div class="career-hub">
    <div class="header">
      <h1>Career Opportunities</h1>
      <p class="subtitle">Discover jobs and workshops tailored for you</p>
    </div>

    <!-- Search and Filter -->
    <section class="search-section">
      <div class="search-box">
        <input 
          type="text" 
          placeholder="Search alumni by name, job, or industry"
          class="search-input"
        >
        <button class="filter-btn">⚙️</button>
      </div>
    </section>

    <!-- Job Board Section -->
    <section class="jobs-section">
      <div class="section-header">
        <h2>Job Board</h2>
        <a href="#" class="view-all">View All</a>
      </div>

      <div class="jobs-grid">
        <!-- Job 1 -->
        <div class="job-card">
          <div class="job-header">
            <h3>Senior Product Designer</h3>
            <span class="job-type full-time">Full-time</span>
          </div>
          <p class="company">Google • Mountain View, CA</p>
          <p class="job-description">Lead design for consumer products. Shape the future of technology.</p>
          <div class="job-meta">
            <span class="salary">$140k - $180k</span>
            <span class="remote">Remote</span>
          </div>
          <button class="apply-btn">Apply Now</button>
        </div>

        <!-- Job 2 -->
        <div class="job-card">
          <div class="job-header">
            <h3>UX Researcher</h3>
            <span class="job-type full-time">Full-time</span>
          </div>
          <p class="company">Spotify • New York, NY</p>
          <p class="job-description">Understand user behavior and improve product experiences through research.</p>
          <div class="job-meta">
            <span class="salary">$130k - $160k</span>
            <span class="remote">Hybrid</span>
          </div>
          <button class="apply-btn">Apply Now</button>
        </div>

        <!-- Job 3 -->
        <div class="job-card">
          <div class="job-header">
            <h3>Full Stack Engineer</h3>
            <span class="job-type contract">Contract</span>
          </div>
          <p class="company">Stripe • San Francisco, CA</p>
          <p class="job-description">Build scalable payment infrastructure for businesses worldwide.</p>
          <div class="job-meta">
            <span class="salary">$150k - $200k</span>
            <span class="remote">On-site</span>
          </div>
          <button class="apply-btn">Apply Now</button>
        </div>

        <!-- Job 4 -->
        <div class="job-card">
          <div class="job-header">
            <h3>Product Manager</h3>
            <span class="job-type full-time">Full-time</span>
          </div>
          <p class="company">Meta • Menlo Park, CA</p>
          <p class="job-description">Drive product strategy and vision for billions of users.</p>
          <div class="job-meta">
            <span class="salary">$160k - $210k</span>
            <span class="remote">Remote</span>
          </div>
          <button class="apply-btn">Apply Now</button>
        </div>

        <!-- Job 5 -->
        <div class="job-card">
          <div class="job-header">
            <h3>Data Scientist</h3>
            <span class="job-type full-time">Full-time</span>
          </div>
          <p class="company">Amazon • Seattle, WA</p>
          <p class="job-description">Extract insights from big data and drive business decisions.</p>
          <div class="job-meta">
            <span class="salary">$130k - $170k</span>
            <span class="remote">Hybrid</span>
          </div>
          <button class="apply-btn">Apply Now</button>
        </div>

        <!-- Job 6 -->
        <div class="job-card">
          <div class="job-header">
            <h3>Marketing Director</h3>
            <span class="job-type full-time">Full-time</span>
          </div>
          <p class="company">Apple • Cupertino, CA</p>
          <p class="job-description">Lead global marketing campaigns and build brand presence.</p>
          <div class="job-meta">
            <span class="salary">$120k - $150k</span>
            <span class="remote">On-site</span>
          </div>
          <button class="apply-btn">Apply Now</button>
        </div>
      </div>
    </section>

    <!-- Membership & Workshops Section -->
    <section class="opportunities-section">
      <div class="opportunities-grid">
        <!-- Membership Card -->
        <div class="opportunity-card">
          <h3>Membership</h3>
          <p class="opportunity-description">Join our exclusive alumni network and get access to premium resources.</p>
          <button class="learn-more-btn">Learn More</button>
        </div>

        <!-- Workshops Card -->
        <div class="opportunity-card">
          <h3>Workshops</h3>
          <p class="opportunity-description">Attend skill-building workshops led by industry experts.</p>
          <button class="learn-more-btn">View All</button>
        </div>
      </div>
    </section>

    <!-- Meet Alumni Mentors Section -->
    <section class="mentors-section">
      <div class="section-header">
        <h2>Meet Alumni Mentors</h2>
        <a href="#" class="view-all">View All</a>
      </div>

      <div class="mentors-grid">
        <!-- Mentor 1 -->
        <div class="mentor-card">
          <div class="mentor-avatar">👨‍💼</div>
          <h3>Sarah Jenkins, '15</h3>
          <p class="mentor-title">Specializing in digital strategy and brand growth</p>
          <p class="mentor-company">Spotify • New York, NY</p>
          <button class="request-mentor-btn">Request Meeting</button>
        </div>

        <!-- Mentor 2 -->
        <div class="mentor-card">
          <div class="mentor-avatar">👩‍💼</div>
          <h3>Marcus Johnson, '12</h3>
          <p class="mentor-title">Head of Marketing at Global Corp</p>
          <p class="mentor-company">Best Engineering '19</p>
          <button class="request-mentor-btn">Request Meeting</button>
        </div>

        <!-- Mentor 3 -->
        <div class="mentor-card">
          <div class="mentor-avatar">👨‍💻</div>
          <h3>Elena Rodriguez, '18</h3>
          <p class="mentor-title">Senior Software Engineer, Cloud Systems</p>
          <p class="mentor-company">Google • San Francisco, CA</p>
          <button class="request-mentor-btn">Request Meeting</button>
        </div>
      </div>
    </section>

    <!-- Spacer for bottom nav -->
    <div class="bottom-spacer"></div>
  </div>
</template>

<script setup>
// Career page logic
</script>

<style scoped>
.career-hub {
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

/* Jobs Section */
.jobs-section {
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

.jobs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
}

.job-card {
  padding: 20px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--bg);
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.job-card:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow);
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
}

.job-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-h);
  margin: 0;
}

.job-type {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}

.job-type.full-time {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
}

.job-type.contract {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
}

.company {
  font-size: 14px;
  color: var(--text);
  margin: 0;
  font-weight: 500;
}

.job-description {
  font-size: 14px;
  color: var(--text);
  margin: 0;
  line-height: 1.4;
}

.job-meta {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.salary,
.remote {
  font-size: 13px;
  padding: 4px 12px;
  border-radius: 6px;
  background: var(--code-bg);
  color: var(--text);
}

.apply-btn {
  padding: 10px 20px;
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  align-self: flex-start;
  margin-top: 8px;
}

.apply-btn:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

/* Opportunities Section */
.opportunities-section {
  margin-bottom: 40px;
}

.opportunities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.opportunity-card {
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: linear-gradient(135deg, var(--accent-bg), rgba(192, 132, 252, 0.05));
  text-align: center;
}

.opportunity-card h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-h);
  margin: 0 0 12px 0;
}

.opportunity-description {
  font-size: 14px;
  color: var(--text);
  margin: 0 0 16px 0;
  line-height: 1.5;
}

.learn-more-btn {
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

.learn-more-btn:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

/* Mentors Section */
.mentors-section {
  margin-bottom: 40px;
}

.mentors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.mentor-card {
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--bg);
  text-align: center;
  transition: all 0.2s ease;
}

.mentor-card:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow);
}

.mentor-avatar {
  font-size: 48px;
  margin-bottom: 12px;
}

.mentor-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-h);
  margin: 0 0 4px 0;
}

.mentor-title {
  font-size: 14px;
  color: var(--accent);
  font-weight: 500;
  margin: 0 0 8px 0;
}

.mentor-company {
  font-size: 13px;
  color: var(--text);
  margin: 0 0 16px 0;
}

.request-mentor-btn {
  padding: 10px 20px;
  background: transparent;
  border: 2px solid var(--accent);
  color: var(--accent);
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.request-mentor-btn:hover {
  background: var(--accent);
  color: white;
}

/* Spacer for bottom nav */
.bottom-spacer {
  height: 100px;
}

/* Responsive */
@media (max-width: 640px) {
  .career-hub {
    padding: 16px;
  }

  .header h1 {
    font-size: 36px;
  }

  .jobs-grid {
    grid-template-columns: 1fr;
  }

  .opportunities-grid {
    grid-template-columns: 1fr;
  }

  .mentors-grid {
    grid-template-columns: 1fr;
  }

  .search-box {
    flex-direction: column;
  }

  .search-input {
    width: 100%;
  }
}
</style>
