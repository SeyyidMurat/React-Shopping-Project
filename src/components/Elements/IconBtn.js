import React from 'react'
import cn from "classnames"


const IconBtn = ({ children, className, onClick }) => {
    return (
        <span className={cn("icon__btn", className)} onClick={onClick}  >
            {children}
        </span>
    )
}




export default IconBtn

