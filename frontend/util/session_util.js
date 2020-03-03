export const signInUser = user => {
    return $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user }
    })
}

export const signOutUser = () => (
    $.ajax({
        url: '/api/session',
        method: 'DELETE'
    })
)