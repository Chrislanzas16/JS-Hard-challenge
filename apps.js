async function firstSixIncomplete (completed) {
    const promise = await fetch ("https://jsonplaceholder.typicode.com/todos")
    const result = await promise.json()
    const posts = result.filter (elem => elem.completed === completed)
    const firstSixItems = posts.slice(0, 6)
    

    
      console.log(firstSixItems)
}

firstSixIncomplete(false)