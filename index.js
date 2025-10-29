import express from 'express';
const app=express();
const PORT=3000;

app.use(express.json());

let bookings=[];
let nextId=1;

app.get('/api/bookings',(req,res)=>{
    res.json(bookings);
});

app.post('/api/bookings',(req,res)=>{
    const{name,email,event}=req.body;
    if(!name||!email||!event){
        return res.status(400).json({message:'Name,email and events are required!'});
    }
    const newBooking={
        id: nextId++,
        name,
        email,
        event,
    };
    bookings.push(newBooking);
    res.status(201).json({ message: "Booking created successfully!", booking: newBooking });
});

app.get("/api/bookings/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const booking = bookings.find((b) => b.id === id);

  if (!booking) {
    return res.status(404).json({ message: "Booking not found." });
  }
  const{name,email,event}=booking;
  res.json(booking);
});

app.put("/api/bookings/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const booking = bookings.find((b) => b.id === id);

  if (!booking) {
    return res.status(404).json({ message: "Booking not found." });
  }

  const { name, email, event } = req.body;
  if (name) booking.name = name;
  if (email) booking.email = email;
  if (event) booking.event = event;

  res.json({ message: "Booking updated successfully!", booking });
});

app.delete("/api/bookings/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = bookings.findIndex((b) => b.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Booking not found." });
  }

  bookings.splice(index, 1);
  res.json({ message: "Booking cancelled successfully!" });
});


app.listen(PORT, () => {
  console.log(`🚀 Synergia API running at http://localhost:${PORT}`);
});
