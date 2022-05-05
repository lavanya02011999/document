package documentsapp.example.documentapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Documents {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private String docName;
	private String docDescription;
	private String docType;
	private String doc;
	
	


	public Documents(int id, String docName, String docDescription, String docType, String doc) {
		super();
		this.id = id;
		this.docName = docName;
		this.docDescription = docDescription;
		this.docType = docType;
		this.doc = doc;
	}


	public String getDoc() {
		return doc;
	}


	public void setDoc(String doc) {
		this.doc = doc;
	}


	public Documents() {
		super();
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getDocName() {
		return docName;
	}


	public void setDocName(String docName) {
		this.docName = docName;
	}


	public String getDocDescription() {
		return docDescription;
	}


	public void setDocDescription(String docDescription) {
		this.docDescription = docDescription;
	}


	public String getDocType() {
		return docType;
	}


	public void setDocType(String docType) {
		this.docType = docType;
	}
	
	

}
