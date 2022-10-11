import { Header } from './components/Header';
import { Post, PostProps } from './components/Post';
import { Siderbar } from './components/Sidebar';

import styles from './App.module.css'
import'./global.css';



//Um arrey[] de objetos{} de todos os posts, 
const posts:PostProps[]= [
  {
    id:1,
    author:{ // Um grupo de objetos{} dentro de author, é o mesmo se tivesse escrio assim author.avatarUrl:'' , author.name:''
      avatarUrl: 'https://avatars.githubusercontent.com/u/114080002?v=4',
      name: 'William Rosa',
      role:'Web Developer'
    },
    content:[ // criado um objeto{} com um tipo type:'paragraph' recebendo o conteudo content:''
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publisheadAt: new Date('2022-10-05 09:00:00'),
  },
  {
    id:2,
    author:{ // Um grupo de objetos{} dentro de author, é o mesmo se tivesse escrio assim author.avatarUrl:'' , author.name:''
      avatarUrl: 'https://avatars.githubusercontent.com/u/76045468?v=4',
      name: 'Carlos Silva',
      role:'Web Developer'
    },
    content:[ // criado um objeto{} com um tipo type:'paragraph' recebendo o conteudo content:''
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publisheadAt: new Date('2022-10-04 09:00:00'),
  },
];

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

      <Siderbar />

      <main>
        {/* Busca os dados na variável posts e retorna o componete Post */}

        {posts.map(post => {
          return (
           <Post
              key={post.id} // sempre que tiver um retorno de lista .map precisa ter uma key={}
              author = {post.author}
              content = {post.content}
              publisheadAt = {post.publisheadAt}
           />
          )
        })}

      </main>
    </div>

   </div>
  )
}

