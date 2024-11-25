import express, { request, response } from "express"

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
    response.status(201).send({ msg: "hello word" })
});

app.get("/api/user", (request, response) => {
    response.send([
        { id: 1, Firstname: 'Turikubwimana', LastName: 'Vincent' },
        { id: 1, Firstname: 'Iradukunda', LastName: 'Eme' },
        { id: 1, Firstname: 'Irafasha', LastName: 'Emmanuel' }
    ])
}
);

app.get("/api/products", (request, response) => {
    response.send([
        { ProductId: 1, ProductName: "Phone", Price: 20 },
        { ProductId: 2, ProductName: "Towel", Price: 30 },
        { ProductId: 3, ProductName: "Clothes", Price: 50 },
    ]);
});
app.get("/api/products/:ProductId", (request, response) => {
  console.log(request.params);
});

app.post('/api/user', (request, response) => {
    console.log(request.body)
    return response.send(200)
})

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`)
}
    
)