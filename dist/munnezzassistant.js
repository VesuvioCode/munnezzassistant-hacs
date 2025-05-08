class MunnezzAssistantCard extends HTMLElement {
  set hass(hass) {
    if (!this.content) {
      const card = document.createElement('ha-card');
      card.header = this.config.title || "MunnezzAssistant";

      const style = document.createElement('style');
      style.textContent = `
        .cestino-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
        }
        .cestino {
          width: 100px;
          height: 100px;
          background: url('/local/munnezzassistant/cestino-chiuso.svg') center/contain no-repeat;
          transition: background-image 0.5s ease-in-out;
        }
        .cestino.aperto {
          background-image: url('/local/munnezzassistant/cestino-aperto.svg');
        }
        @keyframes apriChiudi {
          0%, 100% { background-image: url('/local/munnezzassistant/cestino-chiuso.svg'); }
          50% { background-image: url('/local/munnezzassistant/cestino-aperto.svg'); }
        }
        .cestino.fallback {
          animation: apriChiudi 3s infinite;
        }
      `;

      this.content = document.createElement('div');
      this.content.className = "cestino-container";

      this.cestino = document.createElement('div');
      this.cestino.className = "cestino";

      this.content.appendChild(this.cestino);
      card.appendChild(style);
      card.appendChild(this.content);
      this.appendChild(card);
    }

    const entity = this.config.entity;
    if (entity && hass.states[entity]) {
      const stato = hass.states[entity].state;
      this.cestino.classList.remove("fallback");
      if (stato !== "off" && stato !== "nessun conferimento") {
        this.cestino.classList.add("aperto");
      } else {
        this.cestino.classList.remove("aperto");
      }
    } else {
      this.cestino.classList.add("fallback");
    }
  }

  setConfig(config) {
    if (!config) return;
    this.config = config;
  }

  getCardSize() {
    return 3;
  }
}

customElements.define('munnezzassistant-card', MunnezzAssistantCard);