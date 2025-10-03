package com.ciel.blog.user;

import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final SignupMapper signupMapper;

    public UserService(UserRepository userRepository,  SignupMapper signupMapper) {
        this.userRepository = userRepository;
        this.signupMapper = signupMapper;
    }

    public SignupResponseDto createUser(SignupDto dto) {
        User user = signupMapper.toUser(dto);
        User createdUser = userRepository.save(user);
        return signupMapper.toSignupResponseDto(createdUser);
    }
}
