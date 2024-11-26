1. **Fork GitHub 仓库**：  
 
2. **创建 Page 项目**：  

3. **设置框架与构建命令**：  
   在框架预设中选择 Next.js（不要选择 Next.js (Static HTML Export)），构建命令为：`pnpm dlx @cloudflare/next-on-pages@1`。

4. **保存并部署**：  

5. **启用 Node.js 兼容性**：  
   进入对应的 Page 项目设置，在“运行时”类目下找到“兼容性标志”，填入 `nodejs_compat`。

6. **重新部署**：  
   回到 Page 页面，选择“重新部署”，部署完成后，网页将可以正常访问。
