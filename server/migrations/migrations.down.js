var Color = require('../models/color').Color;

Color.remove((err, result) => {
    if (err)
        console.log(`Error via remove: ${err}`);
    
    console.log('[OK]: Successfully removed');
});
