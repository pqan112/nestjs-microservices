import { Injectable, NotFoundException } from '@nestjs/common'
import path from 'path'
import fs from 'fs'
import ejs from 'ejs'
import puppeteer from 'puppeteer'

@Injectable()
export class PdfService {
  renderEjsTemplate(templatePath: string, data: Record<string, unknown>): Promise<string> {
    const fullPath = path.resolve(templatePath)
    if (!fs.existsSync(fullPath)) {
      throw new NotFoundException(`Template not found: ${fullPath}`)
    }

    return ejs.renderFile(fullPath, data)
  }

  async generatePdfFromHtml(html: string): Promise<Uint8Array> {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })

    try {
      const page = await browser.newPage()
      await page.setContent(html, { waitUntil: 'load' })
      return await page.pdf({ format: 'A4', printBackground: true })
    } finally {
      await browser.close()
    }
  }

  async generatePdfFromEjs(templatePath: string, data: Record<string, unknown>) {
    const html = await this.renderEjsTemplate(templatePath, data)
    return this.generatePdfFromHtml(html)
  }
}
