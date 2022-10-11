import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import Styles from './Post.module.css';


interface Author{
    name: string;
    role: string;
    avatarUrl: string
}

interface Content{
    type: "paragraph" | "link"; // | significa ou
    content: string;
}

export interface PostProps{
    id?: number
    author: Author;
    publisheadAt:Date;
    content: Content[];
}

export function Post({author, publisheadAt, content, id}: PostProps){

     //useState retorna sempre uma arrey com duas posições, 1° recebo o valor 2° recebo uma função
     const [comments, setComments] = useState([
        'Post muito legal, hein!'
    ])

    //Armazena o texto digitado no campo de comentar... Sempre informar o tipo de dado que vai ser entrado ex useState(''), uma string vazia
    const [newCommentText, setNewCommentText] = useState('') 

    

    const publisheadDateFormatted = format(publisheadAt, "d 'de' LLLL 'as' HH:mm'h'",{// pega a data da publicação
        locale: ptBR,
    })

    const publisheadDateRelativeToNow = formatDistanceToNow(publisheadAt, {// quanto tempo a publicação foi feita
        locale:ptBR,
        addSuffix: true,
    })
   
    function handleCreateNewComment(event: FormEvent){
        event.preventDefault()
     
        setComments([...comments, newCommentText]); //Salva o comentário
        setNewCommentText(''); // volta com o valor vazio no campo de comentários
        
    }


    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('')// Atualiza o campo para vazio
        setNewCommentText(event.target.value); // Salva o comentário dentro do estado 'const [newCommentText, setNewCommentText] = useState('')'
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){ //Função que alerta que pecisa ser digitado um valor no campo de texto
        event.target.setCustomValidity('Esse campo é obrigatório')//Pego o item .setCustomValidity no devtools
    }

    function deleteComment(commentToDelete: string){ // Cria uma lista nova sem o comentário que foi excluido
        const commentsWithouDeletedOne = comments.filter(comment =>{
            return comment != commentToDelete;
        })
        setComments(commentsWithouDeletedOne);
    }


    const isNewCommentEmpty = newCommentText.length == 0

    return(
        <article className={Styles.post}>
            <header>
                <div className={Styles.author}>
                    <Avatar hasBorder={true} src={author.avatarUrl}/>
                    <div className={Styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <div>
                    <time title={publisheadDateFormatted} dateTime={publisheadAt.toISOString()}>
                    {publisheadDateRelativeToNow}
                    </time>
                </div>
            </header>

            <div className={Styles.content}>
                {/* Ele vai percorrer cada linha do arrey e pegar os dados */}
                {/* 1° if, se na linha ele encontrar o parametro 'paragraph', ele retorna o conteudo(.content)*/}
                {content.map(line => {
                    if (line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>;
                        {/* e se, na linha for = 'link' ele retorna o conteudo(.content)*/}
                    } else if (line.type === 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={Styles.commenForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name='commment'
                    placeholder='Deixe um comentario'
                    value={newCommentText}
                    onChange={handleNewCommentChange} // Monitora se algum valor entrou na função
                    onInvalid={handleNewCommentInvalid}
                    required // não deixa o usuário publicar sem estar preenchido o campo
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>


            {/* Lista de comentarios importada */}
            <div className={Styles.commentList}>
                {comments.map(comment =>{//percorre na lista de comentarios(comments.map) e para cada comentário(comment =>) ele retorna o componente(<Comment/>)
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} //passa uma propriedade(content) o valor mapeado
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>


        </article>
    )
}

