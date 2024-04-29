import {format, formatDistanceToNow} from 'date-fns'
import {ptBR} from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar.js'
import { Comment } from './Comment.js'
import styles from './Post.module.css'
import {ChangeEvent, FormEvent, InvalidEvent, useState} from 'react'

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string
}

export interface TypePost {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: TypePost;
}

export function Post({post} : PostProps){
    const [comments, setComments] = useState(
        [
            'Muito bem bla bla, parabens bla'
        ])
    
    const [newTextComment, setNewTextComment] = useState ('')    

    const publishedDateFormatted = format(post.publishedAt, "dd 'de' LLLL 'de' yyyy 'as' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR, 
        addSuffix: true
    })

    
   
    function hadleCreatNewComment(event: FormEvent){
        //evita que a pagina seja recarregada tentando redirencionada pra outra pagina
        event.preventDefault()

        setComments([...comments, newTextComment])

        setNewTextComment('')
    }

    function hadleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('')
        setNewTextComment(event.target.value)
    }

    function hadleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('teste')
    }

    function deleteComment(commentToDelete: string) {
        const commentWithoutDeletedOne = comments.filter( comment => {
            return comment !== commentToDelete;
        })

        setComments(commentWithoutDeletedOne)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.autor}>
                    <Avatar hasBorder src={post.author.avatarUrl} />
                    <div className={styles.autorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>
               <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
                 {publishedDateRelativeToNow}
               </time> 
            </header>

            <div className={styles.content}>
                {post.content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link'){
                        return <p key={line.content}><a href='#'>{line.content}</a></p>
                    }
                })}

                <p className={styles.hastege}>
                    <a href="#" target="_blank">#novoprojeto </a>
                    <a href="#" target="_blank">#nlw </a>
                    <a href="#" target="_blank">#rocketseat</a>
                </p>
            </div>

            <form onSubmit={hadleCreatNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name='comment' 
                    placeholder='deixe um comentario'
                    value={newTextComment}
                    onChange={hadleNewCommentChange}
                    onInvalid={hadleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type='submit'>comentario</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                  return  (<Comment
                            key={comment} 
                            content={comment}
                            onDeleteComment={deleteComment}
                            />
                          )
                })}
            </div>
        </article>
    )
}