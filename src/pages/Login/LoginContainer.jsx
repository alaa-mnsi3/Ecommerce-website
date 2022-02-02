import {useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
// actions from Auth Slice
import { LogIn } from '../../store/Slices/Auth/AuthSlice';
import {fetchedAuth} from '../../store/Slices/Auth/AuthThunk/getAuthApi';

function LoginContainer() 
{

    const dispatch =useDispatch()
    const [userName,setuserName] = useState('')
    const [password,setPassword] = useState('')
    const {error,enableLogin} = useSelector(state => state.Auth)
    const Navigate = useNavigate()

    // add userName
    const handleUserName=(e)=>
    {
        let value =e.target.value;
        setuserName(value)
    }

    // add Password
    const handlePassword=(value)=>
    {
        setPassword(value)
    }

    // for Login
    const handleSubmit =(e)=>
    {
        e.preventDefault();
        dispatch(LogIn({userName,password}))
        setuserName('')
        setPassword('')
    }

    useEffect(()=>
    {
        dispatch(fetchedAuth())
        setuserName('')
        setPassword('')
    },[])

    useEffect(()=>
    {
        if(enableLogin)
        {
            Navigate('/')
        }
    },[enableLogin])

  return {error,userName,password,handlePassword,handleUserName,handleSubmit};
}

export default LoginContainer;
