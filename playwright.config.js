// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  // Diretório com os arquivos de teste
  testDir: './tests',
  
  // Tempo máximo por teste
  timeout: 30 * 1000,
  
  // Configurações do relatório
  reporter: 'html',
  
  use: {
    // Executar em modo headless (sem interface gráfica)
    headless: true,
    
    // Capturar screenshot em caso de falha
    screenshot: 'only-on-failure',
    
    // Salvar trace em caso de falha (para depuração)
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
