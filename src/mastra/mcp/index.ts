import { MCPServer } from "@mastra/mcp";
import { weatherTool } from "../tools/weather-tool";
import { weatherAgent } from "../agents/weather-agent";

export const testMcpServer = new MCPServer({
    id: "weather-mcp-server",
    name: "Weather MCP Server",
    version: "1.0.0",
    tools: { weatherTool },
    agents: { weatherAgent }, 
  });