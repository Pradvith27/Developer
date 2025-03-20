import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client'
const prismaClient = new PrismaClient();

/*await prismaClient.contact.createMany({
  data: [
    {
      id: '1',
      name: 'def',
      phonenumber: '1234567890',
    },
    {
      id: '2',
      name: 'abc',
      phonenumber: '1234573454',
    },
  ],
});*/


const hono = new Hono();

hono.get("/contacts", async (context) => {
  const contact = await prismaClient.contact.findMany();

  return context.json(
    {
      contact,
    },
    200
  );
});

hono.post("/contacts", async (context) => {
  const { id, name, phonenumber } = await context.req.json();

  const contact = await prismaClient.contact.create({
    data: {
      id,
      name,
      phonenumber,
    },
  });

  return context.json(
    {
      contact,
    },
    201
  );
});

hono.patch("/contacts/:id", async (context) => {
  const { id } = context.req.param();
  const { name, phonenumber } = await context.req.json();

  const contact = await prismaClient.contact.update({
    where: {
      id,
    },
    data: {
      name,
      phonenumber,
    },
  });

  return context.json(
    {
      contact,
    },
    200
  );
});

hono.delete("/contacts/:id", async (context) => {
  const { id } = context.req.param();

  const existingContact = await prismaClient.contact.findUnique({
    where: {
      id,
    },
  });

  if (existingContact) {
    await prismaClient.contact.delete({
      where: {
        id,
      },
    });

    return context.json(
      {
        contact: existingContact,
      },
      200
    );
  } else {
    return context.notFound();
  }
});

serve(hono);
  console.log('Server is running on http://localhost:3000');

