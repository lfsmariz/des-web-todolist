package edu.ufrn.desweb.todolist.controllers;

import edu.ufrn.desweb.todolist.entities.ToDo;
import edu.ufrn.desweb.todolist.forms.ToDosForm;
import edu.ufrn.desweb.todolist.services.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todo")
public class ToDoController {

  ToDoService toDoService;

  @Autowired
  public ToDoController(ToDoService toDoService) {
    this.toDoService = toDoService;
  }

  @PostMapping("/setall")
  public String setAll(@RequestBody ToDosForm toDosForm){

    toDoService.setAll(toDosForm);

    return "salvei tudo";
  }

  @PostMapping("/clearall")
  public String clearAll(){

    toDoService.clearAll();

    return "apaguei tudo";
  }

  @GetMapping("/getall")
  public List<ToDo> getAll(){

    return toDoService.getAll();
  }

}
