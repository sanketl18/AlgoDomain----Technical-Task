package com.product.resources;

import java.util.List;
import java.util.Optional;

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

import com.product.models.Product;
import com.product.service.ProductService;

@CrossOrigin("*")
@RestController
@RequestMapping("/product")
public class ProductController {

	@Autowired
	private ProductService productService;

	@GetMapping("/view")
	public List<Product> show() {
		return productService.showAllProducts();
	}

	@PutMapping("/edit")
	public Product updateProduct(@RequestBody Product Product) {
		return productService.updateProduct(Product);
	}

	@PostMapping("/add")
	public Product addProduct(@RequestBody Product product) {
		return productService.saveProduct(product);
	}

	@DeleteMapping("/delete/{id}")
	public String deleteProduct(@PathVariable long id) {
		productService.deleteProduct(id);
		return "Product deleted successfully";
	}
	
	@GetMapping("/findname/{name}")
	public List<Product> findProductByName(@PathVariable String name){
		return productService.searchByName(name);
	}
	
	@GetMapping("/findtype/{type}")
	public List<Product> findProductByType(@PathVariable String type){
		return productService.searchByType(type);
	}
	
	@GetMapping("/findcategory/{category}")
	public List<Product> findProductByCategory(@PathVariable String category){
		return productService.searchByCategory(category);
	}
	
	@GetMapping("/findbyId/{id}")
	public Optional<Product> findbyid(@PathVariable long id) {
		return productService.findProductById(id);
		
	}
}
