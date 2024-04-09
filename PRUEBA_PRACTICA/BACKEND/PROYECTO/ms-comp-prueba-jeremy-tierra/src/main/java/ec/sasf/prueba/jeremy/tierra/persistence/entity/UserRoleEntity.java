package ec.sasf.prueba.jeremy.tierra.persistence.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@IdClass(UserRoleId.class)
@Table(name = "user_role")
public class UserRoleEntity {
    @Id
    @Column(nullable = false,length = 20)
    private String username;
    @Id
    @Column(nullable = false,length = 50)
    private String role;

    @Column(name = "granted_date",nullable = false)
    private LocalDateTime grantedDate;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "username", referencedColumnName = "username",insertable = false,updatable = false)
    private UserEntity user;


}
