package ec.sasf.prueba.jeremy.tierra.web.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableMethodSecurity(securedEnabled = true)
public class SecurityConfig {
    private final JwtFilter jwtFilter;
@Autowired
    public SecurityConfig(JwtFilter jwtFilter) {
        this.jwtFilter = jwtFilter;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .cors().and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                .authorizeHttpRequests()
                .requestMatchers("/api/auth/login").permitAll()
                .requestMatchers(HttpMethod.POST,"/api/users").permitAll()
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/adoptions/**").hasAnyRole("ADMIN","USER")
                .requestMatchers("/api/customers/**").hasAnyRole("ADMIN","USER")
                .requestMatchers("/api/fichas-ingreso/**").permitAll()
                .requestMatchers("/api/users/**").permitAll()
                .requestMatchers("/api/roles/**").permitAll()
                .requestMatchers("/api/paquetes/**").permitAll()
                .requestMatchers("/api/rutas-entrega/**").permitAll()
                .requestMatchers(HttpMethod.POST,"/api/animals/**").hasAnyRole("ADMIN")
                .requestMatchers(HttpMethod.PUT,"/api/animals/**").hasAnyRole("ADMIN")
                .requestMatchers("/api/animals/**").hasAnyRole("ADMIN","USER")
                .requestMatchers(HttpMethod.PUT).hasAnyRole("ADMIN","USER")
                .anyRequest()
                .authenticated()
                .and()
                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
                return http.build();

    }


   @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }
@Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

}
