
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
          {/* {val.map((value: any) => (
            <tr key={value.id}>
              <td>{value.nome}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </>
  );
}
