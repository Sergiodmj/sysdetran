export default function inputtext(props: any) {
  return (
    <div className="mb-3">
      <label className="form-label">{props.nome}</label>
      <div className="input-group">
        <input
          className="form-control"
          list={props.list}
          autoComplete={props.autoComplete}
          type={props.type}
          name={props.name}
          onBlur={props.onBlur}
          value={props.value}
          onChange={props.onChange}
        />
        <datalist id="listaTipo">
          <option value="1 EMPLACAMENTO" />
          <option value="2 VIA DO RECIBO" />
          <option value="AQUISIÇÃO DE VEÍCULO" />
          <option value="ALTERAÇÃO DE DADOS" />
          <option value="AUTORIZAÇÃO DE CIR DE VEI ESCOLAR" />
          <option value="BAIXA DE VEÍCULO" />
          <option value="CANCELA COMUNICADO DE VENDA" />
          <option value="COMPRA COM TROCA" />
          <option value="COMUNICADO DE VENDA" />
          <option value="REGISTRO DE OUTRO ESTADO" />
          <option value="VISTORIA" />
        </datalist>
      </div>
      <div className="form-text" id="basic-addon4">
        {props.descrition}
      </div>
    </div>
  );
}
