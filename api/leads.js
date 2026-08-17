// Vercel Serverless Function for Nobori Agro Fresh Poultry Orders & Delivery Inquiries
module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method === 'POST') {
        try {
            const body = req.body || {};
            const name = body.name || "Customer";
            const contact = body.phone || body.contact || "N/A";
            const address = body.address || "N/A";
            const area = body.area || "Dhaka Metro";
            const products = body.products || "Fresh Poultry Items";
            const payment = body.payment || "Cash on Delivery";
            const notes = body.notes || "";
            const order_id = `NA-${Date.now().toString().slice(-6)}`;

            console.log(`[NOBORI AGRO ORDER] #${order_id} | ${name} (${contact}) | Area: ${area} | Products: ${products}`);

            return res.status(200).json({
                success: true,
                message: "Order received! Our cold-chain dispatch desk will call you shortly to confirm delivery.",
                order_id: order_id,
                delivery_status: "Processing Chilled Cold-Chain Dispatch",
                lead: { name, contact, area, address, products, payment, notes }
            });
        } catch (error) {
            return res.status(500).json({ success: false, error: error.message });
        }
    }

    return res.status(200).json({ 
        status: "active",
        service: "Nobori Agro Fresh Groceries & Cuts API",
        version: "3.0.0",
        standard: "100% Premium Quality & 0-4°C Cold Chain Packaging"
    });
};
