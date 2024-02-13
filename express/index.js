const express=require("express")

const app = express()

const port = 3000
const hostname="localhost"

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
});
app.get('/about', (req, res) => {
    res.send('Hello World! about ')
});
app.get('/home', (req, res) => {
    res.send('Hello World!')
});
app.get('/products', (req, res) => {
    res.send('Hello World!')
});
app.listen(port, () => {  
    console.log(`Server is running at http://localhost:${port} ${hostname}`)
    }
)  


