# LAP 2 Book App Debugging Assignment

### Installation & usage

1. Lanuch the app by running the server and client typing
   by **bash \_scripts/startDev.sh** into the terminal.

2. Next buy running the **bash \_scripts/startTest.sh** i was able to idenify some of the problems in the application

### Changelog

Changing status code in nooks.js, when creating a new book entry.
it was changed from 200 to 201.

the status code was incorrect for the DELETE function from the database.

the status code was changed from 200 to 204, which means content is not found.

quotation marks in Database, the data inputs were not separated properly.

Module.export was found on top of both the author file and books files.

### Bugs

Incorrect status code

missing/incomplete function codes in controller folder.

### Could have:

I realised that i was not able to retrieve data from the Authors route, due to it being linked to the books path this was also not working.
On of the changes iu previously made result in stating that "Error retrieving authors" this was a step forward.
However, another change i made removed. I should have made less changes so could have tracked it better.

###Wins & Challenges
