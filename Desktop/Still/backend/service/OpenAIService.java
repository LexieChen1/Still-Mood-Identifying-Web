package com.still.backend.service;

import okhttp3.*;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class OpenAIService {
    @Value("${openai.api.key}")
    private String apiKey;

    @Value("${openai.api.url}")
    private String apiUrl;

    public String getAdvice(String emotion, String reason) throws Exception {
        OkHttpClient client = new OkHttpClient();

        // Custom healing prompt
        String prompt = String.format("""
You're a supportive emotional professional therapist. 

The user feels: %s  
Because: %s

Give a response with:
1. A validating message
2. three emotional awareness tips
3. three grounding action (like deep breathing)

Respond warmly and clearly.
""", emotion, reason);

        JSONObject message = new JSONObject();
        message.put("role", "user");
        message.put("content", prompt);

        JSONObject body = new JSONObject();
        body.put("model", "gpt-3.5-turbo");
        body.put("messages", new JSONArray().put(message));

        Request request = new Request.Builder()
                .url(apiUrl)
                .post(RequestBody.create(body.toString(), MediaType.get("application/json")))
                .addHeader("Authorization", "Bearer " + apiKey)
                .addHeader("Content-Type", "application/json")
                .build();

        try (Response response = client.newCall(request).execute()) {
            if (!response.isSuccessful()) {
                throw new RuntimeException("OpenAI failed: " + response);
            }

            JSONObject responseBody = new JSONObject(response.body().string());
            return responseBody.getJSONArray("choices")
                               .getJSONObject(0)
                               .getJSONObject("message")
                               .getString("content");
        }
    }
}