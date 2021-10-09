const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

function App() {
  
  const dados = luana;
  const total = dados.compras.map(item => +item.preco.replace('R$ ', '')).reduce(function (valor, valorContador) {
    return valor + valorContador
  })

  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p> Idade: {dados.idade}</p>
      <p>Total Gasto: <span style={{color: dados.ativa ? 'green' : 'red'}}>{total}</span></p>
      <p>Ativa: {dados.ativa ? 'Ativa' : 'Não ativo'}</p>
      {total > 10000 && <p>Você está gastando muito</p>}
    </>
  )

}

export default App;
