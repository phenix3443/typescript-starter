import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";

const app = express();
// 加载 swagger 文档
const swaggerDocument = YAML.load(path.join(__dirname, "../swagger.yaml"));
// 挂载到 /api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// 其他路由…
app.listen(3000, () => console.log("Server running on http://localhost:3000"));