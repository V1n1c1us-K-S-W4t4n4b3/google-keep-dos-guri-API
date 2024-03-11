import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const newNote = await prisma.note.create({
    data: {
      title: 'Osinachi Kalu',
      content: 'sinach@sinachmusic.com',
    },
  })
  
  console.log('Created new note: ', newNote)

  const allNotes = await prisma.note.findMany()
  console.log('All notes: ')
  console.dir(allNotes, { depth: null })
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())

//!  put a dollar-sign between "." and "disconnect"