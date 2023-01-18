import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { SignupPage } from '@/pages/Signup'
import { userEvent, within } from '@storybook/testing-library'

export default { component: SignupPage } as ComponentMeta<typeof SignupPage>

export const Success: ComponentStoryObj<typeof SignupPage> = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const nameInput = canvas.getByTestId('name')
        const emailInput = canvas.getByTestId('email')
        const passwordInput = canvas.getByTestId('password')
        await userEvent.type(nameInput, 'John Doe', {
            delay: 50,
        })
        await userEvent.type(emailInput, 'test@example.com', {
            delay: 50,
        })
        await userEvent.type(passwordInput, 'password', {
            delay: 50,
        })
        await userEvent.click(canvas.getByRole('button'))
    },
}

export const Failed: ComponentStoryObj<typeof SignupPage> = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const nameInput = canvas.getByTestId('name')
        const emailInput = canvas.getByTestId('email')
        const passwordInput = canvas.getByTestId('password')
        await userEvent.type(nameInput, 'John Doe', {
            delay: 50,
        })
        await userEvent.type(emailInput, 'test@example.com', {
            delay: 50,
        })
        await userEvent.type(passwordInput, 'password', {
            delay: 50,
        })
        await userEvent.clear(nameInput)
        await userEvent.clear(emailInput)
        await userEvent.clear(passwordInput)
        await userEvent.click(canvas.getByRole('button'))
    },
}
