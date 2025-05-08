# 📦 MunnezzAssistant – Guida all’Installazione via HACS

![Versione](https://img.shields.io/badge/version-1.1.0-blue)
![Compatibilità](https://img.shields.io/badge/Home%20Assistant-2023.0%2B-green)
![Licenza](https://img.shields.io/badge/licenza-MIT-brightgreen)
![Installabile con HACS](https://img.shields.io/badge/HACS-Plancia-blue)

Benvenuto! 🎉  
Questa guida ti accompagna passo passo nell’installazione di **MunnezzAssistant**, la dashboard Lovelace premium per la raccolta differenziata, perfettamente integrata in **Home Assistant**.

---

## ⚙️ Requisiti

✅ Home Assistant aggiornato (consigliato 2023.0 o superiore)  
✅ HACS installato e funzionante  
✅ Connessione internet attiva

---

## 🚀 Installazione tramite HACS

1. **Apri Home Assistant**  
   Vai su: **Impostazioni → Componenti aggiuntivi → HACS**

2. **Aggiungi il repository personalizzato**
   - Vai in **HACS → Integrazioni**
   - Clicca sul menu in alto a destra (⋮) → **Repository personalizzati**
   - Inserisci l’URL:
     ```
     https://github.com/VesuvioCode/munnezzassistant-hacs
     ```
   - Tipo: `Plancia`

3. **Installa MunnezzAssistant**
   - Dopo qualche secondo apparirà nella sezione **Plancia**
   - Clicca su “Installa”

---

## 🖼️ Attiva la dashboard YAML

1. Vai su **Impostazioni → Dashboard → Aggiungi dashboard**
2. Scegli: **Aggiungi da YAML**
3. Inserisci esattamente questo percorso:
   ```
   /local/munnezzassistant/munnezzassistant_dashboard.yaml
   ```

4. Conferma e salva

---

## 🔁 Riavvio (se necessario)

Se non vedi subito la dashboard:  
**Impostazioni → Sistema → Controlli del server → Riavvia**

---

## 📬 Contatti

Per assistenza o segnalazioni, compila il nostro modulo:  
👉 [Contattaci](https://vesuviocode.github.io/munnezzassistant-site/contatti.html)

---

Grazie per aver scelto MunnezzAssistant! 💙  
Il tuo supporto e i tuoi feedback ci aiutano a migliorare.