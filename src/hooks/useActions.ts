import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import { allActionCreators } from "../components/store/action-creators";


export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActionCreators, dispatch);
}
