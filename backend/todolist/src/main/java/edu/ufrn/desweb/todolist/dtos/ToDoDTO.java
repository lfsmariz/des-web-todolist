package edu.ufrn.desweb.todolist.dtos;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ToDoDTO {
  private String description;

  private boolean done;
}
