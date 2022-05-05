package documentsapp.example.documentapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import documentsapp.example.documentapp.model.Documents;
@Repository
public interface DocRepo extends JpaRepository<Documents, Integer>{

}
