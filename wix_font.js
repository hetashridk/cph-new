const https = require('https');

https.get('https://itscrosslinks.wixsite.com/crosslinksai', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Find Google Fonts or other font imports
    const links = data.match(/<link[^>]+href=["'][^"']*fonts[^"']*["']/gi);
    console.log("Font Links:", links);
    
    // Find inline font-family declarations
    const fontFamilies = data.match(/font-family[^;}]+/gi);
    if (fontFamilies) {
        console.log("Font Families found in source:");
        const uniqueFonts = [...new Set(fontFamilies)];
        console.log(uniqueFonts.slice(0, 10)); // just print first few
    } else {
        console.log("No font families found in source.");
    }
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
