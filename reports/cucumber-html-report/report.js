$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Myapplication.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: saviles@serenova.com"
    }
  ],
  "line": 2,
  "name": "Facebook post to a friend feature",
  "description": "",
  "id": "facebook-post-to-a-friend-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 7,
      "value": "#single user post case"
    },
    {
      "line": 8,
      "value": "#@case1"
    },
    {
      "line": 9,
      "value": "#Scenario: Single login with valid credentials"
    },
    {
      "line": 10,
      "value": "#When I enter valid username and valid password"
    },
    {
      "line": 11,
      "value": "#| Username | sofy.aviles@gmail.com |"
    },
    {
      "line": 12,
      "value": "#| Password | Toffys963.            |"
    },
    {
      "line": 13,
      "value": "#Then User should be able to login sucessfully"
    },
    {
      "line": 14,
      "value": "#And User should be able to perform search"
    },
    {
      "line": 15,
      "value": "#Then User should be able to select profile"
    },
    {
      "line": 16,
      "value": "#And User should be able to post on profile wall"
    },
    {
      "line": 18,
      "value": "#multiple user post case"
    }
  ],
  "line": 21,
  "name": "Single login with valid credentials",
  "description": "",
  "id": "facebook-post-to-a-friend-feature;single-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@case2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I enter valid \u003cusername\u003e and valid \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User should be able to login sucessfully",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User should be able to perform search",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User should be able to select profile",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User should be able to post on profile wall",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "facebook-post-to-a-friend-feature;single-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 30,
      "id": "facebook-post-to-a-friend-feature;single-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "sofy.aviles@gmail.com",
        "Toffys963."
      ],
      "line": 31,
      "id": "facebook-post-to-a-friend-feature;single-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "sofy.aviles@hotmail.com",
        "sofy963."
      ],
      "line": 32,
      "id": "facebook-post-to-a-friend-feature;single-login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I have a valid set of data and access to registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "SmokeTest.i_have_a_valid_set_of_data_and_access_to_registration_page()"
});
formatter.result({
  "duration": 5568773441,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Single login with valid credentials",
  "description": "",
  "id": "facebook-post-to-a-friend-feature;single-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@case2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I enter valid sofy.aviles@gmail.com and valid Toffys963.",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User should be able to login sucessfully",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User should be able to perform search",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User should be able to select profile",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User should be able to post on profile wall",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "sofy.aviles@gmail.com",
      "offset": 14
    },
    {
      "val": "Toffys963.",
      "offset": 46
    }
  ],
  "location": "SmokeTest.I_enter_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "duration": 492860342,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_sucessfully()"
});
formatter.result({
  "duration": 6598347199,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_perform_search()"
});
formatter.result({
  "duration": 4024101851,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_select_profile()"
});
formatter.result({
  "duration": 3583149355,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_post_on_profile_wall()"
});
formatter.result({
  "duration": 6101440698,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I have a valid set of data and access to registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "SmokeTest.i_have_a_valid_set_of_data_and_access_to_registration_page()"
});
formatter.result({
  "duration": 4579937071,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Single login with valid credentials",
  "description": "",
  "id": "facebook-post-to-a-friend-feature;single-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@case2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I enter valid sofy.aviles@hotmail.com and valid sofy963.",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User should be able to login sucessfully",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User should be able to perform search",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User should be able to select profile",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User should be able to post on profile wall",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "sofy.aviles@hotmail.com",
      "offset": 14
    },
    {
      "val": "sofy963.",
      "offset": 48
    }
  ],
  "location": "SmokeTest.I_enter_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "duration": 482165020,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_sucessfully()"
});
formatter.result({
  "duration": 5149086661,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_perform_search()"
});
formatter.result({
  "duration": 3895653878,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_select_profile()"
});
formatter.result({
  "duration": 3569904277,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_post_on_profile_wall()"
});
formatter.result({
  "duration": 23177100528,
  "error_message": "java.lang.IllegalArgumentException: Must provide a location for a move action.\r\n\tat org.openqa.selenium.interactions.MoveMouseAction.\u003cinit\u003e(MoveMouseAction.java:38)\r\n\tat org.openqa.selenium.interactions.Actions.moveToElement(Actions.java:388)\r\n\tat stepDefinition.SmokeTest.user_should_be_able_to_post_on_profile_wall(SmokeTest.java:137)\r\n\tat ✽.And User should be able to post on profile wall(Myapplication.feature:26)\r\n",
  "status": "failed"
});
});