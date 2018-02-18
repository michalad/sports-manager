# sports-manager
Managing sports games


# Local Setup

1. Install mongo db: brew install mongo
2. Create directory for stroing databases for instance: ~/mongo/dbs
3. Set alias for running mongo: alias mongo=“~/mongo/bin/mongod --dbpath ~/mongo/dbs”
4. run database


# Creating a new user

1. Create new user using POST /api/register with body:

``
{
  "username": "username",
  "password": "password"
}
``

2. Make user active by switching flag 'isActive' in database
