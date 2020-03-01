export const fetchUser = user => (
    $.ajax({
        url: `/api/users/${user.id}`,
        method: 'GET'
    })
)

export const fetchAllUsers = () => (
    $.ajax({
        url: '/api/users',
        method: 'GET'
    })
)