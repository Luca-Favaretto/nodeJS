const express = require("express");
const router = express.Router();
const { persone } = require("../persone");

router.get("/", (req, res) => {
  res.status(200).json({ data: persone });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const persona = persone.find(persona => persona.id == id);
  if (!persona) {
    return res.status(404).json({ messaggio: "non trovato", code: 404 });
  }
  res.json({ success: true, data: persona });
});

router.post("/", (req, res) => {
  const nuovaPersona = req.body;

  persone.push(nuovaPersona);

  console.log("Risposta alla richiesta POST:", {
    messaggio: "Persona aggiunta con successo",
    persona: nuovaPersona,
    persone: persone
  });

  res.status(201).json({
    messaggio: "Persona aggiunta con successo",
    persona: nuovaPersona
  });
});
router.put("/:id", (req, res) => {
  const { id } = req.params;

  const updatedPersona = req.body;

  const index = persone.findIndex(persona => persona.id === id);

  if (index !== -1) {
    persone[index] = updatedPersona;
    res.status(200).json({ success: true, updatedPersona });
  } else {
    res.status(404).json({ success: false, message: "Person not found" });
  }
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = persone.findIndex(persona => persona.id === id);
  if (index !== -1) {
    persone.splice(index, 1);
    res
      .status(200)
      .json({ success: true, message: ` persona con id ${id} eliminata` });
    console.log(persone);
  } else {
    res.status(404).json({ success: false, message: "Person not found" });
    console.log(persone);
  }
});

module.exports = router;
