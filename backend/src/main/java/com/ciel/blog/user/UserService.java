package com.ciel.blog.user;

import com.ciel.blog.exception.InvalidCredentialsException;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final SignupMapper signupMapper;
    private final JwtService jwtService;

    public UserService(UserRepository userRepository,  SignupMapper signupMapper,  JwtService jwtService) {
        this.userRepository = userRepository;
        this.signupMapper = signupMapper;
        this.jwtService = jwtService;
    }

    public SignupResponseDto createUser(SignupDto dto) {
        User user = signupMapper.toUser(dto);
        User createdUser = userRepository.save(user);
        return signupMapper.toSignupResponseDto(createdUser);
    }

    public String authenticateUser(LoginDto dto) {
        User user = findUserByUsername(dto.username());
        if (!user.getPassword().equals(dto.password())) {
            throw new InvalidCredentialsException("Incorrect password");
        }

        return jwtService.generateToken(user.getUsername());
    }

    public User findUserByUsername(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new InvalidCredentialsException("Username not found: " + username));
    }
}
