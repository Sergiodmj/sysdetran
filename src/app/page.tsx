import Form from "./pages/form/page";

import NFinalizados from "./pages/nFinalizado/page";

export default function Home() {
  return (
    <>
      <div className="row">
        <Form />
        <NFinalizados />
      </div>
    </>
  );
}
