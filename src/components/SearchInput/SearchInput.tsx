import * as React from 'react'
import styles from './SearchInput.module.css'
import cn from 'clsx'
import { FormControl, OutlinedInput, InputAdornment, InputLabel, Button } from '@material-ui/core'

export type SearchInputProps = {
    handleSearch(text: string, text2: string): void,
    lable?: string
    lable2?: string
    lableWidth?: number
    lableWidth2?: number
    buttonText: string
    className?:string
    classNameLable?:string
    classNameButton?: string
}

const SearchInput: React.FC<SearchInputProps> = ({handleSearch, lable, lable2, lableWidth = 60,lableWidth2 = 60, buttonText, className, classNameLable, classNameButton}): React.ReactElement =>{
    const [text, setText] = React.useState('');
    const [text2, setText2] = React.useState('');
    
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setText(event.target.value as string);
    }
    const handleChange2 = (event: React.ChangeEvent<{ value: unknown }>) => {
        setText2(event.target.value as string);
    }

    const handleSubmit = () =>{
        return ()=>{handleSearch(text, text2)}
    }

    return(
        <div className={cn(styles.form, className)}>
        <FormControl className = {styles.input} fullWidth variant="outlined" size='small'>
        {lable && <InputLabel className={classNameLable} htmlFor="text">{lable}</InputLabel>}
        <OutlinedInput
            id="text"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            labelWidth={lableWidth}
            value = {text}
            onChange = {handleChange}
            autoComplete ='off'
        />
        </FormControl>
        {lable2 && <FormControl fullWidth variant="outlined" size='small' className = {styles.input}>
        <InputLabel className={classNameLable} htmlFor="text2">{lable2}</InputLabel>
        <OutlinedInput
            id="text2"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            value = {text2}
            labelWidth={lableWidth2}
            onChange = {handleChange2}
            autoComplete ='off'
        /></FormControl>
        }
        <Button className={cn(styles.submit, classNameButton)} onClick={handleSubmit()}>
            {buttonText}
        </Button>
        </div>
    )
}

export default SearchInput