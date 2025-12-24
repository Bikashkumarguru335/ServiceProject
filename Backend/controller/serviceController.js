const Item = require('../models/service');
Item.createIndexes().then(() => console.log("Index Created Successfully!")).catch(console.error);

module.exports.searching = async (req, res) => {
    try {
        const query = req.query.q;

        if (!query) return res.json([]);

        console.log("Searching for (Text Index):", query);

        // ✅ STEP 2: Use $text operator
        // No $regex, No $or, No aggregation pipeline.
        // It automatically looks into the fields we indexed in the Schema.
        const results = await Item.find({
            $text: {
                $search: query
            }
        })
            .limit(10); // Limit results

        res.json(results);

    } catch (error) {
        console.error("Search Error:", error);
        res.status(500).json({ message: "Search failed" });
    }
};
// module.exports.searching = async (req, res) => {
//     try {
//         const query = req.query.q;
//         console.log("query", query);
//         if (!query) return res.json([]);

//         // AGGREGATION PIPELINE (The advanced way to search)
//         const results = await Item.aggregate([
//             {
//                 $search: {
//                     index: "default", // You create this index in MongoDB Atlas Dashboard
//                     compound: {
//                         should: [
//                             {
//                                 autocomplete: {
//                                     query: query,
//                                     path: "name",
//                                     fuzzy: { maxEdits: 1 } // Allows 1 typo (e.g. "Plumbr")
//                                 }
//                             },
//                             {
//                                 text: {
//                                     query: query,
//                                     path: "description"
//                                 }
//                             },
//                             {
//                                 // Search inside the dynamic 'attributes' object!
//                                 text: {
//                                     query: query,
//                                     path: "attributes.brand"
//                                 }
//                             }
//                         ]
//                     }
//                 }
//             },
//             {
//                 $limit: 10 // Only return top 10 relevant results
//             },
//             {
//                 $project: {
//                     name: 1,
//                     category: 1,
//                     price: 1,
//                     score: { $meta: "searchScore" } // See how well it matched
//                 }
//             }
//         ]);
//         console.log(results);
//         res.json(results);

//     } catch (error) {
//         console.error("Search Error:", error);
//         res.status(500).json({ message: "Search failed" });
//     }
// };

// module.exports = router;