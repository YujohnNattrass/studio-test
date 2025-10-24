import { MCPClient } from "@mastra/mcp";
 
export const testMcpClient = new MCPClient({
  id: "test-mcp-client",
  servers: {
    weather: {
      url: new URL(`https://ancient-squeaking-autumn.mastra.cloud/api/mcp/weather-mcp-server/mcp`)
    },
  }
});
