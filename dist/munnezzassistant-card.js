class MunnezzAssistantCard extends HTMLElement {
  set hass(hass) {
    if (!this.content) {
      const card = document.createElement('ha-card');
      card.header = this.config.title || "MunnezzAssistant";
      const content = document.createElement('div');
      content.innerHTML = '<div style="padding:1em;text-align:center;">Cestino virtuale</div>';
      card.appendChild(content);
      this.content = content;
      this.appendChild(card);
    }
  }
  setConfig(config) { this.config = config; }
  getCardSize() { return 1; }
}
customElements.define('munnezzassistant-card', MunnezzAssistantCard);