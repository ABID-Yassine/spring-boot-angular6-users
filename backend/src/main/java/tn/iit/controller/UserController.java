package tn.iit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import tn.iit.dao.UserDAO;
import tn.iit.entity.User;

@RestController
@RequestMapping("api/user")
@CrossOrigin(origins = "*", maxAge=0)
public class UserController {

	@Autowired
	private UserDAO userDAO;

	@GetMapping
	public List<User> list() {
		return userDAO.findAll();
	}

	@RequestMapping(method = RequestMethod.POST, consumes="application/json")
	@PostMapping
	public List<User> add(@RequestBody User user) {

		String result;
		if (user.getId() == null) {
			result = " insere";
		} else {
			result = " modifie";
		}
		userDAO.saveAndFlush(user);
		return list();
	}
	
	@GetMapping("/{id}")
	public User showdetail(@PathVariable Integer id) {
		return userDAO.findOne(id);
	}

	@DeleteMapping("/{id}")
	public List<User> delete(@PathVariable Integer id) {
		User p = userDAO.findOne(id);
		userDAO.delete(id);
		return list();
	}

}
