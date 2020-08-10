Feature: Amazon Login Feature

Background:
Given user is already on Login Page
When title of login page is Amazon

#without Examples Keyword
Scenario: Amazon Login Test Scenario


Then user enters "9885673983" and "Sairam@143"
Then user clicks on login button
Then user is on home page
Then Close the browser


#with Examples Keyword
Scenario Outline: Amazon Login Test Scenario


Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then Close the browser

Examples:
	| username   | password   |
	| 9885673983 | Sairam@143 |		
		