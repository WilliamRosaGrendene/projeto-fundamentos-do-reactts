import {ImgHTMLAttributes} from 'react'
import Styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder: boolean;
       
}

export function Avatar({hasBorder = true, ...props}:AvatarProps){
    return(
        <img //estrutura do if e else, se o componente tiver (hasBorder) aplica a estilização com borda, caso não aplica a sem borda
        className={hasBorder ? Styles.avatarWithBorder : Styles.avatar}
        {...props}
        />
    )
}