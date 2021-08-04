package edu.ufrn.desweb.todolist.services;

import edu.ufrn.desweb.todolist.entities.ToDo;
import edu.ufrn.desweb.todolist.forms.ToDosForm;
import edu.ufrn.desweb.todolist.repositories.ToDoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ToDoService {

  ToDoRepository toDoRepository;

  @Autowired
  ToDoService(ToDoRepository toDoRepository){
    this.toDoRepository = toDoRepository;
  }


  public void setAll(ToDosForm toDosForm) {
    List<ToDo>convertToDo = toDosForm.getTodos()
            .stream().map(e -> new ToDo(e.getDescription(), e.isDone())).collect(Collectors.toList());

    toDoRepository.deleteAll();
    toDoRepository.saveAll(convertToDo);
  }

  public void clearAll() {
    toDoRepository.deleteAll();
  }

  public List<ToDo> getAll() {
    return toDoRepository.findAll();
  }
}
