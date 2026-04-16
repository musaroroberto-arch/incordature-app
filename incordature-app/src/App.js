import React, { useState, useEffect } from "react";

export default function App() {
  const [records, setRecords] = useState([]);
  const [form, setForm] = useState({
    data: "", racchetta: "", proprietario: "", corda: "",
    tensione: "", incordatore: "", costo: "",
    pagato: false, overgrip: false, note: ""
  });

  useEffect(() => {
    const saved = localStorage.getItem("incordature");
    if (saved) setRecords(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("incordature", JSON.stringify(records));
  }, [records]);

  const addRecord = () => {
    setRecords([{...form, id: Date.now()}, ...records]);
  };

  return (
    <div style={{padding:20}}>
      <h2>Nuova Incordatura</h2>
      <input type="date" onChange={e=>setForm({...form,data:e.target.value})}/>
      <input placeholder="Racchetta" onChange={e=>setForm({...form,racchetta:e.target.value})}/>
      <button onClick={addRecord}>Aggiungi</button>

      <h2>Storico</h2>
      {records.map(r=>(
        <div key={r.id}>
          {r.data} - {r.racchetta}
        </div>
      ))}
    </div>
  );
}
