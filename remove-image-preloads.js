import fs from 'fs'
import path from 'path'

/**
 * Recursively get all .html files in a directory
 */
function getHtmlFiles (dir) {
  const files = fs.readdirSync(dir)
  let htmlFiles = []

  for (const file of files) {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      htmlFiles = htmlFiles.concat(getHtmlFiles(fullPath))
    } else if (fullPath.endsWith('.html')) {
      htmlFiles.push(fullPath)
    }
  }

  return htmlFiles
}

/**
 * Remove <link rel="preload" as="image" ...> from HTML files
 */
function removeImagePreloads (distDir) {
  const htmlFiles = getHtmlFiles(distDir)

  for (const file of htmlFiles) {
    let content = fs.readFileSync(file, 'utf-8')

    const updated = content.replace(
      /<link[^>]*rel=["']preload["'][^>]*as=["']image["'][^>]*>/gi,
      ''
    )

    fs.writeFileSync(file, updated, 'utf-8')
    console.log(`✔ Cleaned preload tags in: ${file}`)
  }

  const now = new Date()
  console.log(
    `✅ Astro build finished at: ${now.toLocaleTimeString()} on ${now.toDateString()}`
  )
}

// Run it after Astro build
const distPath = path.resolve('dist') // adjust if your output dir differs
removeImagePreloads(distPath)
