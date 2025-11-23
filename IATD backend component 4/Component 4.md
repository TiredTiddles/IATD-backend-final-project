## Component 4

### Caching

Caching is storing frequently accessed data in fast storage, either on the server or the user's computer, so that my backend doesn't need to query MongoDB each time.

Caching would be implemented by using Redis. Each of these will have a TTL (time to live) of 600 seconds with a check period of 120 seconds. The cache keys would be structured as a courses: all, as I believe that it is the simplest - if you don't visit any part of my website within 10 minutes, then all the cached parts of my website are deleted.

Event based validation should also be added - when a new course is added, the cache will be updated. When a new course is deleted, it will immediately be removed from the cache.

This should:

- Reduce the load from the database, as fewer requests are required.
- Reduce the response time, as users will no longer require the often high latency that comes with communicating wirelessly from server to computer vs computer to self
- Highly improved scaling, due to lower database load.

### Load balancing solution

For load balancing, I will implement the most basic but also in my opinion, most effective load balancing strategy:

> Assign the new request to the server with the least number of concurrent users.

My rationale for this is that this is the most simple approach, reducing both complexity and chance of failure.

User's data will be sharded according to their user ID, e.g. 1-100,000 in one server, 100,001-200,000 in another. This should significantly reduce query times by significantly reducing the amount of data a system has to sift through.

If the server somehow fails to send back a response within 10s, the request will be passed on to another server. Now why 10s specifically? Because that's the average amount of time I'm willing to wait for before I press reload on a website. I would think that the modern person would have about the same amount of patience as me.

This makes it significantly easier for the server to horizontally scale.

Some data will be collected, such as average response time and database connections at specific times of the day.

I did not end up getting the load balancer working during lab 02, and I attribute that to the lack of implementation.

### High availability

High availability can be achieved using replica sets. This means that there will be:

- 1 Primary node
- 2 Secondary nodes.

If the primary node goes down, one of the secondary nodes will become the new primary node, ensuring no database downtime. MongoDB automatically detects failures, and elects a new primary in seconds.

Every single day, at 2:00AM UTC, there will be a full system backup - with data kept for a month, and after that, only the Monday 2:00AM UTC of each week being backed up afterwards. These weekly backups will be held for 12 weeks before deletion.

By running a load balancer along with multiple servers, this ensures that the application remains online regardless of whether something happens to a single server.
