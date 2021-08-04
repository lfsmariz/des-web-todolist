package edu.ufrn.desweb.todolist.entities;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ToDo {
  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE)
  private Long id;

  private String description;

  private boolean done;

  public ToDo(String description, boolean done) {
    this.description = description;
    this.done = done;
  }
}
