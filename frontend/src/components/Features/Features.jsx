import "./Features.css";

function Features() {
  return (
    <section className="features">

      <h2>Why Choose SMART?</h2>

      <p className="section-subtitle">
        Experience the future of education with Artificial Intelligence.
      </p>

      <div className="feature-grid">

        <div className="feature-card">
          <div className="feature-icon">😊</div>
          <h3>Emotion Detection</h3>
          <p>
            Detect students' emotions in real time using AI.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📚</div>
          <h3>Adaptive Learning</h3>
          <p>
            Personalized learning based on emotional feedback.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📈</div>
          <h3>Progress Tracking</h3>
          <p>
            Monitor learning performance with detailed analytics.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🔒</div>
          <h3>Secure Platform</h3>
          <p>
            Secure authentication and protected student data.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;