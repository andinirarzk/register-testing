import { browser, $, expect } from '@wdio/globals'
import Page from '../pageobjects/page.js'
import { describe } from 'mocha'

const page = new Page()

describe('001 - FITUR REGISTRASI', function(){
    it ('REG01 - registrasi dengan alamat email saja yang benar', async function () {
        await page.open()
        await $('[name="email"]').setValue('andinrizkii@gmail.com')
        await $('[name="password"]').setValue('coba123')
        await $('[name="postalCode"]').setValue('123')
        await $('[name="birthday"]').setValue('1924-05-03')

        let rButton = await $('[name="gender"]')
        await $('input[value="2"]')
        rButton.click()

        // const checkBox = await $('i[name="agreement"]');
        // await checkBox.isSelected()

        await $('button[data-test="daftar-button"]').click()

        const errorMsg = await $('[data-test="error"]')
		expect(errorMsg).toHaveTextContaining('Harap pastikan untuk cek di bawah ini.')

        await browser.pause(2000)
    })

    it ('REG02 - registrasi dengan alamat email dan password saja yang benar', async function () {
        await page.open()
        await $('[name="email"]').setValue('andinrizkii@gmail.com')
        await $('[name="password"]').setValue('cobacoba123')
        await $('[name="postalCode"]').setValue('123')
        await $('[name="birthday"]').setValue('1999-05-03')

        let rButton = await $('[name="gender"]')
        await $('input[value="2"]')
        rButton.click()

        // const checkBox = await $('i[name="agreement"]');
        // await checkBox.isSelected()

        await $('button[data-test="daftar-button"]').click()

        const errorMsg = await $('[data-test="error"]')
		expect(errorMsg).toHaveTextContaining('Harap pastikan untuk cek di bawah ini.')


        await browser.pause(2000)
    })

    it ('REG03 - registrasi dengan alamat email, password, dan kode pos saja yang benar', async function () {
        await page.open()
        await $('[name="email"]').setValue('andinrizkii@gmail.com')
        await $('[name="password"]').setValue('cobacoba123')
        await $('[name="postalCode"]').setValue('40264')
        await $('[name="birthday"]').setValue('1999-05-03')

        let rButton = await $('[name="gender"]')
        await $('input[value="2"]')
        rButton.click()

        // const checkBox = await $('i[name="agreement"]');
        // await checkBox.isSelected()

        await $('button[data-test="daftar-button"]').click()

        const errorMsg = await $('[data-test="error"]')
		expect(errorMsg).toHaveTextContaining('Harap pastikan untuk cek di bawah ini.')

        await browser.pause(2000)
    })

})


