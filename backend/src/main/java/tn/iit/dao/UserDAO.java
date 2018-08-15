package tn.iit.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.iit.entity.User;

@Repository
public interface UserDAO extends JpaRepository<User, Integer> {
}
