package com.product.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {
	@ExceptionHandler(ProductNotFoundException.class)
	public ResponseEntity<String> DrugNotFound(ProductNotFoundException e){
		return new ResponseEntity<String>("Product Does not exist",HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(ProductAlreadyExistException.class)
	public ResponseEntity<String> productAlreadyExist(ProductAlreadyExistException e){
		return new ResponseEntity<String>("Product Already exist",HttpStatus.BAD_REQUEST);
	}
}
