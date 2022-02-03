import { PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {

  testDir: './tests',
  timeout: 5 * 60 * 1000,
  reporter: [['list'], ['html', { outputFolder: 'my-report' }]],
  testMatch: ["signup.spec.ts"],
  expect: 
  {
    timeout: 5000
  },
  workers: 1,
  use: {
    actionTimeout: 0,
    baseURL: 'https://miro.com/',
    viewport: 
        { 
            width: 1790, 
            height: 935 
        },
        browserName: "chromium",
        launchOptions: 
        {      
            slowMo: 900,
            headless: false,    
        },
        screenshot: "on",
  }
};
export default config;
