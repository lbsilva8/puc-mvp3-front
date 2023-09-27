
import style from './Anime.module.css'
import imagemLixeira from '../../assets/imagemLixeira.png'

export default function Anime() {


const getList = async () => {
    let url = 'http://127.0.0.1:5000/anime';
    fetch(url, {
      method: 'get',
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data)
        data.series.forEach(item => insertList(item.nome, item.status, item.temporada, item.aplicativo, item.categoria))
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
/* Chamada para carregamento inicial dos dados */
getList()

/* Função para inserir items na lista apresentada */
const insertList = (nome, status, temporada, aplicativo, categoria) => {
    var item = [nome, status, temporada, aplicativo, categoria]
    var table = document.getElementById('minhaTabela');
    var row = table.insertRow();
    
    for (var i = 0; i < item.length; i++) {
      var cel = row.insertCell(i);
      cel.textContent = item[i];
    }
    insertButtonClose(row.insertCell(-1))
    removeElement()
  }

  /* Função para criar um botão close para cada item da lista */
const insertButtonClose = (parent) => {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    parent.appendChild(span);
  }

  
/* Função para remover um item da lista de acordo com o click no botão close */
const removeElement = () => {
  let close = document.getElementsByClassName("close");
  let i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement.parentElement;
      const nomeItem = div.getElementsByTagName('td')[0].innerHTML
      if (confirm("Você tem certeza que quer remover esse item definitivamente?")) {
        div.remove()
        deleteItem(nomeItem)
        alert("Item removido com secesso!")
      }
    }
  }
}

/* Função para deletar um item da lista do servidor via requisição DELETE */
const deleteItem = (item) => {
  console.log(item)
  let url = 'http://127.0.0.1:5000/serie?nome=' + item;
  fetch(url, {
    method: 'delete'
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}



return(
    <div className={style.tabela}>
        <h1>Minha lista de Animes</h1>
        
        <section className={style.series}>
            <table id="minhaTabela">
              <tbody>
                <tr>
                    <th><label>Título</label></th>
                    <th>Status</th>
                    <th>Temporada</th>
                    <th>Aplicativo</th>
                    <th id="colunaCategia">Categoria</th>
                    <th><img src={imagemLixeira} alt="icone de lixeira" width="20px" height="20px"></img></th>
                </tr>
                </tbody>
            </table>
        </section>
    </div>
)}