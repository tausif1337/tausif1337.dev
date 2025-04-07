import React from 'react';

function PrivacyPolicy() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'Inter, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Privacy Policy – Gonko</h1>
      <p><strong>Effective Date:</strong> April 7, 2025</p>

      <div style={{ marginTop: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>What We Collect</h2>
        <p>Gonko stores your transactions, categories, and settings <strong>locally on your device</strong>. No data is sent to us or to any third-party services.</p>
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Permissions</h2>
        <p>Gonko does not request or use any sensitive permissions like location, camera, or contacts.</p>
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Children’s Privacy</h2>
        <p>Gonko does not knowingly collect any personal data from children under the age of 13.</p>
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Changes to This Policy</h2>
        <p>We may update this Privacy Policy in the future. Any changes will be posted on this page.</p>
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Contact</h2>
        <p>If you have any questions or concerns, please contact us at <a href="mailto:tausif1337@gmail.com">tausif1337@gmail.com</a>.</p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
