import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY
});

export async function POST(req: Request) {
  const { messages } = await req.json();
  
  try {
    const streamResponse = await client.chat.completions.create({
      // bytedance-seed/seed-1.6-flash (会输出 md 格式)
      // xiaomi/mimo-v2-flash:free (会输出思考内容)
      // mistralai/devstral-2512:free (会输出 md 格式)
      // nex-agi/deepseek-v3.1-nex-n1:free (会输出 md 格式，响应较慢)
      // openai/gpt-oss-120b:free (响应较慢)
      model: 'bytedance-seed/seed-1.6-flash',
      messages,
      stream: true,
    });

    const encoder = new TextEncoder();

    return new Response(
      new ReadableStream({
        async start(controller) {
          try {
            for await (const chunk of streamResponse) {
              const content = chunk.choices?.[0]?.delta?.content;
              if (content) {
                controller.enqueue(encoder.encode(content));
              }
            }
            controller.close();
          } catch (error) {
            controller.error(error);
          }
        },
      }),
      {
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          "Connection": "keep-alive",
        },
      }
    );
  } catch (error: unknown) {
    const err = error as { message?: string; status?: number };
    return new Response(
      JSON.stringify({ 
        error: err.message
      }),
      { 
        status: err.status,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
