import { expect, Page } from '@playwright/test';
import Env from '../Utils/Environment';

export default class SignUpPage 
{
    public page: Page;
    public oldEmail: string[];
    public emailCount = 0;
    public randomString: string;

    constructor(page: Page)
    {
        this.page = page;
    }

    //this function creates random strings based on the length you provide
    public makeString(length: number) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }

    //this function creates a new email with a random string
    public get getNewEmail()
    {
        this.randomString = this.makeString(4)
        let final_email = this.randomString + this.emailCount + '@yahoo.com'
        if (this.emailCount == 0)
        {
            this.oldEmail = [final_email]
        }
        else
        {
            this.oldEmail.push[final_email]
        }
        this.emailCount = this.emailCount + 1;
        return final_email;
    }

    //all locators
    public get nameTextField()
    {
        return this.page.$('[data-testid="mr-form-signup-name-1"]');
    }
    public get emailTextField()
    {
        return this.page.$('[data-testid="mr-form-signup-email-1"]');
    }
    public get passwordTextField()
    {
        return this.page.$('[data-testid="mr-form-signup-password-1"]');
    }
    public get privacyPolicyCheck()
    {
        return this.page.locator('[data-testid="mr-form-signup-terms-1"] svg');
    }
    public get miroSubscription()
    {
        return this.page.locator('[data-testid="mr-form-signup-subscribe-1"] label');
    }
    public get getStartedButton()
    {
        return this.page.$('[data-testid="mr-form-signup-btn-start-1"]');
    }
    public get googleSignUp()
    {
        return this.page.locator('button#kmq-google-button');
    }
    public get googleVerify()
    {
        return this.page.locator('.kHn9Lb').textContent();
    }
    public get slackSignUp()
    {
        return this.page.locator('button#kmq-slack-button');
    }
    public get slackVerify()
    {
        return this.page.locator('.p-refreshed_page__heading').textContent();
    }
    public get microsoftSignUp()
    {
        return this.page.locator('button#kmq-office365-button');
    }
    public get msVerify()
    {
        return this.page.locator('[data-test-id="signinOptions"]').textContent();
    }
    public get appleSignUp()
    {
        return this.page.locator('button#apple-auth');
    }
    public get appleVerify()
    {
        return this.page.locator('h1.si-container-title.tk-intro').innerText();
    }
    public get fbVerify()
    {
        return this.page.locator('._9axz').textContent();
    }
    public get facebookSignUp()
    {
        return this.page.locator('button.signup__btn.signup__social__btn.signup__btn--facebook');
    }
    public get successfulSignUp()
    {
        return this.page.$('.signup__title-form');
    }
    public get passwordCharError()
    {
        return this.page.locator('div#password-hint >> div#signup-form-password').textContent();
    }
    public get NameError()
    {
        return this.page.locator('.signup__error >> label#nameError').textContent();
    }
    public get privacyPolicyCheckAlt()
    {
        return this.page.locator('label.mr-checkbox-1__check svg.mr-checkbox-1__icon.mr-checkbox-1__icon--medium');
    }
    public get miroSubscriptionAlt()
    {
        return this.page.locator('div.socialtos__terms-wrap.socialtos__terms-wrap--last >> label.mr-checkbox-1__check svg.mr-checkbox-1__icon');
    }
    public get continueButton()
    {
        return this.page.$('button.socialtos__btn');
    }
    public get termError()
    {
        return this.page.locator('.signup__error >> label#termsError').textContent();
    }
    public get emailError()
    {
        return this.page.locator('.signup__error >> label#emailError').textContent();
    }
    public get passError()
    {
        return this.page.locator('div.signup__error-wrap-login.js-empty-password.signup__error.signup__error-item').textContent();
    }
    public get passErrorHidden()
    {
        return this.page.locator('div.signup__error-wrap-login.js-empty-password.signup__error.signup__error-item.signup__error-wrap-login--hidden.signup__error-item--hidden').textContent();
    }
    public get termsStatement()
    {
        return this.page.locator('span#signup-error-emptyTerms').textContent();
    }
    public get termsLink()
    {
        return this.page.locator('[data-testid="mr-link-terms-1"]');
    }
    public get privacyPolicyLink()
    {
        return this.page.locator('[data-testid="mr-link-privacy-1"]');
    }
    public get subscribeStatement()
    {
        return this.page.locator('span#signup-subscribe-desc').textContent();
    }
    public get termsAndPPLinkTitle()
    {
        return this.page.locator('h2.legal-features-1__sectiontitle').textContent();
    }


    //all functions using the above mentioned locators
    public async enterName(name: string)
    {
        const ele = await this.nameTextField;
        await ele?.fill(name);
    }
    public async enterEmail()
    {
        let NewEmail: string;
        NewEmail = this.getNewEmail;
        const ele = await this.emailTextField;
        await ele?.fill(NewEmail);
        console.log("New email: " + NewEmail)
    }
    public async enterOldEmail()
    {
        let UsedEmail = this.oldEmail[0];
        const ele = await this.emailTextField;
        await ele?.fill(UsedEmail);
        console.log("Old email: " + UsedEmail)
    }
    public async enterHalfEmail()
    {
        let halfEmail = Env.incorrectEmail;
        const ele = await this.emailTextField;
        await ele?.fill(halfEmail);
        console.log("Incorrect email: " + halfEmail)
    }
    public async enterHalfEmail2()
    {
        let halfEmail = Env.incorrectEmail2;
        const ele = await this.emailTextField;
        await ele?.fill(halfEmail);
        console.log("Incorrect email: " + halfEmail)
    }
    public async enterpassword(pass: string)
    {
        if(pass)
        {
            const ele2 = await this.passwordTextField;
            await ele2?.fill(pass);
        }
    }
    public async checkPrivacyPolicy()
    {
        const ele2 = this.privacyPolicyCheck;
        await ele2?.check();
    }
    public async clickPrivacyLink()
    {
        const ele2 = this.termsLink;
        await ele2?.click();
    }
    public async clickPolicyLink()
    {
        const ele2 = this.privacyPolicyLink;
        await ele2?.click();
    }
    public async checkMiroSubscription()
    {
        const ele2 = this.miroSubscription;
        await ele2?.check();
    }
    public async clickGetStartedButton()
    {
        const ele3 = await this.getStartedButton;
        await ele3?.click();
    }
    public async checkPrivacyPolicyAlt()
    {
        const ele2 = this.privacyPolicyCheckAlt;
        await ele2?.check();
    }
    public async checkMiroSubscriptionAlt()
    {
        const ele2 = this.miroSubscriptionAlt;
        await ele2?.check();
    }
    public async clickContinueButton()
    {
        const ele3 = await this.continueButton;
        await ele3?.click();
    }
    public async clickGoogleIcon()
    {
        const ele3 = this.googleSignUp;
        await ele3.scrollIntoViewIfNeeded();
        await ele3?.click();
    }
    public async clickSlackIcon()
    {
        const ele3 = this.slackSignUp;
        await ele3.scrollIntoViewIfNeeded();
        await ele3?.click();
    }
    public async clickMicrosoftIcon()
    {
        const ele3 = this.microsoftSignUp;
        await ele3.scrollIntoViewIfNeeded();
        await ele3?.click();
    }
    public async clickFBIcon()
    {
        const ele3 = this.facebookSignUp;
        await ele3.scrollIntoViewIfNeeded();
        await ele3?.click();
    }
    public async clickAppleIcon()
    {
        const ele3 = this.appleSignUp;
        await ele3.scrollIntoViewIfNeeded();
        await ele3?.click();
    }

    //regular sign up function
    public async signUpFunc(name:string, password:string)
    {
        await this.enterName(name);
        console.log("Name: " + name)

        await this.enterEmail();
        await this.enterpassword(password);
        console.log("Password: " + password)

        const ppStatement = await this.termsStatement;
        expect(ppStatement).toBe('I agree to Miro Terms and Privacy Policy.')
        const [ secondPage ] = await Promise.all
        ([
            this.page.waitForEvent('popup'),
            await this.clickPrivacyLink()
        ]);
        const termsPageTitle = (await Promise.resolve(secondPage.locator('h2.legal-features-1__sectiontitle').textContent()));
        expect(termsPageTitle).toBe('Terms of Service')
        await secondPage.screenshot({ path: './Screenshots/terms.png', fullPage: true });
        await secondPage.close();
        console.log("Terms of service page verified" )

        const [ thirdPage ] = await Promise.all
        ([
            this.page.waitForEvent('popup'),
            await this.clickPolicyLink()
        ]);
        const PrivacyPolicyPageTitle = (await Promise.resolve(thirdPage.locator('h2.legal-features-1__sectiontitle').textContent()));
        expect(PrivacyPolicyPageTitle).toBe('Privacy Policy')
        await thirdPage.screenshot({ path: './Screenshots/pp.png', fullPage: true });
        await thirdPage.close();
        console.log("Privacy policy page verified" )

        await this.checkPrivacyPolicy();
        console.log("Privacy policy and terms check marked" )

        const subscribeStatement = await this.subscribeStatement;
        expect(subscribeStatement).toBe('I agree to receive Miro news and updates.')
        await this.checkMiroSubscription();
        await this.page.screenshot({ path: './Screenshots/happyFlow.png', fullPage: true });
        await this.clickGetStartedButton();
        await expect(this.page).toHaveURL('https://miro.com/email-confirm/');
        const message = await this.successfulSignUp;
        if (message != null)
        {
            expect(await message.textContent()).toBe('Check your email')
            console.log("Success Message: " + await message.textContent());
        }
        
    }

    //a function that uses old email first and then new email and then verifies the format
    public async signUpFuncEmailAlreadyRegistered(name:string, password:string)
    {
        await this.enterName(name);
        await this.enterOldEmail();
        await this.enterpassword(password);
        await this.checkPrivacyPolicy();
        await this.checkMiroSubscription();
        await this.clickGetStartedButton();
        await expect(this.page).toHaveURL('https://miro.com/signup/');
        const error = (await Promise.resolve(this.emailError));
        if (error != null)
        {
            expect(error).toBe('Sorry, this email is already registered')
            console.log("Error Message: " + error);
        }
        await this.page.screenshot({ path: './Screenshots/emailCheck1.png', fullPage: true });

        await this.enterHalfEmail();
        await this.enterpassword(password);
        await this.checkPrivacyPolicy();
        await this.checkMiroSubscription();
        await this.clickGetStartedButton();
        const error2 = (await Promise.resolve(this.emailError));
        if (error2 != null)
        {
            expect(error2).toBe('Enter a valid email address.')
            console.log("Error Message: " + error2);
        }
        await this.page.screenshot({ path: './Screenshots/emailCheck2.png', fullPage: true });

        await this.enterHalfEmail2();
        await this.enterpassword(password);
        await this.checkPrivacyPolicy();
        await this.checkMiroSubscription();
        await this.clickGetStartedButton();
        const error3 = (await Promise.resolve(this.emailError));
        if (error3 != null)
        {
            expect(error3).toBe('Enter a valid email address.')
            console.log("Error Message: " + error3);
        }
        await this.page.screenshot({ path: './Screenshots/emailCheck3.png', fullPage: true });

        await this.enterEmail();
        await this.enterpassword(password);
        await this.checkPrivacyPolicy();
        await this.checkMiroSubscription();
        await this.clickGetStartedButton();
        await expect(this.page).toHaveURL('https://miro.com/email-confirm/');
        const message = await this.successfulSignUp;
        if (message != null)
        {
            expect(await message.textContent()).toBe('Check your email')
            console.log("Success Message: " + await message.textContent());
        }
    }

    //a function to input password character by character to verify till when the character limit statement appears
    public async signUpFuncPasswordCharacterCheck(name:string)
    {
        let password = 'a'
        await this.enterName(name);
        await this.enterEmail();
        let charCount = password.length;
        for(let i=charCount ; i<=10 ; i++)
        {
            await this.enterpassword(password);
            const passwordHint = (await Promise.resolve(this.passwordCharError));
            if (passwordHint != null && charCount <8)
            {
                expect(passwordHint).toBe('Please use 8+ characters for secure password.')
                console.log("Password hint for " + charCount + " characters: " + passwordHint);
                await this.page.screenshot({ path: './Screenshots/password_' + charCount + '.png', fullPage: true });
            }
            if (passwordHint != null && charCount >=8)
            {
                expect(passwordHint).toBe('Weak password')
                console.log("Password hint for " + charCount + " characters: " + passwordHint);
            }
            password = password + 'x';
            charCount = charCount + 1;
        }
        await this.checkPrivacyPolicy();
        await this.checkMiroSubscription();
        await this.page.screenshot({ path: './Screenshots/password.png', fullPage: true });
        await this.clickGetStartedButton();
        await expect(this.page).toHaveURL('https://miro.com/email-confirm/');
        const message = await this.successfulSignUp;
        if (message != null)
        {
            expect(await message.textContent()).toBe('Check your email')
            console.log("Success Message: " + await message.textContent());
        }
        
    }

    //checking all mandatory fields in this function
    public async signUpFuncEmptyChecks(name:string, password:string)
    {
        await this.clickGetStartedButton();
        await this.page.waitForLoadState('domcontentloaded')
        const error1 = (await Promise.resolve(this.NameError));
        const error2 = (await Promise.resolve(this.emailError));
        const error3 = (await Promise.resolve(this.passError));
        const error8 = (await Promise.resolve(this.termError));

        expect(error1).toContain('Please enter your name.')
        expect(error2).toContain('Enter your email address.')
        expect(error3).toContain('Enter your password.')
        expect(error8).toContain('Please agree with the Terms to sign up.')
        console.log("Error Message: " + error1);
        console.log("Error Message: " + error2);
        console.log("Error Message: " + error3);
        console.log("Error Message: " + error8);
        await this.page.screenshot({ path: './Screenshots/emptyCheck.png', fullPage: true });

        await this.enterName(name);
        await this.clickGetStartedButton();
        const error4 = (await Promise.resolve(this.NameError));
        expect(error4).toBe("");
        console.log("Name added: " + name);

        await this.enterEmail();
        await this.clickGetStartedButton();
        const error5 = (await Promise.resolve(this.emailError));
        expect(error5).toBe("");

        await this.enterpassword(password);
        await this.clickGetStartedButton();
        const error6 = (await Promise.resolve(this.passErrorHidden));
        expect(error6).not.toBeNull()
        console.log("Password added: " + password);

        await this.checkPrivacyPolicy();
        const error7 = (await Promise.resolve(this.termError));
        expect(error7).toBe("");
        console.log("Privacy check marked");

        await this.clickGetStartedButton();
        await expect(this.page).toHaveURL('https://miro.com/email-confirm/');
        const message = await this.successfulSignUp;
        if (message != null)
        {
            expect(await message.textContent()).toBe('Check your email')
            console.log("Success Message: " + await message.textContent());
        }
        
    }

    //following functions verify 3rd party links open up
    public async signUpFuncWithGoogle()
    {
        await this.clickGoogleIcon();
        await this.page.waitForLoadState("domcontentloaded");
        await this.checkPrivacyPolicyAlt();
        await this.checkMiroSubscriptionAlt();
        await this.clickContinueButton();
        const _page = (await Promise.resolve(this.googleVerify));
        if (_page != null)
        {
            expect(_page).toContain('Sign in with Google');
            console.log("Success Message: " + _page);
        }
    }
    public async signUpFuncWithSlack()
    {
        await this.clickSlackIcon();
        await this.page.waitForLoadState("domcontentloaded");
        await this.checkPrivacyPolicyAlt();
        await this.checkMiroSubscriptionAlt();
        await this.clickContinueButton();
        const _page = (await Promise.resolve(this.slackVerify));
        if (_page != null)
        {
            expect(_page).toContain('Sign in to your workspace');
            console.log("Success Message: " + _page);
        }
    }
    public async signUpFuncWithFB()
    {
        await this.clickFBIcon();
        await this.page.waitForLoadState("domcontentloaded");
        await this.checkPrivacyPolicyAlt();
        await this.checkMiroSubscriptionAlt();
        await this.clickContinueButton();
        const _page = (await Promise.resolve(this.fbVerify));
        if (_page != null)
        {
            expect(_page).toContain('Log in to Facebook');
            console.log("Success Message: " + _page);
        }
    }
    public async signUpFuncWithMicrosoft()
    {
        await this.clickMicrosoftIcon();
        await this.page.waitForLoadState("domcontentloaded");
        await this.checkPrivacyPolicyAlt();
        await this.checkMiroSubscriptionAlt();
        await this.clickContinueButton();
        const _page = (await Promise.resolve(this.msVerify));
        if (_page != null)
        {
            expect(_page).toContain('Sign-in options');
            console.log("Success Message: " + _page);
        }
    }
    public async signUpFuncWithApple()
    {
        await this.clickAppleIcon();
        await this.page.waitForLoadState("domcontentloaded");
        await this.checkPrivacyPolicyAlt();
        await this.checkMiroSubscriptionAlt();
        await this.clickContinueButton();
        const _page = (await Promise.resolve(this.appleVerify));
        if (_page != null)
        {
            expect(_page.includes('Use your Apple')).toBeTruthy();
            expect(_page.includes('ID to sign in to Miro.')).toBeTruthy();
            console.log("Success Message: " + _page);
        }
    }
}

