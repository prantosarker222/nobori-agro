// Vercel Serverless Function for Nobori Agro Batch Pre-Orders & Inquiries
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
            const name = body.name || "Valued Patron";
            const contact = body.phone || body.contact || "N/A";
            const address = body.address || "N/A";
            const batch = body.batch || "NB-2026-08";
            const items = body.items || [];
            const scope = body.scope || "Nobori Agro Batch Pre-Order";
            const order_id = body.orderId || `NB-${Date.now().toString().slice(-6)}`;

            console.log(`[NOBORI AGRO PRE-ORDER] Order #${order_id} | ${name} (${contact}) | Batch: ${batch} | Items: ${items.length}`);

            return res.status(200).json({
                success: true,
                message: "Batch pre-order slot successfully secured on Nobori Agro headless API!",
                order_id: order_id,
                batch: batch,
                status: "Queued for Nitrogen Sealed Dispatch",
                lead: { name, contact, address, scope, items_count: items.length }
            });
        } catch (error) {
            return res.status(500).json({ success: false, error: error.message });
        }
    }

    return res.status(200).json({ 
        status: "active",
        service: "Nobori Agro Headless WooCommerce Store API",
        version: "2.4.0",
        purity_standard: "100% Raw Botanical Purity (<4% Solar Moisture)"
    });
};
