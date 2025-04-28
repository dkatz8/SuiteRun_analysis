
Browser("Home - Advantage Bank_2").Page("Home - Advantage Bank").Sync
Browser("Home - Advantage Bank_2").Navigate "https://advantageonlinebanking.com/" @@ hightlight id_;_5185452_;_script infofile_;_ZIP::ssf41.xml_;_
wait 1
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set "Avi N" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").SetSecure "67f4c94d8650d36a35a2fe7fad4120f19df88a19b742abc7aed241cb" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Sign-In").Click
Browser("Home - Advantage Bank").Page("Dashboard - Advantage").Link("New Transfer").Click
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebEdit("recipient.name").Set "Elad R"
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebEdit("recipient.iban").Set "New state test"
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebEdit("recipient.bic").Set "12"
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebEdit("recipient.bankName").Set "OneZ"
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebNumber("amount").Set "200"
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebEdit("description").Set "Transaction number 1"
wait5
Browser("Home - Advantage Bank").Page("New Transfer - Advantage").WebButton("Send").Click
Browser("Home - Advantage Bank").Page("Accounts - Advantage Bank").Link("Dashboard").Click

