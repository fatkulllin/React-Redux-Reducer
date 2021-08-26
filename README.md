# React-Reduc-Reducer
State, reducer, action + redux hooks (useDispatch, useSelector)

## -------
создается store. 
Action - js-объект у которого есть поля type и какие-то данные
action = {type: “”, payload:””}

state (состояние)  - некий объект, который хранит данные.

Создаем reducer. Reducer - простая функция. Принимает два параметра. Первым параметром принимает состояние (state) и action. 
В reduce будет логика, что какой тип action-a будем обрабатывать. Если такого типа нету, то возвращаем исходное состояние(state), т.е. неизменное.

const reducer = (state, action) =>{
	switch(action.type){
	default:
	      return state
}}

State( состояние) - объект, в котором есть поля.

const defaultState ={
	cash:0,
}

Для использования redux в компонентах, в Provider отправляем параметром наш store.
<Provider store={store} >
<App/>
<Provider/>


