import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state=>state.cash)

  const addCash = ()=>{
    dispatch({type:"ADD_CASH", payload:5})
  }
  const getCash = ()=>{
    dispatch({type:"GET_CASH", payload:5})
  }

  return (
    <div className="content">
      <p>{cash}</p>
      <div className="buttons">
        
        <button onClick={()=>addCash()}>Добавить денег</button>
        <button onClick={()=>getCash()}>Уменьшить денег</button>
      </div>
    </div>
  )

}

export default App;
