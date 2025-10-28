package com.ciel.blog.user;

import com.ciel.blog.exception.DuplicateUserException;
import com.ciel.blog.exception.InvalidCredentialsException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final SignupMapper signupMapper;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository,  SignupMapper signupMapper,  JwtService jwtService,  PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.signupMapper = signupMapper;
        this.jwtService = jwtService;
        this.passwordEncoder = passwordEncoder;
    }

    public SignupResponseDto createUser(SignupDto dto) {
        User user = signupMapper.toUser(dto);
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        try {
            User createdUser = userRepository.save(user);
            return signupMapper.toSignupResponseDto(createdUser);
        }
        catch (DataIntegrityViolationException e) {
            String message = e.getMostSpecificCause().getMessage();
            if (message.contains("email")) {
                throw new DuplicateUserException("Email already exists");
            }
            else if (message.contains("username")) {
                throw new DuplicateUserException("Username already exists");
            } else {
                throw new DuplicateUserException("User already exists");
            }
        }
    }

    public String generateUserToken(LoginDto dto) {
        User user = findUserByUsername(dto.username());
        boolean matches = passwordEncoder.matches(dto.password(), user.getPassword());
        if (!matches) {
            throw new InvalidCredentialsException("Incorrect password");
        }

        return jwtService.generateToken(user.getUsername());
    }

    public Boolean authenticateUser(String token) {
        boolean authenticated = false;

        if (token != null) {
            try {
                String username = jwtService.extractUsername(token);
                if (findUserByUsername(username) != null && jwtService.validateToken(token, username)) {
                    authenticated = true;
                }
            } catch (Exception e) {
                return false;
            }
        }

        return authenticated;
    }

    public User getCurrentUser(String token) {
        if(authenticateUser(token)) {
            return findUserByUsername(jwtService.extractUsername(token));
        } else  {
            throw new InvalidCredentialsException("Null or incorrect token");
        }
    }

    public User findUserByUsername(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new InvalidCredentialsException("Username not found: " + username));
    }
}
