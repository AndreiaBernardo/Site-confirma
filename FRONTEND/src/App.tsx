import Layout from "./app/public/_components/Layout";
import Rotas from "./app/rotas/Rotas";

import "./styles/global.css";

export default function App() {
  return (
    <>
      <Layout>
        <Rotas />
      </Layout>
    </>
  );
}
