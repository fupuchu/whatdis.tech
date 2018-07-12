# Project Post Mortem

## Approach and Process

1. What in my process and approach to this project would I do differently next time?
1. What in my process and approach to this project went well that I would repeat next time?

In regards to process, I feel like trello really helped in planning out every small parts of the app out. It also helped a lot to track my progress and identify which area I need to put more time into. I would prefer to have a whiteboard in the future to write random scripts on it and I find that it really helped out whe I wrote some of the logic and processes down on paper. In this particular project I developed a habit of console logging out all the parameters or arguements to have a better understanding of what I have to work with.

--

## Code and Code Design

1. What in my code and program design in the project would I do differently next time?

When seperating into the context of MVC, I feel like I could refactor my code even more and make it more "readable".

1. What in my code and program design in the project went well? Is there anything I would do the same next time?

I feel confident in setting up basic queries in SQL to retrieve the data that I want. All these came from planning the routes and DB queries when I'm not at my computer. I also finally saw the use of `this.props` and how I can manipulate it to make my app more interactive.

```js
const getSingleCategory = (req, response) => {
        db.cat.getSingleCat(req.params, (err, queryRes) => {
            if (err) {
                response.send('something went wrong')
            } else {
                response.status(200).render('SingleCategory', {
                    onecat: queryRes.rows,
                    title: queryRes.rows[0].category_name,
                })
            }
        })
    }
```

In the above example, I passed my query results into an object and then in my jsx file I was able to pass down data correctly with `this.props.title` or whatever i want it to be.

One of the areas I had to spend more time doing was the recommendation button. In pseudo code it looks like this: User Votes, Record his vote in a table, render the page with the new vote count, check if user has voted, prevent user from voting.

Which looks like this:

```javascript
const recThis = (req, response) => {
        console.log(req.cookies)
        if (req.cookies.is_logged_in == undefined) {
            response.status(200).render('Registration', {msg : 'You need to Register or Login to vote'})
        } else {
            db.desc.checkVote(req, (err, queryRes) => {
                if (queryRes.rows != 0){
                    console.log('you cannot vote')
                    response.status(200).render('Error', {
                        msg : 'You can only vote once',
                        link: '/' + req.body.term_title + '/all',
                        linkMsg : 'Go Back'
                    })
                } else {
                    console.log('you can vote')
                    db.desc.recommendMe(req.body, (err, queryRes) => {
                        if (err){
                            response.send("????")
                        } else {
                            db.desc.uniqueVote(req, (err, queryRes) => {
                                if (err) {
                                    console.log(err)
                                } else {
                                    console.log(queryRes.rows)
                                }
                            })
                            response.status(200).redirect('/' + req.body.term_title + '/all')
                        }
                    })
                }
            })
        }
    }
```

Althought I feel that there is a better way of displaying error messages not just for me but for the person visiting the site too.

## WDI Unit 1 Post Mortem

1. What habits did I use during this unit that helped me?

Constantly testing new code and see if the results are what I wanted and then proceed to implement it in my code.
2. What habits did I have during this unit that I can improve on?

I felt that I could do more within the timeframe and better planning but I feel that the MVP is ready.
3. How is the overall level of the course during this unit? (instruction, course materials, etc.)

Significantly harder than the first one, this unit puts what we learned about JS even more and I'm happy to say that I know how to set up express correctly and use middleware now.