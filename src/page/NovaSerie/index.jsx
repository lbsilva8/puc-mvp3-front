import style from './NovaSerie.module.css'


export default function NovaSerie() {

  const postSerie = async (inputSerie, inputStatus, inputTemporada, inputAplicativo,inputCategoria) => {
  const formData = new FormData();
  formData.append('nome', inputSerie);
  formData.append('status', inputStatus);
  formData.append('temporada', inputTemporada);
  formData.append('aplicativo', inputAplicativo);
  formData.append('categoria', inputCategoria);
  
  let url = 'http://127.0.0.1:5000/serie';
  fetch(url, {
    method: 'post',
    body: formData
  })
    .then((response) => {
      if (response.status == 200){
        insertList(inputSerie, inputStatus, inputTemporada, inputAplicativo,inputCategoria)
      response.json()
      alert("Item adicionado com secesso!")
      }else if (response.status == 409){
        alert("Item de mesmo nome já cadastrado.")
      }})
    .catch((error) => {
      console.error('Error:', error);
    });
}

const adicionarSerie = () => {
  let inputSerie = document.getElementById("novaSerie").value;
  let inputStatus = document.getElementById("status").value;
  let inputTemporada = document.getElementById("novaTemporada").value;
  let inputAplicativo = document.getElementById("novoAplicativo").value;
  let inputCategoria = document.getElementById("novaCategoria").value;
  
  if (inputSerie === '') {
    alert("Informe o título de uma série/filme!");
  } else if (inputTemporada === ''){
    alert("Informe a temporada da série.")
  } else if (isNaN(inputTemporada)) {
    alert("Temporada precisa estar no formato de número!");
  } else {
    postSerie(inputSerie, inputStatus, inputTemporada,inputAplicativo,inputCategoria)
  }
}


return (
  <main>
    <div className={style.fundo}>    
    <form onSubmit={adicionarSerie} >
        <div className={style.formulario}>
    
          <label>Nome: </label>
          <input type='text' id="novaSerie" name='nome' placeholder='Digite o nome da Série' /><br /><br />

          <label>Status: </label>
          <input type='text' id="status" name='status' placeholder='Digite o status' /><br /><br />
              
          <label>Temporada: </label>
          <input type='number' id="novaTemporada" name='temporada' placeholder='Digite a temporada' /><br /><br />

          <label>Aplicativo: </label>
          <input type='text' id="novoAplicativo" name='aplicativo' placeholder='Digite o aplicativo'  /><br /><br />

          <label>Categoria: </label>

          <select id="novaCategoria">
            <option value="serie">serie</option>
            <option value="anime">anime</option>
            <option value="manga">filme</option>
          </select>

          <div className={style.botao}>
          <input type="submit" value="Enviar" />
          </div>
    
        </div>
      </form>
      </div>  
  </main>
  )}