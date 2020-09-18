import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from './Header.module.css'
import { Button } from '@material-ui/core';

export type HeaderProps={
    children?:string, 
    icon?(className: string): React.ReactElement
    classNameText?: string
    buttons?: Array<{id: number, onClick():void, text: string}>
}

const Header: React.FC<HeaderProps> = ({children, icon, classNameText, buttons}): React.ReactElement =>{
    return (
    <AppBar position="relative" className={styles.appBar}>
        <Toolbar className = {styles.toolbar}>
            {icon && icon(styles.logo)}
            <Typography variant="h5" noWrap className={classNameText} >
                {children}
            </Typography>
            <div className={styles.buttons}>
            {buttons?.map(button=>{
                return (
                <Button onClick={button.onClick}>{button.text}</Button>
                )
            })}
            </div>
        </Toolbar>
    </AppBar>
    );

}

export default Header;