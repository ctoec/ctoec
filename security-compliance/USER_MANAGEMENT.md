# Access controls and user management 
### Site users
The CTOEC site uses WordPress's user roles and permission for access control and user management. The primary key for a user is a unique id that is not tied to the user’s personally identifiable information. 

Site users may only be granted permission via an admin and only if approved by an official working for the State of Connecticut. Only users who have a State of Connecticut or business partner email address will be granted access to the system. A list of users and their roles are available to admins in the site's admin portal and also through a direct database connection or backup in case of a service outage. All user activity on the site is monitored and periodically reviewed including logins successes and failures. [See System Logging Section](./SYSTEM_LOGGING.md)

Active users on the system attend cybersecurity training yearly. 

### System developers

This project uses git for source control and github.com as a code storage solution. Any changes made to the code base are tagged with a specific developer's name and changes. In the event of an outage, copies of the code base distributed among its developers. 

Moreover, all developers use github.com accounts with 2-factor authentication to prevent unwanted access.

All system developers attend a yearly training module for cybersecurity safety and HIPAA compliance. [See training compliance](./training.test.js)
