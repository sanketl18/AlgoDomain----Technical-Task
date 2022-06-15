package com.product.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.product.repository.ProductRepository;
import com.product.models.*;

@SpringBootTest
class ProductServiceTest {

	@Mock
	private ProductRepository productRepository;

	@InjectMocks
	private ProductService productService;

	@Test
	void showAllProductsTest() {
		List<Product> product = new ArrayList<>();

		product.add(new Product(6L, "iphone","mobile","electronics",100000 ));
		product.add(new Product(11L,"Ponds","Talcom Powder","Beauty",100));

		when(productRepository.findAll()).thenReturn(product);
		List<Product> expected = productService.showAllProducts();
		assertEquals(expected, product);
	}
	
	@Test
	public void addDrugTest() throws ParseException {
		Product product = new Product(6L, "iphone","mobile","electronics",100000 );
		when(productRepository.save(product)).thenReturn(product);
		assertEquals(product, productService.saveProduct(product));
	}

	@Test
	void deleteDrugTest() {
		Product product = new Product(6L, "iphone","mobile","electronics",100000 );
		when(productRepository.findById(product.getId())).thenReturn(Optional.of(product));
		productService.deleteProduct(product.getId());
		verify(productRepository).deleteById(product.getId());
	}

	@Test
	public void findByIdTest() {
		Product product = new Product(6L, "iphone","mobile","electronics",100000 );
		productService.saveProduct(product);
		verify(productRepository).findById(product.getId());
	}

	@Test
	public void updateDrugTest() {
		Product product = new Product(6L, "iphone","mobile","electronics",100000 );
		productService.saveProduct(product);
		product.setId(1L);
		product.setName("iphone");
		product.setPrice(100001);
		productService.updateProduct(product );
		Assertions.assertThat(product.getName()).isEqualTo("iphone");
	}
	


}
