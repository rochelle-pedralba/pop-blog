package com.ciel.blog.user;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserApiController {
    private final UserService  userService;

    public UserApiController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping({"/signup"})
    public SignupResponseDto signup(@RequestBody @Valid SignupDto dto) {
        return userService.createUser(dto);
    }
}
