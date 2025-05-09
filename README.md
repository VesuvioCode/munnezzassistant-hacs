# MunnezzAssistant

![HACS Badge](https://img.shields.io/badge/HACS-Compatible-blue)
![Version](https://img.shields.io/badge/version-1.2.0-blue)

![Preview](https://raw.githubusercontent.com/VesuvioCode/munnezzassistant-hacs/main/www/munnezzassistant/preview.png)

MunnezzAssistant è una dashboard Lovelace per Home Assistant dedicata alla raccolta differenziata, con:

- ✅ Notifiche vocali Alexa
- ✅ Icone dinamiche
- ✅ Animazione cestino (apertura/chiusura)
- ✅ Pulsanti di conferma raccolta

## 📦 Installazione via HACS

1. Aggiungi il repository: `https://github.com/VesuvioCode/munnezzassistant-hacs`
2. Tipo: Plancia
3. Installa MunnezzAssistant
4. Aggiungi la risorsa:
   ```
   /hacsfiles/munnezzassistant-hacs/dist/munnezzassistant-card.js
   ```
   Tipo: JavaScript Module
5. Aggiungi la card in Lovelace:
   ```yaml
   type: 'custom:munnezzassistant-card'
   entity: sensor.rifiuti_oggi
   ```

## 🔁 Requisiti

- Home Assistant 2023.0 o superiore
- HACS installato