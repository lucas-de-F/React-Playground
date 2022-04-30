import { useSelector, useDispatch } from 'react-redux'
import { setAuth } from "./store";

const useAuth = () => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.user)
    return {
        auth,
        setAuth: (payload) => dispatch(setAuth(payload))
    }
}

export default useAuth