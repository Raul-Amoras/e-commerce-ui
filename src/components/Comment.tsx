import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar.js'
import {useState} from "react";

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}
export function Comment({content, onDeleteComment}: CommentProps){

    const [countLike, setCountLike] = useState(0)

    function hadleDeleteComment() {
        onDeleteComment(content)
    }

    function hadleLikeComment() {

        setCountLike((state) => {
            return state + 1
        })
    }
    
    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/raul-amoras.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Raul Amoras</strong>
                            <time title='10 de março as 08:13h' dateTime='2024-03-10 08:13:30'>
                                Publicado há 1h
                            </time> 
                        </div>
                        <button onClick={hadleDeleteComment} title="Deletar comentario">
                            <Trash size={24} />
                        </button>   
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={hadleLikeComment}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{countLike}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}