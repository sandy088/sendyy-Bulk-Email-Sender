import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";



export const DataContext = createContext()

const DataProvider = ({ children }) => {

    const [authToken, setAuthToken] = useState(localStorage.getItem("token")? JSON.parse(localStorage.getItem("token")) : null)

    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        password: "",
        role: "User"
    })

    const [emailsListNames, setEmailsListNames] = useState([])

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })


    
    const [loading, setLoading] = useState(false)

    const [mailContent, setMailContent] = useState('')

    const authClick = async (isLogin = false) => {
        console.log(isLogin)
        setLoading(true)
        isLogin ? toast.loading("Logging In") : toast.loading("Registration in Progress")
        const apiLink = isLogin ? 'https://bulk-email-sender-backend.onrender.com/api/v2/login' : 'https://bulk-email-sender-backend.onrender.com/api/v2/signup'
        const authData = isLogin ? loginData : signupData
        try {
            const data = await axios.post(apiLink, authData, {
                headers: {
                    'Content-Type': 'application/json',

                }
            })
            toast.dismiss()
            console.log(data)
            isLogin? localStorage.setItem("token", JSON.stringify(data.data.token)) : toast.success("Log in now") 
            isLogin && setAuthToken(data.data.token)
            console.log("Successfully User created✅", data)
            isLogin ? toast.success("Logged in successfull") : toast.success("Registration successfull")
        } catch (error) {
            console.log(error)
            toast.error("Error while Signing Up")
        }

        setLoading(false)
    }

    const onChangeHandler = (e, isLogin = false) => {
        console.log("Checking isLogin: ", isLogin)
        isLogin? console.log("LoginData: ",loginData) : console.log(signupData)

        isLogin ? setLoginData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        })) : setSignupData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))


    }

    const setupSMTP = async(smtpData) => {
        console.log(smtpData)

        try {
            const data = await axios.post('https://bulk-email-sender-backend.onrender.com/api/v2/setup-smt', smtpData, {
                headers: {
                    'Content-Type': 'application/json',

                }
            })

            toast.success("SMTP Setup Successfully")
        } catch (error) {
            console.error(error)
            toast.error("Failed to setup SMTP Data")
        }

    }

    const createEmailList = async(data)=>{
        console.log(data)
        try {
            toast.loading("Creating Email List")
            await axios.post('https://bulk-email-sender-backend.onrender.com/api/v2/createEmailList', data, {
                headers: {
                    'Content-Type': 'application/json',
                }})
            toast.dismiss()
            getEmailList()
            toast.success("Email List Created Successfully")
        } catch (error) {
            console.error("Error while creating Email List: ",error)
        }
    }

    const getEmailList= async() =>{
        const data= {
            token: authToken
        }
        console.log(authToken)
        try {
            toast.loading("Loading E-mail Lists")
            const response = await axios.post('https://bulk-email-sender-backend.onrender.com/api/v2/getEmailList', data, {headers: {
                'Content-Type': 'application/json',
            }})

            setEmailsListNames(response.data.data)
            console.log(response.data.data)
            toast.dismiss()
            toast.success("Email List Fetched Successfully")
            
        } catch (error) {
            console.error("Error while Getting Email List Names: ",error)
        }
    }

    const signOut = () => {
        
        setAuthToken(null)
        localStorage.removeItem("token")
        toast.success("Logged Out")
        // Navigate("/")
        
    }



    const value = {
        signupData,
        setSignupData,
        onChangeHandler,
        authClick,
        loading,
        setLoading,
        authToken,
        signOut,
        setupSMTP,
        createEmailList,
        getEmailList,
        emailsListNames,
        mailContent,
        setMailContent
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider