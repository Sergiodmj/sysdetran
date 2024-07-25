export default function NFinalizados() {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>NOME</th>
            <th>PROCESSO</th>
            <th>TIPO</th>
            <th>DATA</th>
            <th>STATUS</th>
            <th>OBS</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <th scope="row">1</th>
            <th scope="row">1</th>
            <th scope="row">1</th>
            <th scope="row">1</th>
            <th scope="row">1</th>
            <th scope="row">1</th>
          </tr>
          <tr>
            <th scope="row">1</th>
            <th scope="row">1</th>
            <th scope="row">1</th>
            <th scope="row">1</th>
            <th scope="row">1</th>
            <th scope="row">1</th>
          </tr>
          {/* {data.map((data: any) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.first_name}</td>
                <td>{data.last_name}</td>
                <td>{data.email}</td>
                <td>{data.document}</td>
                <td>
                  <button>Alterar</button>
                </td>
                <td>
                  <form action={deleteCliente} method="POST">
                    <input type="hidden" name="id" value={data.id} />
                    <button type="submit">Excluir</button>
                  </form>
                </td>
                <td>
                  <form action={AlteraCliente} method="POST">
                    <input type="hidden" name="id" value={data.id} />
                    <input
                      type="text"
                      name="nome"
                      defaultValue={data.first_name}
                    />
                    <input name="sobrenome" defaultValue={data.last_name} />
                    <input name="email" defaultValue={data.email} />
                    <button type="submit">Alterar</button>
                  </form>
                </td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </>
  );
}
