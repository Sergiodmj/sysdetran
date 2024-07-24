import { revalidateTag } from "next/cache";
import Inputtext from "@/components/ui/inputText";

export default function Home() {
  // Recebe os dados do dormulario
  async function salvar(form: FormData) {
    "use server";

    //Converte os dados em um objeto do next
    const data = Object.fromEntries(form);

    // Faz uma requisição POST pasa a rota
    await fetch("https://sysdetran-default-rtdb.firebaseio.com/", {
      //Informa o metodo que esta usando
      method: "POST",
      body: JSON.stringify(data), //encaminha o objeto para a rota como JSON.
    });

    console.log(data);

    //Indica qual o componente deve ser atualizado depois da execução da função
    // revalidateTag("tabela-cliente");
  }

  return (
    <>
      <form action={salvar} method="POST">
        <div className="row">
          <div className="col">
            <Inputtext name="nome" label="Nome" type="text" />
          </div>
          <div className="col">
            <Inputtext
              name="tipo"
              label="Tipo"
              type="text"
              list="listaTipo"
              autoComplete="off"
            />
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <Inputtext name="datahj" label="Data" type="date" />
              </div>
              <div className="col">
                <Inputtext name="status" label="Status" type="text" />
              </div>
            </div>
          </div>
          <div className="col">
            <Inputtext
              name="processo"
              label="Processo"
              type="number"
              autoComplete="off"
            />
          </div>
          <Inputtext name="obs" label="OBS" type="text" autoComplete="off" />
          <button type="submit" className="btn btn-outline-success">
            Salvar
          </button>
        </div>
      </form>
    </>
  );
}
