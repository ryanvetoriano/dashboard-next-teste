import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Home() {
  const { data, error } = useSWR("http://localhost:5000/api/dashboard", fetcher);

  if (error) return <div>Falha ao carregar</div>;
  if (!data) return <div>Carregando...</div>;

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Dashboard</h1>
      <p>Vendas: {data.vendas}</p>
      <p>Estoque: {data.estoque}</p>
      <p>Faturamento: R$ {data.faturamento}</p>
    </div>
  );
}