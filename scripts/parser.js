/**
 * parser.js 
 * Logic used within an n8n Code Node to split a single Claude response 
 * into multi-platform social assets.
 */

const rawText = items[0].json.text; // Input from Claude node

try {
    // Extract sections based on custom delimiters
    const blog = rawText.split('### BLOG')[1].split('### LINKEDIN')[0].trim();
    const linkedIn = rawText.split('### LINKEDIN')[1].split('### X')[0].trim();
    const xPost = rawText.split('### X')[1].trim();

    return [
        {
            json: {
                platform: "Blog",
                content: blog,
                timestamp: new Date().toISOString()
            }
        },
        {
            json: {
                platform: "LinkedIn",
                content: linkedIn
            }
        },
        {
            json: {
                platform: "X",
                content: xPost
            }
        }
    ];
} catch (error) {
    throw new Error("Failed to parse AI response. Ensure Claude follows the delimiter schema.");
}
