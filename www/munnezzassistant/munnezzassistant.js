class MunnezzAssistantCard extends HTMLElement {
  setConfig(config) {
    this.innerHTML = `
      <ha-card style="font-family: 'SF Pro', 'Segoe UI', sans-serif; padding: 16px;">
        <h2 style="margin-top: 0;">${config.title || "🗑️ MunnezzAssistant"}</h2>
        <p>📦 Dashboard premium per la raccolta differenziata</p>
        <ul>
          <li>🔔 Notifiche vocali Alexa</li>
          <li>♻️ Animazioni cestino/calendario</li>
          <li>🎨 Tema chiaro HomeKit/Material</li>
        </ul>
        <p style="color: #888; font-size: 12px;">Powered by VesuvioCode</p>
      </ha-card>
    `;
  }

  set hass(hass) {}
}

customElements.define('munnezzassistant-card', MunnezzAssistantCard);