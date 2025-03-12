import { serve } from '@hono/node-server';
import { Hono } from 'hono';
const app = new Hono();
const reminders: string[] = [];
const numbers: number[] = [];
app.get('/health', (c) => {
  return c.json({ message: 'Hello World' }, 200);
});
app.get('/reminders', (context) => {
  return context.json({ reminders }, 200);
});
app.post('/reminders', async (context) => {
  const body: { reminder: string } = await context.req.json();
  reminders.push(body.reminder);
  return context.json(reminders, 201);
});
app.get('/current-time', (context) => {
  const currentTime: string = new Date().toISOString();
  return context.json({ currentTime }, 200);
});
app.get('/environment', (context) => {
  const nodeVersion: string = process.version;
  const platform: string = process.platform;
  return context.json({ nodeVersion, platform }, 200);
});
app.get('/generate', (context) => {
  const randomNumber: number = Math.floor(Math.random() * 1000);
  return context.json({ randomNumber }, 200);
});
app.get('/puppet', (context) => {
  const params = context.req.query();
  return context.json(params, 200);
});
app.get('/number', (context) => {
  console.log("Returning all stored numbers:", numbers);
  return context.json({ allNumbers: [...numbers] }, 200);
});
app.post('/number', async (context) => {
  const body: { number: number } = await context.req.json();
  numbers.push(body.number);
  console.log("Number added:", body.number, "Updated list:", numbers);
  return context.json({ currentNumber: body.number }, 200);
});
serve(app);