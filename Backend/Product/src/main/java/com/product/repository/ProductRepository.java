package com.product.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.product.models.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{
	
	List<Product> findByName(String name);	
	List<Product> findByType(String type);
	List<Product> findByCategory(String category);
}
