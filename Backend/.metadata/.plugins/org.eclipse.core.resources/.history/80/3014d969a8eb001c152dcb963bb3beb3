package com.seller.repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.seller.models.Seller;


@Repository
public interface SellerRepository extends MongoRepository<Seller,String> {
	Seller findByUsername(String username);
}
