import { useState } from "react"
import { useDropzone } from "react-dropzone"
import { FiUpload } from 'react-icons/fi'

const FileUpload = ({ onUpload }) => {
    const [file, setFile] = useState(null)
    const [uploadedFiles, setUploadedFiles] = useState([]);
    

    const onDrop = (acceptedFiles) => {
        setUploadedFiles(acceptedFiles)
        const uploadedFile = acceptedFiles[0]
        setFile(uploadedFile)
        onUpload(uploadedFile)
    }
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()}  className={`relative z-10 border border-gray-700 p-6 px-10 rounded-2xl flex flex-col gap-5 
        
        justify-center items-center transition-all duration-200 cursor-pointer ${isDragActive ? 'bg-[#481f7d] text-white scale-110' : ` bg-slate-800`}  w-[400px] `}>

            <div className='flex justify-end w-full gap-2 absolute right-3 top-3'>

                <div className=' h-3 w-3 bg-orange-700 rounded-full'></div>
                <div className=' h-3 w-3 bg-green-600 rounded-full'> </div>
                <div className=' h-3 w-3 bg-yellow-600 rounded-full'></div>

            </div>


            <input {...getInputProps()} />
            <FiUpload className=' text-2xl' />

            {
                isDragActive ? (<p>Drop now to upload</p>) : (<p>Drag and drop File to upload</p>)
            }


            <ul>
                {uploadedFiles.map((file) => (
                    <li key={file.name}>{file.name}</li>
                ))}
            </ul>


        </div>
    )
}

export default FileUpload;