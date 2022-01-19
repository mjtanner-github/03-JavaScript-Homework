# 03 JavaScript Homework: Password Generator, Readme.md

## Task
This week’s homework required us to implement a random password generator based on criteria solicited from the user. The purpose of this exercise is to model dynamically updated HTML and CSS with Javascript running inside a browser.

## Implementation and Evaluation Criteria:

### Generate a series of user prompts to solicit and store user password criteria. 


* Number of characters, 8 - 128

The user is prompted for the number of desired random characters using prompt box:

![The number of desired characters is solicited from the user using an prompt box.](./Assets/number-of-chars-prompt-box.png)

"getNumbericInpuy", the method called by the prompt box, continues to call itself until a numeric value between 8 and 128 inclusive is entered.


* Uppercase, lowercase, both or neither. 

The user may select (u)ppercase, (l)owercase, (b)oth or (n)either characters with the ensuing prompt box.

![The user may select (u)ppercase, (l)owercase, (b)oth or (n)either characters with the ensuing prompt box.](./Assets/upper-lower-both-neither-prompt-box.png)

getAlphaCharInput continues to call itself until the user input (shifted to lowercase) is within it's calling "returnConstraint" parameter. 


* Numerals, and/or special characters.

The user may select numeric characters and/or special characters by confirming the following two confirmation boxes.

![The user may select numeric characters by confirming the numeric characters confirmation box.](./Assets/include-numeric-chars-confirm-box.png)

![The user may select special characters by confirming the special characters confirmation box.](./Assets/include-special-chars-confirm-box.png)


* At least one character set type must be selected or cast an error.

In this instance, the user selected (n)either and canceled both numeric and special characters cause the casting of an error. 

![The user may select special characters by confirming the special characters confirmation box.](./Assets/no-chars-selected-error.png)


* Generate a strong random password that conforms to user criteria.

In this instance, the user has selected 128 (b)oth uppercase and lowercase and included numeric and special characters.

![The user may select special characters by confirming the special characters confirmation box.](./Assets/output-all.png)