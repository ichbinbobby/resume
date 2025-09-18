import puppeteer from 'puppeteer'

export default defineEventHandler(async (event) => {
  try {
    // Get the request body
    const body = await readBody(event)
    const colorMode = body?.colorMode || 'light'
    
    // Get the current host from the request
    const host = getHeader(event, 'host') || 'localhost:3000'
    const protocol = getHeader(event, 'x-forwarded-proto') || 'http'
    const url = `${protocol}://${host}`

    console.log('Generating PDF for:', url, 'with color mode:', colorMode)

    // Launch Puppeteer with Vercel-compatible settings
    const browser = await puppeteer.launch({
      headless: true,
      executablePath: process.env.VERCEL ? '/usr/bin/google-chrome-stable' : undefined,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu',
        '--single-process',
        '--disable-web-security'
      ]
    })

    const page = await browser.newPage()

    // Set viewport for consistent rendering
    await page.setViewport({
      width: 1200,
      height: 800,
      deviceScaleFactor: 2
    })

    // Navigate to the resume page
    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 30000
    })

    // Set color mode preference in localStorage
    await page.evaluate((mode) => {
      localStorage.setItem('nuxt-color-mode', mode)
    }, colorMode)

    // Reload the page to apply the color mode
    await page.reload({
      waitUntil: 'networkidle0'
    })

    // Wait for fonts, icons and color mode to load
    await new Promise(resolve => setTimeout(resolve, 3000))

    // Generate PDF with zero margins for full bleed
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0mm',
        bottom: '0mm',
        left: '0mm',
        right: '0mm'
      },
      preferCSSPageSize: false,
      displayHeaderFooter: false
    })

    await browser.close()

    // Set response headers
    setHeader(event, 'Content-Type', 'application/pdf')
    setHeader(event, 'Content-Disposition', 'attachment; filename="resume.pdf"')
    setHeader(event, 'Content-Length', pdf.length.toString())

    return pdf

  } catch (error) {
    console.error('PDF generation error:', error)
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to generate PDF: ' + error.message
    })
  }
})