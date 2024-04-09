package ec.sasf.prueba.jeremy.tierra.service;

import ec.sasf.prueba.jeremy.tierra.persistence.entity.*;
import ec.sasf.prueba.jeremy.tierra.persistence.repository.UserRepository;
import ec.sasf.prueba.jeremy.tierra.service.dto.RegisterDto;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final UserRoleService userRoleService;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, UserRoleService userRoleService, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.userRoleService = userRoleService;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    public UserEntity saveUser(RegisterDto userRegister) {
        UserEntity user = new UserEntity();

        user.setImage(userRegister.getImage());
        user.setUsername(userRegister.getName());
        user.setEmail(userRegister.getEmail());
        user.setDisabled(false);
        user.setLocked(false);
        user.setPassword(passwordEncoder.encode(userRegister.getPassword()));

        UserEntity savedUser = userRepository.save(user);

        UserRoleEntity userRole = new UserRoleEntity();
        userRole.setUsername(savedUser.getUsername());
        userRole.setRole(userRegister.getRole().name());
        userRoleService.createUserRole(userRole);

        return savedUser;
    }

    public Optional<UserEntity> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public List<UserEntity> findAllUsers() {
        return (List<UserEntity>) userRepository.findAll();
    }

    public List<String> getUserRoles(String username) {
        Optional<UserEntity> userOptional = userRepository.findById(username);

        if (userOptional.isPresent()) {
            UserEntity user = userOptional.get();
            return user.getRoles().stream()
                    .map(userRoleEntity -> userRoleEntity.getRole())
                    .collect(Collectors.toList());
        } else {
            return null;
        }
    }

    @Transactional
    public void deleteUserByUsername(String username) {
        userRepository.deleteByUsername(username);
    }

    @Transactional
    public void updateUser(UserEntity updatedUser) {
        if (!userRepository.existsByUsername(updatedUser.getUsername())) {
            throw new EntityNotFoundException("No se encontró un usuario con el nombre de usuario proporcionado.");
        }
        userRepository.save(updatedUser);
    }
}
