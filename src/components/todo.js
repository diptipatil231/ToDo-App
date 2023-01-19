import React, { useState } from 'react'
import todo from "../images/todo.svg";

const Todo = () => {
  const [inputData,setInputData] = useState('');
  const [Items, setItems] = useState([]);
  const [toggleSubmit, settoggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const addItem = () =>{
    if(!inputData){
      alert('plzz Enter ToDo first!');
    }
    else if(inputData && !toggleSubmit) {
      setItems(
          Items.map((elem) => {
              if (elem.id === isEditItem) {
                  return { ...elem, name: inputData }
              }
              return elem;
          })
      )
           settoggleSubmit(true);

           setInputData('');

           setIsEditItem(null);
  }
    else{
      const allinputdata ={d: new Date().getTime().toString(), name:inputData }
      {/*Spread Operator*/}
      setItems([... Items,allinputdata])
      setInputData('')
    }
    
  }


  // edit the item
//     When user clikc on edit button 

// 1: get the id and name of the data which user clicked to edit
// 2: set the toggle mode to change the submit button into edit button
// 3: Now update the value of the setInput with the new updated value to edit. 
// 4: To pass the current element Id to new state variable for reference 

  
  const editItem = (id) => {
    let newEditItem = Items.find((elem) => {
        return elem.id === id
    });
    console.log(newEditItem);
    settoggleSubmit(false);
    setInputData(newEditItem.name);
    setIsEditItem(id);
  }



  const deleteItem = (index) =>{
    console.log('index');
    const updatedItem = Items.filter((elem) => {
      return index !== elem.id
    });
    setItems(updatedItem);
  }

  const removeAll = () => {
    setItems([]);
}

 


  return (
    <>
     <div class="w-32 p-3 mx-auto filter drop-shadow-md main-div">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="todologo" />
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>
                    <div className='addItems'>
                        <input type="text" placeholder='✍ Add Items...'
                          value={inputData}
                          onChange={(e) => setInputData(e.target.value)}
                        />
                        {
                          toggleSubmit ? <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i> :
                          <i className="far fa-edit add-btn" title="update Item" onClick={addItem}></i>
                        }
                        
                    </div>


                    <div className='showItems'>
                      {
                        Items.map((elem)=>{
                          return(
                            <div className='eachItem' key={elem.id}>
                              <h3>{elem.name }</h3>
                              <div className='todo-btn'>
                                <i className="far fa-edit add-btn" title="Edit Item" onClick={() => editItem(elem.id)}></i>
                                <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={()=>deleteItem(elem.id)}></i>
                              </div>
                            </div>

                          )
                        })
                      }
                      

                    </div>
                    <div className='showItems'>
                      <button className='btn effect04' data-sm-link-test ="Remove All" onClick={removeAll}>
                        <span>
                          Check List
                        </span>
                      </button>

                    </div>
        </div>

    </div>
    <footer class="footer mt-auto py-4 text-xs bg-gray-700 text-gray-600 ">
      <div class="flex justify-center items-center min-w-min">
        <p class="text-center text-gray-200  mx-4">©Dipti Patil 2023 </p>
        <a href="https://github.com/diptipatil231">
          <i class="fab fa-github text-gray-400 hover:text-white mx-4 text-xl"></i></a>
          <a href="https://www.linkedin.com/in/dipti-patil-4a61901b5/">
              <i class="fab fa-linkedin text-gray-400 hover:text-white mx-4 text-xl"></i></a>
          <a href="https://www.instagram.com/_dipti21._/">
              <i class="fab fa-instagram text-gray-400 hover:text-white mx-4 text-xl"></i></a>
      </div>
    </footer>
    </>
  )
}

export default Todo
