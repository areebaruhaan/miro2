import { test, expect, BrowserContext, Page } from '@playwright/test';
import SignUpPage from "../PageObjectModel/SignUpPage";
import Env from "../Utils/Environment";

    let context: BrowserContext;
    let page: Page;
    let signup: SignUpPage;
    
    test.beforeAll(async ({ browser }) =>
    {
        context = await browser.newContext();
        page = await context.newPage();
        signup = new SignUpPage(page);

    });
    
    //Adding expected values into the form and running a normal flow without errors
    test('Sign up Happy Flow', async() =>
    {
        console.log("---------------------------------")
        console.log("Happy Flow Verification")
        console.log("---------------------------------")
        await page.goto(Env.miroHomePage); 
        await page.click('text=Sign up free');
        await expect(page).toHaveURL(Env.miroSignUpPage);
        await signup.signUpFunc(Env.signupName, Env.signupPassword);
    });

    //starting off with displaying all mandatory field error and then resolving them one by one
    test('Sign up Alt Flow - empty field check', async() =>
    {
        console.log("---------------------------------")
        console.log("Empty Fields Verification")
        console.log("---------------------------------")
        await page.goto(Env.miroSignUpPage); 
        await signup.signUpFuncEmptyChecks(Env.signupName, Env.signupPassword);

    });

    //signing up with an email that has already been used once and its format is correct
    test('Sign up Alt Flow - email verification', async() =>
    {
        console.log("---------------------------------")
        console.log("Email Already In Use Verification")
        console.log("---------------------------------")
        await page.goto(Env.miroSignUpPage); 
        await signup.signUpFuncEmailAlreadyRegistered(Env.signupName, Env.signupPassword);
    });

    //checking for password characters which is that password is acceptable for 8 or more characters
    test('Sign up Alt Flow - password character check', async() =>
    {
        console.log("---------------------------------")
        console.log("Password character Count Verification")
        console.log("---------------------------------")
        await page.goto(Env.miroSignUpPage); 
        await signup.signUpFuncPasswordCharacterCheck(Env.signupName);
    });

    //checking all 3rd party sign up links that they are opening up
    test('Sign up Alt Flow - Sign up with 3rd party', async() =>
    {
        console.log("---------------------------------")
        console.log("3rd Party Login Verification")
        console.log("---------------------------------")
        console.log("Signup with Google Verification")
        await page.goto(Env.miroHomePage); 
        await page.click('text=Sign up free');
        await expect(page).toHaveURL('https://miro.com/signup/');

        await page.waitForTimeout(500);
        await signup.signUpFuncWithGoogle();
        await page.waitForTimeout(500);
        await page.screenshot({ path: './Screenshots/google.png', fullPage: true });

        console.log("---------------------------------")
        console.log("Signup with Slack Verification")
        await page.goto(Env.miroSignUpPage); 
        await signup.signUpFuncWithSlack();
        await page.waitForTimeout(500);
        await page.screenshot({ path: './Screenshots/slack.png', fullPage: true });

        console.log("---------------------------------")
        console.log("Signup with Facebook Verification")
        await page.goto(Env.miroSignUpPage); 
        await signup.signUpFuncWithFB();
        await page.waitForTimeout(500);
        await page.screenshot({ path: './Screenshots/fb.png', fullPage: true });

        console.log("---------------------------------")
        console.log("Signup with Microsoft Office Verification")
        await page.goto(Env.miroSignUpPage); 
        await signup.signUpFuncWithMicrosoft();
        await page.waitForTimeout(500);
        await page.screenshot({ path: './Screenshots/microsoft.png', fullPage: true });

        console.log("---------------------------------")
        console.log("Signup with Apple Verification")
        await page.goto(Env.miroSignUpPage); 
        await signup.signUpFuncWithApple();
        await page.waitForTimeout(500);
        await page.screenshot({ path: './Screenshots/apple.png', fullPage: true });
    });
 
    test.afterAll(async () =>
    {
        await page.close();
        await context.close();
        //await browser.close();
    })