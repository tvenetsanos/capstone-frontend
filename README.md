# Capstone Backend

This project contains an API for a dog meeting application. The project is based off ruby on rails and contains several models. There are Users, Dogs, Conversations, and Messages. Each Dog belongs to a User, and every message belongs to one and only one conversation, finally each conversation has a foreign key to the two users involved in the conversation. 

## Finding available routes
You can look in config/routes.rb to find all available routes for this API.

## How to get started running this API
This API is built with docker so running it is simple. First, make sure you have docker installed on your machine and then run the following commands.

Run these commands:
docker-compose build
docker-compose up
