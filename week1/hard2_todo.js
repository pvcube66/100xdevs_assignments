/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
      constructor(){
        this.items=[]
    }
    add(todo){
        this.items.push(todo);
    }
    remove(indexOfTodo){
       this.items.splice(indexOfTodo,1);
        
    }
    update(index,updatedTodo){
        this.items[index]=updatedTodo;
    }
    getAll(){
       return this.items;
    }
    get(indexOfTodo){
        return this.items[indexOfTodo];
    }
    clear(){
        this.items.length=0;
    }
}


let test= new Todo();
test.add("wake up early");
test.add("do dsa");
test.add("do development");
test.add("imagine talking with her");
test.add("sleep");
let ans=test.getAll();
// console.log(ans);
// test.remove(3);
// console.log(ans);
// test.clear()
ans=test.getAll();
test.update(3,"call her and talk to her");
console.log(ans)
console.log(test.get(3));

module.exports = Todo;
