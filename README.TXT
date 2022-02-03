DESCRIPTION OF THE AUTOMATION DONE AS A PART OF THIS PROJECT
------------------------------------------------------------

1. This project is created using playwright 1.18 version and language used is typescript.
2. To run the test, use "npx playwright test" and then run "ßnpx playwright show-report my-report" to view its report
3. There is only 1 Test file which is in "tests" folder.
4. POM is implemented hence there is a folder called "PageObjectModel". This folder contains 1 page which contains all the locators and helper functions needed to run the signup.spec.ts file.
5. SignUpPage.ts contains all locators used and all the functions.
6. signup.spec.ts contains all the test blocks 
7. "Screenshots" folder contains all the screenshots that are taken during the execution of the tests.
8. Test will run in chromium. In case you have playwright browsers installed then run "npx playwright install"
9. Email is generated for each email input by creating a random string.
10. There is an environment file that contains a few basic variables that you can chang if you like. This file is under "Utils" folder
11. Found a minor bug : there is no error message when you enter an email with the following format "john.doe@yahoo"
12. Everything is logged in the console like:

                                                ---------------------------------
                                                Happy Flow Verification
                                                ---------------------------------
                                                Name: john doe
                                                New email: RHNf0@yahoo.com
                                                Password: adsdddhjkl
                                                Terms of service page verified
                                                Privacy policy page verified
                                                Privacy policy and terms check marked
                                                Success Message: Check your email




                                                ---------------------------------
                                                Empty Fields Verification
                                                ---------------------------------
                                                Error Message: Please enter your name.
                                                Error Message: Enter your email address.
                                                Error Message: Enter your password.
                                                Error Message: Please agree with the Terms to sign up.
                                                Name added: john doe
                                                New email: 3xD01@yahoo.com
                                                Password added: adsdddhjkl
                                                Privacy check marked
                                                Success Message: Check your email




                                                ---------------------------------
                                                Email Already In Use Verification
                                                ---------------------------------
                                                Old email: ZA4G0@yahoo.com
                                                Error Message: Sorry, this email is already registered
                                                New email: eZ2h2@yahoo.com
                                                Success Message: Check your email
                                                Password character Count Verification




                                                ---------------------------------
                                                Password character Count Verification
                                                ---------------------------------
                                                New email: uAaM3@yahoo.com
                                                Password hint for 1 characters: Please use 8+ characters for secure password.
                                                Password hint for 2 characters: Please use 8+ characters for secure password.
                                                Password hint for 3 characters: Please use 8+ characters for secure password.
                                                Password hint for 4 characters: Please use 8+ characters for secure password.
                                                Password hint for 5 characters: Please use 8+ characters for secure password.
                                                Password hint for 6 characters: Please use 8+ characters for secure password.
                                                Password hint for 7 characters: Please use 8+ characters for secure password.
                                                Password hint for 8 characters: Weak password
                                                Password hint for 9 characters: Weak password
                                                Password hint for 10 characters: Weak password
                                                Success Message: Check your email




                                                ---------------------------------
                                                3rd Party Login Verification
                                                ---------------------------------
                                                Signup with Google Verification
                                                Success Message: Sign in with Google
                                                ---------------------------------
                                                Signup with Slack Verification
                                                Success Message: Sign in to your workspace
                                                ---------------------------------
                                                Signup with Facebook Verification
                                                Success Message: Log in to Facebook
                                                ---------------------------------
                                                Signup with Microsoft Office Verification
                                                Success Message: Sign-in options
                                                ---------------------------------
                                                Signup with Apple Verification
                                                Success Message: Use your Apple ID to sign in to Miro.