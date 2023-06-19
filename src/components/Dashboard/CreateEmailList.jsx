import React, { useContext, useState } from 'react'
import FileUpload from './FileUpload'
import { DataContext } from '../../context/DataProvider'

export const CreateEmailList = () => {
    const [emails, setEmails] = useState([])
    const [emailName, setEmailName] = useState([])
    const { createEmailList, authToken } = useContext(DataContext)

    const handleUpload = (file) => {
        const reader = new FileReader()
        reader.onload = () => {
            const csvData = reader.result
            const arrayOfStrings = parseCSV(csvData)
            setEmails(arrayOfStrings)
        }
        reader.readAsText(file)
    }

    const uploadHandler = () => {
        const data = {
            name: emailName,
            emails: emails,
            token: authToken
        }

        createEmailList(data)
    }


    const parseCSV = (csvData) => {

        const lines = csvData.split('\n')
        const arrayOfStrings = lines.flatMap(line => line.split(','))
        // Check if the last element is an empty string and exclude it if true


        const uniqueStrings = [...new Set(arrayOfStrings)]
        // Check if the last element is an empty string and remove it if true
        if (uniqueStrings[uniqueStrings.length - 1] === '') {
            uniqueStrings.pop();
        }
        console.log(uniqueStrings)
        return uniqueStrings
    }

    const onChangeHandler = (e)=>{
        console.log(emailName)
        setEmailName(e.target.value)
    }
    return (
        <div className='flex flex-col justify-center items-center h-screen text-white text-center'>
            <h2>CSV File Upload Here</h2>
            <div>

                <label> Enter Name of Email List
                    <input placeholder='Email List Name' name='name' onChange={onChangeHandler}/>
                </label>
                <FileUpload onUpload={handleUpload} />
                <button className=' bg-purple-800 text-white p-3 rounded-xl mt-3' onClick={uploadHandler}>Create E-mail List</button>

            </div>
        </div>
    )
}
