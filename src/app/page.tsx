"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Inputtext from "@/components/ui/inputText";
import { useState } from "react";

export default function Home() {

  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [data, setData] = useState('');
  const [status, setStatus] = useState('');
  const [processo, setProcesso] = useState('');

  return (
    <>
      <form>
        <div className="row">
          <div className="col">
            <Inputtext name="nome" nome="Nome" type="text" onChange={event => setNome(event.target.value)} />
          </div>
          <div className="col">
            <Inputtext
              name="tipo"
              nome="Tipo"
              type="text"
              list="listaTipo"
              autoComplete="off"
            />
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <Inputtext name="data" nome="Data" type="date" />
              </div>
              <div className="col">
                <Inputtext name="status" nome="Status" type="text" />
              </div>
            </div>
          </div>
          <div className="col">
            <Inputtext
              name="numero"
              nome="Processo"
              type="number"
              autoComplete="off"
            />
          </div>
          <Inputtext name="tesxt" nome="OBS" type="text" autoComplete="off" />
          <button type="submit" className="btn btn-outline-success">
            Salvar
          </button>
        </div>
      </form>
    </>
  );
}
