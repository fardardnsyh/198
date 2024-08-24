import mongoose from "mongoose";

const InvoiceSchema = new mongoose.Schema(
    {
        ownStreet: {
            type: String,
            required: true
        },
        ownCity: {
            type: String,
            required: true
        },
        ownPostal: {
            type: Number,
            required: true
        },
        ownCountry: {
            type: String,
            required: true
        },
        clientName: {
            type: String,
            required: true
        },
        clientEmail: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        postal: {
            type: Number,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        issueDate: {
            type: Date,
            default: Date.now
        },
        terms: {
            type: String,
            required: true
        },
        dueDate: {
            type: Date,
            required: true
        }
    },
)

const Invoice = mongoose.model("Invoice", InvoiceSchema);

export default Invoice;