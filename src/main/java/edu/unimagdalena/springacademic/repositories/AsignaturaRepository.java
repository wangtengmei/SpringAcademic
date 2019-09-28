package edu.unimagdalena.springacademic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.unimagdalena.springacademic.entities.Asignatura;

/**
 * AsignaturaRepository
 */
@Repository
public interface AsignaturaRepository extends JpaRepository<Asignatura, Long> {

    
}