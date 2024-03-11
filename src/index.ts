import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()
app.use(express.json())

//* 1. Obter todas as Notas.
app.get('/notes', async (req, res) => {
    const notes = await prisma.note.findMany()
    res.json({
        success: true,
        payload: notes,
    })
})

//* 2. Obter detalhes de uma unica nota.
app.get(`/note/:id`, async (req, res) => {
    const { id } = req.params
    const note = await prisma.note.findFirst({
        where: { id: id },
    })
    res.json({
        success: true,
        payload: note,
    })
})

//* 3. Criar nova nota.
app.post(`/note`, async (req, res) => {
    const result = await prisma.note.create({
        data: { ...req.body },
    })
    res.json({
        success: true,
        payload: result,
    })
})

//* 4. Atualizar nota.
app.put('/note/:id', async (req, res) => {
    const { id } = req.params
    const note = await prisma.note.update({
        where: { id: id },
        data: { ...req.body },
    })
    res.json({
        success: true,
        payload: note,
    })
})

//* 5. Deletar nota.
app.delete(`/note/:id`, async (req, res) => {
    const { id } = req.params
    const note = await prisma.note.delete({
        where: { id: id },
    })
    res.json({
        success: true,
        payload: note,
    })
})
app.use((req, res, next) => {
    res.status(404);
    return res.json({
        success: false,
        payload: null,
        message: `API SAYS: Endpoint not found for path:${req.path}`,
    });
});

// #6
app.listen(3000, () =>
    console.log('REST API server ready at: http://localhost:3000'),
)