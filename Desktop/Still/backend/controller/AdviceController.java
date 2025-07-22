package com.still.backend.controller;

import com.still.backend.service.OpenAIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/advice")
public class AdviceController {

    @Autowired
    private OpenAIService openAIService;

    @PostMapping
    public Map<String, String> getAdvice(@RequestBody Map<String, String> input) throws Exception {
        String emotion = input.get("emotion");
        String reason = input.get("reason");

        String response = openAIService.getAdvice(emotion, reason);
        return Map.of("advice", response);
    }
}
