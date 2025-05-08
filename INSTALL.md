# 📦 Guida all’Installazione di MunnezzAssistant via HACS

Benvenuto! 🎉 Questa guida ti accompagna passo passo nell’installazione di **MunnezzAssistant**, la dashboard Lovelace premium per la raccolta differenziata, perfettamente integrata in **Home Assistant**.

---

## ⚙️ Requisiti

✅ Home Assistant aggiornato (consigliato 2023.0 o superiore)  
✅ HACS installato e configurato  
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

## 🔁 Riavvio (se richiesto)

Se non vedi subito la dashboard, **riavvia Home Assistant** da  
**Impostazioni → Sistema → Controlli del server → Riavvia**

---

## 🎯 Fatto!

Ora MunnezzAssistant è installato e pronto per essere utilizzato!  
Avrai:
- Notifiche vocali automatiche
- Grafica premium in stile HomeKit
- Animazioni dinamiche
- Pulsanti “spazzatura conferita”
- Integrazione completa con Lovelace

---

Per domande o supporto → visita il sito ufficiale o contattaci via GitHub.  
Grazie per aver scelto MunnezzAssistant! 💙