import Invoice from "../models/Invoice.js";
// import User from "../models/User.js"

export const getInvoices = async (req, res) => {
    const invoices = await Invoice.find()
    res.render("invoices.ejs", {getInvoices: invoices});
  }


//* CREATE
export const createInvoice = async (req, res) => {
    const newInvoice = new Invoice({
        ownStreet: req.body.ownStreet,
        ownCity: req.body.ownCity,
        ownPostal: req.body.ownPostal,
        ownCountry: req.body.ownCountry,
        clientName: req.body.clientName,
        clientEmail: req.body.clientEmail,
        street: req.body.street,
        city: req.body.city,
        postal: req.body.postal,
        country: req.body.country,
        terms: req.body.terms,
        dueDate: req.body.dueDate
    })
    try {
        await newInvoice.save();
        console.log('new invoice has been saved');
            console.log(newInvoice)
            res.redirect('/invoices')

        // const post = await ; // gets all invoices, including the newly create invoice.
    } catch (err) {
        if (err) return res.status(500).send(err)
            res.redirect('/invoices')
    }
}


// ignore code below for now
/*
//* READ
export const  = async (req, res) => {
    try {
       
    } catch (err) {
        
    }
}

export const getUserPosts = async (req, res) => {
    try {
        const { userId } = req.params; 
        const post = await Post.find({ userId }); 
        res.status(200).json(post)
    } catch (err) {
        
    }
}

//* UPDATE
export const likePost = async (req, res) => {
    try {
        const { id } = req.params; 
        const { userId } = req.body; 
        const post = await Post.find({ id });
        const isLiked = post.likes.get(userId); 

        if (isLiked) {
            post.likes.delete(userId)
        } else {
            post.likes.set(userId, true)
        }

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { likes: post.likes },
            { new: true }
        )
        
        res.status(200).json(updatedPost)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

*/
