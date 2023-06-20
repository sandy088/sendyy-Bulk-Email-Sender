import { useState } from "react"
import { useDropzone } from "react-dropzone"

const FileUpload = ({ onUpload }) => {
    const [file, setFile] = useState(null)

    const onDrop = (acceptedFiles) => {
        const uploadedFile = acceptedFiles[0]
        setFile(uploadedFile)
        onUpload(uploadedFile)
    }
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()} className="border border-slate-800 p-4 rounded-xl">
            <input {...getInputProps()}/>
            {isDragActive ? (
                <p className=" text-white text-2xl font-semibold">Drop the CSV file here...</p>
            ) : (
                <p className="text-white text-2xl font-semibold">Drag and drop a CSV file here, or click to select a file</p>
            )}
            {file && <p>Selected file: {file.name}</p>}
        </div>
    )
}

export default FileUpload;