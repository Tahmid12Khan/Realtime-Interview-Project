# Realtime Interview
A real time web application where an admin can set problems and take interviews for a candidate. An admin can create a room with one of his/her problems and give the unique room number to the candidate so that he/she can join. Other admins can also join the room if they are given the room number. A candidate can solve the problem in the real time editor and other admins can see that. He/she can also converse with admins in the room. The candidate can submit the solution and see the result of it.

It can now only be run on localhost. To change that, go to chat.js and change <b>var socket = io.connect('localhost:3000'); </b> to <b> var socket = io.connect('your_ip:3000');</b>. Default port is 3000.

<h5>Developed by </h5>
<b>1. Tahmid Khan </b> <br>
<b>2. Shuvradeb Saha </b>
