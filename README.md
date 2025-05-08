# 🗑️ MunnezzAssistant

Dashboard Lovelace Premium per la raccolta differenziata su Home Assistant.  
Con notifiche vocali su Alexa, animazioni dinamiche del cestino e interfaccia in stile HomeKit / Material Design.

---

![Versione](https://img.shields.io/badge/version-1.2.0-blue)
![Compatibilità](https://img.shields.io/badge/Home%20Assistant-2023.0%2B-green)
![Licenza](https://img.shields.io/badge/licenza-MIT-brightgreen)
![HACS](https://img.shields.io/badge/HACS-Plancia-blue)
![Download](https://img.shields.io/github/downloads/VesuvioCode/munnezzassistant-hacs/v1.2.0/total?style=flat&label=Download)

📜 [Visualizza il changelog](CHANGELOG.md)

---

## 🚀 Funzionalità principali

- 🔔 **Notifiche vocali su Alexa** (es. "Oggi si porta l’umido!")
- 🗑️ **Animazione del cestino** che si apre e si chiude dinamicamente
- 🎨 **Stile chiaro Premium** ispirato a HomeKit e Material Design
- 👤 **Supporto multiutente** con pulsanti di conferma conferimento
- ⚙️ **Gestione completa via YAML** per utenti avanzati
- 📦 **Installabile direttamente da HACS**

---

## 📥 Installazione via HACS

1. Vai in HACS → Integrazioni → Menu (⋮) → Repository personalizzati
2. Inserisci:
   ```
   https://github.com/VesuvioCode/munnezzassistant-hacs
   ```
   Tipo: **Plancia**
3. Installa il pacchetto MunnezzAssistant
4. Aggiungi la risorsa JS:
   ```
   /hacsfiles/munnezzassistant-hacs/dist/munnezzassistant.js
   ```
   Tipo: **JavaScript Module**
5. Aggiungi la card:
   ```yaml
   type: 'custom:munnezzassistant-card'
   entity: sensor.rifiuti_oggi
   ```

---

## 🌐 Link utili

- 🔗 [Sito ufficiale MunnezzAssistant](https://vesuviocode.github.io/munnezzassistant-site/)
- 📬 [Contattaci](https://vesuviocode.github.io/munnezzassistant-site/contatti.html)

---

Grazie per il tuo supporto 💙  
MunnezzAssistant è un progetto open pensato per tutta la community Home Assistant.