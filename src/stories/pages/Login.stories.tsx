import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { LoginPage } from '../../pages/Login'

export default { component: LoginPage } as ComponentMeta<typeof LoginPage>

export const Default: ComponentStoryObj<typeof LoginPage> = {}
