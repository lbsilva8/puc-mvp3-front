import style from './Home.module.css'

export default function Home() {   

  return (
              <div className={style.home}>
                  <section>
                      <div>
                          <div className={style.titulo}>
                              <h1>.</h1>
                          </div>
                          <div className={style.corpo}>
                              <p> Seja bem vindo a sua página de desejos:
                              </p><p>
                              Aqui você vai encontrar de tudo um pouco, séries, filmes, animes, doramas e que mais quiser colocar
                              </p><p> 
                                  Fique livre para explorar e aguarde nossas atualizações. 
                              </p>
                          </div>
                      </div>
                  </section>
              </div>
      )
  }

