
# 📦 MunnezzAssistant – Guida all’Installazione (v1.2.0)

Benvenuto! 🎉  
Questa guida ti accompagna passo passo nell’installazione di MunnezzAssistant, la dashboard Lovelace premium per la raccolta differenziata, integrata in Home Assistant.

---

## ⚙️ Requisiti
✅ Home Assistant 2023.0 o superiore  
✅ HACS installato e funzionante  
✅ Connessione internet attiva

---

## 🚀 Installazione tramite HACS

1. Apri Home Assistant  
2. Vai su **HACS > Repositories > + Aggiungi repository personalizzato**

   - URL:
     ```
     https://github.com/VesuvioCode/munnezzassistant-hacs
     ```
   - Tipo: **Plancia**

3. Vai su **HACS > Plancia**  
   Trova **MunnezzAssistant** e clicca su **Installa**

---

## 📂 Aggiungi la risorsa JavaScript (obbligatorio)

Vai su:
**Impostazioni > Dashboard > Risorse** → Clicca su **Aggiungi risorsa**

- URL:
  ```
  /hacsfiles/munnezzassistant-hacs/dist/munnezzassistant-card.js
  ```
- Tipo: **JavaScript Module**

💡 Se non vedi “Risorse”, attiva la modalità YAML nella configurazione delle dashboard.

---

## 🔁 Riavvia Home Assistant

Dopo aver aggiunto la risorsa, riavvia Home Assistant:
- **Impostazioni > Sistema > Controlli del server > Riavvia**

---

## 🖼️ Aggiungi la card alla dashboard

Vai su:
**Modifica dashboard > Aggiungi scheda > Manuale**

E incolla questo codice YAML:
```yaml
type: 'custom:munnezzassistant-card'
entity: sensor.rifiuti_oggi
```

---

## ❓ Problemi comuni

🔴 **Errore: Custom element not found**  
✔️ Verifica che la risorsa JS sia stata aggiunta correttamente  
✔️ Controlla che il file `.js` esista nella cartella:
```
/config/www/community/munnezzassistant-hacs/dist/
```

✔️ Riavvia HA e svuota la cache del browser (`CTRL+F5` o modalità incognito)

---

## 📬 Supporto

Per assistenza o segnalazioni, compila il modulo:  
👉 [Contattaci](https://vesuviocode.github.io/munnezzassistant-site/contatti.html)

Grazie per aver scelto MunnezzAssistant! 💙
