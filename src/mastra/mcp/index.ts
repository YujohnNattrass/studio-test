import { MCPServer } from "@mastra/mcp";
import { weatherTool } from "../tools/weather-tool";
// import { MCPClient } from "@mastra/mcp";
 
// export const testMcpClient = new MCPClient({
//   id: "test-mcp-client",
//   servers: {
//     weather: {
//       url: new URL(`https://ancient-squeaking-autumn.mastra.cloud/api/mcp/weather-mcp-server/mcp`)
//     },
//   }
// });
console.log(`hello world`)

export const myMcpServer = new MCPServer({
  id: "my-mcp-server",
  name: "My MCP Server",
  version: "1.0.0",
  tools: { weatherTool }
});