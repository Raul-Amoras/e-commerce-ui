import styles from './Avatar.module.css'
import {ImgHTMLAttributes} from "react";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
}
export function Avatar({hasBorder, ...props}: AvatarProps) {
    return (
        <img className={hasBorder ? styles.avatar : styles.avatarComment} {...props} alt="foto de perfil"/>
    )
}