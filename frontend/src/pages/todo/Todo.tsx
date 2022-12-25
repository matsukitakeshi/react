import "../../App.css";
import TitleForm from "../../components/TitleForm"
import AddButton from "../../components/AddButton";
import TodoList from "../../components/TodoList";
import SearchForm from "../../components/SearchForm";

const Todo :React.FC = () => {
    
    return (
        <div>
            <div>
                <TitleForm />
                <AddButton />
            </div>

            <div>
                <SearchForm />
                <TodoList />
            </div>
        </div>
    );
}


export default Todo
