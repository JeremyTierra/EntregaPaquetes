package ec.sasf.prueba.jeremy.tierra.service;


import ec.sasf.prueba.jeremy.tierra.persistence.entity.UserRoleEntity;
import ec.sasf.prueba.jeremy.tierra.persistence.entity.UserRoleId;
import ec.sasf.prueba.jeremy.tierra.persistence.repository.UserRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class UserRoleService {

    @Autowired
    private UserRoleRepository userRoleRepository;

    public List<UserRoleEntity> getAllUserRoles() {
        return userRoleRepository.findAll();
    }

    public Optional<UserRoleEntity> getUserRoleById(String username, String role) {
        return userRoleRepository.findById(new UserRoleId(username, role));
    }

    public UserRoleEntity createUserRole(UserRoleEntity userRole) {
        userRole.setGrantedDate(LocalDateTime.now());
        return userRoleRepository.save(userRole);
    }

    public UserRoleEntity updateUserRole(String username, String role, UserRoleEntity updatedUserRole) {
        // Verifica si el usuario y el rol existen antes de actualizar
        Optional<UserRoleEntity> existingUserRole = getUserRoleById(username, role);

        if (existingUserRole.isPresent()) {
            updatedUserRole.setUsername(username);
            updatedUserRole.setRole(role);
            return userRoleRepository.save(updatedUserRole);
        } else {
            // Manejo de error si el usuario y el rol no existen
            throw new RuntimeException("No se encontró el UserRoleEntity con username: " + username + " y role: " + role);
        }
    }

    public void deleteUserRole(String username, String role) {
        Optional<UserRoleEntity> existingUserRole = getUserRoleById(username, role);

        if (existingUserRole.isPresent()) {
            userRoleRepository.deleteById(new UserRoleId(username, role));
        } else {
            // Manejo de error si el usuario y el rol no existen
            throw new RuntimeException("No se encontró el UserRoleEntity con username: " + username + " y role: " + role);
        }
    }
}