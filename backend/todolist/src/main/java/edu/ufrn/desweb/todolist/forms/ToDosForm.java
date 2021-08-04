package edu.ufrn.desweb.todolist.forms;

import edu.ufrn.desweb.todolist.dtos.ToDoDTO;
import lombok.*;

import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ToDosForm {
  private List<ToDoDTO> todos;
}
