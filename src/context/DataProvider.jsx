import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";


export const DataContext = createContext()

const DataProvider = ({children}) => {

    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        password: "",
        role: "User"
    })

    const [loading, setLoading] = useState(false)

    const signUpClick = async() => {
        setLoading(true)
        toast.loading("Registration in Progress")
        try {
           const data= await axios.post('http://localhost:4000/api/v2/signup', signupData,  {headers: {
            'Content-Type': 'application/json',
            
          }})
          toast.dismiss()
          console.log("Successfully User created✅",data)
          toast.success("Registration successfull")
        } catch (error) {
            console.log(error)
            toast.error("Error while Signing Up")
        }
        
        setLoading(false)
    }

    const onChangeHandler = (e) => {
        console.log(signupData)
        setSignupData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }


    
    const value = {
        signupData,
        setSignupData,
        onChangeHandler,
        signUpClick,
        loading,
        setLoading
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider