export const actionNames = {
    EXAMPLE_ACTION: 'EXAMPLE_ACTION'
}

export const actions = {
    exampleAction: userInput => ({
        type: actionNames.EXAMPLE_ACTION,
        payload: userInput
    })
}