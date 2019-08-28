# Access controls and user management 
## Site users
The CTOEC site uses WordPress's user roles and permission for access control and user management. The primary key for a user is a unique id that is not tied to the user’s personally identifiable information. 

Site users may only be granted permission via an admin and only if approved by an official working for the State of Connecticut. Only users who have a State of Connecticut or business partner email address will be granted access to the system. A list of users and their roles are available to admins in the site's admin portal and also through a direct database connection or backup in case of a service outage. All user activity on the site is monitored and periodically reviewed including logins successes and failures. [See System Logging Section](./SYSTEM_LOGGING.md)

## User Auditing: Last reviewed - 2019-6-10
The designated Security Officer (currently a contractor with Team Skylight) conducts a quarterly audit of the user management artifacts described above to ensure they are up to date and being implemented as required.

## Training: Last reviewed - 2019-6-10
One key check is ensuring that everyone on the list still needs access and has been properly trained according to the State of CT’s requirements. The Security Officer is not responsible for conducting the training themselves, but is responsible for ensuring training has been conducted.

## System developers
This project uses git for source control and github.com as a code storage solution. Any changes made to the code base are tagged with a specific developer's name and changes. In the event of an outage, copies of the code base distributed among its developers. 

Moreover, all developers use github.com accounts with 2-factor authentication to prevent unwanted access.

All system developers attend a yearly training module for cybersecurity safety and HIPAA compliance. [See training compliance](./training.test.js)
