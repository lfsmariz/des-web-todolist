package edu.ufrn.desweb.todolist.repositories;

import edu.ufrn.desweb.todolist.entities.ToDo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ToDoRepository extends JpaRepository<ToDo, Long> {
}
