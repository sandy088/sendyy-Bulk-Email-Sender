import React, { useContext} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import { DataContext } from '../../context/DataProvider';

export const QuilText = () => {

    const {mailContent, setMailContent} = useContext(DataContext)
    

   
    
  return (
    <div className=' h-[320px]  w-[95%] mt-3 mx-auto'>
        <ReactQuill theme="snow" value={mailContent} onChange={setMailContent} className=' w-full h-[80%]'/>
    </div>
  )
}
