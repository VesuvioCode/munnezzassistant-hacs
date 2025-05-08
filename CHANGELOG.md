# 📦 CHANGELOG - MunnezzAssistant

Tutte le modifiche apportate al progetto sono documentate qui. Questo file segue il formato [Keep a Changelog](https://keepachangelog.com/it/1.0.0/).

---

## [v1.2.0] - 2025-05-08

### 🚀 Aggiunto
- ✅ **Supporto completo per HACS**: ora il pacchetto può essere installato senza errori tramite interfaccia grafica.
- 🗑️ **Animazione cestino**: il cestino si apre e si chiude dinamicamente a seconda dello stato (nuovo file `munnezzassistant.js` compilato).
- 🆕 **File `INSTALL.md`**: guida dettagliata e professionale all’installazione, inclusa nel repository.
- 📄 **CHANGELOG.md**: questo file di log delle versioni.
- 📬 **Collegamento al form contatti**: sostituito l'indirizzo email visibile con collegamento diretto al modulo `contatti.html`.
- 🖼️ **Logo premium dedicato alla release**: incluso per supporti grafici e badge.

### 🔧 Modificato
- 📁 Struttura del repository corretta e riorganizzata secondo lo standard HACS per frontend Lovelace (`dist/`, `www/`, `hacs.json` aggiornato).
- 📝 `README.md` aggiornato con link diretti e istruzioni più chiare.
- 🌐 `index.html` aggiornato con link e grafica responsive coerente.

### 🐛 Corretto
- ❌ Errore “Repository structure not compliant”: risolto con file `hacs.json` e struttura valida.
- ❌ Errore “Custom element not found”: risolto con caricamento del file JavaScript corretto in `dist/`.

---

## [v1.1.0] - 2025-05-07

- Prima release pubblica con dashboard YAML, animazioni statiche e stile chiaro HomeKit.
- Struttura iniziale GitHub Pages per il sito ufficiale.

---

## 🔜 In arrivo
- ⚙️ Pannello di configurazione integrato (GUI).
- 🔔 Notifiche push configurabili via interfaccia.
- 🌍 Traduzione multilingua (IT/EN).
