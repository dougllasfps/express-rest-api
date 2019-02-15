const PORT = process.env.PORT || 3001



module.exports = app => {
    app.listen(PORT, () => {
        console.log(`App started and running on Port ${PORT}`)
    })
}

