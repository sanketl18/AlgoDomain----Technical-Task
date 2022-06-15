package com.seller.resources;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.seller.models.Product;

@CrossOrigin("*")
@RestController
@RequestMapping("/seller")
public class MainSellerController {
	
	@Autowired
    private RestTemplate restTemplate;
	
	@GetMapping("/viewproducts")
	public List<Object> viewAllProducts(){
		String url = "http://product-service/product/view";
       Object[] product = restTemplate.getForObject(url, Object[].class);
       return Arrays.asList(product);
	}
	
	@GetMapping("/viewbyId/{id}")
	public Object ViewById( @PathVariable long id ) {
		String url = "http://product-service/product/findbyId/"+id;
		 return restTemplate.getForObject(url, Object.class) ;
		
	}
	
	@PostMapping("/addproduct")
	public String addProduct(@RequestBody Product product) {
		String url = "http://product-service/product/add";
		String addedProduct = restTemplate.postForObject(url, product, String.class);
	       return addedProduct;
}
	
  @PutMapping("/editproduct")
  public void updateProduct(@RequestBody Product product ) {
	  String url =  "http://product-service/product/edit";
	  restTemplate.put(url, product);
  }
  
  @DeleteMapping("/deleteproduct/{id}")
  public String deleteProduct(@PathVariable long id) {
	  String url =  "http://product-service/product/delete/{id}";
	  restTemplate.delete(url, id);
	  return "Productdeleted successfully";
  }
  
	  @GetMapping("/viewname/{name}") 
	  public  List<Object> getProductByName(@PathVariable String name) { 
		  String url = "http://product-service/product/findname/" + name; 
		  Object[] product= restTemplate.getForObject(url, Object[].class) ;
		  return Arrays.asList(product);
	  }
	  
	  @GetMapping("/viewtype/{type}") 
	  public List<Object> getProductByType(@PathVariable String type) { 
		  String url = "http://product-service/product/findtype/" + type; 
		  Object[] product= restTemplate.getForObject(url, Object[].class) ;
		  return Arrays.asList(product);
	  }
	  
	  @GetMapping("/viewcategory/{category}") 
	  public List<Object> getProductByCategory(@PathVariable String category) { 
		  String url = "http://product-service/product/findcategory/" + category; 
		  Object[] product= restTemplate.getForObject(url, Object[].class) ;
		  return Arrays.asList(product);
	  }
		  
}

