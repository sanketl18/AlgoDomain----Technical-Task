package com.seller.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seller.models.AuthenticationRequest;
import com.seller.models.AuthenticationResponse;
import com.seller.models.Seller;
import com.seller.repository.SellerRepository;
import com.seller.services.JwtUtils;
import com.seller.services.SellerService;

@CrossOrigin("*")
@RestController
@RequestMapping("/register")
public class SellerController {

	@Autowired
	private SellerRepository sellerRepository;

	@Autowired
	private SellerService sellerService;

	@Autowired
	private JwtUtils jwtUtils;

	@Autowired
	private PasswordEncoder bCryptPasswordEncoder;

	@Autowired
	private AuthenticationManager authenticationManager;

	@PostMapping("/reg")
	private ResponseEntity<?> subscribeClient(@RequestBody AuthenticationRequest authenticationRequest) {
		String name = authenticationRequest.getName();
		String username = authenticationRequest.getUsername();
		String password = authenticationRequest.getPassword();
		String emailid = authenticationRequest.getEmail();
		String contactno = authenticationRequest.getContact();

		String enpwd = bCryptPasswordEncoder.encode(password);
		Seller seller= new Seller();
		seller.setName(name);
		seller.setUsername(username);
		seller.setPassword(enpwd);
		seller.setContact(contactno);
		seller.setEmail(emailid);
		try {
			sellerRepository.save(seller);
		}

		catch (Exception e) {
			return ResponseEntity.ok(new AuthenticationResponse("Error During Auth for Admin " + username));
		}
		return ResponseEntity.ok(new AuthenticationResponse("Successful Auth" + username));
	}

	@PostMapping("/auth")
	private ResponseEntity<?> authenticateClient(@RequestBody AuthenticationRequest authenticationRequest) {
		String username = authenticationRequest.getUsername();
		String password = authenticationRequest.getPassword();

		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (BadCredentialsException e) {
			return ResponseEntity.ok(new AuthenticationResponse("Error while authenticating" + username));
		}

		UserDetails loadedUser = sellerService.loadUserByUsername(username);
		String generatedToken = jwtUtils.generateToken(loadedUser);
		return ResponseEntity.ok((generatedToken));
	}

}