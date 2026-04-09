/**
 * Configuration for local AI (LM Studio)
 */
const AI_CONFIG = {
  BASE_URL: "http://localhost:1234/v1/chat/completions",
  MODEL: "local-model",
  DEFAULT_TEMPERATURE: 0.7,
};

/**
 * Generic helper for calling the local OpenAI-compatible API.
 */
async function callLocalAI(
  messages: { role: string; content: string }[],
  temperature = AI_CONFIG.DEFAULT_TEMPERATURE,
) {
  try {
    const response = await fetch(AI_CONFIG.BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: AI_CONFIG.MODEL,
        messages,
        temperature,
      }),
    });

    if (!response.ok) {
      throw new Error(`AI Request failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error("AI API Error:", error);
    throw error;
  }
}

/**
 * Attempts to parse a JSON array or object from a string that might contain markdown blocks.
 */
function parseAIJson<T>(content: string): T | null {
  try {
    const jsonMatch = content.match(/(\{.*\}|\[.*\])/s);
    const jsonStr = jsonMatch ? jsonMatch[0] : content;
    return JSON.parse(jsonStr);
  } catch (e) {
    console.error("Failed to parse AI response as JSON:", content);
    return null;
  }
}

// --- AI Features ---

/**
 * Calls LM Studio with raw input and returns the response text.
 */
export async function fetchRawAIResponse(input: string): Promise<string> {
  return callLocalAI([
    {
      role: "user",
      content: input,
    },
  ]);
}

/**
 * Legacy wrapper for task expansion (raw text version).
 */
export async function fetchTaskExpansionText(input: string): Promise<string> {
  return fetchRawAIResponse(input);
}

/**
 * Calls LM Studio for task expansion and parses bullet points.
 */
export async function fetchTaskExpansion(input: string): Promise<string[]> {
  const content = await fetchRawAIResponse(input);

  // Parse bullet points
  const tasks = content
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("-"))
    .map((line) => line.replace(/^-\s*/, "").trim())
    .filter((line) => line.length > 0);

  if (tasks.length === 0) {
    const jsonTasks = parseAIJson<string[]>(content);
    if (Array.isArray(jsonTasks)) {
      return jsonTasks.filter((t) => typeof t === "string");
    }
    throw new Error("INVALID_FORMAT");
  }

  return tasks;
}

/**
 * Calls LM Studio for a briefing/information.
 */
export async function fetchTaskBriefing(input: string): Promise<string> {
  return fetchRawAIResponse(input);
}
