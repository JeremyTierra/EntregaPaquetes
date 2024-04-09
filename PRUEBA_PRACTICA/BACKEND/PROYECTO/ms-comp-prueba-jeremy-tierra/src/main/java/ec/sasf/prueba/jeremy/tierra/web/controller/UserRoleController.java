package ec.sasf.prueba.jeremy.tierra.web.controller;



import ec.sasf.prueba.jeremy.tierra.persistence.entity.UserRoleEntity;
import ec.sasf.prueba.jeremy.tierra.service.UserRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/roles")
public class UserRoleController {

    @Autowired
    private UserRoleService userRoleService;

    @GetMapping
    public List<UserRoleEntity> getAllUserRoles() {
        return userRoleService.getAllUserRoles();
    }

    @GetMapping("/{username}/{role}")
    public ResponseEntity<UserRoleEntity> getUserRoleById(
            @PathVariable String username,
            @PathVariable String role) {
        return userRoleService.getUserRoleById(username, role)
                .map(userRole -> new ResponseEntity<>(userRole, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<UserRoleEntity> createUserRole(@RequestBody UserRoleEntity userRole) {

        UserRoleEntity createdUserRole = userRoleService.createUserRole(userRole);

        return new ResponseEntity<>(createdUserRole, HttpStatus.CREATED);
    }


    @PutMapping("/{username}/{role}")
    public ResponseEntity<UserRoleEntity> updateUserRole(
            @PathVariable String username,
            @PathVariable String role,
            @RequestBody UserRoleEntity updatedUserRole) {
        try {
            UserRoleEntity modifiedUserRole = userRoleService.updateUserRole(username, role, updatedUserRole);
            return new ResponseEntity<>(modifiedUserRole, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{username}/{role}")
    public ResponseEntity<Void> deleteUserRole(
            @PathVariable String username,
            @PathVariable String role) {
        try {
            userRoleService.deleteUserRole(username, role);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}