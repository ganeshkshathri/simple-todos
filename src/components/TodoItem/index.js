import './index.css'

const TodoItem = (props)=>{
    let {title,id,onDeletUser} =props
    
    const letsDelete=()=>{
       
        onDeletUser(id)
    }
   
    return (
        <li class="list-container">
               
                <p className="paragraph">{title}</p>
                <button class="button" onClick={letsDelete} >Delete</button>
        </li>
    )
}
export default TodoItem