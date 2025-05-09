# MunnezzAssistant

![HACS](https://img.shields.io/badge/HACS-Default-blue)
![Version](https://img.shields.io/badge/version-1.2.0-blue)
![HA Version](https://img.shields.io/badge/ha-2023.0.0+-green)

MunnezzAssistant è una dashboard Lovelace per Home Assistant dedicata alla raccolta differenziata, con animazioni, icone dinamiche e supporto a notifiche vocali.

## Installazione

1. Aggiungi il repository personalizzato in HACS.
2. Installa il componente `MunnezzAssistant`.
3. Aggiungi la risorsa JS `/hacsfiles/munnezzassistant-hacs/dist/munnezzassistant-card.js`.
4. Aggiungi una card manuale con:
```yaml
type: 'custom:munnezzassistant-card'
entity: sensor.rifiuti_oggi
```