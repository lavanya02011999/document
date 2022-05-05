package documentsapp.example.documentapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

import documentsapp.example.documentapp.model.Documents;
import documentsapp.example.documentapp.repository.DocRepo;

@RestController
@CrossOrigin(origins="http://localhost:4200")

public class docController {
	
		
		@Autowired
		private DocRepo docRepo;
		
		@GetMapping("/getdoc")
		public List<Documents> getdocs(){
			return docRepo.findAll();
		}
		
		@PostMapping("/adddoc")
		public Documents adddoc(@RequestBody Documents d) {
			return docRepo.save(d);
		}
		
		@GetMapping("/getdocbyid/{id}")
		public Optional<Documents> getdocbyid(@PathVariable int id) {
			return docRepo.findById(id);
		}
		
		
		@DeleteMapping("/deldoc/{id}")
		public void deletedoc(@PathVariable int id) {
			docRepo.deleteById(id);
		
		}
				
		
		
		@PutMapping("/updatedoc/{id}")
		public Documents updateDoc(@PathVariable int id,@RequestBody Documents doc) {
			return docRepo.save(doc);
		}

}
