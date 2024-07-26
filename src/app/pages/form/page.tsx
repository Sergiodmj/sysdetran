"use client";

import Inputtext from "@/components/ui/inputText";
import { SetStateAction, useState } from "react";

export default function Form() {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [datahj, setDatahj] = useState("");
  const [numero, setNumero] = useState("");
  const [status, setStatus] = useState("");
  const [obs, setObs] = useState("");

  return (
    <>
      <div className="row">
        <div className="col">
          <Inputtext
            name="nome"
            label="Nome"
            type="text"
            value={nome}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setNome(e.target.value)
            }
          />
        </div>
        <div className="col">
          <Inputtext
            name="tipo"
            label="Tipo"
            type="text"
            list="listaTipo"
            autoComplete="off"
            value={tipo}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setTipo(e.target.value)
            }
          />
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <Inputtext
                name="datahj"
                label="Data"
                type="date"
                value={datahj}
                onChange={(e: { target: { value: SetStateAction<string> } }) =>
                  setDatahj(e.target.value)
                }
              />
            </div>
            <div className="col">
              <Inputtext
                name="status"
                label="Status"
                type="text"
                value={status}
                onChange={(e: { target: { value: SetStateAction<string> } }) =>
                  setStatus(e.target.value)
                }
              />
            </div>
          </div>
        </div>
        <div className="col">
          <Inputtext
            name="processo"
            label="Processo"
            type="text"
            autoComplete="off"
            value={numero}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setNumero(e.target.value)
            }
          />
        </div>
        <Inputtext
          name="obs"
          label="OBS"
          type="text"
          autoComplete="off"
          value={obs}
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setObs(e.target.value)
          }
        />
        <button className="btn btn-outline-success">Salvar</button>
      </div>
    </>
  );
}
