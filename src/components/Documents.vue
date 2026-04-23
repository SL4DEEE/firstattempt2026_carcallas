<template>
  <div class="documents-hub">
    <div class="header">
      <h1>Academic Records</h1>
      <p class="subtitle">Manage your academic documents and credentials</p>
    </div>

    <!-- Digital Academic Passport Section -->
    <section class="passport-section">
      <div class="passport-card">
        <div class="passport-header">
          <div class="passport-icon">🎓</div>
          <div class="passport-info">
            <h2>Digital Academic Passport</h2>
            <p class="degree">Bachelor of Science in Information Technology</p>
            <p class="honors">Magna Cum Laude, Class of 2024</p>
          </div>
          <div class="verification-badge">✓ VERIFIED</div>
        </div>

        <div class="passport-details">
          <div class="detail-item">
            <span class="label">Student ID</span>
            <span class="value">2020-1045</span>
          </div>
          <div class="detail-item">
            <span class="label">GPA</span>
            <span class="value">3.85</span>
          </div>
          <div class="detail-item">
            <span class="label">Graduation Date</span>
            <span class="value">May 15, 2024</span>
          </div>
        </div>

        <button class="download-btn">Download Passport</button>
      </div>
    </section>

    <!-- Document Services Section -->
    <section class="services-section">
      <h2>Document Services</h2>
      <p class="section-description">Request and download official academic documents</p>

      <div class="documents-grid">
        <!-- Official Transcript -->
        <div class="document-card">
          <div class="doc-icon">📄</div>
          <h3>Official Transcript</h3>
          <p class="doc-description">Complete academic record with grades and coursework</p>
          <div class="doc-status">
            <span class="status-badge ready">✓ Ready</span>
          </div>
          <button class="request-btn">Download</button>
        </div>

        <!-- e-Diploma -->
        <div class="document-card">
          <div class="doc-icon">🏆</div>
          <h3>e-Diploma</h3>
          <p class="doc-description">Digital diploma with tamper-proof verification</p>
          <div class="doc-status">
            <span class="status-badge ready">✓ Ready</span>
          </div>
          <button class="request-btn">Download</button>
        </div>

        <!-- Degree Verification -->
        <div class="document-card">
          <div class="doc-icon">✓</div>
          <h3>Degree Verification</h3>
          <p class="doc-description">Official verification letter for employers</p>
          <div class="doc-status">
            <span class="status-badge ready">✓ Ready</span>
          </div>
          <button class="request-btn">Download</button>
        </div>

        <!-- Certificate of Good Moral -->
        <div class="document-card">
          <div class="doc-icon">📜</div>
          <h3>Certificate of Good Moral</h3>
          <p class="doc-description">Character certificate issued by the university</p>
          <div class="doc-status">
            <span class="status-badge ready">✓ Ready</span>
          </div>
          <button class="request-btn">Download</button>
        </div>

        <!-- Student ID Replacement -->
        <div class="document-card">
          <div class="doc-icon">🆔</div>
          <h3>Student ID Replacement</h3>
          <p class="doc-description">Request a replacement student ID card</p>
          <div class="doc-status">
            <span class="status-badge pending">⏳ Processing</span>
          </div>
          <button class="request-btn" disabled>Pending</button>
        </div>

        <!-- Request History -->
        <div class="document-card">
          <div class="doc-icon">📋</div>
          <h3>Request History</h3>
          <p class="doc-description">View all your past document requests</p>
          <div class="doc-status">
            <span class="status-badge">View All</span>
          </div>
          <button class="request-btn view-history">View History</button>
        </div>
      </div>
    </section>

    <!-- Recent Downloads Section -->
    <section class="downloads-section">
      <div class="section-header">
        <h2>Recent Downloads</h2>
        <a href="#" class="view-all">View all</a>
      </div>

      <div class="downloads-list">
        <div class="download-item">
          <div class="download-icon">📄</div>
          <div class="download-info">
            <p class="download-name">Official_Transcript_2024.pdf</p>
            <p class="download-time">Downloaded 2 days ago</p>
          </div>
          <button class="download-again-btn">↓</button>
        </div>

        <div class="download-item">
          <div class="download-icon">🏆</div>
          <div class="download-info">
            <p class="download-name">e-Diploma_BSIT_2024.pdf</p>
            <p class="download-time">Downloaded 1 week ago</p>
          </div>
          <button class="download-again-btn">↓</button>
        </div>

        <div class="download-item">
          <div class="download-icon">✓</div>
          <div class="download-info">
            <p class="download-name">Degree_Verification_Letter.pdf</p>
            <p class="download-time">Downloaded 2 weeks ago</p>
          </div>
          <button class="download-again-btn">↓</button>
        </div>
      </div>
    </section>

    <!-- Help & Support Section -->
    <section class="support-section">
      <div class="support-card">
        <h3>Need Help?</h3>
        <p>Having trouble accessing your documents? Contact our registrar office.</p>
        <button class="support-btn">Contact Support</button>
      </div>
    </section>

    <!-- Spacer for bottom nav -->
    <div class="bottom-spacer"></div>
  </div>
</template>

<script setup>
// Documents page logic
</script>

<style scoped>
.documents-hub {
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

/* Passport Section */
.passport-section {
  margin-bottom: 40px;
}

.passport-card {
  padding: 32px;
  border: 2px solid var(--accent);
  border-radius: 12px;
  background: linear-gradient(135deg, var(--accent-bg), rgba(192, 132, 252, 0.08));
  position: relative;
}

.passport-header {
  display: flex;
  gap: 20px;
  margin-bottom: 24px;
  align-items: flex-start;
}

.passport-icon {
  font-size: 48px;
  flex-shrink: 0;
}

.passport-info {
  flex: 1;
}

.passport-info h2 {
  font-size: 24px;
  margin: 0 0 8px 0;
  color: var(--text-h);
}

.degree {
  font-size: 16px;
  font-weight: 600;
  color: var(--accent);
  margin: 0 0 4px 0;
}

.honors {
  font-size: 14px;
  color: var(--text);
  margin: 0;
}

.verification-badge {
  background: var(--accent);
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
}

.passport-details {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border);
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.label {
  font-size: 12px;
  color: var(--text);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.value {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-h);
}

.download-btn {
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

.download-btn:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

/* Services Section */
.services-section {
  margin-bottom: 40px;
}

.services-section h2 {
  font-size: 20px;
  margin: 0 0 8px 0;
}

.section-description {
  color: var(--text);
  font-size: 14px;
  margin: 0 0 20px 0;
}

.documents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.document-card {
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.2s ease;
  text-align: center;
}

.document-card:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow);
}

.doc-icon {
  font-size: 40px;
  margin: 0 auto 8px;
}

.document-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-h);
  margin: 0;
}

.doc-description {
  font-size: 13px;
  color: var(--text);
  margin: 0;
  line-height: 1.4;
}

.doc-status {
  display: flex;
  justify-content: center;
}

.status-badge {
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  background: var(--code-bg);
  color: var(--text);
}

.status-badge.ready {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
}

.status-badge.pending {
  background: rgba(247, 144, 9, 0.1);
  color: #f79009;
}

.request-btn {
  padding: 10px 20px;
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 8px;
}

.request-btn:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-2px);
}

.request-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.request-btn.view-history {
  background: transparent;
  border: 1px solid var(--accent);
  color: var(--accent);
}

.request-btn.view-history:hover {
  background: var(--accent);
  color: white;
}

/* Downloads Section */
.downloads-section {
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

.downloads-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.download-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--bg);
  transition: all 0.2s ease;
}

.download-item:hover {
  border-color: var(--accent);
  background: var(--accent-bg);
}

.download-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.download-info {
  flex: 1;
}

.download-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-h);
  margin: 0 0 4px 0;
}

.download-time {
  font-size: 12px;
  color: var(--text);
  margin: 0;
}

.download-again-btn {
  padding: 8px 12px;
  border: 1px solid var(--border);
  background: var(--bg);
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s ease;
}

.download-again-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* Support Section */
.support-section {
  margin-bottom: 40px;
}

.support-card {
  padding: 24px;
  border: 1px dashed var(--border);
  border-radius: 12px;
  background: var(--accent-bg);
  text-align: center;
}

.support-card h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-h);
  margin: 0 0 8px 0;
}

.support-card p {
  color: var(--text);
  font-size: 14px;
  margin: 0 0 16px 0;
}

.support-btn {
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

.support-btn:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

/* Spacer for bottom nav */
.bottom-spacer {
  height: 100px;
}

/* Responsive */
@media (max-width: 640px) {
  .documents-hub {
    padding: 16px;
  }

  .header h1 {
    font-size: 36px;
  }

  .passport-header {
    flex-direction: column;
  }

  .passport-details {
    grid-template-columns: 1fr;
  }

  .documents-grid {
    grid-template-columns: 1fr;
  }

  .downloads-list {
    gap: 8px;
  }

  .download-item {
    padding: 12px;
    gap: 12px;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style>
