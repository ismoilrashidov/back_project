const express = require("express");
const dotenv = require("dotenv");
const { sequelize } = require("./models");
const langRoute = require("./routes/lang.route");
const event_typeRoute = require("./routes/event_type.route");
const human_categoryRoute = require("./routes/human_category.route");
const venue_photoRoute = require("./routes/venue_photo.route");
const venue_venuetypeRoute = require("./routes/venue_venuetype.route");
const venue_typeRoute = require("./routes/venue_type.route");
const regionRoute = require("./routes/region.route");
const venueRoute = require("./routes/venue.route");
const districtRoute = require("./routes/district.route");
const eventRoute = require("./routes/event.route");
const seatRoute = require("./routes/seat.route");
const seat_typeRoute = require("./routes/seat_type.route");
const ticket_statusRoute = require("./routes/ticket_status.route");
const ticketRoute = require("./routes/ticket.route");
const customerRoute = require("./routes/customer.route");
const customer_addressRoute = require("./routes/customer_address.route");
const cart_itemRoute = require("./routes/cart_item.route");
const cartRoute = require("./routes/cart.route");
const customer_cardRoute = require("./routes/customer_card.route");
const adminRoute = require("./routes/admin.route");
const bookingRoute = require("./routes/booking.route");
const payment_methodRoute = require("./routes/payment_method.route");
const delivery_methodRoute = require("./routes/delivery_method.route");
const countryRoute = require("./routes/country.route");
const discountRoute = require("./routes/discount.route");
const flatRoute = require("./routes/flat.route");
const genderRoute = require("./routes/gender.route");
const sectorRoute = require("./routes/sector.route");
const statusRoute = require("./routes/status.route");
const ticket_typeRoute = require("./routes/ticket_type.route");
const setupSwagger = require("./swagger/swagger");
const cors = require("cors");
dotenv.config();

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);

app.use("/api", langRoute);
app.use("/api", event_typeRoute);
app.use("/api", human_categoryRoute);
app.use("/api", venue_photoRoute);
app.use("/api", venue_venuetypeRoute);
app.use("/api", venue_typeRoute);
app.use("/api", regionRoute);
app.use("/api", venueRoute);
app.use("/api", districtRoute);
app.use("/api", eventRoute);
app.use("/api", seatRoute);
app.use("/api", seat_typeRoute);
app.use("/api", ticket_statusRoute);
app.use("/api", ticketRoute);
app.use("/api", customerRoute);
app.use("/api", customer_addressRoute);
app.use("/api", cart_itemRoute);
app.use("/api", cartRoute);
app.use("/api", customer_cardRoute);
app.use("/api", adminRoute);
app.use("/api", bookingRoute);
app.use("/api", payment_methodRoute);
app.use("/api", delivery_methodRoute);
app.use("/api", countryRoute);
app.use("/api", discountRoute);
app.use("/api", flatRoute);
app.use("/api", genderRoute);
app.use("/api", sectorRoute);
app.use("/api", statusRoute);
app.use("/api", ticket_typeRoute);
setupSwagger(app);

const PORT = process.env.PORT || 965;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});