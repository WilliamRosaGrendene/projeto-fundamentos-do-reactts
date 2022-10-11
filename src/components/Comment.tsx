import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import Styles from './Comment.module.css'

interface CommentProps{
    content: string;
    onDeleteComment: (comment:string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps){

    const [likeCount, setLikeCount] = useState(0);//Estadode contagem de likes

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){//Função para marcar os likes dos comentários
        setLikeCount((valorAtual) => {
            return valorAtual + 1
        });
    }

    return(
        <div className={Styles.comment}>
            {/* Enviar uma propiedade(hasBorder) que não quero que tenha um determinado estilização, já que estou utilizando componte <Avatar/> */}
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/114080002?v=4"/>

            <div className={Styles.commentBox}>
                <div className={Styles.commentContent}>
                    <header>
                        <div className={Styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='30 de Setembro ás 11:51h' dateTime='2022-09-30 11:51:30'>Cerca 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'> 
                            <Trash size={24}/> 
                        </button>
                    </header>
                    
                    {/* Esta bucando os cometarios na propriedade criada na lista de comentários no componente post */}
                    <p>{content}</p>
                </div>

                <footer>
                    {/* Em chamadas de onClick evitar colocar execução, ex handleLikeComment() pois deixa o react em looping infinito */}
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}