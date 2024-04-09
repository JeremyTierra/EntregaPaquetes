package ec.sasf.prueba.jeremy.tierra.service.dto;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class RegisterDto {
    @NotBlank(message = "El nombre no puede estar en blanco")
    private String name;


    @Email(message = "El formato del correo electrónico no es válido")
    @NotBlank(message = "El correo electrónico no puede estar en blanco")
    private String email;

    @Size(min = 6, message = "La contraseña debe tener al menos 6 caracteres")
    private String password;

    private String image;
    private String office;
    private Role role;


    public enum Role {
        ADMINISTRADOR,
        REPARTIDOR,
        SECRETARIA
    }


}
