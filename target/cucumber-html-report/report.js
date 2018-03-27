$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/KeywordDrivenFramework.feature");
formatter.feature({
  "line": 1,
  "name": "Sign in and contact us",
  "description": "",
  "id": "sign-in-and-contact-us",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5075581251,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Successful login",
  "description": "",
  "id": "sign-in-and-contact-us;successful-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I open \"http://automationpractice.com\" website",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "I login using credentials \"abc@xyz.com\" and \"Test@123\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://automationpractice.com",
      "offset": 8
    }
  ],
  "location": "KeywordDrivenFramework.i_open_website(String)"
});
formatter.result({
  "duration": 10230413816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@xyz.com",
      "offset": 27
    },
    {
      "val": "Test@123",
      "offset": 45
    }
  ],
  "location": "KeywordDrivenFramework.i_login_using_credentials_and(String,String)"
});
formatter.result({
  "duration": 3653993818,
  "status": "passed"
});
formatter.after({
  "duration": 1164121862,
  "status": "passed"
});
formatter.before({
  "duration": 5879633344,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "unsuccessful login",
  "description": "",
  "id": "sign-in-and-contact-us;unsuccessful-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I open \"http://automationpractice.com\" website",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I login using credentials \"abc@xyz1.com\" and \"Test@123\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://automationpractice.com",
      "offset": 8
    }
  ],
  "location": "KeywordDrivenFramework.i_open_website(String)"
});
formatter.result({
  "duration": 11146966947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@xyz1.com",
      "offset": 27
    },
    {
      "val": "Test@123",
      "offset": 46
    }
  ],
  "location": "KeywordDrivenFramework.i_login_using_credentials_and(String,String)"
});
formatter.result({
  "duration": 3531938000,
  "status": "passed"
});
formatter.after({
  "duration": 1172590646,
  "status": "passed"
});
formatter.before({
  "duration": 4500413903,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Contact us",
  "description": "",
  "id": "sign-in-and-contact-us;contact-us",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I open \"http://automationpractice.com\" website",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I contact customer service with order reference \"abc123\" and message \"hello there\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://automationpractice.com",
      "offset": 8
    }
  ],
  "location": "KeywordDrivenFramework.i_open_website(String)"
});
formatter.result({
  "duration": 8603282488,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 49
    },
    {
      "val": "hello there",
      "offset": 70
    }
  ],
  "location": "KeywordDrivenFramework.i_contact_customer_service_with_order_reference_and_message(String,String)"
});
formatter.result({
  "duration": 3478574773,
  "status": "passed"
});
formatter.after({
  "duration": 1153326833,
  "status": "passed"
});
});