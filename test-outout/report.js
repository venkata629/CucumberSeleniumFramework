$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resource/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon Login Feature",
  "description": "",
  "id": "amazon-login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 576300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Amazon",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 6457566200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Amazon()"
});
formatter.result({
  "duration": 2986218800,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 7,
      "value": "#without Examples Keyword"
    }
  ],
  "line": 8,
  "name": "Amazon Login Test Scenario",
  "description": "",
  "id": "amazon-login-feature;amazon-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "user enters \"9885673983\" and \"Sairam@143\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "9885673983",
      "offset": 13
    },
    {
      "val": "Sairam@143",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 4444216200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2264083500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 399686100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 809925000,
  "status": "passed"
});
formatter.after({
  "duration": 153400,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 17,
      "value": "#with Examples Keyword"
    }
  ],
  "line": 18,
  "name": "Amazon Login Test Scenario",
  "description": "",
  "id": "amazon-login-feature;amazon-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "amazon-login-feature;amazon-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 27,
      "id": "amazon-login-feature;amazon-login-test-scenario;;1"
    },
    {
      "cells": [
        "9885673983",
        "Sairam@143"
      ],
      "line": 28,
      "id": "amazon-login-feature;amazon-login-test-scenario;;2"
    },
    {
      "cells": [
        "tom",
        "test456"
      ],
      "line": 29,
      "id": "amazon-login-feature;amazon-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 303800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Amazon",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 5258963100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Amazon()"
});
formatter.result({
  "duration": 2886848300,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Amazon Login Test Scenario",
  "description": "",
  "id": "amazon-login-feature;amazon-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "user enters \"9885673983\" and \"Sairam@143\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "9885673983",
      "offset": 13
    },
    {
      "val": "Sairam@143",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 4184934400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2015396800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 411982400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 795945800,
  "status": "passed"
});
formatter.after({
  "duration": 108300,
  "status": "passed"
});
formatter.before({
  "duration": 238800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Amazon",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 5034702900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Amazon()"
});
formatter.result({
  "duration": 2859445700,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Amazon Login Test Scenario",
  "description": "",
  "id": "amazon-login-feature;amazon-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "user enters \"tom\" and \"test456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "tom",
      "offset": 13
    },
    {
      "val": "test456",
      "offset": 23
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 11004187000,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//input[@id \u003d\"ap_password\"]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-IOGOAHH\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.1\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinitions.LoginStepDefinition.user_enters_username_and_password(LoginStepDefinition.java:83)\r\n\tat ✽.Then user enters \"tom\" and \"test456\"(src/test/resource/Features/login.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 335000,
  "status": "passed"
});
});